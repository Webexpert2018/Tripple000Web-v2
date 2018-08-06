import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../Register/register.component';
import { DialogModule } from '../shared';
import { NgProgressModule } from '@ngx-progressbar/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    NgProgressModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ]
})

export class HomeModule {
}