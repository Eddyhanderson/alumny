import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerSchoolRoutingModule } from './manager-school-routing.module';
import { ManagerSchoolHomeComponent } from './manager-school-home/manager-school-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ManagerSchoolHomeComponent],
  imports: [
    CommonModule,
    ManagerSchoolRoutingModule,
    MaterialModule
  ]
})
export class ManagerSchoolModule { }
