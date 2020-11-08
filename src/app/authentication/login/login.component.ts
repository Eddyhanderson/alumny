import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService) {    
  }

  ngOnInit(): void {
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
      let returnUrl = this.route.snapshot.paramMap.get('returnUrl');

      if (role === Constants.STUDANT) {
        let navigateTo = returnUrl ?? 'home';
        await this.router.navigate([navigateTo]);
      } else if (role === Constants.TEACHER) {
        let navigateTo = returnUrl ?? '/teacher/school-choice/schools';
        await this.router.navigate([navigateTo]);
      }
    };
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
