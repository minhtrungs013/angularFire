import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SliderComponent } from './slider/slider.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzGridModule,
    NzFormModule,
    HomeRoutingModule,    
    AngularFireAuthModule,
  ]
})
export class HomeModule { }
