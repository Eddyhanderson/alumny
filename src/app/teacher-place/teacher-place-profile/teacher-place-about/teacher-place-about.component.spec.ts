import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPlaceAboutComponent } from './teacher-place-about.component';

describe('TeacherPlaceAboutComponent', () => {
  let component: TeacherPlaceAboutComponent;
  let fixture: ComponentFixture<TeacherPlaceAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPlaceAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPlaceAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
