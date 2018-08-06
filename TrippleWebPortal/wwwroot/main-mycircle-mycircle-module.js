(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-mycircle-mycircle-module"],{

/***/ "./src/app/core/models/contactModel.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/contactModel.ts ***!
  \*********************************************/
/*! exports provided: contactModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactModel", function() { return contactModel; });
var contactModel = /** @class */ (function () {
    function contactModel() {
    }
    return contactModel;
}());



/***/ }),

/***/ "./src/app/main/addcontact/addcontact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/addcontact/addcontact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"white_container\">\r\n\r\n      <h1>{{addeditusercontactmessage}}\r\n\r\n\r\n        <div class=\"text-center userPic\">\r\n          <div class=\"userPic_outer\">\r\n            <div class=\"userPic_inner\">\r\n\r\n                <div *ngIf=\"model.photoId!=' '; then thenBlock else elseBlock\"></div>\r\n                <ng-template #thenBlock> <img *ngIf=\"model.photoId; else elseBlock\" src=\"{{imageUrl}}{{model.photoId}}\" alt=\"mysafetypics\"></ng-template>\r\n                <ng-template #elseBlock><img src=\"../../assets/img/user.png\" alt=\"mysafetypics\"></ng-template>\r\n             \r\n              <!-- <ng-template #elseBlock>\r\n                <div>\r\n                  <img src=\"../../assets/img/userPic.png\" alt=\"mysafetypics\">\r\n                </div>\r\n              </ng-template> -->\r\n              <!-- <img  src=\"{{imageUrl}}{{model.photoId}}\" (error)=\"errorHandler($event)\" alt=\"Profile Pic\"> -->\r\n            </div>\r\n            <label for=\"file\">\r\n              <span class=\"fa fa-camera\"></span>\r\n            </label>\r\n          </div>\r\n          <input style=\"display: none;\" type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\"\r\n          />\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"pull-right\">\r\n          <!-- <button type=\"button\" class=\"addCont_btn\">\r\n            <div>\r\n              <span *ngIf=\"saveMode\" class=\"fa fa-plus\"></span>Add Userpic\r\n            </div>            \r\n          </button> -->\r\n\r\n\r\n        </div>\r\n      </h1>\r\n      <form name=\"form\" (ngSubmit)=\"f.form.valid &&((saveMode && saveUserContact())||(!saveMode && UpdateUserContact()))\" #f=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 m-t-30\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group m-b-10\">\r\n                      <label>Name</label>\r\n                      <input type=\"text\" class=\"form-control custom_form\" name=\"firstname\" [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && firstname.invalid }\"\r\n                        required />\r\n                      <div *ngIf=\"f.submitted && firstname.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                        <div *ngIf=\"firstname.errors.required\">\r\n                          Name is required\r\n                        </div>\r\n                      </div>\r\n                      <!-- <input type=\"text\" class=\"form-control custom_form\" placeholder=\"Essie\"> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 m-b-10\">\r\n                    <div class=\"form-group\">\r\n                      <label>Surname</label>\r\n                      <input type=\"text\" class=\"form-control custom_form\" name=\"lastname\" [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && lastname.invalid }\"\r\n                        required />\r\n                      <div *ngIf=\"f.submitted && lastname.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                        <div *ngIf=\"lastname.errors.required\">\r\n                          Surname is required\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 m-b-10\">\r\n                    <div class=\"form-group\">\r\n                      <label>Email</label>\r\n                      <input type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\r\n                        required email class=\"form-control custom_form\">\r\n                      <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                        <div *ngIf=\"email.errors.required\">\r\n                          Email is required\r\n                        </div>\r\n                        <div *ngIf=\"email.errors?.email\">\r\n                          Email is not valid.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 m-b-10\">\r\n                    <div class=\"form-group\">\r\n                      <label>Phone Number</label>\r\n                      <input type=\"text\" maxlength=\"10\" pattern=\"[0-9]+\" name=\"phoneNo\" [(ngModel)]=\"model.phoneNo\" #phoneNo=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phoneNo.invalid }\"\r\n                        required class=\"form-control custom_form\" placeholder=\"\">\r\n                      <div *ngIf=\"f.submitted && phoneNo.invalid\" class=\"invalid-feedback\" class=\"text-danger\">\r\n                        <div *ngIf=\"phoneNo.errors.required\">\r\n                          PhoneNumber is required\r\n                        </div>\r\n\r\n                        <div *ngIf=\"phoneNo.errors.pattern\">\r\n                          PhoneNumber is invalid\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"col-sm-12\">\r\n                            <button type=\"button\" class=\"btn register_btn\" (click)='showRegisterDialogbox()'>Sign Up</button>\r\n                          </div> -->\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-offset-2 col-sm-10\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-5\">\r\n                <button type=\"button\" (click)=\" cancelpopupchanges();\" class=\"btn register_btn\">Cancel</button>\r\n              </div>\r\n              <div class=\"col-sm-5\">\r\n                <button type=\"submit\" [disabled]=\"loading\" *ngIf=\"saveMode\" class=\"btn btn_signin\">Save</button>\r\n                <button type=\"submit\" [disabled]=\"loading\" *ngIf=\"!saveMode\" class=\"btn btn_signin\">Update</button>\r\n              </div>\r\n              <!-- <div class=\"col-sm-5\">\r\n                <button type=\"submit\" class=\"btn btn_signin\">Save</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/addcontact/addcontact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/addcontact/addcontact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input::-webkit-input-placeholder {\n  color: #000 !important;\n  font-size: 12px; }\n\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000 !important;\n  font-size: 12px; }\n\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000 !important;\n  font-size: 12px; }\n\n.white_container {\n  background: #fff;\n  margin: 1% auto 0;\n  padding: 25px;\n  vertical-align: middle;\n  text-align: left; }\n\n.white_container .m-t-60 {\n    margin-top: 60px; }\n\n.white_container label {\n    color: #9d9d9d;\n    font-weight: normal;\n    font-size: 14px !important; }\n\n.white_container h1 {\n    margin-top: 0px;\n    width: 100%;\n    float: left;\n    font-size: 18px;\n    margin-bottom: 0px;\n    color: #9d9d9d; }\n\n.white_container h1 .register_btn {\n      width: auto !important;\n      margin-top: 0; }\n\n.white_container .userPic {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    clear: both;\n    float: left;\n    width: 100%; }\n\n.white_container .userPic .userPic_outer {\n      width: 158px;\n      height: 156px;\n      display: inline-block;\n      position: relative; }\n\n.white_container .userPic .userPic_outer .userPic_inner {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        border-radius: 100px; }\n\n.white_container .userPic .userPic_outer .userPic_inner img {\n          width: 100%;\n          height: 100%; }\n\n.white_container .userPic .userPic_outer label {\n        position: absolute;\n        right: 6px;\n        bottom: 0; }\n\n.white_container .userPic .userPic_outer label .fa {\n          color: #fff;\n          border: solid 3px #fff;\n          padding: 7px;\n          border-radius: 100px;\n          background: rgba(0, 0, 0, 0.5); }\n\n.white_container .custom_form {\n    border: none !important;\n    border-bottom: solid 1px #ccc !important;\n    box-shadow: none !important;\n    border-radius: 0px !important;\n    padding-left: 0px !important; }\n\n.white_container .m-b-30 {\n    margin-bottom: 37px; }\n\n.white_container .m-b-10 {\n    margin-bottom: 10px; }\n\n.white_container .btn_signin {\n    background: #8c91da;\n    float: left;\n    width: 100%;\n    color: #fff;\n    padding: 12px;\n    margin-top: 18px;\n    font-size: 16px; }\n\n.white_container .register_btn {\n    float: left;\n    width: 100%;\n    background: #fff;\n    box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n    padding: 12px;\n    border: solid 1px #e5e9f2;\n    margin-top: 20px;\n    font-size: 16px; }\n\n.white_container .addCont_btn {\n    color: #8C91DA;\n    float: left;\n    width: 130px;\n    height: 130px;\n    background: #f2f2f2;\n    box-shadow: 0;\n    padding: 0 12px;\n    border: 0;\n    font-size: 16px;\n    border-radius: 100px; }\n\n.white_container .addCont_btn .fa {\n      width: 100%;\n      text-align: center;\n      margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/main/addcontact/addcontact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/addcontact/addcontact.component.ts ***!
  \*********************************************************/
