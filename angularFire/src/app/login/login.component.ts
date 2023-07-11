import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  AuthService;
  myForm: FormGroup;
  constructor(AuthService: AuthService) {
    this.AuthService = AuthService;
   this.myForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  submitForm(): void {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.AuthService?.SignIn(email,password).then((res) => {
      console.log("Login success", res);
      
    }

    ).catch((error) => {
      console.log("Login fail");
      
    })
  }
  ngOnInit(): void {
  }

}
