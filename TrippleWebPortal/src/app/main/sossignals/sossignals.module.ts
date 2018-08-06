
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SosSignalsRoutingModule } from './sossignals-routing.module';
import { SosSignalsComponent } from './sossignals.component';
import { HeaderModule } from '../../shared';
import { ChatComponent } from '../chat/chat.component';
import { TrackpointsComponent } from '../trackpoints/trackpoints.component';
import { AgmCoreModule } from '@agm/core';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
    imports: [
        CommonModule,
        SosSignalsRoutingModule,
        HeaderModule,
        TabsModule.forRoot(),
        AgmCoreModule,
        OrderModule
    ],
    declarations: [
        SosSignalsComponent,
        TrackpointsComponent,
        ChatComponent
    ]
})

export class SosSignalModule {
}

