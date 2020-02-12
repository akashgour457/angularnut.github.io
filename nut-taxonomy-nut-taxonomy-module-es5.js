function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nut-taxonomy-nut-taxonomy-module"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/akashgour/Desktop/angularRodman/RodmanAngled/node_modules/raw-loader/dist/cjs.js!./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutTaxonomyTaxonomyListTaxonomyListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\" *ngIf=\"viewAdRender == 1\" >\n    <CoreLib-ads-display [ads]=\"getAllAd\" location='header_1' footerData='show'></CoreLib-ads-display>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='left_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n        <div class=\"col-8 mt-5 \">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <CoreLib-list-taxonomies routeUrl = {{currentURL}} magazineId=\"{{magazineId}}\"></CoreLib-list-taxonomies>     \n                </div>\n                <div class=\"col-md-4 mt-5\">\n                    <div class=\"mb-2\" *ngIf=\"viewAdRender == 1\">\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_1'></CoreLib-ads-display>\n                    </div>\n                    <div class=\"ml-2\">\n                        <CoreLib-content-box-tabs magazineId={{magazineId}}  TabOne=\"2487,5\" TabTwo=\"2486,5\"></CoreLib-content-box-tabs>\n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_2'></CoreLib-ads-display>      \n                    </div>\n                    <div class=\"mt-2\" *ngIf=\"viewAdRender == 1\" >\n                        <CoreLib-ads-display [ads]=\"getAllAd\" location='content_right_3'></CoreLib-ads-display>      \n                    </div>\n                </div> \n            </div>      \n        </div>\n        <div class=\"col\">\n            <div *ngIf=\"viewAdRender == 1\">\n                <!-- <CoreLib-ads-display [ads]=\"getAllAd\" location='right_site_ad'></CoreLib-ads-display> -->\n            </div>\n        </div>\n    </div>   \n</div>";
    /***/
  },

  /***/
  "./src/app/nut-taxonomy/nut-taxonomy-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/nut-taxonomy/nut-taxonomy-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: NutTaxonomyRoutingModule */

  /***/
  function srcAppNutTaxonomyNutTaxonomyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutTaxonomyRoutingModule", function () {
      return NutTaxonomyRoutingModule;
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


    var _taxonomy_list_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./taxonomy-list/taxonomy-list.component */
    "./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.ts");

    var routes = [{
      path: "",
      component: _taxonomy_list_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_3__["TaxonomyListComponent"]
    }, {
      path: ":any",
      component: _taxonomy_list_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_3__["TaxonomyListComponent"]
    }];

    var NutTaxonomyRoutingModule = function NutTaxonomyRoutingModule() {
      _classCallCheck(this, NutTaxonomyRoutingModule);
    };

    NutTaxonomyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NutTaxonomyRoutingModule);
    /***/
  },

  /***/
  "./src/app/nut-taxonomy/nut-taxonomy.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/nut-taxonomy/nut-taxonomy.module.ts ***!
    \*****************************************************/

  /*! exports provided: NutTaxonomyModule */

  /***/
  function srcAppNutTaxonomyNutTaxonomyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutTaxonomyModule", function () {
      return NutTaxonomyModule;
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


    var _nut_taxonomy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nut-taxonomy-routing.module */
    "./src/app/nut-taxonomy/nut-taxonomy-routing.module.ts");
    /* harmony import */


    var _taxonomy_list_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./taxonomy-list/taxonomy-list.component */
    "./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.ts");
    /* harmony import */


    var rodman_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rodman-core */
    "../../dist/rodman-core/fesm2015/rodman-core.js");
    /* harmony import */


    var ngx_dfp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-dfp */
    "../../node_modules/ngx-dfp/fesm2015/ngx-dfp.js");

    var NutTaxonomyModule = function NutTaxonomyModule() {
      _classCallCheck(this, NutTaxonomyModule);
    };

    NutTaxonomyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_taxonomy_list_taxonomy_list_component__WEBPACK_IMPORTED_MODULE_4__["TaxonomyListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _nut_taxonomy_routing_module__WEBPACK_IMPORTED_MODULE_3__["NutTaxonomyRoutingModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["ContentsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["SitesModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["AdsModule"], rodman_core__WEBPACK_IMPORTED_MODULE_5__["TaxonomiesModule"], ngx_dfp__WEBPACK_IMPORTED_MODULE_6__["DfpModule"].forRoot({
        idleLoad: true,
        enableVideoAds: true,
        personalizedAds: true,
        singleRequestMode: true,
        onSameNavigation: 'refresh',
        globalTargeting: {// food: ['NUT', 'HOME']
        }
      })]
    })], NutTaxonomyModule);
    /***/
  },

  /***/
  "./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutTaxonomyTaxonomyListTaxonomyListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9OVVQvc3JjL2FwcC9udXQtdGF4b25vbXkvdGF4b25vbXktbGlzdC90YXhvbm9teS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TaxonomyListComponent */

  /***/
  function srcAppNutTaxonomyTaxonomyListTaxonomyListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaxonomyListComponent", function () {
      return TaxonomyListComponent;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../rodman-core/src/lib/rodman-core.service */
    "../rodman-core/src/lib/rodman-core.service.ts");

    var TaxonomyListComponent =
    /*#__PURE__*/
    function () {
      function TaxonomyListComponent(router, RodmanCoreService) {
        var _this = this;

        _classCallCheck(this, TaxonomyListComponent);

        this.router = router;
        this.RodmanCoreService = RodmanCoreService;
        this.getAllAd = [];
        this.magazineId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].magazineId;
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this.currentURL = event.url;
          }
        });
        this.RodmanCoreService.getAllAdst(this.magazineId).subscribe(function (data) {
          _this.getAllAd = data;
          _this.viewAdRender = 1;
        });
      }

      _createClass(TaxonomyListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TaxonomyListComponent;
    }();

    TaxonomyListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _rodman_core_src_lib_rodman_core_service__WEBPACK_IMPORTED_MODULE_4__["RodmanCoreService"]
      }];
    };

    TaxonomyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'NUT-taxonomy-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./taxonomy-list.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./taxonomy-list.component.css */
      "./src/app/nut-taxonomy/taxonomy-list/taxonomy-list.component.css")).default]
    })], TaxonomyListComponent);
    /***/
  }
}]);
//# sourceMappingURL=nut-taxonomy-nut-taxonomy-module-es5.js.map