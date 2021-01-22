import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import { MaterialModule } from '../material/material.module';
import { VideoLessonViewComponent } from './video-lesson-watch/video-lesson-watch.component';
import { VideoLessonAboutComponent } from './video-lesson-about/video-lesson-about.component';
import { VideoLessonQuestionsComponent } from './video-lesson-questions/video-lesson-questions.component';


@NgModule({
  declarations: [
    LessonsComponent,
    VideoLessonViewComponent,
    VideoLessonAboutComponent,
    VideoLessonQuestionsComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
