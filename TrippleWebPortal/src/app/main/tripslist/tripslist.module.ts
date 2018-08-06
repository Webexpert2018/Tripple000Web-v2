import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripslistRoutingModule } from './tripslist-routing.module';
import { TripsListComponent } from './tripslist.component';

@NgModule({
  imports: [
    CommonModule,
    TripslistRoutingModule
  ],
  declarations: [TripsListComponent]
})

export class TripslistModule{
}
