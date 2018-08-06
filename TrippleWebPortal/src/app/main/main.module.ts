import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { LocationlistComponent } from './locationlist/locationlist.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { TripsListComponent } from './tripslist/tripslist.component';
import { MycircleComponent } from './mycircle/mycircle.component';
import { AddContactComponent } from './addcontact/addcontact.component';
import { SosSignalsComponent } from './sossignals/sossignals.component';
import { ChatComponent } from './chat/chat.component';
import { TrackpointsComponent } from './trackpoints/trackpoints.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../core/services/interceptor';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    DashboardComponent,
    LocationComponent,
    LocationlistComponent,
    AddlocationComponent,
    TripsListComponent,
    MycircleComponent,
    AddContactComponent,
    SosSignalsComponent,
    ChatComponent,
    TrackpointsComponent,
    MyprofileComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})

export class MainModule {
}