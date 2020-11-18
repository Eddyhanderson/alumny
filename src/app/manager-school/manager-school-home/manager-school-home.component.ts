import { Component, OnDestroy, OnInit } from '@angular/core';
import { config, Observable, Subscription } from 'rxjs';
import { CourseModel } from 'src/app/models/course-model/course.model';
import { ManagerModel } from 'src/app/models/manager-model/manager.model';
import { SchoolCourseService } from 'src/app/services/school-courses-service/school-course.service';
import { TeacherSchoolsService } from 'src/app/services/teacher-schools-service/teacher-schools.service';
import { Constants } from 'src/app/shared/utils/constants';
import { TeacherSchoolsModel } from '../../models/teacher-schools-model/teacher-schools.model';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { PaginationQuery } from 'src/app/models/pagination-query/pagination-query';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseCreateDialogComponent } from '../../dialogs/course/create/course-create-dialog/course-create-dialog.component';
import { SchoolCourseModel } from 'src/app/models/school-course-model/school-course.model';
import { SchoolModel } from 'src/app/models/school-model/school.model';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-manager-school-home',
  templateUrl: './manager-school-home.component.html',
  styleUrls: ['./manager-school-home.component.scss']
})
export class ManagerSchoolHomeComponent implements OnInit, OnDestroy {
  manager: ManagerModel;
  teacherSchools$: Observable<TeacherSchoolsModel[]>;
  courses$: Observable<CourseModel[]>;
  teachers$: Observable<TeacherModel[]>;
  schoolCourse: SchoolCourseModel;

  reloadStrategy: Subscription;

  constructor(private teacherSchoolService: TeacherSchoolsService,
    private scs: SchoolCourseService,
    private matDialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.setStrategyToreloadPage();
    this.setManager();
    this.getTeacherSchoolsRequests();
    this.getSchoolTeachers();
    this.getSchoolCourses();
  }

  ngOnDestroy(): void {
    this.reloadStrategy.unsubscribe();
  }

  private setManager() {
    this.manager = JSON.parse(localStorage.manager);
  }

  private getTeacherSchoolsRequests() {
    let schoolId = this.manager.school.id;
    this.teacherSchools$ = this.teacherSchoolService.getAllPendingTeacherSchoolBySchool(schoolId);
  }

  private getSchoolCourses() {
    let schoolId = this.manager.school.id;
    let paginationQuery: PaginationQuery = {
      pageNumber: 1,
      pageSize: 50,
      searchValue: ''
    }

    this.courses$ = this.scs.getAllSchoolCoursesBySchool(paginationQuery, schoolId);
  }

  private getSchoolTeachers() {
    let schoolId = this.manager.school.id;
    this.teachers$ = this.teacherSchoolService.getAllNormalTeacherSchoolBySchool(schoolId);
  }

  /* To reload component */
  private setStrategyToreloadPage() {
    this.reloadStrategy = this.router.events.subscribe(
      (evt) => {
        if (evt instanceof NavigationEnd) {
          this.getTeacherSchoolsRequests();
          this.getSchoolTeachers();
          this.getSchoolCourses();
        }
      }
    )
  }

  private reloadComponent(){
    this.router.navigate([this.router.url]);
  }

  // Events handlers
  public async acceptRequest(teacherId: string) {
    let school: SchoolModel = {
      name: '',
      shortName: '',
      id: this.manager.school.id
    };

    let teacher: TeacherModel = {
      id: teacherId
    }

    let tsModel: TeacherSchoolsModel = {
      teacherId: teacher.id,
      schoolId: school.id,
      situation: Constants.NORMAL_MODEL_STATE
    }

    var updated = await this.teacherSchoolService.update(teacher.id, school.id, tsModel);

    if (updated)
      this.reloadComponent();
  }

  public async onCreateCourse() {
    let dialogRef = this.matDialog.open(CourseCreateDialogComponent, {
      width: '40%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe(
      async (course) => {
        this.schoolCourse = {
          courseId: course.id,
          schoolId: this.manager.school.id
        }
        var result = await this.scs.create(this.schoolCourse);

        if (result.succeded){
          
          this.reloadComponent();
        }
      }
    );
  }

}
