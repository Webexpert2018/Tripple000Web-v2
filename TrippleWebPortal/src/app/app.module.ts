import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
// import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompareValidatorDirective } from './shared/validators/compare-validator.directive';
import { AuthGuard } from './shared';
import { LoginService, RegisterService } from './core';
import { AuthenticationService } from './core/services/auth.service';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { TokenInterceptor } from './core/services/interceptor';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { DataService } from './core/services/data.service';
import { AlertService } from './shared/alert/alert.service';
import { MyProfileService } from '../app/main/myprofile/myprofile.service';
import { MyCircleService } from '../app/main/mycircle/mycircle.service';
import { SosSignalsService } from '../app/main/sossignals/sossignals.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SosSignalModule} from './main/sossignals/sossignals.module';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CompareValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,// required animations module
    HttpClientModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    // NgProgressRouterModule,
    NgProgressHttpModule,
    HttpModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton:true
    }), // ToastrModule added
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkFE3yHxmjakZiQbPB8WsFQB1KoM-zoIw'
    }),
    Ng4GeoautocompleteModule.forRoot(),
    NgxSpinnerModule,
    SosSignalModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    RegisterService,
    DataService,
    AlertService,
    MyProfileService,
    MyCircleService,
    SosSignalsService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
