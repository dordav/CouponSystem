(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _components_admin_web_admin_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin-web/admin-web.component */ "./src/app/components/admin-web/admin-web.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_companies_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/companies/get-all-companies/get-all-companies.component */ "./src/app/components/companies/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_companies_create_new_company_create_new_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/companies/create-new-company/create-new-company.component */ "./src/app/components/companies/create-new-company/create-new-company.component.ts");
/* harmony import */ var _components_companies_getcomapny_getcomapny_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/companies/getcomapny/getcomapny.component */ "./src/app/components/companies/getcomapny/getcomapny.component.ts");
/* harmony import */ var _components_companies_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/companies/update-company/update-company.component */ "./src/app/components/companies/update-company/update-company.component.ts");
/* harmony import */ var _components_companies_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/companies/delete-company/delete-company.component */ "./src/app/components/companies/delete-company/delete-company.component.ts");
/* harmony import */ var _components_customers_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customers/get-all-customers/get-all-customers.component */ "./src/app/components/customers/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_customers_get_customer_get_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/customers/get-customer/get-customer.component */ "./src/app/components/customers/get-customer/get-customer.component.ts");
/* harmony import */ var _components_customers_create_new_customer_create_new_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/customers/create-new-customer/create-new-customer.component */ "./src/app/components/customers/create-new-customer/create-new-customer.component.ts");
/* harmony import */ var _components_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/customers/update-customer/update-customer.component */ "./src/app/components/customers/update-customer/update-customer.component.ts");
/* harmony import */ var _components_customers_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/customers/delete-customer/delete-customer.component */ "./src/app/components/customers/delete-customer/delete-customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
    { path: '#', redirectTo: 'mainpage', pathMatch: 'full' },
    { path: 'mainpage', component: _components_admin_web_admin_web_component__WEBPACK_IMPORTED_MODULE_2__["AdminWebComponent"] },
    { path: 'company', component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"] },
    { path: 'customer', component: _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"] },
    { path: 'getallcompanies/updatecompany/:id', component: _components_companies_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_8__["UpdateCompanyComponent"] },
    { path: 'getallcompanies', component: _components_companies_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_5__["GetAllCompaniesComponent"] },
    { path: 'appcreatenewcompany', component: _components_companies_create_new_company_create_new_company_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewCompanyComponent"] },
    { path: 'getcompany', component: _components_companies_getcomapny_getcomapny_component__WEBPACK_IMPORTED_MODULE_7__["GetcomapnyComponent"] },
    { path: 'updatecompany', component: _components_companies_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_8__["UpdateCompanyComponent"] },
    { path: 'deletecompany', component: _components_companies_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_9__["DeleteCompanyComponent"] },
    { path: 'getcustomer', component: _components_customers_get_customer_get_customer_component__WEBPACK_IMPORTED_MODULE_11__["GetCustomerComponent"] },
    { path: 'getallcustomers', component: _components_customers_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_10__["GetAllCustomersComponent"] },
    { path: 'createnewcustomer', component: _components_customers_create_new_customer_create_new_customer_component__WEBPACK_IMPORTED_MODULE_12__["CreateNewCustomerComponent"] },
    { path: 'updatecustomer', component: _components_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_13__["UpdateCustomerComponent"] },
    { path: 'deletecustomer', component: _components_customers_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_14__["DeleteCustomerComponent"] },
    { path: '**', redirectTo: 'mainpage', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bar></app-nav-bar>\n\n\n<router-outlet></router-outlet>>"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_web_admin_web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-web/admin-web.component */ "./src/app/components/admin-web/admin-web.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_companies_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/companies/get-all-companies/get-all-companies.component */ "./src/app/components/companies/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var _components_companies_create_new_company_create_new_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/companies/create-new-company/create-new-company.component */ "./src/app/components/companies/create-new-company/create-new-company.component.ts");
/* harmony import */ var _components_companies_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/companies/update-company/update-company.component */ "./src/app/components/companies/update-company/update-company.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_companies_getcomapny_getcomapny_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/companies/getcomapny/getcomapny.component */ "./src/app/components/companies/getcomapny/getcomapny.component.ts");
/* harmony import */ var _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/companyServices/company-services.service */ "./src/app/services/companyServices/company-services.service.ts");
/* harmony import */ var _components_companies_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/companies/delete-company/delete-company.component */ "./src/app/components/companies/delete-company/delete-company.component.ts");
/* harmony import */ var _components_customers_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customers/get-all-customers/get-all-customers.component */ "./src/app/components/customers/get-all-customers/get-all-customers.component.ts");
/* harmony import */ var _components_customers_create_new_customer_create_new_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/customers/create-new-customer/create-new-customer.component */ "./src/app/components/customers/create-new-customer/create-new-customer.component.ts");
/* harmony import */ var _components_customers_get_customer_get_customer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/customers/get-customer/get-customer.component */ "./src/app/components/customers/get-customer/get-customer.component.ts");
/* harmony import */ var _components_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/customers/update-customer/update-customer.component */ "./src/app/components/customers/update-customer/update-customer.component.ts");
/* harmony import */ var _components_customers_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customers/delete-customer/delete-customer.component */ "./src/app/components/customers/delete-customer/delete-customer.component.ts");
/* harmony import */ var _services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/customerServices/customer-services.service */ "./src/app/services/customerServices/customer-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_admin_web_admin_web_component__WEBPACK_IMPORTED_MODULE_5__["AdminWebComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_7__["CompaniesComponent"],
                _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"],
                _components_companies_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_9__["GetAllCompaniesComponent"],
                _components_companies_create_new_company_create_new_company_component__WEBPACK_IMPORTED_MODULE_10__["CreateNewCompanyComponent"],
                _components_companies_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCompanyComponent"],
                _components_companies_getcomapny_getcomapny_component__WEBPACK_IMPORTED_MODULE_13__["GetcomapnyComponent"],
                _components_companies_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_15__["DeleteCompanyComponent"],
                _components_customers_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_16__["GetAllCustomersComponent"],
                _components_customers_create_new_customer_create_new_customer_component__WEBPACK_IMPORTED_MODULE_17__["CreateNewCustomerComponent"],
                _components_customers_get_customer_get_customer_component__WEBPACK_IMPORTED_MODULE_18__["GetCustomerComponent"],
                _components_customers_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_19__["UpdateCustomerComponent"],
                _components_customers_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_20__["DeleteCustomerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
            ],
            providers: [
                // {provide: LocationStrategy, useClass:HashLocationStrategy},
                _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_14__["CompanyServicesService"], _services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_21__["CustomerServicesService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-web/admin-web.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/admin-web/admin-web.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-web/admin-web.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-web/admin-web.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div *ngIf = \"cart.length>0\">\n    <h2>My cart: <br></h2>\n  <div *ngFor=\"let product of cart\">\n    <p>name: {{product}}</p>\n  </div>\n</div> -->\n<!-- <h1>Shop</h1>\n<div *ngFor = \"let prd of products\">\n    <p>product name: {{prd.name}} </p>\n    <p>product price: {{prd.price}} </p>\n    <p>product amount: {{prd[\"amount\"]}}</p>\n    <button (click)='buy(prd)'>buy</button>\n    <hr>\n</div> -->\n<!-- <div class=\"card\" style=\"width: 18rem;\">\n    <div class=\"card-header\">\n      Company\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <div *ngFor = \"let prd of products\">\n          <li class=\"list-group-item\">Company name: {{prd.name}}, Company id:{{prd.id}}</li>\n          <li></li>\n      </div>\n\n    </ul>\n  </div> -->\n  <div class=\"jumbotron\">\n      <h1 class=\"display-4\">Hello, Admin!</h1>\n      <p class=\"lead\">This is the main page, here you can choose between company or customer, to get/create/update and delete.</p>\n      <hr class=\"my-4\">\n      <p>You have all the permissions, let's get started with:</p>\n      <a class=\"btn btn-primary btn-lg\" routerLink=\"/company\" role=\"\">Company</a><br>\n      <br>\n      <a class=\"btn btn-primary btn-lg\" routerLink=\"/customer\" role=\"button\">Customer</a>\n    </div>"

/***/ }),

