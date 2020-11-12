import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './services/account-service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'alumni';
  
  isLogedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public checkAuthState(state: boolean) {
    this.isLogedIn = state;
  }
}
