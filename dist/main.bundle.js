webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_activities_ongoing_activities_main_ongoing_activities_main_ongoing_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_activities_ongoing_activities_sales_sales_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_activities_ongoing_activities_featured_products_featured_products_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_activities_ongoing_activities_discount_for_customer_discount_for_customer_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_activities_ongoing_activities_customer_retention_customer_retention_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_activities_ongoing_activities_ongoing_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_activities_championship_champion_of_quarter_champion_of_quarter_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_activities_championship_champion_of_month_champion_of_month_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_activities_championship_championship_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/championship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_activities_activity_activity_component__ = __webpack_require__("../../../../../src/app/home/activities/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_activities_retention_activity_retention_activity_component__ = __webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_activities_overall_activities_overall_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_activities_enroll_activity_enroll_activity_component__ = __webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_activities_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_signin_signin_component__ = __webpack_require__("../../../../../src/app/home/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: "", redirectTo: "/sign-in", pathMatch: 'full' },
    { path: "sign-in", component: __WEBPACK_IMPORTED_MODULE_17__home_signin_signin_component__["a" /* SigninComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: "activity", component: __WEBPACK_IMPORTED_MODULE_9__home_activities_activity_activity_component__["a" /* ActivityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]], children: [
            { path: "", component: __WEBPACK_IMPORTED_MODULE_15__home_activities_activities_component__["a" /* ActivitiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: "championship", component: __WEBPACK_IMPORTED_MODULE_8__home_activities_championship_championship_component__["a" /* ChampionshipComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: "champion-of-month", component: __WEBPACK_IMPORTED_MODULE_7__home_activities_championship_champion_of_month_champion_of_month_component__["a" /* ChampionOfMonthComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: "champion-of-quarter", component: __WEBPACK_IMPORTED_MODULE_6__home_activities_championship_champion_of_quarter_champion_of_quarter_component__["a" /* ChampionOfQuarterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: "ongoing-activities", component: __WEBPACK_IMPORTED_MODULE_5__home_activities_ongoing_activities_ongoing_activities_component__["a" /* OngoingActivitiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]], children: [
                    { path: "", component: __WEBPACK_IMPORTED_MODULE_0__home_activities_ongoing_activities_main_ongoing_activities_main_ongoing_activities_component__["a" /* MainOngoingActivitiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
                    { path: "customer-retention", component: __WEBPACK_IMPORTED_MODULE_4__home_activities_ongoing_activities_customer_retention_customer_retention_component__["a" /* CustomerRetentionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
                    { path: "discount-for-customer", component: __WEBPACK_IMPORTED_MODULE_3__home_activities_ongoing_activities_discount_for_customer_discount_for_customer_component__["a" /* DiscountForCustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
                    { path: "featured-products", component: __WEBPACK_IMPORTED_MODULE_2__home_activities_ongoing_activities_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
                    { path: "sales", component: __WEBPACK_IMPORTED_MODULE_1__home_activities_ongoing_activities_sales_sales_component__["a" /* SalesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] }
                ] },
            { path: "enroll", component: __WEBPACK_IMPORTED_MODULE_14__home_activities_enroll_activity_enroll_activity_component__["a" /* EnrollActivityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: "overall", component: __WEBPACK_IMPORTED_MODULE_13__home_activities_overall_activities_overall_activities_component__["a" /* OverallActivitiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: "retention", component: __WEBPACK_IMPORTED_MODULE_12__home_activities_retention_activity_retention_activity_component__["a" /* RetentionActivityComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_guard_service__["a" /* AuthGuardService */]] }
        ] },
    { path: "**", redirectTo: "/home", pathMatch: 'full' }
];
var appRouter = __WEBPACK_IMPORTED_MODULE_18__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["J" /* NgModule */])({
            imports: [appRouter]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n#footer{\r\n    width: 100%;\r\n    text-align: center;\r\n    background: rgba(223, 223, 223, 0.534); \r\n    position: fixed;   \r\n    height: 60px;\r\n    line-height: 60px;\r\n    bottom:0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n\r\n#page {\r\n    min-height: 100%;\r\n    padding: 0 0 60px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    direction: rtl;\r\n\r\n    /* position: relative; */\r\n}\r\n\r\n.home-page{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page\" (window:resize)=\"onResize()\">\r\n    <div id=\"header\">\r\n        <app-header></app-header>\r\n    </div>\r\n\r\n    <div class=\"home-page\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <div id=\"footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>   \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_screen_settings_service__ = __webpack_require__("../../../../../src/app/shared/services/screen-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(agentService, screenSettingsService, router) {
        this.agentService = agentService;
        this.screenSettingsService = screenSettingsService;
        this.router = router;
        this.stayConnected = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.agentService.checkIfAgentConnected()) {
            this.router.navigate(['/sign-in']);
        }
        else {
            this.checkIfTokenIsValid();
        }
        this.screenSettingsService.resizeScreen();
    };
    AppComponent.prototype.checkIfTokenIsValid = function () {
        var _this = this;
        this.agentService.checkIfTokenIsValid(this.agentService.getAgentToken(), function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    AppComponent.prototype.onResize = function () {
        this.screenSettingsService.resizeScreen();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_screen_settings_service__["a" /* ScreenSettingsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_graph_service__ = __webpack_require__("../../../../../src/app/shared/services/graph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_messages_service__ = __webpack_require__("../../../../../src/app/shared/services/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_service__ = __webpack_require__("../../../../../src/app/shared/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_screen_settings_service__ = __webpack_require__("../../../../../src/app/shared/services/screen-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_error_service__ = __webpack_require__("../../../../../src/app/shared/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_signin_signin_component__ = __webpack_require__("../../../../../src/app/home/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_activities_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_activities_overall_activities_overall_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_activities_retention_activity_retention_activity_component__ = __webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_activities_enroll_activity_enroll_activity_component__ = __webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routing_component__ = __webpack_require__("../../../../../src/app/app-routing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_activities_activity_activity_component__ = __webpack_require__("../../../../../src/app/home/activities/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_activities_enroll_activity_enroll_agent_history_enroll_agent_history_component__ = __webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_pipes_heb_date_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/heb-date.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__header_mobile_menu_mobile_menu_component__ = __webpack_require__("../../../../../src/app/header/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_activities_retention_activity_retention_agent_history_retention_agent_history_component__ = __webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-agent-history/retention-agent-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_activities_overall_activities_overall_agent_history_overall_agent_history_component__ = __webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-agent-history/overall-agent-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_activities_championship_championship_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/championship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__home_activities_ongoing_activities_ongoing_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_activities_championship_champion_of_month_champion_of_month_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__home_activities_championship_champion_of_quarter_champion_of_quarter_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__home_activities_ongoing_activities_featured_products_featured_products_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__home_activities_ongoing_activities_sales_sales_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_activities_ongoing_activities_customer_retention_customer_retention_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__home_activities_ongoing_activities_discount_for_customer_discount_for_customer_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__home_activities_championship_champion_of_month_champion_of_month_history_champion_of_month_history_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__home_activities_championship_champion_of_quarter_champion_of_quarter_history_champion_of_quarter_history_component__ = __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__home_activities_ongoing_activities_main_ongoing_activities_main_ongoing_activities_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__graph_graph_component__ = __webpack_require__("../../../../../src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__messages_messages_list_messages_list_component__ = __webpack_require__("../../../../../src/app/messages/messages-list/messages-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__messages_messages_list_message_item_message_item_component__ = __webpack_require__("../../../../../src/app/messages/messages-list/message-item/message-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__home_activities_ongoing_activities_sales_sales_history_sales_history_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales-history/sales-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__home_activities_ongoing_activities_featured_products_featured_products_history_featured_products_history_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__home_activities_ongoing_activities_discount_for_customer_discount_for_customer_history_discount_for_customer_history_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__home_activities_ongoing_activities_customer_retention_customer_retention_history_customer_retention_history_component__ = __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { NgModule } from '@angular/core';










































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_activities_overall_activities_overall_activities_component__["a" /* OverallActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__home_activities_retention_activity_retention_activity_component__["a" /* RetentionActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_activities_enroll_activity_enroll_activity_component__["a" /* EnrollActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_27__home_activities_activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_28__home_activities_enroll_activity_enroll_agent_history_enroll_agent_history_component__["a" /* EnrollAgentHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_29__shared_pipes_heb_date_pipe__["a" /* HebDatePipe */],
                __WEBPACK_IMPORTED_MODULE_30__header_mobile_menu_mobile_menu_component__["a" /* MobileMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_31__home_activities_retention_activity_retention_agent_history_retention_agent_history_component__["a" /* RetentionAgentHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_32__home_activities_overall_activities_overall_agent_history_overall_agent_history_component__["a" /* OverallAgentHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_35__home_activities_championship_champion_of_month_champion_of_month_component__["a" /* ChampionOfMonthComponent */],
                __WEBPACK_IMPORTED_MODULE_36__home_activities_championship_champion_of_quarter_champion_of_quarter_component__["a" /* ChampionOfQuarterComponent */],
                __WEBPACK_IMPORTED_MODULE_37__home_activities_ongoing_activities_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__home_activities_ongoing_activities_sales_sales_component__["a" /* SalesComponent */],
                __WEBPACK_IMPORTED_MODULE_39__home_activities_ongoing_activities_customer_retention_customer_retention_component__["a" /* CustomerRetentionComponent */],
                __WEBPACK_IMPORTED_MODULE_40__home_activities_ongoing_activities_discount_for_customer_discount_for_customer_component__["a" /* DiscountForCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_33__home_activities_championship_championship_component__["a" /* ChampionshipComponent */],
                __WEBPACK_IMPORTED_MODULE_34__home_activities_ongoing_activities_ongoing_activities_component__["a" /* OngoingActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__home_activities_championship_champion_of_month_champion_of_month_history_champion_of_month_history_component__["a" /* ChampionOfMonthHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_42__home_activities_championship_champion_of_quarter_champion_of_quarter_history_champion_of_quarter_history_component__["a" /* ChampionOfQuarterHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_43__home_activities_ongoing_activities_main_ongoing_activities_main_ongoing_activities_component__["a" /* MainOngoingActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_44__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_45__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_46__messages_messages_list_messages_list_component__["a" /* MessagesListComponent */],
                __WEBPACK_IMPORTED_MODULE_47__messages_messages_list_message_item_message_item_component__["a" /* MessageItemComponent */],
                __WEBPACK_IMPORTED_MODULE_48__home_activities_ongoing_activities_sales_sales_history_sales_history_component__["a" /* SalesHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_49__home_activities_ongoing_activities_featured_products_featured_products_history_featured_products_history_component__["a" /* FeaturedProductsHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_50__home_activities_ongoing_activities_discount_for_customer_discount_for_customer_history_discount_for_customer_history_component__["a" /* DiscountForCustomerHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_51__home_activities_ongoing_activities_customer_retention_customer_retention_history_customer_retention_history_component__["a" /* CustomerRetentionHistoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__app_routing_component__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_26_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_services_agent_service__["a" /* AgentService */],
                __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_0__shared_services_graph_service__["a" /* GraphService */],
                __WEBPACK_IMPORTED_MODULE_3__shared_services_screen_settings_service__["a" /* ScreenSettingsService */],
                __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_1__shared_services_messages_service__["a" /* MessagesService */],
                __WEBPACK_IMPORTED_MODULE_4__shared_services_url_service__["a" /* UrlService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_services_error_service__["a" /* ErrorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n    margin: 0;\r\n    color: black;\r\n}\r\n\r\n.page-footer{\r\n    bottom: 0;\r\n}\r\n\r\nfooter{\r\n    padding: 0;\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    כל הזכויות שמורות &copy; {{today | date:'yyyy'}}\r\n</p>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card .card-content{\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col 12\">\r\n        <div *ngIf=\"!isLoading; else loading\">\r\n    <!-- TEMP DATA -->\r\n    <div class=\"card\">\r\n        <div class=\"card-move-up waves-effect waves-block waves-light\">\r\n            <div class=\"move-up cyan darken-1\">\r\n                <!-- <img src=\"assets/background/graph-top.jpg\" class=\"trending-line-chart-wrapper responsive-img\" style=\"z-index:0;\"> -->\r\n                <div style=\"display: block\">\r\n                    <canvas mdbChart \r\n                        [chartType]=\"chartType\"\r\n                        [datasets]=\"chartDatasets\" \r\n                        [labels]=\"chartLabels\"\r\n                        [colors]=\"chartColors\"\r\n                        [options]=\"chartOptions\"\r\n                        [legend]=\"true\"\r\n                        (chartHover)=\"chartHovered($event)\" \r\n                        (chartClick)=\"chartClicked($event)\">\r\n                    </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"card-content\">\r\n            <img src=\"assets/background/graph-bottom.jpg\" class=\"responsive-img\" style=\"z-index:0;\">\r\n            <br>\r\n        </div> -->\r\n    </div>\r\n    <!-- TEMP DATA -->\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_graph_service__ = __webpack_require__("../../../../../src/app/shared/services/graph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_graph_model__ = __webpack_require__("../../../../../src/app/shared/models/graph.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GraphComponent = (function () {
    function GraphComponent(activityService, agentService, graphService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.graphService = graphService;
        this.graphDataPoints = new Array();
        this.graphDataPlaces = new Array();
        this.graphDataPointsDiff = new Array();
        this.graphDataDates = new Array();
        this.isLoading = true;
        this.chartType = 'line';
        this.chartDatasets = [
            { data: this.graphDataPointsDiff, label: 'שינוי בניקוד מיום קודם' },
            { data: this.graphDataPlaces, label: 'מקום' },
            { data: this.graphDataPoints, label: 'ניקוד' }
        ];
        this.chartLabels = this.graphDataDates;
        this.chartColors = [
            {
                backgroundColor: 'rgba(220,220,220,0.2)',
                borderColor: 'rgba(220,220,220,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(220,220,220,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(220,220,220,1)'
            },
            {
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(151,187,205,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(151,187,205,1)'
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.graphService.currentAgentId);
        this.graphService.AgentIdUpdated.subscribe(function (agentId) {
            _this.graphService.getEnrollmentGraphData(function (agentGraphData) {
                _this.graphDataPoints = new Array();
                _this.graphDataPlaces = new Array();
                _this.graphDataPointsDiff = new Array();
                _this.graphDataDates = new Array();
                console.log(agentGraphData);
                for (var _i = 0, agentGraphData_1 = agentGraphData; _i < agentGraphData_1.length; _i++) {
                    var agentData = agentGraphData_1[_i];
                    if (_this.agentService.checkIfAgentConnected()) {
                        var tempAgent = new __WEBPACK_IMPORTED_MODULE_4__shared_models_graph_model__["a" /* Graph */](agentData.salesDate, agentData.place, agentData.points, agentData.pointsDiff);
                        //tempAgent.setAgent(agentData);
                        //console.log(tempAgent.salesDate.getDay().toString());
                        _this.graphDataPoints.push(tempAgent.points);
                        _this.graphDataPlaces.push(tempAgent.place);
                        _this.graphDataPointsDiff.push(tempAgent.pointsDiff);
                        _this.graphDataDates.push(tempAgent.salesDate.toString().substr(0, 10));
                        console.log(tempAgent.salesDate.toString());
                        console.log(_this.graphDataPoints);
                        console.log(_this.graphDataPlaces);
                        console.log(_this.graphDataPointsDiff);
                        console.log(_this.graphDataDates);
                    }
                    else {
                        window.location.reload();
                    }
                }
                _this.chartDatasets = [
                    { data: _this.graphDataPointsDiff, label: 'שינוי בניקוד מיום קודם' },
                    { data: _this.graphDataPlaces, label: 'מקום' },
                    { data: _this.graphDataPoints, label: 'ניקוד' }
                ];
                _this.chartLabels = _this.graphDataDates;
                //this.chartLabels.forEach((cl:Date) => {console.log(cl.getDay())})
                //after loading 
                _this.isLoading = false;
            }, function (error) {
                var status = error.statusText;
                var authorized = "ok";
                var unauthorized = "unauthorized";
                if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                    alert("עלייך להתחבר מחדש.");
                    _this.agentService.agentSignOut();
                }
            });
            //this.getEnrollmentGraphData();
        });
        //if (!(this.graphService.currentAgentId==null)) {
        //this.loadHistory();
    };
    GraphComponent.prototype.chartClicked = function (e) {
    };
    GraphComponent.prototype.chartHovered = function (e) {
    };
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-graph',
            template: __webpack_require__("../../../../../src/app/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_graph_service__["a" /* GraphService */]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    /* background-color: rgb(123, 108, 255); */\r\n    /* background: rgba(223, 223, 223, 0.432); */\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.transparent-background{\r\n    background: rgba(223, 223, 223, 0.432);\r\n}\r\n\r\n.brand-logo{\r\n    cursor: pointer;\r\n}\r\n\r\n.brand-logo:focus{\r\n    outline:0;\r\n}\r\n\r\n.btn-floating{\r\n    background-color: #f1f1f173;\r\n}\r\n\r\n#mobile-menu{\r\n    padding-right: 0;\r\n    z-index: 1;\r\n    padding-top: 70px;\r\n    background-color: #ffffff;\r\n    color: red;\r\n}\r\n\r\n.logo-img{\r\n    max-height: 50px; \r\n    padding-top: 10px; \r\n    margin: 0 15px 0 15px;\r\n}\r\n\r\n.colored-background{\r\n    background-color: rgb(116, 130, 255);\r\n}\r\n\r\n.navbar-fixed{\r\n    position: fixed;\r\n}\r\n\r\nnav{\r\n    background-color: transparent;\r\n    -webkit-box-shadow: 0 3px 20px rgba(0, 0, 0, 0.219);\r\n            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.219); \r\n}\r\n\r\nnav ul a, nav a{\r\n    text-shadow: 1px 1px 5px rgba(85, 85, 85, 0.89);\r\n}\r\n\r\n.mobile-menu-link{\r\n    text-shadow: 0 0 0 transparent !important;\r\n}\r\n\r\n.brand-logo{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\"> \r\n    \r\n    <nav \r\n    [ngClass]=\"{'transparent-background' : isHeaderTransparent , 'colored-background' : !isHeaderTransparent}\" \r\n    class=\"navbar\">\r\n      <div class=\"container\">\r\n        <div class=\"nav-wrapper\">\r\n            <!-- Site logo -->\r\n            <div class=\"left\">\r\n              <div class=\"brand-logo\" [routerLink]=\"['/']\">\r\n                    <div class=\"col s8 right\">\r\n                        <a>MobileStore</a>\r\n                    </div>\r\n\r\n                    <div class=\"col s4 left\">\r\n                        <img \r\n                            src=\"https://media.freepik.com/accounts/img/badges/you_are_on_top.png\" \r\n                            class=\"logo-img\">\r\n                    </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Site Menu -->\r\n            <div *ngIf=\"checkIfAgentConnected()\">\r\n                <div class=\"right\">\r\n                    <a\r\n                        href=\"#\"  \r\n                        materialize=\"sideNav\" \r\n                        data-activates=\"mobile-menu\" \r\n                        class=\"button-collapse\">\r\n                        <i class=\"material-icons\">menu</i>\r\n                    </a>\r\n                </div>\r\n            \r\n                <!-- web menu -->\r\n                <div class=\"right\">\r\n                    <ul id=\"nav-mobile\" class=\"hide-on-med-and-down\">\r\n                        <li *ngIf=\"!checkIfAgentConnected()\"><a [routerLink]=\"['/sign-in']\">התחבר</a></li>\r\n                        <li *ngIf=\"checkIfAgentConnected()\"><a (click)=\"signOut()\">התנתק</a></li>\r\n                        <li><a [routerLink]=\"['/activity']\">פעילויות</a></li>\r\n                        <li><a [routerLink]=\"['/home']\">דף הבית</a></li>\r\n                        <!-- <li><a><i class=\"material-icons\">email</i></a></li> -->\r\n                        <li><a class=\"btn btn-floating pulse\"><i class=\"material-icons\">email</i></a></li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <!-- mobile menu -->\r\n                <app-mobile-menu></app-mobile-menu>\r\n            </div>                       \r\n        </div>\r\n      </div>\r\n    </nav>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, agentService) {
        this.router = router;
        this.agentService = agentService;
        this.isSignInPage = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (events) {
            if (events.url != undefined && (events.url == "/sign-in" || events.url == "/")) {
                _this.isHeaderTransparent = false;
                _this.isSignInPage = true;
            }
            else {
                _this.isHeaderTransparent = true;
                _this.isSignInPage = false;
            }
        });
    };
    HeaderComponent.prototype.checkIfAgentConnected = function () {
        var isConnected = this.agentService.checkIfAgentConnected();
        if (!this.isSignInPage && !isConnected) {
            window.location.reload();
        }
        return isConnected;
    };
    HeaderComponent.prototype.signOut = function () {
        this.agentService.agentSignOut();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_agent_service__["a" /* AgentService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/mobile-menu/mobile-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/mobile-menu/mobile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"mobile-menu\" class=\"side-nav\" style=\"padding:0\">\r\n    <!-- agent Data -->\r\n    <li>\r\n        <div class=\"user-view\">\r\n            <div class=\"background\">\r\n                <img style=\"height:160px; width:300px;\" \r\n                    src=\"assets/background/user-profile-bg.jpg\">\r\n            </div>\r\n            <a><img class=\"circle\" src=\"assets/background/user-profile-img.png\"></a>\r\n            <a><span *ngIf=\"!getAgentData().isAdmin\" class=\"white-text name\">{{getAgentData().agentName}}</span></a>\r\n            <a><span *ngIf=\"getAgentData().isAdmin\" class=\"white-text name\">{{getAgentData().agentName}} - מנהל/ת</span></a>\r\n            <a><span class=\"white-text email\">{{getAgentData().agentEmail}}</span></a>\r\n        </div>\r\n    </li>\r\n\r\n    <!-- menu -->\r\n    <div *ngIf=\"checkIfAgentConnected()\">\r\n        <li>\r\n            <a class=\"subheader mobile-menu-link\">תפריט</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"mobile-menu-link waves-effect\" [routerLink]=\"['/home']\">דף הבית</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"mobile-menu-link waves-effect\" [routerLink]=\"['/activity']\" data-activates=\"mobile-menu\">פעילויות</a>\r\n        </li>\r\n        <li>\r\n            <a>\r\n                הודעות \r\n                <i class=\"material-icons\">email</i>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <div class=\"divider\"></div>\r\n        </li>\r\n    </div>\r\n\r\n    <li><a class=\"subheader mobile-menu-link\">התחברות</a></li>\r\n    <li *ngIf=\"!checkIfAgentConnected()\">\r\n        <a class=\"mobile-menu-link waves-effect\" [routerLink]=\"['/sign-in']\">התחבר</a>\r\n    </li>\r\n    <li *ngIf=\"checkIfAgentConnected()\">\r\n        <a class=\"mobile-menu-link waves-effect\" (click)=\"signOut()\">התנתק</a>\r\n    </li>\r\n</ul> \r\n"

/***/ }),

