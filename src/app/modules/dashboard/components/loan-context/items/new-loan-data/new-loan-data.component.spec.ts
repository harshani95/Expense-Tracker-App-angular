import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoanDataComponent } from './new-loan-data.component';

describe('NewLoanDataComponent', () => {
  let component: NewLoanDataComponent;
  let fixture: ComponentFixture<NewLoanDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLoanDataComponent]
    });
    fixture = TestBed.createComponent(NewLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
