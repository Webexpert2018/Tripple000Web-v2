
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmEmailRoutingModule } from './confirm-email-routing.module';
import { ConfirmEmailComponent } from './confirm-email.component';

@NgModule({
  imports: [
    CommonModule,
    ConfirmEmailRoutingModule
  ],
  declarations: [
    ConfirmEmailComponent,
  ]
})

export class ConfirmEmailModule{
}
