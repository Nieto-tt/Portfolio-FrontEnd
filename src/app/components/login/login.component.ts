import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm:FormGroup;
  error: boolean = false;
  showPassword: boolean = false;
  msj: String ="";

  constructor(private formBuilder : FormBuilder,private route: Router, private authentication:AuthenticationService){
    this.loginForm = formBuilder.group(
      {
        email:['',[Validators.required,Validators.email, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  get email(){
    return this.loginForm.get("email");
  }

  get password(){
    return this.loginForm.get("password");
  }

  login() {
    if(this.loginForm.valid) {
      const email = this.email?.value;
      const password = this.password?.value;
      if (email && password) {
        this.authentication.login(email, password).subscribe(
          data => {
            // Login successful, save token or user data if needed
            // Redirect to home page or desired route
            this.route.navigate(['/portfolio']);
          },
          error => {
            // Login failed, show error message if needed
            this.error = true;
            console.log(this.msj = error.message);
          }
        );
      }
    }
  }

  showPass() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
  }
}
