import { Component } from '@angular/core';
import { LoanService } from '../Loan.service';

@Component({
  selector: 'app-load-all-loan-data',
  templateUrl: './load-all-loan-data.component.html',
  styleUrls: ['./load-all-loan-data.component.scss']
})
export class LoadAllLoanDataComponent {
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
// firestore collection
  delete(id:string){
    if(confirm('are you sure?')){
      this.service.delete(id)
    .then(response=>{
    this.loan = response;
    }).catch(error=>{
      console.log(error);
    })
    }
  }
}
