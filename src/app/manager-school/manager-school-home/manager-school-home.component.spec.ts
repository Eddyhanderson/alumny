import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSchoolHomeComponent } from './manager-school-home.component';

describe('ManagerSchoolHomeComponent', () => {
  let component: ManagerSchoolHomeComponent;
  let fixture: ComponentFixture<ManagerSchoolHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSchoolHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSchoolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
