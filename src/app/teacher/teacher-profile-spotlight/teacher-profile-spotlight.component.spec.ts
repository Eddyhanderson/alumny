import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileSpotlightComponent } from './teacher-profile-spotlight.component';

describe('TeacherProfileSpotlightComponent', () => {
  let component: TeacherProfileSpotlightComponent;
  let fixture: ComponentFixture<TeacherProfileSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherProfileSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
