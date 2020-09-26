import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicChoiceDialogComponent } from './topic-choice-dialog.component';

describe('TopicChoiceDialogComponent', () => {
  let component: TopicChoiceDialogComponent;
  let fixture: ComponentFixture<TopicChoiceDialogComponent>;

  beforeEach(async(() => {
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
