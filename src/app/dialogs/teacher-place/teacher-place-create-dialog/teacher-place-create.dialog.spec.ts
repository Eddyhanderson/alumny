import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPlaceCreateDialog } from './teacher-place-create.dialog';

describe('CreateComponent', () => {
  let component: TeacherPlaceCreateDialog;
  let fixture: ComponentFixture<TeacherPlaceCreateDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPlaceCreateDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPlaceCreateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
