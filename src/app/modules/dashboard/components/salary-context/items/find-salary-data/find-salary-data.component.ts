import { Component } from '@angular/core';
import { SalaryService } from '../Salary.service';


@Component({
  selector: 'app-find-salary-data',
  templateUrl: './find-salary-data.component.html',
  styleUrls: ['./find-salary-data.component.scss']
})

export class FindSalaryDataComponent {
  salary:Array<any> = [];

  constructor(private service:SalaryService){ }

  ngOnInit(): void {
   this.loadAll();
  }

  loadAll(){
    this.service.loadAll()
    .subscribe(response=>{
    this.salary = response;
    },error=>{
      console.log(error);
      
    })
  }
}
