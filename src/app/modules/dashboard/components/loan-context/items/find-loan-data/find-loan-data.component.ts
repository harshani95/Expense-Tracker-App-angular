import { Component } from '@angular/core';
import { LoanService } from '../Loan.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-loan-data',
  templateUrl: './find-loan-data.component.html',
  styleUrls: ['./find-loan-data.component.scss']
})
export class FindLoanDataComponent {
  loan:Array<any> = [];

  constructor(private service:LoanService){

  }
  ngOnInit(): void {
   this.loadAll();
  }

 
  loadAll(){
   
    this.service.loadAll()
    .subscribe(response=>{
    this.loan = response;
    },error=>{
      console.log(error);
      
    })
 

  }
}