/***/ "./src/app/components/admin-web/admin-web.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin-web/admin-web.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminWebComponent", function() { return AdminWebComponent; });
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

var AdminWebComponent = /** @class */ (function () {
    function AdminWebComponent() {
    }
    AdminWebComponent.prototype.ngOnInit = function () {
    };
    AdminWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-web',
            template: __webpack_require__(/*! ./admin-web.component.html */ "./src/app/components/admin-web/admin-web.component.html"),
            styles: [__webpack_require__(/*! ./admin-web.component.css */ "./src/app/components/admin-web/admin-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminWebComponent);
    return AdminWebComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/companies.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/companies/companies.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/companies/companies.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/companies/companies.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"Get company\">\n    <h5 class=\"card-header\">Get all company's details</h5>\n    <div class=\"card-body\">     \n      <a routerLink='/getallcompanies' class=\"btn btn-primary\">Get all companies</a>\n    </div>\n  </div>\n\n  <div class=\"Create new company\">\n      <h5 class=\"card-header\">Create new company</h5>\n      <div class=\"card-body\">        \n        <a routerLink='/appcreatenewcompany' class=\"btn btn-primary\">Create company</a>\n      </div>\n    </div>\n\n    <div class=\"Update a company's details\">\n        <h5 class=\"card-header\">Update a company's details</h5>\n        <div class=\"card-body\">        \n          <a routerLink=\"/updatecompany\" class=\"btn btn-primary\">Update company</a>\n        </div>\n      </div>\n      <div class=\"Get company by id\">\n          <h5 class=\"card-header\">Get company</h5>\n          <div class=\"card-body\">        \n            <a routerLink='/getcompany' class=\"btn btn-primary\">Get company</a>\n          </div>\n        </div>\n        <div class=\"Delete company and company's coupon\">\n            <h5 class=\"card-header\">Delete company and company's coupon</h5>\n            <div class=\"card-body\">        \n              <a routerLink='/deletecompany' class=\"btn btn-primary\">Delete company</a>\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/components/companies/companies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/companies/companies.component.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
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

var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! ./companies.component.html */ "./src/app/components/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/components/companies/companies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/company.ts":
/*!*************************************************!*\
  !*** ./src/app/components/companies/company.ts ***!
  \*************************************************/
/*! exports provided: company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "company", function() { return company; });
var company = /** @class */ (function () {
    function company(id, name, password, email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
    return company;
}());



/***/ }),

/***/ "./src/app/components/companies/create-new-company/create-new-company.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/companies/create-new-company/create-new-company.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/companies/create-new-company/create-new-company.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/companies/create-new-company/create-new-company.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Create a new company</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blanks rows</span></h4>\n<br>\n  <form>\n  \n    <div class=\"form-group col-md-6\">\n      <label for=\"inputName\">name</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputName\" [(ngModel)]=\"company.name\" name=\"nametxt\">\n    </div>\n    \n    <div class=\"form-group col-md-6\">\n      <label for=\"inputPassword4\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" [(ngModel)]=\"company.password\" name=\"passtxt\">\n    </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"inputEmail4\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"company.email\" name=\"emailtxt\">\n              </div>\n              <br>\n              <br>\n              <br>\n    <button (click)=\"newComp()\" class=\"btn btn-primary\">Create</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/companies/create-new-company/create-new-company.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/companies/create-new-company/create-new-company.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreateNewCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCompanyComponent", function() { return CreateNewCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company */ "./src/app/components/companies/company.ts");
/* harmony import */ var _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/companyServices/company-services.service */ "./src/app/services/companyServices/company-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateNewCompanyComponent = /** @class */ (function () {
    function CreateNewCompanyComponent(_companyservice) {
        this._companyservice = _companyservice;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_1__["company"](0, "", "", "");
    }
    /**
    * @ngdoc method
    * @name newComp()
    * @param company:company
    * @description
    * This method act as transfer station, it gets a company
    *  and apply other method on the service , named "createcompany"
    **/
    CreateNewCompanyComponent.prototype.newComp = function () {
        this._companyservice.createcompany(this.company);
    };
    CreateNewCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateNewCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-company',
            template: __webpack_require__(/*! ./create-new-company.component.html */ "./src/app/components/companies/create-new-company/create-new-company.component.html"),
            styles: [__webpack_require__(/*! ./create-new-company.component.css */ "./src/app/components/companies/create-new-company/create-new-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServicesService"]])
    ], CreateNewCompanyComponent);
    return CreateNewCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/delete-company/delete-company.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/companies/delete-company/delete-company.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/companies/delete-company/delete-company.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/companies/delete-company/delete-company.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Get company's details by ID, and than Delete it.</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n    <br>\n    <form>\n      <div class=\"form-group col-md-6\" >\n        <label for=\"inputName\"><h5>id:</h5></label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyid\" name=\"idnum\" [(ngModel)]=\"company2.id\" id=\"idn\">\n      </div>\n      <div >\n          <!-- *ngIf=\"show\" -->\n          <form >\n              <fieldset *ngIf=\"show\" disabled>\n\n                  <div class=\"form-group col-md-6\" >\n                    <label for=\"disabledTextInput\">name:</label>\n                    <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_companySer.company.name}}\">\n                  </div>\n                  <div class=\"form-group col-md-6\" >\n                      <label for=\"disabledTextInput\">password:</label>\n                      <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_companySer.company.password}}\">\n                    </div>\n                    <div class=\"form-group col-md-6\" >\n                        <label for=\"disabledTextInput\">email:</label>\n                        <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_companySer.company.email}}\">\n                      </div>\n    \n                </fieldset>\n            </form>\n          </div>\n      <br>\n      <br>\n      <button (click)=\"getserv(companyid); show=true;\" class=\"btn btn-primary\">Get!</button>&nbsp;&nbsp;&nbsp;&nbsp;\n      <button (click)=\"_companySer.swalDel(companyid);\" class=\"btn btn-primary\">Delete!</button>\n    </form>\n        <div>\n        \n        </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/companies/delete-company/delete-company.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/companies/delete-company/delete-company.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DeleteCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function() { return DeleteCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/companyServices/company-services.service */ "./src/app/services/companyServices/company-services.service.ts");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company */ "./src/app/components/companies/company.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteCompanyComponent = /** @class */ (function () {
    function DeleteCompanyComponent(_companySer) {
        this._companySer = _companySer;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_2__["company"](0, "", "", "");
        this.company2 = new _company__WEBPACK_IMPORTED_MODULE_2__["company"](0, "", "", "");
    }
    DeleteCompanyComponent.prototype.ngOnInit = function () {
    };
    /**
  * @ngdoc method
  * @name getserv()
  * @param id:number
  * @description
  * This method act as transfer station, it gets an ID
  *  and apply other method on the service , named "getcompany"
  **/
    DeleteCompanyComponent.prototype.getserv = function (id) {
        this._companySer.getCompany(id);
    };
    DeleteCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-company',
            template: __webpack_require__(/*! ./delete-company.component.html */ "./src/app/components/companies/delete-company/delete-company.component.html"),
            styles: [__webpack_require__(/*! ./delete-company.component.css */ "./src/app/components/companies/delete-company/delete-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_1__["CompanyServicesService"]])
    ], DeleteCompanyComponent);
    return DeleteCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/get-all-companies/get-all-companies.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/companies/get-all-companies/get-all-companies.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/companies/get-all-companies/get-all-companies.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/companies/get-all-companies/get-all-companies.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n    <br><br>\n            <div class=\"row\" >\n              <div class=\"col-md-4\" *ngFor='let comp of companies ; let i = index'>\n                  <div class=\"card\" style=\"width: 18rem;\">\n                      <div class=\"card-header\">\n                          Company\n                        </div>\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Name: {{comp.name}}</h5>\n                      </div>\n                      <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\" >Id: {{comp.id}}</li>\n                        <li class=\"list-group-item\">Name: {{comp.name}}</li>\n                        <li class=\"list-group-item\">Email: {{comp.email}}</li>\n                      </ul>\n                      <div class=\"card-body\">\n                        <button (click)=\"gettoupdate(i)\" type=\"button\" class=\"btn btn-link\">Update company</button>\n                          \n                      </div>\n                    </div><br><br><br>\n              </div>\n\n            </div>\n          </div>\n"

