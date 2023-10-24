import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindExpensesDataComponent } from './find-expenses-data.component';

describe('FindExpensesDataComponent', () => {
  let component: FindExpensesDataComponent;
  let fixture: ComponentFixture<FindExpensesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindExpensesDataComponent]
    });
    fixture = TestBed.createComponent(FindExpensesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
