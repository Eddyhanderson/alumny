import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionViewComponent } from './question-view/question-view.component';

import { QuillModule } from 'ngx-quill'


@NgModule({
  declarations: [QuestionViewComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    QuillModule
  ]
})
export class QuestionModule { }
