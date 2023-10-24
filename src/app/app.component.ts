import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracker-app';
  constructor(private auth : AngularFireAuth){
  }

  GoogleAuth() {
    return this.trigger(new GoogleAuthProvider());
  }


   trigger(provider:any): any{
    try{
      return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
    }catch(error){
      console.log(error);
      
    }
  }
}
