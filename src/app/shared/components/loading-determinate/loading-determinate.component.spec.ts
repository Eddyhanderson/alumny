import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDeterminateComponent } from './loading-determinate.component';

describe('LoadingDeterminateComponent', () => {
  let component: LoadingDeterminateComponent;
  let fixture: ComponentFixture<LoadingDeterminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingDeterminateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingDeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