/***/ }),

/***/ "./src/app/components/companies/get-all-companies/get-all-companies.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/companies/get-all-companies/get-all-companies.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/companyServices/company-services.service */ "./src/app/services/companyServices/company-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GetAllCompaniesComponent = /** @class */ (function () {
    function GetAllCompaniesComponent(_http, _route, _router, _compserv) {
        var _this = this;
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this._compserv = _compserv;
        this.companies2 = [];
        /**
         * @function http:Http.
         * @description
         * This function fire an "ajax" ("get"-method) over Http protocol.
         * Then by async (Observable) method named "subscribe" catch  the response
         * and put it into local array.
         **/
        this._http.get("http://localhost:8080/admin/getallcompanies").
            subscribe(function (resp) {
            _this.companies = _this.sortbyId(resp.json());
            _this.companies2 = _this.companies;
            console.log(resp);
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
    }
    /**
     * @ngdoc method
     * @name swalwarning()
     * @param err: any
     * @description
     * This is method gets a err: any
     *  and display a specific alert accordingly
     **/
    GetAllCompaniesComponent.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    /**
   * @ngdoc method
   * @name sortbyId
   * @param company:company[] (Array)
   * @return The same array with sorted values
   */
    GetAllCompaniesComponent.prototype.sortbyId = function (companies2) {
        return this.companies2 = companies2.sort(function (a, b) {
            var x = a.id;
            var y = b.id;
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    /**
  * @ngdoc method
  * @name gettoupdate()
  * @param i:number (index)
  * @description
  * This method gets param i:index and put it in local member.
  * navigate to other component and pass the local member value.
  **/
    GetAllCompaniesComponent.prototype.gettoupdate = function (i) {
        var x = this.companies2[i];
        this._router.navigate(["updatecompany", x.id], { relativeTo: this._route });
        this._compserv.companyToUpdate.id = x.id;
    };
    GetAllCompaniesComponent.prototype.ngOnInit = function () {
    };
    GetAllCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-companies',
            template: __webpack_require__(/*! ./get-all-companies.component.html */ "./src/app/components/companies/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/companies/get-all-companies/get-all-companies.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_4__["CompanyServicesService"]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/getcomapny/getcomapny.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/companies/getcomapny/getcomapny.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/companies/getcomapny/getcomapny.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/companies/getcomapny/getcomapny.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Get company's details by ID</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n  <br>\n  <form>\n    <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\"><h5>id:</h5></label>\n      <input type=\"number\" class=\"form-control\" placeholder=\"0\" [(ngModel)]=\"companyid\" name=\"idnum\" required>\n    </div>\n\n    <div *ngIf=\"show\">\n\n        <form>\n            <fieldset *ngIf=\"show\" disabled>\n              <div class=\"form-group col-md-6\" >\n                <label for=\"disabledTextInput\">name:</label>\n                <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_companySer.company.name}}\">\n              </div>\n              <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">password:</label>\n                  <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_companySer.company.password}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                    <label for=\"disabledTextInput\">email:</label>\n                    <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_companySer.company.email}}\">\n                  </div>\n\n            </fieldset>\n          </form>\n        </div>\n    <br>\n    <br>\n    <button (click)=\"_companySer.getCompany(companyid); show=true\" class=\"btn btn-primary\">Get!</button>\n  </form>\n      <div>\n      \n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/companies/getcomapny/getcomapny.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/companies/getcomapny/getcomapny.component.ts ***!
  \*************************************************************************/
/*! exports provided: GetcomapnyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetcomapnyComponent", function() { return GetcomapnyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company */ "./src/app/components/companies/company.ts");
/* harmony import */ var _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/companyServices/company-services.service */ "./src/app/services/companyServices/company-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetcomapnyComponent = /** @class */ (function () {
    function GetcomapnyComponent(_companySer) {
        this._companySer = _companySer;
        // show = false;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_1__["company"](0, "", "", "");
        this.company2 = new _company__WEBPACK_IMPORTED_MODULE_1__["company"](0, "", "", "");
    }
    /**
  * @ngdoc method
  * @name getserv()
  * @param id:number
  * @description
  * This is method act as transfer station, it gets an ID
  *  and apply other method on the service , named "getcompany"
  **/
    GetcomapnyComponent.prototype.getserv = function (id) {
        this._companySer.getCompany(id);
    };
    GetcomapnyComponent.prototype.ngOnInit = function () { };
    GetcomapnyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getcomapny',
            template: __webpack_require__(/*! ./getcomapny.component.html */ "./src/app/components/companies/getcomapny/getcomapny.component.html"),
            styles: [__webpack_require__(/*! ./getcomapny.component.css */ "./src/app/components/companies/getcomapny/getcomapny.component.css")]
        }),
        __metadata("design:paramtypes", [_services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServicesService"]])
    ], GetcomapnyComponent);
    return GetcomapnyComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/update-company/update-company.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/companies/update-company/update-company.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/companies/update-company/update-company.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/companies/update-company/update-company.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Get company's details by ID, and than Update it.</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n    <br>\n    <form>\n      <div class=\"form-group col-md-6\" >\n        <label for=\"inputName\"><h5>id:</h5></label>\n        <input type=\"number\" class=\"form-control\" value=\"{{company.id}}\" [(ngModel)]=\"company.id\" name=\"idnum\" [(ngModel)]=\"_companySer.companyToUpdate.id\" id=\"idn\">\n      </div>\n      <div >\n          <!-- *ngIf=\"show\" -->\n          <form *ngIf=\"show\">\n\n              <fieldset >\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"inputName\">name:</label>\n                  <input type=\"text\" class=\"form-control\" value=\"{{_companySer.company.name}}\" name=\"nametxt\" [(ngModel)]=\"_companySer.companyToUpdate.name\" disabled>\n                </div>\n                <div class=\"form-group col-md-6\" >\n                    <label for=\"inputName\">password:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{_companySer.company.password}}\" name=\"passtxt\" [(ngModel)]=\"_companySer.companyToUpdate.password\">\n                  </div>\n                  <div class=\"form-group col-md-6\" >\n                      <label for=\"inputName\">email:</label>\n                      <input type=\"text\" class=\"form-control\" value=\"{{_companySer.company.email}}\" name=\"emailtxt\" [(ngModel)]=\"_companySer.companyToUpdate.email\">\n                    </div>\n  \n              </fieldset>\n            </form>\n          </div>\n      <br>\n      <br>\n      <button (click)=\"getserv(); show=true;\" class=\"btn btn-primary\">Get!</button>&nbsp;&nbsp;&nbsp;&nbsp;\n      <button *ngIf=\"show\" (click)=\"_companySer.updatecompany();\" class=\"btn btn-primary\">Update!</button>\n    </form>\n        <div>\n        \n        </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/companies/update-company/update-company.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/companies/update-company/update-company.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function() { return UpdateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../company */ "./src/app/components/companies/company.ts");
/* harmony import */ var _services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/companyServices/company-services.service */ "./src/app/services/companyServices/company-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateCompanyComponent = /** @class */ (function () {
    function UpdateCompanyComponent(_companySer, _activatedroute) {
        this._companySer = _companySer;
        this._activatedroute = _activatedroute;
        // show = false;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_1__["company"](0, "", "", "");
        this.id = 0;
        this.show = false;
    }
    /**
     * @ngdoc method
     * @name getserv()
     * @param id:number
     * @description
     * This is method act as transfer station, it gets an ID
     *  and apply other method on the service , named "getcompany"
     **/
    UpdateCompanyComponent.prototype.getserv = function () {
        this._companySer.getCompany(this.company.id);
    };
    UpdateCompanyComponent.prototype.ngOnInit = function () {
        this.id = this._activatedroute.snapshot.params['id'];
        console.log(this.id);
        if (this.id > 0 && this.id != null) {
            this._companySer.getCompany(this.id);
            this.company.id = this.id;
            this.show = true;
            this.id = 0;
        }
    };
    UpdateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-company',
            template: __webpack_require__(/*! ./update-company.component.html */ "./src/app/components/companies/update-company/update-company.component.html"),
            styles: [__webpack_require__(/*! ./update-company.component.css */ "./src/app/components/companies/update-company/update-company.component.css")]
        }),
        __metadata("design:paramtypes", [_services_companyServices_company_services_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdateCompanyComponent);
    return UpdateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/create-new-customer/create-new-customer.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/customers/create-new-customer/create-new-customer.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customers/create-new-customer/create-new-customer.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/customers/create-new-customer/create-new-customer.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Create a new customer</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blanks rows</span></h4>\n<br>\n  <form>\n  \n    <div class=\"form-group col-md-6\">\n      <label for=\"inputName\">name</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputName\" [(ngModel)]=\"customer.name\" name=\"nametxt\">\n    </div>\n    \n    <div class=\"form-group col-md-6\">\n      <label for=\"inputPassword4\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" [(ngModel)]=\"customer.password\" name=\"passtxt\">\n    </div>\n\n              <br>\n              <br>\n              <br>\n    <button (click)=\"newcust()\" class=\"btn btn-primary\">Create</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/customers/create-new-customer/create-new-customer.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/customers/create-new-customer/create-new-customer.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateNewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCustomerComponent", function() { return CreateNewCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/customerServices/customer-services.service */ "./src/app/services/customerServices/customer-services.service.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer */ "./src/app/components/customers/customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateNewCustomerComponent = /** @class */ (function () {
    function CreateNewCustomerComponent(_custsrv) {
        this._custsrv = _custsrv;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_2__["customer"](0, "", "");
    }
    /**
  * @ngdoc method
  * @name newcust()
  * @param customer:customer
  * @description
  * This is method act as transfer station, it gets a customer
  *  and apply other method on the service , named "createcustomer"
  **/
    CreateNewCustomerComponent.prototype.newcust = function () {
        this._custsrv.createcustomer(this.customer);
    };
    CreateNewCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateNewCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-customer',
            template: __webpack_require__(/*! ./create-new-customer.component.html */ "./src/app/components/customers/create-new-customer/create-new-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-new-customer.component.css */ "./src/app/components/customers/create-new-customer/create-new-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_1__["CustomerServicesService"]])
    ], CreateNewCustomerComponent);
    return CreateNewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/customer.ts":
/*!**************************************************!*\
  !*** ./src/app/components/customers/customer.ts ***!
  \**************************************************/
/*! exports provided: customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customer", function() { return customer; });
var customer = /** @class */ (function () {
    function customer(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    return customer;
}());



/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/customers/customers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customers/customers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/customers/customers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"Get all customers\">\n        <h5 class=\"card-header\">Get details of all customers</h5>\n        <div class=\"card-body\">     \n          <a routerLink='/getallcustomers' class=\"btn btn-primary\">Get all customers</a>\n        </div>\n      </div>\n    \n      <div class=\"Create new customer\">\n          <h5 class=\"card-header\">Create new customer</h5>\n          <div class=\"card-body\">        \n            <a routerLink='/createnewcustomer' class=\"btn btn-primary\">Create customer</a>\n          </div>\n        </div>\n    \n        <div class=\"Update a customer's details\">\n            <h5 class=\"card-header\">Update a customer's details</h5>\n            <div class=\"card-body\">        \n              <a routerLink=\"/updatecustomer\" class=\"btn btn-primary\">Update customer</a>\n            </div>\n          </div>\n          <div class=\"Get customer by id\">\n              <h5 class=\"card-header\">Get a customer's details</h5>\n              <div class=\"card-body\">        \n                <a routerLink='/getcustomer' class=\"btn btn-primary\">Get customer</a>\n              </div>\n            </div>\n            <div class=\"Delete customer and his coupons\">\n                <h5 class=\"card-header\">Delete a customer and his coupons</h5>\n                <div class=\"card-body\">        \n                  <a routerLink='/deletecustomer' class=\"btn btn-primary\">Delete customer</a>\n                </div>\n              </div>\n            </div>"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/customers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
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

var CustomersComponent = /** @class */ (function () {
    function CustomersComponent() {
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/delete-customer/delete-customer.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/customers/delete-customer/delete-customer.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customers/delete-customer/delete-customer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/customers/delete-customer/delete-customer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Get customer's details by ID, and than Delete it.</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n    <br>\n    <form>\n      <div class=\"form-group col-md-6\" >\n        <label for=\"inputName\"><h5>id:</h5></label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"customerid\" name=\"idnum\" [(ngModel)]=\"customer2.id\" id=\"idn\">\n      </div>\n      <div >\n          <!-- *ngIf=\"show\" -->\n          <form >\n              <fieldset *ngIf=\"show\" disabled>\n                  <div class=\"form-group col-md-6\" >\n                    <label for=\"disabledTextInput\">name:</label>\n                    <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_custsrv.customer.name}}\">\n                  </div>\n                  <div class=\"form-group col-md-6\" >\n                      <label for=\"disabledTextInput\">password:</label>\n                      <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_custsrv.customer.password}}\">\n                    </div>\n \n    \n                </fieldset>\n            </form>\n          </div>\n      <br>\n      <br>\n      <button (click)=\"_custsrv.getcustomer(customerid); show=true;\" class=\"btn btn-primary\">Get!</button>&nbsp;&nbsp;&nbsp;&nbsp;\n      <button (click)=\"_custsrv.swalDel(customerid);\" class=\"btn btn-primary\">Delete!</button>\n    </form>\n        <div>\n        \n        </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/customers/delete-customer/delete-customer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/customers/delete-customer/delete-customer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DeleteCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function() { return DeleteCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/components/customers/customer.ts");
/* harmony import */ var _services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/customerServices/customer-services.service */ "./src/app/services/customerServices/customer-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteCustomerComponent = /** @class */ (function () {
    function DeleteCustomerComponent(_custsrv) {
        this._custsrv = _custsrv;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["customer"](0, "", "");
        this.customer2 = new _customer__WEBPACK_IMPORTED_MODULE_1__["customer"](0, "", "");
    }
    DeleteCustomerComponent.prototype.ngOnInit = function () {
    };
    DeleteCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-customer',
            template: __webpack_require__(/*! ./delete-customer.component.html */ "./src/app/components/customers/delete-customer/delete-customer.component.html"),
            styles: [__webpack_require__(/*! ./delete-customer.component.css */ "./src/app/components/customers/delete-customer/delete-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_2__["CustomerServicesService"]])
    ], DeleteCustomerComponent);
    return DeleteCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/get-all-customers/get-all-customers.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/customers/get-all-customers/get-all-customers.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customers/get-all-customers/get-all-customers.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/customers/get-all-customers/get-all-customers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \n   \n    <div class=\"container\" >\n      <br><br>\n              <div class=\"row\" >\n                <div class=\"col-md-4\"  *ngFor='let cust of customers '>\n                    <div class=\"card\" style=\"width: 18rem;\">\n                        <div class=\"card-header\">\n                          Customer\n                          </div>\n\n                        <ul class=\"list-group list-group-flush\">\n                          <li class=\"list-group-item\" >Id: {{cust.id}}</li>\n                          <li class=\"list-group-item\">Name: {{cust.name}}</li>\n                        </ul>\n                        <!-- <div class=\"card-body\"> -->\n                          <!-- <a routerLink=\"/updatecustomer\">Update Customer</a> -->\n                            \n                          <!-- <a href=\"#\" class=\"card-link\">Another link</a> -->\n                        <!-- </div> -->\n                      </div><br><br><br>\n                </div>\n  \n              </div>\n            </div>\n  "

/***/ }),

/***/ "./src/app/components/customers/get-all-customers/get-all-customers.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/customers/get-all-customers/get-all-customers.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GetAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function() { return GetAllCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllCustomersComponent = /** @class */ (function () {
    function GetAllCustomersComponent(_http) {
        var _this = this;
        this._http = _http;
        /**
         * @function http:Http.
         * @description
         * This function fire an "ajax" ("get"-method) over Http protocol.
         * Then by async (Observable) method named "subscribe" catch  the response
         * and put it into local array.
         **/
        this._http.get("http://localhost:8080/admin/getallcustomers").
            subscribe(function (resp) {
            _this.customers = resp.json();
            console.log(resp);
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
    }
    /**
  * @ngdoc method
  * @name swalwarning()
  * @param err:any
  * @description
  * This is method gets an error description, and display it on screen as an alert.
  * This method is doing use with "sweetalert2".
  **/
    GetAllCustomersComponent.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    GetAllCustomersComponent.prototype.ngOnInit = function () {
    };
    GetAllCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-customers',
            template: __webpack_require__(/*! ./get-all-customers.component.html */ "./src/app/components/customers/get-all-customers/get-all-customers.component.html"),
            styles: [__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/customers/get-all-customers/get-all-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GetAllCustomersComponent);
    return GetAllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/get-customer/get-customer.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/customers/get-customer/get-customer.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customers/get-customer/get-customer.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/customers/get-customer/get-customer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Get customer's details by ID</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n    <br>\n    <form>\n      <div class=\"form-group col-md-6\" >\n        <label for=\"inputName\"><h5>id:</h5></label>\n        <input type=\"number\" class=\"form-control\" placeholder=\"0\" [(ngModel)]=\"customerid\" name=\"idnum\">\n      </div>\n      <div *ngIf=\"show\">\n          <form>\n              <fieldset *ngIf=\"show\" disabled>\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">name:</label>\n                  <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_custsrv.customer.name}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                    <label for=\"disabledTextInput\">password:</label>\n                    <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_custsrv.customer.password}}\">\n                  </div>\n\n  \n              </fieldset>\n            </form>\n          </div>\n      <br>\n      <br>\n      <button (click)=\"_custsrv.getcustomer(customerid); show=true\" class=\"btn btn-primary\">Get!</button>\n    </form>\n        <div>\n        \n        </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/customers/get-customer/get-customer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/customers/get-customer/get-customer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerComponent", function() { return GetCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/components/customers/customer.ts");
/* harmony import */ var _services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/customerServices/customer-services.service */ "./src/app/services/customerServices/customer-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCustomerComponent = /** @class */ (function () {
    function GetCustomerComponent(_custsrv) {
        this._custsrv = _custsrv;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["customer"](0, "", "");
        this.company2 = new _customer__WEBPACK_IMPORTED_MODULE_1__["customer"](0, "", "");
    }
    GetCustomerComponent.prototype.ngOnInit = function () { };
    GetCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-customer',
            template: __webpack_require__(/*! ./get-customer.component.html */ "./src/app/components/customers/get-customer/get-customer.component.html"),
            styles: [__webpack_require__(/*! ./get-customer.component.css */ "./src/app/components/customers/get-customer/get-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_2__["CustomerServicesService"]])
    ], GetCustomerComponent);
    return GetCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/update-customer/update-customer.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/customers/update-customer/update-customer.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customers/update-customer/update-customer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/customers/update-customer/update-customer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Get customer's details by ID, and than Update it.</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n    <br>\n    <form>\n      <div class=\"form-group col-md-6\" >\n        <label for=\"inputName\"><h5>id:</h5></label>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"customerid\" name=\"idnum\" [(ngModel)]=\"customerToUpdate.id\" id=\"idn\">\n      </div>\n      <div >\n          <!-- *ngIf=\"show\" -->\n          <form *ngIf=\"show\">\n              <fieldset >\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">name:</label>\n                  <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" value=\"{{_custsrv.customer.name}}\" name=\"nametxt\" [(ngModel)]=\"customerToUpdate.name\" disabled>\n                </div>\n                <div class=\"form-group col-md-6\" >\n                    <label for=\"inputName\">password:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{_custsrv.customer.password}}\" name=\"passtxt\" [(ngModel)]=\"customerToUpdate.password\">\n                  </div>\n\n  \n              </fieldset>\n            </form>\n          </div>\n      <br>\n      <br>\n      <button (click)=\"_custsrv.getcustomer(customerid); show=true;\" class=\"btn btn-primary\">Get!</button>&nbsp;&nbsp;&nbsp;&nbsp;\n      <button *ngIf=\"show\" (click)=\"updatecust();\" class=\"btn btn-primary\">Update!</button>\n    </form>\n        <div>\n        \n        </div>\n"

/***/ }),

/***/ "./src/app/components/customers/update-customer/update-customer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/customers/update-customer/update-customer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/components/customers/customer.ts");
/* harmony import */ var _services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/customerServices/customer-services.service */ "./src/app/services/customerServices/customer-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateCustomerComponent = /** @class */ (function () {
    function UpdateCustomerComponent(_custsrv) {
        this._custsrv = _custsrv;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_1__["customer"](0, "", "");
        this.customerToUpdate = new _customer__WEBPACK_IMPORTED_MODULE_1__["customer"](0, "", "");
    }
    /**
  * @ngdoc method
  * @name updatecust()
  * @param customer:customer
  * @description
  * This is method act as transfer station, it gets a customer
  *  and apply other method on the service , named "updatecustomer"
  **/
    UpdateCustomerComponent.prototype.updatecust = function (customer2) {
        this._custsrv.updatecustomer(this.customerToUpdate);
        this.customerToUpdate.name = "";
        this.customerToUpdate.password = '';
    };
    UpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-customer',
            template: __webpack_require__(/*! ./update-customer.component.html */ "./src/app/components/customers/update-customer/update-customer.component.html"),
            styles: [__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/customers/update-customer/update-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customerServices_customer_services_service__WEBPACK_IMPORTED_MODULE_2__["CustomerServicesService"]])
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar navbar-expand-lg navbar-dark bg-dark\">\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"admin\">Admin main <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"company\">company</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"customer\">customer</a>\n          </li>\n      </ul>\n      <li style=\"align-items:right\" >\n        <img  src=\"../images/tempsnip.png\" class=\"rounded float-left\" alt=\"...\" height=\"70px\">\n      </li>\n      <form class=\"form-inline\">\n        <button (click)=\"logout()\" type=\"button\" class=\"btn btn-danger\">Log Out</button>\n      </form>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_router, _http) {
        this._router = _router;
        this._http = _http;
    }
    /**
   * @ngdoc method
   * @name logout()
   * @description
   * This method will display a boolean question to the user.
   * according to the answer this method will invoke an async ("get"-method) method,
   * and redirect the user to the login page or cancel the execution of "logout" process
   **/
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure you want to logout?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(function (result) {
            if (result.value) {
                _this.logoutmethod();
            }
        });
    };
    NavBarComponent.prototype.logoutmethod = function () {
        this._http.get("http://localhost:8080/admin/logout")
            .subscribe(function (resp) {
            window.location.href = 'http://localhost:8080/login.html';
            console.log(resp.json());
        }, function (err) {
            window.location.href = 'http://localhost:8080/login.html';
            console.log(err.json());
        });
    };
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/companyServices/company-services.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/companyServices/company-services.service.ts ***!
  \**********************************************************************/
/*! exports provided: CompanyServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServicesService", function() { return CompanyServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_companies_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/companies/company */ "./src/app/components/companies/company.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyServicesService = /** @class */ (function () {
    function CompanyServicesService(_http) {
        this._http = _http;
        this.company = new _components_companies_company__WEBPACK_IMPORTED_MODULE_2__["company"](0, "", "", "");
        this.companyToUpdate = new _components_companies_company__WEBPACK_IMPORTED_MODULE_2__["company"](0, "", "", "");
    }
    /**
     * @ngdoc method
     * @name initcomp()
     * @description
     * This method initial attributes of company object
    **/
    CompanyServicesService.prototype.initcomp = function () {
        this.company.name = "";
        this.company.password = "";
        this.company.email = "";
        this.companyToUpdate.name = "";
        this.companyToUpdate.password = "";
        this.companyToUpdate.email = "";
    };
    /**
  * @ngdoc Async method
  * @name createcompany()
  * @param company:company
  * @description
  * This method gets an object of company and by fire an "ajax" ("post"-method),
  * sends the object over Http protocol.
  * Then by async (Observable) method named "subscribe" catch  the response.
  **/
    CompanyServicesService.prototype.createcompany = function (company) {
        var _this = this;
        // fire ajax POST
        this._http.post("http://localhost:8080/admin/createcompany", company)
            .subscribe(function (resp) {
            console.log(resp);
            _this.swalDone("Created!", "Company by name: " + company.name + " created!");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcomp();
    };
    /**
  * @ngdoc method
  * @name swalwarning()
  * @param err: any
  * @description
  * This method gets a err: any
  *  and display a specific alert accordingly
  **/
    CompanyServicesService.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    /**
     * @ngdoc Async method
     * @name getCompany()
     * @param id:number
     * @description
     * This method gets ID (number)  and by fire an "ajax" ("get"-method),
     * sends the ID over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response
     * and put it into local object.
     **/
    CompanyServicesService.prototype.getCompany = function (id) {
        var _this = this;
        if (!(id > 0)) {
            this.swalwarning("Wrong ID");
        }
        else {
            this._http.get("http://localhost:8080/admin/getcompany/" + id)
                .subscribe(
            // handle with the returned result
            function (resp) {
                console.log(resp);
                _this.swalDone("", "");
                _this.company = resp.json();
            }, function (err) {
                console.log(err);
                if (err.status == 403) {
                    window.location.href = _this.loginURL;
                }
                else {
                    _this.swalwarning(err._body);
                }
            });
            this.initcomp();
        }
    };
    /**
     * @ngdoc Async method
     * @name updatecompany()
     * @param company:company
     * @description
     * This method gets an object of company object and by fire an "ajax" ("put"-method),
     * sends the object over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response.
     **/
    CompanyServicesService.prototype.updatecompany = function () {
        var _this = this;
        // fire ajax PUT
        this._http.put("http://localhost:8080/admin/updatecompany", this.companyToUpdate).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.swalDone("Updated", "Company " + _this.companyToUpdate.name + " updateded");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcomp();
    };
    /**
     * @ngdoc method
     * @name swalDel()
     * @param id: number
     * @description
     * This method gets a id: number
     *  and display a boolean question to the user.
     * according to the answer this method will invoke a deletecompany() method.
     **/
    CompanyServicesService.prototype.swalDel = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!', 'Your file has been deleted.', 'success');
                _this.deletecompany(id);
            }
        });
    };
    /**
     * @ngdoc Async method
     * @name deletecompany()
     * @param id:number
     * @description
     * This method gets an ID (number) and by fire an "ajax" ("delete"-method),
     * sends the ID over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response.
     **/
    CompanyServicesService.prototype.deletecompany = function (id) {
        var _this = this;
        // fire ajax DELETE
        this._http.delete("http://localhost:8080/admin/removecompany/" + id).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.swalDone("", "");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcomp();
    };
    /**
   * @ngdoc method
   * @name swalDone()
   * @param title: string
   * @param text : string
   * @description
   * This method gets a  title: string & text : string
   *  and dispaly a specific alert accordingly
   **/
    CompanyServicesService.prototype.swalDone = function (title, text) {
        if (title.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'done!',
                text: '',
                animation: false
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: title,
                text: text,
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
            });
        }
    };
    CompanyServicesService.prototype.ngOnInit = function () {
    };
    CompanyServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CompanyServicesService);
    return CompanyServicesService;
}());



