import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-place-lessons',
  templateUrl: './teacher-place-lessons.component.html',
  styleUrls: ['./teacher-place-lessons.component.scss']
})
export class TeacherPlaceLessonsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToVideo(){
    alert('I can get in !');
    this.router.navigate(['lesson/watch']);

  }

}
