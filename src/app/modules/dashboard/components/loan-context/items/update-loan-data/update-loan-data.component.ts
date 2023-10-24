import { Component } from '@angular/core';
import { LoanService } from '../Loan.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loan } from '../Loan';

@Component({
  selector: 'app-update-loan-data',
  templateUrl: './update-loan-data.component.html',
  styleUrls: ['./update-loan-data.component.scss']
})
export class UpdateLoanDataComponent {
  isAddSuccess: boolean = false;
  disableButton: boolean = false;

  constructor(private service:LoanService){
  }

  resetFormAndSuccessState() {
    this.isAddSuccess = false;
    this.disableButton = false;
    this.loanDataForm.reset(); // Reset the form if needed
  }

  loanDataForm= new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    cost: new FormControl(0, Validators.required),
    date: new FormControl('', Validators.required),
    installment: new FormControl('', Validators.required),
    repay: new FormControl('', Validators.required),
  });

  findData(){

    this.service.findDataById(this.loanDataForm.get('id')?.value!)
    .subscribe(response=>{
      this.loanDataForm.patchValue({
        title:response.title,
        note:response.note,
        cost:response.cost,
        date:response.date,
        installment:response.installment,
        repay:response.repay
      });
    },error=>{
      console.log(error);

    })
  }
  update(){
    this.disableButton = true;
    let data:Loan={
      'id':this.loanDataForm.get('id')?.value!,
      'title':this.loanDataForm.get('title')?.value!,
      'note':this.loanDataForm.get('note')?.value!,
      'cost':this.loanDataForm.get('cost')?.value!,
      'date':this.loanDataForm.get('date')?.value!,
      'installment':this.loanDataForm.get('installment')?.value!,
      'repay':this.loanDataForm.get('repay')?.value!
  }

    this.service.updateData(data)
    .then(response=>{
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



