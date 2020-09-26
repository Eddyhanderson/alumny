import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAboutComponent } from './question-about.component';

describe('QuestionAboutComponent', () => {
  let component: QuestionAboutComponent;
  let fixture: ComponentFixture<QuestionAboutComponent>;

  beforeEach(async(() => {
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
