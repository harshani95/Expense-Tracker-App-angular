import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from './Loan';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private router:Router, private store : AngularFirestore){
  }

  createData(loan:Loan):Promise<any>{
      let id = this.store.createId();
      return this.store.doc(`loan/${id}`).set({...loan,id})
  }
  findDataById(id:string):Observable<any>{
      return this.store.doc(`loan/${id}`).valueChanges({idField:'id'});
  }
  updateData(loan:Loan):Promise<any>{
      const {id,...data}=loan;
      return this.store.doc(`loan/${id}`).update(data);
  }
  loadAll():Observable<any>{
      return this.store.collection<Loan>(`loan`)
      .valueChanges({idField:'id'});
  }
  delete(id:string):Promise<any>{
      return this.store.doc(`loan/${id}`).delete();
  }

}
