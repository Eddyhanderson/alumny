import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  homeActive = true;
  role:string="teacher";

 
  constructor() { }

  ngOnInit(): void {
  }

}
