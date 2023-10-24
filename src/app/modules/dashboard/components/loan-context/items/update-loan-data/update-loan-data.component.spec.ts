import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanDataComponent } from './update-loan-data.component';

describe('UpdateLoanDataComponent', () => {
  let component: UpdateLoanDataComponent;
  let fixture: ComponentFixture<UpdateLoanDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLoanDataComponent]
    });
    fixture = TestBed.createComponent(UpdateLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
