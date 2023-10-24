import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { Expense } from "./Expense";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ExpensesService{
    constructor(private router:Router, private store : AngularFirestore){
    }

    createData(expense:Expense):Promise<any>{
        let id = this.store.createId();
        return this.store.doc(`expenses/${id}`).set({...expense,id})
    }
    findDataById(id:String):Observable<any>{
        return this.store.doc(`expenses/${id}`).valueChanges({idField:'id'});
    }
    updateData(expense:Expense):Promise<any>{
        const {id,...data}=expense;
        return this.store.doc(`expenses/${id}`).update(data);
    }
    loadAll():Observable<any>{
        return this.store.collection<Expense>(`expenses`)
        .valueChanges({idField:'id'});
    }
    delete(id:String):Promise<any>{
        return this.store.doc(`expenses/${id}`).delete();
    }

}
