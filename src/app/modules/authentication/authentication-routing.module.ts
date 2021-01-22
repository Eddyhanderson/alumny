import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationStudantComponent } from './registration/registration-studant/registration-studant.component';
import { RegistrationTeacherComponent } from './registration/registration-teacher/registration-teacher.component';
import { RegistrationSchoolComponent } from './registration/registration-school/registration-school.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },  
  {
    path: 'registration', children: [
      { path: 'studant', component: RegistrationStudantComponent },
      { path: 'teacher', component: RegistrationTeacherComponent },
      { path: 'school', component: RegistrationSchoolComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
