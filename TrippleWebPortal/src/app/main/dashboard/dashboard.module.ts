
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule
  ],
  declarations: [
    DashboardComponent,
  ]
})

export class DashboardModule{
}
