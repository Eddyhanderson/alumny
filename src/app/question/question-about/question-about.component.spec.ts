import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionAboutComponent } from './question-about.component';

describe('QuestionAboutComponent', () => {
  let component: QuestionAboutComponent;
  let fixture: ComponentFixture<QuestionAboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
