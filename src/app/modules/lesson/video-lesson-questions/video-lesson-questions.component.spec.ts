import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoLessonQuestionsComponent } from './video-lesson-questions.component';

describe('VideoLessonQuestionsComponent', () => {
  let component: VideoLessonQuestionsComponent;
  let fixture: ComponentFixture<VideoLessonQuestionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLessonQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
