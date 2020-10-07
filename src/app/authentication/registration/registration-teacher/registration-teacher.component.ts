import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-registration-studant',
  templateUrl: './registration-teacher.component.html',
  styleUrls: ['./registration-teacher.component.scss']
})
export class RegistrationTeacherComponent implements OnInit {

  basicInfo: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  phoneNumber: FormControl;
  email: FormControl;
  birth: FormControl;
  genre: FormControl;

  academicInfo: FormGroup;
  securityInfo: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.firstName = new FormControl('', [Validators.required, Validators.max(15)]);
    this.lastName = new FormControl('', [Validators.required, Validators.max(15)]);
    this.phoneNumber = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.birth = new FormControl('', [Validators.required]);
    this.genre = new FormControl('', [Validators.required]);    
    
    this.basicInfo = this.formBuilder.group(
      {
        "firstName": this.firstName,
        "lastName": this.lastName,
        "phoneNumber": this.phoneNumber,
        "email": this.email,
        "birth": this.birth,
        "genre": this.genre
      },
    );

    this.securityInfo = this.formBuilder.group({

    });

    this.academicInfo = this.formBuilder.group({});

  }

}