/***/ "../../../../../src/app/header/mobile-menu/mobile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MobileMenuComponent = (function () {
    function MobileMenuComponent(agentService) {
        this.agentService = agentService;
    }
    MobileMenuComponent.prototype.getAgentData = function () {
        return this.agentService.getAgentData();
    };
    MobileMenuComponent.prototype.checkIfAgentConnected = function () {
        return this.agentService.checkIfAgentConnected();
    };
    MobileMenuComponent.prototype.signOut = function () {
        this.agentService.agentSignOut();
    };
    MobileMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mobile-menu',
            template: __webpack_require__("../../../../../src/app/header/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/mobile-menu/mobile-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_agent_service__["a" /* AgentService */]])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    direction: rtl;\r\n}\r\n\r\nh3 , h1 , h5 ,.message-text{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.message-btn{\r\n    margin: 0 5px 0 5px;\r\n}\r\n\r\n.message-text{\r\n    font-size: 25px;\r\n}\r\n\r\n/* .main-div{\r\n    background-color: #ffffff38;\r\n    box-shadow: 0 0 15px #00000078;\r\n    padding: 5px 0 5px 0;\r\n    border-radius: 2px;\r\n    transition: 0.5s;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <h3 class=\"center-align\">ברוכים הבאים לפעילויות!</h3>\r\n            <h3 class=\"center-align\">שלום, {{agent.agentName}}</h3>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row center-align\">\r\n        <div class=\"col s12\">\r\n            <a class=\"message-btn btn btn-floating btn-large cyan pulse\"><i class=\"material-icons\">email</i></a>\r\n            <br>\r\n            <span class=\"message-text\">{{agent.agentName}}, יש לך 3 הודעות חדשות</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesComponent = (function () {
    function ActivitiesComponent(agentService) {
        this.agentService = agentService;
        this.agent = this.agentService.getAgentData();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-activities',
            template: __webpack_require__("../../../../../src/app/home/activities/activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_agent_service__["a" /* AgentService */]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/activity/activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-div{\r\n    padding-top: 100px;\r\n}\r\n\r\n.dropdown-content li > a > i{\r\n    margin: 0;\r\n}\r\n\r\nul{\r\n    padding-right: 0;\r\n}\r\n\r\n.tabs{\r\n    text-align: center;\r\n    background-color: transparent;\r\n    text-shadow: 0 0 5px rgba(0, 0, 0, 0.692);\r\n}\r\n\r\n.tabs .tab a.active{\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.tabs .tab a{\r\n    color: rgba(255, 255, 255, 0.78);\r\n}\r\n\r\n.tabs .tab a:hover{\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.tabs .indicator{\r\n    background-color: #c8d1ff;\r\n}\r\n\r\n.dropdown-content li{\r\n    text-align: right;\r\n}\r\n\r\n.navigation-buttons{\r\n    bottom: 80px;\r\n    margin-bottom: 40px;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\ntd{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbutton{\r\n    margin: 0 5px 0 5px;\r\n}\r\n\r\n.fade-in-div{\r\n    -webkit-animation: fade-in-div 1s linear backwards;\r\n            animation: fade-in-div 1s linear backwards;\r\n}\r\n\r\n.fade-out-div{\r\n    -webkit-animation: fade-out-div 1s linear forwards;\r\n            animation: fade-out-div 1s linear forwards;\r\n}\r\n\r\n.no-effect{\r\n    opacity: 1;\r\n}\r\n\r\n@-webkit-keyframes fade-in-div{\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fade-in-div{\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes fade-out-div{\r\n    0%{\r\n        opacity: 1;\r\n    }\r\n    100%{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes fade-out-div{\r\n    0%{\r\n        opacity: 1;\r\n    }\r\n    100%{\r\n        opacity: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"video-background\"></div> -->\r\n\r\n<video loop autoplay muted>\r\n    <source [src]=\"setVideoBackground()\" type=\"video/mp4\">\r\n</video>\r\n\r\n<div class=\"container table-div\">\r\n    <ul \r\n    id=\"tabs-swipe tabs-fixed-width\" \r\n    class=\"tabs\" \r\n    materialize=\"tabs\" \r\n    swipeable=\"true\" \r\n    *ngIf=\"(links?.length && showMenu) || (links?.length && !isHomePage)\">\r\n        <li\r\n            *ngFor=\"let link of links; let i = index\"\r\n             \r\n            (click)=\"setPage(i)\"\r\n            style=\"cursor:pointer;\"  \r\n            class=\"tab col s3\">\r\n            <a \r\n                [routerLink]=\"['/activity' + link.urlPath]\" \r\n                [ngClass]=\"{active : currentPage == i}\">\r\n                {{link.linkName}}\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n<!-- class=\"container\"  -->\r\n\r\n<div \r\n[ngClass]=\"{'fade-in-div':true , 'fade-out-div':fadeOut , 'no-effect':noEffect}\">\r\n    <router-outlet></router-outlet>  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__ = __webpack_require__("../../../../../src/app/shared/models/link.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_screen_settings_service__ = __webpack_require__("../../../../../src/app/shared/services/screen-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityComponent = (function () {
    function ActivityComponent(screenSettingsService, router) {
        this.screenSettingsService = screenSettingsService;
        this.router = router;
        this.links = new Array();
        this.showMenu = true;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadLinks();
        this.activeLink(this.router.url, this.links);
        this.startHomeAndNavigate('championship', '/championship');
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* NavigationEnd */]) {
                _this.activeLink(event.url, _this.links);
            }
        });
    };
    ActivityComponent.prototype.startHomeAndNavigate = function (path, routeToActive) {
        var _this = this;
        if (this.isHomePage) {
            this.showMenu = false;
            this.fadeIn = true;
            setTimeout(function () {
                _this.fadeOut = true;
                _this.fadeIn = false;
                setTimeout(function () {
                    _this.fadeIn = false;
                    _this.fadeOut = false;
                    _this.noEffect = true;
                    _this.router.navigate(['/activity', path]);
                    _this.activeLink(routeToActive, _this.links);
                    _this.showMenu = true;
                }, 2000);
            }, 4000);
        }
        else {
            this.noEffect = true;
            this.fadeIn = false;
            this.fadeOut = false;
        }
    };
    ActivityComponent.prototype.loadLinks = function () {
        (_a = this.links).push.apply(_a, [
            new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("", "דף ראשי"),
            new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/championship", "אליפויות", [
                new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/championship/champion-of-month", "אלוף החודש"),
                new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/championship/champion-of-quarter", "אלוף הרבעון"),
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/ongoing-activities", "פעילויות שוטפות", [
                new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/ongoing-activities/sales", "מכירות"),
                new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/ongoing-activities/customer-retention", "שימור וגיוס לקוחות"),
                new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/ongoing-activities/featured-products", "מוצרים נבחרים"),
                new __WEBPACK_IMPORTED_MODULE_1__shared_models_link_model__["a" /* Link */]("/ongoing-activities/discount-for-customer", "הנחה ללקוחות")
            ])
            // all links
            // new Link("" , "דף ראשי"),
            // new Link("/championship" , "אליפויות"),
            // new Link("/championship/champion-of-month" , "אלוף החודש"),
            // new Link("/championship/champion-of-quarter" , "אלוף הרבעון"),
            // new Link("/ongoing-activities", "פעילויות שוטפות" ),
            // new Link("/ongoing-activities/sales" ,"מכירות"),
            // new Link("/ongoing-activities/customer-retention" ,"שימור וגיוס לקוחות"),
            // new Link("/ongoing-activities/featured-products" ,"מוצרים נבחרים"),
            // new Link("/ongoing-activities/discount-for-customer" ,"הנחה ללקוחות")
        ]);
        var _a;
    };
    ActivityComponent.prototype.activeLink = function (currentUrl, arrOfLinks) {
        var _this = this;
        console.log(currentUrl);
        var index = arrOfLinks.filter(function (link, index) {
            if (currentUrl == '/activity') {
                if (link.urlPath == '') {
                    _this.isHomePage = true;
                    _this.setPage(index);
                }
            }
            else if (currentUrl.toLocaleLowerCase().indexOf(link.urlPath.toLocaleLowerCase()) > -1) {
                _this.isHomePage = false;
                _this.setPage(index);
            }
        });
    };
    ActivityComponent.prototype.setPage = function (index) {
        console.log(index + 1);
        this.currentPage = index;
        window.scrollTo(0, 0);
    };
    ActivityComponent.prototype.setVideoBackground = function () {
        return this.screenSettingsService.getVideoBackground();
    };
    ActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-activity',
            template: __webpack_require__("../../../../../src/app/home/activities/activity/activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_screen_settings_service__["a" /* ScreenSettingsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(255, 242, 242, 0.22);}\r\n\r\n.collapsible-header{\r\n    background-color: rgba(255, 255, 255, 0.76);\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.collapsible-body{\r\n    background-color: transparent;\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n}\r\n\r\n.center-div{\r\n    padding: 15px 0;\r\n    text-align: center;\r\n}\r\n\r\n.circle-clipper{\r\n    border-color: #0004ffab;\r\n}\r\n\r\n.no-padding{\r\n    padding: 0;\r\n}\r\n\r\n.no-margin{\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentId}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מספר סוכן : </span>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.points}}?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד : </span>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>עמידה ביעד מכירות : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>עמידה ביעד גיוס ושימור : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מכירת מוצרים נבחרים : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>אחוז הנחה משוקלל : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agent.points}} ?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>סה\"כ ניקוד : </span>\r\n                            </div>\r\n                        </div>  \r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n    "

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionOfMonthHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChampionOfMonthHistoryComponent = (function () {
    function ChampionOfMonthHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    ChampionOfMonthHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    ChampionOfMonthHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], ChampionOfMonthHistoryComponent.prototype, "agent", void 0);
    ChampionOfMonthHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-champion-of-month-history',
            template: __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month-history/champion-of-month-history.component.css"), __webpack_require__("../../../../../src/styles/history-collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */]])
    ], ChampionOfMonthHistoryComponent);
    return ChampionOfMonthHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(209, 209, 209, 0);\r\n}\r\n\r\n.collapsible-header{\r\n    background-color: #ffffffda;\r\n    transition: 0.5s;\r\n    color: black;\r\n    border-bottom: 1px solid #00000026;\r\n}\r\n\r\n.collapsible-body{\r\n    border-bottom: 1px solid #00000026;\r\n    background-color: #ffffff62;\r\n    color: black;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n\r\n.center-div{\r\n    padding: 70px 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-agent-div{\r\n    background-color:#6969ffe8;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    animation: fade-in 0.5s linear;\r\n}\r\n\r\nul{\r\n    overflow-x: hidden;\r\n}\r\n\r\n@keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        transform: translateX(0px);\r\n    }\r\n} */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">                \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                ניקוד : {{agent.points}} ?\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>עמידה ביעד מכירות : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>עמידה ביעד גיוס ושימור : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מכירת מוצרים נבחרים : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>אחוז הנחה משוקלל : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.points}} ?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>סה\"כ ניקוד : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <app-champion-of-month-history [agent]=\"agent\"></app-champion-of-month-history>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionOfMonthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChampionOfMonthComponent = (function () {
    function ChampionOfMonthComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 2000;
        this.isLoading = true;
    }
    ChampionOfMonthComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    ChampionOfMonthComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    ChampionOfMonthComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    ChampionOfMonthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-champion-of-month',
            template: __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/championship/champion-of-month/champion-of-month.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css"), __webpack_require__("../../../../../src/styles/collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */]])
    ], ChampionOfMonthComponent);
    return ChampionOfMonthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(255, 242, 242, 0.22);}\r\n\r\n.collapsible-header{\r\n    background-color: rgba(255, 255, 255, 0.76);\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.collapsible-body{\r\n    background-color: transparent;\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n}\r\n\r\n.center-div{\r\n    padding: 15px 0;\r\n    text-align: center;\r\n}\r\n\r\n.circle-clipper{\r\n    border-color: #0004ffab;\r\n}\r\n\r\n.no-padding{\r\n    padding: 0;\r\n}\r\n\r\n.no-margin{\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentId}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מספר סוכן : </span>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.points}}?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד : </span>\r\n                            </div>\r\n                        </div>  \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד חודש 1 : </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד חודש 2 : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד חודש 3 : </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agent.points}} ?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>סה\"כ ניקוד : </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionOfQuarterHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChampionOfQuarterHistoryComponent = (function () {
    function ChampionOfQuarterHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    ChampionOfQuarterHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    ChampionOfQuarterHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], ChampionOfQuarterHistoryComponent.prototype, "agent", void 0);
    ChampionOfQuarterHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-champion-of-quarter-history',
            template: __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter-history/champion-of-quarter-history.component.css"), __webpack_require__("../../../../../src/styles/history-collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], ChampionOfQuarterHistoryComponent);
    return ChampionOfQuarterHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(209, 209, 209, 0);\r\n}\r\n\r\n.collapsible-header{\r\n    background-color: #ffffffda;\r\n    transition: 0.5s;\r\n    color: black;\r\n    border-bottom: 1px solid #00000026;\r\n}\r\n\r\n.collapsible-body{\r\n    border-bottom: 1px solid #00000026;\r\n    background-color: #ffffff62;\r\n    color: black;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n\r\n.center-div{\r\n    padding: 70px 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-agent-div{\r\n    background-color:#6969ffe8;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    animation: fade-in-scroll-x 0.5s linear;\r\n}\r\n\r\nul{\r\n    overflow-x: hidden;\r\n}\r\n\r\n@keyframes fade-in-scroll-x{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        transform: translateX(0px);\r\n    }\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">                \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                ניקוד : {{agent.points}} ?\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                            </div> \r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>ניקוד חודש 1 : </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>ניקוד חודש 2 : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>ניקוד חודש 3 : </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.points}} ?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>סה\"כ ניקוד : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <app-champion-of-quarter-history [agent]=\"agent\"></app-champion-of-quarter-history>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionOfQuarterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChampionOfQuarterComponent = (function () {
    function ChampionOfQuarterComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 2000;
        this.isLoading = true;
    }
    ChampionOfQuarterComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    ChampionOfQuarterComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    ChampionOfQuarterComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    ChampionOfQuarterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-champion-of-quarter',
            template: __webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/championship/champion-of-quarter/champion-of-quarter.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css"), __webpack_require__("../../../../../src/styles/collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], ChampionOfQuarterComponent);
    return ChampionOfQuarterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/championship/championship.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* h3 , h5 , h1{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/championship.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center-align\">\r\n  אליפויות\r\n</h1>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col xl6 l6 m12 s12 right\">\r\n        <div class=\"row\">\r\n            <div class=\"col xl12 l12 m12 s12\">\r\n                <div class=\"main-div\">\r\n                    <div class=\"center-align\">\r\n                        <h3>\r\n                            אליפות חודש {{date | date:\"MM\" | hebDate:date:true}}\r\n                        </h3>\r\n                        <a (click)=\"displayChampionOfMonth()\" \r\n                        class=\"btn btn-large blue pulse\"\r\n                        *ngIf=\"!showChampionOfMonth\">\r\n                        גלה לי לאיזה מקום הגעתי!\r\n                        </a>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"showChampionOfMonth\">\r\n                        <app-champion-of-month></app-champion-of-month>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col xl12 l12 m12 s12\">\r\n                <div class=\"main-div\">\r\n                    <div class=\"center-align\">\r\n                        <h3>\r\n                            אליפויות רבעון X\r\n                        </h3>\r\n                        <a (click)=\"displayChampionOfQuarter()\" \r\n                        class=\"btn btn-large green pulse\"\r\n                        *ngIf=\"!showChampionOfQuarter\">\r\n                        גלה לי לאיזה מקום הגעתי!\r\n                        </a>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"showChampionOfQuarter\">\r\n                        <app-champion-of-quarter></app-champion-of-quarter>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    אליפות חודש {{date | date:\"MM\" | hebDate:date:true}}\r\n                </h3>\r\n                <a (click)=\"displayChampionOfMonth()\" \r\n                class=\"btn btn-large blue pulse\"\r\n                *ngIf=\"!showChampionOfMonth\">\r\n                גלה לי לאיזה מקום הגעתי!\r\n                </a>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"showChampionOfMonth\">\r\n                <app-champion-of-month></app-champion-of-month>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <!-- <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    אליפויות רבעון X\r\n                </h3>\r\n                <a (click)=\"displayChampionOfQuarter()\" \r\n                class=\"btn btn-large green pulse\"\r\n                *ngIf=\"!showChampionOfQuarter\">\r\n                גלה לי לאיזה מקום הגעתי!\r\n                </a>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"showChampionOfQuarter\">\r\n                <app-champion-of-quarter></app-champion-of-quarter>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/activities/championship/championship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionshipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChampionshipComponent = (function () {
    function ChampionshipComponent() {
        this.date = new Date();
    }
    ChampionshipComponent.prototype.ngOnInit = function () {
    };
    ChampionshipComponent.prototype.displayChampionOfMonth = function () {
        this.showChampionOfMonth = !this.showChampionOfMonth;
    };
    ChampionshipComponent.prototype.displayChampionOfQuarter = function () {
        this.showChampionOfQuarter = !this.showChampionOfQuarter;
    };
    ChampionshipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-championship',
            template: __webpack_require__("../../../../../src/app/home/activities/championship/championship.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/championship/championship.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChampionshipComponent);
    return ChampionshipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(209, 209, 209, 0);\r\n}\r\n\r\n.collapsible-header{\r\n    background-color: #ffffffda;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    color: black;\r\n    border-bottom: 1px solid #00000026;\r\n}\r\n\r\n.collapsible-body{\r\n    border-bottom: 1px solid #00000026;\r\n    background-color: #ffffff62;\r\n    color: black;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n\r\n.center-div{\r\n    padding: 70px 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-agent-div{\r\n    background-color:#6969ffe8;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    -webkit-animation: fade-in 0.5s linear;\r\n            animation: fade-in 0.5s linear;\r\n}\r\n\r\nul{\r\n    overflow-x: hidden;\r\n}\r\n\r\n@-webkit-keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">\r\n            <h3 class=\"center-align\">Enroll Activity</h3>\r\n            \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                מספר סוכן : {{agent.agentId}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                        \r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.target | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>יעד ניקוד : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.percOfTarget| number:'1.0-2'}}%</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>אחוז עמידה ביעד : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.points}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>ניקוד לפעילות : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.sumOfSales| number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>סכום מכירה מצטבר ל{{agent.activityDate | date:\"MM\" | hebDate:agent.activityDate:true}} : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <app-enroll-agent-history [agent]=\"agent\"></app-enroll-agent-history>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n                \r\n                \r\n            "

/***/ }),

