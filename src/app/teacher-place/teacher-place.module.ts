import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '../dialogs/dialogs.module'
import { LessonModule } from '../lesson/lesson.module';
import { TeacherPlaceRoutingModule } from './teacher-place-routing.module';
import { MaterialModule } from '../material/material.module';

import { TeacherPlacesComponent } from './teacher-places/teacher-place.component';
import { TeacherPlaceProfileComponent } from './teacher-place-profile/teacher-place-profile.component';
import { TeacherPlaceLessonsComponent } from './teacher-place-lessons/teacher-place-lessons.component';
import { TopicChoiceDialogComponent } from '../dialogs/topic-choice-dialog/topic-choice-dialog.component';
import { TeacherPlaceAboutComponent } from './teacher-place-about/teacher-place-about.component';
import { TeacherPlaceStudantsComponent } from './teacher-place-studants/teacher-place-studants.component';


@NgModule({
  declarations: [
    TeacherPlacesComponent,
    TeacherPlaceProfileComponent,
    TeacherPlaceLessonsComponent,
    TeacherPlaceAboutComponent,
    TeacherPlaceStudantsComponent,
  ],
  imports: [
    CommonModule,
    TeacherPlaceRoutingModule,
    LessonModule,
    MaterialModule,
    DialogsModule
  ],
  entryComponents: [ TopicChoiceDialogComponent]
})
export class TeacherPlaceModule { }
