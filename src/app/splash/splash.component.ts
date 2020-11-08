import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account-service/account.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../shared/utils/constants';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit{

  loadingMode: boolean = false;
  isLogin: boolean;

  constructor() 
  { }

  ngOnInit(): void {
    
  }
}
