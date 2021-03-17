(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-administration-administration-module"],{

/***/ "+1nS":
/*!**************************************************************************************************!*\
  !*** ./src/app/page/administration/shiftcodes/shiftcodes-detail/shiftcodes-detail.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdGNvZGVzLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "/1ZU":
/*!**************************************************************************************!*\
  !*** ./src/app/page/administration/dropdown-settings/dropdown-settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DropdownSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownSettingsComponent", function() { return DropdownSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dropdown_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dropdown-settings.component.html */ "ZHIA");
/* harmony import */ var _dropdown_settings_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-settings.component.css */ "2Xea");
/* harmony import */ var _services_administration_dropdown_settings_dropdown_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/administration/dropdown-settings/dropdown.service */ "Cc9I");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "PdH4");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);







let DropdownSettingsComponent = class DropdownSettingsComponent {
    constructor(dropdownService, fb) {
        this.dropdownService = dropdownService;
        this.fb = fb;
        this.isLoading = false;
        this.disSubmit = false;
        this.submitText = "Proceed";
        this.moduleType = [];
        this.moduleList = [];
        this.table = [];
    }
    ngOnInit() {
        this.dropdownForm = this.fb.group({
            description: [''],
            selectedModule: [null],
            createdBy: sessionStorage.getItem('user')
        });
        this.dropdownService.dropdownFixType().subscribe(data => {
            this.moduleType = data;
            this.dropdownService.dropdownList().subscribe(data => {
                this.moduleList = data;
                this.isLoading = false;
            });
        });
    }
    moduleChange() {
        this.table = [];
        this.table = this.moduleList.filter(x => x.type_id === this.dropdownForm.get('selectedModule').value);
    }
    checkChange(e) {
        var selected = this.moduleList.filter(x => x.id == e.target.value)[0];
        var obj = {
            dropdown_id: selected['id'],
            dropdown_type_id: selected['type_id'],
            dropdown_description: selected['description'],
            created_by: sessionStorage.getItem('u'),
            active: e.target.checked,
            instance_name: sessionStorage.getItem('in'),
            user_hash: sessionStorage.getItem('uh'),
            user_name: sessionStorage.getItem('us'),
        };
        this.dropdownService.dropdownIU(obj).subscribe(data => {
        });
    }
    submit() {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Please Wait !',
                    html: 'data uploading',
                    allowOutsideClick: false,
                    onBeforeOpen: () => {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading();
                        let selected = this.moduleType.filter(x => x.id === this.dropdownForm.get('selectedModule').value)[0];
                        var obj = {
                            dropdown_id: "0",
                            dropdown_type_id: selected.id,
                            dropdown_description: this.dropdownForm.get('description').value,
                            active: true,
                            instance_name: sessionStorage.getItem('in'),
                            user_hash: sessionStorage.getItem('uh'),
                            user_name: sessionStorage.getItem('us'),
                            created_by: sessionStorage.getItem('u'),
                        };
                        this.dropdownService.dropdownIU(obj).subscribe(data => {
                            if (data.dropdown_id === "0") {
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Failed!", "Transaction failed!", "error");
                            }
                            else {
                                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Ok!", "Transaction successful!", "success");
                                this.dropdownService.dropdownList().subscribe(data => {
                                    this.moduleList = [];
                                    this.moduleList = data;
                                    this.table = [];
                                    this.table = this.moduleList.filter(x => x.type_id === this.dropdownForm.get('selectedModule').value);
                                    this.dropdownForm.reset();
                                });
                            }
                        });
                    },
                });
            }
        });
    }
};
DropdownSettingsComponent.ctorParameters = () => [
    { type: _services_administration_dropdown_settings_dropdown_service__WEBPACK_IMPORTED_MODULE_3__["DropdownService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DropdownSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-dropdown-settings',
        template: _raw_loader_dropdown_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dropdown_settings_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DropdownSettingsComponent);



/***/ }),

/***/ "/FZn":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/company/company.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Company</li>\n    </ol>\n  </nav>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <h6>Company</h6>\n          </div>\n          <form [formGroup]=\"companyForm\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputUsername1\">Company Name</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"companyName\" autocomplete=\"off\" placeholder=\"Company Name\">\n                      <p class=\"text-danger mt-1\" *ngIf=\"errCompanyName\">Company Name is needed!</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>File upload</label>\n                      <input (change)=\"handleFileInput($event)\" accept=\".png, .jpg, .jpeg\" type=\"file\" name=\"img[]\" class=\"file-upload-default\" id=\"fileUploadInputExample\">\n                      <div class=\"input-group col-xs-12\" (click)=\"openFileBrowser($event)\">\n                        <input type=\"text\" class=\"form-control file-upload-info\" disabled=\"\" placeholder=\"Upload Image\">\n                        <span class=\"input-group-append\">\n                          <button class=\"file-upload-browse btn btn-primary\" type=\"button\">Upload</button>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputUsername1\">Company Code</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"companyCode\" autocomplete=\"off\" placeholder=\"Company Code\">\n                      <p class=\"text-danger mt-1\" *ngIf=\"errCompanyCode\">Company Code is needed!</p>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"media d-block d-sm-flex\">\n                      <img [src]=\"url\" height=\"150\" width=\"width\" src=\"https://via.placeholder.com/200x150\" alt=\"...\">\n                    </div>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"card-title\">\n                  <h6>Address</h6>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-2\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Zip Code</label>\n                      <input type=\"text\" formControlName=\"zipCode\" class=\"form-control\" placeholder=\"Zip Code\">\n                      <p class=\"text-danger mt-1\" *ngIf=\"errZipCode\">Zip Code is needed!</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-1\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Unit/Flr #</label>\n                      <input type=\"text\" formControlName=\"unit\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Building</label>\n                      <input type=\"text\" formControlName=\"building\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Street</label>\n                      <input type=\"text\" formControlName=\"street\" class=\"form-control\" placeholder=\"Enter zip code\">\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Barangay</label>\n                      <input type=\"text\" formControlName=\"barangay\" class=\"form-control\" placeholder=\"Barangay\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Municipality</label>\n                      <input type=\"text\" formControlName=\"municipality\" class=\"form-control\" placeholder=\"Municipality\">\n                      <p class=\"text-danger mt-1\" *ngIf=\"errMunicipality\">Municipality is needed!</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Region</label>\n                      <ng-select \n                      [items]=\"region\"\n                      name=\"Country\"\n                      bindLabel=\"description\" \n                      bindValue=\"id\" \n                      placeholder=\"Select Country\"\n                      formControlName=\"selectedRegion\"\n                      (change)=\"selectRegion()\">\n                    </ng-select>\n                      <p class=\"text-danger mt-1\" *ngIf=\"errRegion\">Region is needed!</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">City</label>\n                      <ng-select \n                      [items]=\"companyCity\"\n                      name=\"Country\"\n                      bindLabel=\"to_description\" \n                      bindValue=\"to_id\" \n                      placeholder=\"Select Country\"\n                      formControlName=\"selectedCity\">\n                    </ng-select>\n                      <p class=\"text-danger mt-1\" *ngIf=\"errCity\">City is needed!</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-3\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Country</label>\n                      <ng-select \n                      [items]=\"country\"\n                      name=\"Country\"\n                      bindLabel=\"description\" \n                      bindValue=\"id\" \n                      placeholder=\"Select Country\"\n                      formControlName=\"selectedCompanyCountry\">\n                    </ng-select>\n                      <p class=\"text-danger mt-1\" *ngIf=\"errCountry\">Country is needed!</p>\n                    </div>\n                  </div>\n                </div>\n            </div>\n          </div>  \n          <ul class=\"nav justify-content-end\">\n                        <button class=\"btn btn-primary btn-icon-text\" (click)=\"submit()\">\n                          <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i>  Update Company\n                        </button>\n                        <button hidden [swal]=\"{title: '<strong>HTML <u>example</u></strong>', icon: 'info',\n                          html: '(You can use <b>bold text</b>, <a href=\\'http:\\/\\/github.com\\'>links</a> and other HTML tags)',\n                          showCloseButton: true,\n                          showCancelButton: true,\n                          focusConfirm: false,\n                          confirmButtonText:'<i class=\\'feather icon-thumbs-up\\'></i> Great!',\n                          confirmButtonAriaLabel: 'Thumbs up, great!',\n                          cancelButtonText: '<i class=\\'feather icon-thumbs-down\\'></i>',\n                          cancelButtonAriaLabel: 'Thumbs down'\n                        }\" class=\"btn btn-primary\">\n                        </button>\n          </ul>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>  \n</div>");

/***/ }),

/***/ "/iSe":
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.directive.js ***!
  \******************************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    // Assign DT properties here
                    var options = {
                        rowCallback: function (row, data, index) {
                            if (dtOptions.columns) {
                                var columns_1 = dtOptions.columns;
                                // Filter columns with pipe declared
                                var colsWithPipe = columns_1.filter(function (x) { return x.ngPipeInstance; });
                                // Iterate
                                colsWithPipe.forEach(function (el) {
                                    var pipe = el.ngPipeInstance;
                                    // find index of column using `data` attr
                                    var i = columns_1.findIndex(function (e) { return e.data == el.data; });
                                    // get <td> element which holds data using index
                                    var rowFromCol = row.childNodes.item(i);
                                    // Transform data with Pipe
                                    var rowVal = $(rowFromCol).text();
                                    var rowValAfter = pipe.transform(rowVal);
                                    // Apply transformed string to <td>
                                    $(rowFromCol).text(rowValAfter);
                                });
                            }
                            // run user specified row callback if provided.
                            if (_this.dtOptions.rowCallback) {
                                _this.dtOptions.rowCallback(row, data, index);
                            }
                        }
                    };
                    // merge user's config with ours
                    options = Object.assign({}, dtOptions, options);
                    _this.dt = $(_this.el.nativeElement).DataTable(options);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DataTableDirective.propDecorators = {
        dtOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dtTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
DataTableDirective.ɵfac = function DataTableDirective_Factory(t) { return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DataTableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableDirective, selectors: [["", "datatable", ""]], inputs: { dtOptions: "dtOptions", dtTrigger: "dtTrigger" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[datatable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return DataTableDirective;
}());


//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "/xTb":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/module-access/module-access.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Module Access</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Module Access</h6>\n              </div>\n            </div>\n            \n          </div>\n          <hr>\n          <div class=\"row\">\n          <div class=\"col-lg-3 email-aside border-lg-right\">\n            <div class=\"aside-content\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Module</label>\n                  <ng-select \n                  [items]=\"moduleType\"\n                  name=\"industry\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Module\"\n                  [(ngModel)]=\"selectedModule\">\n                </ng-select>\n                </div>\n            </div>\n            <div class=\"aside-content\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Access Type</label>\n                <ng-select \n                [items]=\"moduleType\"\n                name=\"industry\"\n                bindLabel=\"description\" \n                bindValue=\"id\" \n                placeholder=\"Select Access type\"\n                [(ngModel)]=\"selectedModule\">\n              </ng-select>\n              </div>\n          </div>\n            <ul class=\"nav justify-content-end\">\n              <button class=\"btn btn-primary btn-icon-text\">\n                <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Save Changes\n              </button>\n            </ul>\n          </div>\n          <div class=\"col-lg-9 email-content\">\n            <div class=\"table-responsive\">\n              <table id=\"dataTableExample\" class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Module Name</th>\n                    <th>Active</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Company Setup</td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input type=\"checkbox\" class=\"form-check-input\">\n                          <i class=\"input-frame\"></i>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Branch</td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input type=\"checkbox\" class=\"form-check-input\">\n                          <i class=\"input-frame\"></i>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Timekeeping Generation</td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input type=\"checkbox\" class=\"form-check-input\">\n                          <i class=\"input-frame\"></i>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Payroll Generation</td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input type=\"checkbox\" class=\"form-check-input\">\n                          <i class=\"input-frame\"></i>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <th></th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>");

/***/ }),

/***/ "0rz5":
/*!**********************************************************************************!*\
  !*** ./src/app/page/administration/branch/branch-view/branch-view.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2gtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "1G5X":
/*!******************************************************************************!*\
  !*** ./src/app/page/administration/module-access/module-access.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModuleAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleAccessComponent", function() { return ModuleAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_module_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./module-access.component.html */ "/xTb");
/* harmony import */ var _module_access_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-access.component.css */ "PLEc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ModuleAccessComponent = class ModuleAccessComponent {
    constructor() {
        this.moduleType = [
            { id: 1, description: 'Module' },
            { id: 2, description: 'Report' },
            { id: 3, description: 'Data Upload' },
        ];
    }
    ngOnInit() {
        this.isLoading = false;
    }
};
ModuleAccessComponent.ctorParameters = () => [];
ModuleAccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-module-access',
        template: _raw_loader_module_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_module_access_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModuleAccessComponent);



/***/ }),

/***/ "2Xea":
/*!***************************************************************************************!*\
  !*** ./src/app/page/administration/dropdown-settings/dropdown-settings.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "2b9m":
/*!*************************************************************************************!*\
  !*** ./src/app/page/administration/holiday/holiday-view/holiday-view.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob2xpZGF5LXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "2oBD":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js ***!
  \***********************************************************************************************/
/*! exports provided: MiniState, MiniStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return MiniState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return MiniStore; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class MiniState extends rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"] {
    /**
     * @param {?} _initialState
     * @param {?} actionsDispatcher$
     * @param {?} reducer
     */
    constructor(_initialState, actionsDispatcher$, reducer) {
        super(_initialState);
        /** @type {?} */
        const actionInQueue$ = actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]));
        /** @type {?} */
        const state$ = actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])((/**
         * @param {?} state
         * @param {?} action
         * @return {?}
         */
        (state, action) => {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }), _initialState));
        state$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.next(value)));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class MiniStore extends rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] {
    /**
     * @param {?} _dispatcher
     * @param {?} _reducer
     * @param {?} state$
     */
    constructor(_dispatcher, _reducer, 
    /* tslint:disable-next-line: no-any */
    state$) {
        super();
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        this.source = state$;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    select(pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        const mapped$ = this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(pathOrMapFn));
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this._dispatcher.next(action);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    next(action) {
        this._dispatcher.next(action);
    }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) {
        this._dispatcher.error(err);
    }
    /**
     * @return {?}
     */
    complete() {
        /*noop*/
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Action() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-mini-ngrx.js.map

/***/ }),

/***/ "2qWb":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/branch/branch-detail/branch-detail.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/layout/administration/branch-view\">Branch</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\n    </ol>\n  </nav>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <form [formGroup]=\"branchForm\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h6 class=\"card-title\">Branch Information</h6>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Branch Name</label>\n                      <input type=\"text\" formControlName=\"branchName\" class=\"form-control\" placeholder=\"Branch Name\">\n                      <p class=\"text-danger mt-1\" *ngIf=\"errbranchName\">Branch Name is needed!</p>\n                    </div>\n                  </div><!-- Col -->\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Industry</label>\n                      <ng-select \n                      [items]=\"industry\"\n                      name=\"Industry\"\n                      bindLabel=\"description\" \n                      bindValue=\"id\" \n                      placeholder=\"Select Industry\"\n                      formControlName=\"selectedIndustry\">\n                    </ng-select>\n                    <p class=\"text-danger mt-1\" *ngIf=\"errselectedIndustry\">Industry is needed!</p>\n                    </div>\n                  </div><!-- Col -->\n                </div><!-- Row -->\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Bank</label>\n                      <ng-select \n                      [items]=\"bank\"\n                      name=\"Bank\"\n                      bindLabel=\"description\" \n                      bindValue=\"id\" \n                      placeholder=\"Select Bank\"\n                      formControlName=\"selectedBank\">\n                    </ng-select>\n                    <p class=\"text-danger mt-1\" *ngIf=\"errselectedBank\">Bank is needed!</p>\n                    </div>\n                  </div><!-- Col -->\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Bank Account</label>\n                      <input type=\"text\" formControlName=\"bankAccount\" class=\"form-control\" placeholder=\"Bank Account\">\n                      <p class=\"text-danger mt-1\" *ngIf=\"errbankAccount\">Bank is needed!</p>\n                    </div>\n                  </div><!-- Col -->\n                </div><!-- Row -->\n          </div>\n        </div>\n        <hr>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">Branch Address</div>\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Zip Code</label>\n                  <input type=\"text\" formControlName=\"zipCode\" class=\"form-control\" placeholder=\"Zip Code\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errBranchZipCode\">Zip Code is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-1\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Unit/Flr #</label>\n                  <input type=\"text\" formControlName=\"unit\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Building</label>\n                  <input type=\"text\" formControlName=\"building\" class=\"form-control\" placeholder=\"Unit/Flr #\">\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Street</label>\n                  <input type=\"text\" formControlName=\"street\" class=\"form-control\" placeholder=\"Enter zip code\">\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Barangay</label>\n                  <input type=\"text\" formControlName=\"barangay\" class=\"form-control\" placeholder=\"Barangay\">\n                </div>\n              </div><!-- Col -->\n            </div><!-- Row -->\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Municipality</label>\n                  <input type=\"text\" formControlName=\"municipality\" class=\"form-control\" placeholder=\"Municipality\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errBranchMunicipality\">Municipality is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Region</label>\n                  <ng-select \n                  [items]=\"region\"\n                  name=\"Country\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Country\"\n                  formControlName=\"selectedRegion\"\n                  (change)=\"selectBranchRegion()\">\n                </ng-select>\n                  <p class=\"text-danger mt-1\" *ngIf=\"errBranchRegion\">Region is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">City</label>\n                  <ng-select \n                  [items]=\"branchCity\"\n                  name=\"Country\"\n                  bindLabel=\"to_description\" \n                  bindValue=\"to_id\" \n                  placeholder=\"Select Country\"\n                  formControlName=\"selectedCity\">\n                </ng-select>\n                  <p class=\"text-danger mt-1\" *ngIf=\"errBranchCity\">City is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Country</label>\n                  <ng-select \n                  [items]=\"country\"\n                  name=\"Country\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Country\"\n                  formControlName=\"selectedBranchCountry\">\n                </ng-select>\n                  <p class=\"text-danger mt-1\" *ngIf=\"errBranchCountry\">Country is needed!</p>\n                </div>\n              </div><!-- Col -->\n            </div><!-- Row -->\n          </div>\n        </div>\n        <hr>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">Government Information</div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">SSS</label>\n                  <input class=\"form-control mb-4 mb-md-0\" formControlName=\"sss\" mask=\"00-0000000-0\" [showMaskTyped]=\"true\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"errSSS\">SSS is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Philhealth</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"philhealth\" mask=\"00-000000000-0\" [showMaskTyped]=\"true\" placeholder=\"Philhealth\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errPhilhealth\">Philhealth is needed!</p>\n                </div>\n              </div><!-- Col -->\n            </div><!-- Row -->\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">TIN</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"tin\" mask=\"000-000-000-000\" [showMaskTyped]=\"true\" placeholder=\"TIN\" placeholder=\"TIN\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errTIN\">TIN is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Pagibig</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"pagibig\" mask=\"0000-0000-0000\" [showMaskTyped]=\"true\" placeholder=\"Pagibig\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errPagibig\">Pagibig is needed!</p>\n                </div>\n              </div><!-- Col -->\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">RDO</label>\n                  <ng-select \n                  [items]=\"rdoOffice\"\n                  name=\"RDO Office\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select RDO Office\"\n                  formControlName=\"selectedRdoOffice\"\n                  (change)=\"selectRdoOffice()\">\n                  </ng-select>\n                  <p class=\"text-danger mt-1\" *ngIf=\"errRDO\">RDO is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">&nbsp;</label>\n                  <ng-select \n                  [items]=\"rdoBranch\"\n                  name=\"RDO Branch\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select RDO Branch\"\n                  formControlName=\"selectedRdoBranch\"\n                  (change)=\"selectRdoBranch()\">\n                  </ng-select>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Branch</label>\n                  <ng-select \n                  [items]=\"pRegion\"\n                  name=\"Branch\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Branch\"\n                  formControlName=\"selectedPRegion\"\n                  (change)=\"selectPBranch()\">\n                  </ng-select>\n                  <p class=\"text-danger mt-1\" *ngIf=\"errBranch\">Branch is needed!</p>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">&nbsp;</label>\n                  <ng-select \n                  [items]=\"pCity\"\n                  name=\"Branch\"\n                  bindLabel=\"to_description\" \n                  bindValue=\"to_id\" \n                  placeholder=\"Select City\"\n                  formControlName=\"selectedPCity\"\n                  (change)=\"selectPCity()\">\n                  </ng-select>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">&nbsp;</label>\n                  <input type=\"text\" formControlName=\"selectedPCode\" class=\"form-control\" placeholder=\"Code\">\n                </div>\n              </div><!-- Col -->\n            </div><!-- Row -->\n          </div>\n        </div>\n        <hr>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">Contact Information</div>\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Phone</label>\n                  <ng-select \n                  [items]=\"phone\"\n                  name=\"Bank\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Type\"\n                  formControlName=\"selectedPhone\">\n                </ng-select>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Number</label>\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\" placeholder=\"Number\">\n                    </div>\n                    <div class=\"col-md-2\">\n                      <button type=\"button\" (click)=\"addPhone($event)\" title=\"Add\" class=\"btn btn-sm btn-primary btn-icon\">\n                        <i class=\"feather icon-plus\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  \n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Email</label>\n                  <ng-select \n                  [items]=\"email\"\n                  name=\"Bank\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Type\"\n                  formControlName=\"selectedEmail\">\n                </ng-select>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Address</label>\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" placeholder=\"@illimitado.com\">\n                    </div>\n                    <div class=\"col-md-2\">\n                      <button type=\"button\" (click)=\"addEmail($event)\" title=\"Add\" class=\"btn btn-sm btn-primary btn-icon\">\n                        <i class=\"feather icon-plus\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div><!-- Col -->\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>Type</th>\n                        <th>Number</th>\n                        <th></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let x of phoneList; let i = index\">\n                          <td>{{x.description}}</td>\n                          <td>{{x.number}}</td>\n                          <td> \n                            <button type=\"button\" (click)=\"removePhone(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                              <i class=\"feather icon-trash\"></i>\n                            </button> \n                        </td>\n                        </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>Type</th>\n                        <th>Address</th>\n                        <th></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let x of emailList; let i = index\">\n                          <td>{{x.description}}</td>\n                          <td>{{x.email_address}}</td>\n                          <td> <button type=\"button\" (click)=\"removeEmail(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                            <i class=\"feather icon-trash\"></i>\n                          </button> </td>\n                        </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">IP Address</label>\n                  <div class=\"row\">\n                    <div class=\"col-md-10\">\n                      <input type=\"text\" formControlName=\"ipAddress\" class=\"form-control\">\n                    </div>\n                    <div class=\"col-md-2\">\n                      <button type=\"button\" (click)=\"addIP($event)\" title=\"Add\" class=\"btn btn-sm btn-primary btn-icon\">\n                        <i class=\"feather icon-plus\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div><!-- Col -->\n              <div class=\"col-md-3\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th>IP</th>\n                        <th></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let x of ipList; let i = index\">\n                          <td>{{x.description}}</td>\n                          <td> <button type=\"button\" (click)=\"removeIP(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                            <i class=\"feather icon-trash\"></i>\n                          </button> </td>\n                        </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <ul class=\"nav justify-content-end\">\n              <button class=\"btn btn-primary btn-icon-text\" (click)=\"submit()\">\n                <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i>  Save Changes\n              </button>\n              <button hidden [swal]=\"{title: '<strong>HTML <u>example</u></strong>', icon: 'info',\n                html: '(You can use <b>bold text</b>, <a href=\\'http:\\/\\/github.com\\'>links</a> and other HTML tags)',\n                showCloseButton: true,\n                showCancelButton: true,\n                focusConfirm: false,\n                confirmButtonText:'<i class=\\'feather icon-thumbs-up\\'></i> Great!',\n                confirmButtonAriaLabel: 'Thumbs up, great!',\n                cancelButtonText: '<i class=\\'feather icon-thumbs-down\\'></i>',\n                cancelButtonAriaLabel: 'Thumbs down'\n              }\" class=\"btn btn-primary\">\n              </button>\n            </ul>\n          </div>\n        </div>\n        </form>\n  </div>\n</div>  ");

