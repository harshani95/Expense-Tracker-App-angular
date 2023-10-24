import { Component } from '@angular/core';
import { SalaryService } from '../Salary.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Salary } from '../Salary';

@Component({
  selector: 'app-new-salary-data',
  templateUrl: './new-salary-data.component.html',
  styleUrls: ['./new-salary-data.component.scss']
})
export class NewSalaryDataComponent {
  isAddSuccess: boolean = false;
  disableButton: boolean = false;
  constructor(private service:SalaryService){

  }
  resetFormAndSuccessState() {
    this.isAddSuccess = false;
    this.disableButton = false;
    this.salaryDataForm.reset(); // Reset the form if needed
  }

  salaryDataForm= new FormGroup({
    title: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    salary: new FormControl(0, Validators.required)
  });

  save(){
    this.disableButton = true;
    let data:Salary={
      'title':this.salaryDataForm.get('title')?.value!,
      'note':this.salaryDataForm.get('note')?.value!,
      'salary':this.salaryDataForm.get('salary')?.value!,
      'date':this.salaryDataForm.get('date')?.value!
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
