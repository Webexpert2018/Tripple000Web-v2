import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackpointsRoutingModule } from './trackpoints-routing.module';
import { TrackpointsComponent } from './trackpoints.component';



@NgModule({
  imports: [
    CommonModule,
    TrackpointsRoutingModule,
 
  ],
  declarations: [
    TrackpointsComponent
  ]
})

export class TrackpointsModule{
}