/***/ }),

/***/ "2xJl":
/*!******************************************************************************!*\
  !*** ./src/app/page/administration/payroll-rates/payroll-rates.component.ts ***!
  \******************************************************************************/
/*! exports provided: PayrollRatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollRatesComponent", function() { return PayrollRatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payroll_rates_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payroll-rates.component.html */ "pHVi");
/* harmony import */ var _payroll_rates_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-rates.component.css */ "hEik");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PayrollRatesComponent = class PayrollRatesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PayrollRatesComponent.ctorParameters = () => [];
PayrollRatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payroll-rates',
        template: _raw_loader_payroll_rates_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payroll_rates_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PayrollRatesComponent);



/***/ }),

/***/ "3XJ7":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js ***!
  \*************************************************************************************************************/
/*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return BsComponentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "lUod");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "WyaX");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */


class BsComponentRef {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class ContentRef {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    constructor(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef, 
    /* tslint:disable-next-line: no-any */
    componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    // tslint:disable-next-line
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        /**
         * A selector used if container element was not found
         */
        this.containerDefaultSelector = 'body';
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    /**
     * @return {?}
     */
    get isShown() {
        if (this._isHiding) {
            return false;
        }
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        /* tslint:disable-next-line: no-unnecessary-type-assertion */
        this._elementRef = ((/** @type {?} */ (opts.target))) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */
            const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (typeof this.container === 'string' && typeof document !== 'undefined') {
                /** @type {?} */
                const selectedElement = document.querySelector(this.container) ||
                    document.querySelector(this.containerDefaultSelector);
                selectedElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(opts.id ? { id: opts.id } : this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    hide(id) {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        const componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit(id ? { id } : null);
        return this;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        /** @type {?} */
        const hide = (this._listenOpts.hide = (/**
         * @return {?}
         */
        () => listenOpts.hide ? listenOpts.hide() : void this.hide()));
        /** @type {?} */
        const show = (this._listenOpts.show = (/**
         * @param {?} registerHide
         * @return {?}
         */
        (registerHide) => {
            listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
            registerHide();
        }));
        /** @type {?} */
        const toggle = (/**
         * @param {?} registerHide
         * @return {?}
         */
        (registerHide) => {
            this.isShown ? hide() : show(registerHide);
        });
        this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show,
            hide,
            toggle
        });
        return this;
    }
    /**
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    }
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    attachInline(vRef, 
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    }
    /**
     * @return {?}
     */
    _registerOutsideClick() {
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            /** @type {?} */
            const target = this._componentRef.location.nativeElement;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"])(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideClick: this._listenOpts.outsideClick,
                    hide: (/**
                     * @return {?}
                     */
                    () => this._listenOpts.hide())
                });
            }));
        }
        if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            const target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerEscClick"])(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: (/**
                 * @return {?}
                 */
                () => this._listenOpts.hide())
            });
        }
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @private
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this.onShown.subscribe((/**
         * @return {?}
         */
        () => {
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        }));
        this._zoneSubscription = this._ngZone.onStable.subscribe((/**
         * @return {?}
         */
        () => {
            if (!this._componentRef) {
                return;
            }
            this._posService.calcPosition();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    _getContentRef(
    /* tslint:disable-next-line: no-any*/
    content, 
    /* tslint:disable-next-line: no-any*/
    context, 
    /* tslint:disable-next-line: no-any*/
    initialState) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
                /** @type {?} */
                const _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */
            const viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            const modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
                providers: this._providers,
                parent: this._injector
            });
            /** @type {?} */
            const componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentLoaderFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) { return new (t || ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"])); };
ComponentLoaderFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComponentLoaderFactory, factory: ComponentLoaderFactory.ɵfac });
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentLoaderFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-component-loader.js.map

/***/ }),

/***/ "6Biv":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/holiday/holiday-detail/holiday-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/layout/administration/holiday-view\">Holiday</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <h6>Holiday</h6>\n          </div>\n          <form [formGroup]=\"headerForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Name\">\n                <p class=\"text-danger mt-1\" *ngIf=\"errName\">Please input name!</p>\n              </div>\n            </div>\n            <div class=\"col-sm-5\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Branch</label>\n                <ng-select\n                [items]=\"branch\"\n                [multiple]=true\n                bindLabel=\"description\" \n                bindValue=\"id\" \n                placeholder=\"Select Branch\"\n                formControlName=\"selectedBranch\">\n              </ng-select>\n              <p class=\"text-danger mt-1\" *ngIf=\"errBranch\">Please select atleast one branch!</p>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Description</label>\n                <input type=\"text\" formControlName=\"description\" class=\"form-control\" placeholder=\"Description\">\n                <p class=\"text-danger mt-1\" *ngIf=\"errDescription\">Please input description!</p>\n              </div>\n            </div>\n          </div>\n        </form>\n          <hr>\n          <form [formGroup]=\"holidayForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Holiday Name</label>\n                <input type=\"text\" formControlName=\"holidayName\" class=\"form-control\" placeholder=\"Holiday Name\">\n                <p class=\"text-danger mt-1\" *ngIf=\"errHolidayName\">Please input holiday name!</p>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Holiday Type</label>\n                <ng-select \n                  [items]=\"holidayType\"\n                  name=\"Holiday\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Holiday Type\"\n                  formControlName=\"selectedHolidayType\">\n                </ng-select>\n                <p class=\"text-danger mt-1\" *ngIf=\"errHolidayType\">Please input holiday type!</p>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Month</label>\n                <ng-select \n                [items]=\"month\"\n                name=\"Month\"\n                bindLabel=\"description\" \n                bindValue=\"id\" \n                placeholder=\"Select Month\"\n                formControlName=\"selectedMonth\">\n              </ng-select>\n              <p class=\"text-danger mt-1\" *ngIf=\"errMonth\">Please input month!</p>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Day</label>\n                <input type=\"text\" formControlName=\"day\" mask=\"00\" placeholder=\"dd\" [showMaskTyped]=\"true\" class=\"form-control\" placeholder=\"Day\">\n                <p class=\"text-danger mt-1\" *ngIf=\"errDay\">Please input day!</p>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Year</label>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <input type=\"text\" formControlName=\"year\" mask=\"0000\" placeholder=\"yyyy\" [showMaskTyped]=\"true\" class=\"form-control\" placeholder=\"Year\">\n                    <p class=\"text-danger mt-1\" *ngIf=\"errYear\">Please input year!</p>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <button type=\"button\" (click)=\"addHoliday()\" class=\"btn btn-primary btn-icon\">\n                      <i class=\"feather icon-plus\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n          <div class=\"row\">\n            <p class=\"text-danger mt-1\" *ngIf=\"errHolidayList\">Please add atleast one holiday!</p>\n            <div class=\"table-responsive\">\n              <table id=\"dataTableExample\" class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Holiday Name</th>\n                    <th>Holiday Type</th>\n                    <th>Month</th>\n                    <th>Day</th>\n                    <th>Year</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let x of holidayList; let i = index\">\n                    <td>{{x.holidayName}}</td>\n                    <td>{{x.holidayTypeDesc}}</td>\n                    <td>{{x.monthDesc}}</td>\n                    <td>{{x.day}}</td>\n                    <td>{{x.year}}</td>\n                    <td> \n                      <button type=\"button\" (click)=\"removeHoliday(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                        <i class=\"feather icon-trash\"></i>\n                      </button> \n                  </td>\n                  </tr>\n                </tbody>\n                <tfoot></tfoot>\n              </table>\n            </div>\n          </div>\n      </div>\n      <div class=\"card-footer\">\n        <ul class=\"nav justify-content-end\">\n          <button class=\"btn btn-primary btn-icon-text\" (click)=\"submit()\">\n            <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Save Holiday\n          </button>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>  \n  </div>\n");

/***/ }),

/***/ "6Zyq":
/*!*********************************************************************************!*\
  !*** ./src/app/page/administration/branch/branch-view/branch-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BranchViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchViewComponent", function() { return BranchViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_branch_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./branch-view.component.html */ "mArK");
/* harmony import */ var _branch_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-view.component.css */ "0rz5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_administration_branch_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/administration/branch/branch.service */ "FFZL");







let BranchViewComponent = class BranchViewComponent {
    constructor(branchService, router) {
        this.branchService = branchService;
        this.router = router;
        this.dtOptions = {};
        this.branchList = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.branchService.branchList("0").subscribe(data => {
            this.branchList = data;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    viewBranch(id) {
        this.router.navigate(["/layout/administration/branch-detail", id]);
    }
};
BranchViewComponent.ctorParameters = () => [
    { type: _services_administration_branch_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BranchViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-branch-view',
        template: _raw_loader_branch_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_branch_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BranchViewComponent);



/***/ }),

/***/ "6rPY":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/allowance-deduction/allowance-deduction-detail/allowance-deduction-detail.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/layout/administration/allowance-deduction-view\">Allowance/Deduction</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <h6>Allowance/Deduction</h6>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n              </div>\n            </div>\n            <div class=\"col-sm-5\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Type</label>\n                <ng-select\n                [items]=\"moduleType\"\n                [closeOnSelect]=\"false\"\n                [searchable]=\"false\"\n                bindLabel=\"description\"\n                placeholder=\"Select Type\"\n                [(ngModel)]=\"selectedType\"\n                (ngModelChange)=\"modelChangeFn($event)\">\n              </ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">&nbsp;</label>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\">\n                      <i class=\"input-frame\"></i>\n                      Active?\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\" *ngIf=\"isType\">\n                <label class=\"control-label\">Minimum Hour</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Minimum Hour\">\n              </div>\n              <div class=\"form-group\" *ngIf=\"!isType\">\n                <label class=\"control-label\">Deduction Type</label>\n                <ng-select\n                [items]=\"deductionType\"\n                [closeOnSelect]=\"false\"\n                [searchable]=\"false\"\n                bindLabel=\"description\"\n                placeholder=\"Select Deduction Type\"\n                [(ngModel)]=\"selectedDeductionType\"\n                (ngModelChange)=\"modelDeductionFn($event)\">\n              </ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\" *ngIf=\"isType\">\n                <label class=\"control-label\">Maximum Hour</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Minimum Hour\">\n              </div>\n              <div class=\"form-group\" *ngIf=\"!isGov\">\n                <label class=\"control-label\">Government Type</label>\n                <ng-select\n                [items]=\"governmentType\"\n                [closeOnSelect]=\"false\"\n                [searchable]=\"false\"\n                bindLabel=\"description\"\n                placeholder=\"Select Government Type\"\n                [(ngModel)]=\"selectedGovernmentType\">\n              </ng-select>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"form-group\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">&nbsp;</label>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" class=\"form-check-input\">\n                      <i class=\"input-frame\"></i>\n                      Taxable?\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"card-footer\">\n        <ul class=\"nav justify-content-end\">\n          <button class=\"btn btn-primary btn-icon-text\">\n            <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Save Allowance/Deduction\n          </button>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>  \n</div>\n");

/***/ }),

/***/ "8USl":
/*!**************************************************************!*\
  !*** ./src/app/page/administration/administration.module.ts ***!
  \**************************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _contributions_contributions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contributions/contributions.component */ "jADn");
/* harmony import */ var _payroll_rates_payroll_rates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-rates/payroll-rates.component */ "2xJl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _allowance_deduction_allowance_deduction_detail_allowance_deduction_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allowance-deduction/allowance-deduction-detail/allowance-deduction-detail.component */ "UIwo");
/* harmony import */ var _allowance_deduction_allowance_deduction_view_allowance_deduction_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allowance-deduction/allowance-deduction-view/allowance-deduction-view.component */ "zqyf");
/* harmony import */ var _holiday_holiday_detail_holiday_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./holiday/holiday-detail/holiday-detail.component */ "9ygZ");
/* harmony import */ var _holiday_holiday_view_holiday_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./holiday/holiday-view/holiday-view.component */ "JeOo");
/* harmony import */ var _shiftcodes_shiftcodes_detail_shiftcodes_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shiftcodes/shiftcodes-detail/shiftcodes-detail.component */ "mnPa");
/* harmony import */ var _shiftcodes_shiftcodes_view_shiftcodes_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shiftcodes/shiftcodes-view/shiftcodes-view.component */ "tRUT");
/* harmony import */ var _series_code_series_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./series-code/series-code.component */ "dKZm");
/* harmony import */ var _dropdown_settings_dropdown_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dropdown-settings/dropdown-settings.component */ "/1ZU");
/* harmony import */ var _approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./approval-process/approval-process.component */ "9odb");
/* harmony import */ var _module_access_module_access_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./module-access/module-access.component */ "1G5X");
/* harmony import */ var _branch_branch_view_branch_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./branch/branch-view/branch-view.component */ "6Zyq");
/* harmony import */ var _branch_branch_detail_branch_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./branch/branch-detail/branch-detail.component */ "GDk6");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company/company.component */ "AsHk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _administration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./administration.component */ "wyZF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../core/feather-icon/feather-icon.module */ "tyVc");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _leave_leave_view_leave_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./leave/leave-view/leave-view.component */ "itO0");
/* harmony import */ var _leave_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./leave/leave-detail/leave-detail.component */ "f/ga");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-archwizard */ "mkVx");

































const routes = [
    {
        path: '',
        component: _administration_component__WEBPACK_IMPORTED_MODULE_19__["AdministrationComponent"],
        children: [
            {
                path: '',
                redirectTo: 'company',
                pathMatch: 'full'
            },
            {
                path: 'company',
                component: _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"]
            },
            {
                path: 'branch-view',
                component: _branch_branch_view_branch_view_component__WEBPACK_IMPORTED_MODULE_14__["BranchViewComponent"]
            },
            {
                path: 'branch-detail',
                redirectTo: "branch-detail/",
                pathMatch: 'full'
            },
            {
                path: 'branch-detail/:id',
                component: _branch_branch_detail_branch_detail_component__WEBPACK_IMPORTED_MODULE_15__["BranchDetailComponent"]
            },
            {
                path: 'module-access',
                component: _module_access_module_access_component__WEBPACK_IMPORTED_MODULE_13__["ModuleAccessComponent"]
            },
            {
                path: 'approval-process',
                component: _approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_12__["ApprovalProcessComponent"]
            },
            {
                path: 'dropdown-settings',
                component: _dropdown_settings_dropdown_settings_component__WEBPACK_IMPORTED_MODULE_11__["DropdownSettingsComponent"]
            },
            {
                path: 'series-code',
                component: _series_code_series_code_component__WEBPACK_IMPORTED_MODULE_10__["SeriesCodeComponent"]
            },
            {
                path: 'shiftcodes-view',
                component: _shiftcodes_shiftcodes_view_shiftcodes_view_component__WEBPACK_IMPORTED_MODULE_9__["ShiftcodesViewComponent"]
            },
            {
                path: 'shift',
                component: _shiftcodes_shiftcodes_detail_shiftcodes_detail_component__WEBPACK_IMPORTED_MODULE_8__["ShiftcodesDetailComponent"]
            },
            {
                path: 'holiday-view',
                component: _holiday_holiday_view_holiday_view_component__WEBPACK_IMPORTED_MODULE_7__["HolidayViewComponent"]
            },
            {
                path: 'holiday-detail',
                component: _holiday_holiday_detail_holiday_detail_component__WEBPACK_IMPORTED_MODULE_6__["HolidayDetailComponent"]
            },
            {
                path: 'allowance-deduction-view',
                component: _allowance_deduction_allowance_deduction_view_allowance_deduction_view_component__WEBPACK_IMPORTED_MODULE_5__["AllowanceDeductionViewComponent"]
            },
            {
                path: 'allowance-deduction-detail',
                component: _allowance_deduction_allowance_deduction_detail_allowance_deduction_detail_component__WEBPACK_IMPORTED_MODULE_4__["AllowanceDeductionDetailComponent"]
            },
            {
                path: 'payroll-rates',
                component: _payroll_rates_payroll_rates_component__WEBPACK_IMPORTED_MODULE_2__["PayrollRatesComponent"]
            },
            {
                path: 'contributions',
                component: _contributions_contributions_component__WEBPACK_IMPORTED_MODULE_1__["ContributionsComponent"]
            },
            {
                path: 'leave-view',
                component: _leave_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_31__["LeaveDetailComponent"]
            },
            {
                path: 'leave-detail',
                component: _leave_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_31__["LeaveDetailComponent"]
            },
        ]
    }
];
let AdministrationModule = class AdministrationModule {
};
AdministrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forChild(routes),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__["SweetAlert2Module"].forRoot(),
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__["SweetAlert2Module"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_23__["SweetAlert2Module"].forChild({ /* options */}),
            _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_24__["FeahterIconModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_25__["DataTablesModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_26__["NgxMaskModule"].forRoot({ validation: true }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_28__["TimepickerModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_29__["PopoverModule"].forRoot(),
            angular_archwizard__WEBPACK_IMPORTED_MODULE_32__["ArchwizardModule"],
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"]],
        declarations: [
            _administration_component__WEBPACK_IMPORTED_MODULE_19__["AdministrationComponent"],
            _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"],
            _module_access_module_access_component__WEBPACK_IMPORTED_MODULE_13__["ModuleAccessComponent"],
            _branch_branch_view_branch_view_component__WEBPACK_IMPORTED_MODULE_14__["BranchViewComponent"],
            _branch_branch_detail_branch_detail_component__WEBPACK_IMPORTED_MODULE_15__["BranchDetailComponent"],
            _approval_process_approval_process_component__WEBPACK_IMPORTED_MODULE_12__["ApprovalProcessComponent"],
            _dropdown_settings_dropdown_settings_component__WEBPACK_IMPORTED_MODULE_11__["DropdownSettingsComponent"],
            _series_code_series_code_component__WEBPACK_IMPORTED_MODULE_10__["SeriesCodeComponent"],
            _shiftcodes_shiftcodes_view_shiftcodes_view_component__WEBPACK_IMPORTED_MODULE_9__["ShiftcodesViewComponent"],
            _shiftcodes_shiftcodes_detail_shiftcodes_detail_component__WEBPACK_IMPORTED_MODULE_8__["ShiftcodesDetailComponent"],
            _holiday_holiday_view_holiday_view_component__WEBPACK_IMPORTED_MODULE_7__["HolidayViewComponent"],
            _holiday_holiday_detail_holiday_detail_component__WEBPACK_IMPORTED_MODULE_6__["HolidayDetailComponent"],
            _allowance_deduction_allowance_deduction_view_allowance_deduction_view_component__WEBPACK_IMPORTED_MODULE_5__["AllowanceDeductionViewComponent"],
            _allowance_deduction_allowance_deduction_detail_allowance_deduction_detail_component__WEBPACK_IMPORTED_MODULE_4__["AllowanceDeductionDetailComponent"],
            _payroll_rates_payroll_rates_component__WEBPACK_IMPORTED_MODULE_2__["PayrollRatesComponent"],
            _contributions_contributions_component__WEBPACK_IMPORTED_MODULE_1__["ContributionsComponent"],
            _leave_leave_view_leave_view_component__WEBPACK_IMPORTED_MODULE_30__["LeaveViewComponent"],
            _leave_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_31__["LeaveDetailComponent"],
        ]
    })
], AdministrationModule);



/***/ }),

/***/ "9odb":
/*!************************************************************************************!*\
  !*** ./src/app/page/administration/approval-process/approval-process.component.ts ***!
  \************************************************************************************/
