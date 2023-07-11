import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  user: any | undefined;
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  isLoggedIn = false
  constructor(
    public router: Router,
  ) {
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //   } else {
    //     localStorage.setItem('user', '');
    //   }
    // });
  }
  checkToken(): boolean {
    if(!this.isLoggedIn){
      return false
    }
    return true
  }

  SignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        if(result){
          this.router.navigate(['/login']) 
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword( this.auth, email, password)
      .then((result) => { 
        if(result){
          console.log(result.user.email);
          localStorage.setItem("email",JSON.stringify(result?.user?.email))
          localStorage.setItem("isLoggedIn",JSON.stringify(true))
          this.isLoggedIn = true
          this.router.navigate(['/']) 
        }
      })
      .catch((error) => { window.alert(error.message);
      });
  }
}
