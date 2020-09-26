import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-answer-dialog',
  templateUrl: './create-answer-dialog.component.html',
  styleUrls: ['./create-answer-dialog.component.scss']
})
export class CreateAnswerDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<CreateAnswerDialogComponent>) 
  {
    
   }

  ngOnInit(): void {
  }

}