/*! exports provided: ApprovalProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalProcessComponent", function() { return ApprovalProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_approval_process_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./approval-process.component.html */ "SgaN");
/* harmony import */ var _approval_process_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval-process.component.css */ "ytEC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let ApprovalProcessComponent = class ApprovalProcessComponent {
    constructor(fb) {
        this.fb = fb;
        this.defaultStatus = true;
        this.statusList = [];
    }
    ngOnInit() {
        this.approvalForm = this.fb.group({
            status: [''],
        });
        this.employeeForm = this.fb.group({
            status: [''],
            selectedStatus: [null],
        });
    }
    addStatus() {
        this.defaultStatus = false;
        this.statusList.push({
            index: this.statusList.length,
            status: this.approvalForm.get('status').value,
            approver: []
        });
        console.log(this.statusList);
    }
    addEmployee() {
        alert(this.employeeForm.get('selectedStatus').value);
    }
};
ApprovalProcessComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ApprovalProcessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-approval-process',
        template: _raw_loader_approval_process_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_approval_process_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApprovalProcessComponent);



/***/ }),

/***/ "9ygZ":
/*!****************************************************************************************!*\
  !*** ./src/app/page/administration/holiday/holiday-detail/holiday-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HolidayDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayDetailComponent", function() { return HolidayDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_holiday_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./holiday-detail.component.html */ "6Biv");
/* harmony import */ var _holiday_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./holiday-detail.component.css */ "jIM8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let HolidayDetailComponent = class HolidayDetailComponent {
    constructor(fb) {
        this.fb = fb;
        this.isLoading = true;
        this.branch = [{
                id: '0',
                description: 'Main Branch'
            }, {
                id: '1',
                description: 'Sub Branch'
            }];
        this.holidayType = [{
                id: '0',
                description: 'Regular Holiday'
            }, {
                id: '1',
                description: 'Special Holiday'
            }];
        this.month = [{
                id: '0',
                description: 'January'
            }, {
                id: '1',
                description: 'Februrary'
            }, {
                id: '2',
                description: 'March'
            }];
        this.holidayList = [];
    }
    ngOnInit() {
        this.headerForm = this.fb.group({
            name: [''],
            selectedBranch: [null],
            description: [''],
        });
        this.holidayForm = this.fb.group({
            holidayName: [''],
            selectedHolidayType: [null],
            holidayTypeDesc: [''],
            selectedMonth: [null],
            monthDesc: [''],
            day: [''],
            year: [''],
        });
        this.pageLoad(false);
        this.isLoading = false;
    }
    removeHoliday(e) {
        this.holidayList.splice(e, 1);
    }
    addHoliday() {
        let flag = this.validateHoliday();
        if (flag) {
            var selectedHolidayType = this.holidayType.filter(x => x.id === this.holidayForm.get('selectedHolidayType').value)[0];
            var selectedMonth = this.month.filter(x => x.id === this.holidayForm.get('selectedMonth').value)[0];
            this.holidayList.push({
                holidayName: this.holidayForm.get('holidayName').value,
                holidayType: selectedHolidayType['id'],
                holidayTypeDesc: selectedHolidayType['description'],
                month: selectedMonth['id'],
                monthDesc: selectedMonth['description'],
                day: this.holidayForm.get('day').value,
                year: this.holidayForm.get('year').value,
            });
            this.holidayForm.reset();
        }
    }
    validateHoliday() {
        this.pageLoad(false);
        let flag = true;
        if (this.holidayForm.get('holidayName').value == "" || this.holidayForm.get('holidayName').value == null) {
            flag = false;
            this.errHolidayName = true;
        }
        if (this.holidayForm.get('selectedHolidayType').value == "" || this.holidayForm.get('selectedHolidayType').value == null) {
            flag = false;
            this.errHolidayType = true;
        }
        if (this.holidayForm.get('selectedMonth').value == "" || this.holidayForm.get('selectedMonth').value == null) {
            flag = false;
            this.errMonth = true;
        }
        if (this.holidayForm.get('day').value == "" || this.holidayForm.get('day').value == null) {
            flag = false;
            this.errDay = true;
        }
        if (this.holidayForm.get('year').value == "" || this.holidayForm.get('year').value == null) {
            flag = false;
            this.errYear = true;
        }
        return flag;
    }
    pageLoad(hidden) {
        this.errHolidayName = hidden;
        this.errHolidayType = hidden;
        this.errMonth = hidden;
        this.errDay = hidden;
        this.errYear = hidden;
        this.errName = hidden;
        this.errBranch = hidden;
        this.errDescription = hidden;
        this.errHolidayList = hidden;
    }
    submit() {
        let flag = this.submitValidation();
        if (flag) {
        }
    }
    submitValidation() {
        this.pageLoad(false);
        let flag = true;
        if (this.headerForm.get('name').value == "" || this.headerForm.get('name').value == null) {
            flag = false;
            this.errName = true;
        }
        if (this.headerForm.get('selectedBranch').value == "" || this.headerForm.get('selectedBranch').value == null) {
            flag = false;
            this.errBranch = true;
        }
        if (this.headerForm.get('description').value == "" || this.headerForm.get('description').value == null) {
            flag = false;
            this.errDescription = true;
        }
        if (this.holidayList.length <= 0) {
            flag = false;
            this.errHolidayList = true;
        }
        return flag;
    }
};
HolidayDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
HolidayDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-holiday-detail',
        template: _raw_loader_holiday_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_holiday_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HolidayDetailComponent);



/***/ }),

/***/ "AsHk":
/*!******************************************************************!*\
  !*** ./src/app/page/administration/company/company.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_company_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./company.component.html */ "/FZn");
/* harmony import */ var _company_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.component.css */ "BC/6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_administration_company_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/administration/company/company.service */ "qXFu");







let CompanyComponent = class CompanyComponent {
    constructor(fb, companyService) {
        this.fb = fb;
        this.companyService = companyService;
        this.isLoading = true;
        this.viewForm = [];
        this.companyCity = [];
        this.region = [];
        this.dropdown = [];
        this.country = [];
        this.errCompanyName = false;
        this.errCompanyCode = false;
        this.errZipCode = false;
        this.errMunicipality = false;
        this.errCity = false;
        this.errRegion = false;
        this.errCountry = false;
        this.url = "https://via.placeholder.com/200x150";
    }
    ngOnInit() {
        this.companyForm = this.fb.group({
            companyID: [0],
            companyName: [''],
            companyCode: [''],
            selectedCompanyCountry: [null],
            img: [null],
            zipCode: [''],
            unit: [''],
            building: [''],
            street: [''],
            barangay: [''],
            municipality: [''],
            selectedCity: [null],
            selectedRegion: [null],
            createdBy: sessionStorage.getItem('u'),
        });
        this.companyService.dropdownList().subscribe(data => {
            this.country = data.filter(x => x.type_id === 3);
            this.region = data.filter(x => x.type_id === 10);
            this.companyService.dropdownEntitlement().subscribe(data => {
                this.dropdown = data;
                this.companyService.companyView().subscribe(data => {
                    this.viewForm = data[0];
                    this.companyCity = [];
                    this.companyCity = this.dropdown.filter(x => x.id === this.viewForm['selectedRegion']);
                    this.companyForm.setValue({
                        companyID: this.viewForm['companyID'],
                        companyName: this.viewForm['companyName'],
                        companyCode: this.viewForm['companyCode'],
                        selectedCompanyCountry: this.viewForm['selectedCompanyCountry'],
                        img: this.viewForm['img'],
                        zipCode: this.viewForm['zipCode'],
                        unit: this.viewForm['unit'],
                        building: this.viewForm['building'],
                        street: this.viewForm['street'],
                        barangay: this.viewForm['barangay'],
                        municipality: this.viewForm['municipality'],
                        selectedCity: this.viewForm['selectedCity'],
                        selectedRegion: this.viewForm['selectedRegion'],
                        createdBy: sessionStorage.getItem('u'),
                    });
                });
                this.isLoading = false;
            });
        });
    }
    selectRegion() {
        this.companyForm.get('selectedCity').reset();
        this.companyCity = [];
        this.companyCity = this.dropdown.filter(x => x.id === this.companyForm.get('selectedRegion').value);
    }
    openFileBrowser(event) {
        event.preventDefault();
        let element = document.querySelector("#fileUploadInputExample");
        element.click();
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            this.companyForm.patchValue({
                img: event.target.files[0].name
            });
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.url = event.target.result;
            };
        }
    }
    handleFileInput(event) {
        if (event.target.files.length) {
            let element = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info");
            let fileName = event.target.files[0].name;
            element.setAttribute('value', fileName);
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                this.companyForm.patchValue({
                    img: event.target.files[0].name
                });
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (event) => {
                    this.url = event.target.result;
                };
            }
        }
    }
    submit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Please Wait !',
                    allowOutsideClick: false,
                    onBeforeOpen: () => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
                        this.companyService.tenantUpdate(this.companyForm.value).subscribe(data => {
                            if (data.companyID === "0") {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Failed!", "Transaction failed!", "error");
                            }
                            else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Ok!", "Transaction successful!", "success");
                            }
                        });
                    },
                });
            }
        });
    }
};
CompanyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_administration_company_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] }
];
CompanyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-company',
        template: _raw_loader_company_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CompanyComponent);



/***/ }),

/***/ "BC/6":
/*!*******************************************************************!*\
  !*** ./src/app/page/administration/company/company.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "EDFS":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js ***!
  \*******************************************************************************************/
/*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "3XJ7");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "lUod");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "WyaX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */





function PopoverContainerComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = ["*"];
class PopoverConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
}
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
/** @nocollapse */ PopoverConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PopoverConfig_Factory() { return new PopoverConfig(); }, token: PopoverConfig, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
    }
}
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig)); };
PopoverContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 7, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.popoverId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    } }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]], template: function PopoverContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'popover-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[attr.id]': 'popoverId',
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }]
    }], function () { return [{ type: PopoverConfig }]; }, { placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let id = 0;
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} _positionService
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        /**
         * unique id popover - use for aria-describedby
         */
        this.popoverId = id++;
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', (/**
             * @return {?}
             */
            function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            }));
        }
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Set attribute aria-describedBy for element directive and
     * set id for the popover
     * @return {?}
     */
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `ngx-popover-${this.popoverId}` : null;
        if (this._ariaDescribedby) {
            this._popover.instance.popoverId = this._ariaDescribedby;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        /** @type {?} */
        const showPopover = (/**
         * @return {?}
         */
        () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._popover
                .attach(PopoverContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.popover,
                context: this.popoverContext,
                placement: this.placement,
                title: this.popoverTitle,
                containerClass: this.containerClass
            });
            if (!this.adaptivePosition) {
                this._positionService.calcPosition();
                this._positionService.deletePositionElement(this._popover._componentRef.location);
            }
            this.isOpen = true;
            this.setAriaDescribedBy();
        });
        /** @type {?} */
        const cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        () => {
            if (this._popoverCancelShowFn) {
                this._popoverCancelShowFn();
            }
        });
        if (this.delay) {
            /** @type {?} */
            const _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe((/**
             * @return {?}
             */
            () => {
                showPopover();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["parseTriggers"])(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                (trigger) => {
                    this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    () => {
                        _timer.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showPopover();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (this.isOpen) {
            this._popover.hide();
            this.setAriaDescribedBy();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: (/**
             * @return {?}
             */
            () => this.show()),
            hide: (/**
             * @return {?}
             */
            () => this.hide())
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"])); };
PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PopoverDirective, selectors: [["", "popover", ""]], inputs: { outsideClick: "outsideClick", containerClass: "containerClass", isOpen: "isOpen", adaptivePosition: "adaptivePosition", popover: "popover", popoverContext: "popoverContext", popoverTitle: "popoverTitle", placement: "placement", triggers: "triggers", container: "container", delay: "delay" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-popover"] });
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: PopoverConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }
];
PopoverDirective.propDecorators = {
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popoverContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popoverTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[popover]', exportAs: 'bs-popover' }]
    }], function () { return [{ type: PopoverConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"] }, { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }]; }, { outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopoverModule });
PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: function () { return [PopoverDirective, PopoverContainerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [PopoverDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-popover.js.map

/***/ }),

/***/ "GDk6":
/*!*************************************************************************************!*\
  !*** ./src/app/page/administration/branch/branch-detail/branch-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BranchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchDetailComponent", function() { return BranchDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_branch_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./branch-detail.component.html */ "2qWb");
/* harmony import */ var _branch_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-detail.component.css */ "yfLR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/master/master.service */ "m7hs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_administration_branch_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/administration/branch/branch.service */ "FFZL");









let BranchDetailComponent = class BranchDetailComponent {
    constructor(fb, masterService, route, branchService) {
        this.fb = fb;
        this.masterService = masterService;
        this.route = route;
        this.branchService = branchService;
        this.isLoading = true;
        this.errbranchName = false;
        this.errselectedIndustry = false;
        this.errselectedBank = false;
        this.errbankAccount = false;
        this.errBranchZipCode = false;
        this.errBranchMunicipality = false;
        this.errBranchRegion = false;
        this.errBranchCity = false;
        this.errBranchCountry = false;
        this.errSSS = false;
        this.errPhilhealth = false;
        this.errTIN = false;
        this.errPagibig = false;
        this.errRDO = false;
        this.errBranch = false;
        this.errBranchList = false;
        this.branchCity = [];
        this.industry = [];
        this.bank = [];
        this.pCity = [];
        this.country = [];
        this.rdoOffice = [];
        this.rdoBranch = [];
        this.pRegion = [];
        this.region = [];
        this.phone = [];
        this.email = [];
        this.phoneList = [];
        this.emailList = [];
        this.ipList = [];
        this.dropdown = [];
        this.branchDetail = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.branchForm = this.fb.group({
            branchID: [0],
            branchName: [''],
            selectedIndustry: [null],
            selectedBank: [null],
            bankAccount: [''],
            zipCode: [''],
            unit: [''],
            building: [''],
            street: [''],
            barangay: [''],
            municipality: [''],
            sss: [''],
            philhealth: [''],
            tin: [''],
            pagibig: [''],
            selectedCity: [null],
            selectedRegion: [null],
            selectedBranchCountry: [null],
            selectedRdoOffice: [null],
            selectedRdoBranch: [null],
            selectedPRegion: [null],
            selectedPCity: [null],
            selectedPCode: [''],
            selectedPhone: [null],
            phoneNumber: [''],
            selectedEmail: [null],
            emailAddress: [''],
            ipAddress: [''],
            createdBy: [sessionStorage.getItem('user')],
        });
        this.masterService.dropdownTenantList().subscribe(data => {
            this.industry = data.filter(x => x.type_id === 1);
            this.bank = data.filter(x => x.type_id === 2);
            this.phone = data.filter(x => x.type_id === 11);
            this.email = data.filter(x => x.type_id === 12);
            this.masterService.dropdownList().subscribe(data => {
                this.country = data.filter(x => x.type_id === 3);
                this.rdoOffice = data.filter(x => x.type_id === 4);
                this.rdoBranch = data.filter(x => x.type_id === 5);
                this.pRegion = data.filter(x => x.type_id === 6);
                this.region = data.filter(x => x.type_id === 10);
                this.masterService.dropdownEntitlement().subscribe(data => {
                    this.dropdown = data;
                    if (this.id !== "") {
                        this.branchService.branchList(this.id).subscribe(data => {
                            this.branchDetail = data[0];
                            this.branchCity = [];
                            this.branchCity = this.dropdown.filter(x => x.id === this.branchDetail['selectedRegion']);
                            this.pCity = [];
                            this.pCity = this.dropdown.filter(x => x.id === this.branchDetail['selectedPRegion'] && x.id_to === 0);
                            this.branchForm.setValue({
                                branchID: this.branchDetail['branch_id'],
                                branchName: this.branchDetail['branchName'],
                                selectedIndustry: this.branchDetail['selectedIndustry'],
                                selectedBank: this.branchDetail['selectedBank'],
                                bankAccount: this.branchDetail['bankAccount'],
                                zipCode: this.branchDetail['zipCode'],
                                unit: this.branchDetail['unit'],
                                building: this.branchDetail['building'],
                                street: this.branchDetail['street'],
                                barangay: this.branchDetail['barangay'],
                                municipality: this.branchDetail['municipality'],
                                sss: this.branchDetail['sss'],
                                philhealth: this.branchDetail['philhealth'],
                                tin: this.branchDetail['tin'],
                                pagibig: this.branchDetail['pagibig'],
                                selectedCity: this.branchDetail['selectedCity'],
                                selectedRegion: this.branchDetail['selectedRegion'],
                                selectedBranchCountry: this.branchDetail['selectedBranchCountry'],
                                selectedRdoOffice: this.branchDetail['selectedRdoOffice'],
                                selectedRdoBranch: this.branchDetail['selectedRdoBranch'],
                                selectedPRegion: this.branchDetail['selectedPRegion'],
                                selectedPCity: this.branchDetail['selectedPCity'],
                                selectedPCode: this.branchDetail['selectedPCode'],
                                selectedPhone: [null],
                                phoneNumber: [''],
                                selectedEmail: [null],
                                emailAddress: [''],
                                ipAddress: [''],
                                createdBy: [sessionStorage.getItem('user')],
                            });
                            this.branchService.contactList(this.id).subscribe(data => {
                                this.phoneList = data;
                            });
                            this.branchService.emailList(this.id).subscribe(data => {
                                this.emailList = data;
                            });
                            this.branchService.ipList(this.id).subscribe(data => {
                                this.ipList = data;
                            });
                            this.isLoading = false;
                        });
                    }
                    else {
                        this.id = "0";
                    }
                    this.isLoading = false;
                });
            });
        });
    }
    selectBranchRegion() {
        this.branchForm.get('selectedCity').reset();
        this.branchCity = [];
        this.branchCity = this.dropdown.filter(x => x.id === this.branchForm.get('selectedRegion').value);
    }
    selectRdoOffice() {
        this.branchForm.get('selectedRdoBranch').reset();
        this.branchForm.get('selectedRdoBranch').setValue(this.dropdown.filter(x => x.id === this.branchForm.get('selectedRdoOffice').value)[0]['to_id']);
    }
    selectRdoBranch() {
        this.branchForm.get('selectedRdoOffice').reset();
        this.branchForm.get('selectedRdoOffice').setValue(this.dropdown.filter(x => x.id === this.branchForm.get('selectedRdoBranch').value)[0]['to_id']);
    }
    selectPBranch() {
        this.branchForm.get('selectedPCity').reset();
        this.pCity = [];
        this.pCity = this.dropdown.filter(x => x.id === this.branchForm.get('selectedPRegion').value && x.id_to === 0);
    }
    selectPCity() {
        this.branchForm.get('selectedPCode').reset();
        this.branchForm.get('selectedPCode').setValue(this.dropdown.filter(x => x.id === this.branchForm.get('selectedPRegion').value && x.id_to === this.branchForm.get('selectedPCity').value)[0]['to_description']);
    }
    addPhone(e) {
        let selected = this.phone.filter(x => x.id === this.branchForm.get('selectedPhone').value)[0];
        let obj = {
            id: selected.id,
            description: selected.description,
            number: this.branchForm.get('phoneNumber').value
        };
        this.phoneList.push(obj);
        this.branchForm.get('selectedPhone').reset();
        this.branchForm.get('phoneNumber').reset();
    }
    removePhone(e) {
        this.phoneList.splice(e, 1);
    }
    addEmail(e) {
        let selected = this.email.filter(x => x.id === this.branchForm.get('selectedEmail').value)[0];
        let obj = {
            id: selected.id,
            description: selected.description,
            email_address: this.branchForm.get('emailAddress').value
        };
        this.emailList.push(obj);
        this.branchForm.get('selectedEmail').reset();
        this.branchForm.get('emailAddress').reset();
    }
    removeEmail(e) {
        this.emailList.splice(e, 1);
    }
    addIP(e) {
        let obj = {
            description: this.branchForm.get('ipAddress').value
        };
        this.ipList.push(obj);
        this.branchForm.get('ipAddress').reset();
    }
    removeIP(e) {
        this.ipList.splice(e, 1);
    }
    validation() {
        let ret = true;
        if (this.branchForm.get('branchName').value === "") {
            ret = false;
            this.errbranchName = true;
        }
        else {
            this.errbranchName = false;
        }
        if (this.branchForm.get('selectedIndustry').value === "" || this.branchForm.get('selectedIndustry').value === null) {
            ret = false;
            this.errselectedIndustry = true;
        }
        else {
            this.errselectedIndustry = false;
        }
        if (this.branchForm.get('selectedBank').value === "" || this.branchForm.get('selectedBank').value === null) {
            ret = false;
            this.errselectedBank = true;
        }
        else {
            this.errselectedBank = false;
        }
        if (this.branchForm.get('bankAccount').value === "") {
            ret = false;
            this.errbankAccount = true;
        }
        else {
            this.errbankAccount = false;
        }
        if (this.branchForm.get('zipCode').value === "") {
            ret = false;
            this.errBranchZipCode = true;
        }
        else {
            this.errBranchZipCode = false;
        }
        if (this.branchForm.get('municipality').value === "") {
            ret = false;
            this.errBranchMunicipality = true;
        }
        else {
            this.errBranchMunicipality = false;
        }
        if (this.branchForm.get('selectedRegion').value === "" || this.branchForm.get('selectedRegion').value === null) {
            ret = false;
            this.errBranchRegion = true;
        }
        else {
            this.errBranchRegion = false;
        }
        if (this.branchForm.get('selectedCity').value === "" || this.branchForm.get('selectedCity').value === null) {
            ret = false;
            this.errBranchCity = true;
        }
        else {
            this.errBranchCity = false;
        }
        if (this.branchForm.get('selectedBranchCountry').value === "" || this.branchForm.get('selectedBranchCountry').value === null) {
            ret = false;
            this.errBranchCountry = true;
        }
        else {
            this.errBranchCountry = false;
        }
        if (this.branchForm.get('sss').value === "") {
            ret = false;
            this.errSSS = true;
        }
        else {
            this.errSSS = false;
        }
        if (this.branchForm.get('philhealth').value === "") {
            ret = false;
            this.errPhilhealth = true;
        }
        else {
            this.errPhilhealth = false;
        }
        if (this.branchForm.get('tin').value === "") {
            ret = false;
            this.errTIN = true;
        }
        else {
            this.errTIN = false;
        }
        if (this.branchForm.get('pagibig').value === "") {
            ret = false;
            this.errPagibig = true;
        }
        else {
            this.errPagibig = false;
        }
        if (this.branchForm.get('selectedRdoOffice').value === "" || this.branchForm.get('selectedRdoOffice').value === null) {
            ret = false;
            this.errRDO = true;
        }
        else {
            this.errRDO = false;
        }
        if (this.branchForm.get('selectedRdoBranch').value === "" || this.branchForm.get('selectedRdoBranch').value === null) {
            ret = false;
            this.errRDO = true;
        }
        else {
            this.errRDO = false;
        }
        if (this.branchForm.get('selectedPRegion').value === "" || this.branchForm.get('selectedPRegion').value === null) {
            ret = false;
            this.errBranch = true;
        }
        else {
            this.errBranch = false;
        }
        if (this.branchForm.get('selectedPCity').value === "" || this.branchForm.get('selectedPCity').value === null) {
            ret = false;
            this.errBranch = true;
        }
        else {
            this.errBranch = false;
        }
        return ret;
    }
    submit() {
        let flag = this.validation();
        if (flag) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        title: 'Please Wait !',
                        allowOutsideClick: false,
                        onBeforeOpen: () => {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.showLoading();
                            var obj = {
                                branchID: this.id,
                                branchName: this.branchForm.get('branchName').value,
                                selectedIndustry: this.branchForm.get('selectedIndustry').value,
                                industry: this.industry.filter(x => x.id === this.branchForm.get('selectedIndustry').value)[0].description,
                                selectedBank: this.branchForm.get('selectedBank').value,
                                bankAccount: this.branchForm.get('bankAccount').value,
                                zipCode: this.branchForm.get('zipCode').value,
                                unit: this.branchForm.get('unit').value,
                                building: this.branchForm.get('building').value,
                                street: this.branchForm.get('street').value,
                                barangay: this.branchForm.get('barangay').value,
                                municipality: this.branchForm.get('municipality').value,
                                sss: this.branchForm.get('sss').value,
                                philhealth: this.branchForm.get('philhealth').value,
                                tin: this.branchForm.get('tin').value,
                                pagibig: this.branchForm.get('pagibig').value,
                                selectedCity: this.branchForm.get('selectedCity').value,
                                selectedRegion: this.branchForm.get('selectedRegion').value,
                                selectedBranchCountry: this.branchForm.get('selectedBranchCountry').value,
                                selectedRdoOffice: this.branchForm.get('selectedRdoOffice').value,
                                selectedRdoBranch: this.branchForm.get('selectedRdoBranch').value,
                                selectedPRegion: this.branchForm.get('selectedPRegion').value,
                                selectedPCity: this.branchForm.get('selectedPCity').value,
                                selectedPCode: this.branchForm.get('selectedPCode').value,
                                createdBy: sessionStorage.getItem('u'),
                                contact_IU: this.phoneList,
                                email_IU: this.emailList,
                                iP_IU: this.ipList,
                                instance_name: sessionStorage.getItem('in'),
                                user_hash: sessionStorage.getItem('uh'),
                                user_name: sessionStorage.getItem('us'),
                                company_id: sessionStorage.getItem('ci'),
                                created_by: sessionStorage.getItem('u'),
                            };
                            this.branchService.branchIU(obj).subscribe(data => {
                                console.log(data);
                                if (data.branchID === "0") {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Failed!", "Transaction failed!", "error");
                                }
                                else {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Ok!", "Transaction successful!", "success");
                                }
                            });
                        },
                    });
                }
            });
        }
    }
};
BranchDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_master_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_administration_branch_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"] }
];
BranchDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-branch-detail',
        template: _raw_loader_branch_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_branch_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BranchDetailComponent);



