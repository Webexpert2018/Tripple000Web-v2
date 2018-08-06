import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.services';
import { registerUserModel, registerResponse, loginRequestModel } from '../core/models/registerUserModel';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgProgress } from '@ngx-progressbar/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  email: string;
  pwd: string;
  returnUrl: string;
  constructor(private loginService: LoginService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    public progress: NgProgress,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.returnUrl = this.route['dashboard'] || '/';
  }

  onSubmit(): void {
    this.spinner.show(); 
    this.progress.start();
    this.email = this.model.email;
    this.pwd = this.model.password;
    var output = this.loginService.login(this.email, this.pwd).subscribe(
      data => {
        this.GetUserdetails();
        this.toastr.success('Login Successfull!', 'Success');
        this.router.navigate(['/main/dashboard']);
        this.spinner.hide(); 
        //this.progress.complete();
      },
      error => {
        // this.error = error.statusText + ". Please check your credentials";
        this.loading = false;
        this.toastr.error('Please check your credentials', 'Error');
        console.log("Error Occured", error);
        //this.progress.complete();
        this.spinner.hide(); 
      });
  }

  login() {
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
          return;
        },
        error => {
          // this.error = error.statusText + ". Please check your credentials";
          console.log("Error Occured", error);
        });
  }
  GetUserdetails() {
    this.loginService.getUserDetails()
      .subscribe(
        data => {  
         return;         
        },
        error => {
          // this.error = error.statusText + ". Please check your credentials";
          console.log("Error Occured", error);
        });
  }
}