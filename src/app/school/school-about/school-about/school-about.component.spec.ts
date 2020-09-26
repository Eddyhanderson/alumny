import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAboutComponent } from './school-about.component';

describe('SchoolAboutComponent', () => {
  let component: SchoolAboutComponent;
  let fixture: ComponentFixture<SchoolAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
