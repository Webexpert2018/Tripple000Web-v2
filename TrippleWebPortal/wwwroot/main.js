(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./confirm-email/confirm-email.module": [
		"./src/app/confirm-email/confirm-email.module.ts",
		"confirm-email-confirm-email-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./main/dashboard/dashboard.module": [
		"./src/app/main/dashboard/dashboard.module.ts",
		"main-dashboard-dashboard-module"
	],
	"./main/location/location.module": [
		"./src/app/main/location/location.module.ts",
		"main-location-location-module"
	],
	"./main/mycircle/mycircle.module": [
		"./src/app/main/mycircle/mycircle.module.ts",
		"main-mycircle-mycircle-module"
	],
	"./main/myprofile/myprofile.module": [
		"./src/app/main/myprofile/myprofile.module.ts",
		"main-myprofile-myprofile-module"
	],
	"./main/sossignals/sossignals.module": [
		"./src/app/main/sossignals/sossignals.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
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
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        runGuardsAndResolvers: 'always'
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\r\n<router-outlet></router-outlet>\r\n<ngx-spinner></ngx-spinner>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_validators_compare_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/validators/compare-validator.directive */ "./src/app/shared/validators/compare-validator.directive.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _core_services_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/interceptor */ "./src/app/core/services/interceptor.ts");
/* harmony import */ var ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng4-geoautocomplete */ "./node_modules/ng4-geoautocomplete/index.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _app_main_myprofile_myprofile_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../app/main/myprofile/myprofile.service */ "./src/app/main/myprofile/myprofile.service.ts");
/* harmony import */ var _app_main_mycircle_mycircle_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../app/main/mycircle/mycircle.service */ "./src/app/main/mycircle/mycircle.service.ts");
/* harmony import */ var _app_main_sossignals_sossignals_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../app/main/sossignals/sossignals.service */ "./src/app/main/sossignals/sossignals.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _main_sossignals_sossignals_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/sossignals/sossignals.module */ "./src/app/main/sossignals/sossignals.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { NgProgressRouterModule } from '@ngx-progressbar/router';


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_validators_compare_validator_directive__WEBPACK_IMPORTED_MODULE_9__["CompareValidatorDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].forRoot(),
                // NgProgressRouterModule,
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_13__["HttpModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                    closeButton: true
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCkFE3yHxmjakZiQbPB8WsFQB1KoM-zoIw'
                }),
                ng4_geoautocomplete__WEBPACK_IMPORTED_MODULE_17__["Ng4GeoautocompleteModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"],
                _main_sossignals_sossignals_module__WEBPACK_IMPORTED_MODULE_24__["SosSignalModule"]
            ],
            providers: [
                _shared__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _core__WEBPACK_IMPORTED_MODULE_11__["LoginService"],
                _core__WEBPACK_IMPORTED_MODULE_11__["RegisterService"],
                _core_services_data_service__WEBPACK_IMPORTED_MODULE_18__["DataService"],
                _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"],
                _app_main_myprofile_myprofile_service__WEBPACK_IMPORTED_MODULE_20__["MyProfileService"],
                _app_main_mycircle_mycircle_service__WEBPACK_IMPORTED_MODULE_21__["MyCircleService"],
                _app_main_sossignals_sossignals_service__WEBPACK_IMPORTED_MODULE_22__["SosSignalsService"],
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _core_services_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: locationModel, locationObject, registerUserModel, registerResponse, confirmEmail, loginRequestModel, loginResponseModel, tripModel, LoginService, RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["locationModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationObject", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["locationObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerUserModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["registerUserModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerResponse", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["registerResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmEmail", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["confirmEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginRequestModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["loginRequestModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginResponseModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["loginResponseModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tripModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["tripModel"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LoginService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]; });





/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: locationModel, locationObject, registerUserModel, registerResponse, confirmEmail, loginRequestModel, loginResponseModel, tripModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locationModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationModel */ "./src/app/core/models/locationModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationModel", function() { return _locationModel__WEBPACK_IMPORTED_MODULE_0__["locationModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationObject", function() { return _locationModel__WEBPACK_IMPORTED_MODULE_0__["locationObject"]; });

/* harmony import */ var _registerUserModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerUserModel */ "./src/app/core/models/registerUserModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerUserModel", function() { return _registerUserModel__WEBPACK_IMPORTED_MODULE_1__["registerUserModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerResponse", function() { return _registerUserModel__WEBPACK_IMPORTED_MODULE_1__["registerResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmEmail", function() { return _registerUserModel__WEBPACK_IMPORTED_MODULE_1__["confirmEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginRequestModel", function() { return _registerUserModel__WEBPACK_IMPORTED_MODULE_1__["loginRequestModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginResponseModel", function() { return _registerUserModel__WEBPACK_IMPORTED_MODULE_1__["loginResponseModel"]; });

/* harmony import */ var _tripModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tripModel */ "./src/app/core/models/tripModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tripModel", function() { return _tripModel__WEBPACK_IMPORTED_MODULE_2__["tripModel"]; });






/***/ }),

/***/ "./src/app/core/models/locationModel.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/locationModel.ts ***!
  \**********************************************/
/*! exports provided: locationModel, locationObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationModel", function() { return locationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationObject", function() { return locationObject; });
var locationModel = /** @class */ (function () {
    function locationModel() {
    }
    return locationModel;
}());

var locationObject = /** @class */ (function () {
    function locationObject() {
    }
    return locationObject;
}());



/***/ }),

/***/ "./src/app/core/models/registerUserModel.ts":
/*!**************************************************!*\
  !*** ./src/app/core/models/registerUserModel.ts ***!
  \**************************************************/
/*! exports provided: registerUserModel, registerResponse, confirmEmail, loginRequestModel, loginResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserModel", function() { return registerUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerResponse", function() { return registerResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmEmail", function() { return confirmEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestModel", function() { return loginRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginResponseModel", function() { return loginResponseModel; });
var registerUserModel = /** @class */ (function () {
    function registerUserModel() {
    }
    return registerUserModel;
}());

var registerResponse = /** @class */ (function () {
    function registerResponse() {
    }
    return registerResponse;
}());

var confirmEmail = /** @class */ (function () {
    function confirmEmail() {
    }
    return confirmEmail;
}());

var loginRequestModel = /** @class */ (function () {
    function loginRequestModel() {
    }
    return loginRequestModel;
}());

var loginResponseModel = /** @class */ (function () {
    function loginResponseModel() {
    }
    return loginResponseModel;
}());

//webexpert2324@gmail.com


/***/ }),

/***/ "./src/app/core/models/tripModel.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/tripModel.ts ***!
  \******************************************/
/*! exports provided: tripModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripModel", function() { return tripModel; });
var tripModel = /** @class */ (function () {
    function tripModel() {
    }
    return tripModel;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.authenticateServiceUrl = this.apiURL + 'auth/token';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var opts = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        opts.headers = this.headers;
        return this.http.post(this.authenticateServiceUrl, JSON.stringify({ email: username, username: username, password: password }), opts)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response.json();
            if (user && user.accessToken) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            else {
                localStorage.removeItem('currentUser');
            }
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.getToken = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DataService.prototype.sendData = function (id) {
        this.subject.next(id);
    };
    DataService.prototype.clearData = function () {
        this.subject.next();
    };
    DataService.prototype.getData = function () {
        return this.subject.asObservable();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: LoginService, RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.services */ "./src/app/core/services/login.services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_services__WEBPACK_IMPORTED_MODULE_0__["LoginService"]; });

/* harmony import */ var _register_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.services */ "./src/app/core/services/register.services.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return _register_services__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]; });





/***/ }),

/***/ "./src/app/core/services/interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        if (this.auth.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + this.auth.getToken()["access_token"]
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

// import 'rxjs/add/operator/map';
// import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from './auth.service';
// import { Configuration } from '../models/app.constants';
// @Injectable()
// export class DataService {
//     private actionUrl: string;
//     constructor(private http: HttpClient, private _configuration: Configuration,private auth: AuthenticationService) {
//         this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
//     }
//     public getAll<T>(): Observable<T> {
//         return this.http.get<T>(this.actionUrl);
//     }
//     public getSingle<T>(id: number): Observable<T> {
//         return this.http.get<T>(this.actionUrl + id);
//     }
//     public add<T>(itemName: string): Observable<T> {
//         const toAdd = JSON.stringify({ ItemName: itemName });
//         return this.http.post<T>(this.actionUrl, toAdd);
//     }
//     public update<T>(id: number, itemToUpdate: any): Observable<T> {
//         return this.http
//             .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
//     }
//     public delete<T>(id: number): Observable<T> {
//         return this.http.delete<T>(this.actionUrl + id);
//     }
// }
// @Injectable()
// export class CustomInterceptor implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (!req.headers.has('Content-Type')) {
//             req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
//         }
//         req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
//         req = req.clone({
//                 setHeaders: {
//                  Authorization: `Bearer ${this.auth.getToken()}`
//                 } 
//               });
//         console.log(JSON.stringify(req.headers));
//         return next.handle(req);
//     }
// }


/***/ }),

/***/ "./src/app/core/services/login.services.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/login.services.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.authurl = this.serviceUrl + "/auth/token";
        this.LoggedInUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.checkIsLoggedIn());
    }
    LoginService.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    Object.defineProperty(LoginService.prototype, "loggedInObservable", {
        get: function () {
            return this.LoggedInUserSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.authurl, { email: username, password: password, grant_type: "password", client_id: "webApp" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            // login successful if there's a jwt token in the response
            if (res && res.access_token) {
                console.log(res.accessToken);
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, access_token: res.access_token }));
                _this.LoggedInUserSubject.next(_this.checkIsLoggedIn());
            }
        }));
    };
    LoginService.prototype.getUserDetails = function () {
        var _this = this;
        return this.http.get(this.serviceUrl + "/user/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            // login successful if there's a jwt token in the response
            if (res) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUserId', res.id);
                localStorage.setItem('User', JSON.stringify(res));
                _this.LoggedInUserSubject.next(_this.checkIsLoggedIn());
            }
        }));
    };
    LoginService.prototype.checkIsLoggedIn = function () {
        var user;
        var localStorageobject = JSON.parse(localStorage.getItem('User'));
        if (localStorageobject != null) {
            user = JSON.parse(localStorage.User);
            // if (user.avatarId!= null || user.avatarId != '') {              
            //     user = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + user.avatarId;
            // }
        }
        return user;
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/core/services/register.services.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/register.services.ts ***!
  \****************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    })
};
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.serviceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    RegisterService.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RegisterService.prototype.registerUser = function (model) {
        debugger;
        return this.http.post(this.serviceUrl + '/auth/register', this.serializeObj(model), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            if (x == null) {
                debugger;
                console.log("confirmemail successful.");
            }
            else
                console.log("confirmemail unsuccessful");
        }));
    };
    RegisterService.prototype.confirmEmail = function (model) {
        return this.http.post(this.serviceUrl + '/auth/confirmemail', model, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            if (x.HttpResponseMessage.StatusCode == 200)
                console.log("confirmemail successful.");
            else
                console.log("confirmemail unsuccessful");
        }));
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/main/chat/chat.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/chat/chat.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 chats\">\r\n  <ul>\r\n    <li class=\"text-left\">\r\n      <div class=\"pull-left\">\r\n          <img src=\"../../assets/img/chat_pic.png\" alt=\"Chat User\">\r\n      </div>\r\n      <div class=\"pull-left\">\r\n        <h5>Alan Alexander</h5>\r\n        <p>There is a lot of exiciting stuff going on in the stars</p>\r\n      </div>\r\n    </li>\r\n    <li>\r\n        <div class=\"pull-left\">\r\n            <img src=\"../../assets/img/chat_pic.png\" alt=\"Chat User\">\r\n        </div>\r\n        <div class=\"pull-left\">\r\n          <h5>Bratt McCoy</h5>\r\n          <p>Internet Advertising Trends You Won T Be Disappointed</p>\r\n        </div>\r\n      </li>      \r\n        <li class=\"text-right\">\r\n            <div class=\"pull-right\">\r\n                <img src=\"../../assets/img/chat_pic.png\" alt=\"Chat User\">\r\n            </div>\r\n            <div class=\"pull-right\">\r\n              <h5>Dora Ingram</h5>\r\n              <p class=\"pull-right\">Internet Advertising Trends You Won T Be Disappointed</p>\r\n            </div>            \r\n          </li>\r\n          <li>\r\n              <div class=\"pull-left\">\r\n                  <img src=\"../../assets/img/chat_pic.png\" alt=\"Chat User\">\r\n              </div>\r\n              <div class=\"pull-left\">\r\n                <h5>Bratt McCoy</h5>\r\n                <p>Internet Advertising Trends You Won T Be Disappointed</p>\r\n              </div>\r\n            </li>\r\n  </ul>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Type Your Message\">\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <button type=\"button\" class=\"btn btn_signin pull-right\">Send</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/chat/chat.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/chat/chat.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chats {\n  background: #f5f6fa;\n  padding: 10px;\n  border-radius: 4px; }\n  .chats ul {\n    margin: 0;\n    padding: 0;\n    float: left;\n    width: 100%;\n    height: 290px;\n    overflow-y: scroll; }\n  .chats ul li {\n      margin: 8px 0;\n      list-style: none;\n      border-bottom: solid 1px #fff;\n      float: left;\n      width: 100%; }\n  .chats ul li img {\n        margin-right: 10px; }\n  .chats ul li h5 {\n        color: #a6aada;\n        margin-bottom: 5px;\n        margin-top: 3px; }\n  .chats ul li p {\n        width: 55%; }\n  .chats ul li .pull-right img {\n        margin-left: 10px;\n        margin-right: 0px; }\n  .chats .btn_signin {\n    background: #8c91da;\n    float: left;\n    color: #fff;\n    padding: 5px 20px;\n    margin-top: 18px;\n    font-size: 14px; }\n  .chats .btn_signin:hover {\n    color: #fff; }\n  .chats input {\n    margin-top: 18px;\n    background: transparent !important;\n    border: 0 !important;\n    box-shadow: none !important; }\n"

