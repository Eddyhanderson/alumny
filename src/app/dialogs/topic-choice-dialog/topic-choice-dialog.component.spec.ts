import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopicChoiceDialogComponent } from './topic-choice-dialog.component';

describe('TopicChoiceDialogComponent', () => {
  let component: TopicChoiceDialogComponent;
  let fixture: ComponentFixture<TopicChoiceDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicChoiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicChoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
