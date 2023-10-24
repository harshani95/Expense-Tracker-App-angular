import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllSalaryDataComponent } from './load-all-salary-data.component';

describe('LoadAllSalaryDataComponent', () => {
  let component: LoadAllSalaryDataComponent;
  let fixture: ComponentFixture<LoadAllSalaryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadAllSalaryDataComponent]
    });
    fixture = TestBed.createComponent(LoadAllSalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
