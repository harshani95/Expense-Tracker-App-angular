import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {
  isMenuOpen = false;
  showLogout: boolean = false;

  @Input() buttonLabel!: string;
  @Input()routerLink!: string;

  constructor() { }

  ngOnInit(): void {  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLogout() {
    this.showLogout = !this.showLogout;
  }

  logout() {
    // Implement your logout logic here, e.g., clear user session, navigate to login page, etc.
    console.log('Logging out...'); // Replace with your actual logout logic
  }


}



 