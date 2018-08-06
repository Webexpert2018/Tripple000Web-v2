import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationlistComponent } from './locationlist.component';

const routes: Routes = [
  { path: '', component: LocationlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsListRoutingModule { }
