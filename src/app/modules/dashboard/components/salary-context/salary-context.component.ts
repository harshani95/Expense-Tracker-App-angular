import { Component } from '@angular/core';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';


@Component({
  selector: 'app-salary-context',
  templateUrl: './salary-context.component.html',
  styleUrls: ['./salary-context.component.scss']
})
export class SalaryContextComponent {
  buttonText: string = 'Salary'; 

  toggleMenu() {
   
  }
}


