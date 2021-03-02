import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager-service/manager.service';
import { SchoolService } from 'src/app/services/school-service/school.service';
import { TeacherService } from 'src/app/services/teacher-service/teacher.service';
import { Constants } from 'src/app/shared/utils/constants';
import { ArticleLessonCreationComponent } from '../dialogs/lesson/article/create/article-lesson-creation/article-lesson-creation.component';
import { VideoLessonCreationComponent } from '../dialogs/lesson/video/create/video-lesson-creation.component';
import { UserModel } from '../models/user-model/user-model';

@Component({
  selector: 'app-build',
  templateUrl: './app-build.component.html',
  styleUrls: ['./app-build.component.scss']
})
export class AppBuildComponent implements OnInit {

  loaded: boolean;
  role: string = localStorage.getItem('userRole');
  user: UserModel = JSON.parse(localStorage.getItem('user'));
  loginRoute = /auth\/login$/;

  constructor(
    private teacherService: TeacherService,
    private managerService: ManagerService,
    private router: Router,
    private route: ActivatedRoute,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.loaded = false;
    this.setRoleData();
  }

  private async setRoleData() {
    if (this.role.toUpperCase() === Constants.TEACHER) {
      await this.setTeacherData();
    } else if (this.role.toUpperCase() === Constants.SCHOOL_MANAGER) {
      await this.setManagerData();
    }
  }

  private async setTeacherData() {
    let succeded = await this.teacherService.setTeacherData(this.user.id);
    if (succeded) {
      await this.navigateToTeacherHome();
      this.loaded = true;
    } else {
      this.navigateToLogin();
    }
  }

  private async setManagerData() {
    let succeded = await this.managerService.setManagerData(this.user.id);

    if (succeded) {
      await this.navigateToManagerHome();
      this.loaded = true;
    } else {
      this.navigateToLogin();
    }
  }

  private async navigateToTeacherHome() {
    let teacherId = JSON.parse(localStorage.teacher).id;
    
    if (this.router.url.match(this.loginRoute)) {
      return await this.router.navigate(['/teacher', teacherId, 'control-painel'])
    }

    return this.router.navigate[this.router.url];
    // TODO: Fill the case when trying to acess page other than teacher home        
  }

  private async navigateToManagerHome() {
    // TODO: Fill the case when trying to acess page other than teacher home
    await this.router.navigate(['/manager/home'])
  }

  private async navigateToLogin() {
    // TODO: Fill the case when trying to acess page other than teacher home
    this.router.navigate(["/login"]);
  }

  public openCreateVideoLessonDialog() {
    this.matDialog.open(VideoLessonCreationComponent, {
      width: '90%',
      height: '90%'
    })
  }

  public openCreateArticleLessonDialog() {
    this.matDialog.open(ArticleLessonCreationComponent, {
      width: '90%',
      height: '90%'
    })
  }

}
