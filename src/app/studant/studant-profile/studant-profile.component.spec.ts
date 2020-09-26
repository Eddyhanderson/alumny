import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantProfileComponent } from './studant-profile.component';

describe('StudantProfileComponent', () => {
  let component: StudantProfileComponent;
  let fixture: ComponentFixture<StudantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudantProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
