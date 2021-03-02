import { SelectionModel } from '@angular/cdk/collections';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleLessonCreationComponent } from 'src/app/dialogs/lesson/article/create/article-lesson-creation/article-lesson-creation.component';
import { ArticleQuery } from 'src/app/interfaces/article-query/article.query';
import { DisciplineTopicQuery } from 'src/app/interfaces/discipline-topic-query/discipline-topic.query';
import { LessonQuery } from 'src/app/interfaces/lesson-query/lesson.query';
import { PaginationQuery } from 'src/app/interfaces/pagination-query/pagination-query';
import { SchoolQuery } from 'src/app/interfaces/school-query/school.query';
import { TeacherPlaceQuery } from 'src/app/interfaces/teacher-place-query/teacher-places.query';
import { ArticleModel } from 'src/app/models/article-model/article.model';
import { DisciplineTopicModel } from 'src/app/models/discipline-topic-model/discipline-topic.model';
import { LessonModel } from 'src/app/models/lesson-model/lesson.model';
import { PageResponse } from 'src/app/models/page-response/page-response';
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { ArticleService } from 'src/app/services/article-service/article.service';
import { DisciplineTopicService } from 'src/app/services/discipline-topic-service/discipline-topic.service';
import { LessonService } from 'src/app/services/lesson-service/lesson.service';
import { SchoolService } from 'src/app/services/school-service/school.service';
import { TeacherPlaceService } from 'src/app/services/teacher-place-service/teacher-place.service';
import { TablePaginationAdapter } from 'src/app/shared/utils/table-pagination-adapter/table-pagination-adapter';

@Component({
  selector: 'app-lesson-managment',
  templateUrl: './lesson-managment.component.html',
  styleUrls: ['./lesson-managment.component.scss']
})
export class LessonManagmentComponent implements OnInit {

  constructor(
    private as: ArticleService,
    private matDialog: MatDialog,
    private bottomSheet: MatBottomSheetRef,
    private route: ActivatedRoute,
    private ls: LessonService,
    private ss: SchoolService,
    private tps: TeacherPlaceService,
    private dts: DisciplineTopicService) { }

  // view variables
  schoolFilterOpened: boolean = false;
  teacherPlaceFilterOpened: boolean = false;
  disciplineTopicFilterOpened: boolean = false;
  draftMode: boolean;

  teacherPlaceId: string;
  disciplineTopicId: string;
  schoolId: string;

  // Models
  teacher: TeacherModel;
  schools$: Observable<SchoolModel[]>;
  teacherPlaces$: Observable<TeacherPlaceModel[]>;
  disciplineTopics$: Observable<DisciplineTopicModel[]>;

  data: TablePaginationAdapter<LessonModel, LessonQuery>;
  draftData: TablePaginationAdapter<ArticleModel, ArticleQuery>;

  displayedColumns: string[] = ["lesson", "school", "place", "topic", "type", "date", "views"];
  draftColumns: string[] = ["draft", "name", "changeAt", "action"];

  selection: SelectionModel<LessonModel> = new SelectionModel<LessonModel>(true);  

  ngOnInit(): void {
    this.initTeacherData();
    this.checkDraftMode();
    this.draftMode ? this.getDrafts() : this.initDataSource();
  }

  public onSchoolFilterOpened() {
    this.schoolFilterOpened = true;
    this.teacherPlaceFilterOpened = false;
    this.disciplineTopicFilterOpened = false;

    let schoolQuery: SchoolQuery = {
      teacherId: this.teacher.id,
      subscribed: true
    }

    let page = new PaginationQuery();

    this.schools$ = this.ss.getAll(page, schoolQuery).pipe(map((response => response.data)));
  }

  public onTeacherPlaceFilterOpened() {
    this.teacherPlaceFilterOpened = true;
    this.schoolFilterOpened = false;
    this.disciplineTopicFilterOpened = false;

    let teacherPlaceQuery: TeacherPlaceQuery = {
      teacherId: this.teacher.id,
      schoolId: this.schoolId ?? ''
    }

    let page = new PaginationQuery();

    this.teacherPlaces$ = this.tps.getAll(page, teacherPlaceQuery).pipe(map((response => response.data)));
  }

  public onDisciplineTopicFilterOpened() {
    this.disciplineTopicFilterOpened = true;
    this.teacherPlaceFilterOpened = false;
    this.schoolFilterOpened = false;

    let disciplineTopicQuery = new DisciplineTopicQuery(this.teacherPlaceId, this.teacher.id, this.schoolId);

    let page = new PaginationQuery();

    this.disciplineTopics$ = this.dts.getAll(page, disciplineTopicQuery).pipe(map((response => response.data)));
  }

  public onSchoolFilterPicked(event: MatSelectionListChange) {
    this.schoolId = event.options[0].selected ? event.options[0].value : '';
    this.data.setParam = { schoolId: this.schoolId };
  }

  public onTeacherPlaceFilterPicked(event: MatSelectionListChange) {
    this.teacherPlaceId = event.options[0].selected ? event.options[0].value : '';
    this.disciplineTopicId = '';
    this.data.setParam = { teacherPlaceId: this.teacherPlaceId, schoolId: this.schoolId ?? '', disciplineTopicId: this.disciplineTopicId };
  }

  public onDisciplineTopicFilterPicked(event: MatSelectionListChange) {
    this.disciplineTopicId = event.options[0].selected ? event.options[0].value : '';
    this.data.setParam = { teacherPlaceId: this.teacherPlaceId ?? '', schoolId: this.schoolId ?? '', disciplineTopicId: this.disciplineTopicId };
  }

  public async isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.dataValue.data.length;
    return numRows == numSelected;
  }

  public async masterToggle() {
    await this.isAllSelected() ?
      this.selection.clear() :
      this.data.dataValue.data.forEach(lesson => {
        this.selection.select(lesson);
      });
  }

  public switchMode() {
    this.draftMode ? this.initDataSource() : this.getDrafts();
    this.draftMode = !this.draftMode;
  }

  public openArticleCreation(article: ArticleModel) {
    this.matDialog.open(ArticleLessonCreationComponent, {
      data: article, width: '70%',
      height: '70%'
    })
  }

  private initDataSource() {
    this.setParams();
    let initialLessonQuery: LessonQuery = {
      teacherPlaceId: this.teacherPlaceId ?? '',
      disciplineTopicId: this.disciplineTopicId ?? '',
      schoolId: this.schoolId ?? '',
      teacherId: this.teacher.id
    }

    this.data = new TablePaginationAdapter<LessonModel, LessonQuery>((query, param) => this.ls.getAll(query, param), initialLessonQuery);
  }

  private getDrafts() {
    let initialLessonQuery: ArticleQuery = {
      teacherId: this.teacher.id,
      draft: true
    }

    this.draftData = new TablePaginationAdapter<ArticleModel, ArticleQuery>((query, param) => this.as.getAll(query, param), initialLessonQuery);
  }

  private setParams() {
    this.schoolId = this.route.snapshot.queryParamMap.get('schoolId');
    this.teacherPlaceId = this.route.snapshot.queryParamMap.get('teacherPlaceId');
    this.disciplineTopicId = this.route.snapshot.queryParamMap.get('disciplineTopicId');
  }

  private checkDraftMode() {
    this.draftMode = this.route.snapshot.queryParamMap.get('draft') == '1';
  }

  private initTeacherData() {
    this.teacher = JSON.parse(localStorage.teacher);
  }

}


