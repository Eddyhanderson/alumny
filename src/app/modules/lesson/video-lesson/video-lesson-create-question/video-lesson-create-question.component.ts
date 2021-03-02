import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-video-lesson-create-question',
  templateUrl: './video-lesson-create-question.component.html',
  styleUrls: ['./video-lesson-create-question.component.scss']
})
export class VideoLessonCreateQuestionComponent implements OnInit, AfterViewInit {

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
