import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager-service/manager.service';
import { SchoolService } from 'src/app/services/school-service/school.service';
import { TeacherModel } from '../../models/teacher-model/teacher-model';
import { TeacherService } from '../../services/teacher-service/teacher.service';
import { Constants } from '../../shared/utils/constants';

@Component({
  selector: 'app-loading-data',
  templateUrl: './loading-data.component.html',
  styleUrls: ['./loading-data.component.scss']
})
export class LoadingDataComponent implements OnInit {

  loading: boolean;
  role: string = localStorage.getItem('userRole');
  userId: string = localStorage.getItem('userId');

  constructor(private teacherService: TeacherService,
    private managerService: ManagerService,
    private schoolService:SchoolService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
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
    let succeded = await this.teacherService.setTeacherData(this.userId);

    if (succeded) {
      await this.navigateToTeacherHome();
      this.loading = false;
    } else {
      this.navigateToLogin();
    }
  }

  private async setManagerData() {
    let succeded = await this.managerService.setManagerData(this.userId);

    if (succeded) {            
      await this.navigateToManagerHome();
      this.loading = false;
    } else {
      this.navigateToLogin();
    }
  }

  private async navigateToTeacherHome() {
    if (!this.route.pathFromRoot)
      await this.router.navigate(['teacher/control-painel'])
  }

  private async navigateToManagerHome() {
    if (!this.route.pathFromRoot)
      await this.router.navigate(['manager/home'])
  }

  private async navigateToLogin() {
    this.router.navigate(["/login"]);
  }
}
