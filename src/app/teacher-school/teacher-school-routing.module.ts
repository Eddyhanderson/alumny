import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherSchoolComponent } from './teacher-school/teacher-school.component';

const routes: Routes = [
  { path: ':id', component: TeacherSchoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherSchoolRoutingModule { }
