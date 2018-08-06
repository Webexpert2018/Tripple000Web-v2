import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'main',
    children: [
      { path: 'dashboard', loadChildren: './main/dashboard/dashboard.module#DashboardModule' },
      { path: 'geolocations', loadChildren: './main/location/location.module#LocationModule' },
      { path: 'mycircle', loadChildren: './main/mycircle/mycircle.module#MyCircleModule' },
      { path: 'sossignals/:id', loadChildren: './main/sossignals/sossignals.module#SosSignalModule' },
      { path: 'sossignals', loadChildren: './main/sossignals/sossignals.module#SosSignalModule' },
      { path: 'profile', loadChildren: './main/myprofile/myprofile.module#MyProfileModule' },
    ],
    canActivate: [AuthGuard],
    runGuardsAndResolvers:'always'
  },
  {
    path: 'confirmemail',
    loadChildren: './confirm-email/confirm-email.module#ConfirmEmailModule'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
