import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalaryDataComponent } from './new-salary-data.component';

describe('NewSalaryDataComponent', () => {
  let component: NewSalaryDataComponent;
  let fixture: ComponentFixture<NewSalaryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSalaryDataComponent]
    });
    fixture = TestBed.createComponent(NewSalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
