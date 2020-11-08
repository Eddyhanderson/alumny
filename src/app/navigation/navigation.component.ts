import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolModel } from '../models/school-model/school.model';
import { UserModel } from '../models/user-model/user-model';
import { TeacherSchoolsService } from '../services/teacher-schools-service/teacher-schools.service';
import { SchoolService } from '../services/school-service/school.service';
import { Constants } from '../shared/utils/constants';
import { TeacherService } from '../services/teacher-service/teacher.service';
import { TeacherModel } from '../models/teacher-model/teacher-model';
import { TeacherSchoolsModel } from '../models/teacher-schools-model/teacher-schools.model';
import { AccountService } from '../services/account-service/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  user: UserModel;
  role:string;

  // Models  if teacher
  teacher: TeacherModel;
  schools: SchoolModel[];

  // Models if manager

  constructor(private tsService: TeacherSchoolsService, 
    private teacherService: TeacherService,
    private accountService:AccountService) { }

  ngOnInit(): void {

    this.getUser();
    this.getRole();
    this.getRoleData();
  }

  private getUser() {    
    this.user = JSON.parse(localStorage['user']);        
  }

  private getRole(){
    this.role = localStorage.getItem('userRole');
  }

  getRoleData() {
    if (this.role.toUpperCase() === Constants.TEACHER.toUpperCase()) {
      this.getTeacherData();
    }
  }

  private async getTeacherData() {
    this.teacher = JSON.parse(localStorage['teacher']);        

    this.getTeacherSchools();
  }  

  private async getTeacherSchools() {
    let teacherSchools = await this.tsService.getAllNormalTeacherSchoolByTeacher(this.teacher.id);

    teacherSchools.forEach(ts => {
      this.schools.push(ts.school);
    })
  }

}
