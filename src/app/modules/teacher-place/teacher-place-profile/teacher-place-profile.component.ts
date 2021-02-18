import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { TeacherPlaceModel } from 'src/app/models/teacher-place-model/teacher-place.model';
import { TeacherPlaceService } from 'src/app/services/teacher-place-service/teacher-place.service';
import { UserRoles } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-teacher-place-profile',
  templateUrl: './teacher-place-profile.component.html',
  styleUrls: ['./teacher-place-profile.component.scss']
})
export class TeacherPlaceProfileComponent implements OnInit{

  teacherPlace:TeacherPlaceModel;
  teacher:TeacherModel;
  role:string;
  owner:boolean;

  constructor(private route:ActivatedRoute, private tps:TeacherPlaceService) { }


  ngOnInit(){
    this.getUserRole();
    this.getTeacher();        
    this.getTeacherPlace();
  }

  private checkOwner(){
    if(this.role.toUpperCase() == UserRoles.Teacher.toUpperCase()){      
      this.owner = this.isOwner();
    }
  }

  private isOwner():boolean {
    return this.teacherPlace.teacherId == this.teacher.id
  }

  private getUserRole() {
    this.role = localStorage.userRole;
  }

  private getTeacher() {
    this.teacher = JSON.parse(localStorage.teacher);    
  }

  private async getTeacherPlace(){
    let id = this.route.snapshot.paramMap.get('id');

    this.teacherPlace = await this.tps.get(id);
    this.checkOwner();
  }  
}
