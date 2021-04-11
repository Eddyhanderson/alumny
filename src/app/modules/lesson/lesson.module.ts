import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import {LessonWatchComponent } from './lesson-watch/lesson-watch/lesson-watch.component';
import { LessonRoutingModule } from './lesson-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import { MaterialModule } from '../material/material.module';
import { LessonWacthAboutComponent } from './lesson-watch/lesson-about/lesson-about.component';
import { LessonWatchQuestionsComponent } from './lesson-watch/lesson-questions/lesson-questions.component';
import { LessonManagmentComponent } from './lesson-managment/lesson-managment.component';
import { LessonWatchCreateQuestionComponent } from './lesson-watch/lesson-create-question/lesson-create-question.component';


@NgModule({
  declarations: [
    LessonsComponent,
    LessonWatchComponent,
    LessonWacthAboutComponent,
    LessonWatchQuestionsComponent,
    LessonManagmentComponent,
    LessonWatchCreateQuestionComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
