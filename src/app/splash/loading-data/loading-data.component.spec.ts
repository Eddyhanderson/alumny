import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingDataComponent } from './loading-data.component';

describe('LoadingDataComponent', () => {
  let component: LoadingDataComponent;
  let fixture: ComponentFixture<LoadingDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
