import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudantProfileComponent } from './studant-profile/studant-profile.component';
import { StudantRoutingModule } from './studant-routing.module';
import { MaterialModule } from '../material/material.module';
import { StudantProfileQuestionsComponent } from './studant-profile-questions/studant-profile-questions.component';
import { StudantProfileTeacherPlacesComponent } from './studant-profile-teacher-places/studant-profile-teacher-places.component';
import { StudantProfileClassematesComponent } from './studant-profile-classemates/studant-profile-classemates.component';

@NgModule({
  declarations: [StudantProfileComponent, StudantProfileQuestionsComponent, StudantProfileTeacherPlacesComponent, StudantProfileClassematesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StudantRoutingModule
  ]
})
export class StudantModule { }
