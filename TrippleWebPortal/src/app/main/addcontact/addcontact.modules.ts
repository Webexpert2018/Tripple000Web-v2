
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddContactRoutingModule } from './addcontact-routing.module';
import { AddContactComponent } from './addcontact.component';


@NgModule({
  imports: [
    CommonModule,
    AddContactRoutingModule,
  
  ],
  declarations: [
    AddContactComponent
  ]
})

export class AddContactModule{
}