/*! exports provided: AddContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactComponent", function() { return AddContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_models_contactModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/models/contactModel */ "./src/app/core/models/contactModel.ts");
/* harmony import */ var _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/alert/alert.service */ "./src/app/shared/alert/alert.service.ts");
/* harmony import */ var _addcontact_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcontact.service */ "./src/app/main/addcontact/addcontact.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(router, route, toastr, AddContactService, ds, alertService, spinner) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.AddContactService = AddContactService;
        this.ds = ds;
        this.alertService = alertService;
        this.spinner = spinner;
        this.closepopupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = {};
        this.updateModel = new _core_models_contactModel__WEBPACK_IMPORTED_MODULE_4__["contactModel"];
        this.saveMode = true;
        this.enableDelete = false;
        this.addeditusercontactmessage = "Add New Location";
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].imagesurl;
    }
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent.prototype.ngOnDestroy = function () {
    };
    AddContactComponent.prototype.ngOnChanges = function () {
        this.checkIfEditMode();
    };
    AddContactComponent.prototype.checkIfEditMode = function () {
        var _this = this;
        if (this.editid) {
            this.AddContactService.getUserContactdetails(this.editid).subscribe(function (data) {
                _this.saveMode = false;
                _this.model = data;
                _this.model.firstname = data.name.split(' ')[0];
                _this.model.lastname = data.name.substring(data.name.indexOf(' '));
                _this.addeditusercontactmessage = "My Safety Circle " + _this.model.firstname + " " + _this.model.lastname;
                _this.spinner.hide();
            }, function (error) {
                _this.toastr.error("Error Occured " + error.statusText, 'Error');
                _this.spinner.hide();
            });
        }
        else {
            this.cancelFields();
        }
    };
    AddContactComponent.prototype.closepopupChanged = function () {
        this.spinner.show();
        this.cancelFields();
        this.closepopupChange.emit({ closepoup: true });
    };
    AddContactComponent.prototype.saveUserContact = function () {
        var _this = this;
        this.spinner.show();
        this.model.name = this.model.firstname + " " + this.model.lastname;
        this.AddContactService.saveContact(this.model).subscribe(function (x) {
            _this.toastr.success("UserContact addedd successfully", 'Success');
            _this.closepopupChanged();
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    };
    AddContactComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        if (this.model.id != '') {
            var file = files.item(0);
            var formData = new FormData();
            formData.append('file', file, file.name);
            this.AddContactService.uploadAvatar(formData, this.model.id).subscribe(function (data) {
                _this.model = data;
                _this.model.firstname = data.name.split(' ')[0];
                _this.model.lastname = data.name.substring(data.name.indexOf(' '));
                _this.model.photoUrl = "http://tzapi-dev.us-west-2.elasticbeanstalk.com/api/attachments/" + data.photoId;
            }, function (error) {
                _this.toastr.error("Error Occured " + error.statusText, 'Error');
            });
        }
        else {
            this.toastr.error("Please save the user details", 'Error');
        }
    };
    AddContactComponent.prototype.UpdateUserContact = function () {
        var _this = this;
        this.spinner.show();
        this.model.name = this.model.firstname + " " + this.model.lastname;
        this.AddContactService.updateContact(this.model).subscribe(function (x) {
            _this.toastr.success("UserContact Updated successfully", 'Success');
            _this.closepopupChanged();
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error("Error Occured " + error.statusText, 'Error');
        });
    };
    AddContactComponent.prototype.errorHandler = function (event) {
        this.model.photoUrl = "../../assets/img/user.png";
    };
    AddContactComponent.prototype.cancelFields = function () {
        this.addeditusercontactmessage = "Add New Safety Circle";
        this.model.id = '';
        this.model.name = '';
        this.model.firstname = '';
        this.model.lastname = '';
        this.model.userid = '';
        this.model.phoneNo = '';
        this.model.email = '';
        this.model.contactUSerId = '';
        this.model.photoUrl = '';
        this.model.photoId = '';
        this.enableDelete = false;
        this.saveMode = true;
    };
    AddContactComponent.prototype.cancelpopupchanges = function () {
        if (this.editid) {
            this.closepopupChange.emit({ closepoup: true });
        }
        else {
            this.cancelFields();
            this.closepopupChange.emit({ closepoup: true });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "editid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "closepopupChange", void 0);
    AddContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addcontact',
            template: __webpack_require__(/*! ./addcontact.component.html */ "./src/app/main/addcontact/addcontact.component.html"),
            styles: [__webpack_require__(/*! ./addcontact.component.scss */ "./src/app/main/addcontact/addcontact.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _addcontact_service__WEBPACK_IMPORTED_MODULE_6__["AddContactService"],
            _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _shared_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "./src/app/main/addcontact/addcontact.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/addcontact/addcontact.service.ts ***!
  \*******************************************************/
/*! exports provided: AddContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactService", function() { return AddContactService; });
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



var AddContactService = /** @class */ (function () {
    function AddContactService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
        this.Userid = localStorage.getItem("currentUserId");
    }
    AddContactService.prototype.getUserContactdetails = function (id) {
        return this.httpClient.get(this.API_URL + "/usercontacts/" + id);
        //     return this.httpClient.get(`${this.API_URL}/locations/`);
        //    .pipe(map(res => res));   
    };
    AddContactService.prototype.saveContact = function (savemodel) {
        return this.httpClient.post(this.API_URL + "/usercontacts", {
            id: "00000000-0000-0000-0000-000000000000",
            name: savemodel.name,
            email: savemodel.email,
            phoneNo: savemodel.phoneNo,
            userId: this.Userid,
            contactUserId: null,
            photoUrl: savemodel.photoUrl,
            photoId: savemodel.photoId
        });
    };
    AddContactService.prototype.uploadAvatar = function (formData, UserContactid) {
        return this.httpClient.post(this.API_URL + "/usercontacts/" + UserContactid + "/updateAvatar", formData);
    };
    AddContactService.prototype.updateContact = function (updatemodel) {
        debugger;
        return this.httpClient.put(this.API_URL + "/usercontacts/" + updatemodel.id, {
            name: updatemodel.name,
            email: updatemodel.email,
            phoneNo: updatemodel.phoneNo,
            userId: this.Userid,
            contactUserId: null,
            photoUrl: updatemodel.photoUrl,
            photoId: updatemodel.photoId
        });
    };
    AddContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddContactService);
    return AddContactService;
}());



/***/ }),

/***/ "./src/app/main/mycircle/mycircle-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/mycircle/mycircle-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MyCircleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCircleRoutingModule", function() { return MyCircleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mycircle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycircle.component */ "./src/app/main/mycircle/mycircle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _mycircle_component__WEBPACK_IMPORTED_MODULE_2__["MycircleComponent"] }
];
var MyCircleRoutingModule = /** @class */ (function () {
    function MyCircleRoutingModule() {
    }
    MyCircleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MyCircleRoutingModule);
    return MyCircleRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/mycircle/mycircle.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/mycircle/mycircle.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"location-section add-location\" (click)=\"showcontactDialogbox()\">\r\n        <span class=\"fa fa-plus location-plus\"></span>\r\n        <div class=\"add-location-bottom\">\r\n          <h2>Add Contact</h2>\r\n          <h3>Press on this box to add new contact.</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let contact of contactsdata; let i = index;\" class=\"col-sm-3\">\r\n        <div class=\"mysafety-section\">\r\n            <div>\r\n                <span class=\"fa fa-pencil edit\" (click)=\"editcircle(contact.id)\"></span>\r\n                <div class=\"text-center\">\r\n                  <div class=\"userPic\">\r\n                  <img *ngIf=\"contact.photoId!=null; else elseBlock\" src=\"{{imageUrl}}{{contact.photoId}}\" alt=\"image of {{contact.name}}\">\r\n                </div>\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                    <div>\r\n                        <img src=\"../../assets/img/user.png\" alt=\"default user image\">\r\n                    </div> \r\n                </ng-template>\r\n              </div>\r\n              <h4>{{contact.name}}</h4>\r\n              <h5>{{contact.email}}</h5>\r\n              <p class=\"mysafety_contact\">{{contact.phoneNo}}</p>\r\n        </div>\r\n    </div> \r\n  </div>\r\n</div>>\r\n<!-- <app-dialog [(visible)]=\"showaddContact\">\r\n  <app-addcontact></app-addcontact>\r\n</app-dialog> -->\r\n\r\n<app-dialog [(visible)]=\"showaddContact\" (visibleChange)=\"reloadList($event)\" [(objectVal)]=\"showaddContact\">\r\n    <app-addcontact [(editid)]=\"editid\" (closepopupChange)='changedialogValue($event)'></app-addcontact>\r\n  </app-dialog>"

/***/ }),