/***/ }),

/***/ "HO/X":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/src/angular-datatables.module.js ***!
  \***************************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "/iSe");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTablesModule });
DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTablesModule_Factory(t) { return new (t || DataTablesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, { declarations: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
            }]
    }], function () { return []; }, null); })();
    return DataTablesModule;
}());


//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "Hktd":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/page/administration/allowance-deduction/allowance-deduction-detail/allowance-deduction-detail.component.css ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxvd2FuY2UtZGVkdWN0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "I5Ig":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/contributions/contributions.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Contribution Table</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Contribution Table</h6>\n              </div>\n            </div>\n            \n          </div>\n          <hr>\n          <div class=\"row\">\n          <div class=\"col-lg-3 email-aside border-lg-right\">\n            <div class=\"aside-content\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Contribution Group</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Rate Group\">\n              </div>\n            </div>\n            <div class=\"aside-content\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Contribution Type</label>\n                <ng-select \n                [items]=\"contributionType\"\n                name=\"industry\"\n                bindLabel=\"description\" \n                bindValue=\"id\" \n                placeholder=\"Select Contribution\"\n                [(ngModel)]=\"selectedContribution\">\n              </ng-select>\n              </div>\n            </div>\n            <ul class=\"nav justify-content-end\">\n              <button class=\"btn btn-primary btn-icon-text\">\n                <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Save Changes\n              </button>\n            </ul>\n          </div>\n          <div class=\"col-lg-9 email-content\">\n            <div class=\"table-responsive\">\n              <table id=\"dataTableExample\" class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Range From</th>\n                    <th>Range To</th>\n                    <th>Salary Base</th>\n                    <th>Total Amount</th>\n                    <th>Employee Share</th>\n                    <th>Employer Share</th>\n                    <th>EC</th>\n                    <th>MPF Employee Share</th>\n                    <th>MPF Employer Share</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"1.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"3249.99\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"3000.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"390.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"135.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"255.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"10\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"0.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"0.00\" placeholder=\"Ordinary Day\">\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <th></th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>");

/***/ }),

/***/ "I61z":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/leave/leave-view/leave-view.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  leave-view works!\n</p>\n");

/***/ }),

/***/ "Jcb0":
/*!***********************************************************************************!*\
  !*** ./src/app/page/administration/leave/leave-detail/leave-detail.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "JeOo":
/*!************************************************************************************!*\
  !*** ./src/app/page/administration/holiday/holiday-view/holiday-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: HolidayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayViewComponent", function() { return HolidayViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_holiday_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./holiday-view.component.html */ "LONO");
/* harmony import */ var _holiday_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./holiday-view.component.css */ "2b9m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HolidayViewComponent = class HolidayViewComponent {
    constructor() {
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = false;
    }
};
HolidayViewComponent.ctorParameters = () => [];
HolidayViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-holiday-view',
        template: _raw_loader_holiday_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_holiday_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HolidayViewComponent);



/***/ }),

/***/ "LONO":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/holiday/holiday-view/holiday-view.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Holiday</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Holiday</h6>\n              </div>\n              <div class=\"col-md-6\">\n                <ul class=\"nav justify-content-end\">\n                  <button class=\"btn btn-primary btn-icon-text\" [routerLink]=\"['/layout/administration/holiday-detail']\">\n                    <i data-feather=\"edit\" appFeatherIcon class=\"btn-icon-prepend\"></i> Add Holiday\n                  </button>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"table-responsive\">\n            <table id=\"dataTableExample\" class=\"table\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Tiger Nixon</td>\n                  <td>System Architect</td>\n                  <td>Edinburgh</td>\n                  <td>61</td>\n                  <td>2011/04/25</td>\n                  <td>$320,800</td>\n                </tr>\n                <tr>\n                  <td>Garrett Winters</td>\n                  <td>Accountant</td>\n                  <td>Tokyo</td>\n                  <td>63</td>\n                  <td>2011/07/25</td>\n                  <td>$170,750</td>\n                </tr>\n                <tr>\n                  <td>Ashton Cox</td>\n                  <td>Junior Technical Author</td>\n                  <td>San Francisco</td>\n                  <td>66</td>\n                  <td>2009/01/12</td>\n                  <td>$86,000</td>\n                </tr>\n                <tr>\n                  <td>Cedric Kelly</td>\n                  <td>Senior Javascript Developer</td>\n                  <td>Edinburgh</td>\n                  <td>22</td>\n                  <td>2012/03/29</td>\n                  <td>$433,060</td>\n                </tr>\n                <tr>\n                  <td>Airi Satou</td>\n                  <td>Accountant</td>\n                  <td>Tokyo</td>\n                  <td>33</td>\n                  <td>2008/11/28</td>\n                  <td>$162,700</td>\n                </tr>\n                <tr>\n                  <td>Brielle Williamson</td>\n                  <td>Integration Specialist</td>\n                  <td>New York</td>\n                  <td>61</td>\n                  <td>2012/12/02</td>\n                  <td>$372,000</td>\n                </tr>\n                <tr>\n                  <td>Herrod Chandler</td>\n                  <td>Sales Assistant</td>\n                  <td>San Francisco</td>\n                  <td>59</td>\n                  <td>2012/08/06</td>\n                  <td>$137,500</td>\n                </tr>\n                <tr>\n                  <td>Rhona Davidson</td>\n                  <td>Integration Specialist</td>\n                  <td>Tokyo</td>\n                  <td>55</td>\n                  <td>2010/10/14</td>\n                  <td>$327,900</td>\n                </tr>\n                <tr>\n                  <td>Colleen Hurst</td>\n                  <td>Javascript Developer</td>\n                  <td>San Francisco</td>\n                  <td>39</td>\n                  <td>2009/09/15</td>\n                  <td>$205,500</td>\n                </tr>\n                <tr>\n                  <td>Sonya Frost</td>\n                  <td>Software Engineer</td>\n                  <td>Edinburgh</td>\n                  <td>23</td>\n                  <td>2008/12/13</td>\n                  <td>$103,600</td>\n                </tr>\n                <tr>\n                  <td>Jena Gaines</td>\n                  <td>Office Manager</td>\n                  <td>London</td>\n                  <td>30</td>\n                  <td>2008/12/19</td>\n                  <td>$90,560</td>\n                </tr>\n                <tr>\n                  <td>Quinn Flynn</td>\n                  <td>Support Lead</td>\n                  <td>Edinburgh</td>\n                  <td>22</td>\n                  <td>2013/03/03</td>\n                  <td>$342,000</td>\n                </tr>\n                <tr>\n                  <td>Charde Marshall</td>\n                  <td>Regional Director</td>\n                  <td>San Francisco</td>\n                  <td>36</td>\n                  <td>2008/10/16</td>\n                  <td>$470,600</td>\n                </tr>\n                <tr>\n                  <td>Haley Kennedy</td>\n                  <td>Senior Marketing Designer</td>\n                  <td>London</td>\n                  <td>43</td>\n                  <td>2012/12/18</td>\n                  <td>$313,500</td>\n                </tr>\n                <tr>\n              <td>Tatyana Fitzpatrick</td>\n                  <td>Regional Director</td>\n                  <td>London</td>\n                  <td>19</td>\n                  <td>2010/03/17</td>\n                  <td>$385,750</td>\n                </tr>\n                <tr>\n                  <td>Michael Silva</td>\n                  <td>Marketing Designer</td>\n                  <td>London</td>\n                  <td>66</td>\n                  <td>2012/11/27</td>\n                  <td>$198,500</td>\n                </tr>\n                <tr>\n                  <td>Paul Byrd</td>\n                  <td>Chief Financial Officer (CFO)</td>\n                  <td>New York</td>\n                  <td>64</td>\n                  <td>2010/06/09</td>\n                  <td>$725,000</td>\n                </tr>\n                <tr>\n                  <td>Gloria Little</td>\n                  <td>Systems Administrator</td>\n                  <td>New York</td>\n                  <td>59</td>\n                  <td>2009/04/10</td>\n                  <td>$237,500</td>\n                </tr>\n                <tr>\n                  <td>Bradley Greer</td>\n                  <td>Software Engineer</td>\n                  <td>London</td>\n                  <td>41</td>\n                  <td>2012/10/13</td>\n                  <td>$132,000</td>\n                </tr>\n                <tr>\n                  <td>Dai Rios</td>\n                  <td>Personnel Lead</td>\n                  <td>Edinburgh</td>\n                  <td>35</td>\n                  <td>2012/09/26</td>\n                  <td>$217,500</td>\n                </tr>\n                <tr>\n                  <td>Jenette Caldwell</td>\n                  <td>Development Lead</td>\n                  <td>New York</td>\n                  <td>30</td>\n                  <td>2011/09/03</td>\n                  <td>$345,000</td>\n                </tr>\n                <tr>\n                  <td>Yuri Berry</td>\n                  <td>Chief Marketing Officer (CMO)</td>\n                  <td>New York</td>\n                  <td>40</td>\n                  <td>2009/06/25</td>\n                  <td>$675,000</td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n  </div>\n");

/***/ }),

/***/ "LbU7":
/*!***************************************************************************!*\
  !*** ./src/app/page/administration/series-code/series-code.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJpZXMtY29kZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Ozkn":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/page/administration/allowance-deduction/allowance-deduction-view/allowance-deduction-view.component.css ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxvd2FuY2UtZGVkdWN0aW9uLXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "PLEc":
/*!*******************************************************************************!*\
  !*** ./src/app/page/administration/module-access/module-access.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2R1bGUtYWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "RtaS":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/shiftcodes/shiftcodes-view/shiftcodes-view.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Shift Codes</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Shift Codes</h6>\n              </div>\n              <div class=\"col-md-6\">\n                <ul class=\"nav justify-content-end\">\n                  <button class=\"btn btn-primary btn-icon-text\" [routerLink]=\"['/layout/administration/shift']\">\n                    <i data-feather=\"edit\" appFeatherIcon class=\"btn-icon-prepend\"></i> Add Shift Codes\n                  </button>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"table-responsive\">\n            <table id=\"dataTableExample\" class=\"table\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Tiger Nixon</td>\n                  <td>System Architect</td>\n                  <td>Edinburgh</td>\n                  <td>61</td>\n                  <td>2011/04/25</td>\n                  <td>$320,800</td>\n                </tr>\n                <tr>\n                  <td>Garrett Winters</td>\n                  <td>Accountant</td>\n                  <td>Tokyo</td>\n                  <td>63</td>\n                  <td>2011/07/25</td>\n                  <td>$170,750</td>\n                </tr>\n                <tr>\n                  <td>Ashton Cox</td>\n                  <td>Junior Technical Author</td>\n                  <td>San Francisco</td>\n                  <td>66</td>\n                  <td>2009/01/12</td>\n                  <td>$86,000</td>\n                </tr>\n                <tr>\n                  <td>Cedric Kelly</td>\n                  <td>Senior Javascript Developer</td>\n                  <td>Edinburgh</td>\n                  <td>22</td>\n                  <td>2012/03/29</td>\n                  <td>$433,060</td>\n                </tr>\n                <tr>\n                  <td>Airi Satou</td>\n                  <td>Accountant</td>\n                  <td>Tokyo</td>\n                  <td>33</td>\n                  <td>2008/11/28</td>\n                  <td>$162,700</td>\n                </tr>\n                <tr>\n                  <td>Brielle Williamson</td>\n                  <td>Integration Specialist</td>\n                  <td>New York</td>\n                  <td>61</td>\n                  <td>2012/12/02</td>\n                  <td>$372,000</td>\n                </tr>\n                <tr>\n                  <td>Herrod Chandler</td>\n                  <td>Sales Assistant</td>\n                  <td>San Francisco</td>\n                  <td>59</td>\n                  <td>2012/08/06</td>\n                  <td>$137,500</td>\n                </tr>\n                <tr>\n                  <td>Rhona Davidson</td>\n                  <td>Integration Specialist</td>\n                  <td>Tokyo</td>\n                  <td>55</td>\n                  <td>2010/10/14</td>\n                  <td>$327,900</td>\n                </tr>\n                <tr>\n                  <td>Colleen Hurst</td>\n                  <td>Javascript Developer</td>\n                  <td>San Francisco</td>\n                  <td>39</td>\n                  <td>2009/09/15</td>\n                  <td>$205,500</td>\n                </tr>\n                <tr>\n                  <td>Sonya Frost</td>\n                  <td>Software Engineer</td>\n                  <td>Edinburgh</td>\n                  <td>23</td>\n                  <td>2008/12/13</td>\n                  <td>$103,600</td>\n                </tr>\n                <tr>\n                  <td>Jena Gaines</td>\n                  <td>Office Manager</td>\n                  <td>London</td>\n                  <td>30</td>\n                  <td>2008/12/19</td>\n                  <td>$90,560</td>\n                </tr>\n                <tr>\n                  <td>Quinn Flynn</td>\n                  <td>Support Lead</td>\n                  <td>Edinburgh</td>\n                  <td>22</td>\n                  <td>2013/03/03</td>\n                  <td>$342,000</td>\n                </tr>\n                <tr>\n                  <td>Charde Marshall</td>\n                  <td>Regional Director</td>\n                  <td>San Francisco</td>\n                  <td>36</td>\n                  <td>2008/10/16</td>\n                  <td>$470,600</td>\n                </tr>\n                <tr>\n                  <td>Haley Kennedy</td>\n                  <td>Senior Marketing Designer</td>\n                  <td>London</td>\n                  <td>43</td>\n                  <td>2012/12/18</td>\n                  <td>$313,500</td>\n                </tr>\n                <tr>\n              <td>Tatyana Fitzpatrick</td>\n                  <td>Regional Director</td>\n                  <td>London</td>\n                  <td>19</td>\n                  <td>2010/03/17</td>\n                  <td>$385,750</td>\n                </tr>\n                <tr>\n                  <td>Michael Silva</td>\n                  <td>Marketing Designer</td>\n                  <td>London</td>\n                  <td>66</td>\n                  <td>2012/11/27</td>\n                  <td>$198,500</td>\n                </tr>\n                <tr>\n                  <td>Paul Byrd</td>\n                  <td>Chief Financial Officer (CFO)</td>\n                  <td>New York</td>\n                  <td>64</td>\n                  <td>2010/06/09</td>\n                  <td>$725,000</td>\n                </tr>\n                <tr>\n                  <td>Gloria Little</td>\n                  <td>Systems Administrator</td>\n                  <td>New York</td>\n                  <td>59</td>\n                  <td>2009/04/10</td>\n                  <td>$237,500</td>\n                </tr>\n                <tr>\n                  <td>Bradley Greer</td>\n                  <td>Software Engineer</td>\n                  <td>London</td>\n                  <td>41</td>\n                  <td>2012/10/13</td>\n                  <td>$132,000</td>\n                </tr>\n                <tr>\n                  <td>Dai Rios</td>\n                  <td>Personnel Lead</td>\n                  <td>Edinburgh</td>\n                  <td>35</td>\n                  <td>2012/09/26</td>\n                  <td>$217,500</td>\n                </tr>\n                <tr>\n                  <td>Jenette Caldwell</td>\n                  <td>Development Lead</td>\n                  <td>New York</td>\n                  <td>30</td>\n                  <td>2011/09/03</td>\n                  <td>$345,000</td>\n                </tr>\n                <tr>\n                  <td>Yuri Berry</td>\n                  <td>Chief Marketing Officer (CMO)</td>\n                  <td>New York</td>\n                  <td>40</td>\n                  <td>2009/06/25</td>\n                  <td>$675,000</td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>  \n");

/***/ }),

/***/ "SgaN":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/approval-process/approval-process.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Approval Process</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n      \n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <h6>Approval Process</h6>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label class=\"form-label\">Approval Group</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label class=\"form-label\">Module</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n            </div>\n            <div class=\"col-md-4\"></div>\n            \n          </div>\n          <hr>\n          <form [formGroup]=\"approvalForm\">\n            <div class=\"row\">\n              <div class=\"col-3 border-right\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Status</label>\n                  <input type=\"text\" formControlName=\"status\" class=\"form-control\" placeholder=\"Status\">\n                </div>\n                  <ul class=\"nav justify-content-end\">\n                    <button class=\"btn btn-primary btn-icon-text\" (click)=\"addStatus()\">\n                      <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Add\n                    </button>\n                  </ul>\n              </div>\n              <div class=\"col-9\">\n                <aw-wizard [awNavigationMode]>\n                  <aw-wizard-step *ngIf=\"defaultStatus\" stepTitle=\"None\">\n                  </aw-wizard-step>\n                  <aw-wizard-step *ngFor=\"let x of statusList\" [awCompletedStep]=\"true\" stepTitle=\"{{x.status}}\">\n                  </aw-wizard-step>\n                </aw-wizard>\n              </div>\n            </div>\n            <hr>\n          </form>\n          <form [formGroup]=\"employeeForm\">\n          <div class=\"row\">\n            <div class=\"col-3 border-right\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Status</label>\n                <!-- <ng-select \n                  [items]=\"statusList\"\n                  name=\"Status\"\n                  bindLabel=\"status\" \n                  bindValue=\"index\" \n                  placeholder=\"Select Status\"\n                  formControlName=\"selectedStatus\">\n                </ng-select> -->\n                <!-- <select class=\"form-control\" formControlName=\"country\">\n                  <option [ngValue]=\"null\" disabled>Select Status</option>\n                  <option *ngFor=\"let x of statusList\" [ngValue]=\"x.index\">{{x.status}}</option>\n                </select> -->\n                <ng-select formControlName=\"selectedStatus\">\n                  <ng-option *ngFor=\"let x of statusList\" [value]=\"x.index\">{{x.status}}</ng-option>\n               </ng-select>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label\">Employee</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Status\">\n              </div>\n                <ul class=\"nav justify-content-end\">\n                  <button class=\"btn btn-primary btn-icon-text\" (click)=\"addEmployee()\">\n                    <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Add\n                  </button>\n                </ul>\n            </div>\n            <div class=\"col-9\">\n              <div class=\"row\">\n                <div class=\"col-md-4\" *ngFor=\"let x of statusList\">\n                  <div class=\"card\">\n                    <div class=\"card-header\">\n                      {{x.status}}\n                    </div>\n                    <div class=\"card-body\">\n                      ...\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "TfBP":
/*!*******************************************************************************!*\
  !*** ./src/app/page/administration/contributions/contributions.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmlidXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "UIwo":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/page/administration/allowance-deduction/allowance-deduction-detail/allowance-deduction-detail.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AllowanceDeductionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceDeductionDetailComponent", function() { return AllowanceDeductionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_allowance_deduction_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./allowance-deduction-detail.component.html */ "6rPY");
