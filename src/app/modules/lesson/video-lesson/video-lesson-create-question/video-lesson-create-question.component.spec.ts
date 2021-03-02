import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonCreateQuestionComponent } from './video-lesson-create-question.component';

describe('VideoLessonCreateQuestionComponent', () => {
  let component: VideoLessonCreateQuestionComponent;
  let fixture: ComponentFixture<VideoLessonCreateQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLessonCreateQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonCreateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
