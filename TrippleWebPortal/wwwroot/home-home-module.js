(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/Register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/Register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <div class=\"login\">\r\n    <h1>Sign Up</h1>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && registerUser()\" #f=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n          <div class=\"form-group \">\r\n            <label>FirstName</label>\r\n            <input type=\"text\" class=\"form-control custom_form \" placeholder=\"\" name=\"UserFirstName\" [(ngModel)]=\"model.UserFirstName\"\r\n              #UserFirstName=\"ngModel\" required>\r\n            <div *ngIf=\"f.submitted && UserFirstName.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n              <div *ngIf=\"UserFirstName.errors.required\">\r\n                FirstName is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n          <div class=\"form-group \">\r\n            <label>LastName</label>\r\n            <input type=\"text\" class=\"form-control custom_form\" placeholder=\"\" name=\"UserLastName\" [(ngModel)]=\"model.UserLastName\" #UserLastName=\"ngModel\"\r\n              required>\r\n            <div *ngIf=\"f.submitted && UserLastName.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n              <div *ngIf=\"UserLastName.errors.required\">\r\n                LastName is required\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n          <div class=\"form-group \">\r\n            <label>Email</label>\r\n            <input type=\"email\" email class=\"form-control custom_form email\" placeholder=\"\" name=\"UserEmail\" [(ngModel)]=\"model.UserEmail\"\r\n              #UserEmail=\"ngModel\" required>\r\n            <div *ngIf=\"f.submitted && UserEmail.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n              <div *ngIf=\"UserEmail.errors.required\">\r\n                Email is required\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"UserEmail.errors?.email\" class=\"text-danger\">\r\n              Email is not valid.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n          <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control custom_form\" placeholder=\"\" name=\"UserPassword\" [(ngModel)]=\"model.UserPassword\"\r\n              #UserPassword=\"ngModel\" required>\r\n            <i class=\"fa fa-eye eye_icon\" aria-hidden=\"true\"></i>\r\n            <div *ngIf=\"f.submitted && UserPassword.invalid && (UserPassword.dirty||UserPassword.touched)\" class=\"text-danger\">\r\n              <div *ngIf=\"UserPassword.errors['required']\">Password is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xs-12 m-b-10\">\r\n          <div class=\"form-group\">\r\n            <label>Confirm Password</label>\r\n            <!-- <input type=\"password\" class=\"form-control custom_form\" name=\"confirmPassword\" \r\n            ngModel #confirmPassword=\"ngModel\" [(ngModel)]=\"model.confirmPassword\" required \r\n            validateEqual=\"UserPassword\" reverse=\"false\">\r\n            <i class=\"fa fa-eye eye_icon\" aria-hidden=\"true\"></i>\r\n            <div *ngIf=\"!confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\r\n                Password mismatch\r\n              </div> -->\r\n            <input type=\"password\" class=\"form-control custom_form\" name=\"confirmPassword\" ngModel #confirmPassword=\"ngModel\" \r\n            required compare=\"UserPassword\">\r\n            <div *ngIf=\"f.submitted && confirmPassword.invalid && (confirmPassword.dirty||confirmPassword.touched)\" class=\"text-danger\">\r\n              <div *ngIf=\"confirmPassword.errors['required']\">Password confirm is required</div>\r\n              <div *ngIf=\"confirmPassword.errors['compare']\">Password confirm do not match</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-xs-12\">\r\n          <!-- <button type=\"button\" (click)=\"registerUser();\"class=\"btn btn_signin\">Sign Up</button> -->\r\n          <button class=\"btn btn_signin\">Sign Up</button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div *ngIf=\"error\" class=\"alert alert-danger clear\">{{error}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div *ngIf=\"success\" class=\"alert alert-danger clear\">{{success}}</div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-sm-12 col-xs-12\">\r\n          <button type=\"button\" class=\"btn register_btn\" (click)='showLoginDialogbox()'>Sign In</button>\r\n        </div> -->\r\n      </div>\r\n    </form>\r\n    <br>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/Register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input::-webkit-input-placeholder {\n  color: #000 !important;\n  font-size: 12px; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000 !important;\n  font-size: 12px; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000 !important;\n  font-size: 12px; }\n\n.login {\n  background: #fff;\n  margin: 1% auto 0;\n  padding: 25px;\n  vertical-align: middle;\n  display: inline-block;\n  text-align: left;\n  /* The container */\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n  /* When the checkbox is checked, add a blue background */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Show the checkmark when checked */\n  /* Style the checkmark/indicator */ }\n\n.login label {\n    color: #9d9d9d;\n    font-weight: normal;\n    font-size: 14px !important; }\n\n.login .custom_form {\n    border: none !important;\n    border-bottom: solid 1px #ccc !important;\n    box-shadow: none !important;\n    border-radius: 0px !important;\n    padding-left: 0px !important; }\n\n.login .m-b-30 {\n    margin-bottom: 37px; }\n\n.login .m-b-10 {\n    margin-bottom: 10px; }\n\n.login h1 {\n    margin-top: 0px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    margin-bottom: 25px;\n    color: #9d9d9d; }\n\n.login .remember_me {\n    line-height: 25px;\n    color: #000; }\n\n.login .remember_me input {\n    float: left;\n    width: 20px;\n    height: 20px;\n    background: #f1f4f8 !important;\n    line-height: 36px;\n    margin-right: 7px; }\n\n.login .btn_signin {\n    background: #8c91da;\n    float: left;\n    width: 100%;\n    color: #fff;\n    padding: 12px;\n    margin-top: 18px;\n    font-size: 16px; }\n\n.login .eye_icon {\n    position: absolute;\n    right: 14px;\n    top: 29px;\n    font-size: 20px;\n    color: #cccdd4; }\n\n.login .btn_signin:hover {\n    color: #fff; }\n\n.login .register_btn {\n    float: left;\n    width: 100%;\n    background: #fff;\n    box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n    padding: 12px;\n    border: solid 1px #e5e9f2;\n    margin-top: 20px;\n    font-size: 16px; }\n\n.login .forgot_password {\n    color: #8c91da; }\n\n.login .chk_outer {\n    position: relative;\n    padding-left: 35px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    line-height: 24px; }\n\n.login .chk_outer input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    right: 109px;\n    left: 0;\n    width: 25px;\n    height: 21px; }\n\n.login .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #f1f4f8; }\n\n.login .chk_outer:hover input ~ .checkmark {\n    background-color: #f1f4f8; }\n\n.login .chk_outer input:checked ~ .checkmark {\n    background-color: #f1f4f8; }\n\n.login .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none; }\n\n.login .chk_outer input:checked ~ .checkmark:after {\n    display: block; }\n\n.login .chk_outer .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 7px;\n    height: 13px;\n    border: solid #8c91da;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg); }\n"

/***/ }),