/* harmony import */ var _allowance_deduction_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allowance-deduction-detail.component.css */ "Hktd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AllowanceDeductionDetailComponent = class AllowanceDeductionDetailComponent {
    constructor() {
        this.isLoading = false;
        this.isType = true;
        this.isGov = true;
        this.moduleType = [
            { id: 0, description: 'Addition' },
            { id: 1, description: 'Deduction' },
        ];
        this.deductionType = [
            { id: 0, description: 'Government' },
            { id: 1, description: 'Regular' },
        ];
        this.governmentType = [
            { id: 0, description: 'SSS' },
            { id: 1, description: 'Pagibig' },
            { id: 2, description: 'Philhealth' },
        ];
    }
    ngOnInit() {
        this.isLoading = false;
    }
    modelChangeFn(e) {
        if (e.id == 0) {
            this.isType = true;
            this.isGov = true;
        }
        else {
            this.isType = false;
            this.isGov = false;
            if (this.selectedDeductionType === 0) {
                this.isGov = false;
            }
            else {
                this.isGov = true;
            }
        }
    }
    modelDeductionFn(e) {
        if (e.id === 0) {
            this.isGov = false;
        }
        else {
            this.isGov = true;
        }
    }
};
AllowanceDeductionDetailComponent.ctorParameters = () => [];
AllowanceDeductionDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-allowance-deduction-detail',
        template: _raw_loader_allowance_deduction_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_allowance_deduction_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllowanceDeductionDetailComponent);



/***/ }),

/***/ "WyaX":
/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js ***!
  \***************************************************************************************************/
/*! exports provided: Positioning, PositioningService, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get CSS computed property of the given element
 * @param {?} element
 * @param {?=} property
 * @return {?}
 */

function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    /** @type {?} */
    const window = element.ownerDocument.defaultView;
    /** @type {?} */
    const css = window.getComputedStyle(element, null);
    return property ? css[(/** @type {?} */ (property))] : css;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the parentNode or the host of the element
 * @param {?} element
 * @return {?}
 */
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
        default:
    }
    // Firefox want us to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
    if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isIE11 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && ((/** @type {?} */ (document))).documentMode);
/** @type {?} */
const isIE10 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && /MSIE 10/.test(((/** @type {?} */ (navigator))).userAgent));
/**
 * @param {?=} version
 * @return {?}
 */
function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    /** @type {?} */
    const noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    /** @type {?} */
    let offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    /** @type {?} */
    let sibling;
    while (offsetParent === noOffsetParent
        && element.nextElementSibling
        && sibling !== element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    /** @type {?} */
    const nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isOffsetContainer(element) {
    const { nodeName } = element;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @param {?} node
 * @return {?}
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element1
 * @param {?} element2
 * @return {?}
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    /* tslint:disable-next-line: no-bitwise */
    /** @type {?} */
    const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    /** @type {?} */
    const start = order ? element1 : element2;
    /** @type {?} */
    const end = order ? element2 : element1;
    // Get common ancestor container
    /** @type {?} */
    const range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    const { commonAncestorContainer } = range;
    // Both nodes are inside #document
    if ((element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
        start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    /** @type {?} */
    const element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to detect borders of a given element
 */
/**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */
function getBordersSize(styles, axis) {
    /** @type {?} */
    const sideA = axis === 'x' ? 'Left' : 'Top';
    /** @type {?} */
    const sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[(/** @type {?} */ (`border${sideA}Width`))]) +
        parseFloat(styles[(/** @type {?} */ (`border${sideB}Width`))]));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} axis
 * @param {?} body
 * @param {?} html
 * @param {?} computedStyle
 * @return {?}
 */
function getSize(axis, body, html, computedStyle) {
    return Math.max(((/** @type {?} */ (body)))[`offset${axis}`], ((/** @type {?} */ (body)))[`scroll${axis}`], ((/** @type {?} */ (html)))[`client${axis}`], ((/** @type {?} */ (html)))[`offset${axis}`], ((/** @type {?} */ (html)))[`scroll${axis}`], isIE(10)
        ? (parseInt(((/** @type {?} */ (html)))[`offset${axis}`], 10) +
            parseInt(computedStyle[(/** @type {?} */ (`margin${axis === 'Height' ? 'Top' : 'Left'}`))], 10) +
            parseInt(computedStyle[(/** @type {?} */ (`margin${axis === 'Height' ? 'Bottom' : 'Right'}`))], 10))
        : 0);
}
/**
 * @param {?} document
 * @return {?}
 */
function getWindowSizes(document) {
    /** @type {?} */
    const body = document.body;
    /** @type {?} */
    const html = document.documentElement;
    /** @type {?} */
    const computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @param {?} element
 * @param {?=} side
 * @return {?}
 */
function getScroll(element, side = 'top') {
    /** @type {?} */
    const upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    /** @type {?} */
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        const html = element.ownerDocument.documentElement;
        /** @type {?} */
        const scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} offsets
 * @return {?}
 */
function getClientRect(offsets) {
    return Object.assign(Object.assign({}, offsets), { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getBoundingClientRect(element) {
    /** @type {?} */
    let rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            /** @type {?} */
            const scrollTop = getScroll(element, 'top');
            /** @type {?} */
            const scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        }
        else {
            rect = element.getBoundingClientRect();
        }
    }
    catch (e) {
        return undefined;
    }
    /** @type {?} */
    const result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    /** @type {?} */
    const sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    /** @type {?} */
    const width = sizes.width || element.clientWidth || result.right - result.left;
    /** @type {?} */
    const height = sizes.height || element.clientHeight || result.bottom - result.top;
    /** @type {?} */
    let horizScrollbar = element.offsetWidth - width;
    /** @type {?} */
    let vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        const styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */
function includeScroll(rect, element, subtract = false) {
    /** @type {?} */
    const scrollTop = getScroll(element, 'top');
    /** @type {?} */
    const scrollLeft = getScroll(element, 'left');
    /** @type {?} */
    const modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} children
 * @param {?} parent
 * @param {?=} fixedPosition
 * @return {?}
 */
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    /** @type {?} */
    const isIE10 = isIE(10);
    /** @type {?} */
    const isHTML = parent.nodeName === 'HTML';
    /** @type {?} */
    const childrenRect = getBoundingClientRect(children);
    /** @type {?} */
    const parentRect = getBoundingClientRect(parent);
    /** @type {?} */
    const scrollParent = getScrollParent(children);
    /** @type {?} */
    const styles = getStyleComputedProperty(parent);
    /** @type {?} */
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    /** @type {?} */
    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    /** @type {?} */
    let offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        /** @type {?} */
        const marginTop = parseFloat(styles.marginTop);
        /** @type {?} */
        const marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    /** @type {?} */
    const html = element.ownerDocument.documentElement;
    /** @type {?} */
    const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    /** @type {?} */
    const width = Math.max(html.clientWidth, window.innerWidth || 0);
    /** @type {?} */
    const height = Math.max(html.clientHeight, window.innerHeight || 0);
    /** @type {?} */
    const scrollTop = !excludeScroll ? getScroll(html) : 0;
    /** @type {?} */
    const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    /** @type {?} */
    const offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width,
        height
    };
    return getClientRect(offset);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isFixed(element) {
    /** @type {?} */
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    /** @type {?} */
    let el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} host
 * @param {?=} padding
 * @param {?=} boundariesElement
 * @param {?=} fixedPosition
 * @return {?}
 */
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
    // NOTE: 1 DOM access here
    // NOTE: 1 DOM access here
    /** @type {?} */
    let boundaries = { top: 0, left: 0 };
    /** @type {?} */
    const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        /** @type {?} */
        let boundariesNode;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = target.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        /** @type {?} */
        const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            const { height, width } = getWindowSizes(target.ownerDocument);
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function getArea({ width, height }) {
    return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'bottom', 'right', 'left'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    const rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    /** @type {?} */
    const sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => (Object.assign(Object.assign({ key }, rects[key]), { area: getArea(rects[key]) }))))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => b.area - a.area));
    /** @type {?} */
    let filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    ({ width, height }) => {
        return width >= target.clientWidth
            && height >= target.clientHeight;
    }));
    filteredAreas = filteredAreas.filter((/**
     * @param {?} position
     * @return {?}
     */
    (position) => {
        return allowedPositions
            .some((/**
         * @param {?} allowedPosition
         * @return {?}
         */
        (allowedPosition) => {
            return allowedPosition === position.key;
        }));
    }));
    /** @type {?} */
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    const variation = placement.split(' ')[1];
    // for tooltip on auto position
    target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${computedPlacement}`);
    return computedPlacement + (variation ? `-${variation}` : '');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function getOffsets(data) {
    return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the opposite placement of the given one
 * @param {?} placement
 * @return {?}
 */
function getOppositePlacement(placement) {
    /** @type {?} */
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, (/**
     * @param {?} matched
     * @return {?}
     */
    matched => ((/** @type {?} */ (hash)))[matched]));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the opposite placement variation of the given one
 * @param {?} variation
 * @return {?}
 */
function getOppositeVariation(variation) {
    if (variation === 'right') {
        return 'left';
    }
    else if (variation === 'left') {
        return 'right';
    }
    return variation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */
function getOuterSizes(element) {
    /** @type {?} */
    const window = element.ownerDocument.defaultView;
    /** @type {?} */
    const styles = window.getComputedStyle(element);
    /** @type {?} */
    const x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    /** @type {?} */
    const y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} host
 * @param {?=} fixedPosition
 * @return {?}
 */
function getReferenceOffsets(target, host, fixedPosition = null) {
    /** @type {?} */
    const commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
    return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */
function getTargetOffsets(target, hostOffsets, position) {
    /** @type {?} */
    const placement = position.split(' ')[0];
    // Get target node sizes
    /** @type {?} */
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    /** @type {?} */
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    /** @type {?} */
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    /** @type {?} */
    const mainSide = isHoriz ? 'top' : 'left';
    /** @type {?} */
    const secondarySide = isHoriz ? 'left' : 'top';
    /** @type {?} */
    const measurement = isHoriz ? 'height' : 'width';
    /** @type {?} */
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    ((/** @type {?} */ (targetOffsets)))[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    ((/** @type {?} */ (targetOffsets)))[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : ((/** @type {?} */ (hostOffsets)))[getOppositePlacement(secondarySide)];
    return targetOffsets;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper used to know if the given modifier is enabled.
 * @param {?} options
 * @param {?} modifierName
 * @return {?}
 */
function isModifierEnabled(options, modifierName) {
    return options
        && options.modifiers
        && options.modifiers[modifierName]
        && options.modifiers[modifierName].enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tells if a given input is a number
 * @param {?} n
 * @return {?}
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @param {?=} renderer
 * @return {?}
 */
function updateContainerClass(data, renderer) {
    /** @type {?} */
    const target = data.instance.target;
    /** @type {?} */
    let containerClass = target.className;
    if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`);
        containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`);
        containerClass = containerClass.replace(/\sauto/g, ` ${data.placement}`);
        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
        }
        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
        }
    }
    containerClass = containerClass.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`);
    if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
    }
    target.className = containerClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */
function setStyles(element, styles, renderer) {
    Object.keys(styles).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    (prop) => {
        /** @type {?} */
        let unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function arrow(data) {
    /** @type {?} */
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    /** @type {?} */
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    /** @type {?} */
    const isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
    /** @type {?} */
    const len = isVertical ? 'height' : 'width';
    /** @type {?} */
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    /** @type {?} */
    const side = sideCapitalized.toLowerCase();
    /** @type {?} */
    const altSide = isVertical ? 'left' : 'top';
    /** @type {?} */
    const opSide = isVertical ? 'bottom' : 'right';
    /** @type {?} */
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    /** @type {?} */
    const placementVariation = data.placement.split(' ')[1];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < ((/** @type {?} */ (targetOffsets)))[side]) {
        ((/** @type {?} */ (targetOffsets)))[side] -=
            ((/** @type {?} */ (targetOffsets)))[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) > ((/** @type {?} */ (targetOffsets)))[opSide]) {
        ((/** @type {?} */ (targetOffsets)))[side] +=
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) - Number(((/** @type {?} */ (targetOffsets)))[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    /** @type {?} */
    const css = getStyleComputedProperty(data.instance.target);
    /** @type {?} */
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    /** @type {?} */
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    // compute center of the target
    /** @type {?} */
    let center;
    if (!placementVariation) {
        center = Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    }
    else {
        /** @type {?} */
        const targetBorderRadius = parseFloat(css.borderRadius);
        /** @type {?} */
        const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ?
            Number(((/** @type {?} */ (data))).offsets.host[side]) + targetSideArrowOffset :
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
    }
    /** @type {?} */
    let sideValue = center - ((/** @type {?} */ (targetOffsets)))[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    let placement = data.placement.split(' ')[0];
    /** @type {?} */
    let variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    const offsetsHost = data.offsets.host;
    /** @type {?} */
    const target = data.instance.target;
    /** @type {?} */
    const host = data.instance.host;
    /** @type {?} */
    const adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
    /** @type {?} */
    const flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    (step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        const overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        const overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        const overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        const overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        const overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    }));
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */
function initData(targetElement, hostElement, position, options) {
    /** @type {?} */
    const hostElPosition = getReferenceOffsets(targetElement, hostElement);
    if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/)
        && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
        /* tslint:disable-next-line: no-parameter-reassignment */
        position = 'auto';
    }
    /** @type {?} */
    const placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    let placement = position.match(/auto\s(left|right|top|bottom)/)
        ? position.split(' ')[1] || 'auto'
        : position;
    // Normalize placements that have identical main placement and variation ("right right" => "right").
    /** @type {?} */
    const matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);
    if (matches) {
        placement = matches[1] + (matches[2] ? ` ${matches[2]}` : '');
    }
    // "left right", "top bottom" etc. placements also considered incorrect.
    if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
        placement = 'auto';
    }
    /** @type {?} */
    const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
    return {
        options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement,
        placementAuto
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    const transformProp = 'transform';
    /** @type {?} */
    const targetStyles = data.instance.target.style;
    // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    const order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    const check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary(placement) {
            /** @type {?} */
            let value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        secondary(placement) {
            /** @type {?} */
            const mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            let value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    /** @type {?} */
    let side;
    order.forEach((/**
     * @param {?} placement
     * @return {?}
     */
    placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), ((/** @type {?} */ (check)))[side](placement));
    }));
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function shift(data) {
    /** @type {?} */
    const placement = data.placement;
    /** @type {?} */
    const basePlacement = placement.split(' ')[0];
    /** @type {?} */
    const shiftVariation = placement.split(' ')[1];
    if (shiftVariation) {
        const { host, target } = data.offsets;
        /** @type {?} */
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        const side = isVertical ? 'left' : 'top';
        /** @type {?} */
        const measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        const shiftOffsets = {
            start: { [side]: host[side] },
            end: {
                [side]: host[side] + host[measurement] - target[measurement]
            }
        };
        data.offsets.target = Object.assign(Object.assign({}, target), {
            [side]: (side === shiftVariation ? ((/** @type {?} */ (shiftOffsets))).start[side] : ((/** @type {?} */ (shiftOffsets))).end[side])
        });
    }
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    position(hostElement, targetElement, round = true) {
        return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    offset(hostElement, targetElement, round = true) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        (modifiedData, modifier) => modifier(modifiedData)), initData(targetElement, hostElement, position, options));
    }
}
/** @type {?} */
const positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    /** @type {?} */
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    /** @type {?} */
    const offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    updateContainerClass(data, renderer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PositioningOptions() { }
if (false) {}
class PositioningService {
    /**
     * @param {?} ngZone
     * @param {?} rendererFactory
     * @param {?} platformId
     */
    constructor(ngZone, rendererFactory, platformId) {
        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positionElements = new Map();
        this.isDisabled = false;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll', { passive: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize', { passive: true }), 
                /* tslint:disable-next-line: deprecation */
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), this.update$$);
                this.triggerEvent$.subscribe((/**
                 * @return {?}
                 */
                () => {
                    if (this.isDisabled) {
                        return;
                    }
                    this.positionElements
                        /* tslint:disable-next-line: no-any */
                        .forEach((/**
                     * @param {?} positionElement
                     * @return {?}
                     */
                    (positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    }));
                }));
            }));
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        this.addPositionElement(options);
    }
    /**
     * @return {?}
     */
    get event$() {
        return this.triggerEvent$;
    }
    /**
     * @return {?}
     */
    disable() {
        this.isDisabled = true;
    }
    /**
     * @return {?}
     */
    enable() {
        this.isDisabled = false;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @return {?}
     */
    calcPosition() {
        this.update$$.next();
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.ɵfac = function PositioningService_Factory(t) { return new (t || PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
PositioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PositioningService, factory: PositioningService.ɵfac });
/** @nocollapse */
PositioningService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositioningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: Number, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();
if (false) {}
/**
 * @param {?} element
 * @return {?}
 */
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
        return element.nativeElement;
    }
    return element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-positioning.js.map

/***/ }),

