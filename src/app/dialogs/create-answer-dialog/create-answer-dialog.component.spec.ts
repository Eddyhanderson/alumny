import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateAnswerDialogComponent } from './create-answer-dialog.component';

describe('CreateAnswerDialogComponent', () => {
  let component: CreateAnswerDialogComponent;
  let fixture: ComponentFixture<CreateAnswerDialogComponent>;

  beforeEach(waitForAsync(() => {
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
