import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnswerDialogComponent } from './create-answer-dialog.component';

describe('CreateAnswerDialogComponent', () => {
  let component: CreateAnswerDialogComponent;
  let fixture: ComponentFixture<CreateAnswerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnswerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnswerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