/***/ "./src/app/Register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/Register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _core_services_register_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/register.services */ "./src/app/core/services/register.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, toastr, router) {
        this.registerService = registerService;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
        this.error = '';
        this.success = '';
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (model) {
        var _this = this;
        var output = this.registerService.registerUser(this.model).
            subscribe(function (x) {
            _this.toastr.success('Login Successfull!', 'Success');
            _this.router.navigate(['/']);
        }, function (error) {
            _this.error = error.error.message;
            _this.loading = false;
            _this.toastr.error('Error while registering.' + error.error.message, 'Error');
            console.log("Error Occured", error);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/Register/register.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_core_services_register_services__WEBPACK_IMPORTED_MODULE_0__["RegisterService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"../../assets/img/logo.png\" alt=\"Logo\"></a>\r\n        </div>        \r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"active\"><a (click)=\"showLoginDialogbox()\">Sign In</a></li>\r\n            <li><a (click)=\"showRegisterDialogbox()\">Sign Up</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n</header>\r\n<app-dialog [(visible)]=\"showLoginDialog\">\r\n    <app-login></app-login>\r\n</app-dialog>\r\n<app-dialog [(visible)]=\"showRegisterDialog\">\r\n    <app-register></app-register>\r\n</app-dialog>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .navbar {\n  background: #fff !important;\n  min-height: 60px !important;\n  border-radius: 0px !important;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  border: none !important; }\n\nheader .navbar-default .navbar-nav > .active > a, header .navbar-default .navbar-nav > .active > a:focus, header .navbar-default .navbar-nav > .active > a:hover {\n  background: none !important;\n  color: #000 !important;\n  cursor: pointer; }\n\nheader .navbar-nav.navbar-right > li > a, header .navbar-default .navbar-nav > a:hover {\n  color: #000 !important;\n  cursor: pointer; }\n\nheader .navbar-nav {\n  flex-direction: inherit !important; }\n\nheader .navbar-nav li > a {\n    margin: 0 40px !important;\n    padding: 0 5px !important;\n    line-height: 60px;\n    color: #9d9d9d !important;\n    font-size: 14px;\n    text-transform: capitalize; }\n\n.fancybox-close {\n  background: #000 !important;\n  line-height: 19px !important; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router) {
        this.route = route;
        this.router = router;
        this.showLoginDialog = false;
        this.showRegisterDialog = false;
        this.showLoginDialogbox = function () {
            this.showLoginDialog = !this.showLoginDialog;
        };
        this.showRegisterDialogbox = function () {
            this.showRegisterDialog = !this.showRegisterDialog;
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkForLoggeinUser();
    };
    HomeComponent.prototype.checkForLoggeinUser = function () {
        var localStorageobject = JSON.parse(localStorage.getItem('currentUser'));
        if (localStorageobject != null) {
            // this.router.navigate(['/dashboard']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Register/register.component */ "./src/app/Register/register.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_8__["NgProgressModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _Register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress id=\"bar-one\" #barOne spinnerPosition=\"left\"></ng-progress>\r\n<div class=\"text-center\">\r\n  <div class=\"login\">\r\n    <h1>Sign In</h1>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\r\n      <div class=\"row m-b-30\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group m-b-30\" [ngClass]=\"{ 'has-error':f.submitted && !email.valid }\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"text\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"email\" name=\"email\" required email class=\"form-control custom_form\"\r\n              placeholder=\"email\" />\r\n            <div *ngIf=\"(f.submitted||email.touched) && !email.valid\" class=\"help-block\">\r\n              Invalid Email\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 m-b-10\">\r\n          <div class=\"form-group\" [ngClass]=\"{ 'has-error':f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" name=\"password\" #password=\"ngModel\" required class=\"form-control custom_form\" [(ngModel)]=\"model.password\"\r\n              placeholder=\"Password\" />\r\n            <div *ngIf=\"(f.submitted||email.touched) && !email.valid\" class=\"help-block\">\r\n              Password Is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label class=\"chk_outer\">Remember me\r\n              <input type=\"checkbox\" checked=\"checked\">\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n            <a href=\"#\" class=\" forgot_password pull-right\">Forgot Password ?</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <button [disabled]=\"loading\" class=\"btn btn_signin\" (click)=\"barOne.start()\">Sign In</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div *ngIf=\"error\" class=\"alert alert-danger clear\">{{error}}</div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input::-webkit-input-placeholder {\n  color: #000 !important;\n  font-size: 12px; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000 !important;\n  font-size: 12px; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000 !important;\n  font-size: 12px; }\n\n.login {\n  background: #fff;\n  margin: 1% auto 0;\n  padding: 25px;\n  vertical-align: middle;\n  display: inline-block;\n  text-align: left;\n  /* The container */\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* On mouse-over, add a grey background color */\n  /* When the checkbox is checked, add a blue background */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Show the checkmark when checked */\n  /* Style the checkmark/indicator */ }\n\n.login label {\n    color: #9d9d9d;\n    font-weight: normal;\n    font-size: 14px !important; }\n\n.login .custom_form {\n    border: none !important;\n    border-bottom: solid 1px #ccc !important;\n    box-shadow: none !important;\n    border-radius: 0px !important;\n    padding-left: 0px !important; }\n\n.login .m-b-30 {\n    margin-bottom: 20px; }\n\n.login .m-b-10 {\n    margin-bottom: 10px; }\n\n.login h1 {\n    margin-top: 0px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    margin-bottom: 25px;\n    color: #9d9d9d; }\n\n.login .remember_me {\n    line-height: 25px;\n    color: #000; }\n\n.login .remember_me input {\n    float: left;\n    width: 20px;\n    height: 20px;\n    background: #f1f4f8 !important;\n    line-height: 36px;\n    margin-right: 7px; }\n\n.login .btn_signin {\n    background: #8c91da;\n    float: left;\n    width: 100%;\n    color: #fff;\n    padding: 12px;\n    margin-top: 18px;\n    font-size: 16px; }\n\n.login .eye_icon {\n    position: absolute;\n    right: 14px;\n    top: 29px;\n    font-size: 20px;\n    color: #cccdd4; }\n\n.login .btn_signin:hover {\n    color: #fff; }\n\n.login .register_btn {\n    float: left;\n    width: 100%;\n    background: #fff;\n    box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n    padding: 12px;\n    border: solid 1px #e5e9f2;\n    margin-top: 20px;\n    font-size: 16px; }\n\n.login .forgot_password {\n    color: #8c91da; }\n\n.login .chk_outer {\n    position: relative;\n    padding-left: 35px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    line-height: 24px; }\n\n.login .chk_outer input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    right: 109px;\n    left: 0;\n    width: 25px;\n    height: 21px; }\n\n.login .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #f1f4f8; }\n\n.login .chk_outer:hover input ~ .checkmark {\n    background-color: #f1f4f8; }\n\n.login .chk_outer input:checked ~ .checkmark {\n    background-color: #f1f4f8; }\n\n.login .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none; }\n\n.login .chk_outer input:checked ~ .checkmark:after {\n    display: block; }\n\n.login .chk_outer .checkmark:after {\n    left: 9px;\n    top: 5px;\n    width: 7px;\n    height: 13px;\n    border: solid #8c91da;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg); }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_login_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/login.services */ "./src/app/core/services/login.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, authenticationService, toastr, route, router, progress, spinner) {
        this.loginService = loginService;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.progress = progress;
        this.spinner = spinner;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.returnUrl = this.route['dashboard'] || '/';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.progress.start();
        this.email = this.model.email;
        this.pwd = this.model.password;
        var output = this.loginService.login(this.email, this.pwd).subscribe(function (data) {
            _this.GetUserdetails();
            _this.toastr.success('Login Successfull!', 'Success');
            _this.router.navigate(['/main/dashboard']);
            _this.spinner.hide();
            //this.progress.complete();
        }, function (error) {
            // this.error = error.statusText + ". Please check your credentials";
            _this.loading = false;
            _this.toastr.error('Please check your credentials', 'Error');
            console.log("Error Occured", error);
            //this.progress.complete();
            _this.spinner.hide();
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
            return;
        }, function (error) {
            // this.error = error.statusText + ". Please check your credentials";
            console.log("Error Occured", error);
        });
    };
    LoginComponent.prototype.GetUserdetails = function () {
        this.loginService.getUserDetails()
            .subscribe(function (data) {
            return;
        }, function (error) {
            // this.error = error.statusText + ". Please check your credentials";
            console.log("Error Occured", error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_login_services__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgress"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map