/***/ }),

/***/ "./src/app/main/chat/chat.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/main/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/main/chat/chat.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/main/mycircle/mycircle.service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/mycircle/mycircle.service.ts ***!
  \***************************************************/
/*! exports provided: MyCircleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCircleService", function() { return MyCircleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyCircleService = /** @class */ (function () {
    function MyCircleService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
        this.getusercontacts = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/UserConatcts/userid/";
    }
    MyCircleService.prototype.getUserContacts = function () {
        return this.httpClient.get(this.API_URL + "/UserContacts/");
    };
    MyCircleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyCircleService);
    return MyCircleService;
}());



/***/ }),

/***/ "./src/app/main/myprofile/myprofile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/myprofile/myprofile.service.ts ***!
  \*****************************************************/
/*! exports provided: MyProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileService", function() { return MyProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyProfileService = /** @class */ (function () {
    function MyProfileService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
    }
    MyProfileService.prototype.getUserdetails = function () {
        return this.httpClient.get(this.API_URL + "/user/");
        //     return this.httpClient.get(`${this.API_URL}/locations/`);
        //    .pipe(map(res => res));   
    };
    MyProfileService.prototype.uploadAvatar = function (formData) {
        return this.httpClient.post(this.API_URL + "/user/updateAvatar", formData);
    };
    MyProfileService.prototype.updateProfile = function (updatemodel) {
        return this.httpClient.put(this.API_URL + "/user", {
            id: updatemodel.id,
            firstName: updatemodel.firstName,
            lastName: updatemodel.lastName,
            email: updatemodel.email,
            avatarUrl: updatemodel.avatarUrl,
            phoneNumber: updatemodel.phoneNumber,
            gender: "male",
            dob: updatemodel.dob,
            avatarId: updatemodel.avatarId
        });
    };
    MyProfileService.prototype.updatePassword = function (pwdmodel) {
        return this.httpClient.put(this.API_URL + "/user/updatePassword", {
            OldPassword: pwdmodel.oldPassword,
            NewPassword: pwdmodel.newPassword
        });
    };
    MyProfileService.prototype.updateEMPassword = function (pwdmodel) {
        return this.httpClient.put(this.API_URL + "/user/updateEMPassword", {
            EMPassword: pwdmodel.oldPassword,
            EMPasswordHint: pwdmodel.newPassword
        });
    };
    MyProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyProfileService);
    return MyProfileService;
}());



