import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolChoiceComponent } from './school-choice.component';

describe('SchoolChoiceComponent', () => {
  let component: SchoolChoiceComponent;
  let fixture: ComponentFixture<SchoolChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