/***/ "XQt+":
/*!**********************************************************************************************!*\
  !*** ./src/app/page/administration/shiftcodes/shiftcodes-view/shiftcodes-view.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdGNvZGVzLXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ZHIA":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/dropdown-settings/dropdown-settings.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Dropdown Settings</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Dropdown Settings</h6>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n        \n          <div class=\"col-lg-3 email-aside border-lg-right\">\n            <form [formGroup]=\"dropdownForm\">\n            <div class=\"aside-content\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Module</label>\n                  <ng-select \n                  [items]=\"moduleType\"\n                  name=\"industry\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Module\"\n                  formControlName=\"selectedModule\"\n                  (change)=\"moduleChange()\">\n                </ng-select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputUsername1\">Description</label>\n                  <input type=\"text\" formControlName=\"description\" class=\"form-control\" placeholder=\"Description\">\n                </div>\n            </div>\n          </form>\n            <ul class=\"nav justify-content-end\">\n              <button class=\"btn btn-primary btn-icon-text\" (click)=\"submit()\">\n                <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Save Changes\n              </button>\n              <button hidden [swal]=\"{title: '<strong>HTML <u>example</u></strong>', icon: 'info',\n                html: '(You can use <b>bold text</b>, <a href=\\'http:\\/\\/github.com\\'>links</a> and other HTML tags)',\n                showCloseButton: true,\n                showCancelButton: true,\n                focusConfirm: false,\n                confirmButtonText:'<i class=\\'feather icon-thumbs-up\\'></i> Great!',\n                confirmButtonAriaLabel: 'Thumbs up, great!',\n                cancelButtonText: '<i class=\\'feather icon-thumbs-down\\'></i>',\n                cancelButtonAriaLabel: 'Thumbs down'\n              }\" class=\"btn btn-primary\">\n                Click here!\n              </button>\n            </ul>\n          </div>\n      \n          <div class=\"col-lg-9 email-content\">\n            <div class=\"table-responsive\">\n              <table id=\"dataTableExample\" class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Type</th>\n                    <th>Description</th>\n                    <th>Active</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let x of table; let i = index\">\n                    <td>{{x.type_description}}</td>\n                    <td>{{x.description}}</td>\n                    <td>\n                      <div class=\"form-check\">\n                        <label class=\"form-check-label\">\n                          <input type=\"checkbox\" checked='{{x.active === true? \"true\" : \"\" }}' (change)=\"checkChange($event)\" value=\"{{x.id}}\" class=\"form-check-input\">\n                          <i class=\"input-frame\"></i>\n                        </label>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <th></th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "bsro":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/shiftcodes/shiftcodes-detail/shiftcodes-detail.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/layout/administration/shiftcodes-view\">Shift Codes</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\n    </ol>\n  </nav>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <h6>Shift Codes</h6>\n          </div>\n          <form [formGroup]=\"shiftForm\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Shift Name</label>\n                  <input type=\"text\" formControlName=\"shiftName\" class=\"form-control\" placeholder=\"Shift Name\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errShiftName\">Please input shift name!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Grace Period</label>\n                  <input type=\"text\" formControlName=\"gracePeriod\" class=\"form-control\" placeholder=\"Grace Period\">\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Description</label>\n                  <input type=\"text\" formControlName=\"description\" class=\"form-control\" placeholder=\"Description\">\n                  <p class=\"text-danger mt-1\" *ngIf=\"errDescription\">Please input description!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">&nbsp;</label>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input type=\"checkbox\" formControlName=\"isFlexi\" (change)=\"onFlexi($event)\" class=\"form-check-input\">\n                      <i class=\"input-frame\"></i>\n                      Is Flexi?\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Time In</label>\n                  <ng-template #popTimeIn>\n                    <timepicker (ngModelChange)=\"setTimeIn($event)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"timeIn\" [showMeridian]=\"true\"></timepicker>\n                  </ng-template>\n                  <input type=\"text\" formControlName=\"timeIn\" class=\"form-control\"placeholder=\"HH:MM AM/PM\" [popover]=\"popTimeIn\" [outsideClick]=\"true\" placement=\"bottom\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"errTimeIn\">Please input time in!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Time Out</label>\n                  <ng-template #popTimeOut>\n                    <timepicker [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"setTimeOut($event)\" [(ngModel)]=\"timeOut\" [showMeridian]=\"true\"></timepicker>\n                  </ng-template>\n                  <input type=\"text\" formControlName=\"timeOut\" class=\"form-control\"placeholder=\"HH:MM AM/PM\" [popover]=\"popTimeOut\" [outsideClick]=\"true\" placement=\"bottom\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"errTimeOut\">Please input time out!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Days Cover</label>\n                  <input type=\"text\" formControlName=\"daysCover\" (change)=\"computeDateDiff()\" class=\"form-control\" placeholder=\"Days Cover\">\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Total Working Hr(s)</label>\n                  <input type=\"text\" formControlName=\"workingHrs\"  class=\"form-control\" placeholder=\"Total Working Hr(s)\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Halfday In</label>\n                  <ng-template #popHalfDayIn>\n                    <timepicker [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"setHalfDayIn($event)\" [(ngModel)]=\"halfDayIn\" [showMeridian]=\"true\"></timepicker>\n                  </ng-template>\n                  <input type=\"text\" formControlName=\"halfDayIn\" class=\"form-control\"placeholder=\"HH:MM AM/PM\" [popover]=\"popHalfDayIn\" [outsideClick]=\"true\" placement=\"bottom\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"errHalfDayIn\">Please input halfday in!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Days Cover</label>\n                  <input type=\"text\" formControlName=\"halfDayInDays\" class=\"form-control\" placeholder=\"Days Cover\">\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Halfday Out</label>\n                  <ng-template #popHalfDayOut>\n                    <timepicker [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"setHalfDayOut($event)\" [(ngModel)]=\"halfDayOut\" [showMeridian]=\"true\"></timepicker>\n                  </ng-template>\n                  <input type=\"text\" formControlName=\"halfDayOut\" class=\"form-control\"placeholder=\"HH:MM AM/PM\" [popover]=\"popHalfDayOut\" [outsideClick]=\"true\" placement=\"bottom\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"errHalfDayOut\">Please input halfday out!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Days Cover</label>\n                  <input type=\"text\" formControlName=\"halfDayOutDays\" class=\"form-control\" placeholder=\"Days Cover\">\n                </div>\n              </div>\n            </div>\n          <hr>\n          </form>\n          <form [formGroup]=\"breakForm\">\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Time In</label>\n                  <ng-template #popBreakIn>\n                    <timepicker [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"setBreakIn($event)\" [(ngModel)]=\"BreakIn\" [showMeridian]=\"true\"></timepicker>\n                  </ng-template>\n                  <input type=\"text\" formControlName=\"BreakIn\" class=\"form-control\"placeholder=\"HH:MM AM/PM\" [popover]=\"popBreakIn\" [outsideClick]=\"true\" placement=\"bottom\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"isBreakIn\">Input Break In!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Days Cover</label>\n                  <input type=\"text\" formControlName=\"breakInDays\" class=\"form-control\" placeholder=\"Days Cover\">\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Time Out</label>\n                  <ng-template #popBreakOut>\n                    <timepicker [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"setBreakOut($event)\" [(ngModel)]=\"BreakOut\" [showMeridian]=\"true\"></timepicker>\n                  </ng-template>\n                  <input type=\"text\" formControlName=\"BreakOut\" class=\"form-control\"placeholder=\"HH:MM AM/PM\" [popover]=\"popBreakOut\" [outsideClick]=\"true\" placement=\"bottom\" />\n                  <p class=\"text-danger mt-1\" *ngIf=\"isBreakOut\">Input Break Out!</p>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Days Cover</label>\n                  <div class=\"row\">\n                    <div class=\"col-md-8\">\n                      <input type=\"text\" formControlName=\"breakOutDays\" class=\"form-control\" placeholder=\"Days Cover\">\n                    </div>\n                    <div class=\"col-md-4\">\n                      <button type=\"button\" title=\"Add\" (click)=\"addBreak()\" class=\"btn btn-sm btn-primary btn-icon\">\n                        <i class=\"feather icon-plus\"></i>\n                      </button> \n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <p class=\"text-danger mt-1\" *ngIf=\"isBreak\">Breaks can only accommodate up to three breaks!</p>\n              <div class=\"table-responsive\">\n                <table id=\"dataTableExample\" class=\"table\">\n                  <thead>\n                    <tr>\n                      <th>Break Type</th>\n                      <th>Break In</th>\n                      <th>Days Cover</th>\n                      <th>Break Out</th>\n                      <th>Days Cover</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let x of break; let i = index\">\n                      <td>{{x.breakType}}</td>\n                      <td>{{x.breakIn}}</td>\n                      <td>{{x.breakInDays}}</td>\n                      <td>{{x.breakOut}}</td>\n                      <td>{{x.breakOutDays}}</td>\n                      <td> \n                        <button type=\"button\" (click)=\"removeBreak(i)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                          <i class=\"feather icon-trash\"></i>\n                        </button> \n                    </td>\n                    </tr>\n                  </tbody>\n                  <tfoot>\n                    <tr>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                      <th></th>\n                    </tr>\n                  </tfoot>\n                </table>\n              </div>\n            </div>\n          </form>\n      </div>\n      <div class=\"card-footer\">\n        <ul class=\"nav justify-content-end\">\n          <button class=\"btn btn-primary btn-icon-text\" (click)=\"submit()\">\n            <i data-feather=\"save\"  appFeatherIcon class=\"btn-icon-prepend\"></i> Save Shift Codes\n          </button>\n        </ul>\n      </div>\n    </div>\n  </div>\n  </div>  \n  </div>\n");

/***/ }),

/***/ "cV/5":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/leave/leave-detail/leave-detail.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Leave</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-md-12 grid-margin\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n        <form [formGroup]=\"leaveForm\">  \n          <h6 class=\"card-title\">Leave</h6>\n  \n          <aw-wizard [awNavigationMode] navigateBackward=\"allow\" navigateForward=\"allow\">\n            <aw-wizard-step stepTitle=\"Description\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Leave Name</label>\n                  <input type=\"text\" formControlName=\"leaveName\" class=\"form-control\" placeholder=\"Leave Name\">\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Description</label>\n                  <input type=\"text\" formControlName=\"description\" class=\"form-control\" placeholder=\"Description\">\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Gender to use this leave?</label>\n                  <ng-select\n                  [items]=\"gender\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Gender\"\n                  formControlName=\"selectedGender\">\n                </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Require Attachment?</label>\n                  <ng-select\n                  [items]=\"attachment\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Attachment\"\n                  formControlName=\"selectedAttachment\">\n                </ng-select>\n                </div>\n              </div>\n              <div class=\"col-md-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\">Filed By?</label>\n                  <ng-select\n                  [items]=\"filedBy\"\n                  bindLabel=\"description\" \n                  bindValue=\"id\" \n                  placeholder=\"Select Filed By\"\n                  formControlName=\"selectedFiledBy\">\n                </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"d-flex justify-content-center mt-2\">\n              <button class=\"btn btn-primary\" type=\"button\" awNextStep>Continue</button>\n            </div>\n            </aw-wizard-step>\n            <aw-wizard-step stepTitle=\"Credits\">\n              <div class=\"form-group row\">\n                <label for=\"email1\" class=\"col-sm-3 col-form-label\">Email</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"email\" class=\"form-control\" id=\"email1\" autocomplete=\"off\" placeholder=\"Email\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"mobileNumber1\" class=\"col-sm-3 col-form-label\">Mobile</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"number\" class=\"form-control\" id=\"mobileNumber1\" placeholder=\"Mobile number\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"password1\" class=\"col-sm-3 col-form-label\">Password</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"password\" class=\"form-control\" id=\"password1\" autocomplete=\"off\" placeholder=\"Password\">\n                </div>\n              </div>\n              <div class=\"d-flex justify-content-center mt-2\">\n                <button class=\"btn btn-light mr-2\" type=\"button\" awPreviousStep>Back</button>\n                <button class=\"btn btn-primary\" type=\"button\" awNextStep>Continue</button>\n              </div>\n            </aw-wizard-step>\n  \n            <aw-wizard-step stepTitle=\"Restriction\">\n              <div class=\"text-center\">\n                <i data-feather=\"check-circle\" appFeatherIcon class=\"text-success mt-4 mb-2 icon-xxl\"></i>\n                <h3 class=\"text-muted mb-3\">Thank you !</h3>\n                <p class=\"w-75 mx-auto mb-4 text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nulla nunc. Maecenas arcu sem, hendrerit a tempor quis, sagittis accumsan tellus. In hac habitasse platea dictumst</p>\n              </div>\n              <div class=\"d-flex justify-content-center mt-2\">\n                <button class=\"btn btn-light mr-2\" type=\"button\" awPreviousStep>Back</button>\n                <button class=\"btn btn-success\" type=\"button\" >Finish</button>\n              </div>\n            </aw-wizard-step>\n          </aw-wizard>\n        </form>  \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "dKZm":
/*!**************************************************************************!*\
  !*** ./src/app/page/administration/series-code/series-code.component.ts ***!
  \**************************************************************************/
/*! exports provided: SeriesCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesCodeComponent", function() { return SeriesCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_series_code_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./series-code.component.html */ "rjpp");
/* harmony import */ var _series_code_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./series-code.component.css */ "LbU7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SeriesCodeComponent = class SeriesCodeComponent {
    constructor() {
        this.isLoading = false;
    }
    ngOnInit() {
    }
};
SeriesCodeComponent.ctorParameters = () => [];
SeriesCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-series-code',
        template: _raw_loader_series_code_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_series_code_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SeriesCodeComponent);



/***/ }),

/***/ "f/ga":
/*!**********************************************************************************!*\
  !*** ./src/app/page/administration/leave/leave-detail/leave-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LeaveDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDetailComponent", function() { return LeaveDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-detail.component.html */ "cV/5");
/* harmony import */ var _leave_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-detail.component.css */ "Jcb0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let LeaveDetailComponent = class LeaveDetailComponent {
    constructor(fb) {
        this.fb = fb;
        this.filedBy = [{
                id: 0,
                description: 'Per Schedule'
            }, {
                id: 1,
                description: 'Per Hour'
            }];
        this.attachment = [{
                id: 0,
                description: 'No'
            }, {
                id: 1,
                description: 'Yes'
            }];
        this.gender = [{
                id: 0,
                description: 'All'
            }, {
                id: 1,
                description: 'Male'
            }, {
                id: 2,
                description: 'Female'
            }];
    }
    ngOnInit() {
        this.isLoading = true;
        this.leaveForm = this.fb.group({
            leaveName: [''],
            description: [''],
            selectedGender: [0],
            selectedAttachment: [0],
            selectedFiledBy: [null],
        });
        this.isLoading = false;
    }
};
LeaveDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LeaveDetailComponent.propDecorators = {
    wizardForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['wizardForm',] }]
};
LeaveDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-detail',
        template: _raw_loader_leave_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaveDetailComponent);



/***/ }),

/***/ "hEik":
/*!*******************************************************************************!*\
  !*** ./src/app/page/administration/payroll-rates/payroll-rates.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlyb2xsLXJhdGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "itO0":
/*!******************************************************************************!*\
  !*** ./src/app/page/administration/leave/leave-view/leave-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeaveViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveViewComponent", function() { return LeaveViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leave_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leave-view.component.html */ "I61z");
/* harmony import */ var _leave_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leave-view.component.css */ "lJ8z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LeaveViewComponent = class LeaveViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeaveViewComponent.ctorParameters = () => [];
LeaveViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leave-view',
        template: _raw_loader_leave_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leave_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeaveViewComponent);



/***/ }),

/***/ "jADn":
/*!******************************************************************************!*\
  !*** ./src/app/page/administration/contributions/contributions.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContributionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionsComponent", function() { return ContributionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contributions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contributions.component.html */ "I5Ig");
/* harmony import */ var _contributions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contributions.component.css */ "TfBP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContributionsComponent = class ContributionsComponent {
    constructor() {
        this.isLoading = false;
        this.contributionType = [];
    }
    ngOnInit() {
        this.contributionType = [
            { id: 0, description: 'SSS' },
            { id: 1, description: 'Pagibig' },
            { id: 2, description: 'Philhealth' },
            { id: 3, description: 'Tax' },
        ];
        this.isLoading = false;
    }
};
ContributionsComponent.ctorParameters = () => [];
ContributionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contributions',
        template: _raw_loader_contributions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contributions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContributionsComponent);



/***/ }),

/***/ "jIM8":
/*!*****************************************************************************************!*\
  !*** ./src/app/page/administration/holiday/holiday-detail/holiday-detail.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob2xpZGF5LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "kUHs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js ***!
  \*************************************************************************************************/
