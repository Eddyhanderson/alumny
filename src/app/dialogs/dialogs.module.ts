import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateAnswerDialogComponent} from './create-answer-dialog/create-answer-dialog.component';
import { TopicChoiceDialogComponent } from './topic-choice-dialog/topic-choice-dialog.component'
import { MaterialModule } from '../material/material.module';
import { SchoolRequestComponentDialog } from '../dialogs/school-request-dialog/school-request.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CreateAnswerDialogComponent,
    TopicChoiceDialogComponent,
    SchoolRequestComponentDialog  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule
  ],
  exports:[
    CreateAnswerDialogComponent,
    TopicChoiceDialogComponent,
    SchoolRequestComponentDialog
  ]
})
export class DialogsModule { }