/***/ "../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollActivityComponent = (function () {
    function EnrollActivityComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 1000;
        this.isLoading = true;
    }
    EnrollActivityComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    EnrollActivityComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_2__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    EnrollActivityComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    EnrollActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-enroll-activity',
            template: __webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-activity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], EnrollActivityComponent);
    return EnrollActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(255, 242, 242, 0.22);}\r\n\r\n.collapsible-header{\r\n    background-color: rgba(255, 255, 255, 0.76);\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.collapsible-body{\r\n    background-color: transparent;\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n}\r\n\r\n.center-div{\r\n    padding: 15px 0;\r\n    text-align: center;\r\n}\r\n\r\n.circle-clipper{\r\n    border-color: #0004ffab;\r\n}\r\n\r\n.no-padding{\r\n    padding: 0;\r\n}\r\n\r\n.no-margin{\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                          <div class=\"row\">\r\n                              <div class=\"col s6\">\r\n                                  <span>{{agentHistory.target | number:'1.2-2'}}</span>\r\n                              </div>\r\n                              <div class=\"col s6\">\r\n                                  <span>יעד ניקוד : </span>\r\n                              </div>\r\n                          </div> \r\n                          <div class=\"row\">\r\n                              <div class=\"col s6\">\r\n                                  <span>{{agentHistory.percOfTarget | number:'1.2-2'}}%</span>\r\n                              </div>\r\n                              <div class=\"col s6\">\r\n                                  <span>אחוז עמידה ביעד : </span>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col s6\">\r\n                                  <span>{{agentHistory.points}}</span>\r\n                              </div>\r\n                              <div class=\"col s6\">\r\n                                  <span>ניקוד לפעילות : </span>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col s6\">\r\n                                  <span>{{agentHistory.sumOfSales | number:'1.2-2'}}</span>\r\n                              </div>\r\n                              <div class=\"col s6\">\r\n                                  <span>סכום מכירה מצטבר {{agentHistory.activityDate | date:\"MM\" | hebDate:agentHistory.activityDate:true}} : </span>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n    "

/***/ }),

