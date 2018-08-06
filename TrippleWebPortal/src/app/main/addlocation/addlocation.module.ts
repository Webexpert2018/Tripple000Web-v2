
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLocationRoutingModule } from './addlocation-routing.module';
import { AddlocationComponent } from './addlocation.component';

@NgModule({
  imports: [
    CommonModule,
    AddLocationRoutingModule
  ],
  declarations: [
    AddlocationComponent,
  ]
})

export class AddLocationModule{
}
