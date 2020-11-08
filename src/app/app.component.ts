import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './services/account-service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'alumni';

  loadingMode: boolean = false;
  isLogin: boolean;

  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountService.logStatus.subscribe(v => {
      this.isLogin = v;
    });
  }
}
