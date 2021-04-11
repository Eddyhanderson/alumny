import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { DisciplineTopicQuery } from 'src/app/interfaces/discipline-topic-query/discipline-topic.query';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query';
import { TeacherPlaceGroup } from 'src/app/interfaces/teacher-place-group/teacher-place.group';
import { TeacherPlaceQuery } from 'src/app/interfaces/teacher-place-query/teacher-places.query';
import { ArticleModel } from 'src/app/models/article-model/article.model';
import { CourseModel } from 'src/app/models/course-model/course.model';
import { DisciplineTopicModel } from 'src/app/models/discipline-topic-model/discipline-topic.model';
import { LessonModel } from 'src/app/models/lesson-model/lesson.model';
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { DisciplineTopicService } from 'src/app/services/discipline-topic-service/discipline-topic.service';
import { ImageService } from 'src/app/services/image-service/image.service';
import { LessonService } from 'src/app/services/lesson-service/lesson.service';
import { TeacherPlaceService } from 'src/app/services/teacher-place-service/teacher-place.service';
import { DocumentLeave, PostTypes } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-article-lesson-creation',
  templateUrl: './article-lesson-creation.component.html',
  styleUrls: ['./article-lesson-creation.component.scss']
})
export class ArticleLessonCreationComponent implements OnInit {

  // To edit document
  close: boolean = false;
  editing: boolean = true;
  article: ArticleModel;

  // To present data
  public teacherPlacesGrouped: TeacherPlaceGroup[] = new Array<TeacherPlaceGroup>();

  // Models
  public teacher: TeacherModel;
  public disciplineTopic: DisciplineTopicModel;
  public teacherPlaces: TeacherPlaceModel[];
  public disciplineTopics$: Observable<DisciplineTopicModel[]>;
  public isPublic: boolean = true;
  public imgUrl: string;

  // Queries
  private tpQueryParams: TeacherPlaceQuery;
  private disciplineTopicQueryParams: DisciplineTopicQuery;

  // To handler video detail forms
  public titleCtl = new FormControl('', [Validators.required, Validators.maxLength(100)])
  public descriptionCtl = new FormControl('', Validators.required);
  public teacherPlaceCtl = new FormControl('', Validators.required);
  detailFg: FormGroup;

  // To handler discipline topic
  public disciplineTopicCtl: FormControl = new FormControl('', [Validators.required]);

  // To handler discipline topic of lesson selection
  public disciplineTopicsFiltered$: Observable<DisciplineTopicModel[]>;

