import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PaginationQuery } from 'src/app/models/pagination-query/pagination-query';
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { TeacherSchoolsModel } from 'src/app/models/teacher-schools-model/teacher-schools.model';
import { TeacherSchoolSRequest, TeacherSchoolsService } from 'src/app/services/teacher-schools-service/teacher-schools.service';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-teacher-school',
  templateUrl: './teacher-school.component.html',
  styleUrls: ['./teacher-school.component.scss']
})
export class TeacherSchoolComponent implements OnInit {

  teacherId: string;
  teacherSchools$: Observable<TeacherSchoolsModel[]>;
  teacherSchoolRequests$: Observable<TeacherSchoolsModel[]>;
  schools$: Observable<SchoolModel[]>;
  paginationSchools: PaginationQuery;

  constructor(private teacherSchoolService: TeacherSchoolsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setQueryParam();
    this.getTeacherId();
    this.getAllTeacherSchools();
    this.getAllTeacherSchoolsRequests();
    this.getTeacherSchoolsNotContained();
  }

  private getTeacherId() {
    this.route.paramMap.subscribe(param => { this.teacherId = param.get('id'); })
  }

  private getAllTeacherSchools() {
    this.teacherSchools$ = this.teacherSchoolService.getAllNormalTeacherSchoolByTeacher(this.teacherId);
  }

  private getAllTeacherSchoolsRequests() {
    this.teacherSchoolRequests$ = this.teacherSchoolService.getAllPendingTeacherSchoolByTeacher(this.teacherId);
  }

  private getTeacherSchoolsNotContained() {    
    this.schools$ = this.teacherSchoolService.getAllNotContainedTeacherSchool(this.paginationSchools, this.teacherId);    
  }

  public sendTeacherSchoolRequest(schoolId:string){

    if(schoolId == null) return null;

    let teacherSchool:TeacherSchoolSRequest = {
      teacherId:this.teacherId,
      schoolId:schoolId
    };

    this.teacherSchoolService.create(teacherSchool);
  }

  private setQueryParam() {
    this.paginationSchools = {
      pageNumber: 1,
      pageSize: 12,
      role: Constants.TEACHER,
      searchValue:''
    };
  }

  private addPageQueryParam() {
    this.paginationSchools.pageNumber++;
  }

}