/***/ "../../../../../src/app/home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollAgentHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollAgentHistoryComponent = (function () {
    function EnrollAgentHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    EnrollAgentHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    EnrollAgentHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], EnrollAgentHistoryComponent.prototype, "agent", void 0);
    EnrollAgentHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-enroll-agent-history',
            template: __webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/enroll-activity/enroll-agent-history/enroll-agent-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], EnrollAgentHistoryComponent);
    return EnrollAgentHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentId}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מספר סוכן : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentPlace}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מיקום : </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.points}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד : </span>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.percOfTarget | number:'1.0-2'}}%</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>אחוז עמידה ביעד לתקופה : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>כמות לקוחות עם שימור : </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>כמות גיוס לקוחות : </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>יעד ניקוד שימור וגיוס : </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n        "

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRetentionHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerRetentionHistoryComponent = (function () {
    function CustomerRetentionHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    CustomerRetentionHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    CustomerRetentionHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], CustomerRetentionHistoryComponent.prototype, "agent", void 0);
    CustomerRetentionHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-retention--history',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention--history/customer-retention--history.component.css"), __webpack_require__("../../../../../src/styles/history-collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], CustomerRetentionHistoryComponent);
    return CustomerRetentionHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">                \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\" (click)=\"passAgent4Graph(agent.agentId)\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                אחוז עמידה ביעד לתקופה : {{agent.percOfTarget| number:'1.0-2'}}%\r\n                                <br>\r\n                                ניקוד : {{agent.points}}\r\n                            </div>  \r\n                        </div>\r\n                            \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>כמות לקוחות עם שימור : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>כמות גיוס לקוחות : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>יעד ניקוד שימור וגיוס : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <app-customer-retention--history [agent]=\"agent\"></app-customer-retention--history>\r\n                            \r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n    "

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRetentionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_graph_service__ = __webpack_require__("../../../../../src/app/shared/services/graph.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerRetentionComponent = (function () {
    function CustomerRetentionComponent(activityService, agentService, graphService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.graphService = graphService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 200;
        this.isLoading = true;
    }
    CustomerRetentionComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    CustomerRetentionComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    CustomerRetentionComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    CustomerRetentionComponent.prototype.passAgent4Graph = function (agentId) {
        console.log(agentId);
        this.graphService.passAgent4Graph(agentId);
    };
    CustomerRetentionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-retention',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/customer-retention/customer-retention.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css"), __webpack_require__("../../../../../src/styles/collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_graph_service__["a" /* GraphService */]])
    ], CustomerRetentionComponent);
    return CustomerRetentionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentId}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מספר סוכן : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentPlace}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מיקום : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.points}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד : </span>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.sumOfSales | number:'1.0-2'}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>סה\"כ מכירות : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>אחוז הנחה ממחירון : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>יעד הנחה : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>?</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>אחוז עמידה ביעד : </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n    "

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountForCustomerHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscountForCustomerHistoryComponent = (function () {
    function DiscountForCustomerHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    DiscountForCustomerHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    DiscountForCustomerHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], DiscountForCustomerHistoryComponent.prototype, "agent", void 0);
    DiscountForCustomerHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-discount-for-customer-history',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer-history/discount-for-customer-history.component.css"), __webpack_require__("../../../../../src/styles/history-collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], DiscountForCustomerHistoryComponent);
    return DiscountForCustomerHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">                \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                אחוז עמידה ביעד : {{agent.percOfTarget| number:'1.0-2'}}%\r\n                                <br>\r\n                                ניקוד : {{agent.points}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.sumOfSales | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>סה\"כ מכירות : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>אחוז הנחה ממחירון : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>?</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>יעד הנחה : </span>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <!-- history -->\r\n                            <app-discount-for-customer-history [agent]=\"agent\"></app-discount-for-customer-history>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n        "

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountForCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscountForCustomerComponent = (function () {
    function DiscountForCustomerComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 2000;
        this.isLoading = true;
    }
    DiscountForCustomerComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    DiscountForCustomerComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    DiscountForCustomerComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    DiscountForCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-discount-for-customer',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/discount-for-customer/discount-for-customer.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css"), __webpack_require__("../../../../../src/styles/collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], DiscountForCustomerComponent);
    return DiscountForCustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentId}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מספר סוכן : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentPlace}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מיקום : </span>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.percOfTarget| number:'1.0-2'}}%</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>אחוז עמידה ביעד לתקופה : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.points}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.sumOfSales | number:'1.0-2'}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>סה\"כ מכירות למוצרים : </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.target | number:'1.0-2'}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>יעד מכירות : </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n        \r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturedProductsHistoryComponent = (function () {
    function FeaturedProductsHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    FeaturedProductsHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    FeaturedProductsHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], FeaturedProductsHistoryComponent.prototype, "agent", void 0);
    FeaturedProductsHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-featured-products-history',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products-history/featured-products-history.component.css"), __webpack_require__("../../../../../src/styles/history-collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], FeaturedProductsHistoryComponent);
    return FeaturedProductsHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">                \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                אחוז עמידה ביעד לתקופה : {{agent.percOfTarget| number:'1.0-2'}}%\r\n                                <br>\r\n                                ניקוד : {{agent.points}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.sumOfSales | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>סה\"כ מכירות למוצרים : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.target | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>יעד מכירות : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <app-featured-products-history [agent]=\"agent\"></app-featured-products-history>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n            \r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 2000;
        this.isLoading = true;
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    FeaturedProductsComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    FeaturedProductsComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    FeaturedProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-featured-products',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/featured-products/featured-products.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css"), __webpack_require__("../../../../../src/styles/collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */]])
    ], FeaturedProductsComponent);
    return FeaturedProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    מכירות\r\n                </h3>\r\n                <a  (click)=\"displaySales()\" \r\n                    class=\"btn btn-large blue pulse\"\r\n                    *ngIf=\"!showSales\">\r\n                    גלה לי לאיזה מקום הגעתי!\r\n                </a>\r\n            </div>\r\n            <div *ngIf=\"showSales\">\r\n                <app-sales></app-sales>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    מוצרים נבחרים\r\n                </h3>\r\n                <a  (click)=\"displayFeaturedProducts()\" \r\n                    class=\"btn btn-large green pulse\"\r\n                    *ngIf=\"!showFeaturedProducts\">\r\n                    גלה לי לאיזה מקום הגעתי!\r\n                </a>\r\n            </div>\r\n            <div *ngIf=\"showFeaturedProducts\">\r\n                <app-featured-products></app-featured-products>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    הנחה ללקוחות\r\n                </h3>\r\n                <a  (click)=\"displayDiscountForCustomer()\" \r\n                    class=\"btn btn-large yellow pulse\"\r\n                    *ngIf=\"!showDiscountForCustomer\">\r\n                    גלה לי לאיזה מקום הגעתי!\r\n                </a>\r\n            </div>\r\n            <div *ngIf=\"showDiscountForCustomer\">\r\n                <app-discount-for-customer></app-discount-for-customer>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    שימור וגיוס לקוחות \r\n                </h3>\r\n                <a  (click)=\"displayCustomerRetention()\" \r\n                    class=\"btn btn-large red pulse\"\r\n                    *ngIf=\"!showCustomerRetention\">\r\n                    גלה לי לאיזה מקום הגעתי!\r\n                </a>\r\n            </div>\r\n            <div *ngIf=\"showCustomerRetention\">\r\n                <app-customer-retention></app-customer-retention>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col xl6 l6 m12 s12\">\r\n        <div class=\"main-div\">\r\n            <div class=\"center-align\">\r\n                <h3>\r\n                    גרף \r\n                </h3>\r\n                <a  (click)=\"displayGraph()\" \r\n                    class=\"btn btn-large red pulse\"\r\n                    *ngIf=\"!showGraph\">\r\n                    גרף\r\n                </a>\r\n            </div>\r\n            <div *ngIf=\"showGraph\">\r\n                <app-graph></app-graph>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainOngoingActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_graph_service__ = __webpack_require__("../../../../../src/app/shared/services/graph.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainOngoingActivitiesComponent = (function () {
    function MainOngoingActivitiesComponent(graphService) {
        this.graphService = graphService;
    }
    MainOngoingActivitiesComponent.prototype.ngOnInit = function () {
    };
    MainOngoingActivitiesComponent.prototype.displaySales = function () {
        this.showSales = !this.showSales;
    };
    MainOngoingActivitiesComponent.prototype.displayFeaturedProducts = function () {
        this.showFeaturedProducts = !this.showFeaturedProducts;
    };
    MainOngoingActivitiesComponent.prototype.displayDiscountForCustomer = function () {
        this.showDiscountForCustomer = !this.showDiscountForCustomer;
    };
    MainOngoingActivitiesComponent.prototype.displayCustomerRetention = function () {
        this.showCustomerRetention = !this.showCustomerRetention;
    };
    MainOngoingActivitiesComponent.prototype.displayGraph = function () {
        this.showGraph = !this.showGraph;
    };
    MainOngoingActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-ongoing-activities',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/main-ongoing-activities/main-ongoing-activities.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_graph_service__["a" /* GraphService */]])
    ], MainOngoingActivitiesComponent);
    return MainOngoingActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center-align\">\r\n    פעילויות שוטפות\r\n</h1>\r\n\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OngoingActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OngoingActivitiesComponent = (function () {
    function OngoingActivitiesComponent() {
    }
    OngoingActivitiesComponent.prototype.ngOnInit = function () {
    };
    OngoingActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ongoing-activities',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/ongoing-activities.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OngoingActivitiesComponent);
    return OngoingActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/sales/sales-history/sales-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/sales/sales-history/sales-history.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"collapsible\" data-collapsible=\"accordion\" materialize=\"collapsible\">\r\n    <li>\r\n        <div class=\"collapsible-header\" (click)=\"loadHistory()\">\r\n            <i class=\"material-icons\">account_circle</i>\r\n            היסטוריה\r\n        </div>\r\n\r\n        <div class=\"collapsible-body no-padding no-margin\">\r\n            <ul \r\n            *ngIf=\"!isLoading; else loading\"\r\n            class=\"collapsible no-margin\" \r\n            data-collapsible=\"accordion\" \r\n            materialize=\"collapsible\">   \r\n                <li\r\n                    *ngFor=\"let agentHistory of agent.agentHistory\">\r\n                    <div class=\"collapsible-header\">\r\n                            <i class=\"material-icons\">account_circle</i>\r\n                            {{agentHistory.activityDate | date:\"dd/MM/yyyy\"}}\r\n                    </div>\r\n                    \r\n                    <div class=\"collapsible-body\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentId}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מספר סוכן : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.agentPlace}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>מיקום : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.points}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>ניקוד : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.percOfTarget| number:'1.0-2'}}%</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>אחוז עמידה ביעד לתקופה : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.sumOfSales| number:'1.0-2'}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>סה\"כ מכירות : </span>\r\n                            </div>\r\n                        </div> \r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col s6\">\r\n                                <span>{{agentHistory.target | number:'1.0-2'}}</span>\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                <span>יעד מכירות : </span>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n        "

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/sales/sales-history/sales-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalesHistoryComponent = (function () {
    function SalesHistoryComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.isLoading = true;
    }
    SalesHistoryComponent.prototype.loadHistory = function () {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.getAgentActivityHistoy(this.agent.agentId);
        }
    };
    SalesHistoryComponent.prototype.getAgentActivityHistoy = function (agentId) {
        var _this = this;
        this.isLoading = true;
        this.activityService.getAgentEnrollActivitiesHistory(agentId, function (agentHistoryData) {
            if (_this.agent.agentHistory.length != 0)
                _this.agent.agentHistory = new Array();
            for (var _i = 0, agentHistoryData_1 = agentHistoryData; _i < agentHistoryData_1.length; _i++) {
                var agentData = agentHistoryData_1[_i];
                if (_this.agentService.checkIfAgentConnected()) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agentData);
                    _this.agent.agentHistory.push(tempAgent);
                }
                else {
                    window.location.reload();
                }
            }
            //after loading 
            _this.isLoading = false;
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */])
    ], SalesHistoryComponent.prototype, "agent", void 0);
    SalesHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sales-history',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales-history/sales-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales-history/sales-history.component.css"), __webpack_require__("../../../../../src/styles/history-collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */]])
    ], SalesHistoryComponent);
    return SalesHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">                \r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li *ngFor=\"let agent of enrollActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                אחוז עמידה ביעד לתקופה : {{agent.percOfTarget| number:'1.0-2'}}%\r\n                                <br>\r\n                                ניקוד : {{agent.points}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                                               \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                            </div> \r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.sumOfSales | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>סה\"כ מכירות : </span>\r\n                                </div>\r\n                            </div> \r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.target | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>יעד מכירות : </span>\r\n                                </div>\r\n                            </div> \r\n                        \r\n                            <!-- history -->\r\n                            <app-sales-history [agent]=\"agent\"></app-sales-history>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>\r\n            "

