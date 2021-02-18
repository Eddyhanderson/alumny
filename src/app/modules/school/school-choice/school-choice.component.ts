import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { PaginationQuery } from '../../../interfaces/pagination-query/pagination-query';
import { PageResponse } from '../../../models/page-response/page-response';
import { Response } from '../../../models/response/response';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';

import { Routes } from 'src/app/shared/utils/routing-constants';
import { TeacherSchoolsModel } from '../../../models/teacher-schools-model/teacher-schools.model';
import { TeacherSchoolQuery } from '../../../interfaces/teacher-schools-query/teacher-school.query';
import { Observable } from 'rxjs';
import { PaginationAdapter } from 'src/app/shared/utils/pagination-adapter/pagination-adapter';
import { SchoolService } from 'src/app/services/school-service/school.service';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/shared/utils/constants';
import { TeacherSchoolsService } from 'src/app/services/teacher-schools-service/teacher-schools.service';
import { SchoolQuery } from 'src/app/interfaces/school-query/school.query';
import { SchoolModel } from 'src/app/models/school-model/school.model';

@Component({
  selector: 'app-school-choice',
  templateUrl: './school-choice.component.html',
  styleUrls: ['./school-choice.component.scss']
})
export class SchoolChoiceComponent implements OnInit {

  // Model data
  teacherId: string;
  teacherSchools$: PaginationAdapter<TeacherSchoolsModel, TeacherSchoolQuery>;
  teacherSchoolRequests$: PaginationAdapter<TeacherSchoolsModel, TeacherSchoolQuery>;
  unsubscribedSchools$: PaginationAdapter<SchoolModel, SchoolQuery>;

  constructor(private ss: SchoolService,
    private tss: TeacherSchoolsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeacherId();
    this.getAllTeacherSchools();
    this.getAllSchoolsRequested();
    this.getUnsubscribedSchools();
  }

  private getTeacherId() {
    this.route.paramMap.subscribe(param => { this.teacherId = param.get('id'); })
  }

  private getAllTeacherSchools() {

    let tsQuery: TeacherSchoolQuery = {
      teacherId: this.teacherId,
      situation: Constants.NORMAL_MODEL_STATE
    };

    this.teacherSchools$ = new PaginationAdapter((query, param) => this.tss.getAll(query, param), tsQuery);
  }

  private getAllSchoolsRequested() {
    let tsQuery: TeacherSchoolQuery = {
      teacherId: this.teacherId,
      situation: Constants.PENDING_MODEL_STATE
    };

    this.teacherSchoolRequests$ = new PaginationAdapter((query, param) => this.tss.getAll(query, param), tsQuery);
  }


  private getUnsubscribedSchools() {
    let sQuery: SchoolQuery = {
      teacherId: this.teacherId,
      subscribed: false
    };

    this.unsubscribedSchools$ = new PaginationAdapter((query, param) => this.ss.getAll(query, param), sQuery);
  }

  public sendTeacherSchoolRequest(schoolId: string) {

    if (schoolId == null) return null;

    let teacherSchool: TeacherSchoolsModel = {
      teacherId: this.teacherId,
      schoolId: schoolId
    };

    this.tss.create(teacherSchool);
  }
}
