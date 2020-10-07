import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoRegistrationStudant(){
    this.router.navigate(['auth/registration/studant']);
  }

  gotoRegistrationTeacher(){
    this.router.navigate(['auth/registration/teacher']);
  }

}
