import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { error } from 'console';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  AuthService;
  myForm: FormGroup;
  constructor(AuthService: AuthService) {
    this.AuthService = AuthService
    this.myForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  submitForm(): void {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    const confirmPassword = this.myForm.value.confirmPassword;
    if (password !== confirmPassword) {
      console.log("sai rooif");
      return;
    }
    this.AuthService?.SignUp(email, password).then((res) => {
      console.log("register successfully", res);

    }).catch((error) => {
      console.log("register error", error)

    })
  }

  ngOnInit(): void {
  }

}
