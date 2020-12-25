import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLessonCreationComponent } from './video-lesson-creation.component';

describe('VideoLessonCreationComponent', () => {
  let component: VideoLessonCreationComponent;
  let fixture: ComponentFixture<VideoLessonCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLessonCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLessonCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
