import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-lesson-watch-create-question',
  templateUrl: './lesson-create-question.component.html',
  styleUrls: ['./lesson-create-question.component.scss']
})
export class LessonWatchCreateQuestionComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor: ElementRef<HTMLElement>;

  constructor() {
  }
  
  ngAfterViewInit(): void {
    var quills = new Quill(this.editor.nativeElement, {
      theme: 'snow'
    });
  }

  ngOnInit(): void {
  }

}
