import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateAnswerDialogComponent} from './create-answer-dialog/create-answer-dialog.component';
import { TopicChoiceDialogComponent } from './topic-choice-dialog/topic-choice-dialog.component'
import { MaterialModule } from '../material/material.module';
import { SchoolRequestComponentDialog } from '../dialogs/school-request-dialog/school-request.component';
import { MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseCreateDialogComponent } from './course/create/course-create-dialog/course-create-dialog.component';
import { TeacherPlaceCreateDialog } from './teacher-place/teacher-place-create-dialog/teacher-place-create.dialog';

@NgModule({
  declarations: [
    CreateAnswerDialogComponent,
    TopicChoiceDialogComponent,
    SchoolRequestComponentDialog,
    CourseCreateDialogComponent,
    TeacherPlaceCreateDialog  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule  
  ],
  exports:[
    CreateAnswerDialogComponent,
    TopicChoiceDialogComponent,
    SchoolRequestComponentDialog,
    TeacherPlaceCreateDialog
  ],
  
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false }
    }
  ], 
})
export class DialogsModule { }
