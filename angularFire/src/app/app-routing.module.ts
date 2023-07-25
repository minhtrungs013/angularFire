import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './services/auth.guard';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const appRoutes: Routes = [{
  path: '',
  loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  canActivate: [authGuard]
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
},
{ path: 'register', component: RegisterComponent }];




@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
