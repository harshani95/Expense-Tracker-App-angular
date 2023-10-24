import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSalaryDataComponent } from './find-salary-data.component';

describe('FindSalaryDataComponent', () => {
  let component: FindSalaryDataComponent;
  let fixture: ComponentFixture<FindSalaryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindSalaryDataComponent]
    });
    fixture = TestBed.createComponent(FindSalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
