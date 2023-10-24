import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpensesService } from '../Expenses.service';

@Component({
  selector: 'app-find-expenses-data',
  templateUrl: './find-expenses-data.component.html',
  styleUrls: ['./find-expenses-data.component.scss']
})

export class FindExpensesDataComponent {
  expense:Array<any> = [];

  constructor(private service:ExpensesService){ }

  ngOnInit(): void {
   this.loadAll();
  }

  loadAll(){
    this.service.loadAll()
    .subscribe(response=>{
    this.expense = response;
    },error=>{
      console.log(error);
      
    })
  }
}