/***/ }),

/***/ "../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/enroll-activity-agent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SalesComponent = (function () {
    function SalesComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.enrollActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 2000;
        this.isLoading = true;
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.getEnrollActivities();
    };
    SalesComponent.prototype.getEnrollActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getEnrollActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_3__shared_models_enroll_activity_agent_model__["a" /* EnrollActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.enrollActivityAgents.unshift(tempAgent);
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    SalesComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    SalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sales',
            template: __webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/ongoing-activities/sales/sales.component.css"), __webpack_require__("../../../../../src/app/home/activities/activities.component.css"), __webpack_require__("../../../../../src/styles/collapsible.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/overall-activities/overall-activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(209, 209, 209, 0);\r\n}\r\n\r\n.collapsible-header{\r\n    background-color: #ffffffda;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    color: black;\r\n    border-bottom: 1px solid #00000026;\r\n}\r\n\r\n.collapsible-body{\r\n    border-bottom: 1px solid #00000026;\r\n    background-color: #ffffff62;\r\n    color: black;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n\r\n.center-div{\r\n    padding: 70px 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-agent-div{\r\n    background-color:#6969ffe8;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    -webkit-animation: fade-in 0.5s linear;\r\n            animation: fade-in 0.5s linear;\r\n}\r\n\r\nul{\r\n    overflow-x: hidden;\r\n}\r\n\r\n@-webkit-keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/overall-activities/overall-activities.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"video-background\"></div> -->\r\n\r\n<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">\r\n            <h3 class=\"center-align\">Overall Activities</h3>\r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li\r\n                        *ngFor=\"let agent of overallActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                מספר סוכן : {{agent.agentId}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                        \r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.enrollPoints}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>enroll points : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.overallPoints}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>overall points : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.retentionPoints}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>retention points : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <!-- <app-enroll-agent-history [agent]=\"agent\"></app-enroll-agent-history> -->\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/home/activities/overall-activities/overall-activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverallActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_overall_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/overall-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverallActivitiesComponent = (function () {
    function OverallActivitiesComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.overallActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 1000;
        this.isLoading = true;
    }
    OverallActivitiesComponent.prototype.ngOnInit = function () {
        this.getOverallActivities();
    };
    OverallActivitiesComponent.prototype.getOverallActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getOverallActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_2__shared_models_overall_activity_agent_model__["a" /* OverallActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.overallActivityAgents.unshift(tempAgent);
                    _this.index--;
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    OverallActivitiesComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    OverallActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-overall-activities',
            template: __webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-activities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_agent_service__["a" /* AgentService */]])
    ], OverallActivitiesComponent);
    return OverallActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/overall-activities/overall-agent-history/overall-agent-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/overall-activities/overall-agent-history/overall-agent-history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  overall-agent-history works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/overall-activities/overall-agent-history/overall-agent-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverallAgentHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverallAgentHistoryComponent = (function () {
    function OverallAgentHistoryComponent() {
    }
    OverallAgentHistoryComponent.prototype.ngOnInit = function () {
    };
    OverallAgentHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overall-agent-history',
            template: __webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-agent-history/overall-agent-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/overall-activities/overall-agent-history/overall-agent-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverallAgentHistoryComponent);
    return OverallAgentHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/retention-activity/retention-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 , h5{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(209, 209, 209, 0);\r\n}\r\n\r\n.collapsible-header{\r\n    background-color: #ffffffda;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    color: black;\r\n    border-bottom: 1px solid #00000026;\r\n}\r\n\r\n.collapsible-body{\r\n    border-bottom: 1px solid #00000026;\r\n    background-color: #ffffff62;\r\n    color: black;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n\r\n.center-div{\r\n    padding: 70px 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-agent-div{\r\n    background-color:#6969ffe8;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    -webkit-animation: fade-in 0.5s linear;\r\n            animation: fade-in 0.5s linear;\r\n}\r\n\r\nul{\r\n    overflow-x: hidden;\r\n}\r\n\r\n@-webkit-keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@keyframes fade-in{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/retention-activity/retention-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"video-background\"></div> -->\r\n\r\n<div class=\"fully-page\">\r\n    <div class=\"row\">\r\n        <div class=\"col xl12 col l12 col m12 col s12\">\r\n            <h3 class=\"center-align\">Retention Activity</h3>\r\n            <div *ngIf=\"!isLoading; else loading\">\r\n                <ul class=\"collapsible popout\" data-collapsible=\"accordion\" materialize=\"collapsible\">   \r\n                    <li\r\n                        *ngFor=\"let agent of retentionActivityAgents\">\r\n                        <div class=\"collapsible-header\"\r\n                            [ngClass]=\"{'current-agent-div' : agent.agentId == agentService.getAgentData().agentId}\">\r\n                            <i class=\"material-icons right\">account_circle</i>\r\n\r\n                            <div class=\"right\">\r\n                                <span class=\"bold\">מקום {{agent.agentPlace}} : {{agent.agentName}}</span> \r\n                                <br>\r\n                                מספר סוכן : {{agent.agentId}}\r\n                            </div>\r\n                            \r\n                        </div>\r\n                        \r\n                        <div class=\"collapsible-body\"> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.agentId}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר סוכן : </span>\r\n                                </div>\r\n                        \r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.numOfExistCust}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר לקוחות : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.numOfNewCust}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>מספר לקוחות חדשים : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.target | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>יעד ניקוד : </span>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.percOfTarget | number:'1.0-2'}}%</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>אחוז עמידה ביעד : </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s6\">\r\n                                    <span>{{agent.points | number:'1.0-2'}}</span>\r\n                                </div>\r\n                                <div class=\"col s6\">\r\n                                    <span>ניקוד לפעילות : </span>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <!-- history -->\r\n                            <!-- <app-enroll-agent-history [agent]=\"agent\"></app-enroll-agent-history> -->\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading> \r\n    <div class=\"center-div\">\r\n        <div class=\"preloader-wrapper big active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h5>אנא המתן...</h5>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/home/activities/retention-activity/retention-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetentionActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_retention_activity_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/retention-activity-agent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RetentionActivityComponent = (function () {
    function RetentionActivityComponent(activityService, agentService) {
        this.activityService = activityService;
        this.agentService = agentService;
        this.retentionActivityAgents = new Array();
        this.index = 0;
        this.timeForWaiting = 1000;
        this.isLoading = true;
    }
    RetentionActivityComponent.prototype.ngOnInit = function () {
        this.getRetentionActivities();
    };
    RetentionActivityComponent.prototype.getRetentionActivities = function () {
        var _this = this;
        this.isLoading = true;
        // Creating agent list using interval for delay
        this.activityService.getRetentionActivities(function (agents) {
            _this.index = agents.length - 1; //setting up interval
            _this.pushAgentInterval = setInterval(function () {
                _this.isLoading = false;
                var isConnected = _this.agentService.checkIfAgentConnected();
                if (_this.index >= 0 && isConnected) {
                    var tempAgent = new __WEBPACK_IMPORTED_MODULE_1__shared_models_retention_activity_agent_model__["a" /* RetentionActivityAgent */]();
                    tempAgent.setAgent(agents[_this.index]);
                    _this.retentionActivityAgents.unshift(tempAgent);
                    _this.index--;
                    _this.index--;
                }
                else if (!isConnected) {
                    _this.stopInterval();
                    window.location.reload();
                }
                else {
                    _this.stopInterval();
                }
            }, _this.timeForWaiting); // step length    
        }, function (error) {
            var status = error.statusText;
            var authorized = "ok";
            var unauthorized = "unauthorized";
            if (status.toLocaleLowerCase().indexOf(unauthorized) > -1) {
                alert("עלייך להתחבר מחדש.");
                _this.agentService.agentSignOut();
            }
        });
    };
    RetentionActivityComponent.prototype.stopInterval = function () {
        if (this.index < 0) {
            clearInterval(this.pushAgentInterval);
        }
    };
    RetentionActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-retention-activity',
            template: __webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-activity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_agent_service__["a" /* AgentService */]])
    ], RetentionActivityComponent);
    return RetentionActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/activities/retention-activity/retention-agent-history/retention-agent-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/activities/retention-activity/retention-agent-history/retention-agent-history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  retention-agent-history works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/activities/retention-activity/retention-agent-history/retention-agent-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetentionAgentHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RetentionAgentHistoryComponent = (function () {
    function RetentionAgentHistoryComponent() {
    }
    RetentionAgentHistoryComponent.prototype.ngOnInit = function () {
    };
    RetentionAgentHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-retention-agent-history',
            template: __webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-agent-history/retention-agent-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/activities/retention-activity/retention-agent-history/retention-agent-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RetentionAgentHistoryComponent);
    return RetentionAgentHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-padding{\r\n    padding: 0;\r\n}\r\n\r\n.section{\r\n    /* min-height: 300px; */\r\n}\r\n\r\n.login-div{\r\n    background-color: gray;\r\n}\r\n\r\n.head-text{\r\n    color:white;\r\n    text-shadow: 1px 1px 10px rgb(110, 110, 110);\r\n    margin-bottom: 0px;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.header-margin-top{ \r\n    margin-top: 150px;\r\n}\r\n\r\n.no-margin-bottom{\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.parallax-container {\r\n    height: 100vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 header-margin-top\">\r\n          <div class=\"row no-margin-bottom\">\r\n              <div class=\"col s12\">\r\n                <h1 class=\"head-text header\">MobileStore</h1>\r\n              </div>\r\n          </div>\r\n      \r\n          <div class=\"row no-margin-bottom\">\r\n            <div class=\"col s12\">\r\n                    <h5 *ngIf=\"screeoOrientation == 'portrait'\" class=\"head-text\">לאורך</h5>\r\n                    <h5 *ngIf=\"screeoOrientation == 'landscape'\" class=\"head-text\">לרוחב</h5>\r\n\r\n              <h5 class=\"head-text\">מובייל הוא תחום ההתמחות שלנו!</h5>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"parallax\" materialize=\"parallax\">\r\n    <img src=\"assets/background/increasing-the-productivity.jpg\">\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"section white\">\r\n    <div class=\"row container\">\r\n        <h2 class=\"header\">ברוך הבא!</h2>\r\n        <p class=\"grey-text text-darken-3 lighten-3\">היכנס כבר עכשיו לצפייה באחוזי המכירות שלך!</p>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"parallax-container\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col s12 header-margin-top\">\r\n                    <div class=\"section\">\r\n                        <h2 class=\"head-text header\">ברוך הבא!</h2>\r\n                        <p class=\"head-text\">היכנס כבר עכשיו לצפייה באחוזי המכירות שלך!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    <div class=\"parallax\" materialize=\"parallax\">\r\n        <img src=\"assets/background/motivate-employees.png\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_screen_settings_service__ = __webpack_require__("../../../../../src/app/shared/services/screen-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(screenSettingsService) {
        this.screenSettingsService = screenSettingsService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.getScreenOrientation();
    };
    HomeComponent.prototype.getScreenOrientation = function () {
        var _this = this;
        this.screeoOrientation = this.screenSettingsService.getScreenOrientation();
        this.orientationSubscription =
            this.screenSettingsService.screenOrientation.subscribe(function (orientation) {
                _this.screeoOrientation = orientation;
            });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.orientationSubscription.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_services_screen_settings_service__["a" /* ScreenSettingsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-signin-section{\r\n    margin-top: 100px;\r\n    -webkit-box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.158);\r\n            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.158);\r\n}\r\n\r\n.no-padding{\r\n    padding: 0;\r\n}\r\n\r\n.mobile-img{\r\n    height:200px;\r\n}\r\n\r\n.section.hide-on-small-only{\r\n    height: 500px;\r\n}\r\n\r\n.submit-div{\r\n    margin-bottom: 0;\r\n}\r\n\r\n.login-div{\r\n    background-color: gray;\r\n}\r\n\r\n.head-text{\r\n    color:white;\r\n    text-shadow: 1px 1px 10px rgb(110, 110, 110);\r\n    margin-bottom: 0px;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.header.hide-on-small-only{ \r\n    margin-top: 100px;\r\n}\r\n\r\n.header.hide-on-med-and-up{ \r\n    margin-top: 0;\r\n}\r\n\r\n.no-margin-bottom{\r\n    margin-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div \r\n        class=\"row full-signin-section\" \r\n        materialize \r\n        [materializeParams]=\"[mes,4000]\" \r\n        [materializeActions]=\"toastModule\">\r\n        <!-- web -->\r\n        <div class=\"hide-on-small-only\">\r\n            <!-- image-on-right-side -->\r\n            <div \r\n                class=\"col xl6 col l6 col m6 col s12 \r\n                right \r\n                center-align\r\n                no-padding\">\r\n                    <div *ngIf=\"false; else imgOnSide\"></div>\r\n            </div>\r\n\r\n            <!-- sign-in-left-side -->\r\n            <div \r\n                class=\"col l6 col m6 col s12  \r\n                left \r\n                no-padding\">\r\n                    <div class=\"section white hide-on-small-only\">\r\n                        <div *ngIf=\"false; else signin\"></div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <!-- mobile -->\r\n        <div class=\"hide-on-med-and-up\">\r\n            <!-- image-on-right-side -->\r\n            <div \r\n                class=\"col xl6 col l6 col m6 col s12 \r\n                right\r\n                center-align\r\n                mobile-img \r\n                no-padding\">\r\n                    <div *ngIf=\"false; else imgOnSide\"></div>\r\n            </div>\r\n\r\n            <!-- sign-in-left-side -->\r\n            <div \r\n                class=\"col l6 col m6 col s12  \r\n                left \r\n                no-padding\">\r\n                    <div class=\"section white hide-on-med-and-up\">\r\n                        <div *ngIf=\"false; else signin\"></div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #signin>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                <h2 class=\"hide-on-med-and-up header\">כניסה</h2>\r\n                <h2 class=\"hide-on-small-only header\">כניסה</h2>\r\n\r\n                <div class=\"row\">\r\n                    <form \r\n                        [formGroup]=\"signinForm\" \r\n                        (ngSubmit)=\"signIn()\" \r\n                        class=\"col s12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"input-field col s12\">\r\n                                <label for=\"email\" class=\"right\">אימייל</label>\r\n                                <input formControlName=\"email\" type=\"text\" class=\"right validate\">\r\n                            </div>\r\n                        </div>\r\n                    \r\n                        <div class=\"row\">\r\n                            <div class=\"input-field col s12\">\r\n                                <label for=\"password_mobile\" class=\"right\">סיסמה</label>\r\n                                <input formControlName=\"password\" type=\"password\" class=\"validate\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row left submit-div\">\r\n                            <div class=\"col s6\">\r\n                                <input \r\n                                    type=\"submit\" \r\n                                    class=\"btn waves-light left\"\r\n                                    [disabled]=\"!signinForm.valid\"\r\n                                    [ngClass]=\"{'disabled' : !signinForm.valid , \r\n                                                'waves-effect' : signinForm.valid}\" \r\n                                    value=\"התחברות\" \r\n                                    name=\"action\">\r\n                            </div>\r\n                            <div class=\"col s6\">\r\n                                    <div class=\"preloader-wrapper small\"\r\n                                        [ngClass]=\"{active : isLoading}\">\r\n                                        <div class=\"spinner-layer spinner-blue-only\">\r\n                                            <div class=\"gap-patch\">\r\n                                                <div class=\"circle\"></div>\r\n                                            </div>\r\n                                            <div class=\"circle-clipper right\">\r\n                                                <div class=\"circle\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                            </div> \r\n                        </div> \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #imgOnSide>\r\n    <div class=\"parallax-container\">\r\n        <div class=\"container\">\r\n            <div class=\"row no-margin-bottom\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"row\">\r\n                        <h1 class=\"head-text header hide-on-small-only\">MobileStore</h1>\r\n                        <h1 class=\"head-text hide-on-med-and-up\">MobileStore</h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"row no-margin-bottom\">\r\n                <div class=\"col s12\">\r\n                    <h5 class=\"head-text\">מובייל הוא תחום ההתמחות שלנו!</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"parallax\" materialize=\"parallax\">\r\n            <img src=\"assets/background/increasing-the-productivity.jpg\">\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_error_service__ = __webpack_require__("../../../../../src/app/shared/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninComponent = (function () {
    function SigninComponent(agentService, router, errorService) {
        this.agentService = agentService;
        this.router = router;
        this.errorService = errorService;
        this.toastModule = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.mes = '';
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (this.agentService.checkIfAgentConnected()) {
            this.router.navigate(["/home"]);
        }
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
    };
    SigninComponent.prototype.signIn = function () {
        var _this = this;
        this.isLoading = true;
        var email = this.signinForm.value.email;
        var password = this.signinForm.value.password;
        this.agentService.agentSignIn(email, password, function (error) {
            _this.mes = _this.errorService.getErrorMessage(error.status);
            _this.toastMe();
            _this.isLoading = false;
        });
    };
    SigninComponent.prototype.toastMe = function () {
        this.toastModule.emit('toast');
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/home/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__shared_services_error_service__["a" /* ErrorService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages-list/message-item/message-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages-list/message-item/message-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  message-item works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages-list/message-item/message-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageItemComponent = (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    MessageItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-item',
            template: __webpack_require__("../../../../../src/app/messages/messages-list/message-item/message-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages-list/message-item/message-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages-list/messages-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages-list/messages-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  messages-list works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages-list/messages-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesListComponent = (function () {
    function MessagesListComponent() {
    }
    MessagesListComponent.prototype.ngOnInit = function () {
    };
    MessagesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages-list',
            template: __webpack_require__("../../../../../src/app/messages/messages-list/messages-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages-list/messages-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesListComponent);
    return MessagesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  messages works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/agent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Agent; });
var Agent = (function () {
    function Agent(agentId, agentName, agentEmail, agentToken, isAdmin, tokenExpiration) {
        if (agentId === void 0) { agentId = 0; }
        if (agentName === void 0) { agentName = ""; }
        if (agentEmail === void 0) { agentEmail = ""; }
        if (agentToken === void 0) { agentToken = ""; }
        if (isAdmin === void 0) { isAdmin = false; }
        if (tokenExpiration === void 0) { tokenExpiration = new Date(); }
        this.agentId = agentId;
        this.agentName = agentName;
        this.agentEmail = agentEmail;
        this.agentToken = agentToken;
        this.isAdmin = isAdmin;
        this.tokenExpiration = tokenExpiration;
    }
    Agent.prototype.setAgent = function (agentData, agentEmail) {
        this.agentId = agentData.agentId;
        this.agentName = agentData.agentName;
        this.agentEmail = agentEmail ? agentEmail : '';
        this.isAdmin = this.agentId == 200 ? true : false;
        this.agentToken = agentData.token;
        this.tokenExpiration = new Date(agentData.expiration);
    };
    return Agent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/enroll-activity-agent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollActivityAgent; });
var EnrollActivityAgent = (function () {
    function EnrollActivityAgent(agentId, agentName, agentPlace, activityDate, enrollActionId, percOfTarget, points, sumOfSales, target, agentHistory) {
        if (agentId === void 0) { agentId = 0; }
        if (agentName === void 0) { agentName = ""; }
        if (agentPlace === void 0) { agentPlace = 0; }
        if (activityDate === void 0) { activityDate = new Date(); }
        if (enrollActionId === void 0) { enrollActionId = 0; }
        if (percOfTarget === void 0) { percOfTarget = 0; }
        if (points === void 0) { points = 0; }
        if (sumOfSales === void 0) { sumOfSales = 0; }
        if (target === void 0) { target = 0; }
        if (agentHistory === void 0) { agentHistory = new Array(); }
        this.agentId = agentId;
        this.agentName = agentName;
        this.agentPlace = agentPlace;
        this.activityDate = activityDate;
        this.enrollActionId = enrollActionId;
        this.percOfTarget = percOfTarget;
        this.points = points;
        this.sumOfSales = sumOfSales;
        this.target = target;
        this.agentHistory = agentHistory;
    }
    EnrollActivityAgent.prototype.setAgent = function (agentData) {
        if (agentData != null) {
            this.agentId = agentData.agentId;
            this.agentName = agentData.agentName;
            this.agentPlace = agentData.agentPlace;
            this.activityDate = new Date(agentData.date);
            this.enrollActionId = agentData.enrollActionId;
            this.percOfTarget = agentData.percOfTarget;
            this.points = agentData.points;
            this.sumOfSales = agentData.sumOfSales;
            this.target = agentData.target;
        }
    };
    return EnrollActivityAgent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/graph.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph; });
var Graph = (function () {
    function Graph(salesDate, place, points, pointsDiff) {
        if (salesDate === void 0) { salesDate = new Date(); }
        if (place === void 0) { place = 0; }
        if (points === void 0) { points = -1; }
        if (pointsDiff === void 0) { pointsDiff = 0; }
        this.salesDate = salesDate;
        this.place = place;
        this.points = points;
        this.pointsDiff = pointsDiff;
        this.salesDate = salesDate;
        this.place = place;
        this.points = points;
        this.pointsDiff = pointsDiff;
    }
    return Graph;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/link.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link(urlPath, linkName, subLinks) {
        if (urlPath === void 0) { urlPath = ""; }
        if (linkName === void 0) { linkName = ""; }
        if (subLinks === void 0) { subLinks = new Array(); }
        this.urlPath = urlPath;
        this.linkName = linkName;
        this.subLinks = subLinks;
    }
    return Link;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/overall-activity-agent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverallActivityAgent; });
var OverallActivityAgent = (function () {
    function OverallActivityAgent(agentId, agentName, agentPlace, activityDate, enrollActionId, enrollPoints, retentionPoints, overallPoints) {
        if (agentId === void 0) { agentId = 0; }
        if (agentName === void 0) { agentName = ""; }
        if (agentPlace === void 0) { agentPlace = 0; }
        if (activityDate === void 0) { activityDate = new Date(); }
        if (enrollActionId === void 0) { enrollActionId = 0; }
        if (enrollPoints === void 0) { enrollPoints = 0; }
        if (retentionPoints === void 0) { retentionPoints = 0; }
        if (overallPoints === void 0) { overallPoints = 0; }
        this.agentId = agentId;
        this.agentName = agentName;
        this.agentPlace = agentPlace;
        this.activityDate = activityDate;
        this.enrollActionId = enrollActionId;
        this.enrollPoints = enrollPoints;
        this.retentionPoints = retentionPoints;
        this.overallPoints = overallPoints;
    }
    OverallActivityAgent.prototype.setAgent = function (agentData) {
        if (agentData != null) {
            this.agentId = agentData.agentId;
            this.agentName = agentData.agentName;
            this.agentPlace = agentData.agentPlace;
            this.activityDate = new Date(agentData.date);
            this.enrollActionId = agentData.enrollActionId;
            this.enrollPoints = agentData.enrollPoints;
            this.retentionPoints = agentData.retentionPoints;
            this.overallPoints = agentData.overallPoints;
        }
    };
    return OverallActivityAgent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/retention-activity-agent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetentionActivityAgent; });
var RetentionActivityAgent = (function () {
    function RetentionActivityAgent(agentId, agentName, agentPlace, numOfExistCust, numOfNewCust, activityDate, retentionActionId, percOfTarget, points, target) {
        if (agentId === void 0) { agentId = 0; }
        if (agentName === void 0) { agentName = ""; }
        if (agentPlace === void 0) { agentPlace = 0; }
        if (numOfExistCust === void 0) { numOfExistCust = 0; }
        if (numOfNewCust === void 0) { numOfNewCust = 0; }
        if (activityDate === void 0) { activityDate = new Date(); }
        if (retentionActionId === void 0) { retentionActionId = 0; }
        if (percOfTarget === void 0) { percOfTarget = 0; }
        if (points === void 0) { points = 0; }
        if (target === void 0) { target = 0; }
        this.agentId = agentId;
        this.agentName = agentName;
        this.agentPlace = agentPlace;
        this.numOfExistCust = numOfExistCust;
        this.numOfNewCust = numOfNewCust;
        this.activityDate = activityDate;
        this.retentionActionId = retentionActionId;
        this.percOfTarget = percOfTarget;
        this.points = points;
        this.target = target;
    }
    RetentionActivityAgent.prototype.setAgent = function (agentData) {
        if (agentData != null) {
            this.agentId = agentData.agentId;
            this.agentName = agentData.agentName;
            this.agentPlace = agentData.agentPlace;
            this.numOfExistCust = agentData.numOfExistCust;
            this.numOfNewCust = agentData.numOfNewCust;
            this.activityDate = new Date(agentData.date);
            this.retentionActionId = agentData.retentionActionId;
            this.percOfTarget = agentData.percOfTarget;
            this.points = agentData.points;
            this.target = agentData.target;
        }
    };
    return RetentionActivityAgent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/heb-date.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HebDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HebDatePipe = (function () {
    function HebDatePipe() {
    }
    HebDatePipe.prototype.transform = function (month, date, addYear) {
        if (date === void 0) { date = new Date(); }
        if (addYear === void 0) { addYear = false; }
        var strMonth = this.getMonth(Number(month));
        return addYear ? strMonth + ' ' + date.getFullYear() : strMonth;
    };
    HebDatePipe.prototype.getMonth = function (month) {
        switch (month) {
            case 1: return 'ינואר';
            case 2: return 'פברואר';
            case 3: return 'מרץ';
            case 4: return 'אפריל';
            case 5: return 'מאי';
            case 6: return 'יוני';
            case 7: return 'יולי';
            case 8: return 'אוגוסט';
            case 9: return 'ספטמבר';
            case 10: return 'אוקטובר';
            case 11: return 'נובמבר';
            case 12: return 'דצמבר';
        }
    };
    HebDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'hebDate'
        })
    ], HebDatePipe);
    return HebDatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityService = (function () {
    function ActivityService(httpClient, agentService, urlService) {
        this.httpClient = httpClient;
        this.agentService = agentService;
        this.urlService = urlService;
    }
    //enroll activities//
    /**
     * Gets enroll activity agents data from server
     * @param callBack EnrollActivityAgents
     */
    ActivityService.prototype.getEnrollActivities = function (callBack, errorCallBack) {
        if (this.agentService.checkIfAgentConnected()) {
            this.httpClient.get(this.urlService.urlApiPath + '/enrollmentActivity', {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
            })
                .toPromise()
                .then(callBack)
                .catch(errorCallBack);
        }
    };
    //retention activities//
    /**
     * Gets retention activity agents data from server
     * @param callBack RetentionActivitiesAgents
     */
    ActivityService.prototype.getRetentionActivities = function (callBack, errorCallBack) {
        if (this.agentService.checkIfAgentConnected()) {
            this.httpClient.get(this.urlService.urlApiPath + '/RetentionActivities', {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
            })
                .toPromise()
                .then(callBack)
                .catch(errorCallBack);
        }
    };
    //overall activities//
    /**
     * Gets overall activities agents data from server
     * @param callBack OverallActivitiesAgents
     */
    ActivityService.prototype.getOverallActivities = function (callBack, errorCallBack) {
        if (this.agentService.checkIfAgentConnected()) {
            this.httpClient.get(this.urlService.urlApiPath + '/OverallActivities', {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
            })
                .toPromise()
                .then(callBack)
                .catch(errorCallBack);
        }
    };
    /**
     * Gets an array of all enroll activity data for one agent
     * @param AgentId
     * @param callBack
     */
    ActivityService.prototype.getAllAgentEnrollActivities = function (AgentId, callBack, errorCallBack) {
        if (this.agentService.checkIfAgentConnected()) {
            this.httpClient.get(this.urlService.urlApiPath + '/enrollmentActivity' + "/" + AgentId, {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
            })
                .toPromise()
                .then(callBack)
                .catch(errorCallBack);
        }
    };
    /**
     * Gets the latest enroll activity for one agent
     * @param agentId
     * @param callBack
     */
    ActivityService.prototype.getAgentEnrollActivity = function (agentId, callBack, errorCallBack) {
        this.agentEnrollActivityData(agentId, false, callBack, errorCallBack);
    };
    /**
     * Gets an array of agent enroll activities history
     * @param agentId
     * @param callBack
     */
    ActivityService.prototype.getAgentEnrollActivitiesHistory = function (agentId, callBack, errorCallBack) {
        this.agentEnrollActivityData(agentId, true, callBack, errorCallBack);
    };
    ActivityService.prototype.agentEnrollActivityData = function (agentId, isHistory, callBack, errorCallBack) {
        if (this.agentService.checkIfAgentConnected()) {
            var getHistoryPath = "?hist=" + isHistory;
            this.httpClient.get(this.urlService.urlApiPath + '/enrollmentActivity' + "/" + agentId + getHistoryPath, {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
            })
                .toPromise()
                .then(callBack)
                .catch(errorCallBack);
        }
        else {
            this.agentService.agentSignOut();
        }
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_0__url_service__["a" /* UrlService */]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(httpClient, agentService, urlService) {
        this.httpClient = httpClient;
        this.agentService = agentService;
        this.urlService = urlService;
    }
    /**
     * $$ ONLY FOR MANAGER USE $$
     *
     * Add new agent to the system
     *
     * @param email
     * @param agentId
     * @param agentName
     * @param password
     * @param callBack
     * @param errorCallBack
     */
    AdminService.prototype.addNewAgent = function (email, agentId, agentName, password, callBack, errorCallBack) {
        this.addNewUser(email, agentId, agentName, password, false, callBack, errorCallBack);
    };
    /**
     * $$ ONLY FORM MANGER USE $$
     *
     * Add new manger to the system
     *
     * @param email
     * @param agentId
     * @param agentName
     * @param password
     * @param callBack
     * @param errorCallBack
     */
    AdminService.prototype.addNewManager = function (email, agentId, agentName, password, callBack, errorCallBack) {
        this.addNewUser(email, agentId, agentName, password, true, callBack, errorCallBack);
    };
    /**
     * $$ ONLY MANAGER USE $$
     *
     * Uploading Excel file of users data to server.
     *
     * Not tested
     *
     * @param event
     */
    AdminService.prototype.uploadUsersExcelFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            // It is very important le leave the Content-Type empty, if you set it to 'multipart/form-data' it will not work !
            // do not set headers.append('Content-Type', 'multipart/form-data');
            headers.append('Authorization', 'Bearer ' + this.agentService.getAgentToken());
            this.httpClient.post('https://api.mysite.com/uploadfile', formData, {
                headers: headers
            })
                .toPromise()
                .then(function (data) { return console.log('success'); })
                .catch(function (error) { return console.log(error); });
        }
    };
    AdminService.prototype.addNewUser = function (email, agentId, agentName, password, isManager, callBack, errorCallBack) {
        if (isManager === void 0) { isManager = false; }
        var body = {
            email: email,
            agentId: agentId,
            agentName: agentName,
            password: password
        };
        this.httpClient.post(this.urlService.urlApiPath + '/auth/register?Manager=' + isManager, body, {
            headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
        })
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_1__url_service__["a" /* UrlService */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/agent.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_agent_model__ = __webpack_require__("../../../../../src/app/shared/models/agent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgentService = (function () {
    function AgentService(httpClient, router, urlService) {
        this.httpClient = httpClient;
        this.router = router;
        this.urlService = urlService;
    }
    /**
     * Agent sign in
     * @param email
     * @param password
     * @param errorCallBack
     */
    AgentService.prototype.agentSignIn = function (email, password, errorCallBack) {
        var _this = this;
        var body = {
            "email": email,
            "password": password
        };
        this.httpClient.post(this.urlService.urlApiPath + '/auth/token', body)
            .toPromise()
            .then(function (agentData) {
            var agent = new __WEBPACK_IMPORTED_MODULE_4__models_agent_model__["a" /* Agent */]();
            agent.setAgent(agentData, email);
            _this.setAgentDataOnLocalStorage(JSON.stringify(agent));
            _this.router.navigate(["/home"]);
        })
            .catch(errorCallBack);
    };
    /**
     * Sign out from site
     */
    AgentService.prototype.agentSignOut = function () {
        this.removeAgentDataOnLocalStorage();
        window.location.reload();
    };
    /**
     * Returns agent token
     */
    AgentService.prototype.getAgentToken = function () {
        return this.getAgentData().agentToken;
    };
    /**
     * Returns an Agent object with agent data
     */
    AgentService.prototype.getAgentData = function () {
        return JSON.parse(this.getAgentDataOnLocalStorage());
    };
    /**
     * Return true if agent connected to the site
     */
    AgentService.prototype.checkIfAgentConnected = function () {
        return this.getAgentData() != null && this.getAgentData().agentToken ? true : false;
    };
    /**
     * Checking if token is valid.
     *
     * @param token
     * @param callBack
     */
    AgentService.prototype.checkIfTokenIsValid = function (token, callBack) {
        this.httpClient.get(this.urlService.urlApiPath + '/auth/checkToken', {
            headers: this.urlService.getAuthHeader(this.getAgentToken())
        })
            .toPromise()
            .catch(callBack);
    };
    AgentService.prototype.setAgentDataOnLocalStorage = function (AgentData) {
        localStorage.setItem(this.urlService.agentPathLocalStorage, AgentData);
    };
    AgentService.prototype.getAgentDataOnLocalStorage = function () {
        var agentData = localStorage.getItem(this.urlService.agentPathLocalStorage);
        return agentData;
    };
    AgentService.prototype.removeAgentDataOnLocalStorage = function () {
        localStorage.removeItem(this.urlService.agentPathLocalStorage);
    };
    AgentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__url_service__["a" /* UrlService */]])
    ], AgentService);
    return AgentService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(agentService) {
        this.agentService = agentService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.agentService.checkIfAgentConnected();
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agent_service__["a" /* AgentService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
var ErrorService = (function () {
    function ErrorService() {
    }
    ErrorService.prototype.getErrorMessage = function (errorStatus) {
        switch (errorStatus) {
            //problem connecting to DB
            case 404: return 'אירעה שגיאה, נסה שוב מאוחר יותר';
            //Wrong User Data
            case 400: return 'כתובת האימייל או הסיסמה אינם נכונים';
        }
    };
    return ErrorService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/graph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphService = (function () {
    function GraphService(httpClient, agentService, urlService) {
        this.httpClient = httpClient;
        this.agentService = agentService;
        this.urlService = urlService;
        this.AgentIdUpdated = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.currentAgentId = 0;
    }
    GraphService.prototype.passAgent4Graph = function (agentId) {
        this.currentAgentId = agentId;
        this.AgentIdUpdated.emit(this.currentAgentId);
    };
    //enroll activities//
    /**
     * Gets enroll graph agents data from server
     * @param agentId agent ID
     * @param callBack getEnrollmentGraphData
     */
    GraphService.prototype.getEnrollmentGraphData = function (callBack, errorCallBack) {
        if (this.agentService.checkIfAgentConnected()) {
            this.httpClient.get(this.urlService.urlApiPath + '/EnrollmentGraph/' + this.currentAgentId, {
                headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
            })
                .toPromise()
                .then(callBack)
                .catch(errorCallBack);
        }
    };
    GraphService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_1__url_service__["a" /* UrlService */]])
    ], GraphService);
    return GraphService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agent_service__ = __webpack_require__("../../../../../src/app/shared/services/agent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesService = (function () {
    function MessagesService(httpClient, agentService, urlService) {
        this.httpClient = httpClient;
        this.agentService = agentService;
        this.urlService = urlService;
    }
    /**
     * Gets the last message that the aget received
     *
     * @param callBack
     * @param errorCallBack
     */
    MessagesService.prototype.getLastReceivedMessage = function (callBack, errorCallBack) {
        var agent = this.agentService.getAgentData();
        var agentId = agent.agentId;
        var agentToken = agent.agentToken;
        this.httpClient
            .get(this.urlService.urlApiPath + '/privateMessages/' + agentId + '?last=true', {
            headers: this.urlService.getAuthHeader(agentToken)
        })
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
    };
    /**
     * Gets all the messages that the agent received in the last 7 days
     *
     * NOT READY FOR USE!!
     *
     * @param agentId
     * @param callBack
     * @param errorCallBack
     */
    MessagesService.prototype.getAllAgentMessages = function (agentId, callBack, errorCallBack) {
        // this.httpClient
        // .get(this.urlService.urlApiPath + 'privateMessages' + agentId + '?last=false'  , {
        //     headers : this.urlService.getAuthHeader(this.agentService.getAgentToken())
        // })
        // .toPromise()
        // .then(callBack)
        // .catch(errorCallBack);
    };
    /**
     * $$ ONLY FOR MANAGER USE $$
     *
     * Gets an array of all messages
     *
     * @param callBack
     * @param errorCallBack
     */
    MessagesService.prototype.getAllSentMessages = function (callBack, errorCallBack) {
        this.httpClient
            .get(this.urlService.urlApiPath + 'privateMessages', {
            headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
        })
            .toPromise()
            .then(callBack)
            .catch(errorCallBack);
    };
    /**
     * $$ ONLY FOR MANAGER USE$$
     *
     * sending message to agent.
     *
     * @param agentId
     * @param message
     * @param date
     * @param callBack
     * @param errorCallBack
     */
    MessagesService.prototype.sendMessage = function (agentId, message, date, callBack, errorCallBack) {
        if (date === void 0) { date = new Date(); }
        var body = {
            agentId: agentId,
            message: message,
            date: date
        };
        this.httpClient.post(this.urlService.urlApiPath + '/privateMessages', body, {
            headers: this.urlService.getAuthHeader(this.agentService.getAgentToken())
        })
            .toPromise()
            .then()
            .catch();
    };
    // not in use right now
    MessagesService.prototype.updateMessage = function () {
    };
    MessagesService.prototype.deleteMessage = function () {
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__agent_service__["a" /* AgentService */],
            __WEBPACK_IMPORTED_MODULE_1__url_service__["a" /* UrlService */]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/screen-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_service__ = __webpack_require__("../../../../../src/app/shared/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScreenSettingsService = (function () {
    function ScreenSettingsService(urlService) {
        this.urlService = urlService;
        this.screenOrientation = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    ScreenSettingsService.prototype.getVideoBackground = function () {
        //return this.urlService.urlApiPath + '/stream';
        //return 'assets/background/Time_Lapse.mp4';
        return 'assets/background/city-bg.mp4';
        //return 'https://s3.ca-central-1.amazonaws.com/erez1api/assets/background/Time_Lapse.mp4';
    };
    ScreenSettingsService.prototype.resizeScreen = function () {
        window.innerHeight > window.innerWidth ?
            this.screenOrientation.next('portrait') :
            this.screenOrientation.next('landscape');
    };
    ScreenSettingsService.prototype.getScreenOrientation = function () {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    };
    ScreenSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__url_service__["a" /* UrlService */]])
    ], ScreenSettingsService);
    return ScreenSettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UrlService = (function () {
    function UrlService() {
        this.urlApiPath = 'https://erezapinew.azurewebsites.net/api';
        this.agentPathLocalStorage = "cad"; //cad - connected Agent data
    }
    UrlService.prototype.getAuthHeader = function (agentToken) {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + agentToken);
    };
    UrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/styles/collapsible.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* ************************ Collapsible ************************* */\r\n\r\nh3 , h5 , h1{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(209, 209, 209, 0);\r\n}\r\n\r\n.collapsible-header{\r\n    background-color: #ffffffda;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    color: black;\r\n    border-bottom: 1px solid #00000026;\r\n}\r\n\r\n.collapsible-body{\r\n    border-bottom: 1px solid #00000026;\r\n    background-color: #ffffff62;\r\n    color: black;\r\n}\r\n\r\n.bold{\r\n    font-weight: bolder;\r\n}\r\n\r\n.center-div{\r\n    padding: 70px 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-agent-div{\r\n    background-color:#6969ffe8;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    -webkit-animation: fade-in-scroll-x 0.5s linear;\r\n            animation: fade-in-scroll-x 0.5s linear;\r\n}\r\n\r\nul{\r\n    overflow-x: hidden;\r\n}\r\n\r\n@-webkit-keyframes fade-in-scroll-x{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@keyframes fade-in-scroll-x{\r\n    0%{\r\n        opacity: 0;\r\n        display: none;\r\n        -webkit-transform: translateX(200%);\r\n                transform: translateX(200%);\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n        display: block;\r\n        -webkit-transform: translateX(0px);\r\n                transform: translateX(0px);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/styles/history-collapsible.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* ************************ History Collapsible ************************* */\r\n\r\nh3 , h5 , h1{\r\n    color: white;\r\n    text-shadow: 0 0 10px rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.collapsible{\r\n    padding: 0;\r\n    border: none;\r\n    background-color: rgba(255, 242, 242, 0.22);}\r\n\r\n.collapsible-header{\r\n    background-color: rgba(255, 255, 255, 0.76);\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.collapsible-body{\r\n    background-color: transparent;\r\n    color: black;\r\n    border-bottom: 0 solid transparent;\r\n}\r\n\r\n.center-div{\r\n    padding: 15px 0;\r\n    text-align: center;\r\n}\r\n\r\n.circle-clipper{\r\n    border-color: #0004ffab;\r\n}\r\n\r\n.no-padding{\r\n    padding: 0;\r\n}\r\n\r\n.no-margin{\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map