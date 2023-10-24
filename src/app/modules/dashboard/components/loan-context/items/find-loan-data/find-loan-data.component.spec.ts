import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLoanDataComponent } from './find-loan-data.component';

describe('FindLoanDataComponent', () => {
  let component: FindLoanDataComponent;
  let fixture: ComponentFixture<FindLoanDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindLoanDataComponent]
    });
    fixture = TestBed.createComponent(FindLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
