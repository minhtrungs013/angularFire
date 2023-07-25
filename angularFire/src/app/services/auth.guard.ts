import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import {  AuthService } from './auth.service';
import {  inject } from '@angular/core';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn")
  //   const routes = inject(Router)
  // if(isLoggedIn === 'true'){
  //     routes.navigate(['/login']) 
  //     return true
  // }
  return true;
};
