import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsListRoutingModule } from './locationlist-routing.module';
import { LocationlistComponent } from './locationlist.component';
import { AgmCoreModule } from '@agm/core';
import { DialogModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    LocationsListRoutingModule, 
    DialogModule,
  ],
  declarations: [
    LocationlistComponent,
  ]
})

export class LocationsModule{
}
