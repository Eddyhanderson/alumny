import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherPlaceRoutingModule } from './teacher-place-routing.module';
import { MaterialModule } from '../material/material.module';
import { TeacherPlacesComponent } from './teacher-places/teacher-place.component';
import { TeacherPlaceProfileComponent } from './teacher-place-profile/teacher-place-profile.component';
import { TeacherPlaceLessonsComponent } from './teacher-place-lessons/teacher-place-lessons.component';
import { LessonModule } from '../lesson/lesson.module';


@NgModule({
  declarations: [
    TeacherPlacesComponent,
    TeacherPlaceProfileComponent,
    TeacherPlaceLessonsComponent
  ],
  imports: [
    CommonModule,
    TeacherPlaceRoutingModule,
    LessonModule,
    MaterialModule
  ]
})
export class TeacherPlaceModule { }
