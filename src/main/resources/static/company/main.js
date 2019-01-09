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
/* harmony import */ var _components_company_web_company_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/company-web/company-web.component */ "./src/app/components/company-web/company-web.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_coupons_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/coupons/create-coupon/create-coupon.component */ "./src/app/components/coupons/create-coupon/create-coupon.component.ts");
/* harmony import */ var _components_coupons_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/coupons/update-coupon/update-coupon.component */ "./src/app/components/coupons/update-coupon/update-coupon.component.ts");
/* harmony import */ var _components_coupons_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/coupons/get-coupon/get-coupon.component */ "./src/app/components/coupons/get-coupon/get-coupon.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/coupons/get-all-coupons/get-all-coupons.component */ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_coupons_remove_coupons_remove_coupons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/coupons/remove-coupons/remove-coupons.component */ "./src/app/components/coupons/remove-coupons/remove-coupons.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component */ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component */ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component */ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '#', redirectTo: 'CompanyWeb', pathMatch: 'full' },
    { path: '', redirectTo: 'CompanyWeb', pathMatch: 'full' },
    { path: 'CompanyWeb', component: _components_company_web_company_web_component__WEBPACK_IMPORTED_MODULE_2__["CompanyWebComponent"] },
    { path: 'Coupons', component: _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_3__["CouponsComponent"] },
    { path: 'CreateCoupon', component: _components_coupons_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_4__["CreateCouponComponent"] },
    { path: 'GetAllCoupons/UpdateCoupon/:id', component: _components_coupons_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCouponComponent"] },
    { path: 'GetAllCoupons/RemoveCoupons/:id', component: _components_coupons_remove_coupons_remove_coupons_component__WEBPACK_IMPORTED_MODULE_8__["RemoveCouponsComponent"] },
    { path: 'GetAllCoupons/GetCoupon/:id', component: _components_coupons_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_6__["GetCouponComponent"] },
    { path: 'UpdateCoupon', component: _components_coupons_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCouponComponent"] },
    { path: 'GetCoupon', component: _components_coupons_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_6__["GetCouponComponent"] },
    { path: 'GetAllCoupons', component: _components_coupons_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_7__["GetAllCouponsComponent"] },
    { path: 'RemoveCoupons', component: _components_coupons_remove_coupons_remove_coupons_component__WEBPACK_IMPORTED_MODULE_8__["RemoveCouponsComponent"] },
    { path: 'GetAllCouponsByType', component: _components_coupons_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_9__["GetAllCouponsByTypeComponent"] },
    { path: 'GetAllCouponsByPrice', component: _components_coupons_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_10__["GetAllCouponsByPriceComponent"] },
    { path: 'GetAllCouponsByDate', component: _components_coupons_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_11__["GetAllCouponsByDateComponent"] },
    { path: '**', redirectTo: 'CompanyWeb', pathMatch: 'full' },
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

module.exports = "<app-nav-bar></app-nav-bar>\n<app-button-bar></app-button-bar>\n<router-outlet></router-outlet>"

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
        this.title = 'companyWeb';
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_company_web_company_web_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/company-web/company-web.component */ "./src/app/components/company-web/company-web.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_coupons_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/coupons/create-coupon/create-coupon.component */ "./src/app/components/coupons/create-coupon/create-coupon.component.ts");
/* harmony import */ var _components_coupons_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/coupons/update-coupon/update-coupon.component */ "./src/app/components/coupons/update-coupon/update-coupon.component.ts");
/* harmony import */ var _components_coupons_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coupons/get-coupon/get-coupon.component */ "./src/app/components/coupons/get-coupon/get-coupon.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/coupons/get-all-coupons/get-all-coupons.component */ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_coupons_remove_coupons_remove_coupons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/coupons/remove-coupons/remove-coupons.component */ "./src/app/components/coupons/remove-coupons/remove-coupons.component.ts");
/* harmony import */ var _components_button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/button-bar/button-bar.component */ "./src/app/components/button-bar/button-bar.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component */ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component */ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.ts");
/* harmony import */ var _components_coupons_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component */ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.ts");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_company_web_company_web_component__WEBPACK_IMPORTED_MODULE_7__["CompanyWebComponent"],
                _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_8__["CouponsComponent"],
                _components_coupons_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__["CreateCouponComponent"],
                _components_coupons_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_10__["UpdateCouponComponent"],
                _components_coupons_get_coupon_get_coupon_component__WEBPACK_IMPORTED_MODULE_11__["GetCouponComponent"],
                _components_coupons_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__["GetAllCouponsComponent"],
                _components_coupons_remove_coupons_remove_coupons_component__WEBPACK_IMPORTED_MODULE_13__["RemoveCouponsComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _components_button_bar_button_bar_component__WEBPACK_IMPORTED_MODULE_14__["ButtonBarComponent"],
                _components_coupons_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_15__["GetAllCouponsByTypeComponent"],
                _components_coupons_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_16__["GetAllCouponsByPriceComponent"],
                _components_coupons_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_17__["GetAllCouponsByDateComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_18__["CouponsMethodsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/button-bar/button-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/button-bar/button-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/button-bar/button-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/button-bar/button-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class= \"sticky-top p-3 mb-2 bg-white text-dark\">\n<ul class=\"nav nav-tabs nav justify-content-center\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" routerLink=\"GetCoupon\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Get coupon</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" routerLink=\"CreateCoupon\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Create coupon</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"UpdateCoupon\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Update coupon</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" routerLink=\"RemoveCoupons\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Delete coupon</a>\n  </li>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Get coupons</a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" routerLink=\"GetAllCouponsByType\">By type</a>\n      <a class=\"dropdown-item\" routerLink=\"GetAllCouponsByPrice\">By price</a>\n      <a class=\"dropdown-item\" routerLink=\"GetAllCouponsByDate\">By date</a>\n      <div class=\"dropdown-divider\"></div>\n      <a class=\"dropdown-item\" routerLink=\"GetAllCoupons\">All coupons</a>\n    </div>\n  </li>\n</ul>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/button-bar/button-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/button-bar/button-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBarComponent", function() { return ButtonBarComponent; });
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

var ButtonBarComponent = /** @class */ (function () {
    function ButtonBarComponent() {
    }
    ButtonBarComponent.prototype.ngOnInit = function () {
    };
    ButtonBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button-bar',
            template: __webpack_require__(/*! ./button-bar.component.html */ "./src/app/components/button-bar/button-bar.component.html"),
            styles: [__webpack_require__(/*! ./button-bar.component.css */ "./src/app/components/button-bar/button-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonBarComponent);
    return ButtonBarComponent;
}());



/***/ }),

/***/ "./src/app/components/company-web/company-web.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/company-web/company-web.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company-web/company-web.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/company-web/company-web.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, Company!</h1>\n  <p class=\"lead\">This is the wellcome page, in the next page you can choose between many features to manage your coupons.</p>\n  <hr class=\"my-4\">\n  <p>You have all the permissions, let's get started with:</p>\n  <a class=\"btn btn-primary btn-lg\" routerLink=\"../Coupons\" role=\"\">next</a><br>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/company-web/company-web.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/company-web/company-web.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompanyWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyWebComponent", function() { return CompanyWebComponent; });
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

