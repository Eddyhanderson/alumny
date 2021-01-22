import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionViewComponent } from './question-view/question-view.component';
import { QuestionAboutComponent } from './question-about/question-about.component';
import { MaterialModule } from '../material/material.module';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';



@NgModule({
  declarations: [QuestionViewComponent, QuestionAboutComponent, QuestionAnswersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    QuestionRoutingModule,
  ]
})
export class QuestionModule { }