/***/ }),

/***/ "./src/app/main/sossignals/sossignals-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/sossignals/sossignals-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SosSignalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SosSignalsRoutingModule", function() { return SosSignalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sossignals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sossignals.component */ "./src/app/main/sossignals/sossignals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _sossignals_component__WEBPACK_IMPORTED_MODULE_2__["SosSignalsComponent"]
    },
];
var SosSignalsRoutingModule = /** @class */ (function () {
    function SosSignalsRoutingModule() {
    }
    SosSignalsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SosSignalsRoutingModule);
    return SosSignalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/sossignals/sossignals.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/sossignals/sossignals.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"white_container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7 p-r-0\">\r\n        <div class=\"sos_map\">\r\n             <agm-map \r\n                [latitude]=\"lat\"\r\n                [longitude]=\"lng\"\r\n                [zoom]=\"15\"\r\n                [zoomControl]=\"false\" \r\n                [panControl]=\"false\"\r\n                [streetViewControl]=\"false\"\r\n                [disableDefaultUI]=\"false\"                \r\n                (mapClick)=\"mapClicked($event)\">  \r\n                <agm-marker\r\n                    [latitude]=\"lat\"\r\n                    [longitude]=\"lng\"    \r\n                    (dragEnd)=\"markerDragEnd(m, $event)\"            \r\n                    [iconUrl]=\"'/assets/img/indicator1a.jpg'\">\r\n               </agm-marker>\r\n                <agm-polyline  [strokeColor]=\"'#2196f3'\">\r\n                    <ng-container *ngFor=\"let i of etrackpoints\">\r\n                       <agm-polyline-point    [latitude]=\"i.x\" [longitude]=\"i.y\">\r\n                       </agm-polyline-point>\r\n                    </ng-container>\r\n                </agm-polyline>              \r\n              \r\n                <!-- <agm-marker \r\n                    *ngFor=\"let m of etrackpoints;\"                   \r\n                    [latitude]=\"m.x\"\r\n                    [longitude]=\"m.y\"                   \r\n                    [iconUrl]=\"'/assets/img/indicator5.png'\"\r\n                    [markerDraggable]=\"m.draggable\"\r\n                    (dragEnd)=\"markerDragEnd(m, $event)\">\r\n                    \r\n                  <agm-info-window>\r\n                    <strong>InfoWindow content</strong>\r\n                  </agm-info-window>\r\n                  \r\n                </agm-marker> -->\r\n                \r\n                 <agm-circle [latitude]=\"m.x\" [longitude]=\"m.y\" \r\n                 *ngFor=\"let m of etrackpoints\"                 \r\n                    \r\n                    [fillColor]=\"'red'\"\r\n                    [circleDraggable]=\"true\"\r\n                    [editable]=\"true\">\r\n                </agm-circle> -->\r\n              \r\n              </agm-map>\r\n              \r\n              \r\n        </div>\r\n        <div class=\"sos_indicator\">\r\n          <div class=\"row\">\r\n          <div class=\"col-sm-5\">\r\n              <img src=\"../../assets/img/indicator1a.jpg\" alt=\"Indicator 1\">\r\n            <p>User Location</p>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n              <img src=\"../../assets/img/indicator2.png\" alt=\"Indicator 2\">\r\n              <p>User Destination</p>\r\n          </div>\r\n          <!-- <div class=\"col-sm-3\">\r\n              <img src=\"../../assets/img/indicator3.png\" alt=\"Indicator 3\">\r\n              <p>Start of the User Path</p>\r\n          </div> -->\r\n          <div class=\"col-sm-3\">\r\n              <img src=\"../../assets/img/indicator4a.jpg\" alt=\"Indicator 4\">\r\n              <p>Walking</p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"sos_indicator\">\r\n            <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n                <img src=\"../../assets/img/indicator5.png\" alt=\"Indicator 5\">\r\n                <p>Emergency information about the user</p>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n               <img src=\"http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/{{user.avatarId}}\"  (error)=\"errorHandler($event)\" alt=\"Profile Pic\" class=\"user_pic2\" >\r\n               \r\n                <p>User's photo</p>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <img src=\"../../assets/img/indicator7a.jpg\" alt=\"Indicator 7\">\r\n                <p>Emergency</p>\r\n            </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-sm-5 p-r-0\">\r\n        <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"col-sm-2\">\r\n            <img src=\"http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/{{user.avatarId}}\" (error)=\"errorHandler($event)\" alt=\"Profile Pic\" class=\"user_pic\">              \r\n          </div>\r\n          <div class=\"col-sm-10\">\r\n              <h2>{{user.firstName}} {{user.lastName}}</h2>\r\n              <h1>{{user.phoneNumber}}</h1>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"custom-tabs\">\r\n                <tabset type=\"pills\">                        \r\n                    <tab heading=\"Chat\">\r\n                        <app-chat></app-chat>\r\n                    </tab>  \r\n                    <tab heading=\"TrackPoints\">\r\n                        <app-trackpoints [(etrackpoints)]=\"etrackpoints\" ></app-trackpoints>\r\n                    </tab>                      \r\n                </tabset>        \r\n            </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/main/sossignals/sossignals.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/sossignals/sossignals.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white_container {\n  background: #fff;\n  margin: 1% auto 10%;\n  padding: 25px;\n  vertical-align: middle;\n  text-align: left;\n  float: left;\n  width: 100%;\n  border: solid 1px #e5e9f2;\n  box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n  border-radius: 6px; }\n  .white_container .p-r-0 {\n    padding-right: 0; }\n  .white_container .p-l-0 {\n    padding-left: 0; }\n  .white_container .sos_map img {\n    width: 100%; }\n  .white_container .sos_indicator {\n    margin-top: 25px !important;\n    margin-bottom: 0px !important;\n    width: 100%;\n    float: left; }\n  .white_container .sos_indicator .user_pic2 {\n      width: 30px !important;\n      height: 30px;\n      border-radius: 100%; }\n  .white_container .sos_indicator img {\n      width: auto !important; }\n  .white_container .sos_indicator p {\n      font-size: 13px; }\n  .white_container h1, .white_container h2 {\n    margin-top: 8px;\n    width: 100%;\n    float: left;\n    margin-bottom: 2px;\n    color: #212121; }\n  .white_container h1 {\n    font-size: 18px; }\n  .white_container h2 {\n    font-size: 14px; }\n  .white_container .custom-tabs {\n    text-align: center;\n    float: left;\n    width: 100%; }\n  .white_container .custom-tabs .nav {\n      display: inline-block;\n      background: #fff;\n      border-radius: 50px;\n      border: solid 1px #e5e9f2;\n      margin: 15px 0; }\n  .white_container .custom-tabs .nav > li.active > a, .white_container .custom-tabs .nav > li.active > a:focus, .white_container .custom-tabs .nav > li.active > a:hover {\n        background: #8c91da !important;\n        border-radius: 50px;\n        color: #fff !important; }\n  .white_container .custom-tabs .nav > li > a:focus, .white_container .custom-tabs .nav > li > a:hover {\n        background: none !important; }\n  .white_container .custom-tabs .nav li {\n        width: 150px;\n        text-align: center; }\n  .white_container .custom-tabs .nav li a {\n          color: #000 !important; }\n  .white_container .custom-tabs .tab-content {\n      text-align: left;\n      float: left;\n      width: 100%; }\n  .white_container .user_pic {\n    width: 50px;\n    height: 50px;\n    border-radius: 100%; }\n  .white_container agm-map {\n    height: 300px; }\n"

/***/ }),

