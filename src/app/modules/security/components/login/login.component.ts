import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = false;

  constructor(private router:Router, private auth : AngularFireAuth){
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.loginForm.valid) {
    let email = this.loginForm.get('email')?.value;
    let pwd = this.loginForm.get('password')?.value;

    this.auth.signInWithEmailAndPassword(email!,pwd!).then(response=>{
      this.router.navigateByUrl('/dashboard');
    })
  }
  }
}
