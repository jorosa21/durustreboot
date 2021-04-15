import { RegisterService } from './../../services/auth/register/register.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error = "";
  loader = true;
  disSubmit: boolean = false;
  submitText: string = "Sign Up";

  constructor(private fb: FormBuilder, private service: RegisterService, private router: Router) {
     this.registerForm = this.fb.group({
      'Username': ['', Validators.required],
      'email_address': ['', Validators.required],
      'Password': ['', Validators.required]
    })
   }

  ngOnInit() {
    this.loader = false;
  }

  register(){
    this.disSubmit = true;
    this.submitText = "Loading ...";
    this.service.registerUser(this.registerForm.value).subscribe(data => { 
      this.router.navigate(['/login'])
      this.disSubmit = false;
      this.submitText = "Sign Up";
    })
  }

  get validate() {
    let ret = false;
    if(this.registerForm.get('Username')?.errors && this.registerForm.get('Username')?.touched && this.registerForm.get('email_address')?.errors && this.registerForm.get('email_address')?.touched
    && this.registerForm.get('Password')?.errors && this.registerForm.get('Password')?.touched){
      ret= true;
      this.error = "Username, Password and Email Address is required!";
    }
    else if(this.registerForm.get('Username')?.errors && this.registerForm.get('Username')?.touched){
      ret= true;
      this.error = "Username is required!";
    }
    else if(this.registerForm.get('email_address')?.errors && this.registerForm.get('email_address')?.touched){
      ret= true;
      this.error = "Email Address is required!";
    }
    else if(this.registerForm.get('Password')?.errors && this.registerForm.get('Password')?.touched){
      ret= true;
      this.error = "Password is required!";
    }
    else{
      this.error = "";
    }
    return ret;
  }

}
