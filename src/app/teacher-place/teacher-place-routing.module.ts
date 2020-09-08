import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherPlacesComponent } from './teacher-places/teacher-place.component'
import { TeacherPlaceProfileComponent } from './teacher-place-profile/teacher-place-profile.component';
import { TeacherPlaceLessonsComponent } from './teacher-place-lessons/teacher-place-lessons.component';
import { LessonModule } from '../lesson/lesson.module';

const routes: Routes = [
  { path: '', component: TeacherPlacesComponent },
  {
    path: 'profile', component: TeacherPlaceProfileComponent,
    children: [
      { path: 'lessons', component: TeacherPlaceLessonsComponent }
    ]    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherPlaceRoutingModule { }
