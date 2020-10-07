import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

import {MaterialModule} from './material/material.module';
import { LoginComponent } from './authentication/login/login.component';

import { RegistrationStudantComponent } from './authentication/registration/registration-studant/registration-studant.component';
import { RegistrationTeacherComponent } from './authentication/registration/registration-teacher/registration-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,  
    LoginComponent,
    RegistrationStudantComponent,
    RegistrationTeacherComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
