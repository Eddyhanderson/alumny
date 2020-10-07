import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationStudantComponent } from './registration/registration-studant/registration-studant.component';
import { RegistrationTeacherComponent } from './registration/registration-teacher/registration-teacher.component';


@NgModule({
  declarations: [LoginComponent, RegistrationStudantComponent, RegistrationTeacherComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],  
})
export class AuthenticationModule { }