/***/ }),

/***/ "./src/app/services/customerServices/customer-services.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/customerServices/customer-services.service.ts ***!
  \************************************************************************/
/*! exports provided: CustomerServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServicesService", function() { return CustomerServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_customers_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customers/customer */ "./src/app/components/customers/customer.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerServicesService = /** @class */ (function () {
    function CustomerServicesService(_http) {
        this._http = _http;
        this.customer = new _components_customers_customer__WEBPACK_IMPORTED_MODULE_2__["customer"];
        this.customerToUpdate = new _components_customers_customer__WEBPACK_IMPORTED_MODULE_2__["customer"];
    }
    /**
   * @ngdoc method
   * @name initcust()
   * @description
   * This method initial attributes of cutsomer object
  **/
    CustomerServicesService.prototype.initcust = function () {
        this.customer.name = "";
        this.customer.password = "";
        this.customerToUpdate.name = "";
        this.customerToUpdate.password = "";
    };
    /**
     * @ngdoc method
     * @name swalwarning()
     * @param err: any
     * @description
     * This method gets a err: any
     *  and display a specific alert accordingly
     **/
    CustomerServicesService.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    /**
     * @ngdoc Async method
     * @name createcustomer()
     * @param company:company
     * @description
     * This method gets an object of customer and by fire an "ajax" ("post"-method),
     * sends the object over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response.
    **/
    CustomerServicesService.prototype.createcustomer = function (customer) {
        var _this = this;
        this._http.post("http://localhost:8080/admin/createcustomer", customer).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.swalDone("Created!", "Company by name: " + customer.name + " created!");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcust();
    };
    /**
   * @ngdoc Async method
   * @name getcustomer()
   * @param id:number
   * @description
   * This method gets ID (number)  and by fire an "ajax" ("get"-method),
   * sends the ID over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response
   * and put it into local object.
   **/
    CustomerServicesService.prototype.getcustomer = function (id) {
        var _this = this;
        if (!(id > 0)) {
            this.swalwarning("Wrong ID");
        }
        else {
            this._http.get("http://localhost:8080/admin/getcustomer/" + id).
                subscribe(
            // handle with the returned result
            function (resp) {
                _this.customer = resp.json();
                // what to do with the result?
                console.log(resp);
                _this.swalDone("", "");
                // fire ajax GET
            }, function (err) {
                console.log(err);
                if (err.status == 403) {
                    window.location.href = _this.loginURL;
                }
                else {
                    _this.swalwarning(err._body);
                }
            });
        }
    };
    /**
   * @ngdoc Async method
   * @name updatecustomer()
   * @param customer:cutomer
   * @description
   * This method gets an object of cutomer object and by fire an "ajax" ("put"-method),
   * sends the object over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   **/
    CustomerServicesService.prototype.updatecustomer = function (customer2) {
        var _this = this;
        // fire ajax PUT
        this._http.put("http://localhost:8080/admin/updatecustomer", customer2).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.swalDone("Updated", "customer " + _this.customerToUpdate.name + " updateded");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcust();
    };
    /**
   * @ngdoc Async method
   * @name deletecustomer()
   * @param id:number
   * @description
   * This method gets an ID (number) and by fire an "ajax" ("delete"-method),
   * sends the ID over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   **/
    CustomerServicesService.prototype.deletecustomer = function (id) {
        var _this = this;
        this._http.delete("http://localhost:8080/admin/removecustomer/" + id).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.swalDone("", "");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcust();
    };
    /**
   * @ngdoc method
   * @name swalDel()
   * @param id: number
   * @description
   * This method gets a id: number
   *  and display a boolean question to the user.
   * according to the answer this method will invoke a deletecustomer() method.
   **/
    CustomerServicesService.prototype.swalDel = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!');
                _this.deletecustomer(id);
            }
        });
    };
    /**
  * @ngdoc method
  * @name swalDone()
  * @param title: string
  * @param text : string
  * @description
  * This method gets a  title: string & text : string
  *  and dispaly a specific alert accordingly
  **/
    CustomerServicesService.prototype.swalDone = function (title, text) {
        if (title.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'done!',
                text: '',
                // imageUrl: 'https://unsplash.it/400/200',
                // imageWidth: 400,
                // imageHeight: 200,
                // imageAlt: 'Custom image',
                animation: false
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: title,
                text: text,
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
            });
        }
    };
    CustomerServicesService.prototype.ngOnInit = function () {
    };
    CustomerServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CustomerServicesService);
    return CustomerServicesService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Angular projects\adminWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map