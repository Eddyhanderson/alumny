import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolProfileComponent } from './school-profile/school-profile/school-profile.component';
import { SchoolAboutComponent } from './school-about/school-about/school-about.component';
import { SchoolTeachersComponent } from './school-teachers/school-teachers/school-teachers.component';
import { SchoolCoursesComponent } from './school-courses/school-courses/school-courses.component';


@NgModule({
  declarations: [SchoolProfileComponent, SchoolAboutComponent, SchoolTeachersComponent, SchoolCoursesComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
