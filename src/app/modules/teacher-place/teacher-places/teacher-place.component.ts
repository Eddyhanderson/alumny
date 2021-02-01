import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { TeacherSchoolsService } from 'src/app/services/teacher-schools-service/teacher-schools.service';
import { TeacherPlaceService } from 'src/app/services/teacher-place-service/teacher-place.service';

import { TeacherPlaceCreateDialog } from '../../../dialogs/teacher-place/teacher-place-create-dialog/teacher-place-create.dialog';
import { TeacherSchoolsModel } from 'src/app/models/teacher-schools-model/teacher-schools.model';
import { SchoolModel } from 'src/app/models/school-model/school.model';

import { PaginationQuery } from '../../../interfaces/pagination-query/pagination-query';
import { TeacherPlaceQuery } from 'src/app/interfaces/teacher-place-query/teacher-places.query';
import { PaginationAdapter } from 'src/app/shared/utils/pagination-adapter/pagination-adapter';
import { TeacherSchoolQuery } from 'src/app/interfaces/teacher-schools-query/teacher-school.query';
import { Constants } from 'src/app/shared/utils/constants';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-place',
  templateUrl: './teacher-place.component.html',
  styleUrls: ['./teacher-place.component.scss']
})
export class TeacherPlacesComponent implements OnInit {

  // Models
  teacher: TeacherModel;
  school: SchoolModel;
  academicYear: number;
  teacherSchools: TeacherSchoolsModel[];
  teacherPlaces$: PaginationAdapter;

  // Flags
  hasSchool: boolean = false;

  // Utils variables
  private _reloadStrategy: Subscription;


  constructor(
    private route: Router,
    private tss: TeacherSchoolsService,
    private tps: TeacherPlaceService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.initialization();
  }
 
  private async initialization() {
    this.getTeaecher();
    await this.verifierIfTeacherHasSchool();
    if (this.hasSchool) {
      this.setStrategyToReloadPage();
      this.getAcademicYear();
      await this.getAllTeacherSchools();
      this.getSelectedSchool();
      await this.getAllTeacherPlaces();
    }

  }

  private getTeaecher() {
    this.teacher = JSON.parse(localStorage.teacher);
  }

  private getAcademicYear() {
    this.academicYear = this.academicYear ?? new Date().getFullYear();
  }

  private async verifierIfTeacherHasSchool() {
    this.hasSchool = await this.tss.checkTeacherHasSchool(this.teacher.id);
  }

  private async getAllTeacherSchools() {
    let teacherId = this.teacher.id;

    let query: PaginationQuery = {
      pageSize: 50,
      pageNumber: 1,
      searchValue: ''
    };

    let param: TeacherSchoolQuery = {
      teacherId: teacherId,
      situation: Constants.NORMAL_MODEL_STATE,
      schoolId: ''
    };

    let response = await this.tss.getAll(query, param).toPromise();

    if (response != null && response.data != null)
      this.teacherSchools = response.data;
  }

  private async getAllTeacherPlaces() {

    let params: TeacherPlaceQuery = {
      academicYear: this.academicYear,
      schoolId: this.school.id,
      teacherId: this.teacher.id
    };

    this.teacherPlaces$ = new PaginationAdapter(this.teacherPlaceGetAllPrototype(), params);
  }

  private teacherPlaceGetAllPrototype() {
    return (query, param): Observable<any> => {
      return this.tps.getAll(query, param).pipe(data => data);
    }
  }

  private getSelectedSchool() {
    this.school = this.school ?? this.teacherSchools[0].school;
  }

  private setStrategyToReloadPage() {
    this._reloadStrategy = this.route.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.getAllTeacherPlaces();
        }
      }
    )
  }

  private reloadComponent() {
    this.route.navigate([this.route.url]);
  }

  public onCreateTeacherPlace() {
    let dialogRef = this.matDialog.open(TeacherPlaceCreateDialog, {
      height: 'auto',
      width: '40%',
      data: {
        teacherId: this.teacher.id
      }
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== null || data != undefined) {
        console.dir(data);
        this.reloadComponent();
      }
    });
  }

}
