
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile.component';
import { HeaderModule } from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    HeaderModule,
    FormsModule,
 
  ],
  declarations: [
    MyprofileComponent,
  ]
})

export class MyProfileModule{
}
