import { Component, OnInit, NgModule, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ViewChild, ViewChildren, ViewEncapsulation, QueryList } from '@angular/core';
import { User, PasswordModel } from './models/myprofileModel'
import { MyProfileService } from './myprofile.service'
import {LoginService} from '../../core/services/login.services'
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class MyprofileComponent implements OnInit {
  subscription: Subscription;
 // private subscription : Subscription;
  showProfileDialog = true;
  showEditPasswordDialog = true;
  showEMGPasswordDialog = true;
  showoldpwdtype = false;
  shownewpwdtype = false;
  showoldEMGpwdtype = false;
  shownewEMGpwdtype = false;
  txtpwdtype = "password";
  txtnewpwdtype = "password";
  txtnewEMGpwdtype = "password";
  txtoldEMGpwdtype = "password";
  cssOldPwd = "fa fa-eye-slash eye_icon";
  cssNewPwd = "fa fa-eye-slash eye_icon";
  cssOldEMgPwd = "fa fa-eye-slash eye_icon";
  cssNewEMgPwd = "fa fa-eye-slash eye_icon";
  model: any = {};
  pwdmodel: any = {};
  EMGpwdmodel: any = {};
  fileToUpload: File = null;
  modeldate: number;
  constructor(private MyProfileService: MyProfileService,
    private toastr: ToastrService, private loginService:LoginService) {

  }
  ngOnInit() {
    this.loadUser();    
    this.subscription = this.loginService.loggedInObservable.subscribe(val => {
      console.log(val);
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    let file: File = this.fileToUpload;
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.MyProfileService.uploadAvatar(formData).subscribe((data: User) => {
      localStorage.setItem('User', JSON.stringify(data)); 
      this.model = data;
      this.model.phoneNumber = data.phoneNumber == null ? "999999999" : data.phoneNumber;
      this.model.gender = data.gender == null ? "0" : data.gender;
      this.model.dob = new Date(data.dob);
      this.loginService.LoggedInUserSubject.next(this.loginService.checkIsLoggedIn());
      this.model.avatarUrl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + data.avatarId;
    },
      error => {
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });


  }
  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }
  errorHandler(event) {
    this.model.avatarUrl = "../../assets/img/user.png";
  }
  loadUser() {
    this.MyProfileService.getUserdetails().subscribe((data: User) => {     
      this.model = data;
      this.model.phoneNumber = data.phoneNumber == null ? "999999999" : data.phoneNumber;
      this.model.gender = data.gender == null ? "0" : data.gender;
      this.model.genderText=data.gender == "0" ? " " : data.gender=="1"?"Male":"Female";
      this.model.dob = new Date(data.dob);     
      this.model.avatarUrl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + data.avatarId;
    },
      error => {
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }

  calculateAge = function (dob) {

    if (dob != null) {
      this.modeldate = new Date(dob);
      var ageDifMs = Date.now() - this.modeldate;
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    else {
      return 0;
    }
  }
  showProfileEditDialogbox = function () {
    this.showProfileDialog = !this.showProfileDialog;
  }
  toggleOldPwdShow() {
   
    this.showoldpwdtype = !this.showoldpwdtype;
    if (this.showoldpwdtype) {
      this.txtpwdtype = "text";
      this.cssOldPwd="fa fa-eye eye_icon";
    }
    else {
      this.txtpwdtype = "password";
      this.cssOldPwd="fa fa-eye-slash eye_icon";
    }
  }  
  toggleNewPwdShow() {
    this.shownewpwdtype = !this.shownewpwdtype;
    if (this.shownewpwdtype) {
      this.txtnewpwdtype = "text";
      this.cssNewPwd="fa fa-eye eye_icon";
    }
    else {
      this.txtnewpwdtype = "password";
      this.cssNewPwd="fa fa-eye-slash eye_icon";
    }

  }
  toggleEMGOldPwdShow() {
    this.showoldEMGpwdtype = !this.showoldEMGpwdtype;
    if (this.showoldEMGpwdtype) {
      this.txtoldEMGpwdtype = "text";
      this.cssOldEMgPwd="fa fa-eye eye_icon";
    }
    else {
      this.txtoldEMGpwdtype = "password";
      this.cssOldEMgPwd="fa fa-eye-slash eye_icon";
    }
  }
  toggleEMGNewPwdShow() {
    this.shownewEMGpwdtype = !this.shownewEMGpwdtype;
    if (this.shownewEMGpwdtype) {
      this.txtnewEMGpwdtype = "text";
      this.cssNewEMgPwd="fa fa-eye eye_icon";
    }
    else {
      this.txtnewEMGpwdtype = "password";
      this.cssNewEMgPwd="fa fa-eye-slash eye_icon";
    }

  }
  saveProfile = function () {     
    this.MyProfileService.updateProfile(this.model).subscribe(
      x => {       
        localStorage.setItem('User', JSON.stringify(x)); 
        this.success = "Profile updated successfully";
        this.toastr.success("Profile updated successfully", 'Success');
        this.loginService.LoggedInUserSubject.next(this.loginService.checkIsLoggedIn());
        this.showProfileDialog = !this.showProfileDialog;
      },
      error => {
        this.error = error.statusText;
        this.loading = false;
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }

  editpassword = function () {
    this.showEditPasswordDialog = !this.showEditPasswordDialog;
  }
  editEMGpassword = function () {

    this.showEMGPasswordDialog = !this.showEMGPasswordDialog;
  }
  savepassword = function () {

    this.MyProfileService.updatePassword(this.pwdmodel).subscribe(
      x => {
        this.success = "Password updated successfully";
        this.toastr.success("Password updated successfully", 'Success');
        this.showEditPasswordDialog = !this.showEditPasswordDialog;
      },
      error => {
        this.error = error.statusText;
        this.loading = false;
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }
  saveEMGpassword = function () {


    this.MyProfileService.updateEMPassword(this.EMGpwdmodel).subscribe(
      x => {
        this.success = "Password updated successfully";
        this.toastr.success("Password updated successfully", 'Success');
        this.showEditPasswordDialog = !this.showEditPasswordDialog;
      },
      error => {
        this.error = error.statusText;
        this.loading = false;
        this.toastr.error("Error Occured " + error.statusText, 'Error');
      });
  }
  logoutUser = function () {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }
}




