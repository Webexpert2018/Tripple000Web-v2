import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SosSignalsComponent } from './sossignals.component';

import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
const routes: Routes = [
  { 
    path: '', component: SosSignalsComponent},
    // { 
      // path: 'sossignal/:id', component: SosSignalsComponent
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SosSignalsRoutingModule { }