/***/ "./src/app/main/sossignals/sossignals.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/sossignals/sossignals.component.ts ***!
  \*********************************************************/
/*! exports provided: SosSignalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SosSignalsComponent", function() { return SosSignalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sossignals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sossignals.service */ "./src/app/main/sossignals/sossignals.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SosSignalsComponent = /** @class */ (function () {
    function SosSignalsComponent(route, router, sosSignalsService, activeRoute, orderPipe) {
        this.route = route;
        this.router = router;
        this.sosSignalsService = sosSignalsService;
        this.activeRoute = activeRoute;
        this.orderPipe = orderPipe;
        this.model = {};
        this.order = 'tptime';
        // lat: any;
        // lng: any;
        // initial center position for the map
        this.lat = 0;
        this.lng = 0;
        this.iconurl = "../../assets/img/indicator3.png";
        this.polypoints = [
            {
                lat: -33.781858,
                lng: 151.284982,
                label: 'A'
            },
            {
                lat: -33.781890,
                lng: 151.284982,
                label: 'B',
            },
            {
                lat: -33.780858,
                lng: 151.283982,
                label: 'C',
            }
        ];
    }
    SosSignalsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    SosSignalsComponent.prototype.mapClicked = function ($event) {
        this.polypoints.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    };
    SosSignalsComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    SosSignalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.etrackpoints = null;
        this.user = JSON.parse(localStorage.User);
        this.sosSignalsService.getTripsDetail(this.activeRoute.snapshot.params['id']).subscribe(function (x) {
            _this.model = x;
            _this.placeid = _this.model.addressPlace;
            //this.getLatLong(this.model.addressPlace);
            _this.gettrackpoints(_this.activeRoute.snapshot.params['id']);
        }, function (error) {
            // this.error = error.statusText;
            // this.loading = false;
            // this.spinner.hide();
            // this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    };
    SosSignalsComponent.prototype.gettrackpoints = function (trackid) {
        var _this = this;
        this.sosSignalsService.getTripsTrackPointsDetail(trackid).subscribe(function (data) {
            _this.etrackpoints = data;
            if (_this.etrackpoints != null && _this.etrackpoints.length > 0) {
                _this.lat = _this.etrackpoints[0].x;
                _this.lng = _this.etrackpoints[0].y;
                _this.orderPipe.transform(_this.etrackpoints, _this.order);
                _this.etrackpoints.forEach(function (value) {
                    var latlng = { lat: value.x, lng: value.y };
                    _this.geocodeAddressPromise(latlng).then(function (response) {
                        value.address = response;
                    }, function (error) {
                        value.address = "error";
                    });
                });
            }
        }, function (error) {
            // this.error = error.statusText;
            // this.loading = false;
            // this.spinner.hide();
            // this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    };
    SosSignalsComponent.prototype.geocodeAddressPromise = function (latlng) {
        return new Promise(function (resolve, reject) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'location': latlng,
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    resolve({
                        address: results[0].formatted_address.toString()
                    });
                }
                else {
                    reject('Cannot find address');
                }
            });
        });
    };
    SosSignalsComponent.prototype.errorHandler = function (event) {
        this.user.Imageurl = "../../assets/img/user.png";
    };
    // mapReady($event: any) {
    //       // here $event will be of type google.maps.Map 
    //   // and you can put your logic here to get lat lng for marker. I have just put a sample code. You can refactor it the way you want.
    //   this.getLatLong(this.placeid, $event, null);
    // }
    SosSignalsComponent.prototype.getLatLong = function (placeid) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'placeId': placeid }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    _this.lat = results[0].geometry.location.lat();
                    _this.lng = results[0].geometry.location.lng();
                    // map.setCenter(results[0].geometry.location);
                    // var marker = new google.maps.Marker({
                    //   map: map,
                    //   position: results[0].geometry.location
                    // });
                    // infowindow.setContent(results[0].formatted_address);
                    // infowindow.open(map, marker);
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    SosSignalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sossignals',
            template: __webpack_require__(/*! ./sossignals.component.html */ "./src/app/main/sossignals/sossignals.component.html"),
            styles: [__webpack_require__(/*! ./sossignals.component.scss */ "./src/app/main/sossignals/sossignals.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _sossignals_service__WEBPACK_IMPORTED_MODULE_2__["SosSignalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_3__["OrderPipe"]])
    ], SosSignalsComponent);
    return SosSignalsComponent;
}());



