import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { VideoService } from '../../../../services/video-service/video.service';

@Component({
  selector: 'app-video-lesson-creation',
  templateUrl: './video-lesson-creation.component.html',
  styleUrls: ['./video-lesson-creation.component.scss']
})
export class VideoLessonCreationComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  progress: number = 0;


  videoFg: FormGroup;

  title: FormControl = new FormControl('', [Validators.required, Validators.maxLength(25)])
  description: FormControl = new FormControl('', Validators.required);

  videoInfoFg: FormGroup;



  constructor(private fb: FormBuilder, private vs: VideoService) { }

  ngOnInit(): void {
    this.videoFg = this.fb.group({
      videoCtl: ['', Validators.required]
    });

    this.videoInfoFg = this.fb.group({
      'title': this.title,
      'description': this.description
    })

  }

  uploadFileEvt(event) {
    var file = event.target.files[0];

    if (file == null) return null;

    this.stepper.next();

    this.vs.upload(file).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          console.log(this.progress);
          this.progress = Math.round((event.loaded * 100) / event.total);
          break;
      }
    })
  }


}