  // Flags 
  submited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private tps: TeacherPlaceService,
    private ls: LessonService,
    private dts: DisciplineTopicService,
    private is: ImageService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ArticleLessonCreationComponent>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: ArticleModel
  ) { }

  ngOnInit(): void {

  }

  public async uploadImageEvt(event) {
    var file = event.target.files[0];

    if (file == null) return null;

    let response = await this.is.uploadImageLesson(file).toPromise();

    if (response?.data) {
      this.imgUrl = response.data;
      this.snackBar.open('Miniatura criada com sucesso')
    }
    else {
      this.sendErrorMessage();
    }
  }

  public stopEditing() {
    this.initForm();
    this.getTeacher();
    this.createTeacherPlaceQueryParam();
    this.getAllTeacherPlaces();
    this.disciplineTopicValueChanges();
    this.editing = false;
  }

  public disciplineTopicValueChanges() {
    this.disciplineTopicCtl.valueChanges.subscribe((value) => {
      let key;
      key = typeof value === 'string' ? value : value.name;
      this.disciplineTopicsFiltered$ = this.getAllDisciplineTopicFilter(key).pipe(map(response => response.data));
    })
  }

  public onVideoDetailComplete() {
    if (this.detailFg.valid) {
      this.getAllDisciplineTopic();
    }
  }

  public async onLessonCreate() {
    if (this.detailFg.valid) {
      this.submited = true;

      if (typeof this.disciplineTopicCtl.value === 'string') {
        let disciplineTopic: DisciplineTopicModel = {
          name: this.disciplineTopicCtl.value
        }

        let stt = await this.createDisciplineTopic(disciplineTopic);

        // TODO: Send some message to the user
        if (!stt.succeded) {
          this.sendErrorMessage();
          return null;
        }

        this.disciplineTopic = stt.data;
      } else {
        this.disciplineTopic = this.disciplineTopicCtl.value[0];
      }

      let lesson: LessonModel = {
        public: this.isPublic,
        backgroundPhotoPath: this.imgUrl,
        description: this.descriptionCtl.value,
        discpilineTopicId: this.disciplineTopic.id,
        teacherPlaceId: this.teacherPlaceCtl.value[0].id,
        title: this.titleCtl.value,
        articleId: this.article.id,
        lessonType: PostTypes.Article
      }

      let stt = await this.createLesson(lesson);

      if (stt.succeded) {
        let snackBarRef = this.snackBar.open('Parabéns! Aula publicada.');

        snackBarRef.afterDismissed().subscribe(() => this.router.navigate(["lesson/managment"], {
          queryParams: {
            'teacherPlaceId': this.teacherPlaceCtl.value[0].id,
            'disciplineTopicId': this.disciplineTopic.id
          }
        }));

        this.dialogRef.close(true);
      } else {
        this.dialogRef.close(false);
      }
    }
  }

  public displayFn(disciplineTopic: DisciplineTopicModel) {
    return disciplineTopic && disciplineTopic.name ? disciplineTopic.name : '';
  }

  private initForm() {
    this.detailFg = this.fb.group({
      title: this.titleCtl,
      description: this.descriptionCtl,
      teacherPlace: this.teacherPlaceCtl
    });
  }

  private getTeacher() {
    this.teacher = JSON.parse(localStorage.teacher);
  }

  private createTeacherPlaceQueryParam() {
    this.tpQueryParams = new TeacherPlaceQuery(this.teacher.id);
  }

  private async getAllTeacherPlaces() {
    let pQuery = new PaginationQuery(1, 100);
    this.teacherPlaces = (await this.tps.getAll(pQuery, this.tpQueryParams).toPromise()).data;

    this.groupTeacherPlace();
  }

  private groupTeacherPlace() {
    var schools = new Set(this.teacherPlaces.map(tp => tp.schoolId));
    var courses = new Set(this.teacherPlaces.map(tp => tp.courseId));

    for (let skey of schools) {
      let tpSchool = this.teacherPlaces.filter(tp => tp.schoolId == skey);

      if (tpSchool && tpSchool.length == 0) break;

      let school: SchoolModel = {
        id: tpSchool[0].id,
        name: tpSchool[0].schoolName,
        profilePhotoPath: tpSchool[0].schoolPictureProfilePath,
        shortName: tpSchool[0].schoolShortName
      };

      for (let ckey of courses) {
        let tpCourses = tpSchool.filter(tp => tp.courseId == ckey);

        if (tpCourses && tpCourses.length == 0) break;

        let course: CourseModel = { id: tpCourses[0].courseId, name: tpCourses[0].courseName };

        let i = this.teacherPlacesGrouped.findIndex(tpg => tpg.school.id == school.id);

        if (i >= 0) {
          this.teacherPlacesGrouped[i].courseTeacherPlaces.push({ course: course, teacherPlaces: tpCourses });
          break;
        }

        this.teacherPlacesGrouped.push({
          school: school,
          courseTeacherPlaces: [{ course: course, teacherPlaces: tpCourses }]
        })
      }
    }
  }

  private getAllDisciplineTopicFilter(value: string) {
    if (value == undefined || value == null)
      return null;

    let query = new PaginationQuery(1, 10, value);

    return this.dts.getAll(query);
  }

  private createDisciplineTopic(disciplineTopic: DisciplineTopicModel) {
    return this.dts.create(disciplineTopic);
  }

  private createLesson(lesson: LessonModel) {
    if (lesson == null || lesson == undefined) return null;

    return this.ls.create(lesson);
  }

  private getAllDisciplineTopic() {
    this.createDisciplineTopicQueryParam();
    let query = new PaginationQuery(1, 100);
    this.disciplineTopics$ = this.dts.getAll(query, this.disciplineTopicQueryParams).pipe(map((response) => response.data));
  }

  private createDisciplineTopicQueryParam() {
    if (this.teacherPlaceCtl.valid) {
      let teacherPlaceId = this.teacherPlaceCtl.value[0].id;
      this.disciplineTopicQueryParams = new DisciplineTopicQuery(teacherPlaceId)
    }
  }

  // Editing handlers  
  public onClose(action: DocumentLeave) {
    switch (action) {
      case DocumentLeave.Save: {
        this.draftRedirection();
        break;
      }
      case DocumentLeave.Discard:
      case DocumentLeave.Close: {
        this.dialogRef.close();
        break;
      }
      case DocumentLeave.Cancel: {
        this.close = false;
        break;
      }
      default: this.close = false;
    }
  }

  public getContent(article: ArticleModel) {
    console.dir(article);
    this.article = article;
  }

  private draftRedirection() {
    this.snackBar.open("Documento guardado como rascunho");
    this.router.navigate(['lesson', 'managment'], { queryParams: { draft: '1' } });
    this.dialogRef.close();
  }

  closeEditor() {
    if (this.editing) {
      this.close = true;
    } else {
      this.dialogRef.close;
      console.log('Entrei no close Ref');
    }
  }

  private sendErrorMessage() {
    this.snackBar.open('Algo correu mal. Tente novamente')
  }
}
