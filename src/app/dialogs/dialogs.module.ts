import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateAnswerDialogComponent} from './create-answer-dialog/create-answer-dialog.component';
import { TopicChoiceDialogComponent } from './topic-choice-dialog/topic-choice-dialog.component'
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CreateAnswerDialogComponent,
    TopicChoiceDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CreateAnswerDialogComponent,
    TopicChoiceDialogComponent
  ]
})
export class DialogsModule { }
