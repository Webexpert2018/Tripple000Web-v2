
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCircleRoutingModule } from './mycircle-routing.module';
import { MycircleComponent } from './mycircle.component';
import { HeaderModule, DialogModule } from '../../shared';
import { AddContactComponent } from '../addcontact/addcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyCircleRoutingModule,
    HeaderModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MycircleComponent,
    AddContactComponent
  ]
})

export class MyCircleModule {
}