/***/ }),

/***/ "./src/app/main/sossignals/sossignals.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/sossignals/sossignals.module.ts ***!
  \******************************************************/
/*! exports provided: SosSignalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SosSignalModule", function() { return SosSignalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _sossignals_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sossignals-routing.module */ "./src/app/main/sossignals/sossignals-routing.module.ts");
/* harmony import */ var _sossignals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sossignals.component */ "./src/app/main/sossignals/sossignals.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat/chat.component */ "./src/app/main/chat/chat.component.ts");
/* harmony import */ var _trackpoints_trackpoints_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../trackpoints/trackpoints.component */ "./src/app/main/trackpoints/trackpoints.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SosSignalModule = /** @class */ (function () {
    function SosSignalModule() {
    }
    SosSignalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sossignals_routing_module__WEBPACK_IMPORTED_MODULE_3__["SosSignalsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderModule"]
            ],
            declarations: [
                _sossignals_component__WEBPACK_IMPORTED_MODULE_4__["SosSignalsComponent"],
                _trackpoints_trackpoints_component__WEBPACK_IMPORTED_MODULE_7__["TrackpointsComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
            ]
        })
    ], SosSignalModule);
    return SosSignalModule;
}());



/***/ }),

/***/ "./src/app/main/sossignals/sossignals.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/sossignals/sossignals.service.ts ***!
  \*******************************************************/