/***/ "./src/app/main/mycircle/mycircle.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/main/mycircle/mycircle.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location-section {\n  box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n  background-color: #ffffff;\n  border: solid 1px #e5e9f2;\n  border-radius: 6px;\n  position: relative;\n  margin: 10px 0;\n  height: 260px;\n  overflow: hidden; }\n  .location-section h4 {\n    margin: 0;\n    color: #000;\n    line-height: 20px;\n    font-size: 12px;\n    padding: 10px;\n    position: absolute;\n    background-color: #ffffff;\n    z-index: 1; }\n  .location-section .map {\n    position: relative;\n    bottom: 0;\n    z-index: 0; }\n  .add-location {\n  background: #e4e7f3 !important; }\n  .add-location h2 {\n    font-size: 22px;\n    color: #000;\n    padding-left: 10px;\n    margin-bottom: 10px; }\n  .add-location h3 {\n    font-size: 16px;\n    color: #9d9d9d;\n    padding-left: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    line-height: 22px; }\n  .add-location .add-location-bottom {\n    position: absolute;\n    bottom: 10px;\n    left: 10px; }\n  .add-location .location-plus {\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    background: #fff;\n    padding: 15px 15px 20px 20px;\n    border-radius: 6px 6px 6px 50px;\n    color: #e4e7f3;\n    font-weight: lighter;\n    font-size: 20px; }\n  .mysafety-section {\n  min-height: 260px;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(231, 231, 231, 0.31);\n  background-color: #ffffff;\n  border: solid 1px #e5e9f2;\n  border-radius: 6px;\n  padding: 20px;\n  width: 100%;\n  float: left;\n  margin: 10px 0; }\n  .mysafety-section .edit {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    color: #8c91da;\n    font-size: 20px; }\n  .mysafety-section h4 {\n    font-size: 18px;\n    line-height: 16px;\n    color: #000000; }\n  .mysafety-section h5 {\n    font-size: 16px;\n    color: #8E8E8E; }\n  .mysafety-section .mysafety_contact {\n    background: #f4f4ff;\n    text-align: center;\n    padding: 10px 20px;\n    margin-top: 20px;\n    border-radius: 50px;\n    color: #8C91DA;\n    font-size: 21px; }\n  .mysafety-section .userPic {\n    width: 158px;\n    height: 156px;\n    display: inline-block;\n    border-radius: 100px;\n    overflow: hidden; }\n  .mysafety-section .userPic img {\n      width: 100%;\n      height: 100%; }\n"

