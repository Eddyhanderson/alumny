import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonAboutComponent } from './video-lesson-about.component';

describe('VideoLessonAboutComponent', () => {
  let component: VideoLessonAboutComponent;
  let fixture: ComponentFixture<VideoLessonAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLessonAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
