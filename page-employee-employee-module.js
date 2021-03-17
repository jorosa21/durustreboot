(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-employee-employee-module"],{

/***/ "/z4o":
/*!**************************************************!*\
  !*** ./src/app/page/employee/employee.module.ts ***!
  \**************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "dBQ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.component */ "izv0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/feather-icon/feather-icon.module */ "tyVc");








const routes = [
    {
        path: '',
        component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"],
    }
];
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_7__["FeahterIconModule"],
        ]
    })
], EmployeeModule);



/***/ }),

/***/ "M9KJ":
/*!*************************************************************************!*\
  !*** ./src/app/page/employee/employee-list/employee-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "dBQ/":
/*!************************************************************************!*\
  !*** ./src/app/page/employee/employee-list/employee-list.component.ts ***!
  \************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-list.component.html */ "uAKD");
/* harmony import */ var _employee_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list.component.css */ "M9KJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let EmployeeListComponent = class EmployeeListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    submit() {
        this.router.navigate(["/layout/employee-details", "1"]);
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EmployeeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee-list',
        template: _raw_loader_employee_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeListComponent);



/***/ }),

/***/ "uAKD":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/employee/employee-list/employee-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-responsive\">\n  <table id=\"dataTableExample\" class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Position</th>\n        <th>Office</th>\n        <th>Age</th>\n        <th>Start date</th>\n        <th>Salary</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Tiger Nixon</td>\n        <td>System Architect</td>\n        <td>Edinburgh</td>\n        <td>61</td>\n        <td>2011/04/25</td>\n        <td>$320,800</td>\n      </tr>\n      <tr>\n        <td>Garrett Winters</td>\n        <td>Accountant</td>\n        <td>Tokyo</td>\n        <td>63</td>\n        <td>2011/07/25</td>\n        <td>$170,750</td>\n      </tr>\n      <tr>\n        <td>Ashton Cox</td>\n        <td>Junior Technical Author</td>\n        <td>San Francisco</td>\n        <td>66</td>\n        <td>2009/01/12</td>\n        <td>$86,000</td>\n      </tr>\n      <tr>\n        <td>Cedric Kelly</td>\n        <td>Senior Javascript Developer</td>\n        <td>Edinburgh</td>\n        <td>22</td>\n        <td>2012/03/29</td>\n        <td>$433,060</td>\n      </tr>\n      <tr>\n        <td>Airi Satou</td>\n        <td>Accountant</td>\n        <td>Tokyo</td>\n        <td>33</td>\n        <td>2008/11/28</td>\n        <td>$162,700</td>\n      </tr>\n      <tr>\n        <td>Brielle Williamson</td>\n        <td>Integration Specialist</td>\n        <td>New York</td>\n        <td>61</td>\n        <td>2012/12/02</td>\n        <td>$372,000</td>\n      </tr>\n      <tr>\n        <td>Herrod Chandler</td>\n        <td>Sales Assistant</td>\n        <td>San Francisco</td>\n        <td>59</td>\n        <td>2012/08/06</td>\n        <td>$137,500</td>\n      </tr>\n      <tr>\n        <td>Rhona Davidson</td>\n        <td>Integration Specialist</td>\n        <td>Tokyo</td>\n        <td>55</td>\n        <td>2010/10/14</td>\n        <td>$327,900</td>\n      </tr>\n      <tr>\n        <td>Colleen Hurst</td>\n        <td>Javascript Developer</td>\n        <td>San Francisco</td>\n        <td>39</td>\n        <td>2009/09/15</td>\n        <td>$205,500</td>\n      </tr>\n      <tr>\n        <td>Sonya Frost</td>\n        <td>Software Engineer</td>\n        <td>Edinburgh</td>\n        <td>23</td>\n        <td>2008/12/13</td>\n        <td>$103,600</td>\n      </tr>\n      <tr>\n        <td>Jena Gaines</td>\n        <td>Office Manager</td>\n        <td>London</td>\n        <td>30</td>\n        <td>2008/12/19</td>\n        <td>$90,560</td>\n      </tr>\n      <tr>\n        <td>Quinn Flynn</td>\n        <td>Support Lead</td>\n        <td>Edinburgh</td>\n        <td>22</td>\n        <td>2013/03/03</td>\n        <td>$342,000</td>\n      </tr>\n      <tr>\n        <td>Charde Marshall</td>\n        <td>Regional Director</td>\n        <td>San Francisco</td>\n        <td>36</td>\n        <td>2008/10/16</td>\n        <td>$470,600</td>\n      </tr>\n      <tr>\n        <td>Haley Kennedy</td>\n        <td>Senior Marketing Designer</td>\n        <td>London</td>\n        <td>43</td>\n        <td>2012/12/18</td>\n        <td>$313,500</td>\n      </tr>\n      <tr>\n    <td>Tatyana Fitzpatrick</td>\n        <td>Regional Director</td>\n        <td>London</td>\n        <td>19</td>\n        <td>2010/03/17</td>\n        <td>$385,750</td>\n      </tr>\n      <tr>\n        <td>Michael Silva</td>\n        <td>Marketing Designer</td>\n        <td>London</td>\n        <td>66</td>\n        <td>2012/11/27</td>\n        <td>$198,500</td>\n      </tr>\n      <tr>\n        <td>Paul Byrd</td>\n        <td>Chief Financial Officer (CFO)</td>\n        <td>New York</td>\n        <td>64</td>\n        <td>2010/06/09</td>\n        <td>$725,000</td>\n      </tr>\n      <tr>\n        <td>Gloria Little</td>\n        <td>Systems Administrator</td>\n        <td>New York</td>\n        <td>59</td>\n        <td>2009/04/10</td>\n        <td>$237,500</td>\n      </tr>\n      <tr>\n        <td>Bradley Greer</td>\n        <td>Software Engineer</td>\n        <td>London</td>\n        <td>41</td>\n        <td>2012/10/13</td>\n        <td>$132,000</td>\n      </tr>\n      <tr>\n        <td>Dai Rios</td>\n        <td>Personnel Lead</td>\n        <td>Edinburgh</td>\n        <td>35</td>\n        <td>2012/09/26</td>\n        <td>$217,500</td>\n      </tr>\n      <tr>\n        <td>Jenette Caldwell</td>\n        <td>Development Lead</td>\n        <td>New York</td>\n        <td>30</td>\n        <td>2011/09/03</td>\n        <td>$345,000</td>\n      </tr>\n      <tr>\n        <td>Yuri Berry</td>\n        <td>Chief Marketing Officer (CMO)</td>\n        <td>New York</td>\n        <td>40</td>\n        <td>2009/06/25</td>\n        <td>$675,000</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th></th>\n      </tr>\n    </tfoot>\n  </table>\n  <a (click)=\"submit()\">First Component</a>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=page-employee-employee-module.js.map