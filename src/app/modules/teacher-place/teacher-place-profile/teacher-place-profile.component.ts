import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-teacher-place-profile',
  templateUrl: './teacher-place-profile.component.html',
  styleUrls: ['./teacher-place-profile.component.scss']
})
export class TeacherPlaceProfileComponent implements OnInit, AfterViewInit {

  constructor(private renderer:Renderer2, private el:ElementRef) { }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }
  

}
