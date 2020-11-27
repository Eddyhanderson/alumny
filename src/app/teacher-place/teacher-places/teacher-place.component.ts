import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { TeacherSchoolsService } from 'src/app/services/teacher-schools-service/teacher-schools.service';
import { TeacherPlaceService } from 'src/app/services/teacher-place-service/teacher-place.service';

import { TeacherPlaceModel } from '../../models/teacher-place-model/teacher-place.model';
import { TeacherSchoolsModel } from 'src/app/models/teacher-schools-model/teacher-schools.model';
import { SchoolModel } from 'src/app/models/school-model/school.model';

import { PaginationQuery } from '../../interfaces/pagination-query/pagination-query';
import { TeacherPlaceQuery } from 'src/app/interfaces/teacher-place-query/teacher-places.query';

@Component({
  selector: 'app-teacher-place',
  templateUrl: './teacher-place.component.html',
  styleUrls: ['./teacher-place.component.scss']
})
export class TeacherPlacesComponent implements OnInit {
  // Models
  teacher: TeacherModel;
  school: SchoolModel;
  academicYear: string;
  teacherSchools: TeacherSchoolsModel[];
  teacherPlaces$: Observable<TeacherPlaceModel[]>;

  teacherHaveSchool: boolean = false;

  constructor(private tss: TeacherSchoolsService, private tps: TeacherPlaceService) { }

  ngOnInit(): void {
    this.getTeaecher();
    this.verifierIfTeacherHaveSchool();
    if (this.teacherHaveSchool) {
      this.getAcademicYear();
      this.getAllTeacherSchools();
      this.getSelectedSchool();
      this.getAllTeacherPlaces();
    }
  }

  private getTeaecher() {
    this.teacher = JSON.parse(localStorage.teacher);
  }

  private getAcademicYear() {
    this.academicYear = this.academicYear ?? new Date().getFullYear().toString();
  }

  private async verifierIfTeacherHaveSchool() {
    this.teacherHaveSchool = await this.tss.checkTeacherHasSchool(this.teacher.id);
  }

  private async getAllTeacherSchools() {
    let teacherId = this.teacher.id;
    //this.teacherSchools = await this.tss.getAllNormalTeacherSchoolByTeacher(teacherId).toPromise();
  }

  private async getAllTeacherPlaces() {
    let params = this.getTeacherPlaceQuery();
    let query = this.getPaginationQuery();

    //this.teacherPlaces$ = this.tps.getAll(query, params);
  }

  private getSelectedSchool() {
    this.school = this.school ?? this.teacherSchools[0].school;
  }

  private getPaginationQuery() {
    let pagQuery: PaginationQuery = {
      pageNumber: 1,
      pageSize: 50,
      searchValue: ''
    };
    return pagQuery;
  }

  private getTeacherPlaceQuery() {
    let queryParams: TeacherPlaceQuery = {
      academicYear: new Date().getFullYear().toString(),
      schoolId: this.school.id,
      teacherId: this.teacher.id
    };
    return queryParams;
  }

}