var CompanyWebComponent = /** @class */ (function () {
    function CompanyWebComponent() {
    }
    CompanyWebComponent.prototype.ngOnInit = function () {
    };
    CompanyWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-web',
            template: __webpack_require__(/*! ./company-web.component.html */ "./src/app/components/company-web/company-web.component.html"),
            styles: [__webpack_require__(/*! ./company-web.component.css */ "./src/app/components/company-web/company-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyWebComponent);
    return CompanyWebComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/coupon.ts":
/*!**********************************************!*\
  !*** ./src/app/components/coupons/coupon.ts ***!
  \**********************************************/
/*! exports provided: coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coupon", function() { return coupon; });
var coupon = /** @class */ (function () {
    function coupon(id, title, start_date, end_date, amount, type, massage, price, image) {
        this.id = id;
        this.title = title;
        this.start_date = start_date;
        this.end_date = end_date;
        this.amount = amount;
        this.type = type;
        this.massage = massage;
        this.price = price;
        this.image = image;
    }
    return coupon;
}());



/***/ }),

/***/ "./src/app/components/coupons/coupons.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/coupons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"Get company\">\n        <h5 class=\"card-header\">Get all coupons details</h5>\n        <div class=\"card-body\">     \n          <a routerLink='/GetAllCoupons' class=\"btn btn-primary\">Get all coupons</a>\n        </div>\n      </div>\n    \n      <div class=\"Create new company\">\n          <h5 class=\"card-header\">Create new coupon</h5>\n          <div class=\"card-body\">        \n            <a routerLink='/CreateCoupon' class=\"btn btn-primary\">Create coupon</a>\n          </div>\n        </div>\n    \n        <div class=\"Update a company's details\">\n            <h5 class=\"card-header\">Update a coupon's details</h5>\n            <div class=\"card-body\">        \n              <a routerLink=\"/UpdateCoupon\" class=\"btn btn-primary\">Update coupon</a>\n            </div>\n          </div>\n          <div class=\"Get company by id\">\n              <h5 class=\"card-header\">Get coupon</h5>\n              <div class=\"card-body\">        \n                <a routerLink='/GetCoupon' class=\"btn btn-primary\">Get coupon</a>\n              </div>\n            </div>\n            <div class=\"Delete company and company's coupon\">\n                <h5 class=\"card-header\">Delete coupon </h5>\n                <div class=\"card-body\">        \n                  <a routerLink='/RemoveCoupons' class=\"btn btn-primary\">Delete coupon</a>\n                </div>\n              </div>\n            </div>"

/***/ }),

/***/ "./src/app/components/coupons/coupons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.ts ***!
  \*********************************************************/
