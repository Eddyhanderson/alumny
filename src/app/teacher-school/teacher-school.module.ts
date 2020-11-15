import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherSchoolRoutingModule } from './teacher-school-routing.module';
import { TeacherSchoolComponent } from './teacher-school/teacher-school.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TeacherSchoolComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TeacherSchoolRoutingModule
  ]
})
export class TeacherSchoolModule { }
