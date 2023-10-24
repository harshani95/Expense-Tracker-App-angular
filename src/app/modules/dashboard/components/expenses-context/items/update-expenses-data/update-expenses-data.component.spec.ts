import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpensesDataComponent } from './update-expenses-data.component';

describe('UpdateExpensesDataComponent', () => {
  let component: UpdateExpensesDataComponent;
  let fixture: ComponentFixture<UpdateExpensesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateExpensesDataComponent]
    });
    fixture = TestBed.createComponent(UpdateExpensesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
