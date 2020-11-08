import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';

import { MaterialModule } from './material/material.module';

import { AuthenticationModule } from './authentication/authentication.module';

import { SplashComponent } from './splash/splash.component';

import {AccountService} from "./services/account-service/account.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {AuthenticationInterceptor} from './interceptors/authentication/authentication.interceptor';
import { AcademyService } from './services/academy-service/academy.service';
import { SharedModule } from './shared/shared.module';
import { TeacherService } from './services/teacher-service/teacher.service';
import { SchoolService } from './services/school-service/school.service';
import { ManagerService } from './services/manager-service/manager.service';
import { LoadingDataComponent } from './loading-data/loading-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SplashComponent,
    LoadingDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    SharedModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi:true
    },    
    AccountService,
    AcademyService,
    TeacherService,
    SchoolService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
