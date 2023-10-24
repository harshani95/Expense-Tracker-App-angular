import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalaryDataComponent } from './update-salary-data.component';

describe('UpdateSalaryDataComponent', () => {
  let component: UpdateSalaryDataComponent;
  let fixture: ComponentFixture<UpdateSalaryDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSalaryDataComponent]
    });
    fixture = TestBed.createComponent(UpdateSalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