/*! exports provided: CouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsComponent", function() { return CouponsComponent; });
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

var CouponsComponent = /** @class */ (function () {
    function CouponsComponent() {
    }
    CouponsComponent.prototype.ngOnInit = function () {
    };
    CouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupons',
            template: __webpack_require__(/*! ./coupons.component.html */ "./src/app/components/coupons/coupons.component.html"),
            styles: [__webpack_require__(/*! ./coupons.component.css */ "./src/app/components/coupons/coupons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CouponsComponent);
    return CouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/create-coupon/create-coupon.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/coupons/create-coupon/create-coupon.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/create-coupon/create-coupon.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/coupons/create-coupon/create-coupon.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Create a new coupon</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please fill in the blanks rows</span></h4>\n<br>\n<form>\n\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputName\">Title</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputName\" [(ngModel)]=\"coupon.title\" name=\"titletxt\">\n  </div>\n  \n  <div class=\"form-group col-md-6\">\n    <label for=\"inputPassword4\">Start date</label>\n    <input type=\"date\" class=\"form-control\" id=\"inputPassword4\" [(ngModel)]=\"coupon.start_date\" name=\"start_datetxt\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputEmail4\">End date</label>\n    <input type=\"date\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"coupon.end_date\" name=\"end_datetxt\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputEmail4\">Amount</label>\n    <input type=\"number\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"coupon.amount\" name=\"amounttxt\">\n  </div>\n  <div class=\"form-group col-md-6\">    \n      <label for=\"inputName\">Type:</label>  \n    <select id=\"inputState\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"coupon.type\" name=\"idnum\">\n      <option>food</option>\n      <option>electricity</option>\n      <option>hobby</option>\n      <option>vacation</option>\n    </select>\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputEmail4\">Massage</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"coupon.massage\" name=\"massagetxt\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputEmail4\">Price</label>\n    <input type=\"number\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"coupon.price\" name=\"pricetxt\">\n  </div>\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputEmail4\">Image</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputEmail4\" [(ngModel)]=\"coupon.image\" name=\"imagetxt\">\n  </div>\n            <br>\n            <br>\n  <button (click)=\"newcoup()\" class=\"btn btn-primary\">Create</button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/create-coupon/create-coupon.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coupons/create-coupon/create-coupon.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponComponent", function() { return CreateCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coupon */ "./src/app/components/coupons/coupon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCouponComponent = /** @class */ (function () {
    function CreateCouponComponent(_coupserv) {
        this._coupserv = _coupserv;
        this.coupon = new _coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, "", "", 0, "");
    }
    CreateCouponComponent.prototype.ngOnInit = function () {
    };
    CreateCouponComponent.prototype.newcoup = function (coupon) {
        this._coupserv.createcoupon(this.coupon);
    };
    CreateCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-coupon',
            template: __webpack_require__(/*! ./create-coupon.component.html */ "./src/app/components/coupons/create-coupon/create-coupon.component.html"),
            styles: [__webpack_require__(/*! ./create-coupon.component.css */ "./src/app/components/coupons/create-coupon/create-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], CreateCouponComponent);
    return CreateCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> <span class=\"badge badge-secondary\">Get coupons by date</span></h1>\n    <br>\n    <br>\n    <br>\n    <h4> <span class=\"badge badge-secondary\">Please choose the latest date you prefer and press \"Get!\"</span></h4>\n    <br>\n    <form>\n      <div class=\"form-group col-md-6\" >\n        <label for=\"inputName\"><h5>Date: </h5></label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"coupdate\" name=\"idnum\">\n      </div>\n        \n      \n        <br>\n        <br>\n        <div>\n        <button (click)=\"_coupserv.getcouponsbydate(coupdate); show=true\" class=\"btn btn-primary\">Get!</button>\n        </div>\n        \n        </form>\n        <div class=\"container\" *ngIf=\"show\" >\n    \n              <div class=\"row\" >\n                <div class=\"col-md-4\" *ngFor=\"let coup of _coupserv.coupons\">\n                    <div class=\"card\" style=\"width: 18rem;\">\n                        <img class=\"card-img-top\" src=\"{{coup.image}}\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">Title: {{coup.title}}</h5>\n                        </div>\n                        <ul class=\"list-group list-group-flush\">\n                          <li class=\"list-group-item\" >Id: {{coup.id}}</li>\n                          <li class=\"list-group-item\">Amount: {{coup.amount}}</li>\n                          <li class=\"list-group-item\">End datend: {{coup.end_date}}</li>\n                        </ul>\n                        <div class=\"card-body\">\n                        </div>\n                      </div>\n                </div>\n  \n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GetAllCouponsByDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsByDateComponent", function() { return GetAllCouponsByDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAllCouponsByDateComponent = /** @class */ (function () {
    function GetAllCouponsByDateComponent(_coupserv) {
        this._coupserv = _coupserv;
    }
    GetAllCouponsByDateComponent.prototype.ngOnInit = function () {
    };
    GetAllCouponsByDateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons-by-date',
            template: __webpack_require__(/*! ./get-all-coupons-by-date.component.html */ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons-by-date.component.css */ "./src/app/components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], GetAllCouponsByDateComponent);
    return GetAllCouponsByDateComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Get coupons by price</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please choose one of the category and press \"Get!\"</span></h4>\n  <br>\n  <form>\n    <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\"><h5>Price: </h5></label>\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"coupprice\" name=\"idnum\">\n    </div>\n      \n    \n      <br>\n      <br>\n      <div>\n      <button (click)=\"_coupserv.getcouponsbyprice(coupprice); show=true\" class=\"btn btn-primary\">Get!</button>\n      </div>\n      \n      </form>\n      <div class=\"container\" *ngIf=\"show\" >\n  \n            <div class=\"row\" >\n              <div class=\"col-md-4\" *ngFor=\"let coup of _coupserv.coupons\">\n                  <div class=\"card\" style=\"width: 18rem;\">\n                      <img class=\"card-img-top\" src=\"{{coup.image}}\" alt=\"Card image cap\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title: {{coup.title}}</h5>\n                      </div>\n                      <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\" >Id: {{coup.id}}</li>\n                        <li class=\"list-group-item\">Amount: {{coup.amount}}</li>\n                        <li class=\"list-group-item\">End datend: {{coup.end_date}}</li>\n                      </ul>\n                      <div class=\"card-body\">\n                          \n                        <!-- <a href=\"#\" class=\"card-link\">Another link</a> -->\n                      </div>\n                    </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n    \n \n  \n\n"

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: GetAllCouponsByPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsByPriceComponent", function() { return GetAllCouponsByPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAllCouponsByPriceComponent = /** @class */ (function () {
    function GetAllCouponsByPriceComponent(_coupserv) {
        this._coupserv = _coupserv;
    }
    GetAllCouponsByPriceComponent.prototype.ngOnInit = function () {
    };
    GetAllCouponsByPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons-by-price',
            template: __webpack_require__(/*! ./get-all-coupons-by-price.component.html */ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons-by-price.component.css */ "./src/app/components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], GetAllCouponsByPriceComponent);
    return GetAllCouponsByPriceComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Get coupons by category</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please choose one of the category and press \"Get!\"</span></h4>\n  <br>\n  <form>\n    <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\"><h5>Type:</h5></label>\n      <div class=\"form-group col-md-4\">      \n        <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"coupon.type\" name=\"idnum\">\n          <option>food</option>\n          <option>electricity</option>\n          <option>hobby</option>\n          <option>vacation</option>\n        </select>\n      </div>\n    </div>\n      <br>\n      <br>\n      <div>\n      <button (click)=\"getallcoupbytype(); show=true\" class=\"btn btn-primary\">Get!</button>\n      </div>\n      \n      </form>\n      <div class=\"container\" *ngIf=\"show\" >\n  \n            <div class=\"row\" >\n              <div class=\"col-md-4\" *ngFor=\"let coup of _coupserv.coupons\">\n                  <div class=\"card\" style=\"width: 18rem;\">\n                      <img class=\"card-img-top\" src=\"{{coup.image}}\" alt=\"Card image cap\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title\">Title: {{coup.title}}</h5>\n                      </div>\n                      <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\" >Id: {{coup.id}}</li>\n                        <li class=\"list-group-item\">Amount: {{coup.amount}}</li>\n                        <li class=\"list-group-item\">End datend: {{coup.end_date}}</li>\n                      </ul>\n                      <div class=\"card-body\">\n                          \n                      </div>\n                    </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n    \n \n  \n\n"

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GetAllCouponsByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsByTypeComponent", function() { return GetAllCouponsByTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coupon */ "./src/app/components/coupons/coupon.ts");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetAllCouponsByTypeComponent = /** @class */ (function () {
    function GetAllCouponsByTypeComponent(_coupserv) {
        this._coupserv = _coupserv;
        this.coupon = new _coupon__WEBPACK_IMPORTED_MODULE_1__["coupon"](0, "", "", "", 0, 0, "", 0, "");
    }
    /**
  * @ngdoc method
  * @name newComp()
  * @description
  * This method act as transfer station
  *  and apply other method on the service , named "getcouponsbytype"
  **/
    GetAllCouponsByTypeComponent.prototype.getallcoupbytype = function () {
        this._coupserv.getcouponsbytype(this.coupon.type);
        this.coupons = this._coupserv.coupons;
    };
    GetAllCouponsByTypeComponent.prototype.ngOnInit = function () {
        var show = false;
    };
    GetAllCouponsByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons-by-type',
            template: __webpack_require__(/*! ./get-all-coupons-by-type.component.html */ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons-by-type.component.css */ "./src/app/components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__["CouponsMethodsService"]])
    ], GetAllCouponsByTypeComponent);
    return GetAllCouponsByTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons/get-all-coupons.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons/get-all-coupons.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let coup of coupons ; let i = index\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"{{coup.image}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Title: {{coup.title}}</h5>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">Id: {{coup.id}}</li>\n          <li class=\"list-group-item\">Amount: {{coup.amount}}</li>\n          <li class=\"list-group-item\">End datend: {{coup.end_date}}</li>\n        </ul>\n        <div class=\"card-body\">\n          <button (click)=\"gettoupdate(i)\" type=\"button\" class=\"btn btn-link\">Update coupon</button>\n          <button (click)=\"gettoremove(i)\" type=\"button\" class=\"btn btn-link\">Remove coupon</button>\n\n\n        </div>\n      </div>\n      <br> <br>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/coupons/get-all-coupons/get-all-coupons.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GetAllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsComponent", function() { return GetAllCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Router } from '@angular/router/src/router';
var GetAllCouponsComponent = /** @class */ (function () {
    function GetAllCouponsComponent(_http, _coupser, _router, _route) {
        var _this = this;
        this._http = _http;
        this._coupser = _coupser;
        this._router = _router;
        this._route = _route;
        this.coupons2 = [];
        /**
         * @function http:Http.
         * @description
         * This function fire an "ajax" ("get"-method) over Http protocol.
         * Then by async (Observable) method named "subscribe" catch  the response
         * and put it into local array.
         **/
        this._http.get("http://localhost:8080/company/getallcoupons").
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.coupons = _this.sortbytitle(resp.json());
            _this.coupons2 = _this.coupons;
            // what to do with the result?
            console.log(resp),
                function (err) {
                    console.log(err);
                    if (err.status == 403) {
                        window.location.href = _this.loginURL;
                    }
                    else {
                        _this.swalwarning(err._body);
                    }
                };
            // fire ajax GET
        });
    }
    /**
   * @ngdoc method
   * @name swalwarning()
   * @param err: any
   * @description
   * This method gets a err: any
   *  and display a specific alert accordingly
   **/
    GetAllCouponsComponent.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
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
    GetAllCouponsComponent.prototype.gettoupdate = function (i) {
        var x = this.coupons2[i];
        this._router.navigate(["UpdateCoupon", x.id], { relativeTo: this._route });
    };
    /**
  * @ngdoc method
  * @name gettogetcoup()
  * @param i:number (index)
  * @description
  * This method gets param i:index and put it in local member.
  * navigate to other component and pass the local member value.
  **/
    GetAllCouponsComponent.prototype.gettogetcoup = function (i) {
        var x = this.coupons2[i];
        this._router.navigate(["GetCoupon", x.id], { relativeTo: this._route });
    };
    /**
  * @ngdoc method
  * @name gettoremove()
  * @param i:number (index)
  * @description
  * This method gets param i:index and put it in local member.
  * navigate to other component and pass the local member value.
  **/
    GetAllCouponsComponent.prototype.gettoremove = function (i) {
        var x = this.coupons2[i];
        this._router.navigate(["RemoveCoupons", x.id], { relativeTo: this._route });
    };
    /**
  * @ngdoc method
  * @name sortbytitle
  * @param coupons:coupons[] (Array)
  * @return The same array with sorted values
  */
    GetAllCouponsComponent.prototype.sortbytitle = function (coupons) {
        return this.coupons = coupons.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    };
    GetAllCouponsComponent.prototype.ngOnInit = function () {
    };
    GetAllCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons',
            template: __webpack_require__(/*! ./get-all-coupons.component.html */ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons.component.css */ "./src/app/components/coupons/get-all-coupons/get-all-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__["CouponsMethodsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GetAllCouponsComponent);
    return GetAllCouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/get-coupon/get-coupon.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/coupons/get-coupon/get-coupon.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/get-coupon/get-coupon.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/coupons/get-coupon/get-coupon.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Get coupon's details by ID</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n  <br>\n  <form>\n    <div class=\"form-group col-md-6\">\n      <label for=\"inputName\">\n        <h5>id:</h5>\n      </label>\n      <input type=\"number\" class=\"form-control\" value=\"55\" [(ngModel)]=\"couponid\" name=\"idnum\" [(ngModel)]=\"coupon2.id\"\n        placeholder=\"{{coupon.id}}\">\n    </div>\n    <div *ngIf=\"show\">\n      <form>\n        <div>\n        </div>\n        <fieldset *ngIf=\"show\" disabled>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Title:</label>\n            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.title}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Start date:</label>\n            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.start_date}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">End date:</label>\n            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.end_date}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Amount:</label>\n            <input type=\"number\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.amount}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Type:</label>\n            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.type}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Massage:</label>\n            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.massage}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Price:</label>\n            <input type=\"number\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.price}}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"disabledTextInput\">Image:</label>\n            <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.image}}\">\n            <div *ngIf=\"_coupserv.coupon.image.length > 0\">\n                <img src=\"{{_coupserv.coupon.image}}\" alt=\"Responsive image\" class=\"img-thumbnail\">\n              </div>\n          </div>\n\n\n        </fieldset>\n      </form>\n    </div>\n    <br>\n    <br>\n    <!-- <button (click)=\"getcoup(); show=true\" class=\"btn btn-primary\">Get!</button> -->\n    <button (click)=\" show=true; _coupserv.getcoupon1(couponid)\" class=\"btn btn-primary\">Get!</button>\n  </form>\n  <div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/get-coupon/get-coupon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/coupons/get-coupon/get-coupon.component.ts ***!
  \***********************************************************************/
/*! exports provided: GetCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponComponent", function() { return GetCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coupon */ "./src/app/components/coupons/coupon.ts");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCouponComponent = /** @class */ (function () {
    function GetCouponComponent(_coupserv) {
        this._coupserv = _coupserv;
        this.coupon = new _coupon__WEBPACK_IMPORTED_MODULE_1__["coupon"](0, "", "", "", 0, "", "", 0, "");
    }
    GetCouponComponent.prototype.ngOnInit = function () { };
    GetCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-coupon',
            template: __webpack_require__(/*! ./get-coupon.component.html */ "./src/app/components/coupons/get-coupon/get-coupon.component.html"),
            styles: [__webpack_require__(/*! ./get-coupon.component.css */ "./src/app/components/coupons/get-coupon/get-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__["CouponsMethodsService"]])
    ], GetCouponComponent);
    return GetCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/remove-coupons/remove-coupons.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/coupons/remove-coupons/remove-coupons.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/remove-coupons/remove-coupons.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/coupons/remove-coupons/remove-coupons.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Get coupon's details by ID, and than Delete it.</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n  <br>\n  <form>\n    <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\"><h5>Id:</h5></label>\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"coupon.id\" name=\"idnum\" [(ngModel)]=\"coupon2.id\" id=\"idn\">\n    </div>\n    <div >\n        <!-- *ngIf=\"show\" -->\n        <form >\n          <fieldset *ngIf=\"show\" disabled>\n            <div class=\"form-group col-md-6\" >\n              <label for=\"disabledTextInput\">Title:</label>\n              <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.title}}\">\n            </div>\n            <div class=\"form-group col-md-6\" >\n                <label for=\"disabledTextInput\">Start date:</label>\n                <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.start_date}}\">\n              </div>\n              <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">End date:</label>\n                  <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.end_date}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">Amount:</label>\n                  <input type=\"number\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.amount}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">Type:</label>\n                  <input type=\"any\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.type}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">Massage:</label>\n                  <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.massage}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">Price:</label>\n                  <input type=\"number\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.price}}\">\n                </div>\n                <div class=\"form-group col-md-6\" >\n                  <label for=\"disabledTextInput\">Image:</label>\n                  <input type=\"text\" id=\"disabledTextInput\" class=\"form-control\" placeholder=\"{{_coupserv.coupon.image}}\">\n                  <img src=\"{{_coupserv.coupon.image}}\" alt=\"Responsive image\" class=\"img-thumbnail\">\n                </div>\n                \n\n          </fieldset>\n          </form>\n        </div>\n    <br>\n    <br>\n    <button (click)=\"getcoup(); show=true;\" class=\"btn btn-primary\">Get!</button>&nbsp;&nbsp;&nbsp;&nbsp;\n    <button (click)=\"delcomp();\" class=\"btn btn-primary\">Delete!</button>\n  </form>\n      <div>\n      \n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/remove-coupons/remove-coupons.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/coupons/remove-coupons/remove-coupons.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RemoveCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCouponsComponent", function() { return RemoveCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coupon */ "./src/app/components/coupons/coupon.ts");
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




var RemoveCouponsComponent = /** @class */ (function () {
    function RemoveCouponsComponent(_coupserv, _activatedroute) {
        this._coupserv = _coupserv;
        this._activatedroute = _activatedroute;
        this.coupon = new _coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, 0, "", 0, "");
        this.coupon2 = new _coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, 0, "", 0, "");
        this.show = false;
    }
    /**
  * @ngdoc method
  * @name getcoup()
  * @description
  * This method act as transfer station
  *  and apply other method on the service , named "getcoupon1"
  **/
    RemoveCouponsComponent.prototype.getcoup = function () {
        this._coupserv.getcoupon1(this.coupon.id);
    };
    RemoveCouponsComponent.prototype.getcoupfake = function () {
        this._coupserv.getcoupon1(this.coupon.id);
    };
    /**
  * @ngdoc method
  * @name delcomp()
  * @description
  * This method act as transfer station
  *  and apply other method on the service , named "swalDel"
  **/
    RemoveCouponsComponent.prototype.delcomp = function () {
        this._coupserv.swalDel(this.coupon2.id);
    };
    RemoveCouponsComponent.prototype.ngOnInit = function () {
        this.id = this._activatedroute.snapshot.params['id'];
        if (this.id > 0 && this.id != null && this.id != undefined) {
            console.log(this.id);
            this._coupserv.getcoupon1(this.id);
            this.coupon.id = this.id;
            this.show = true;
            this.coupon2.id = this.id;
        }
    };
    RemoveCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-coupons',
            template: __webpack_require__(/*! ./remove-coupons.component.html */ "./src/app/components/coupons/remove-coupons/remove-coupons.component.html"),
            styles: [__webpack_require__(/*! ./remove-coupons.component.css */ "./src/app/components/coupons/remove-coupons/remove-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RemoveCouponsComponent);
    return RemoveCouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/update-coupon/update-coupon.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/coupons/update-coupon/update-coupon.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/update-coupon/update-coupon.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/coupons/update-coupon/update-coupon.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1> <span class=\"badge badge-secondary\">Get coupon's details by ID, and than Update it.</span></h1>\n  <br>\n  <br>\n  <br>\n  <h4> <span class=\"badge badge-secondary\">Please fill in the blank row</span></h4>\n  <br>\n  <form>\n    <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\"><h5>Id:</h5></label>\n      <input type=\"number\" class=\"form-control\"   name=\"idnum\" [(ngModel)]=\"coupon2.id\" id=\"idn\">\n    </div>\n    <div >\n        <!-- *ngIf=\"show\" -->\n        <form *ngIf=\"show\">\n            <fieldset >\n      <div class=\"form-group col-md-6\" >\n         <label for=\"inputName\">Title:</label>\n         <input type=\"text\" class=\"form-control\"  name=\"titletxt\" [(ngModel)]=\"coupon2.title\" disabled>\n      </div>\n      <div class=\"form-group col-md-6\" >\n         <label for=\"inputName\">Start_date:</label>\n         <input type=\"date\" class=\"form-control\"  name=\"start_datetxt\" [(ngModel)]=\"coupon2.start_date\" disabled>\n      </div>\n      <div class=\"form-group col-md-6\" >\n         <label for=\"inputName\">End_date:</label>\n         <input type=\"date\" class=\"form-control\"  name=\"end_datetxt\" [(ngModel)]=\"coupon2.end_date\">\n     </div>\n     <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\">Amount:</label>\n      <input type=\"number\" class=\"form-control\"  name=\"amounttxt\" [(ngModel)]=\"coupon2.amount\" disabled>\n     </div>\n     <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\">Type:</label>\n      <input type=\"any\" class=\"form-control\"  name=\"typetxt\" [(ngModel)]=\"coupon2.type\" disabled>\n     </div>\n     <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\">Massage:</label>\n      <input type=\"text\" class=\"form-control\"  name=\"massagetxt\" [(ngModel)]=\"coupon2.massage\" disabled>\n     </div>\n     <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\">Price:</label>\n      <input type=\"number\" class=\"form-control\"  name=\"pricetxt\" [(ngModel)]=\"coupon2.price\" >\n     </div>\n     <div class=\"form-group col-md-6\" >\n      <label for=\"inputName\">Image:</label>\n      <input type=\"text\" class=\"form-control\"  name=\"imagetxt\" [(ngModel)]=\"coupon2.image\" disabled>\n      <div *ngIf=\"_coupserv.coupon.image.length > 0\">\n        <img src=\"{{_coupserv.coupon.image}}\" alt=\"Responsive image\" class=\"img-thumbnail\">\n      </div>\n    </div>\n\n\n            </fieldset>\n          </form>\n        </div>\n    <br>\n    <br>\n    <button (click)=\"getcoup(); show=true;\" class=\"btn btn-primary\">Get!</button>&nbsp;&nbsp;&nbsp;&nbsp;\n    <button *ngIf=\"show\" (click)=\"updatecoup();\" class=\"btn btn-primary\">Update!</button>\n  </form>\n      <div>\n      \n      </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/update-coupon/update-coupon.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coupons/update-coupon/update-coupon.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCouponComponent", function() { return UpdateCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coupon */ "./src/app/components/coupons/coupon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateCouponComponent = /** @class */ (function () {
    function UpdateCouponComponent(_coupserv, _activatedroute, _http) {
        this._coupserv = _coupserv;
        this._activatedroute = _activatedroute;
        this._http = _http;
        this.coupon = new _coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, 0, "", 0, "");
        this.coupon2 = new _coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, 0, "", 0, "");
        this.show = false;
    }
    /**
   * @ngdoc method
   * @name swalwarning()
   * @param err: any
   * @description
   * This is method gets a err: any
   *  and display a specific alert accordingly
   **/
    UpdateCouponComponent.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    /**
  * @ngdoc method
  * @name swalDone()
  * @param title: string
  * @param text : string
  * @description
  * This is method gets a  title: string & text : string
  *  and dispaly a specific alert accordingly
  **/
    UpdateCouponComponent.prototype.swalDone = function (title, text) {
        if (title.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: 'done!',
                text: '',
                animation: false
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
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
    /**
  * @ngdoc Async method
  * @name getcoupon()
  * @param id:number
  * @description
  * This is method gets ID (number)  and by fire an "ajax" ("get"-method),
  * sends the ID over Http protocol.
  * Then by async (Observable) method named "subscribe" catch  the response
  * and put it into local object.
  **/
    UpdateCouponComponent.prototype.getcoupon = function (id) {
        var _this = this;
        if (!(this.coupon2.id > 0)) {
            this.swalwarning("Wrong ID");
            this._http.get("http://localhost:8080/company/getcoupon/" + id).
                subscribe(
            // handle with the returned result
            function (resp) {
                _this.swalDone("", "");
                _this.coupon2 = resp.json();
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
        this.initcoup();
    };
    /**
   * @ngdoc method
   * @name initcoup()
   * @description
   * This method initial attributes of coupon object
  **/
    UpdateCouponComponent.prototype.initcoup = function () {
        this.coupon2.id = 0;
        this.coupon2.title = '';
        this.coupon2.start_date = '';
        this.coupon2.end_date = '';
        this.coupon2.amount = 0;
        this.coupon2.massage = '';
        this.coupon2.price = 0;
        this.coupon2.image = '';
        this.coupon2.type = 0;
    };
    /**
     * @ngdoc method
     * @name updatecoup()
     * @param coupon:coupon
     * @description
     * This is method act as transfer station, it gets a coupon
     *  and apply other method on the service , named "updatecoupon"
     **/
    UpdateCouponComponent.prototype.updatecoup = function (coupon2) {
        this._coupserv.updatecoupon(this.coupon2);
    };
    UpdateCouponComponent.prototype.ngOnInit = function () {
        this.id = this._activatedroute.snapshot.params['id'];
        console.log(this.id);
        if (this.id > 0 && this.id != null) {
            this.getcoupon(this.id);
            this.coupon2.id = this.id;
            this.show = true;
        }
    };
    UpdateCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-coupon',
            template: __webpack_require__(/*! ./update-coupon.component.html */ "./src/app/components/coupons/update-coupon/update-coupon.component.html"),
            styles: [__webpack_require__(/*! ./update-coupon.component.css */ "./src/app/components/coupons/update-coupon/update-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], UpdateCouponComponent);
    return UpdateCouponComponent;
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

module.exports = "<nav class=\" navbar navbar-expand-lg navbar-dark bg-dark\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" routerLink=\"CompanyWeb\">Main <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n\n      </ul>\n      <li style=\"align-items:right\" >\n        <img  src=\"../images/tempsnip.png\" class=\"rounded float-left\" alt=\"...\" height=\"70px\">\n      </li>\n      <form class=\"form-inline\">\n      <button (click) = \"logout()\" type=\"button\" class=\"btn btn-danger\">Log Out</button>\n\n    </form>\n    </div>\n  </nav>"

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
        this._http.get("http://localhost:8080/company/logout")
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

/***/ "./src/app/services/coupons-methods.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/coupons-methods.service.ts ***!
  \*****************************************************/
/*! exports provided: CouponsMethodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsMethodsService", function() { return CouponsMethodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/coupons/coupon */ "./src/app/components/coupons/coupon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponsMethodsService = /** @class */ (function () {
    function CouponsMethodsService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.coupons2 = [];
        this.coupon = new _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, 0, "", 0, "");
    }
    /**
   * @ngdoc method
   * @name initcoup()
   * @description
   * This method initial attributes of local coupon objects
  **/
    CouponsMethodsService.prototype.initcoup = function () {
        this.coupon.id = 0;
        this.coupon.title = '';
        this.coupon.start_date = '';
        this.coupon.end_date = '';
        this.coupon.amount = 0;
        this.coupon.massage = '';
        this.coupon.price = 0;
        this.coupon.image = '';
        this.coupon.type = 0;
        this.coupons = [{}];
    };
    /**
     * @ngdoc method
     * @name sortbytitle
     * @param coupons:coupons[] (Array)
     * @return The same array with sorted values
     */
    CouponsMethodsService.prototype.sortbytitle = function (coupons) {
        return this.coupons = coupons.sort(function (a, b) {
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
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
     * @ngdoc Async method
     * @name createcoupon()
     * @param coupon:coupon
     * @description
     * This method gets an object of coupon and by fire an "ajax" ("post"-method),
     * sends the object over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response.
    **/
    CouponsMethodsService.prototype.createcoupon = function (coupon) {
        var _this = this;
        if (coupon.title.length <= 0 || coupon.end_date == null || coupon.amount <= 0 || coupon.type == null || coupon.type == 0) {
            this.swalwarning("Please fill all the empty fields");
        }
        else {
            this._http.post("http://localhost:8080/company/createcoupon", coupon).
                subscribe(
            // handle with the returned result
            function (resp) {
                // what to do with the result?
                console.log(resp);
                _this.swalDone("Created!", "Company by name: " + coupon.title + " created!");
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
        this.initcoup();
    };
    /**
     * @ngdoc Async method
     * @name updatecoupon()
     * @param coupon:coupon
     * @description
     * This method gets an object of coupon object and by fire an "ajax" ("put"-method),
     * sends the object over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response.
     **/
    CouponsMethodsService.prototype.updatecoupon = function (coupon2) {
        var _this = this;
        // fire ajax PUT
        this._http.put("http://localhost:8080/company/updatecoupon", coupon2).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.swalDone("Updated", "Company " + coupon2.title + " updateded");
        }, function (err) {
            console.log(err);
            if (err.status == 403) {
                window.location.href = _this.loginURL;
            }
            else {
                _this.swalwarning(err._body);
            }
        });
        this.initcoup();
    };
    /**
   * @ngdoc Async method
   * @name deletecoupon()
   * @param id:number
   * @description
   * This method gets an ID (number) and by fire an "ajax" ("delete"-method),
   * sends the ID over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   **/
    CouponsMethodsService.prototype.deletecoupon = function (id) {
        var _this = this;
        // fire ajax DELETE
        this._http.delete("http://localhost:8080/company/deletecoupon/" + id).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
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
        this.initcoup();
    };
    /**
     * @ngdoc Async method
     * @name getcouponsbytype()
     * @param type:any
     * @description
     * This method gets type (any) and by fire an "ajax" ("get"-method),
     * sends the type over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response
     * and put it into local array.
     **/
    CouponsMethodsService.prototype.getcouponsbytype = function (type) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getallcouponsbytype/" + type).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
            _this.coupons2 = _this.coupons;
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
        this.initcoup();
    };
    /**
  * @ngdoc Async method
  * @name getcoupon1()
  * @param id:number
  * @description
  * This method gets ID (number)  and by fire an "ajax" ("get"-method),
  * sends the ID over Http protocol.
  * Then by async (Observable) method named "subscribe" catch  the response
  * and put it into local object.
  **/
    CouponsMethodsService.prototype.getcoupon1 = function (id) {
        var _this = this;
        if (!(id > 0)) {
            this.swalwarning("Wrong ID");
            console.log(id);
        }
        else {
            this._http.get("http://localhost:8080/company/getcoupon/" + id).
                subscribe(
            // handle with the returned result
            function (resp) {
                _this.swalDone("", "");
                _this.coupon = resp.json();
                // what to do with the result?
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
        this.initcoup();
    };
    /**
   * @ngdoc Async method
   * @name getcouponsbyprice()
   * @param price:number
   * @description
   * This method gets price (number)  and by fire an "ajax" ("get"-method),
   * sends the price over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response
   * and put it into local array.
   **/
    CouponsMethodsService.prototype.getcouponsbyprice = function (price) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getallcouponsbyprice/" + price).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
            _this.coupons2 = _this.coupons;
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
        this.initcoup();
    };
    /**
   * @ngdoc Async method
   * @name getcouponsbydate()
   * @param date:string
   * @description
   * This  method gets date (string) and by fire an "ajax" ("get"-method),
   * sends the date over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response
   * and put it into local array.
   **/
    CouponsMethodsService.prototype.getcouponsbydate = function (date) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getallcouponsbydate/" + date).
            subscribe(
        // handle with the returned result
        function (resp) {
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
            _this.coupons2 = _this.coupons;
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
        this.initcoup();
    };
    /**
  * @ngdoc method
  * @name gettoupdate()
  * @param i:number (index)
  * @description
  * This method gets param i:index and put it in local member.
  * navigate to other component and pass the local member value.
  **/
    CouponsMethodsService.prototype.gettoupdate = function (i) {
        var x = this.coupons2[i];
        this._router.navigate(["UpdateCoupon", x.id]);
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
    CouponsMethodsService.prototype.swalDel = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Your file has been deleted.', 'success');
                _this.deletecoupon(id);
            }
        });
    };
    /**
     * @ngdoc method
     * @name swalwarning()
     * @param err: any
     * @description
     * This is method gets a err: any
     *  and display a specific alert accordingly
     **/
    CouponsMethodsService.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            type: 'error',
            title: 'Oops...',
            text: err + '!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    /**
   * @ngdoc method
   * @name swalDone()
   * @param title: string
   * @param text : string
   * @description
   * This is method gets a  title: string & text : string
   *  and dispaly a specific alert accordingly
   **/
    CouponsMethodsService.prototype.swalDone = function (title, text) {
        if (title.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
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
    CouponsMethodsService.prototype.ngOnInit = function () {
    };
    CouponsMethodsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CouponsMethodsService);
    return CouponsMethodsService;
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

module.exports = __webpack_require__(/*! G:\Angular projects\companyWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map