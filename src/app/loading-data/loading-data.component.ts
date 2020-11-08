import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherModel } from '../models/teacher-model/teacher-model';
import { TeacherService } from '../services/teacher-service/teacher.service';
import { Constants } from '../shared/utils/constants';

@Component({
  selector: 'app-loading-data',
  templateUrl: './loading-data.component.html',
  styleUrls: ['./loading-data.component.scss']
})
export class LoadingDataComponent implements OnInit {

  loading:boolean;
  role:string = localStorage.getItem('userRole');
  userId:string = localStorage.getItem('userId');

  constructor(private teacherService:TeacherService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.setRoleData();
    this.navigateTo();
  }

  private async setRoleData(){
    if(this.role.toUpperCase() == Constants.TEACHER){
      await this.setTeacherData();
    }
  }

  private async setTeacherData(){
    let succeded = await this.teacherService.setTeacherData(this.userId);

    if(succeded){
      this.loading = false;
    }else{
      this.router.navigate(["/login"]);
    }
  }   

  private async navigateTo(){
    if(this.route.snapshot.url.length == 0)
      this.router.navigate(['teacher/control-painel'])
  }
}
