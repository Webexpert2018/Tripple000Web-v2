import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycircleComponent } from './mycircle.component';

const routes: Routes = [
  { path: '', component: MycircleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCircleRoutingModule { }
