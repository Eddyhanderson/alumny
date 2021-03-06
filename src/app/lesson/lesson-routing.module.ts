import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { VideoLessonViewComponent } from './video-lesson-watch/video-lesson-watch.component';
import { HomeComponent } from '../home/home.component';
import { VideoLessonAboutComponent } from './video-lesson-about/video-lesson-about.component';
import { VideoLessonQuestionsComponent } from './video-lesson-questions/video-lesson-questions.component';

const routes: Routes = [
  { path: 'lessons', component: LessonsComponent },
  {
    path: 'watch', component: VideoLessonViewComponent, children: [
      { path: 'about', component: VideoLessonAboutComponent },
      { path: 'questions', component: VideoLessonQuestionsComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
