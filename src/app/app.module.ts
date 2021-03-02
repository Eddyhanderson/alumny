import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { MaterialModule } from './modules/material/material.module';
import { AccountService } from "./services/account-service/account.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptors/authentication/authentication.interceptor';
import { AcademyService } from './services/academy-service/academy.service';
import { SharedModule } from './shared/shared.module';
import { TeacherService } from './services/teacher-service/teacher.service';
import { SchoolService } from './services/school-service/school.service';
import { ManagerService } from './services/manager-service/manager.service';
import { DialogsModule } from './dialogs/dialogs.module';
import { CommonModule } from '@angular/common';
import { AppBuildComponent } from './app-build/app-build.component';
import { ArticleLessonCreationComponent } from './dialogs/lesson/article/create/article-lesson-creation/article-lesson-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppBuildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,    
    SharedModule,
    DialogsModule
  ],  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    AccountService,
    TeacherService,
    SchoolService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
