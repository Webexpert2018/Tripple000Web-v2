(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-email-confirm-email-module"],{

/***/ "./src/app/confirm-email/confirm-email-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/confirm-email/confirm-email-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmEmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailRoutingModule", function() { return ConfirmEmailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-email.component */ "./src/app/confirm-email/confirm-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _confirm_email_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmEmailComponent"] }
];
var ConfirmEmailRoutingModule = /** @class */ (function () {
    function ConfirmEmailRoutingModule() {
    }
    ConfirmEmailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConfirmEmailRoutingModule);
    return ConfirmEmailRoutingModule;
}());



/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.html":
/*!************************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container confirmEmail\">\r\n  <div class=\"col-sm-offset-3 col-sm-6 text-center\">\r\n    <p><span class=\"fa fa-envelope\"></span></p>\r\n    <p>A confirmation code was sent to your account. Check your email and enter the confirmation code provided in that email to activate your account.</p>\r\n  \r\n<form>\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\"></label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Validation Code\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <button type=\"button\" class=\"btn btn-primary\">Submit</button>\r\n  </div>\r\n</form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.scss":
/*!************************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirmEmail {\n  margin-top: 50px; }\n  .confirmEmail p {\n    font-size: 16px; }\n  .confirmEmail .fa {\n    font-size: 50px;\n    color: #8c91da;\n    margin-bottom: 10px; }\n  .confirmEmail .btn {\n    margin-top: 20px;\n    background: #8c91da;\n    border: none;\n    padding: 10px 30px; }\n"

/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
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

var ConfirmEmailComponent = /** @class */ (function () {
    function ConfirmEmailComponent() {
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
    };
    ConfirmEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-email',
            template: __webpack_require__(/*! ./confirm-email.component.html */ "./src/app/confirm-email/confirm-email.component.html"),
            styles: [__webpack_require__(/*! ./confirm-email.component.scss */ "./src/app/confirm-email/confirm-email.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
}());



/***/ }),

/***/ "./src/app/confirm-email/confirm-email.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfirmEmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailModule", function() { return ConfirmEmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _confirm_email_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-email-routing.module */ "./src/app/confirm-email/confirm-email-routing.module.ts");
/* harmony import */ var _confirm_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-email.component */ "./src/app/confirm-email/confirm-email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmEmailModule = /** @class */ (function () {
    function ConfirmEmailModule() {
    }
    ConfirmEmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _confirm_email_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfirmEmailRoutingModule"]
            ],
            declarations: [
                _confirm_email_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmEmailComponent"],
            ]
        })
    ], ConfirmEmailModule);
    return ConfirmEmailModule;
}());



/***/ })

}]);
//# sourceMappingURL=confirm-email-confirm-email-module.js.map