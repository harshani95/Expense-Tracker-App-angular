import { Component } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  buttonText: string = 'Dashboard'; 
  newLoan: number |undefined;
  chart: ApexCharts | any;
  newSalary:number | undefined;
  newExpenses:number | undefined;
  chartData:  number[] = [50, 30, 10];;
  
  toggleMenu() {
   
  }

  @ViewChild('chart', { static: true }) chartElement!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    const options = {
      series: this.chartData,
      chart: {
        width: 600,
        type: 'pie',
      },
      labels: ['Salary', 'Expenses', 'Loan'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    this.chart = new ApexCharts(this.chartElement.nativeElement, options);
    this.chart.render();
  }

  updateChart() {
    if (this.chart) {
      this.chart.updateSeries(this.chartData);
    }
  }

  addData() {
    if (this.newSalary !== undefined && this.newExpenses !== undefined && this.newLoan !== undefined) {
      this.chartData = [this.newSalary, this.newExpenses, this.newLoan];
      this.updateChart();
      this.newSalary = undefined;
      this.newExpenses = undefined;
      this.newLoan = undefined;
    }
  }
}