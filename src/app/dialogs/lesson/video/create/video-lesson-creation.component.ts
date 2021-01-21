import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { VideoModel } from 'src/app/models/video-model/video.model';
import { Response } from 'src/app/models/response/response';
import { VideoService } from '../../../../services/video-service/video.service';
import { VideoUploadSignalR } from '../../../../signalRServices/video-upload-signalR';
import { Observable } from 'rxjs';
import { MediaPlayer } from 'dashjs';


@Component({
  selector: 'app-video-lesson-creation',
  templateUrl: './video-lesson-creation.component.html',
  styleUrls: ['./video-lesson-creation.component.scss']
})
export class VideoLessonCreationComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;


  public progress: number = 0;
  public loadingMode: boolean = false;
  public manifest: string;
  public thumbnail: string;

  videoFg: FormGroup;

  title: FormControl = new FormControl('', [Validators.required, Validators.maxLength(25)])
  description: FormControl = new FormControl('', Validators.required);

  videoInfoFg: FormGroup;



  constructor(private fb: FormBuilder,
    private vs: VideoService,
    private vus: VideoUploadSignalR) { }

  ngOnInit(): void {

    this.initVideoDataObserver();

    this.videoFg = this.fb.group({
      videoCtl: ['', Validators.required]
    });

    this.videoInfoFg = this.fb.group({
      'title': this.title,
      'description': this.description
    })
  }

  initVideoDataObserver() {
    // to get video compression progress
    this.vus.conversionProgress.subscribe((data) => {
      this.progress = data + 50;
    });

    // to get thumbnail location
    this.vus.thumbnail.subscribe((data) => {
      this.thumbnail = data;
    })

    // to get video manifest location
    this.vus.manifest.subscribe((data) => {
      this.manifest = data;
    })
  }

  uploadFileEvt(event) {
    var file = event.target.files[0];

    if (file == null) return null;

    this.stepper.next();

    this.loadingMode = true;

    this.vs.upload(file).subscribe(async (event: HttpEvent<Response<VideoModel>>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.progress = Math.round(((event.loaded * 100.0) / event.total) / 2.0);
          break;
        case HttpEventType.Response:
          var video = event.body.data;
          await this.vus.onInit();
          await this.vus.videoUploadWatch(video);
          break;
      }
    })
  }
}
