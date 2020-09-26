import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionViewComponent } from './question-view/question-view.component';
import { QuestionAboutComponent } from './question-about/question-about.component';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';

const routes: Routes = [
  {
    path: ':id', component: QuestionViewComponent,
    children: [
      { path: 'about', component: QuestionAboutComponent },
      { path: 'answers', component: QuestionAnswersComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
