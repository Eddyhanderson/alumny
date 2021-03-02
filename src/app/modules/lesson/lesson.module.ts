import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import { MaterialModule } from '../material/material.module';
import { VideoLessonViewComponent } from './video-lesson/video-lesson-watch/video-lesson-watch.component';
import { VideoLessonAboutComponent } from './video-lesson/video-lesson-about/video-lesson-about.component';
import { VideoLessonQuestionsComponent } from './video-lesson/video-lesson-questions/video-lesson-questions.component';
import { LessonManagmentComponent } from './lesson-managment/lesson-managment.component';
import { VideoLessonCreateQuestionComponent } from './video-lesson/video-lesson-create-question/video-lesson-create-question.component';


@NgModule({
  declarations: [
    LessonsComponent,
    VideoLessonViewComponent,
    VideoLessonAboutComponent,
    VideoLessonQuestionsComponent,
    LessonManagmentComponent,
    VideoLessonCreateQuestionComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
