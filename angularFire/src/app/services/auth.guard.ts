import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class AuthGuard {

  constructor(
  public authService: AuthService,
  public router: Router
  ){ }

  checkLogin(): boolean {
    return this.authService.checkToken();
  }
}


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).checkLogin();
};