/*! exports provided: SosSignalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SosSignalsService", function() { return SosSignalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SosSignalsService = /** @class */ (function () {
    function SosSignalsService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
    }
    SosSignalsService.prototype.getTripsDetail = function (id) {
        return this.httpClient.get(this.API_URL + "/tracks/" + id);
    };
    SosSignalsService.prototype.getTripsTrackPointsDetail = function (id) {
        return this.httpClient.get(this.API_URL + "/trackpoints/trackid/" + id);
    };
    SosSignalsService.prototype.getGeoCodeAddress = function (latlng) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    return results[0].formatted_address.toString();
                }
            }
            else {
                return "";
            }
        });
    };
    SosSignalsService.prototype.getRevGeoLocation = function (lat, lng) {
        if (navigator.geolocation) {
            var geocoder_1 = new google.maps.Geocoder();
            var latlng_1 = new google.maps.LatLng(lat, lng);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                geocoder_1.geocode({ 'location': latlng_1 }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results[0]);
                        observer.next(results[0]);
                        observer.complete();
                    }
                    else {
                        console.log('Error: ', results, ' & Status: ', status);
                        observer.error();
                    }
                });
            });
        }
    };
    SosSignalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SosSignalsService);
    return SosSignalsService;
}());



/***/ }),

/***/ "./src/app/main/trackpoints/trackpoints.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/trackpoints/trackpoints.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 trackpoints\">\r\n  <h4>History</h4>\r\n  <ul  *ngFor=\"let point of etrackpoints ; let i = index;\">\r\n    <li>\r\n     <span class=\"pull-left\">{{point.address!=null?point.address.address:''}}</span>\r\n            <!-- <reverse-geocode lat={{point.x}} lng={{point.y}}></reverse-geocode> -->\r\n      <span class=\"pull-right\">{{point.tpTime| date : \"h:mm a\"}}</span>\r\n    </li>    \r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/trackpoints/trackpoints.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/trackpoints/trackpoints.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trackpoints h4 {\n  color: #999999;\n  margin-bottom: 5px; }\n\n.trackpoints ul {\n  margin: 0;\n  padding: 0; }\n\n.trackpoints ul li {\n    list-style: none;\n    padding: 12px 0 10px 0;\n    border-bottom: solid 1px #f2f3f4;\n    float: left;\n    width: 100%;\n    color: #707070;\n    font-size: 14px; }\n\n.trackpoints ul li:last-child {\n      border-bottom: solid 0px #f2f3f4; }\n"

