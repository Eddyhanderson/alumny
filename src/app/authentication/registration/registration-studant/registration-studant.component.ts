import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-studant',
  templateUrl: './registration-studant.component.html',
  styleUrls: ['./registration-studant.component.scss']
})
export class RegistrationStudantComponent implements OnInit {

  isLinear = true;
  basicInfo: FormGroup;
  academicInfo:FormGroup;
  securityInfo: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfo = this.formBuilder.group({
      
    });

    this.securityInfo = this.formBuilder.group({

    });

    this.academicInfo = this.formBuilder.group({});

  }

}
