import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoLessonViewComponent } from './video-lesson-watch.component';

describe('VideoLessonWatchComponent', () => {
  let component: VideoLessonViewComponent;
  let fixture: ComponentFixture<VideoLessonViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLessonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