/***/ }),

/***/ "./src/app/main/trackpoints/trackpoints.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/trackpoints/trackpoints.component.ts ***!
  \***********************************************************/
/*! exports provided: TrackpointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackpointsComponent", function() { return TrackpointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sossignals_sossignals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sossignals/sossignals.service */ "./src/app/main/sossignals/sossignals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackpointsComponent = /** @class */ (function () {
    function TrackpointsComponent(sosSignalsService, activeRoute, _zone) {
        this.sosSignalsService = sosSignalsService;
        this.activeRoute = activeRoute;
        this._zone = _zone;
        this.closepopupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TrackpointsComponent.prototype.ngOnInit = function () {
    };
    TrackpointsComponent.prototype.ngOnChanges = function () {
        console.log(this.etrackpoints);
        //sthis.someFunction();
    };
    TrackpointsComponent.prototype.closepopupChanged = function () {
        //  this.closepopupChange.emit({ etrackpoints: null });
    };
    TrackpointsComponent.prototype.onGeocodeComplete = function (address) {
        return address;
    };
    TrackpointsComponent.prototype.onGeocodeError = function (error) {
        return "Error";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrackpointsComponent.prototype, "etrackpoints", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TrackpointsComponent.prototype, "closepopupChange", void 0);
    TrackpointsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trackpoints',
            template: __webpack_require__(/*! ./trackpoints.component.html */ "./src/app/main/trackpoints/trackpoints.component.html"),
            styles: [__webpack_require__(/*! ./trackpoints.component.scss */ "./src/app/main/trackpoints/trackpoints.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_sossignals_sossignals_service__WEBPACK_IMPORTED_MODULE_1__["SosSignalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TrackpointsComponent);
    return TrackpointsComponent;
}());



/***/ }),

