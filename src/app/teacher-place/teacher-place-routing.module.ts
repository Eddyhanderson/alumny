import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherPlacesComponent } from './teacher-places/teacher-place.component'
import { TeacherPlaceProfileComponent } from './teacher-place-profile/teacher-place-profile.component';
import { TeacherPlaceLessonsComponent } from './teacher-place-lessons/teacher-place-lessons.component';
import { TeacherPlaceAboutComponent } from './teacher-place-about/teacher-place-about.component';
import { TeacherPlaceStudantsComponent } from './teacher-place-studants/teacher-place-studants.component';

const routes: Routes = [  
  {
    path: 'profile', component: TeacherPlaceProfileComponent,
    children: [
      { path: 'lessons', component: TeacherPlaceLessonsComponent },
      { path: 'about', component: TeacherPlaceAboutComponent },
      { path: 'studants', component: TeacherPlaceStudantsComponent },
    ]    
  },
  { path: '', component: TeacherPlacesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherPlaceRoutingModule { }
