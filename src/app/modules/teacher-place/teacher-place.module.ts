import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsModule } from '../../dialogs/dialogs.module'
import { TeacherPlaceRoutingModule } from './teacher-place-routing.module';
import { MaterialModule } from '../material/material.module';
import { TeacherPlaceProfileComponent } from './teacher-place-profile/teacher-place-profile.component';
import { TeacherPlaceLessonsComponent } from './teacher-place-profile/teacher-place-lessons/teacher-place-lessons.component';
import { TeacherPlaceAboutComponent } from './teacher-place-profile/teacher-place-about/teacher-place-about.component';
import { TeacherPlaceStudantsComponent } from './teacher-place-profile/teacher-place-studants/teacher-place-studants.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [    
    TeacherPlaceProfileComponent,
    TeacherPlaceLessonsComponent,
    TeacherPlaceAboutComponent,
    TeacherPlaceStudantsComponent
  ],
  imports: [
    CommonModule,
    TeacherPlaceRoutingModule,    
    MaterialModule,
    DialogsModule,
    SharedModule
  ]  
})
export class TeacherPlaceModule { }
