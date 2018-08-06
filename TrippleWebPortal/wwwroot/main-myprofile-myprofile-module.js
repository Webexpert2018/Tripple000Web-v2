(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-myprofile-myprofile-module"],{

/***/ "./src/app/main/myprofile/myprofile-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/myprofile/myprofile-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MyProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileRoutingModule", function() { return MyProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myprofile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myprofile.component */ "./src/app/main/myprofile/myprofile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _myprofile_component__WEBPACK_IMPORTED_MODULE_2__["MyprofileComponent"] }
];
var MyProfileRoutingModule = /** @class */ (function () {
    function MyProfileRoutingModule() {
    }
    MyProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MyProfileRoutingModule);
    return MyProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/myprofile/myprofile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/myprofile/myprofile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n    <div class=\"col-sm-offset-1\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"white_container\">\r\n                <h1>My Account</h1>\r\n                <div class=\"text-center userPic\">   \r\n                    <div class=\"userPic_outer\">\r\n                    <div class=\"userPic_inner\">\r\n                        <img src=\"{{model.avatarUrl}}\" (error)=\"errorHandler($event)\" alt=\"Profile Pic\">\r\n                    </div> \r\n                    <label *ngIf=\"!showProfileDialog\" for=\"file\">\r\n                            <span class=\"fa fa-camera\"></span>\r\n                    </label>                \r\n                </div>\r\n                    <input style=\"display: none;\" *ngIf=\"!showProfileDialog\" type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" />\r\n                </div>\r\n                <div class=\"infoProfile1\">\r\n\r\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid && saveProfile()\" #f=\"ngForm\">\r\n                        <div class=\"userSection\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Name</label>\r\n                                        <p *ngIf=\"showProfileDialog\">{{model.firstName}}</p>\r\n                                        <div *ngIf=\"!showProfileDialog\">\r\n                                            <input value={{firstName}} type=\"text\" class=\"form-control custom_form\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\r\n                                                [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required />\r\n                                            <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                                <div *ngIf=\"firstName.errors.required\">\r\n                                                    FirstName is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Surname</label>\r\n                                        <p *ngIf=\"showProfileDialog\">{{model.lastName}}</p>\r\n                                        <div *ngIf=\"!showProfileDialog\">\r\n                                            <input value={{lastName}} name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" type=\"text\" class=\"form-control custom_form\"\r\n                                                [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required>\r\n                                            <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                                <div *ngIf=\"lastName.errors.required\">\r\n                                                    lastName is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Email</label>\r\n                                        <p *ngIf=\"showProfileDialog\">{{model.email}}</p>\r\n                                        <div *ngIf=\"!showProfileDialog\">\r\n                                            <input type=\"email\" email value={{email}} name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\r\n                                                required class=\"form-control custom_form\">\r\n                                            <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                                <div *ngIf=\"email.errors.required\">\r\n                                                    Email is required\r\n                                                </div>\r\n                                                <div *ngIf=\"email.errors?.email\">\r\n                                                    Email is not valid.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Phone Number</label>\r\n                                        <p *ngIf=\"showProfileDialog\">{{model.phoneNumber}}</p>\r\n                                        <div *ngIf=\"!showProfileDialog\">\r\n                                            <input value={{phoneNumber}} type=\"text\" maxlength=\"10\" pattern=\"[0-9]+\" name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\"\r\n                                                #phoneNumber=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phoneNumber.invalid }\"\r\n                                                required class=\"form-control custom_form\" placeholder=\"\">\r\n                                            <div *ngIf=\"f.submitted && phoneNumber.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                                <div *ngIf=\"phoneNumber.errors.required\">\r\n                                                    phoneNumber is required\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"phoneNumber.errors.pattern\">\r\n                                                    phoneNumber is invalid\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Age</label>\r\n                                        <p *ngIf=\"showProfileDialog\">{{calculateAge(model.dob)}}</p>\r\n                                        <div *ngIf=\"!showProfileDialog\">\r\n                                            <input [ngModel]=\"model.dob | date:'yyyy-MM-dd'\" (ngModelChange)=\"model.dob = $event\" type=\"date\" name=\"startDate\" />\r\n                                            <!-- <input   type=\"date\" [ngModel] =\"model.dob\"  value=\"{{model.dob| date : 'yyyy-MM-dd'}}\"  > -->\r\n\r\n                                            <!-- <input valueAsDate={{model.dob|date)} (ngModelChange)=\"dt = $event\" pattern=\"dd/MM/YYYY\" name=\"dob\" [(ngModel)]=\"model.dob\"\r\n                                                #dob=\"ngModel\" type=\"date\" class=\"form-control custom_form\" placeholder=\"21\"> -->\r\n                                            <!-- <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                            <div *ngIf=\"firstName.errors.required\">\r\n                                                FirstName is required\r\n                                            </div>\r\n                                        </div> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Gender</label>\r\n                                        <p *ngIf=\"showProfileDialog\">{{model.genderText}}</p>\r\n                                        <div *ngIf=\"!showProfileDialog\">\r\n                                                <select name=\"gender\" required #gender=\"ngModel\" [(ngModel)]=\"model.gender\"> \r\n                                                        <option [ngValue]=\"0\" disabled>Please select</option>\r\n                                                        <option [ngValue]=\"1\" >Male</option>\r\n                                                        <option [ngValue]=\"2\" >Female</option>                                                       \r\n                                                    </select> \r\n                                            <!-- <input value={{gender}} name=\"gender\" [(ngModel)]=\"model.gender\" #gender=\"ngModel\" type=\"text\" [ngClass]=\"{ 'is-invalid': f.submitted && gender.invalid }\"\r\n                                                required class=\"form-control custom_form\"> -->\r\n                                            <div *ngIf=\"f.submitted && gender.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                                <div *ngIf=\"gender.errors.required\">\r\n                                                    gender is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\">\r\n                                        <button type=\"button\" (click)=\"logoutUser()\" class=\"btn register_btn\">Logout</button>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">\r\n                                        <button type=\"button\" *ngIf=\"showProfileDialog\" (click)=\"showProfileEditDialogbox();\" class=\"btn btn_signin\">Edit</button>\r\n                                        <button type=\"submit\" *ngIf=\"!showProfileDialog\" class=\"btn btn_signin\">save</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"white_container accPwd\">\r\n\r\n                <!-- <div class=\"infoProfile2\">\r\n                <button type=\"button\" class=\"btn btn_signin\">Change Password</button>\r\n            </div> -->\r\n                <div class=\"infoProfile2 m-t-30\">\r\n                    <h1>Account Password</h1>\r\n                    <form name=\"form\" (ngSubmit)=\"p.form.valid && savepassword()\" #p=\"ngForm\">\r\n                        <div *ngIf=\"!showEditPasswordDialog\" class=\"row\">\r\n                            <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Old Password</label>\r\n                                    <input name=\"oldPassword\" [(ngModel)]=\"pwdmodel.oldPassword\" #oldPassword=\"ngModel\"  type=\"{{txtpwdtype}}\" class=\"form-control custom_form\"\r\n                                        [ngClass]=\"{ 'is-invalid': p.submitted && oldPassword.invalid }\" required placeholder=\"\">\r\n                                    <div *ngIf=\"p.submitted && oldPassword.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                        <div *ngIf=\"oldPassword.errors.required\">\r\n                                            Old Password is required\r\n                                        </div>\r\n                                    </div>\r\n                                \r\n                                    <i  class=\"{{cssOldPwd}}\"   (click)=\"toggleOldPwdShow()\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label>New Password</label>\r\n                                    <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"pwdmodel.newPassword\"  type=\"{{txtnewpwdtype}}\" #newPassword=\"ngModel\" class=\"form-control custom_form\"\r\n                                        [ngClass]=\"{ 'is-invalid': p.submitted && newPassword.invalid }\" required placeholder=\"\">\r\n                                    <div *ngIf=\"p.submitted && newPassword.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                        <div *ngIf=\"newPassword.errors.required\">\r\n                                            New Password is required\r\n                                        </div>\r\n                                    </div>\r\n                                    <i class=\"{{cssNewPwd}}\"  (click)=\"toggleNewPwdShow()\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Confirm Password</label>\r\n                                    <input type=\"password\" class=\"form-control custom_form\" required placeholder=\"*******\">\r\n                                    <i class=\"fa fa-eye eye_icon\" aria-hidden=\"true\"></i>                \r\n                                </div>\r\n                        </div> -->\r\n                        </div>\r\n                        <button *ngIf=\"showEditPasswordDialog\" type=\"button\" (click)=\"editpassword();\" class=\"btn btn_signin\">Change Password</button>\r\n                        <button *ngIf=\"!showEditPasswordDialog\" type=\"submit\" class=\"btn btn_signin\">Save</button>\r\n                        <button *ngIf=\"!showEditPasswordDialog\" type=\"button\" (click)=\"editpassword();\" class=\"btn register_btn\">Cancel</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"white_container\">\r\n\r\n                <div class=\"infoProfile3 m-t-30\">\r\n                    <h1>Emergency Password</h1>\r\n                    <form name=\"form\" (ngSubmit)=\"emg.form.valid && saveEMGpassword()\" #emg=\"ngForm\">\r\n                        <div *ngIf=\"showEMGPasswordDialog\" class=\"emergencyPwd\">\r\n                            <div class=\"form-group\">\r\n                                <label>Hint to Emergency mode password</label>\r\n                                <p>Mother's maiden name?</p>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"!showEMGPasswordDialog\" class=\"emergencyPwd\">\r\n\r\n                            <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Old Password</label>\r\n                                    <input type=\"password\"  type=\"{{txtoldEMGpwdtype}}\" name=\"oldPassword\" [ngClass]=\"{ 'is-invalid': emg.submitted && newPassword.invalid }\" [(ngModel)]=\"EMGpwdmodel.oldPassword\"\r\n                                        #oldPassword=\"ngModel\" type=\"password\" class=\"form-control custom_form\" required placeholder=\"*******\">\r\n                                    <div *ngIf=\"emg.submitted && newPassword.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                        <div *ngIf=\"newPassword.errors.required\">\r\n                                            Old Password is required\r\n                                        </div>\r\n                                    </div>\r\n                                   \r\n                                    <i class=\"{{cssOldEMgPwd}}\"  (click)=\"toggleEMGOldPwdShow()\"  class=\"fa fa-eye-slash eye_icon\"  aria-hidden=\"true\"></i>\r\n                          \r\n                                  \r\n                                    \r\n                                  \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label>New Password</label>\r\n                                    <input type=\"password\"  type=\"{{txtnewEMGpwdtype}}\" name=\"newPassword\" [ngClass]=\"{ 'is-invalid': emg.submitted && newPassword.invalid }\" [(ngModel)]=\"EMGpwdmodel.newPassword\"\r\n                                        #newPassword=\"ngModel\" type=\"password\" class=\"form-control custom_form\" required placeholder=\"*******\">\r\n                                    <div *ngIf=\"emg.submitted && newPassword.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                                        <div *ngIf=\"newPassword.errors.required\">\r\n                                            New Password is required\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <i class=\"{{cssNewEMgPwd}}\" class=\"fa fa-eye eye_icon\" (click)=\"toggleEMGNewPwdShow()\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Confirm Password</label>\r\n                                        <input type=\"password\" class=\"form-control custom_form\" required placeholder=\"*******\">\r\n                                        <i class=\"fa fa-eye eye_icon\" aria-hidden=\"true\"></i>                \r\n                                    </div>\r\n                                </div> -->\r\n                            <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Hint to Emergency mode password</label>\r\n                                    <input type=\"text\" class=\"form-control custom_form\" required placeholder=\"Mother's maiden name?\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <button *ngIf=\"showEMGPasswordDialog\" type=\"button\" (click)=\"editEMGpassword();\" class=\"btn btn_signin\">Edit</button>\r\n                        <button *ngIf=\"!showEMGPasswordDialog\" type=\"submit\" class=\"btn btn_signin\">Save</button>\r\n                        <button *ngIf=\"!showEMGPasswordDialog\" type=\"button\" (click)=\"editEMGpassword();\" class=\"btn register_btn\">Cancel</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/myprofile/myprofile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/myprofile/myprofile.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input::-webkit-input-placeholder {\n  color: #000 !important;\n  font-size: 14px; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000 !important;\n  font-size: 14px; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000 !important;\n  font-size: 14px; }\n\n.white_container {\n  background: #fff;\n  margin: 1% auto 10%;\n  padding: 25px;\n  vertical-align: middle;\n  text-align: left;\n  float: left;\n  width: 100%;\n  border: solid 1px #e5e9f2;\n  box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n  border-radius: 6px; }\n\n.white_container .m-t-30 {\n    margin-top: 30px; }\n\n.white_container h1 {\n    margin-top: 0px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    margin-bottom: 0px;\n    color: #212121; }\n\n.white_container .btn_signin {\n    background: #8c91da;\n    float: left;\n    width: 100%;\n    color: #fff;\n    padding: 12px;\n    margin-top: 18px;\n    font-size: 16px; }\n\n.white_container .eye_icon {\n    position: absolute;\n    right: 14px;\n    top: 29px;\n    font-size: 20px;\n    color: #cccdd4; }\n\n.white_container .register_btn {\n    float: left;\n    width: 100%;\n    background: #fff;\n    box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n    padding: 12px;\n    border: solid 1px #e5e9f2;\n    margin-top: 20px;\n    font-size: 16px; }\n\n.white_container .userPic {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    clear: both;\n    float: left;\n    width: 100%; }\n\n.white_container .userPic .userPic_outer {\n      width: 158px;\n      height: 156px;\n      display: inline-block;\n      position: relative; }\n\n.white_container .userPic .userPic_outer .userPic_inner {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        border-radius: 100px; }\n\n.white_container .userPic .userPic_outer .userPic_inner img {\n          width: 100%;\n          height: 100%; }\n\n.white_container .userPic .userPic_outer label {\n        position: absolute;\n        right: 6px;\n        bottom: 0; }\n\n.white_container .userPic .userPic_outer label .fa {\n          color: #fff;\n          border: solid 3px #fff;\n          padding: 7px;\n          border-radius: 100px;\n          background: rgba(0, 0, 0, 0.5); }\n\n.white_container .emergencyPwd {\n    background: #fff !important;\n    padding: 20px 0 !important; }\n\n.white_container .editProfile1, .white_container .editProfile2, .white_container .editProfile3 {\n    display: none; }\n\n.white_container .infoProfile1, .white_container .infoProfile2, .white_container .infoProfile3, .white_container .editProfile1, .white_container .editProfile2, .white_container .editProfile3 {\n    float: left;\n    width: 100%;\n    clear: both; }\n\n.white_container .infoProfile1 label, .white_container .infoProfile2 label, .white_container .infoProfile3 label, .white_container .editProfile1 label, .white_container .editProfile2 label, .white_container .editProfile3 label {\n      color: #9d9d9d;\n      font-weight: normal;\n      font-size: 12px !important; }\n\n.white_container .infoProfile1 .custom_form, .white_container .infoProfile2 .custom_form, .white_container .infoProfile3 .custom_form, .white_container .editProfile1 .custom_form, .white_container .editProfile2 .custom_form, .white_container .editProfile3 .custom_form {\n      border: none !important;\n      border-bottom: solid 1px #ccc !important;\n      box-shadow: none !important;\n      border-radius: 0px !important;\n      padding-left: 0px !important;\n      background: none !important; }\n\n.white_container .infoProfile1 .userSection, .white_container .infoProfile1 .emergencyPwd, .white_container .infoProfile2 .userSection, .white_container .infoProfile2 .emergencyPwd, .white_container .infoProfile3 .userSection, .white_container .infoProfile3 .emergencyPwd, .white_container .editProfile1 .userSection, .white_container .editProfile1 .emergencyPwd, .white_container .editProfile2 .userSection, .white_container .editProfile2 .emergencyPwd, .white_container .editProfile3 .userSection, .white_container .editProfile3 .emergencyPwd {\n      background: #f8f8f8;\n      padding: 20px;\n      clear: both;\n      float: left;\n      width: 100%; }\n\n.white_container p {\n    color: #000 !important;\n    font-size: 14px; }\n\n.accPwd h1 {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/main/myprofile/myprofile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/myprofile/myprofile.component.ts ***!
  \*******************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myprofile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myprofile.service */ "./src/app/main/myprofile/myprofile.service.ts");
/* harmony import */ var _core_services_login_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/login.services */ "./src/app/core/services/login.services.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyprofileComponent = /** @class */ (function () {
    function MyprofileComponent(MyProfileService, toastr, loginService) {
        this.MyProfileService = MyProfileService;
        this.toastr = toastr;
        this.loginService = loginService;
        // private subscription : Subscription;
        this.showProfileDialog = true;
        this.showEditPasswordDialog = true;
        this.showEMGPasswordDialog = true;
        this.showoldpwdtype = false;
        this.shownewpwdtype = false;
        this.showoldEMGpwdtype = false;
        this.shownewEMGpwdtype = false;
        this.txtpwdtype = "password";
        this.txtnewpwdtype = "password";
        this.txtnewEMGpwdtype = "password";
        this.txtoldEMGpwdtype = "password";
        this.cssOldPwd = "fa fa-eye-slash eye_icon";
        this.cssNewPwd = "fa fa-eye-slash eye_icon";
        this.cssOldEMgPwd = "fa fa-eye-slash eye_icon";
        this.cssNewEMgPwd = "fa fa-eye-slash eye_icon";
        this.model = {};
        this.pwdmodel = {};
        this.EMGpwdmodel = {};
        this.fileToUpload = null;
        this.calculateAge = function (dob) {
            if (dob != null) {
                this.modeldate = new Date(dob);
                var ageDifMs = Date.now() - this.modeldate;
                var ageDate = new Date(ageDifMs); // miliseconds from epoch
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            }
            else {
                return 0;
            }
        };
        this.showProfileEditDialogbox = function () {
            this.showProfileDialog = !this.showProfileDialog;
        };
        this.saveProfile = function () {
            var _this = this;
            this.MyProfileService.updateProfile(this.model).subscribe(function (x) {
                localStorage.setItem('User', JSON.stringify(x));
                _this.success = "Profile updated successfully";
                _this.toastr.success("Profile updated successfully", 'Success');
                _this.loginService.LoggedInUserSubject.next(_this.loginService.checkIsLoggedIn());
                _this.showProfileDialog = !_this.showProfileDialog;
            }, function (error) {
                _this.error = error.statusText;
                _this.loading = false;
                _this.toastr.error("Error Occured " + error.statusText, 'Error');
            });
        };
        this.editpassword = function () {
            this.showEditPasswordDialog = !this.showEditPasswordDialog;
        };
        this.editEMGpassword = function () {
            this.showEMGPasswordDialog = !this.showEMGPasswordDialog;
        };
        this.savepassword = function () {
            var _this = this;
            this.MyProfileService.updatePassword(this.pwdmodel).subscribe(function (x) {
                _this.success = "Password updated successfully";
                _this.toastr.success("Password updated successfully", 'Success');
                _this.showEditPasswordDialog = !_this.showEditPasswordDialog;
            }, function (error) {
                _this.error = error.statusText;
                _this.loading = false;
                _this.toastr.error("Error Occured " + error.statusText, 'Error');
            });
        };
        this.saveEMGpassword = function () {
            var _this = this;
            this.MyProfileService.updateEMPassword(this.EMGpwdmodel).subscribe(function (x) {
                _this.success = "Password updated successfully";
                _this.toastr.success("Password updated successfully", 'Success');
                _this.showEditPasswordDialog = !_this.showEditPasswordDialog;
            }, function (error) {
                _this.error = error.statusText;
                _this.loading = false;
                _this.toastr.error("Error Occured " + error.statusText, 'Error');
            });
        };
        this.logoutUser = function () {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
            this.router.navigate(['/home']);
        };
    }
    MyprofileComponent.prototype.ngOnInit = function () {
        this.loadUser();
        this.subscription = this.loginService.loggedInObservable.subscribe(function (val) {
            console.log(val);
        });
    };
    MyprofileComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        this.fileToUpload = files.item(0);
        var file = this.fileToUpload;
        var formData = new FormData();
        formData.append('file', file, file.name);
        this.MyProfileService.uploadAvatar(formData).subscribe(function (data) {
            localStorage.setItem('User', JSON.stringify(data));
            _this.model = data;
            _this.model.phoneNumber = data.phoneNumber == null ? "999999999" : data.phoneNumber;
            _this.model.gender = data.gender == null ? "0" : data.gender;
            _this.model.dob = new Date(data.dob);
            _this.loginService.LoggedInUserSubject.next(_this.loginService.checkIsLoggedIn());
            _this.model.avatarUrl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + data.avatarId;
        }, function (error) {
            _this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    };
    // postFile(fileToUpload: File): Observable<boolean> {
    //   const endpoint = 'your-destination-url';
    //   const formData: FormData = new FormData();
    //   formData.append('fileKey', fileToUpload, fileToUpload.name);
    //   return this.httpClient
    //     .post(endpoint, formData, { headers: yourHeadersConfig })
    //     .map(() => { return true; })
    //     .catch((e) => this.handleError(e));
    // }
    MyprofileComponent.prototype.errorHandler = function (event) {
        this.model.avatarUrl = "../../assets/img/user.png";
    };
    MyprofileComponent.prototype.loadUser = function () {
        var _this = this;
        this.MyProfileService.getUserdetails().subscribe(function (data) {
            _this.model = data;
            _this.model.phoneNumber = data.phoneNumber == null ? "999999999" : data.phoneNumber;
            _this.model.gender = data.gender == null ? "0" : data.gender;
            _this.model.genderText = data.gender == "0" ? " " : data.gender == "1" ? "Male" : "Female";
            _this.model.dob = new Date(data.dob);
            _this.model.avatarUrl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + data.avatarId;
        }, function (error) {
            _this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    };
    MyprofileComponent.prototype.toggleOldPwdShow = function () {
        this.showoldpwdtype = !this.showoldpwdtype;
        if (this.showoldpwdtype) {
            this.txtpwdtype = "text";
            this.cssOldPwd = "fa fa-eye eye_icon";
        }
        else {
            this.txtpwdtype = "password";
            this.cssOldPwd = "fa fa-eye-slash eye_icon";
        }
    };
    MyprofileComponent.prototype.toggleNewPwdShow = function () {
        this.shownewpwdtype = !this.shownewpwdtype;
        if (this.shownewpwdtype) {
            this.txtnewpwdtype = "text";
            this.cssNewPwd = "fa fa-eye eye_icon";
        }
        else {
            this.txtnewpwdtype = "password";
            this.cssNewPwd = "fa fa-eye-slash eye_icon";
        }
    };
    MyprofileComponent.prototype.toggleEMGOldPwdShow = function () {
        this.showoldEMGpwdtype = !this.showoldEMGpwdtype;
        if (this.showoldEMGpwdtype) {
            this.txtoldEMGpwdtype = "text";
            this.cssOldEMgPwd = "fa fa-eye eye_icon";
        }
        else {
            this.txtoldEMGpwdtype = "password";
            this.cssOldEMgPwd = "fa fa-eye-slash eye_icon";
        }
    };
    MyprofileComponent.prototype.toggleEMGNewPwdShow = function () {
        this.shownewEMGpwdtype = !this.shownewEMGpwdtype;
        if (this.shownewEMGpwdtype) {
            this.txtnewEMGpwdtype = "text";
            this.cssNewEMgPwd = "fa fa-eye eye_icon";
        }
        else {
            this.txtnewEMGpwdtype = "password";
            this.cssNewEMgPwd = "fa fa-eye-slash eye_icon";
        }
    };
    MyprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/main/myprofile/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./myprofile.component.scss */ "./src/app/main/myprofile/myprofile.component.scss")],
        }),
        __metadata("design:paramtypes", [_myprofile_service__WEBPACK_IMPORTED_MODULE_1__["MyProfileService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _core_services_login_services__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}());



/***/ }),

/***/ "./src/app/main/myprofile/myprofile.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/myprofile/myprofile.module.ts ***!
  \****************************************************/
/*! exports provided: MyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myprofile-routing.module */ "./src/app/main/myprofile/myprofile-routing.module.ts");
/* harmony import */ var _myprofile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myprofile.component */ "./src/app/main/myprofile/myprofile.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyProfileRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [
                _myprofile_component__WEBPACK_IMPORTED_MODULE_3__["MyprofileComponent"],
            ]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-myprofile-myprofile-module.js.map