import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContextComponent } from './components/dashboard-context/dashboard-context.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ExpensesContextComponent } from './components/expenses-context/expenses-context.component';
import { SalaryContextComponent } from './components/salary-context/salary-context.component';
import { LoanContextComponent } from './components/loan-context/loan-context.component';
import { DefaultComponent } from './components/default/default.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExpensesDataComponent } from './components/expenses-context/items/new-expenses-data/new-expenses-data.component';
import { FindExpensesDataComponent } from './components/expenses-context/items/find-expenses-data/find-expenses-data.component';
import { LoadAllExpensesDataComponent } from './components/expenses-context/items/load-all-expenses-data/load-all-expenses-data.component';
import { UpdateExpensesDataComponent } from './components/expenses-context/items/update-expenses-data/update-expenses-data.component';
import { NewLoanDataComponent } from './components/loan-context/items/new-loan-data/new-loan-data.component';
import { FindLoanDataComponent } from './components/loan-context/items/find-loan-data/find-loan-data.component';
import { LoadAllLoanDataComponent } from './components/loan-context/items/load-all-loan-data/load-all-loan-data.component';
import { UpdateLoanDataComponent } from './components/loan-context/items/update-loan-data/update-loan-data.component';
import { UpdateSalaryDataComponent } from './components/salary-context/items/update-salary-data/update-salary-data.component';
import { LoadAllSalaryDataComponent } from './components/salary-context/items/load-all-salary-data/load-all-salary-data.component';
import { FindSalaryDataComponent } from './components/salary-context/items/find-salary-data/find-salary-data.component';
import { NewSalaryDataComponent } from './components/salary-context/items/new-salary-data/new-salary-data.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContextComponent,
    DashboardHeaderComponent,
    ExpensesContextComponent,
    SalaryContextComponent,
    LoanContextComponent,
    DefaultComponent,
    NewExpensesDataComponent,
    FindExpensesDataComponent,
    LoadAllExpensesDataComponent,
    UpdateExpensesDataComponent,
    NewLoanDataComponent,
    FindLoanDataComponent,
    LoadAllLoanDataComponent,
    UpdateLoanDataComponent,
    UpdateSalaryDataComponent,
    LoadAllSalaryDataComponent,
    FindSalaryDataComponent,
    NewSalaryDataComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
   
    
  ]
})
export class DashboardModule { }
