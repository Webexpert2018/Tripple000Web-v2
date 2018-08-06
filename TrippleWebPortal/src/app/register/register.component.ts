import { RegisterService } from '../core/services/register.services';
import { registerUserModel, registerResponse } from '../core/models/registerUserModel';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  loading = false;
  error = '';
  success = '';
  registerResponseObj: registerResponse;
  model: any = {};
  username: string;
  password: string;
  constructor(
    private registerService: RegisterService, 
    private toastr: ToastrService,
    private router: Router) { }
  ngOnInit() {
  }

  registerUser(model): void {
    var output = this.registerService.registerUser(this.model).
      subscribe(
        x => {
          this.toastr.success('Login Successfull!', 'Success');
          this.router.navigate(['/']);
        },
        error => {
          this.error = error.error.message;
          this.loading = false;
          this.toastr.error('Error while registering.'+ error.error.message, 'Error');
          console.log("Error Occured", error);
        });

  }
}