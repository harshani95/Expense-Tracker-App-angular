import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalaryService } from '../Salary.service';
import { Salary } from '../Salary';

@Component({
  selector: 'app-update-salary-data',
  templateUrl: './update-salary-data.component.html',
  styleUrls: ['./update-salary-data.component.scss']
})
export class UpdateSalaryDataComponent {
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
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    note:  new FormControl('', Validators.required),
    salary: new FormControl(0, Validators.required),
    date: new FormControl('', Validators.required)
  });

  findData(){

    this.service.findDataById(this.salaryDataForm.get('id')?.value!)
    .subscribe(response=>{
      this.salaryDataForm.patchValue({
        title:response.title,
        note:response.note,
        salary:response.salary,
        date:response.date
      });
    },error=>{
      console.log(error);

    })
  }
  async update() {
    this.disableButton = true;
    let data: Salary = {
      'id': this.salaryDataForm.get('id')?.value!,
      'title': this.salaryDataForm.get('title')?.value!,
      'note': this.salaryDataForm.get('note')?.value!,
      'salary': this.salaryDataForm.get('salary')?.value!,
      'date': this.salaryDataForm.get('date')?.value!
    }
    try {
      const response = await this.service.updateData(data);
      console.log(response);
      this.isAddSuccess = true;
      setTimeout(() => {
        this.resetFormAndSuccessState(); // Reset form and success state after 5 seconds
      }, 3000);
    } catch (error) {
      console.log(error);
      this.disableButton = false;
    }

  }
}