/*! exports provided: TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerActions", function() { return TimepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return TimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return TimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerStore", function() { return TimepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TIMEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "2oBD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function TimepickerComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeMinutes(ctx_r18.minuteStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
} }
function TimepickerComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeSeconds(ctx_r20.secondsStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
} }
function TimepickerComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r22.prevDef($event); return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"); })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.updateMinutes($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r7.labelMinutes);
} }
function TimepickerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r27.prevDef($event); return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"); })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.updateSeconds($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r9.labelSeconds);
} }
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toggleMeridian(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.meridian, " ");
} }
function TimepickerComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_26_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.changeMinutes(-ctx_r34.minuteStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
} }
function TimepickerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.changeSeconds(-ctx_r36.secondsStep); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimepickerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
class TimepickerActions {
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.ɵfac = function TimepickerActions_Factory(t) { return new (t || TimepickerActions)(); };
TimepickerActions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimepickerActions, factory: TimepickerActions.ɵfac });
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const dex = 10;
/** @type {?} */
const hoursPerDay = 24;
/** @type {?} */
const hoursPerDayHalf = 12;
/** @type {?} */
const minutesPerHour = 60;
/** @type {?} */
const secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toNumber(value));
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM = false) {
    /** @type {?} */
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    /** @type {?} */
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    /** @type {?} */
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    let hour = value.getHours();
    /** @type {?} */
    let minutes = value.getMinutes();
    /** @type {?} */
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = hour + toNumber(diff.hour);
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    /** @type {?} */
    let hour = parseHours(opts.hour);
    /** @type {?} */
    const minute = parseMinutes(opts.minute);
    /** @type {?} */
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    /** @type {?} */
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    // #3139 ensure date part remains unchanged
    newValue.setFullYear(value.getFullYear());
    newValue.setMonth(value.getMonth());
    newValue.setDate(value.getDate());
    return newValue;
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    /** @type {?} */
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    const newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    const { hourStep, minuteStep, secondsStep, readonlyInput, disabled, mousewheel, arrowkeys, showSpinners, showMeridian, showSeconds, meridians, min, max } = state;
    return {
        hourStep,
        minuteStep,
        secondsStep,
        readonlyInput,
        disabled,
        mousewheel,
        arrowkeys,
        showSpinners,
        showMeridian,
        showSeconds,
        meridians,
        min,
        max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    /** @type {?} */
    const hoursPerDay = 24;
    /** @type {?} */
    const hoursPerDayHalf = 12;
    const { min, max, hourStep, minuteStep, secondsStep, showSeconds } = state;
    /** @type {?} */
    const res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour && (value.getHours() + hourStep) < hoursPerDay;
        if (!res.canIncrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
class TimepickerConfig {
    constructor() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * minutes change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
        /**
         * hours aria label
         */
        this.ariaLabelHours = 'hours';
        /**
         * minutes aria label
         */
        this.ariaLabelMinutes = 'minutes';
        /**
         * seconds aria label
         */
        this.ariaLabelSeconds = 'seconds';
    }
}
TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
/** @nocollapse */ TimepickerConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TimepickerConfig_Factory() { return new TimepickerConfig(); }, token: TimepickerConfig, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerState {
}
if (false) {}
/** @type {?} */
const initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state = initialState, action) {
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            /** @type {?} */
            const _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            const _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            const _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerStore extends ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniStore"] {
    constructor() {
        /** @type {?} */
        const _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        const state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniState"](initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.ɵfac = function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); };
TimepickerStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimepickerStore, factory: TimepickerStore.ɵfac });
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => TimepickerComponent)),
    multi: true
};
class TimepickerComponent {
    /**
     * @param {?} _config
     * @param {?} _cd
     * @param {?} _store
     * @param {?} _timepickerActions
     */
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.value))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        }));
        _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.controls))
            .subscribe((/**
         * @param {?} controlsState
         * @return {?}
         */
        (controlsState) => {
            this.isValid.emit(isInputValid(this.hours, this.minutes, this.seconds, this.isPM()));
            Object.assign(this, controlsState);
            _cd.markForCheck();
        }));
    }
    /**
     * @deprecated - please use `isEditable` instead
     * @return {?}
     */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    /**
     * @return {?}
     */
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    /**
     * @return {?}
     */
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    /**
     * @return {?}
     */
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    prevDef($event) {
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    wheelSign($event) {
        return Math.sign($event.deltaY) * -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    updateHours(hours) {
        this.resetValidation();
        this.hours = hours;
        /** @type {?} */
        const isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    updateMinutes(minutes) {
        this.resetValidation();
        this.minutes = minutes;
        /** @type {?} */
        const isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    updateSeconds(seconds) {
        this.resetValidation();
        this.seconds = seconds;
        /** @type {?} */
        const isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @return {?}
     */
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    /**
     * @return {?}
     */
    _updateTime() {
        /** @type {?} */
        const _seconds = this.showSeconds ? this.seconds : void 0;
        /** @type {?} */
        const _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    /**
     * @return {?}
     */
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timepickerSub.unsubscribe();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _renderTime(value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        /** @type {?} */
        const _value = parseTime(value);
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        /** @type {?} */
        let _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerStore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerActions)); };
TimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { disabled: "disabled", hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max", hoursPlaceholder: "hoursPlaceholder", minutesPlaceholder: "minutesPlaceholder", secondsPlaceholder: "secondsPlaceholder" }, outputs: { isValid: "isValid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 33, consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.changeHours(ctx.hourStep); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() { return ctx.changeHours(ctx.hourStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() { return ctx.changeHours(-ctx.hourStep, "key"); })("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_23_listener() { return ctx.changeHours(-ctx.hourStep); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canIncrementHours || !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx.invalidHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.invalidHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.labelHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canDecrementHours || !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
TimepickerComponent.ctorParameters = () => [
    { type: TimepickerConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: TimepickerStore },
    { type: TimepickerActions }
];
TimepickerComponent.propDecorators = {
    hourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    secondsStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonlyInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mousewheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowkeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSpinners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showMeridian: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    meridians: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hoursPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minutesPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    secondsPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'timepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\" [attr.aria-label]=\"labelHours\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\" [attr.aria-label]=\"labelMinutes\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\" [attr.aria-label]=\"labelSeconds\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 50px;
      padding: .375rem .55rem;
    }
  `]
            }]
    }], function () { return [{ type: TimepickerConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: TimepickerStore }, { type: TimepickerActions }]; }, { isValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minuteStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondsStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonlyInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mousewheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], arrowkeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSpinners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMeridian: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMinutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], meridians: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hoursPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minutesPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], secondsPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimepickerModule });
TimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimepickerModule, { declarations: function () { return [TimepickerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [TimepickerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-timepicker.js.map

/***/ }),

/***/ "lDzL":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
  \**********************************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "mrSG");






/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */



const _c0 = ["*"];
function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onTreeAction(group_r7); })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.onActivate($event, ctx_r15.indexes.first + i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r20 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.onActivate($event, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.rowContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onBodyScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
} }
function DataTableBodyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const column_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.columnContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DatatableComponent_datatable_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onColumnSort($event); })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onColumnResize($event); })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onColumnReorder($event); })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onHeaderSelect($event); })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onColumnContextmenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
} }
function DatatableComponent_datatable_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onFooterPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
} }
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
} }
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.select.emit(!ctx_r5.allRowsSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
} }
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.page.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
const _c2 = function (a0) { return { "selected-count": a0 }; };
function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pg_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPage(pg_r1.number); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
} }
function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ii_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
} }
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
} }
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
const _c3 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
const _c4 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
} }
class ScrollbarHelper {
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    getWidth() {
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
}
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollbarHelper, factory: ScrollbarHelper.ɵfac });
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
}
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DimensionsHelper, factory: DimensionsHelper.ɵfac });

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next();
    }
}
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColumnChangesService, factory: ColumnChangesService.ɵfac });

class DataTableFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) { return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableFooterTemplateDirective, selectors: [["", "ngx-datatable-footer-template", ""]] });
DataTableFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
VisibilityDirective.propDecorators = {
    isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.visible',] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragX: "dragX", dragY: "dragY", dragEventTarget: "dragEventTarget", dragModel: "dragModel" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DraggableDirective.propDecorators = {
    dragEventTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class ResizeableDirective {
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ngAfterViewInit() {
        const renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    }
    ngOnDestroy() {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    }
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    onMousedown(event) {
        const isHandle = event.target.classList.contains('resize-handle');
        const initialWidth = this.element.clientWidth;
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup());
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((e) => this.move(e, initialWidth, mouseDownScreenX));
            this.subscription.add(mouseMoveSub);
        }
    }
    move(event, initialWidth, mouseDownScreenX) {
        const movementX = event.screenX - mouseDownScreenX;
        const newWidth = initialWidth + movementX;
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) { return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizeableDirective, selectors: [["", "resizeable", ""]], hostVars: 2, hostBindings: function ResizeableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    } }, inputs: { resizeEnabled: "resizeEnabled", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { resize: "resize" } });
ResizeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ResizeableDirective.propDecorators = {
    resizeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};

class OrderableDirective {
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.differ = differs.find({}).create();
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            const elm = dragger.element;
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    onDragging({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    onDragEnd({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    isTarget(model, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((el) => el === pos.element)) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    createMapDiffs() {
        return this.draggables.toArray().reduce((acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    }
}
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) { return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OrderableDirective, selectors: [["", "orderable", ""]], contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    } }, outputs: { reorder: "reorder", targetChanged: "targetChanged" } });
OrderableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
OrderableDirective.propDecorators = {
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    targetChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DraggableDirective, { descendants: true },] }]
};

class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", duration: "duration", pressModel: "pressModel" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });
LongPressDirective.propDecorators = {
    pressEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pressModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    longPressStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.press',] }],
    isLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.longpress',] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};

class ScrollerComponent {
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
ScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ScrollerComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class DatatableGroupHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) { return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderTemplateDirective, selectors: [["", "ngx-datatable-group-header-template", ""]] });
DatatableGroupHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) { return new (t || DatatableGroupHeaderDirective)(); };
DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderDirective, selectors: [["ngx-datatable-group-header"]], contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
DatatableGroupHeaderDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

function optionalGetterForProp(prop) {
    return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        const nodeById = {};
        const l = rows.length;
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        const uniqIDs = rows.reduce((arr, item) => {
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }, []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            let parent = 0;
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        let resolvedRows = [];
        nodeById[0].flatten(function () {
            resolvedRows = [...resolvedRows, this.row];
        }, true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}

var ColumnMode;
(function (ColumnMode) {
    ColumnMode["standard"] = "standard";
    ColumnMode["flex"] = "flex";
    ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));

var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));

var SortType;
(function (SortType) {
    SortType["single"] = "single";
    SortType["multi"] = "multi";
})(SortType || (SortType = {}));

var ContextmenuType;
(function (ContextmenuType) {
    ContextmenuType["header"] = "header";
    ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));

class DataTableColumnHeaderDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) { return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnHeaderDirective, selectors: [["", "ngx-datatable-header-template", ""]] });
DataTableColumnHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DataTableColumnCellDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) { return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellDirective, selectors: [["", "ngx-datatable-cell-template", ""]] });
DataTableColumnCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DataTableColumnCellTreeToggle {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) { return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellTreeToggle, selectors: [["", "ngx-datatable-tree-toggle", ""]] });
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService)); };
DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnDirective, selectors: [["ngx-datatable-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    } }, inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
DataTableColumnDirective.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    flexGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    canAutoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerCheckboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTreeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeLevelIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _cellTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cellTemplate',] }],
    _cellTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _headerTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['headerTemplate',] }],
    _headerTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _treeToggleTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeToggleTemplate',] }],
    _treeToggleTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }]
};

class DatatableRowDetailTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) { return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailTemplateDirective, selectors: [["", "ngx-datatable-row-detail-template", ""]] });
DatatableRowDetailTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
DatatableRowDetailDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class DatatableFooterDirective {
    get template() {
        return this._templateInput || this._templateQuery;
    }
}
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) { return new (t || DatatableFooterDirective)(); };
DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableFooterDirective, selectors: [["ngx-datatable-footer"]], contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { footerHeight: "footerHeight", totalMessage: "totalMessage", selectedMessage: "selectedMessage", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", _templateInput: ["template", "_templateInput"] } });
DatatableFooterDirective.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }]
};

/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            const has = prop && c[prop];
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
    let totalWidth = 0;
    for (const column of columns) {
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
function columnsByPinArr(val) {
    const colsByPinArr = [];
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        const isFn = typeof rowHeight === 'function';
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            const row = rows[i];
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            const expanded = rowExpansions.has(row);
            if (row && expanded) {
                if (isDetailFn) {
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        let pos = -1;
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}

const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
const ɵ0 = function () {
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (ɵ0)();
function getVendorPrefixedName(property) {
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}

class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        this._rows = val;
        this.recalcLayout();
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        this._offset = val;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
            this.recalcLayout();
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
}
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) { return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyComponent, selectors: [["datatable-body"]], viewQuery: function DataTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollerComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    } }, hostAttrs: [1, "datatable-body"], hostVars: 4, hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    } }, inputs: { selected: "selected", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight", offsetX: "offsetX", loadingIndicator: "loadingIndicator", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", externalPaging: "externalPaging", rowHeight: "rowHeight", emptyMessage: "emptyMessage", selectionType: "selectionType", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, decls: 5, vars: 9, consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]], template: function DataTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) { return ctx.select.emit($event); })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) { return ctx.activate.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DataTableSelectionComponent, ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], DataTableBodyRowComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bodyWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    bodyHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    detailToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ScrollerComponent,] }]
};

class DataTableHeaderComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(() => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableHeaderComponent, selectors: [["datatable-header"]], hostAttrs: [1, "datatable-header"], hostVars: 4, hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    } }, inputs: { innerWidth: "innerWidth", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX", sorts: "sorts", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", select: "select", columnContextmenu: "columnContextmenu" }, decls: 2, vars: 4, consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) { return ctx.onColumnReordered($event); })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) { return ctx.onTargetChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective]; }, encapsulation: 2, changeDetection: 0 });
DataTableHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderComponent.propDecorators = {
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortUnsetIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dealsWithGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    headerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }]
};

/**
 * Throttle a function
 */
function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = columnsTotalWidth(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
        return c.canAutoResize !== false;
    });
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}

var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));

/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}

class DatatableComponent {
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            sortUnset: 'datatable-icon-sort-unset',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (x) => {
            if (this._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
            }
            else {
                return x;
            }
        };
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     */
    set offset(val) {
        this._offset = val;
    }
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     */
    get isFixedHeader() {
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     */
    get allRowsSelected() {
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            const indexes = this.bodyComponent.indexes;
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(() => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        });
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     */
    translateColumns(val) {
        if (val) {
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        const map = new Map();
        let i = 0;
        originalArray.forEach((item) => {
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        const addGroup = (key, value) => {
            return { key, value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, x => addGroup(x[0], x[1]));
    }
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
    }
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    recalculateDims() {
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            const size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        let idx;
        const cols = this._internalColumns.map((c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     */
    onColumnReorder({ column, newValue, prevValue }) {
        const cols = this._internalColumns.map(c => {
            return Object.assign({}, c);
        });
        if (this.swapColumns) {
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     */
    onHeaderSelect(event) {
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            const first = this.bodyComponent.indexes.first;
            const last = this.bodyComponent.indexes.last;
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     */
    onTreeAction(event) {
        const row = event.row;
        // TODO: For duplicated items this will not work
        const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
        this.treeAction.emit({ row, rowIndex });
    }
    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        }));
    }
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8)); };
DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["ngx-datatable"]], contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    } }, viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableBodyComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableHeaderComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, hostAttrs: [1, "ngx-datatable"], hostVars: 22, hostBindings: function DatatableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    } }, inputs: { selected: "selected", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", rowHeight: "rowHeight", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", reorderable: "reorderable", swapColumns: "swapColumns", sortType: "sortType", sorts: "sorts", cssClasses: "cssClasses", messages: "messages", groupExpansionDefault: "groupExpansionDefault", selectAllRowsOnPage: "selectAllRowsOnPage", virtualization: "virtualization", summaryRow: "summaryRow", summaryHeight: "summaryHeight", summaryPosition: "summaryPosition", rowIdentity: "rowIdentity", rows: "rows", groupedRows: "groupedRows", groupRowsBy: "groupRowsBy", columns: "columns", limit: "limit", count: "count", offset: "offset", targetMarkerTemplate: "targetMarkerTemplate", selectionType: "selectionType", rowClass: "rowClass", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", treeFromRelation: "treeFromRelation", treeToRelation: "treeToRelation" }, outputs: { scroll: "scroll", activate: "activate", select: "select", sort: "sort", page: "page", reorder: "reorder", resize: "resize", tableContextmenu: "tableContextmenu", treeAction: "treeAction" }, decls: 5, vars: 34, consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() { return ctx.recalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) { return ctx.onBodyPage($event); })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) { return ctx.activate.emit($event); })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) { return ctx.onRowContextmenu($event); })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) { return ctx.onBodySelect($event); })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) { return ctx.onBodyScroll($event); })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    } }, directives: function () { return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]]; }, styles: [".ngx-datatable{display:block;justify-content:center;overflow:hidden;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{-webkit-overflow-scrolling:touch;overflow-x:auto}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{-o-flex-flow:row;display:flex;flex-direction:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{display:inline-block;line-height:1.625;overflow-x:hidden;vertical-align:top}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{-webkit-align-items:stretch;align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{display:inline-block;position:relative}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{cursor:pointer;display:inline-block;line-height:100%;vertical-align:middle}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{bottom:0;display:inline-block;padding:0 4px;position:absolute;right:0;top:0;visibility:hidden;width:5px}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{bottom:0;position:absolute;top:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{display:block;position:relative;z-index:10}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;overflow:auto;width:100%}.ngx-datatable .datatable-footer .datatable-footer-inner{align-items:center;display:flex;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{display:inline-block;list-style:none;margin:0;padding:0}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['configuration',] }] }
];
DatatableComponent.propDecorators = {
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    swapColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectAllRowsOnPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeFromRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeToRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tableContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isFixedHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-header',] }],
    isFixedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-row',] }],
    isVertScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-vertical',] }],
    isVirtualized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.virtualized',] }],
    isHorScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-horz',] }],
    isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.selectable',] }],
    isCheckboxSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.checkbox-selection',] }],
    isCellSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.cell-selection',] }],
    isSingleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.single-selection',] }],
    isMultiSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-selection',] }],
    isMultiClickSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-click-selection',] }],
    columnTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DataTableColumnDirective,] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailDirective,] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderDirective,] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableFooterDirective,] }],
    bodyComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableBodyComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableHeaderComponent,] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    throttleable(5)
], DatatableComponent.prototype, "onWindowResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DimensionsHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnChangesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-footer-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[visibilityObserver]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.visible']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[draggable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dragX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragEventTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { resizeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[orderable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], targetChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], draggables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [DraggableDirective, { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongPressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[long-press]' }]
    }], function () { return []; }, { pressEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], longPressStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], longPressing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], longPressEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.press']
        }], isLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.longpress']
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], pressModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-scroller',
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngx-datatable-group-header-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-group-header' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-header-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-cell-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-tree-toggle]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-column' }]
    }], function () { return [{ type: ColumnChangesService }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frozenLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frozenRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canAutoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerCheckboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isTreeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeLevelIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _cellTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cellTemplate']
        }], _cellTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }], _headerTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['headerTemplate']
        }], _headerTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }], _treeToggleTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeToggleTemplate']
        }], _treeToggleTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngx-datatable-row-detail-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-row-detail' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-footer' }]
    }], null, { footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-body',
                template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'datatable-body'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], detailToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bodyWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], bodyHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ScrollerComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dealsWithGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-datatable',
                template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;justify-content:center;overflow:hidden;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{-webkit-overflow-scrolling:touch;overflow-x:auto}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{-o-flex-flow:row;display:flex;flex-direction:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{display:inline-block;line-height:1.625;overflow-x:hidden;vertical-align:top}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{-webkit-align-items:stretch;align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{display:inline-block;position:relative}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{cursor:pointer;display:inline-block;line-height:100%;vertical-align:middle}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{bottom:0;display:inline-block;padding:0 4px;position:absolute;right:0;top:0;visibility:hidden;width:5px}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{bottom:0;position:absolute;top:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{display:block;position:relative;z-index:10}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;overflow:auto;width:100%}.ngx-datatable .datatable-footer .datatable-footer-inner{align-items:center;display:flex;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{display:inline-block;list-style:none;margin:0;padding:0}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }]
    }], function () { return [{ type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: DimensionsHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: ColumnChangesService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['configuration']
            }] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], externalSorting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], swapColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectAllRowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tableContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFixedHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fixed-header']
        }], isFixedRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fixed-row']
        }], isVertScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.scroll-vertical']
        }], isVirtualized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.virtualized']
        }], isHorScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.scroll-horz']
        }], isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selectable']
        }], isCheckboxSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.checkbox-selection']
        }], isCellSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.cell-selection']
        }], isSingleSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.single-selection']
        }], isMultiSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.multi-selection']
        }], isMultiClickSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.multi-click-selection']
        }], columnTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [DataTableColumnDirective]
        }], 
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeFromRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeToRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableRowDetailDirective]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableGroupHeaderDirective]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableFooterDirective]
        }], bodyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DataTableBodyComponent]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DataTableHeaderComponent]
        }] }); })();

class DataTableHeaderCellComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    ngOnInit() {
        this.sortClass = this.calcSortClass(this.sortDir);
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find((s) => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    calcSortClass(sortDir) {
        if (!this.cellContext.column.sortable)
            return;
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn ${this.sortUnsetIcon}`;
        }
    }
}
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) { return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableHeaderCellComponent, selectors: [["datatable-header-cell"]], hostAttrs: [1, "datatable-header-cell"], hostVars: 11, hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
    } }, inputs: { allRowsSelected: "allRowsSelected", column: "column", sorts: "sorts", sortType: "sortType", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", isTarget: "isTarget", targetMarkerTemplate: "targetMarkerTemplate", targetMarkerContext: "targetMarkerContext", selectionType: "selectionType", headerHeight: "headerHeight" }, outputs: { sort: "sort", select: "select", columnContextmenu: "columnContextmenu" }, decls: 6, vars: 6, consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]], template: function DataTableHeaderCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() { return ctx.onSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderCellComponent.propDecorators = {
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortUnsetIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.title',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.title']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.maxWidth.px']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetMarkerContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) { return new (t || DataTableFooterComponent)(); };
DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableFooterComponent, selectors: [["datatable-footer"]], hostAttrs: [1, "datatable-footer"], inputs: { selectedCount: "selectedCount", footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, decls: 4, vars: 8, consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]], template: function DataTableFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], DataTablePagerComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableFooterComponent.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { selectedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        this.selectPage(this.page - 1);
    }
    nextPage() {
        this.selectPage(this.page + 1);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        const pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        const maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
}
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) { return new (t || DataTablePagerComponent)(); };
DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTablePagerComponent, selectors: [["datatable-pager"]], hostAttrs: [1, "datatable-pager"], inputs: { size: "size", count: "count", page: "page", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon" }, outputs: { change: "change" }, decls: 14, vars: 21, consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]], template: function DataTablePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() { return ctx.selectPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() { return ctx.selectPage(ctx.totalPages); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
DataTablePagerComponent.propDecorators = {
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class ProgressBarComponent {
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["datatable-progress"]], decls: 3, vars: 0, consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-progress',
                template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();

var Keys;
(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));

class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        if (this._columns) {
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    get cssClass() {
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    recalculateColumns(val = this.columns) {
        this._columns = val;
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) { return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyRowComponent, selectors: [["datatable-body-row"]], hostVars: 6, hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
    } }, inputs: { treeStatus: "treeStatus", columns: "columns", innerWidth: "innerWidth", offsetX: "offsetX", expanded: "expanded", rowClass: "rowClass", row: "row", group: "group", isSelected: "isSelected", rowIndex: "rowIndex", displayCheck: "displayCheck", rowHeight: "rowHeight" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 1, vars: 2, consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]], template: function DataTableBodyRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], DataTableBodyCellComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DataTableBodyRowComponent.propDecorators = {
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnsTotalWidths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    onMouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-body-row',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], columnsTotalWidths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], onMouseenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter', ['$event']]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTableRowWrapperComponent {
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._expanded = false;
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowDiffer = differs.find({}).create();
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    getGroupHeaderStyle() {
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
}
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) { return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"])); };
DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableRowWrapperComponent, selectors: [["datatable-row-wrapper"]], hostAttrs: [1, "datatable-row-wrapper"], hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } }, inputs: { rowIndex: "rowIndex", expanded: "expanded", innerWidth: "innerWidth", rowDetail: "rowDetail", groupHeader: "groupHeader", offsetX: "offsetX", detailRowHeight: "detailRowHeight", row: "row", groupedRows: "groupedRows" }, outputs: { rowContextmenu: "rowContextmenu" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]], template: function DataTableRowWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
DataTableRowWrapperComponent.propDecorators = {
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    detailRowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }]; }, { rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detailRowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTableBodyCellComponent {
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => {
            return s.prop === this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
}
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) { return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyCellComponent, selectors: [["datatable-body-cell"]], viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    } }, hostVars: 10, hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    } }, inputs: { group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus", displayCheck: "displayCheck" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 5, vars: 6, consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]], template: function DataTableBodyCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableBodyCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyCellComponent.propDecorators = {
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true },] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dblclick', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-body-cell',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.maxWidth.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dblclick', ['$event']]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true }]
        }] }); })();

