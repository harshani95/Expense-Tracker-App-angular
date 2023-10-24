import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../Loan.service';
import { Loan } from '../Loan';


@Component({
  selector: 'app-new-loan-data',
  templateUrl: './new-loan-data.component.html',
  styleUrls: ['./new-loan-data.component.scss']
})
export class NewLoanDataComponent {
  isAddSuccess: boolean = false;
  disableButton: boolean = false;

  constructor(private service:LoanService){}

  resetFormAndSuccessState() {
    this.isAddSuccess = false;
    this.disableButton = false;
    this.loanDataForm.reset(); // Reset the form if needed
  }


  loanDataForm= new FormGroup({
    title: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    cost: new FormControl(0, Validators.required),
    date: new FormControl('', Validators.required),
    installment: new FormControl('', Validators.required),
    repay: new FormControl('', Validators.required),
  });

  save(){
    this.disableButton = true;
    let data:Loan={
      'title':this.loanDataForm.get('title')?.value!,
      'note':this.loanDataForm.get('note')?.value!,
      'cost':this.loanDataForm.get('cost')?.value!,
      'date':this.loanDataForm.get('date')?.value!,
      'installment':this.loanDataForm.get('installment')?.value!,
      'repay':this.loanDataForm.get('repay')?.value!
  }

    this.service.createData(data).then(response=>{
      console.log(response);
      this.isAddSuccess = true; 
      setTimeout(() => {
        this.resetFormAndSuccessState(); // Reset form and success state after 5 seconds
      }, 3000);
    }).catch(error=>{
      console.log(error);
      this.disableButton = false;
      
    })
  }
}
