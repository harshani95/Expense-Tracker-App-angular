import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Salary} from './Salary';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private router:Router, private store : AngularFirestore){
  }

  createData(salary:Salary):Promise<any>{
      let id = this.store.createId();
      return this.store.doc(`salary/${id}`).set({...salary,id})
  }

  findDataById(id:String):Observable<any>{
      return this.store.doc(`salary/${id}`).valueChanges({idField:'id'});
  }

  updateData(salary:Salary):Promise<any>{
      const {id,...data}=salary;
      return this.store.doc(`salary/${id}`).update(data);
  }

  loadAll():Observable<any>{
      return this.store.collection<Salary>(`salary`)
      .valueChanges({idField:'id'});
  }

  delete(id:String):Promise<any>{
      return this.store.doc(`salary/${id}`).delete();
  }

}
