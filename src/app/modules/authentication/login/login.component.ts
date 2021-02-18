import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherModel } from 'src/app/models/teacher-model/teacher-model';
import { AccountService } from 'src/app/services/account-service/account.service';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  authGroup: FormGroup;
  inProgress: boolean = false;
  teacher:TeacherModel;
  authenticated: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.checkLoginStatus();
    this.formFieldBuild();
  }

  gotoRegistrationStudant() {
    this.router.navigate(['auth/registration/studant']);
  }

  gotoRegistrationTeacher() {
    this.router.navigate(['auth/registration/teacher']);
  }

  gotoRegistrationSchool() {
    this.router.navigate(['auth/registration/school']);
  }

  public async onSubmit() {
    this.inProgress = true;
    let formValues = this.authGroup.value;
    let result = await this.accountService.login(formValues.email, formValues.password);

    if (result.authenticated) {
      
      let role = localStorage.getItem('userRole');
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      let navigateTo;
      if (role.toUpperCase() === Constants.STUDANT) {
        navigateTo = returnUrl ?? 'home';
      } else if (role.toUpperCase() === Constants.TEACHER) {
        this.teacher = JSON.parse(localStorage.teacher);
        navigateTo = returnUrl ?? 'teacher/' + this.teacher.id + '/control-painel';
      } else if (role.toUpperCase() === Constants.SCHOOL_MANAGER) {
        navigateTo = returnUrl ?? 'manager-school/home';
      }

      this.router.navigate([navigateTo]);
    };
  }

  private checkLoginStatus(){
    this.accountService.logStatus.subscribe(state => this.authenticated = state);
  }

  private formFieldBuild() {
    this.email = new FormControl('', [Validators.required, Validators.pattern(Constants.EMAIL_REGEX)]);
    this.password = new FormControl('', [Validators.required]);
    this.authGroup = new FormGroup({
      'email': this.email,
      'password': this.password
    });
  }

}
