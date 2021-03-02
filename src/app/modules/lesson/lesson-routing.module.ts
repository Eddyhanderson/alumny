import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { VideoLessonViewComponent } from './video-lesson/video-lesson-watch/video-lesson-watch.component';
import { HomeComponent } from '../home/home.component';
import { VideoLessonAboutComponent } from './video-lesson/video-lesson-about/video-lesson-about.component';
import { VideoLessonQuestionsComponent } from './video-lesson/video-lesson-questions/video-lesson-questions.component';
import { LessonManagmentComponent } from './lesson-managment/lesson-managment.component';
import { VideoLessonCreateQuestionComponent } from './video-lesson/video-lesson-create-question/video-lesson-create-question.component';

const routes: Routes = [  
  {
    path: 'watch', component: VideoLessonViewComponent, children: [
      { path: 'about', component: VideoLessonAboutComponent },
      { path: 'questions', component: VideoLessonQuestionsComponent },      
      { path: 'question-expose', component: VideoLessonCreateQuestionComponent },   
    ], 
  },
  {
    path: 'managment', component: LessonManagmentComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
