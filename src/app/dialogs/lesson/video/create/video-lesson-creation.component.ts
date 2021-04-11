import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { VideoModel } from 'src/app/models/video-model/video.model';
import { Response } from 'src/app/models/response/response';
import { VideoService } from '../../../../services/video-service/video.service';
import { VideoUploadSignalR } from '../../../../signalRServices/video-upload-signalR';
import { Observable } from 'rxjs';
import { MediaPlayer } from 'dashjs';
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { CourseModel } from 'src/app/models/course-model/course.model';
import { TeacherPlaceService } from 'src/app/services/teacher-place-service/teacher-place.service';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { TeacherPlaceQuery } from 'src/app/interfaces/teacher-place-query/teacher-places.query';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query'
import { LessonService } from 'src/app/services/lesson-service/lesson.service';
import { LessonQuery } from 'src/app/interfaces/lesson-query/lesson.query';
import { DisciplineTopicModel } from 'src/app/models/discipline-topic-model/discipline-topic.model';
import { LessonModel } from 'src/app/models/lesson-model/lesson.model';
import { map, startWith } from 'rxjs/operators';
import { DisciplineTopicService } from 'src/app/services/discipline-topic-service/discipline-topic.service';
import { PostTypes } from 'src/app/shared/utils/constants';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisciplineTopicQuery } from 'src/app/interfaces/discipline-topic-query/discipline-topic.query';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TeacherPlaceGroup } from 'src/app/interfaces/teacher-place-group/teacher-place.group';


@Component({
  selector: 'app-video-lesson-creation',
  templateUrl: './video-lesson-creation.component.html',
  styleUrls: ['./video-lesson-creation.component.scss']
})
export class VideoLessonCreationComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  // To present data
  public teacherPlacesGrouped: TeacherPlaceGroup[] = new Array<TeacherPlaceGroup>();

  public lessonsGrouped: [
    {
      disciplineTopic: DisciplineTopicModel,
      lessons: LessonModel[]
    }
  ]

  // Models
  public teacher: TeacherModel;
  public disciplineTopic: DisciplineTopicModel;
  public teacherPlaces: TeacherPlaceModel[];
  public disciplineTopics$: Observable<DisciplineTopicModel[]>;
  public isPublic: boolean = true;
  public video: VideoModel;

  // Queries
  private tpQueryParams: TeacherPlaceQuery;
  private disciplineTopicQueryParams: DisciplineTopicQuery;


  // To handler video upload 
  public progress: number = 0;
  public manifest: string;
  public thumbnail: string;

  // To handler video picker
  public videoCtl = new FormControl('', [Validators.required]);

  // To handler video detail forms
  public titleCtl: FormControl = new FormControl('', [Validators.required, Validators.maxLength(100)])
  public descriptionCtl: FormControl = new FormControl('', Validators.required);
  public teacherPlaceCtl: FormControl = new FormControl('', Validators.required);
  detailFg: FormGroup;

  // To handler discipline topic
  public disciplineTopicCtl: FormControl = new FormControl('', [Validators.required]);

  // To handler discipline topic of lesson selection
  public disciplineTopicsFiltered$: Observable<DisciplineTopicModel[]>;

  // To mark loading mode
  public loadingMode: boolean = false;

  // Flags 
  submited: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<VideoLessonCreationComponent>,
    private fb: FormBuilder,
    private vs: VideoService,
    private vus: VideoUploadSignalR,
    private tps: TeacherPlaceService,
    private ls: LessonService,
    private dts: DisciplineTopicService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
    this.initVideoDataObserver();
    this.getTeacher();
    this.createTeacherPlaceQueryParam();
    this.getAllTeacherPlaces();
    this.disciplineTopicValueChanges();
  }

  public uploadFileEvt(event) {
    var file = event.target.files[0];

    if (file == null) return null;

    this.stepper.next();

    this.loadingMode = true;

    this.vs.upload(file).subscribe(async (event: HttpEvent<Response<VideoModel>>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.progress = Math.round(((event.loaded * 100.0) / event.total) / 2.0);
          break;
        case HttpEventType.Response:
          this.video = event.body.data;
          await this.vus.onInit();
          await this.vus.videoUploadWatch(this.video);
          break;
      }
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
        if (!stt.succeded) return null;

        this.disciplineTopic = stt.data;
      } else {
        this.disciplineTopic = this.disciplineTopicCtl.value[0];
      }

      let lesson: LessonModel = {
        public: this.isPublic,
        backgroundPhotoPath: this.thumbnail,
        description: this.descriptionCtl.value,
        discpilineTopicId: this.disciplineTopic.id,
        teacherPlaceId: this.teacherPlaceCtl.value[0].id,
        title: this.titleCtl.value,
        videoId: this.video.id,
        lessonType: PostTypes.Video
      }

      console.dir(lesson);

      let stt = await this.createLesson(lesson);

      if (stt.succeded) {
        let snackBarRef = this.snackBar.open('Parabéns! Video-aula publicada.');

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

  private createDisciplineTopic(disciplineTopic: DisciplineTopicModel) {
    return this.dts.create(disciplineTopic);
  }

  private createLesson(lesson: LessonModel) {
    if (lesson == null || lesson == undefined) return null;

    return this.ls.create(lesson);
  }

  public disciplineTopicValueChanges() {

    this.disciplineTopicCtl.valueChanges.subscribe((value) => {
      let key;
      key = typeof value === 'string' ? value : value.name;
      this.disciplineTopicsFiltered$ = this.getAllDisciplineTopicFilter(key).pipe(map(response => response.data));
    })
  }

  private getTeacher() {
    this.teacher = JSON.parse(localStorage.teacher);
  }

  private createTeacherPlaceQueryParam() {
    this.tpQueryParams = new TeacherPlaceQuery(this.teacher.id);
  }

  private createDisciplineTopicQueryParam() {
    if (this.teacherPlaceCtl.valid) {
      let teacherPlaceId = this.teacherPlaceCtl.value[0].id;
      this.disciplineTopicQueryParams = new DisciplineTopicQuery(teacherPlaceId)
    }
  }

  private async getAllTeacherPlaces() {
    let pQuery = new PaginationQuery(1, 100);
    this.teacherPlaces = (await this.tps.getAll(pQuery, this.tpQueryParams).toPromise()).data;

    this.groupTeacherPlace();
  }

  private getAllDisciplineTopicFilter(value: string) {
    if (value == undefined || value == null)
      return null;

    let query = new PaginationQuery(1, 10, value);

    return this.dts.getAll(query);
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


  private initForm() {
    this.detailFg = this.fb.group({
      title: this.titleCtl,
      description: this.descriptionCtl,
      teacherPlace: this.teacherPlaceCtl
    });

  }

  private initVideoDataObserver() {
    // to get video compression progress
    this.vus.conversionProgress.subscribe((data) => {
      this.progress = data + 50;
    });

    // to get thumbnail location
    this.vus.thumbnail.subscribe((data) => {
      this.thumbnail = data;
    })

    // to get video manifest location
    this.vus.manifest.subscribe((data) => {
      this.progress = 100;
      this.manifest = data;
    })
  }

  private getAllDisciplineTopic() {
    this.createDisciplineTopicQueryParam();
    let query = new PaginationQuery(1, 100);
    this.disciplineTopics$ = this.dts.getAll(query, this.disciplineTopicQueryParams).pipe(map((response) => response.data));
  }
}
