import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseModel } from 'src/app/models/course-model/course.model';
import { ManagerModel } from 'src/app/models/manager-model/manager.model';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { TeacherSchoolsService } from 'src/app/services/teacher-schools-service/teacher-schools.service';
import {TeacherSchoolsModel} from '../../models/teacher-schools-model/teacher-schools.model';

@Component({
  selector: 'app-manager-school-home',
  templateUrl: './manager-school-home.component.html',
  styleUrls: ['./manager-school-home.component.scss']
})
export class ManagerSchoolHomeComponent implements OnInit {
  manager:ManagerModel;
  teacherSchools$:Observable<TeacherSchoolsModel[]>;
  courses$:Observable<CourseModel>;
  teachers$:Observable<TeacherModel[]>;

  constructor(private teacherSchoolService:TeacherSchoolsService) { }

  ngOnInit(): void {
    this.setManager();
    this.getTeacherSchoolsRequests();
  }

  private setManager(){
    this.manager = JSON.parse(localStorage.manager);
  }

  private getTeacherSchoolsRequests(){    
    let schoolId = this.manager.school.id;
    this.teacherSchools$ = this.teacherSchoolService.getAllPendingTeacherSchoolBySchool(schoolId);    
  }
  
  private getSchoolCourses(){
    //TODO: get all courses of school 
  }

  private getSchoolTeachers(){
    //TODO: get all teachers of school
  }

}
