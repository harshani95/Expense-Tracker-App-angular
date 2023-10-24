import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  showPassword: boolean = false;
  registrationSuccess: boolean = false;
 
  constructor(private auth : AngularFireAuth, private router : Router){
  }

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signup() {
    let email = this.signupForm.get('email')?.value;
    let password = this.signupForm.get('password')?.value;
    let name = this.signupForm.get('name')?.value;

    this.auth.createUserWithEmailAndPassword(email!,password!).then(response=>{
      console.log('Sucsessflly Registered',response);

      this.registrationSuccess = true; 

      setTimeout(() => {
      this.router.navigateByUrl('/security/login'); 
    }, 3000);
  })
      .catch(error => {
        console.error('Signup error:', error);
      });
  }
}