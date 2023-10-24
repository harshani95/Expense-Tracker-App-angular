import { Component } from '@angular/core';
import { SalaryService } from '../Salary.service';

@Component({
  selector: 'app-load-all-salary-data',
  templateUrl: './load-all-salary-data.component.html',
  styleUrls: ['./load-all-salary-data.component.scss']
})
export class LoadAllSalaryDataComponent {
  salary:Array<any> = [];

  constructor(private service:SalaryService){

  }
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
// firestore collection
  delete(id:string){
    if(confirm('are you sure?')){
      this.service.delete(id)
    .then(response=>{
    this.salary = response;
    }).catch(error=>{
      console.log(error);
    })
    }
  }
}
