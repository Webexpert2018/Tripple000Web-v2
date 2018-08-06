import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { HeaderModule, DialogModule, AlertModule } from '../../shared';
import { LocationlistComponent} from '../locationlist/locationlist.component';
import { AddlocationComponent } from '../addlocation/addlocation.component';
import { TripsListComponent } from '../tripslist/tripslist.component';
import { AgmCoreModule } from '@agm/core';
// import { } from '@types/googlemaps'
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    TabsModule.forRoot(),
    HeaderModule,
    DialogModule,
    AgmCoreModule,
    Ng4GeoautocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ],
  declarations: [
    LocationComponent,
    LocationlistComponent,
    AddlocationComponent,
    TripsListComponent
  ]
})

export class LocationModule{
}
