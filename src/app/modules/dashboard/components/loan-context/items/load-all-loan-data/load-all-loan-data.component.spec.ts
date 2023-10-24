import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllLoanDataComponent } from './load-all-loan-data.component';

describe('LoadAllLoanDataComponent', () => {
  let component: LoadAllLoanDataComponent;
  let fixture: ComponentFixture<LoadAllLoanDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadAllLoanDataComponent]
    });
    fixture = TestBed.createComponent(LoadAllLoanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
