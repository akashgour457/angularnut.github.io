(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nut-content-nut-content-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/nut-content/content-list/content-list.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/akashgour/Desktop/angularRodman/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/nut-content/content-list/content-list.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\"> \n                    <CoreLib-lists-contents  routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\" contentType=\"{{contentType}}\"></CoreLib-lists-contents>          \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>\n     ");

/***/ }),

/***/ "./src/app/nut-content/content-list/content-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/nut-content/content-list/content-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9OVVQvc3JjL2FwcC9udXQtY29udGVudC9jb250ZW50LWxpc3QvY29udGVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/nut-content/content-list/content-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/nut-content/content-list/content-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ContentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentListComponent", function() { return ContentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../rodman-core/src/lib/rodman-core.service */ "../rodman-core/src/lib/rodman-core.service.ts");





let ContentListComponent = class ContentListComponent {
    constructor(router, RodmanCoreService) {
        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentURL = event.url;
                if (this.currentURL == '/resources') {
                    this.currentURL = '';
                    this.contentType = '2546,2501,2557,2539,2559,2542,2585,2560,2584,2698,2720,2722';
                }
                else if (this.currentURL == '/contents/list_webinars') {
                    this.currentURL = '';
                    this.contentType = '2542';
                }
            }
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe((data => {
            this.getAllAd = data;
            this.viewAdRender = 1;
        }));
    }
    ngOnInit() {
    }
};
ContentListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"] }
];
ContentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'NUT-content-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/nut-content/content-list/content-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-list.component.css */ "./src/app/nut-content/content-list/content-list.component.css")).default]
    })
], ContentListComponent);



/***/ }),

/***/ "./src/app/nut-content/nut-content-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/nut-content/nut-content-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NutContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutContentRoutingModule", function() { return NutContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _content_list_content_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-list/content-list.component */ "./src/app/nut-content/content-list/content-list.component.ts");




const routes = [
    { path: "", component: _content_list_content_list_component__WEBPACK_IMPORTED_MODULE_3__["ContentListComponent"] },
    { path: ":any", component: _content_list_content_list_component__WEBPACK_IMPORTED_MODULE_3__["ContentListComponent"] },
];
let NutContentRoutingModule = class NutContentRoutingModule {
};
NutContentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NutContentRoutingModule);



/***/ }),

/***/ "./src/app/nut-content/nut-content.module.ts":
/*!***************************************************!*\
  !*** ./src/app/nut-content/nut-content.module.ts ***!
  \***************************************************/
/*! exports provided: NutContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutContentModule", function() { return NutContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nut_content_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nut-content-routing.module */ "./src/app/nut-content/nut-content-routing.module.ts");
/* harmony import */ var _content_list_content_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-list/content-list.component */ "./src/app/nut-content/content-list/content-list.component.ts");
/* harmony import */ var rodman_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rodman-core */ "../../dist/rodman-core/fesm2015/rodman-core.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dfp */ "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");




// import { ContentViewComponent } from './content-view/content-view.component';



let NutContentModule = class NutContentModule {
};
NutContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_content_list_content_list_component__WEBPACK_IMPORTED_MODULE_4__["ContentListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _nut_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["NutContentRoutingModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["TaxonomiesModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["SitesModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["ContentsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            rodman_core__WEBPACK_IMPORTED_MODULE_5__["AdsModule"],
            ngx_dfp__WEBPACK_IMPORTED_MODULE_6__["DfpModule"].forRoot({
                idleLoad: true,
                enableVideoAds: true,
                personalizedAds: true,
                singleRequestMode: true,
                onSameNavigation: 'refresh',
                globalTargeting: {
                // food: ['NUT', 'HOME']
                }
            })
        ]
    })
], NutContentModule);



/***/ })

}]);
//# sourceMappingURL=nut-content-nut-content-module-es2015.js.map