import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';

@Component({
  selector: 'app-loan-context',
  templateUrl: './loan-context.component.html',
  styleUrls: ['./loan-context.component.scss']
})
export class LoanContextComponent {
  buttonText: String= 'Loan';

  toggleMenu() {

  }
}
