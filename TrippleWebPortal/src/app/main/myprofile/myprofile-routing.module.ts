import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprofileComponent } from './myprofile.component';

const routes: Routes = [
  { path: '', component: MyprofileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
