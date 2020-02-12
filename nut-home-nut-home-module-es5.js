function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nut-home-nut-home-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/nut-home/home-page/home-page.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** /home/akashgour/Desktop/angularRodman/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/nut-home/home-page/home-page.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutHomeHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show' ></CoreLib-ads-display> \n</div>\n<div class=\"mt-5\" ></div>\n<div class=\"container container_box\">\n    <div class=\"row\">\n        <div class=\"col-sm-8 col-md-8\">\n            <CoreLib-home-slider magazineId=\"{{magazineId}}\"  homeBoxId = {{homeBoxId}}></CoreLib-home-slider>\n        </div>\n        <hr>\n        <div class=\"col-sm-4 col-md-4\">\n            <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n        </div>\n        <!-- <div class=\"col-sm-12 col-md-12 mt-3\">\n            <div class=\"col-md-12 col-sm-12 text-center\"  *ngIf=\"viewAdRender == 1\" >\n                <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1'></CoreLib-ads-display>\n            </div>\n        </div> -->\n    </div>    \n</div>\n<CoreLib-featured-content magazineId=\"{{magazineId}}\" [getAllAd]=\"getAllAd\" [location]=\"'content_right_1'\" featured_content_section='2492,7'></CoreLib-featured-content>\n<CoreLib-featured-content magazineId=\"{{magazineId}}\" [getAllAd]=\"getAllAd\" [location]=\"'content_right_2'\" featured_content_section='2486,7'></CoreLib-featured-content>\n<CoreLib-featured-content magazineId=\"{{magazineId}}\" [getAllAd]=\"getAllAd\" [location]=\"'content_right_3'\" featured_content_section='2487,7'></CoreLib-featured-content>\n\n\n\n\n \n";
    /***/
  },

  /***/
  "./src/app/nut-home/home-page/home-page.component.css":
  /*!************************************************************!*\
    !*** ./src/app/nut-home/home-page/home-page.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutHomeHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container_box{\n    width: 100% !important;\n    max-width: 90% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL05VVC9zcmMvYXBwL251dC1ob21lL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoicHJvamVjdHMvTlVUL3NyYy9hcHAvbnV0LWhvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9ib3h7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nut-home/home-page/home-page.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/nut-home/home-page/home-page.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppNutHomeHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../rodman-core/src/lib/rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(RodmanCoreService) {
        var _this = this;

        _classCallCheck(this, HomePageComponent);

        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].magazineId;
        this.homeBoxId = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].homeBoxId;
        this.magazineName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].magazineName;
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
          _this.getAllAd = data;
          _this.viewAdRender = 1;
        });
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_3__["RodmanCoreService"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'NUT-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/nut-home/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/nut-home/home-page/home-page.component.css")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/nut-home/nut-home-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/nut-home/nut-home-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: NutHomeRoutingModule */

  /***/
  function srcAppNutHomeNutHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutHomeRoutingModule", function () {
      return NutHomeRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/nut-home/home-page/home-page.component.ts");

    var routes = [{
      path: "",
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }];

    var NutHomeRoutingModule = function NutHomeRoutingModule() {
      _classCallCheck(this, NutHomeRoutingModule);
    };

    NutHomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NutHomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/nut-home/nut-home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/nut-home/nut-home.module.ts ***!
    \*********************************************/

  /*! exports provided: NutHomeModule */

  /***/
  function srcAppNutHomeNutHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutHomeModule", function () {
      return NutHomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _nut_home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nut-home-routing.module */
    "./src/app/nut-home/nut-home-routing.module.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/nut-home/home-page/home-page.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rodman_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rodman-core */
    "../../dist/rodman-core/fesm2015/rodman-core.js");
    /* harmony import */


    var ngx_dfp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-dfp */
    "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");

    var NutHomeModule = function NutHomeModule() {
      _classCallCheck(this, NutHomeModule);
    };

    NutHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _nut_home_routing_module__WEBPACK_IMPORTED_MODULE_3__["NutHomeRoutingModule"], rodman_core__WEBPACK_IMPORTED_MODULE_6__["HomeModule"], rodman_core__WEBPACK_IMPORTED_MODULE_6__["SitesModule"], rodman_core__WEBPACK_IMPORTED_MODULE_6__["ContentsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_6__["AdsModule"], ngx_dfp__WEBPACK_IMPORTED_MODULE_7__["DfpModule"].forRoot({
        idleLoad: true,
        enableVideoAds: true,
        personalizedAds: true,
        singleRequestMode: true,
        onSameNavigation: 'refresh',
        globalTargeting: {// food: ['NUT', 'HOME']
        }
      })]
    })], NutHomeModule);
    /***/
  }
}]);
//# sourceMappingURL=nut-home-nut-home-module-es5.js.map