/***/ "./src/app/shared/alert/alert.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/alert/alert.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"display:block!important\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div *ngIf=\"message?.type == 'confirm'\" class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <h3 class=\"text-center\">{{message.text}}</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <p class=\"text-center\">                            \r\n                            <a (click)=\"message.siFn()\">\r\n                                <button class=\"btn btn-sc btn_signin\">Yes</button>\r\n                            </a>\r\n                            <a (click)=\"message.noFn()\">\r\n                                    <button class=\"btn btn-pm register_btn\">No</button>\r\n                            </a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/alert/alert.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/alert/alert.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_signin {\n  background: #8c91da;\n  width: auto;\n  color: #fff;\n  padding: 5px 10px;\n  margin: 20px 5px 0;\n  font-size: 16px; }\n\n.register_btn {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n  padding: 5px 10px;\n  border: solid 1px #e5e9f2;\n  margin: 20px 5px 0;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this function waits for a message from alert service, it gets 
        //triggered when we call this from any other component
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //moduleId: module.id,
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/shared/alert/alert.component.scss")],
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/alert/alert.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/alert/alert.module.ts ***!
  \**********************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./src/app/shared/alert/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "./src/app/shared/alert/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/alert/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService() {
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AlertService.prototype.confirmThis = function (message, siFn, noFn) {
        this.setConfirmation(message, siFn, noFn);
    };
    AlertService.prototype.setConfirmation = function (message, siFn, noFn) {
        var that = this;
        this.subject.next({
            type: "confirm",
            text: message,
            siFn: function () {
                that.subject.next(); //this will close the modal
                siFn();
            },
            noFn: function () {
                that.subject.next();
                noFn();
            }
        });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\" >\r\n  <ng-content></ng-content>\r\n \r\n  <button *ngIf=\"closable\" data-dismiss=\"modal\" class=\"fancybox-close\" type=\"button\" (click)=\"close()\">\r\n    <span>x</span>\r\n  </button>\r\n</div>\r\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999; }\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 13% !important;\n  margin-right: auto;\n  margin-left: auto;\n  min-height: 200px;\n  width: 90%;\n  max-width: 520px;\n  background-color: #fff;\n  padding: 12px;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.dialog .white_container {\n    margin: 1% auto 0%; }\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 25%; } }\n\n.dialog__close-btn {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em; }\n\n.fancybox-close {\n  position: absolute;\n  right: -2%;\n  top: -4%;\n  background: #b92d25;\n  border: 2px solid #fff;\n  -webkit-border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  line-height: 25px;\n  font-size: 18px;\n  font-weight: normal;\n  color: #fff;\n  padding: 0;\n  box-shadow: 0px 3px 4px #aaa;\n  cursor: pointer; }\n\n.fancybox-close span {\n    vertical-align: text-top; }\n"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.closable = true;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "objectVal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/shared/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/shared/dialog/dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dialog', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialog/dialog.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/dialog/dialog.module.ts ***!
  \************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.component */ "./src/app/shared/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]],
            exports: [_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, route) {
        this.router = router;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function () {
        // return true;
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <a class=\"navbar-brand\" href=\"#\"><img src=\"../../assets/img/logo.png\" alt=\"Logo\"></a>\r\n                <button class=\"navbar-toggler navbar_custom\" type=\"button\" (click)=\"toggleNavbar()\">\r\n                        <span class=\"icon-bar\"></span>\r\n                         <span class=\"icon-bar\"></span>\r\n                          <span class=\"icon-bar\"></span>\r\n                                          \r\n                  </button>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\"  [ngClass]=\"{ 'show': navbarOpen }\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"/main/geolocations\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Locations</a></li>\r\n                <li><a routerLink=\"/main/dashboard\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a></li>\r\n                <li><a routerLink=\"/main/mycircle\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">my Safety Circle</a></li>\r\n                <li><a routerLink=\"/main/sossignals\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">SOS Signals</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a routerLink=\"/main/profile\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><span>\r\n                    \r\n                    <img src=\"{{imageurl}}\" alt=\"User\" class=\"userPic\"></span>{{username}}</a></li>\r\n                <li><a (click)=\"logoutUser()\" class=\"logout\"><span class=\"fa fa-sign-out\"></span>&nbsp;Log Out</a></li>\r\n            </ul>\r\n        </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .navbar {\n  background: #fff !important;\n  min-height: 60px !important;\n  border-radius: 0px !important;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  border: none !important; }\n\nheader .navbar-default .navbar-nav > .active > a, header .navbar-default .navbar-nav > .active > a:focus, header .navbar-default .navbar-nav > .active > a:hover {\n  background: none !important;\n  color: #000 !important; }\n\nheader .navbar-nav.navbar-right > li > a {\n  color: #9d9d9d !important;\n  margin: 0 10px !important; }\n\nheader .navbar-nav {\n  flex-direction: inherit !important; }\n\nheader .navbar-nav li > a {\n    margin: 0 30px !important;\n    padding: 0 5px !important;\n    line-height: 60px;\n    color: #9d9d9d !important;\n    font-size: 14px;\n    text-transform: capitalize; }\n\nheader .navbar-nav .logout {\n    cursor: pointer;\n    color: #9d9d9d !important; }\n\nheader .userPic {\n  width: 43px;\n  height: 44px;\n  float: left;\n  border-radius: 100%;\n  /* overflow: hidden; */\n  margin-right: 5px;\n  margin-top: 8px; }\n\nheader .userPic img {\n    width: 100%;\n    height: 100%; }\n\nheader .navbar_custom {\n  display: none; }\n\n@media only screen and (max-width: 767px) {\n  .navbar_custom {\n    display: block !important;\n    position: relative;\n    float: right;\n    padding: 6px 6px 3px 6px;\n    margin-top: 18px;\n    margin-right: 15px;\n    border: 1px solid transparent;\n    border-radius: 3px; }\n    .navbar_custom .icon-bar {\n      display: block;\n      width: 20px;\n      height: 2px;\n      border-radius: 1px;\n      background: #767676;\n      margin-bottom: 3px; }\n  .navbar_custom:focus {\n    outline: none !important; } }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_login_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/login.services */ "./src/app/core/services/login.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, authservice, loginservice, router) {
        var _this = this;
        this.route = route;
        this.authservice = authservice;
        this.loginservice = loginservice;
        this.router = router;
        this.username = 'j Jackson';
        this.imageurl = './../assets/img/userimageurl.png';
        this.navbarOpen = false;
        this.profilepic = '';
        this.logoutUser = function () {
            // remove user from local storage to log user out
            this.authservice.logout();
            this.router.navigate(['/home']);
        };
        this.loginservice.LoggedInUserSubject.subscribe(function (user) {
            if (user.avatarId != null || user.avatarId != '') {
                _this.imageurl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + user.avatarId;
                _this.username = user.firstName + " " + user.lastName;
            }
            ;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
        var dom = document.querySelector('header');
        dom.classList.toggle(this.show);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _core_services_login_services__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard, HeaderModule, DialogModule, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.module */ "./src/app/shared/header/header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_header_module__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });

/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/dialog.module */ "./src/app/shared/dialog/dialog.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_2__["DialogModule"]; });

/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.module */ "./src/app/shared/alert/alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]; });







/***/ }),

/***/ "./src/app/shared/validators/compare-validator.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/validators/compare-validator.directive.ts ***!
  \******************************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (c) {
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('compare'),
        __metadata("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: CompareValidatorDirective_1, multi: true }]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
    var CompareValidatorDirective_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api",
    imagesurl: "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Jagjeet\Tfsproject\TrippleWebPortal\TrippleWebPortal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map