function selectRows(selected, row, comparefn) {
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const greater = i >= prevIndex && i <= index;
        const lesser = i <= prevIndex && i >= index;
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const multi = this.selectionType === SelectionType.multi;
        const multiClick = this.selectionType === SelectionType.multiClick;
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
}
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
DataTableSelectionComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-selection',
                template: ` <ng-content></ng-content> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DataTableBodyRowComponent], encapsulation: 2 });
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }]
    }], function () { return []; }, { rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
}
NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxDatatableModule });
NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxDatatableModule_Factory(t) { return new (t || NgxDatatableModule)(); }, providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDatatableModule, { declarations: function () { return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            }]
    }], null, null); })();

var ClickType;
(function (ClickType) {
    ClickType["single"] = "single";
    ClickType["double"] = "double";
})(ClickType || (ClickType = {}));

if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
    const elements = [];
    const previousPointerEvents = [];
    let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
    let i;
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=swimlane-ngx-datatable.js.map

/***/ }),

/***/ "lJ8z":
/*!*******************************************************************************!*\
  !*** ./src/app/page/administration/leave/leave-view/leave-view.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWF2ZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "lUod":
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js ***!
  \***************************************************************************************/
/*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return listenToTriggersV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEscClick", function() { return registerEscClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return registerOutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Trigger {
    /**
     * @param {?} open
     * @param {?=} close
     */
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    isManual() {
        return this.open === 'manual' || this.close === 'manual';
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ListenOptions() { }
if (false) {}
/** @type {?} */
const DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    /** @type {?} */
    const trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    const parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => trigger.split(':')))
        .map((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => {
        /** @type {?} */
        const alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    const manualTriggers = parsedTriggers.filter((/**
     * @param {?} triggerPair
     * @return {?}
     */
    (triggerPair) => triggerPair.isManual()));
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, 
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    const parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    const listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return (/**
     * @return {?}
     */
    () => {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        (unsubscribeFn) => unsubscribeFn()));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    const parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    const target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    const listeners = [];
    // lazy listeners registration
    /** @type {?} */
    const _registerHide = [];
    /** @type {?} */
    const registerHide = (/**
     * @return {?}
     */
    () => {
        // add hide listeners to unregister array
        _registerHide.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        (fn) => listeners.push(fn())));
        // register hide events only once
        _registerHide.length = 0;
    });
    // register open\close\toggle listeners
    parsedTriggers.forEach((/**
     * @param {?} trigger
     * @return {?}
     */
    (trigger) => {
        /** @type {?} */
        const useToggle = trigger.open === trigger.close;
        /** @type {?} */
        const showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push((/**
             * @return {?}
             */
            () => renderer.listen(target, trigger.close, options.hide)));
        }
        listeners.push(renderer.listen(target, trigger.open, (/**
         * @return {?}
         */
        () => showFn(registerHide))));
    }));
    return (/**
     * @return {?}
     */
    () => {
        listeners.forEach((/**
         * @param {?} unsubscribeFn
         * @return {?}
         */
        (unsubscribeFn) => unsubscribeFn()));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', (/**
     * @param {?} event
     * @return {?}
     */
    (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            target => target.contains(event.target)))) {
            return undefined;
        }
        options.hide();
    }));
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', (/**
     * @param {?} event
     * @return {?}
     */
    (event) => {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some((/**
             * @param {?} target
             * @return {?}
             */
            target => target.contains(event.target)))) {
            return undefined;
        }
        options.hide();
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
const win = (typeof window !== 'undefined' && window) || (/** @type {?} */ ({}));
/** @type {?} */
const document$1 = win.document;
/** @type {?} */
const location = win.location;
/** @type {?} */
const gc = win.gc ? (/**
 * @return {?}
 */
() => win.gc()) : (/**
 * @return {?}
 */
() => null);
/** @type {?} */
const performance = win.performance ? win.performance : null;
/** @type {?} */
const Event = win.Event;
/** @type {?} */
const MouseEvent = win.MouseEvent;
/** @type {?} */
const KeyboardEvent = win.KeyboardEvent;
/** @type {?} */
const EventTarget = win.EventTarget;
/** @type {?} */
const History = win.History;
/** @type {?} */
const Location = win.Location;
/** @type {?} */
const EventListener = win.EventListener;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    /** @type {?} */
    const spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    /** @type {?} */
    const rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
/**
 * @return {?}
 */
function isBs3() {
    if (typeof win === 'undefined') {
        return true;
    }
    if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return win.__theme !== 'bs4';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @param {?} position
     * @return {?}
     */
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const node = {
            value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                /** @type {?} */
                const currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                const currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            /** @type {?} */
            const removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        const node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.asArray;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    findAll(fn) {
        /** @type {?} */
        let current = this.head;
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const result = [];
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    push(...args) {
        /* tslint:disable-next-line: no-any*/
        args.forEach((/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            this.add(arg);
        }));
        return this.length;
    }
    /**
     * @return {?}
     */
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        const last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    unshift(...args) {
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach((/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            this.add(arg, 0);
        }));
        return this.length;
    }
    /**
     * @return {?}
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        const lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    indexOf(value) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let position = 0;
        for (let index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    some(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    every(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @return {?}
     */
    toString() {
        return '[Linked List]';
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    findIndex(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /* tslint:disable-next-line: no-any*/
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    /**
     * @protected
     * @return {?}
     */
    createInternalArrayRepresentation() {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        const outArray = [];
        /** @type {?} */
        let current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/* tslint:disable-next-line: no-any */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
function OnChange(defaultValue) {
    /** @type {?} */
    const sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */
    function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        const _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            /**
             * @return {?}
             */
            get() {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                /** @type {?} */
                const prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Utils {
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    static reflow(element) {
        /* tslint:disable-next-line: no-any */
        ((/**
         * @param {?} bs
         * @return {?}
         */
        (bs) => bs))(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _messagesHash = {};
/** @type {?} */
const _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
function warnOnce(msg) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-utils.js.map

/***/ }),

/***/ "mArK":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/branch/branch-view/branch-view.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"animate__animated animate__fadeInUp\" >\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Branch</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Branch</h6>\n              </div>\n              <div class=\"col-md-6\">\n                <ul class=\"nav justify-content-end\">\n                  <button class=\"btn btn-primary btn-icon-text\" [routerLink]=\"['/layout/administration/branch-detail']\">\n                    <i data-feather=\"edit\" appFeatherIcon class=\"btn-icon-prepend\"></i> Add Branch\n                  </button>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>Branch Code</th>\n                  <th>Branch Name</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let x of branchList; let i = index\">\n                  <td> \n                    <button type=\"button\" (click)=\"viewBranch(x.branch_id)\" title=\"Remove\" class=\"btn btn-sm btn-primary btn-icon\">\n                      <i class=\"feather icon-edit\"></i>\n                    </button> \n                  </td>\n                  <td>{{x.branch_code}}</td>\n                  <td>{{x.branchName}}</td>\n                </tr>\n              </tbody>\n            </table>\n            <!-- <table id=\"dataTable\" class=\"table\">\n              <thead>\n                <tr>\n                  <th></th>\n                  <th>Branch Code</th>\n                  <th>Branch Name</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let x of branchList; let i = index\">\n                  <td> \n                    <button type=\"button\" (click)=\"viewBranch(x.branch_id)\" title=\"Remove\" class=\"btn btn-sm btn-danger btn-icon\">\n                      <i class=\"feather icon-trash\"></i>\n                    </button> \n                  </td>\n                  <td>{{x.branch_code}}</td>\n                  <td>{{x.branchName}}</td>\n                </tr>\n              </tbody>\n            </table> -->\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>  \n");

/***/ }),

/***/ "mnPa":
/*!*************************************************************************************************!*\
  !*** ./src/app/page/administration/shiftcodes/shiftcodes-detail/shiftcodes-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ShiftcodesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftcodesDetailComponent", function() { return ShiftcodesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shiftcodes_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shiftcodes-detail.component.html */ "bsro");
/* harmony import */ var _shiftcodes_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shiftcodes-detail.component.css */ "+1nS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






let ShiftcodesDetailComponent = class ShiftcodesDetailComponent {
    constructor(fb, decimalPipe) {
        this.fb = fb;
        this.decimalPipe = decimalPipe;
        this.isLoading = true;
        this.today = new Date();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
        this.breakList = ['First Break', 'Second Break', 'Third Break'];
        this.break = [];
        this.isBreak = false;
        this.isBreakIn = false;
        this.isBreakOut = false;
        this.errShiftName = false;
        this.errDescription = false;
        this.errTimeIn = false;
        this.errTimeOut = false;
        this.errHalfDayIn = false;
        this.errHalfDayOut = false;
        this.BreakOut = '';
        this.BreakIn = '';
        this.halfDayIn = '';
        this.halfDayOut = '';
    }
    ngOnInit() {
        this.shiftForm = this.fb.group({
            shiftName: [''],
            gracePeriod: ['0'],
            description: [''],
            isFlexi: [false],
            timeIn: [''],
            dtimeIn: [''],
            daysCover: [0],
            timeOut: [''],
            dtimeOut: [''],
            halfDayIn: [''],
            halfDayOut: [''],
            halfDayInDays: [0],
            halfDayOutDays: [0],
            workingHrs: [{ value: '0', disabled: true }],
        });
        this.breakForm = this.fb.group({
            selectedBreak: [null],
            description: [''],
            BreakIn: [''],
            breakInDays: [''],
            BreakOut: [''],
            breakOutDays: [''],
        });
        this.isLoading = false;
    }
    onFlexi(e) {
        this.shiftForm.get('workingHrs').setValue("0");
        if (!e.target.checked) {
            this.shiftForm.get('workingHrs').disable();
            this.computeDateDiff();
        }
        else {
            this.shiftForm.get('workingHrs').enable();
        }
    }
    setTimeIn(e) {
        this.shiftForm.get('timeIn').setValue(this.pipe.transform(e, 'shortTime'));
        this.shiftForm.get('dtimeIn').setValue(e);
        this.computeDateDiff();
    }
    setTimeOut(e) {
        this.shiftForm.get('timeOut').setValue(this.pipe.transform(e, 'shortTime'));
        this.shiftForm.get('dtimeOut').setValue(e);
        this.computeDateDiff();
    }
    computeDateDiff() {
        if (this.shiftForm.get('dtimeIn').value != "" || this.shiftForm.get('dtimeIn').value != null
            && this.shiftForm.get('dtimeOut').value != "" || this.shiftForm.get('dtimeOut').value != null) {
            var date = new Date(this.shiftForm.get('dtimeOut').value);
            date.setDate(date.getDate() + Number(this.shiftForm.get('daysCover').value));
            const diffInMs = Date.parse(date.toString()) - Date.parse(this.shiftForm.get('dtimeIn').value);
            const diffInHours = diffInMs / 1000 / 60 / 60;
            this.shiftForm.get('workingHrs').setValue(this.decimalPipe.transform(diffInHours, '1.2-2'));
        }
    }
    setHalfDayIn(e) {
        this.shiftForm.get('halfDayIn').setValue(this.pipe.transform(e, 'shortTime'));
    }
    setHalfDayOut(e) {
        this.shiftForm.get('halfDayOut').setValue(this.pipe.transform(e, 'shortTime'));
    }
    setBreakIn(e) {
        this.breakForm.get('BreakIn').setValue(this.pipe.transform(e, 'shortTime'));
    }
    setBreakOut(e) {
        this.breakForm.get('BreakOut').setValue(this.pipe.transform(e, 'shortTime'));
    }
    addBreak() {
        this.isBreak = false;
        if (this.break.length < 3) {
            var flag = this.breakValidation();
            if (flag) {
                this.break.push({
                    breakType: this.breakList[this.break.length],
                    breakIn: this.breakForm.get('BreakIn').value,
                    breakInDays: this.breakForm.get('breakInDays').value == "" || this.breakForm.get('breakInDays').value == null ? "0" : this.breakForm.get('breakInDays').value,
                    breakOut: this.breakForm.get('BreakOut').value,
                    breakOutDays: this.breakForm.get('breakOutDays').value == "" || this.breakForm.get('breakOutDays').value == null ? "0" : this.breakForm.get('breakOutDays').value,
                });
                this.breakForm.reset();
            }
        }
        else {
            this.isBreak = true;
        }
    }
    breakValidation() {
        let flag = true;
        if (this.breakForm.get('BreakIn').value == "" || this.breakForm.get('BreakIn').value == null) {
            flag = false;
            this.isBreakIn = true;
        }
        else {
            flag = true;
            this.isBreakIn = false;
        }
        if (this.breakForm.get('BreakOut').value == "" || this.breakForm.get('BreakOut').value == null) {
            flag = false;
            this.isBreakOut = true;
        }
        else {
            flag = true;
            this.isBreakOut = false;
        }
        return flag;
    }
    removeBreak(e) {
        this.isBreak = false;
        this.break.splice(e, 1);
        var obj = [];
        for (var i = 0; i < this.break.length; i++) {
            obj.push({
                breakType: this.breakList[i],
                breakIn: this.break[i].breakIn,
                breakInDays: this.break[i].breakInDays,
                breakOut: this.break[i].breakOut,
                breakOutDays: this.break[i].breakOutDays,
            });
        }
        this.break = obj;
    }
    submit() {
        var flag = this.formValidation();
        if (flag) {
            var obj = {
                shiftName: this.shiftForm.get('shiftName').value,
                gracePeriod: this.shiftForm.get('gracePeriod').value == "" || this.shiftForm.get('gracePeriod').value == null ? "0" : this.shiftForm.get('gracePeriod').value,
                description: this.shiftForm.get('description').value,
                isFlexi: this.shiftForm.get('isFlexi').value,
                timeIn: this.shiftForm.get('timeIn').value,
                timeOut: this.shiftForm.get('timeOut').value,
                daysCover: this.shiftForm.get('daysCover').value == "" || this.shiftForm.get('daysCover').value == null ? "0" : this.shiftForm.get('daysCover').value,
                halfDayIn: this.shiftForm.get('halfDayIn').value,
                halfDayInDays: this.shiftForm.get('halfDayInDays').value == "" || this.shiftForm.get('halfDayInDays').value == null ? "0" : this.shiftForm.get('halfDayInDays').value,
                halfDayOut: this.shiftForm.get('halfDayOut').value,
                halfDayOutDays: this.shiftForm.get('halfDayOutDays').value == "" || this.shiftForm.get('halfDayOutDays').value == null ? "0" : this.shiftForm.get('halfDayOutDays').value,
                workingHrs: this.shiftForm.get('workingHrs').value,
            };
        }
    }
    formValidation() {
        let flag = true;
        this.errShiftName = false;
        this.errDescription = false;
        this.errTimeIn = false;
        this.errTimeOut = false;
        this.errHalfDayIn = false;
        this.errHalfDayOut = false;
        if (this.shiftForm.get('shiftName').value == "" || this.shiftForm.get('shiftName').value == null) {
            flag = false;
            this.errShiftName = true;
        }
        if (this.shiftForm.get('description').value == "" || this.shiftForm.get('description').value == null) {
            flag = false;
            this.errDescription = true;
        }
        if (this.shiftForm.get('timeIn').value == "" || this.shiftForm.get('timeIn').value == null) {
            flag = false;
            this.errTimeIn = true;
        }
        if (this.shiftForm.get('timeOut').value == "" || this.shiftForm.get('timeOut').value == null) {
            flag = false;
            this.errTimeOut = true;
        }
        if (this.shiftForm.get('halfDayIn').value == "" || this.shiftForm.get('halfDayIn').value == null) {
            flag = false;
            this.errHalfDayIn = true;
        }
        if (this.shiftForm.get('halfDayOut').value == "" || this.shiftForm.get('halfDayOut').value == null) {
            flag = false;
            this.errHalfDayOut = true;
        }
        return flag;
    }
};
ShiftcodesDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"] }
];
ShiftcodesDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-shiftcodes-detail',
        template: _raw_loader_shiftcodes_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shiftcodes_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShiftcodesDetailComponent);



/***/ }),

/***/ "njyG":
/*!***************************************************************!*\
  !*** ./node_modules/angular-datatables/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "/iSe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "HO/X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "pHVi":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/payroll-rates/payroll-rates.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" >\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Payroll Rates</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Payroll Rates</h6>\n              </div>\n            </div>\n            \n          </div>\n          <hr>\n          <div class=\"row\">\n          <div class=\"col-lg-3 email-aside border-lg-right\">\n            <div class=\"aside-content\">\n              <div class=\"form-group\">\n                <label class=\"control-label\">Rate Group</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Rate Group\">\n              </div>\n            </div>\n            <ul class=\"nav justify-content-end\">\n              <button class=\"btn btn-primary btn-icon-text\">\n                <i data-feather=\"save\" appFeatherIcon class=\"btn-icon-prepend\"></i> Save Changes\n              </button>\n            </ul>\n          </div>\n          <div class=\"col-lg-9 email-content\">\n            <div class=\"table-responsive\">\n              <table id=\"dataTableExample\" class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Description</th>\n                    <th>Rates</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Ordinary Day</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"1.0000\" placeholder=\"Ordinary Day\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Restday</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"1.3000\" placeholder=\"Restday\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Special Holiday Premium</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"0.3000\" placeholder=\"Special Holiday Premium\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Special Holiday, Rest Day</td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" value=\"1.5000\" placeholder=\"Special Holiday, Rest Day\">\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr>\n                    <th></th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>");

/***/ }),

/***/ "rjpp":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/series-code/series-code.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Series Code</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Series Code</h6>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"table-responsive\">\n            <table id=\"dataTableExample\" class=\"table\">\n              <thead>\n                <tr>\n                  <th>Transaction Type</th>\n                  <th>Prefix</th>\n                  <th>Year</th>\n                  <th>Series</th>\n                  <th>Length</th>\n                  <th>Code</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Overtime</td>\n                  <td>OT</td>\n                  <td>21</td>\n                  <td>1</td>\n                  <td>4</td>\n                  <td>OT210001</td>\n                  <td>\n                    <button type=\"button\" title=\"Edit\" class=\"btn btn-sm btn-primary btn-icon\">\n                      <i class=\"feather icon-edit-2\"></i>\n                    </button> \n                  </td>\n                </tr>\n                <tr>\n                  <td>Payroll</td>\n                  <td>OT</td>\n                  <td>21</td>\n                  <td>1</td>\n                  <td>4</td>\n                  <td>PA210001</td>\n                  <td>\n                    <button type=\"button\" title=\"Edit\" class=\"btn btn-sm btn-primary btn-icon\">\n                      <i class=\"feather icon-edit-2\"></i>\n                    </button> \n                  </td>\n                </tr>\n                <tr>\n                  <td>Timekeeping</td>\n                  <td>TK</td>\n                  <td>21</td>\n                  <td>1</td>\n                  <td>4</td>\n                  <td>TK210001</td>\n                  <td>\n                    <button type=\"button\" title=\"Edit\" class=\"btn btn-sm btn-primary btn-icon\">\n                      <i class=\"feather icon-edit-2\"></i>\n                    </button> \n                  </td>\n                </tr>\n                <tr>\n                  <td>Leave</td>\n                  <td>LV</td>\n                  <td>21</td>\n                  <td>1</td>\n                  <td>4</td>\n                  <td>LV210001</td>\n                  <td>\n                    <button type=\"button\" title=\"Edit\" class=\"btn btn-sm btn-primary btn-icon\">\n                      <i class=\"feather icon-edit-2\"></i>\n                    </button> \n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "tRUT":
/*!*********************************************************************************************!*\
  !*** ./src/app/page/administration/shiftcodes/shiftcodes-view/shiftcodes-view.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ShiftcodesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftcodesViewComponent", function() { return ShiftcodesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shiftcodes_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shiftcodes-view.component.html */ "RtaS");
/* harmony import */ var _shiftcodes_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shiftcodes-view.component.css */ "XQt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ShiftcodesViewComponent = class ShiftcodesViewComponent {
    constructor() {
        this.isLoading = false;
    }
    ngOnInit() {
    }
};
ShiftcodesViewComponent.ctorParameters = () => [];
ShiftcodesViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shiftcodes-view',
        template: _raw_loader_shiftcodes_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shiftcodes_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShiftcodesViewComponent);



/***/ }),

/***/ "tk8U":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/allowance-deduction/allowance-deduction-view/allowance-deduction-view.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Company Setup</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Allowance/Deduction</li>\n    </ol>\n  </nav>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6>Allowance/Deduction</h6>\n              </div>\n              <div class=\"col-md-6\">\n                <ul class=\"nav justify-content-end\">\n                  <button class=\"btn btn-primary btn-icon-text\" [routerLink]=\"['/layout/administration/allowance-deduction-detail']\">\n                    <i data-feather=\"edit\" appFeatherIcon class=\"btn-icon-prepend\"></i> Add Allowance/Deduction\n                  </button>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"table-responsive\">\n            <table id=\"dataTableExample\" class=\"table\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Tiger Nixon</td>\n                  <td>System Architect</td>\n                  <td>Edinburgh</td>\n                  <td>61</td>\n                  <td>2011/04/25</td>\n                  <td>$320,800</td>\n                </tr>\n                <tr>\n                  <td>Garrett Winters</td>\n                  <td>Accountant</td>\n                  <td>Tokyo</td>\n                  <td>63</td>\n                  <td>2011/07/25</td>\n                  <td>$170,750</td>\n                </tr>\n                <tr>\n                  <td>Ashton Cox</td>\n                  <td>Junior Technical Author</td>\n                  <td>San Francisco</td>\n                  <td>66</td>\n                  <td>2009/01/12</td>\n                  <td>$86,000</td>\n                </tr>\n                <tr>\n                  <td>Cedric Kelly</td>\n                  <td>Senior Javascript Developer</td>\n                  <td>Edinburgh</td>\n                  <td>22</td>\n                  <td>2012/03/29</td>\n                  <td>$433,060</td>\n                </tr>\n                <tr>\n                  <td>Airi Satou</td>\n                  <td>Accountant</td>\n                  <td>Tokyo</td>\n                  <td>33</td>\n                  <td>2008/11/28</td>\n                  <td>$162,700</td>\n                </tr>\n                <tr>\n                  <td>Brielle Williamson</td>\n                  <td>Integration Specialist</td>\n                  <td>New York</td>\n                  <td>61</td>\n                  <td>2012/12/02</td>\n                  <td>$372,000</td>\n                </tr>\n                <tr>\n                  <td>Herrod Chandler</td>\n                  <td>Sales Assistant</td>\n                  <td>San Francisco</td>\n                  <td>59</td>\n                  <td>2012/08/06</td>\n                  <td>$137,500</td>\n                </tr>\n                <tr>\n                  <td>Rhona Davidson</td>\n                  <td>Integration Specialist</td>\n                  <td>Tokyo</td>\n                  <td>55</td>\n                  <td>2010/10/14</td>\n                  <td>$327,900</td>\n                </tr>\n                <tr>\n                  <td>Colleen Hurst</td>\n                  <td>Javascript Developer</td>\n                  <td>San Francisco</td>\n                  <td>39</td>\n                  <td>2009/09/15</td>\n                  <td>$205,500</td>\n                </tr>\n                <tr>\n                  <td>Sonya Frost</td>\n                  <td>Software Engineer</td>\n                  <td>Edinburgh</td>\n                  <td>23</td>\n                  <td>2008/12/13</td>\n                  <td>$103,600</td>\n                </tr>\n                <tr>\n                  <td>Jena Gaines</td>\n                  <td>Office Manager</td>\n                  <td>London</td>\n                  <td>30</td>\n                  <td>2008/12/19</td>\n                  <td>$90,560</td>\n                </tr>\n                <tr>\n                  <td>Quinn Flynn</td>\n                  <td>Support Lead</td>\n                  <td>Edinburgh</td>\n                  <td>22</td>\n                  <td>2013/03/03</td>\n                  <td>$342,000</td>\n                </tr>\n                <tr>\n                  <td>Charde Marshall</td>\n                  <td>Regional Director</td>\n                  <td>San Francisco</td>\n                  <td>36</td>\n                  <td>2008/10/16</td>\n                  <td>$470,600</td>\n                </tr>\n                <tr>\n                  <td>Haley Kennedy</td>\n                  <td>Senior Marketing Designer</td>\n                  <td>London</td>\n                  <td>43</td>\n                  <td>2012/12/18</td>\n                  <td>$313,500</td>\n                </tr>\n                <tr>\n              <td>Tatyana Fitzpatrick</td>\n                  <td>Regional Director</td>\n                  <td>London</td>\n                  <td>19</td>\n                  <td>2010/03/17</td>\n                  <td>$385,750</td>\n                </tr>\n                <tr>\n                  <td>Michael Silva</td>\n                  <td>Marketing Designer</td>\n                  <td>London</td>\n                  <td>66</td>\n                  <td>2012/11/27</td>\n                  <td>$198,500</td>\n                </tr>\n                <tr>\n                  <td>Paul Byrd</td>\n                  <td>Chief Financial Officer (CFO)</td>\n                  <td>New York</td>\n                  <td>64</td>\n                  <td>2010/06/09</td>\n                  <td>$725,000</td>\n                </tr>\n                <tr>\n                  <td>Gloria Little</td>\n                  <td>Systems Administrator</td>\n                  <td>New York</td>\n                  <td>59</td>\n                  <td>2009/04/10</td>\n                  <td>$237,500</td>\n                </tr>\n                <tr>\n                  <td>Bradley Greer</td>\n                  <td>Software Engineer</td>\n                  <td>London</td>\n                  <td>41</td>\n                  <td>2012/10/13</td>\n                  <td>$132,000</td>\n                </tr>\n                <tr>\n                  <td>Dai Rios</td>\n                  <td>Personnel Lead</td>\n                  <td>Edinburgh</td>\n                  <td>35</td>\n                  <td>2012/09/26</td>\n                  <td>$217,500</td>\n                </tr>\n                <tr>\n                  <td>Jenette Caldwell</td>\n                  <td>Development Lead</td>\n                  <td>New York</td>\n                  <td>30</td>\n                  <td>2011/09/03</td>\n                  <td>$345,000</td>\n                </tr>\n                <tr>\n                  <td>Yuri Berry</td>\n                  <td>Chief Marketing Officer (CMO)</td>\n                  <td>New York</td>\n                  <td>40</td>\n                  <td>2009/06/25</td>\n                  <td>$675,000</td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                  <th></th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n  </div>\n");

/***/ }),

/***/ "yfLR":
/*!**************************************************************************************!*\
  !*** ./src/app/page/administration/branch/branch-detail/branch-detail.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2gtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ytEC":
/*!*************************************************************************************!*\
  !*** ./src/app/page/administration/approval-process/approval-process.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC1wcm9jZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "zqyf":
/*!************************************************************************************************************************!*\
  !*** ./src/app/page/administration/allowance-deduction/allowance-deduction-view/allowance-deduction-view.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AllowanceDeductionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowanceDeductionViewComponent", function() { return AllowanceDeductionViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_allowance_deduction_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./allowance-deduction-view.component.html */ "tk8U");
/* harmony import */ var _allowance_deduction_view_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allowance-deduction-view.component.css */ "Ozkn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AllowanceDeductionViewComponent = class AllowanceDeductionViewComponent {
    constructor() {
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = false;
    }
};
AllowanceDeductionViewComponent.ctorParameters = () => [];
AllowanceDeductionViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-allowance-deduction-view',
        template: _raw_loader_allowance_deduction_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_allowance_deduction_view_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllowanceDeductionViewComponent);



/***/ })

}]);
//# sourceMappingURL=page-administration-administration-module.js.map