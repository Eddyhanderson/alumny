import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TopicChoiceDialogComponent } from 'src/app/dialogs/topic-choice-dialog/topic-choice-dialog.component';

@Component({
  selector: 'app-teacher-place-lessons',
  templateUrl: './teacher-place-lessons.component.html',
  styleUrls: ['./teacher-place-lessons.component.scss']
})
export class TeacherPlaceLessonsComponent implements OnInit {

  constructor(private router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTopicChoiceDialog(){
    this.matDialog.open(TopicChoiceDialogComponent);
  }

  navigateToVideo() {
    alert('I can get in !');
    this.router.navigate(['lesson/watch']);

  }

}
