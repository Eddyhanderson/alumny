import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account-service/account.service';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
export class AuthContainerComponent implements OnInit {

  @Output() isLogin = new EventEmitter<boolean>();

  constructor(private router: Router, private accountService: AccountService) { }

  public checkAuthState() {
    this.accountService.logStatus.subscribe(loginState => {          
      if (!loginState) {        
        this.router.navigate(['auth/login']);
      }
      this.isLogin.emit(loginState);
    });
    
  }

  ngOnInit(): void 
  { 
    this.checkAuthState();
  }

}
