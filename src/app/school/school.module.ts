import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolProfileComponent } from './school-profile/school-profile.component';
import { SchoolAboutComponent } from './school-profile/school-about/school-about.component';
import { SchoolTeachersComponent } from './school-profile/school-teachers/school-teachers.component';
import { SchoolCoursesComponent } from './school-profile/school-courses/school-courses.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [SchoolProfileComponent, SchoolAboutComponent, SchoolTeachersComponent, SchoolCoursesComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    MaterialModule
  ]
})
export class SchoolModule { }
