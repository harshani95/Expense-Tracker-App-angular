import { Component } from '@angular/core';
import { ExpensesService } from '../Expenses.service';

@Component({
  selector: 'app-load-all-expenses-data',
  templateUrl: './load-all-expenses-data.component.html',
  styleUrls: ['./load-all-expenses-data.component.scss']
})
export class LoadAllExpensesDataComponent {
  expenses:Array<any> = [];

  constructor(private service:ExpensesService){

  }
  ngOnInit(): void {
   this.loadAll();
  }

 
  loadAll(){
   
    this.service.loadAll()
    .subscribe(response=>{
    this.expenses = response;
    },error=>{
      console.log(error);
      
    })
  }
// firestore collection
  delete(id:string){
    if(confirm('are you sure?')){
      this.service.delete(id)
    .then(response=>{
    this.expenses = response;
    }).catch(error=>{
      console.log(error);
    })
    }
  }
}
