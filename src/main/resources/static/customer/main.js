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
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_coupons_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/coupons/left-bar/left-bar.component */ "./src/app/components/coupons/left-bar/left-bar.component.ts");
/* harmony import */ var _components_coupons_main_body_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/coupons/main-body/shopping-cart/shopping-cart.component */ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons/get-all-coupons.component */ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component */ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component */ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component */ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _app_components_customer_web_main_page_customer_web_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/components/customer-web-main-page/customer-web-main-page.component */ "./src/app/components/customer-web-main-page/customer-web-main-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '#', redirectTo: 'CustomerWebMainPageComponent', pathMatch: 'full' },
    { path: '', redirectTo: 'CustomerWebMainPageComponent', pathMatch: 'full' },
    { path: 'Customer', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"] },
    { path: 'CustomerWebMainPage', component: _app_components_customer_web_main_page_customer_web_main_page_component__WEBPACK_IMPORTED_MODULE_10__["CustomerWebMainPageComponent"] },
    // { path: 'ShoppingCartComponent',   redirectTo: 'ShoppingCartComponent', pathMatch: 'full' },
    { path: 'ShoppingCart', component: _components_coupons_main_body_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"] },
    { path: 'Coupons', component: _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_2__["CouponsComponent"],
        children: [
            { path: 'GetAllCoupons', component: _components_coupons_left_bar_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_5__["GetAllCouponsComponent"] },
            { path: 'GetAllCouponsByType', component: _components_coupons_left_bar_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_6__["GetAllCouponsByTypeComponent"] },
            { path: 'GetAllCouponsByPrice', component: _components_coupons_left_bar_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_7__["GetAllCouponsByPriceComponent"] },
            { path: 'GetAllCouponsByDate', component: _components_coupons_left_bar_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_8__["GetAllCouponsByDateComponent"] },
        ] },
    { path: 'LeftBarComponent', component: _components_coupons_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_3__["LeftBarComponent"],
    },
    { path: '**', redirectTo: 'CustomerWebMainPage', pathMatch: 'full' },
    { path: 'ShoppingCart', redirectTo: 'ShoppingCartComponent', pathMatch: 'full' },
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

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

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
        this.title = 'customerWeb';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
/* harmony import */ var _components_coupons_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/coupons/left-bar/left-bar.component */ "./src/app/components/coupons/left-bar/left-bar.component.ts");
/* harmony import */ var _components_coupons_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/coupons/main-body/main-body.component */ "./src/app/components/coupons/main-body/main-body.component.ts");
/* harmony import */ var _components_coupons_main_body_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coupons/main-body/shopping-cart/shopping-cart.component */ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons/get-all-coupons.component */ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component */ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component */ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.ts");
/* harmony import */ var _components_coupons_left_bar_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component */ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.ts");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _services_customerServices_customer_servieces_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/customerServices/customer-servieces.service */ "./src/app/services/customerServices/customer-servieces.service.ts");
/* harmony import */ var _components_customer_left_bar_cust_left_bar_cust_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/customer/left-bar-cust/left-bar-cust.component */ "./src/app/components/customer/left-bar-cust/left-bar-cust.component.ts");
/* harmony import */ var _components_customer_main_body_cust_main_body_cust_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/customer/main-body-cust/main-body-cust.component */ "./src/app/components/customer/main-body-cust/main-body-cust.component.ts");
/* harmony import */ var _components_customer_web_main_page_customer_web_main_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/customer-web-main-page/customer-web-main-page.component */ "./src/app/components/customer-web-main-page/customer-web-main-page.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_6__["CouponsComponent"],
                _components_coupons_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_9__["LeftBarComponent"],
                _components_coupons_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_10__["MainBodyComponent"],
                _components_coupons_main_body_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartComponent"],
                _components_coupons_left_bar_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_12__["GetAllCouponsComponent"],
                _components_coupons_left_bar_get_all_coupons_by_type_get_all_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_13__["GetAllCouponsByTypeComponent"],
                _components_coupons_left_bar_get_all_coupons_by_price_get_all_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_14__["GetAllCouponsByPriceComponent"],
                _components_coupons_left_bar_get_all_coupons_by_date_get_all_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_15__["GetAllCouponsByDateComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_16__["CustomerComponent"],
                _components_customer_left_bar_cust_left_bar_cust_component__WEBPACK_IMPORTED_MODULE_18__["LeftBarCustComponent"],
                _components_customer_main_body_cust_main_body_cust_component__WEBPACK_IMPORTED_MODULE_19__["MainBodyCustComponent"],
                _components_customer_web_main_page_customer_web_main_page_component__WEBPACK_IMPORTED_MODULE_20__["CustomerWebMainPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_8__["CouponsMethodsService"], _services_customerServices_customer_servieces_service__WEBPACK_IMPORTED_MODULE_17__["CustomerServiecesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = ".left {\r\n    float: left;\r\n    height: 100%;\r\n    width: 250px;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/components/coupons/coupons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n    \n  \n  <div class=\"w3-sidebar w3-light-grey w3-bar-block\" style=\"width:20%\">\n    <app-left-bar></app-left-bar>\n    <br><br><br>\n    <router-outlet></router-outlet>\n    \n    </div>\n    \n    <div style=\"margin-left:22%\">\n      <!-- <app-shopping-cart></app-shopping-cart> -->\n        <!-- <a class=\"jjj\" routerLink=\"../ShoppingCartComponent\">Update coupon</a> -->\n        <app-main-body></app-main-body>\n  \n  </div>"

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

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form\">\n    <label for=\"inputName\">\n      <h5>Date: </h5>\n    </label>\n    <br>\n    <input type=\"date\" class=\"form\" [(ngModel)]=\"coupdate\" name=\"idnum\">\n  </div>\n  <br>\n  <br>\n  <div>\n    <button (click)=\"_coupserv.getcouponsbydate(coupdate); show=true\" class=\"btn btn-primary\">Get!</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GetAllCouponsByDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsByDateComponent", function() { return GetAllCouponsByDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
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
            template: __webpack_require__(/*! ./get-all-coupons-by-date.component.html */ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons-by-date.component.css */ "./src/app/components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], GetAllCouponsByDateComponent);
    return GetAllCouponsByDateComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\r\n    -webkit-appearance: none;\r\n    margin-left: 10px;\r\n    width: 90%;\r\n    height: 15px;\r\n    border-radius: 5px;   \r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%; \r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"slidecontainer\">\n    <label for=\"customRange3\">Example range</label>\n    <input type=\"range\" class=\"slider\" min=\"0\" max=\"9000\" step=\"100\" id=\"customRange3\" [(ngModel)]=\"volume\" value=\"5000\" name=\"slide\">\n    <div>\n      <span>0</span>\n      <span style=\"margin-left:70%\">9000</span>\n    </div>\n  </div>\n</form>\n<br>\n<br>\n<form>\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputName\">\n      <h5>Price: </h5>\n    </label>\n    <input type=\"number\" ng-value=\"x\" name=\"idnum\"  placeholder=\"0\" value=\"{{volume}}\">\n  </div>\n  <br>\n  <br>\n  <div>\n    <button (click)=\"_coupserv.getcouponsbyprice(volume)\" class=\"btn btn-primary\">Get!</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: GetAllCouponsByPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsByPriceComponent", function() { return GetAllCouponsByPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
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
            template: __webpack_require__(/*! ./get-all-coupons-by-price.component.html */ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons-by-price.component.css */ "./src/app/components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], GetAllCouponsByPriceComponent);
    return GetAllCouponsByPriceComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <form class=\"form-inline\">\n    <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\" name=\"ctype\">Type:</label>\n    <br>\n    <div class=\"form-row align-items-center\">\n      <div class=\"col-auto my-1\">\n        <label class=\"mr-sm-2 sr-only\" for=\"inlineFormCustomSelect\">Preference</label>\n        <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\" [(ngModel)]=\"coupontype\" name=\"couptype\" >\n          \n          <option>food</option>\n          <option>electricity</option>\n          <option>hobby</option>\n          <option>vacation</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"custom-control custom-checkbox my-1 mr-sm-2\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <button (click)=\"_coupserv.getcouponsbytype(coupontype)\" class=\"btn btn-primary\">Get!</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GetAllCouponsByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsByTypeComponent", function() { return GetAllCouponsByTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../coupon */ "./src/app/components/coupons/coupon.ts");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
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
    GetAllCouponsByTypeComponent.prototype.ngOnInit = function () {
    };
    GetAllCouponsByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons-by-type',
            template: __webpack_require__(/*! ./get-all-coupons-by-type.component.html */ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons-by-type.component.css */ "./src/app/components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_2__["CouponsMethodsService"]])
    ], GetAllCouponsByTypeComponent);
    return GetAllCouponsByTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button (click)=\"_coupserv.getallcoupons(); show=true\" class=\"btn btn-primary\">Get!</button>\n    \n<div *ngIf = \"show\">\n      <p>\n those are all the coupons:\n      </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GetAllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponsComponent", function() { return GetAllCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetAllCouponsComponent = /** @class */ (function () {
    function GetAllCouponsComponent(_coupserv) {
        this._coupserv = _coupserv;
        this.show = false;
    }
    GetAllCouponsComponent.prototype.ngOnInit = function () {
    };
    GetAllCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-all-coupons',
            template: __webpack_require__(/*! ./get-all-coupons.component.html */ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.html"),
            styles: [__webpack_require__(/*! ./get-all-coupons.component.css */ "./src/app/components/coupons/left-bar/get-all-coupons/get-all-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], GetAllCouponsComponent);
    return GetAllCouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/left-bar/left-bar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/left-bar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/left-bar/left-bar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/left-bar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n\n    <div class=\"dropdown\">\n        <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown link\n        </a>\n      \n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n          <a class=\"dropdown-item\" routerLink=\"GetAllCoupons\">Get all coupons</a>\n          <a class=\"dropdown-item\" routerLink=\"GetAllCouponsByType\">Get all coupons by type</a>\n          <a class=\"dropdown-item\" routerLink=\"GetAllCouponsByPrice\">Get all coupons by price</a>\n          \n        </div>\n      </div>\n\n      <router-outlet name=\"getall\"></router-outlet>\n        \n  </div>"

/***/ }),

/***/ "./src/app/components/coupons/left-bar/left-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/coupons/left-bar/left-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeftBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftBarComponent", function() { return LeftBarComponent; });
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

var LeftBarComponent = /** @class */ (function () {
    function LeftBarComponent() {
    }
    LeftBarComponent.prototype.ngOnInit = function () {
    };
    LeftBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-bar',
            template: __webpack_require__(/*! ./left-bar.component.html */ "./src/app/components/coupons/left-bar/left-bar.component.html"),
            styles: [__webpack_require__(/*! ./left-bar.component.css */ "./src/app/components/coupons/left-bar/left-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftBarComponent);
    return LeftBarComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/main-body/main-body.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/coupons/main-body/main-body.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .zoom {\r\n    padding: 50px;\r\n    transition: transform .2s;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 0 auto;\r\n} */\r\n\r\n.zoom:hover { /* IE 9 */\r\n    -webkit-transform: scale(1.1); /* Safari 3-8 */\r\n    transform: scale(1.1); \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/coupons/main-body/main-body.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/coupons/main-body/main-body.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div id=\"rtl-container\" dir=\"rtl\">\n    <h3><button (click)=\"_coupserv.swal1()\" style=\"margin-left:95%\" class=\"fa fa-shopping-cart\"></button></h3>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-4\" *ngFor=\"let coup of _coupserv.coupons; let i = index\">\n      <br><br>\n      <div class=\"zoom\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\"{{coup.image}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Title: {{coup.title}}</h5>\n          </div>\n          <ul class=\"list-group list-group-flush\">\n\n            <li class=\"list-group-item\">Price: {{coup.price}}</li>\n            <li class=\"list-group-item\">End datend: {{coup.end_date}}</li>\n\n          </ul>\n          <div class=\"card-body\">\n            <button (click)=\"_coupserv.gotopayment(i)\" class=\"btn btn-sm btn-outline-secondary\">Purchase coupon</button>\n\n            <button (click)=\"_coupserv.addtocart(i)\" class=\"btn btn-sm btn-outline-secondary\">Add to cart</button>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coupons/main-body/main-body.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/coupons/main-body/main-body.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBodyComponent", function() { return MainBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
/* harmony import */ var _services_cart_service_cart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart service/cart-service.service */ "./src/app/services/cart service/cart-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainBodyComponent = /** @class */ (function () {
    function MainBodyComponent(_coupserv, _cartserv) {
        this._coupserv = _coupserv;
        this._cartserv = _cartserv;
    }
    MainBodyComponent.prototype.ngOnInit = function () {
    };
    MainBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-body',
            template: __webpack_require__(/*! ./main-body.component.html */ "./src/app/components/coupons/main-body/main-body.component.html"),
            styles: [__webpack_require__(/*! ./main-body.component.css */ "./src/app/components/coupons/main-body/main-body.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"], _services_cart_service_cart_service_service__WEBPACK_IMPORTED_MODULE_2__["CartServiceService"]])
    ], MainBodyComponent);
    return MainBodyComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n<div style=\"margin-left:25%\">\n<h1>Shoopin Cart</h1>\n<br><br><br>\n        </div> \n  <div  style=\"margin-left:20%\"> \n  <table class=\"table table-striped\" style=\"width:75%\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Title</th>\n            <th scope=\"col\">Amount</th>\n            <th scope=\"col\">End date</th>\n            <th scope=\"col\">price</th>\n            <th scope=\"col\">Delete</th>            \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let coup of _coupserv.coupons2; let i = index;\">\n            <th scope=\"row\">{{i+1}}</th>\n            <td>{{coup.title}}</td>\n            <td>{{coup.amount}}</td>\n            <td>{{coup.end_date}}</td>\n            <td>{{coup.price}}</td>\n            <td><button (click)=\"_coupserv.deleteCoupon(i)\">X</button></td>\n          </tr>\n          <br><br><br>\n          <div align=\"center\">\n              <button (click)=\"_coupserv.purchase()\" class=\"btn btn-success\">Buy!</button>\n          </div>\n         </tbody>\n      </table>\n    </div> \n\n "

/***/ }),

/***/ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/coupons-methods.service */ "./src/app/services/coupons-methods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(_coupserv) {
        this._coupserv = _coupserv;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/coupons/main-body/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_coupons_methods_service__WEBPACK_IMPORTED_MODULE_1__["CouponsMethodsService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/components/customer-web-main-page/customer-web-main-page.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/customer-web-main-page/customer-web-main-page.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer-web-main-page/customer-web-main-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/customer-web-main-page/customer-web-main-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Hello, Customer!</h1>\n  <p class=\"lead\">This is the wellcome page, in the next page you can choose between many features to manage your coupons.</p>\n  <hr class=\"my-4\">\n  <p>You have all the permissions, let's get started with:</p><br><br>\n  <a class=\"btn btn-primary btn-lg\" routerLink=\"../Coupons\" role=\"\">Coupons List</a><br><br><br><br>\n  <a class=\"btn btn-primary btn-lg\" routerLink=\"../Customer\" role=\"\">Purchased Coupons</a><br>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/customer-web-main-page/customer-web-main-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/customer-web-main-page/customer-web-main-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomerWebMainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerWebMainPageComponent", function() { return CustomerWebMainPageComponent; });
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

var CustomerWebMainPageComponent = /** @class */ (function () {
    function CustomerWebMainPageComponent() {
    }
    CustomerWebMainPageComponent.prototype.ngOnInit = function () {
    };
    CustomerWebMainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-web-main-page',
            template: __webpack_require__(/*! ./customer-web-main-page.component.html */ "./src/app/components/customer-web-main-page/customer-web-main-page.component.html"),
            styles: [__webpack_require__(/*! ./customer-web-main-page.component.css */ "./src/app/components/customer-web-main-page/customer-web-main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerWebMainPageComponent);
    return CustomerWebMainPageComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-sidebar w3-light-grey w3-bar-block\" style=\"width:20%\">\n<app-left-bar-cust></app-left-bar-cust>>\n</div>\n<div style=\"margin-left:22%\">\n<app-main-body-cust></app-main-body-cust>\n</div>"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
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

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/left-bar-cust/left-bar-cust.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/customer/left-bar-cust/left-bar-cust.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/left-bar-cust/left-bar-cust.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/customer/left-bar-cust/left-bar-cust.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" id=\"accordionExample\">\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <button (click)=\"_custServ.getallpurchasedcoupons()\"class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Get all purchased coupons\n        </button>\n      </h5>\n    </div>\n\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\"\n          aria-controls=\"collapseTwo\">\n          Get purchased coupons by type\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        <div>\n          <form>\n              <label class=\"my-1 mr-2\" for=\"inlineFormCustomSelectPref\" name=\"ctype\">Type:</label>            \n            <div class=\"form-row align-items-center\">\n              <div class=\"col-auto my-1\">\n                <label class=\"mr-sm-2 sr-only\" for=\"inlineFormCustomSelect\">Preference</label>\n                <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\" name=\"couptype\" [(ngModel)]=\"coupontype\">\n                  <option selected>Choose...</option>\n                  <option>food</option>\n                  <option>electricity</option>\n                  <option>hobby</option>\n                  <option>vacation</option>\n                </select>\n              </div>\n            </div>\n            <br><br>\n            <button (click)=\"_custServ.getpurchasedcouponsbytype(coupontype)\" class=\"btn btn-primary\">Get!</button>       \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingThree\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\"\n          aria-controls=\"collapseThree\">\n          Get purchased coupons by price\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        <div>\n          <form>\n            <div class=\"slidecontainer\">\n              <label for=\"customRange3\">Example range</label>\n              <input type=\"range\" class=\"slider\" min=\"0\" max=\"9000\" step=\"100\" id=\"customRange3\" [(ngModel)]=\"price\" value=\"5000\" name=\"slide\">\n              <div>\n                <span>0</span>\n                <span style=\"margin-left:70%\">9000</span>\n              </div>\n            </div>\n          </form>\n          <br>\n          <br>\n          <form>\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputName\">\n                <h5>Price: </h5>\n              </label>\n              <input type=\"number\" name=\"idnum\"  [(ngModel)]=\"price\" placeholder=\"0\">\n            </div>\n            <br>\n            <br>\n            <div>\n              <button (click)=\"_custServ.getpurchasedcouponsbyprice(price)\" class=\"btn btn-primary\">Get!</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/customer/left-bar-cust/left-bar-cust.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/customer/left-bar-cust/left-bar-cust.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeftBarCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftBarCustComponent", function() { return LeftBarCustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customerServices_customer_servieces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/customerServices/customer-servieces.service */ "./src/app/services/customerServices/customer-servieces.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftBarCustComponent = /** @class */ (function () {
    function LeftBarCustComponent(_custServ) {
        this._custServ = _custServ;
    }
    LeftBarCustComponent.prototype.ngOnInit = function () {
    };
    LeftBarCustComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-bar-cust',
            template: __webpack_require__(/*! ./left-bar-cust.component.html */ "./src/app/components/customer/left-bar-cust/left-bar-cust.component.html"),
            styles: [__webpack_require__(/*! ./left-bar-cust.component.css */ "./src/app/components/customer/left-bar-cust/left-bar-cust.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customerServices_customer_servieces_service__WEBPACK_IMPORTED_MODULE_1__["CustomerServiecesService"]])
    ], LeftBarCustComponent);
    return LeftBarCustComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/main-body-cust/main-body-cust.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/customer/main-body-cust/main-body-cust.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer/main-body-cust/main-body-cust.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/customer/main-body-cust/main-body-cust.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div id=\"rtl-container\" dir=\"rtl\">\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let coup of _custserv.coupons; let i = index\">\n      <br>\n      <br>\n      <div class=\"card\" style=\"width: 18rem;\" ng-mouseover=\"expression\">\n        <img class=\"card-img-top\" src=\"{{coup.image}}\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Title: {{coup.title}}</h5>\n        </div>\n        <ul class=\"list-group list-group-flush\">\n\n          <li class=\"list-group-item\">Price: {{coup.price}}</li>\n          <li class=\"list-group-item\">End datend: {{coup.end_date}}</li>\n\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/customer/main-body-cust/main-body-cust.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/customer/main-body-cust/main-body-cust.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainBodyCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBodyCustComponent", function() { return MainBodyCustComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customerServices_customer_servieces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/customerServices/customer-servieces.service */ "./src/app/services/customerServices/customer-servieces.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainBodyCustComponent = /** @class */ (function () {
    function MainBodyCustComponent(_custserv) {
        this._custserv = _custserv;
    }
    MainBodyCustComponent.prototype.ngOnInit = function () {
    };
    MainBodyCustComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-body-cust',
            template: __webpack_require__(/*! ./main-body-cust.component.html */ "./src/app/components/customer/main-body-cust/main-body-cust.component.html"),
            styles: [__webpack_require__(/*! ./main-body-cust.component.css */ "./src/app/components/customer/main-body-cust/main-body-cust.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customerServices_customer_servieces_service__WEBPACK_IMPORTED_MODULE_1__["CustomerServiecesService"]])
    ], MainBodyCustComponent);
    return MainBodyCustComponent;
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

module.exports = "<nav class=\" navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n  \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"CustomerWebMainPage\">Main <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"Coupons\">Coupons list <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"Customer\">Purchased history <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n        </ul>\n        <li style=\"align-items:right\" >\n          <img  src=\"../images/tempsnip.png\" class=\"rounded float-left\" alt=\"...\" height=\"70px\">\n        </li>\n        <form class=\"form-inline\">\n          <button (click)=\"logout()\" type=\"button\" class=\"btn btn-danger\">Log Out</button>\n        </form>        \n      </div>\n    </nav>"

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



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_http) {
        this._http = _http;
    }
    /**
     * @ngdoc method
     * @name logout()
     * @description
     * This method will display a boolean question to the user.
     * according to the answer this method will invoke an async method ("get"-method),
     * and redirect the user to the login page or cancel the execution of "logout" process
     **/
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
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
        this._http.get("http://localhost:8080/customer/logout")
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
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/cart service/cart-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/cart service/cart-service.service.ts ***!
  \***************************************************************/
/*! exports provided: CartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceService", function() { return CartServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/coupons/coupon */ "./src/app/components/coupons/coupon.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartServiceService = /** @class */ (function () {
    function CartServiceService(_http) {
        this._http = _http;
        this.coupon = new _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_1__["coupon"](0, "", "", "", 0, 0, "", 0, "");
    }
    CartServiceService.prototype.addtocart = function (coupon) {
        console.log(coupon);
        this.coupons.push(coupon);
        console.log(this.coupons);
    };
    CartServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CartServiceService);
    return CartServiceService;
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
        this.coupon = new _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_2__["coupon"](0, "", "", "", 0, 0, "", 0, "");
        this.coupons2 = [];
    }
    /**
   * @ngdoc method
   * @name initcoup()
   * @description
   * This method initial attributes of local coupon object
  **/
    CouponsMethodsService.prototype.initcoup = function () {
        this.coupons = null;
        // this.coupon.id=0;
        // this.coupon.title='';
        // this.coupon.start_date='';
        // this.coupon.end_date='';
        // this.coupon.amount=0;
        // this.coupon.massage='';
        // this.coupon.price=0;
        // this.coupon.image='';
        // this.coupon.type=0;
        // this.coupons=[{}];
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
        this._http.get("http://localhost:8080/customer/getallcouponsbyprice/" + price).
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.swalDone("", "");
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
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
        this._http.get("http://localhost:8080/customer/getallcouponsbytype/" + type).
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.swalDone("", "");
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
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
    // /**
    //  * @ngdoc Async method
    //  * @name getcouponsbydate()
    //  * @param date:string
    //  * @description
    //  * This  method gets date (string) and by fire an "ajax" ("get"-method),
    //  * sends the date over Http protocol.
    //  * Then by async (Observable) method named "subscribe" catch  the response 
    //  * and put it into local array.
    //  **/
    // getcouponsbydate(date: string) {
    //   this._http.get("http://localhost:8080/customer/getallcouponsbydate/" + date).
    //     subscribe(
    //       // handle with the returned result
    //       (resp) => {
    //         this.swalDone("", "")
    //         // what to do with the result?
    //         console.log(resp)
    //         this.coupons = this.sortbytitle(resp.json())
    //         // fire ajax GET
    //       }, (err) => {
    //         console.log(err);
    //         this.swalwarning(err._body)
    //       }
    //     )
    //   this.initcoup();
    // }
    /**
     * @ngdoc Async method
     * @name getallcoupons()
     * @description
     * This method fire an "ajax" ("get"-method) over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response
     * and put it into local array.
     **/
    CouponsMethodsService.prototype.getallcoupons = function () {
        var _this = this;
        this._http.get("http://localhost:8080/customer/getallcoupons").
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.swalDone("", "");
            _this.coupons = _this.sortbytitle(resp.json());
            // what to do with the result?
            console.log(resp);
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
    CouponsMethodsService.prototype.swal1 = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            text: "Cart",
            confirmButtonText: "Let me pay ",
            cancelButtonText: "Keep shooping",
            showCancelButton: true,
            showCloseButton: true,
        }).then(function (result) {
            if (result.value) {
                if (_this.coupons2.length != 0) {
                    console.log(result.value);
                    _this.routnav();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        type: 'error',
                        title: 'Oops...',
                        text: "Your Cart is empty!",
                    });
                }
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
   * @name gotopayment()
   * @param i: number
   * @description
   * This method gets a i: number.
   *  Pass it to "addtocart" method and play "routnav" method
   **/
    CouponsMethodsService.prototype.gotopayment = function (i) {
        this.addtocart(i);
        this.routnav();
    };
    /**
  * @ngdoc method
  * @name routnav()
  * @description
  * This method navigate the client's page to relative page.
  * This method uses Router module
  **/
    CouponsMethodsService.prototype.routnav = function () {
        this._router.navigate(['ShoppingCart'], { relativeTo: this._route });
    };
    /**
     * @ngdoc method
     * @param i: number
     * @name routnav()
     * @description
     * This method gets i: number, print it to the browser's console
     * and push object coupon by the same I index into local other array.
     **/
    CouponsMethodsService.prototype.addtocart = function (i) {
        console.log(i);
        this.coupons2.push(this.coupons[i]);
    };
    /**
   * @ngdoc method
   * @param i: number
   * @name routnav()
   * @description
   * This method gets i: number (index) and uses "slice" method
   *  for delete coupon object in the I - index place
   **/
    CouponsMethodsService.prototype.deleteCoupon = function (i) {
        this.coupons2.splice(i, 1);
    };
    /**
   * @ngdoc Async method
   * @name createcoupon()
   * @description
   * This method run over array objects of coupon that choosed by the user to buy
   * and pass it by fire an "ajax" ("post"-method), sends each object over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   * and for last, execute an initial to the array.
  **/
    CouponsMethodsService.prototype.purchase = function () {
        var _this = this;
        this.coupons2.forEach(function (coupon) {
            _this._http.post("http://localhost:8080/customer/purchasecoupon", coupon).
                subscribe(
            // handle with the returned result
            function (resp) {
                _this.coupons = _this.sortbytitle(resp.json());
                _this.swalDone("Purchased!", "Coupon by title: " + coupon.title + " purchased!");
                // what to do with the result?
                console.log(resp);
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
            _this.coupons2 = [];
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
    CouponsMethodsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CouponsMethodsService);
    return CouponsMethodsService;
}());



/***/ }),

/***/ "./src/app/services/customerServices/customer-servieces.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/customerServices/customer-servieces.service.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerServiecesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiecesService", function() { return CustomerServiecesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/coupons/coupon */ "./src/app/components/coupons/coupon.ts");
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




var CustomerServiecesService = /** @class */ (function () {
    function CustomerServiecesService(_http) {
        this._http = _http;
        this.coupon = new _components_coupons_coupon__WEBPACK_IMPORTED_MODULE_1__["coupon"](0, "", "", "", 0, 0, "", 0, "");
    }
    /**
     * @ngdoc method
     * @name sortbytitle
     * @param coupons:coupons[] (Array)
     * @return The same array with sorted values
     */
    CustomerServiecesService.prototype.sortbytitle = function (coupons) {
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
     * @ngdoc method
     * @name initcoup()
     * @description
     * This method initial attributes of local coupon array
    **/
    CustomerServiecesService.prototype.initcoup = function () {
        this.coupons = [];
    };
    /**
     * @ngdoc Async method
     * @name getallpurchasedcoupons()
     * @description
     * This method fire an "ajax" ("get"-method) over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response
     * and put it into local array.
     **/
    CustomerServiecesService.prototype.getallpurchasedcoupons = function () {
        var _this = this;
        this._http.get("http://localhost:8080/customer/purchasedcoupons").
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.swalDone("", "");
            _this.coupons = _this.sortbytitle(resp.json());
            _this.coupons2 = _this.coupons;
            // what to do with the result?
            console.log(resp);
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
     * @name getpurchasedcouponsbytype()
     * @param type:any
     * @description
     * This method gets type (any) and by fire an "ajax" ("get"-method),
     * sends the type over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response
     * and put it into local array.
     **/
    CustomerServiecesService.prototype.getpurchasedcouponsbytype = function (type) {
        var _this = this;
        this._http.get("http://localhost:8080/customer/purchasedcouponsbytype/" + type).
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.swalDone("", "");
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
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
     * @name getpurchasedcouponsbyprice()
     * @param price:number
     * @description
     * This method gets price (number)  and by fire an "ajax" ("get"-method),
     * sends the price over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response
     * and put it into local array.
     **/
    CustomerServiecesService.prototype.getpurchasedcouponsbyprice = function (price) {
        var _this = this;
        this._http.get("http://localhost:8080/customer/purchasedcouponsbyprice/" + price).
            subscribe(
        // handle with the returned result
        function (resp) {
            _this.swalDone("", "");
            // what to do with the result?
            console.log(resp);
            _this.coupons = _this.sortbytitle(resp.json());
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
     * @name swalwarning()
     * @param err: any
     * @description
     * This is method gets a err: any
     *  and display a specific alert accordingly
     **/
    CustomerServiecesService.prototype.swalwarning = function (err) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
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
    CustomerServiecesService.prototype.swalDone = function (title, text) {
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
    CustomerServiecesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CustomerServiecesService);
    return CustomerServiecesService;
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

module.exports = __webpack_require__(/*! G:\Angular projects\customerWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map