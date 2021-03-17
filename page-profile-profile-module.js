(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-profile-profile-module"],{

/***/ "+EPx":
/*!*************************************************************************************!*\
  !*** ./src/app/page/profile/personal-information/personal-information.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PersonalInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInformationComponent", function() { return PersonalInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personal_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-information.component.html */ "6Amq");
/* harmony import */ var _personal_information_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-information.component.css */ "Vqtg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PersonalInformationComponent = class PersonalInformationComponent {
    constructor() { }
    ngOnInit() {
    }
};
PersonalInformationComponent.ctorParameters = () => [];
PersonalInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personal-information',
        template: _raw_loader_personal_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_information_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonalInformationComponent);



/***/ }),

/***/ "4crF":
/*!******************************************************************************!*\
  !*** ./src/app/page/profile/work-information/work-information.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "6Amq":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/personal-information/personal-information.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header\">\n  <h6>Personal Information</h6>\n</div>\n<div class=\"card-body\">\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n    </div>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "9o5d":
/*!************************************************!*\
  !*** ./src/app/page/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-information/personal-information.component */ "+EPx");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "fl9W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _work_information_work_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work-information/work-information.component */ "AdBj");











const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
const routes = [
    {
        path: 'profile',
        redirectTo: 'personal-information',
    },
    {
        path: 'personal-information',
        component: _personal_information_personal_information_component__WEBPACK_IMPORTED_MODULE_1__["PersonalInformationComponent"]
    },
    {
        path: 'work-information',
        component: _work_information_work_information_component__WEBPACK_IMPORTED_MODULE_9__["WorkInformationComponent"]
    }
];
let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], ProfileModule);



/***/ }),

/***/ "AdBj":
/*!*****************************************************************************!*\
  !*** ./src/app/page/profile/work-information/work-information.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkInformationComponent", function() { return WorkInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_work_information_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./work-information.component.html */ "T26m");
/* harmony import */ var _work_information_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-information.component.css */ "4crF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let WorkInformationComponent = class WorkInformationComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkInformationComponent.ctorParameters = () => [];
WorkInformationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-work-information',
        template: _raw_loader_work_information_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_work_information_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WorkInformationComponent);



/***/ }),

/***/ "T26m":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/work-information/work-information.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  work-information works!\n</p>\n");

/***/ }),

/***/ "Vqtg":
/*!**************************************************************************************!*\
  !*** ./src/app/page/profile/personal-information/personal-information.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=page-profile-profile-module.js.map