import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileTeacherPlacesComponent } from './teacher-profile-teacher-places.component';

describe('TeacherProfileTeacherPlacesComponent', () => {
  let component: TeacherProfileTeacherPlacesComponent;
  let fixture: ComponentFixture<TeacherProfileTeacherPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherProfileTeacherPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileTeacherPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
