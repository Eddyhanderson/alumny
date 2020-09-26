import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolProfileComponent } from './school-profile/school-profile/school-profile.component';

const routes: Routes = [
  {path:'profile', component: SchoolProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