/***/ }),

/***/ "./src/app/main/mycircle/mycircle.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/mycircle/mycircle.component.ts ***!
  \*****************************************************/
/*! exports provided: MycircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycircleComponent", function() { return MycircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mycircle_mycircle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mycircle/mycircle.service */ "./src/app/main/mycircle/mycircle.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MycircleComponent = /** @class */ (function () {
    function MycircleComponent(mycircleService, ds, spinner) {
        this.mycircleService = mycircleService;
        this.ds = ds;
        this.spinner = spinner;
        this.showaddContact = false;
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imagesurl;
        this.showcontactDialogbox = function () {
            this.editid = null;
            this.showaddContact = !this.showaddContact;
        };
        this.getphotourl = function (photoid) {
            debugger;
            return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].imagesurl + photoid;
        };
        this.editcircle = function (currentitemId) {
            this.ds.sendData(currentitemId);
            this.showaddContact = !this.showaddContact;
            this.editid = currentitemId;
        };
        this.getUserConatacts = function () {
            var _this = this;
            this.spinner.show();
            this.mycircleService.getUserContacts().subscribe(function (data) {
                _this.spinner.hide();
                debugger;
                _this.contactsdata = data;
            });
        };
    }
    MycircleComponent.prototype.ngOnInit = function () {
        this.getUserConatacts();
    };
    MycircleComponent.prototype.reloadList = function () {
        this.spinner.show();
        this.editid = null;
        this.getUserConatacts();
    };
    MycircleComponent.prototype.changedialogValue = function (event) {
        if (true) {
            this.showaddContact = !this.showaddContact;
            this.reloadList();
        }
    };
    MycircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mycircle',
            template: __webpack_require__(/*! ./mycircle.component.html */ "./src/app/main/mycircle/mycircle.component.html"),
            styles: [__webpack_require__(/*! ./mycircle.component.scss */ "./src/app/main/mycircle/mycircle.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_mycircle_mycircle_service__WEBPACK_IMPORTED_MODULE_1__["MyCircleService"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], MycircleComponent);
    return MycircleComponent;
}());



/***/ }),

/***/ "./src/app/main/mycircle/mycircle.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/mycircle/mycircle.module.ts ***!
  \**************************************************/
/*! exports provided: MyCircleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCircleModule", function() { return MyCircleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mycircle_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mycircle-routing.module */ "./src/app/main/mycircle/mycircle-routing.module.ts");
/* harmony import */ var _mycircle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mycircle.component */ "./src/app/main/mycircle/mycircle.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _addcontact_addcontact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addcontact/addcontact.component */ "./src/app/main/addcontact/addcontact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MyCircleModule = /** @class */ (function () {
    function MyCircleModule() {
    }
    MyCircleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mycircle_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyCircleRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [
                _mycircle_component__WEBPACK_IMPORTED_MODULE_3__["MycircleComponent"],
                _addcontact_addcontact_component__WEBPACK_IMPORTED_MODULE_5__["AddContactComponent"]
            ]
        })
    ], MyCircleModule);
    return MyCircleModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-mycircle-mycircle-module.js.map