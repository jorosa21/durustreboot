(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/bvK":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "b0pS");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "kSqf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onLogout(e) {
        e.preventDefault();
        sessionStorage.removeItem('token');
        if (!sessionStorage.getItem('token')) {
            this.router.navigate(['login']);
        }
    }
    toggleSidebar(e) {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JonBonJoviCOrosa\Desktop\New folder\DurustHR\src\main.ts */"zUnb");


/***/ }),

/***/ "2MsK":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/profile.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-page tx-13\">\n  <div class=\"row\">\n    <div class=\"col-12 grid-margin\">\n      <div class=\"profile-header\">\n        <div class=\"cover\">\n          <div class=\"gray-shade\"></div>\n          <figure>\n            <img src=\"https://via.placeholder.com/1148x100\" class=\"img-fluid\" alt=\"profile cover\">\n          </figure>\n          <div class=\"cover-body d-flex justify-content-between align-items-center\">\n            <div>\n              <img class=\"profile-pic\" src=\"https://via.placeholder.com/100x100\" alt=\"profile\">\n              <span class=\"profile-name\">Amiah Burton</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"header-links\">\n          <ul class=\"links d-flex align-items-center mt-3 mt-md-0\">\n            <li class=\"header-link-item d-flex align-items-center\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n              <i class=\"mr-1 icon-md\" data-feather=\"columns\" appFeatherIcon></i>\n              <a class=\"pt-1px d-none d-md-block\" [routerLink]=\"['personal-information']\">Personal Information</a>\n            </li>\n            <li class=\"header-link-item ml-3 pl-3 border-left d-flex align-items-center\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n              <i class=\"mr-1 icon-md\" data-feather=\"user\" appFeatherIcon></i>\n              <a class=\"pt-1px d-none d-md-block\" [routerLink]=\"['work-information']\">Work Information</a>\n            </li>\n            <li class=\"header-link-item ml-3 pl-3 border-left d-flex align-items-center\">\n              <i class=\"mr-1 icon-md\" data-feather=\"users\" appFeatherIcon></i>\n              <a class=\"pt-1px d-none d-md-block\" routerLink=\".\">Friends <span class=\"text-muted tx-12\">3,765</span></a>\n            </li>\n            <li class=\"header-link-item ml-3 pl-3 border-left d-flex align-items-center\">\n              <i class=\"mr-1 icon-md\" data-feather=\"image\" appFeatherIcon></i>\n              <a class=\"pt-1px d-none d-md-block\" routerLink=\".\">Photos</a>\n            </li>\n            <li class=\"header-link-item ml-3 pl-3 border-left d-flex align-items-center\">\n              <i class=\"mr-1 icon-md\" data-feather=\"video\" appFeatherIcon></i>\n              <a class=\"pt-1px d-none d-md-block\" routerLink=\".\">Videos</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row profile-body\">\n    <div class=\"d-none d-md-block col-md-12 col-xl-12\">\n      <div class=\"card rounded\">\n      \n          <router-outlet></router-outlet>\n    </div>\n \n  </div>\n</div>");

/***/ }),

/***/ "7i/3":
/*!******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "A9zS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/base/base.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\r\n\r\n  <!-- partial:sidebar -->\r\n  <app-sidebar></app-sidebar>\r\n  <!-- partial -->\r\n\r\n  <div class=\"page-wrapper\">\r\n\r\n    <!-- partial:navbar -->\r\n    <app-navbar></app-navbar>\r\n    <!-- partial -->\r\n\r\n    <div class=\"page-content\">\r\n\r\n      <!-- Spinner for lazyload modules -->\r\n   \r\n\r\n        <router-outlet></router-outlet>\r\n\r\n    </div>\r\n\r\n    <!-- partial:footer -->\r\n    <app-footer></app-footer>\r\n    <!-- partial -->\r\n\r\n  </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: "http://localhost:1401/api/"
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

/***/ "Cc9I":
/*!*******************************************************************************!*\
  !*** ./src/app/services/administration/dropdown-settings/dropdown.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return DropdownService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");




let DropdownService = class DropdownService {
    constructor(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "MasterSetting/";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "TenantManagement/";
    }
    dropdownFixType() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('active', "1");
        return this.http.get(this.uri + "Dropdown_fix_view", { params: params });
    }
    dropdownList() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('dropdowntype_id', "0");
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('company_id', sessionStorage.getItem('ci'));
        return this.http.get(this.url + "Dropdown_List_all", { params: params });
    }
    dropdownIU(param) {
        return this.http.post(this.url + "DropdownIU", param);
    }
};
DropdownService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DropdownService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], DropdownService);



/***/ }),

/***/ "FFZL":
/*!******************************************************************!*\
  !*** ./src/app/services/administration/branch/branch.service.ts ***!
  \******************************************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");




let BranchService = class BranchService {
    constructor(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "TenantManagement/";
    }
    branchList(i) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('company_id', sessionStorage.getItem('ci'));
        params = params.append('branch_id', i);
        params = params.append('created_by', sessionStorage.getItem('u'));
        return this.http.get(this.uri + "branch_view", { params: params });
    }
    ipList(i) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('branch_id', i);
        return this.http.get(this.uri + "branch_ip_view", { params: params });
    }
    contactList(i) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('branch_id', i);
        return this.http.get(this.uri + "branch_contact_view", { params: params });
    }
    emailList(i) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('branch_id', i);
        return this.http.get(this.uri + "branch_email_view", { params: params });
    }
    branchIU(param) {
        return this.http.post(this.uri + "BranchIU", param);
    }
};
BranchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BranchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BranchService);



/***/ }),

/***/ "IYwT":
/*!*************************************************************!*\
  !*** ./src/app/core/feather-icon/feather-icon.directive.ts ***!
  \*************************************************************/
/*! exports provided: FeatherIconDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIconDirective", function() { return FeatherIconDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feather-icons */ "d8Z/");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_2__);



let FeatherIconDirective = class FeatherIconDirective {
    constructor() { }
    ngAfterViewInit() {
        // feather icon
        feather_icons__WEBPACK_IMPORTED_MODULE_2___default.a.replace();
    }
};
FeatherIconDirective.ctorParameters = () => [];
FeatherIconDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appFeatherIcon]'
    })
], FeatherIconDirective);



/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "Z0AN");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component.css */ "7i/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ "WFFF");
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ "mdsD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_master_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/master/master.service */ "m7hs");









let SidebarComponent = class SidebarComponent {
    constructor(document, renderer, router, masterService) {
        this.document = document;
        this.renderer = renderer;
        this.masterService = masterService;
        this.menuItems = [];
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                /**
                 * Activating the current active item dropdown
                 */
                this._activateMenuDropdown();
                /**
                 * closing the sidebar
                 */
                if (window.matchMedia('(max-width: 991px)').matches) {
                    this.document.body.classList.remove('sidebar-open');
                }
            }
        });
    }
    ngOnInit() {
        this.masterService.menuList().subscribe(data => {
            console.log(data);
        });
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_6__["MENU"];
        /**
         * Sidebar-folded on desktop (min-width:992px and max-width: 1199px)
         */
        const desktopMedium = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
        desktopMedium.addListener(this.iconSidebar);
        this.iconSidebar(desktopMedium);
    }
    ngAfterViewInit() {
        // activate menu item
        new metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_5___default.a(this.sidebarMenu.nativeElement);
        this._activateMenuDropdown();
    }
    /**
     * Toggle sidebar on hamburger button click
     */
    toggleSidebar(e) {
        this.sidebarToggler.nativeElement.classList.toggle('active');
        this.sidebarToggler.nativeElement.classList.toggle('not-active');
        if (window.matchMedia('(min-width: 992px)').matches) {
            e.preventDefault();
            this.document.body.classList.toggle('sidebar-folded');
        }
        else if (window.matchMedia('(max-width: 991px)').matches) {
            e.preventDefault();
            this.document.body.classList.toggle('sidebar-open');
        }
    }
    /**
     * Toggle settings-sidebar
     */
    toggleSettingsSidebar(e) {
        e.preventDefault();
        this.document.body.classList.toggle('settings-open');
    }
    /**
     * Open sidebar when hover (in folded folded state)
     */
    operSidebarFolded() {
        if (this.document.body.classList.contains('sidebar-folded')) {
            this.document.body.classList.add("open-sidebar-folded");
        }
    }
    /**
     * Fold sidebar after mouse leave (in folded state)
     */
    closeSidebarFolded() {
        if (this.document.body.classList.contains('sidebar-folded')) {
            this.document.body.classList.remove("open-sidebar-folded");
        }
    }
    /**
     * Sidebar-folded on desktop (min-width:992px and max-width: 1199px)
     */
    iconSidebar(e) {
        if (e.matches) {
            this.document.body.classList.add('sidebar-folded');
        }
        else {
            this.document.body.classList.remove('sidebar-folded');
        }
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
    /**
     * Reset the menus then hilight current active menu item
     */
    _activateMenuDropdown() {
        this.resetMenuItems();
        this.activateMenuItems();
    }
    /**
     * Resets the menus
     */
    resetMenuItems() {
        const links = document.getElementsByClassName('nav-link-ref');
        for (let i = 0; i < links.length; i++) {
            const menuItemEl = links[i];
            menuItemEl.classList.remove('mm-active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.remove('mm-active');
                const parent2El = parentEl.parentElement;
                if (parent2El) {
                    parent2El.classList.remove('mm-show');
                }
                const parent3El = parent2El.parentElement;
                if (parent3El) {
                    parent3El.classList.remove('mm-active');
                    if (parent3El.classList.contains('side-nav-item')) {
                        const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');
                        if (firstAnchor) {
                            firstAnchor.classList.remove('mm-active');
                        }
                    }
                    const parent4El = parent3El.parentElement;
                    if (parent4El) {
                        parent4El.classList.remove('mm-show');
                        const parent5El = parent4El.parentElement;
                        if (parent5El) {
                            parent5El.classList.remove('mm-active');
                        }
                    }
                }
            }
        }
    }
    ;
    /**
     * Toggles the menu items
     */
    activateMenuItems() {
        const links = document.getElementsByClassName('nav-link-ref');
        let menuItemEl = null;
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (window.location.pathname === links[i]['pathname']) {
                menuItemEl = links[i];
                break;
            }
        }
        if (menuItemEl) {
            menuItemEl.classList.add('mm-active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement;
                if (parent2El) {
                    parent2El.classList.add('mm-show');
                }
                const parent3El = parent2El.parentElement;
                if (parent3El) {
                    parent3El.classList.add('mm-active');
                    if (parent3El.classList.contains('side-nav-item')) {
                        const firstAnchor = parent3El.querySelector('.side-nav-link-a-ref');
                        if (firstAnchor) {
                            firstAnchor.classList.add('mm-active');
                        }
                    }
                    const parent4El = parent3El.parentElement;
                    if (parent4El) {
                        parent4El.classList.add('mm-show');
                        const parent5El = parent4El.parentElement;
                        if (parent5El) {
                            parent5El.classList.add('mm-active');
                        }
                    }
                }
            }
        }
    }
    ;
};
SidebarComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_master_master_service__WEBPACK_IMPORTED_MODULE_8__["MasterService"] }
];
SidebarComponent.propDecorators = {
    sidebarToggler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['sidebarToggler',] }],
    sidebarMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['sidebarMenu',] }]
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SidebarComponent);



/***/ }),

/***/ "N9F3":
/*!*******************************************************************!*\
  !*** ./src/app/core/content-animate/content-animate.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ContentAnimateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAnimateDirective", function() { return ContentAnimateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");

// Angular



/**
 * Page load animation
 */
let ContentAnimateDirective = class ContentAnimateDirective {
    constructor(el, router, animationBuilder) {
        this.el = el;
        this.router = router;
        this.animationBuilder = animationBuilder;
    }
    ngOnInit() {
        // animate the content
        this.initAnimate();
        // animate page load
        this.events = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.player.play();
            }
        });
    }
    ngOnDestroy() {
        this.events.unsubscribe();
        this.player.destroy();
    }
    /**
     * Animate page load
     */
    initAnimate() {
        this.player = this.animationBuilder
            .build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(15px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateY(0)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'none' }),
        ])
            .create(this.el.nativeElement);
    }
};
ContentAnimateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] }
];
ContentAnimateDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[contentAnimate]'
    })
], ContentAnimateDirective);



/***/ }),

/***/ "Om9n":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer d-flex flex-column flex-md-row align-items-center justify-content-between\">\n  <p class=\"text-muted text-center text-md-left\">Copyright © 2021 <a href=\"https://illimitado.com/\" target=\"_blank\">Illimitado</a>. All rights reserved</p>\n  <p class=\"text-muted text-center text-md-left mb-0 d-none d-md-block\">Handcrafted With <i class=\"mb-1 text-primary ml-1 icon-small\" class=\"feather icon-heart\"></i></p>\n</footer>");

/***/ }),

/***/ "PSXT":
/*!*********************************************************!*\
  !*** ./src/app/services/security/auth-guard.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.service */ "u0Dx");




let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);



/***/ }),

/***/ "Qrbr":
/*!*******************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "vm3U");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.css */ "gzr8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.isLoading = true;
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);



/***/ }),

/***/ "Qw6f":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/administration/administration.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'DurustHR';
    }
    ngOnInit() { }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tx//":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "kVkw");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "/bvK");
/* harmony import */ var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../core/feather-icon/feather-icon.module */ "tyVc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/base.component */ "VObd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _core_content_animate_content_animate_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/content-animate/content-animate.directive */ "N9F3");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");














const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let LayoutModule = class LayoutModule {
};
LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_9__["BaseComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], _core_content_animate_content_animate_directive__WEBPACK_IMPORTED_MODULE_11__["ContentAnimateDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbCollapseModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"],
            _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_4__["FeahterIconModule"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], LayoutModule);



/***/ }),

/***/ "UIK3":
/*!************************************************************!*\
  !*** ./src/app/services/auth/register/register.service.ts ***!
  \************************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        this.register = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Identity/Registration";
        this.verify = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Identity/Verification";
        this.create = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "TenantManagement/CompanyBranchIU";
    }
    registerUser(param) {
        return this.http.post(this.register, param);
    }
    verifyUser(param) {
        return this.http.post(this.verify, param);
    }
    tenantCreate(param) {
        return this.http.post(this.create, param);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RegisterService);



/***/ }),

/***/ "VObd":
/*!***********************************************!*\
  !*** ./src/app/layout/base/base.component.ts ***!
  \***********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_base_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./base.component.html */ "A9zS");
/* harmony import */ var _base_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component.scss */ "yqSI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BaseComponent = class BaseComponent {
    constructor() { }
    ngOnInit() {
    }
};
BaseComponent.ctorParameters = () => [];
BaseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-base',
        template: _raw_loader_base_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_base_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BaseComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "WP1f":
/*!*******************************************************************************!*\
  !*** ./src/app/page/employee/employee-details/employee-details.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "WdkH":
/*!****************************************************************!*\
  !*** ./src/app/services/security/token-interceptor.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _auth_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/login/login.service */ "u0Dx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`,
                'Content-Type': 'application/json',
            }
        });
        return next.handle(request);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _auth_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }
];
TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TokenInterceptorService);



/***/ }),

/***/ "Z0AN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"sidebar\">\n  <div class=\"sidebar-header\">\n\n    <!--- Logo -->\n    <a routerLink=\"/\" class=\"sidebar-brand\">\n      Noble<span>UI</span>\n    </a>\n\n    <!--- Toggler -->\n    <div class=\"sidebar-toggler not-active\" #sidebarToggler (click)=\"toggleSidebar($event)\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n\n  </div>\n  <div class=\"sidebar-body\" (mouseenter)=\"operSidebarFolded()\" (mouseleave)=\"closeSidebarFolded()\" [perfectScrollbar]>\n\n    <!--- Sidemenu start -->\n\n    <ul class=\"sidebar-nav metismenu\" id=\"sidebar-menu\" #sidebarMenu>\n      <ng-container *ngFor=\"let item of menuItems\">\n        <li class=\"nav-item nav-category\" *ngIf=\"item.isTitle\">{{ item.label }}</li>\n    \n        <li class=\"nav-item\" *ngIf=\"!item.isTitle\" >\n    \n          <a class=\"nav-link\" *ngIf=\"hasItems(item)\" href=\"javascript:void(0);\">\n            <i class=\"link-icon\" [attr.data-feather]=\"item.icon\" appFeatherIcon *ngIf=\"item.icon\"></i>\n            <span class=\"link-title\"> {{ item.label }}</span>\n            <span class=\"link-arrow\" data-feather=\"chevron-down\" appFeatherIcon></span>\n          </a>\n    \n          <a class=\"nav-link nav-link-ref\" [routerLink]=\"item.link\" *ngIf=\"!hasItems(item)\"\n            [attr.data-parent]=\"item.parentId\">\n            <i class=\"link-icon\" [attr.data-feather]=\"item.icon\" appFeatherIcon *ngIf=\"item.icon\"></i>\n            <span class=\"link-title\"> {{ item.label }}</span>\n            <span class=\"badge badge-{{item.badge.variant}}\" *ngIf=\"item.badge\">{{item.badge.text}}</span>\n          </a>\n    \n          <ul class=\"sidebar-nav sub-menu nav-second-level\" *ngIf=\"hasItems(item)\" aria-expanded=\"false\">\n    \n            <li class=\"nav-item\" *ngFor=\"let subitem of item.subItems\" [ngClass]=\"{'side-nav-item': hasItems(subitem)}\">\n              <a class=\"nav-link side-nav-link-a-ref\" *ngIf=\"hasItems(subitem)\" href=\"javascript:void(0);\">\n                <i class=\"link-icon\" [attr.data-feather]=\"subitem.icon\" appFeatherIcon *ngIf=\"subitem.icon\"></i>\n                <span class=\"link-title\"> {{ subitem.label }}</span>\n                <span class=\"link-arrow\" data-feather=\"chevron-down\" appFeatherIcon></span>\n              </a>\n    \n              <a class=\"nav-link nav-link-ref\" [routerLink]=\"subitem.link\" *ngIf=\"!hasItems(subitem)\"\n                [attr.data-parent]=\"subitem.parentId\">\n                <i class=\"link-icon\" [attr.data-feather]=\"subitem.icon\" appFeatherIcon *ngIf=\"subitem.icon\"></i>\n                {{ subitem.label }}\n              </a>\n    \n              <ul class=\"sidebar-nav sub-menu nav-third-level\" *ngIf=\"hasItems(subitem)\" aria-expanded=\"false\">\n                <li class=\"nav-item\" *ngFor=\"let subSubitem of subitem.subItems\">\n                  <a class=\"nav-link nav-link-ref\" [routerLink]=\"subSubitem.link\" [routerLinkActive]=\"['active']\"\n                    [attr.data-parent]=\"subSubitem.parentId\">\n                    <i class=\"link-icon\" [attr.data-feather]=\"subitem.icon\" appFeatherIcon *ngIf=\"subitem.icon\"></i>\n                    {{ subSubitem.label }}\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ng-container>\n      <li class=\"nav-item nav-category\">Docs</li>\n      <li class=\"nav-item\">\n        <a href=\"https://www.nobleui.com/angular/documentation/docs.html\" target=\"_blank\" class=\"nav-link\">\n          <i class=\"link-icon\" data-feather=\"hash\" appFeatherIcon></i>\n          <span class=\"link-title\">Documentation</span>\n        </a>\n      </li>\n    </ul>\n\n    <!--- Sidemenu end -->\n\n  </div>\n</nav>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services_administration_dropdown_settings_dropdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/administration/dropdown-settings/dropdown.service */ "Cc9I");
/* harmony import */ var _services_administration_branch_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/administration/branch/branch.service */ "FFZL");
/* harmony import */ var _services_master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/master/master.service */ "m7hs");
/* harmony import */ var _services_security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security/token-interceptor.service */ "WdkH");
/* harmony import */ var _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/dashboard/dashboard.component */ "Qrbr");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "Tx//");
/* harmony import */ var _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth/register/register.service */ "UIK3");
/* harmony import */ var _services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/security/auth-guard.service */ "PSXT");
/* harmony import */ var _services_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth/login/login.service */ "u0Dx");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_administration_company_company_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/administration/company/company.service */ "qXFu");



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
        ],
        providers: [
            _services_auth_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"],
            _services_security_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
            _services_auth_register_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
            _services_master_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            _services_administration_company_company_service__WEBPACK_IMPORTED_MODULE_18__["CompanyService"],
            _services_administration_branch_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _services_administration_dropdown_settings_dropdown_service__WEBPACK_IMPORTED_MODULE_1__["DropdownService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                useClass: _services_security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b0pS":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\">\n  <a href=\"\" class=\"sidebar-toggler\" (click)=\"toggleSidebar($event)\">\n    <i class=\"feather icon-menu\"></i>\n  </a>\n  <div class=\"navbar-content\">\n    <form class=\"search-form\">\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n            <i class=\"feather icon-search\"></i>\n          </div>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"navbarForm\" placeholder=\"Search here...\">\n      </div>\n    </form>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" ngbDropdown>\n        <a class=\"nav-link\" ngbDropdownToggle id=\"languageDropdown\" role=\"button\">\n          <i class=\"flag-icon flag-icon-us mt-1\" title=\"us\"></i> <span class=\"font-weight-medium ml-1 mr-1 d-none d-md-inline-block\">English</span>\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"languageDropdown\">\n          <a ngbDropdownItem class=\"py-2\"><i class=\"flag-icon flag-icon-us\" title=\"us\" id=\"us\"></i> <span class=\"ml-1\"> English </span></a>\n          <a ngbDropdownItem class=\"py-2\"><i class=\"flag-icon flag-icon-fr\" title=\"fr\" id=\"fr\"></i> <span class=\"ml-1\"> French </span></a>\n          <a ngbDropdownItem class=\"py-2\"><i class=\"flag-icon flag-icon-de\" title=\"de\" id=\"de\"></i> <span class=\"ml-1\"> German </span></a>\n          <a ngbDropdownItem class=\"py-2\"><i class=\"flag-icon flag-icon-pt\" title=\"pt\" id=\"pt\"></i> <span class=\"ml-1\"> Portuguese </span></a>\n          <a ngbDropdownItem class=\"py-2\"><i class=\"flag-icon flag-icon-es\" title=\"es\" id=\"es\"></i> <span class=\"ml-1\"> Spanish </span></a>\n        </div>\n      </li>\n      <li class=\"nav-item nav-apps\" ngbDropdown>\n        <a class=\"nav-link\" ngbDropdownToggle id=\"appsDropdown\">\n          <i class=\"link-icon feather icon-grid\"></i>\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"appsDropdown\">\n          <div class=\"dropdown-header d-flex align-items-center justify-content-between\">\n            <p class=\"mb-0 font-weight-medium\">Web Apps</p>\n            <a href=\"\" (click)=\"false\" class=\"text-muted\">Edit</a>\n          </div>\n          <div class=\"dropdown-body\">\n            <div class=\"d-flex align-items-center apps\">\n              <a routerLink=\"/apps/chat\"><i class=\"feather icon-message-square\"></i><p>Chat</p></a>\n              <a routerLink=\"/apps/calendar\"><i class=\"feather icon-calendar\"></i><p>Calendar</p></a>\n              <a routerLink=\"/apps/email/inbox\"><i class=\"feather icon-mail\"></i><p>Email</p></a>\n              <a routerLink=\"/general/profile\"><i class=\"feather icon-instagram\"></i><p>Profile</p></a>\n            </div>\n          </div>\n          <div class=\"dropdown-footer d-flex align-items-center justify-content-center\">\n            <a href=\"\" (click)=\"false\">View all</a>\n          </div>\n        </div>\n      </li>\n      <li class=\"nav-item nav-messages\" ngbDropdown>\n        <a class=\"nav-link\" ngbDropdownToggle id=\"messageDropdown\">\n          <i class=\"link-icon feather icon-mail\"></i>\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"messageDropdown\">\n          <div class=\"dropdown-header d-flex align-items-center justify-content-between\">\n            <p class=\"mb-0 font-weight-medium\">9 New Messages</p>\n            <a href=\"\" (click)=\"false\" class=\"text-muted\">Clear all</a>\n          </div>\n          <div class=\"dropdown-body\">\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"figure\">\n                <img src=\"https://via.placeholder.com/30x30\" alt=\"userr\">\n              </div>\n              <div class=\"content\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <p>Leonardo Payne</p>\n                  <p class=\"sub-text text-muted\">2 min ago</p>\n                </div>\t\n                <p class=\"sub-text text-muted\">Project status</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"figure\">\n                <img src=\"https://via.placeholder.com/30x30\" alt=\"userr\">\n              </div>\n              <div class=\"content\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <p>Carl Henson</p>\n                  <p class=\"sub-text text-muted\">30 min ago</p>\n                </div>\t\n                <p class=\"sub-text text-muted\">Client meeting</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"figure\">\n                <img src=\"https://via.placeholder.com/30x30\" alt=\"userr\">\n              </div>\n              <div class=\"content\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <p>Jensen Combs</p>\t\t\t\t\t\t\t\t\t\t\t\t\n                  <p class=\"sub-text text-muted\">1 hrs ago</p>\n                </div>\t\n                <p class=\"sub-text text-muted\">Project updates</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"figure\">\n                <img src=\"https://via.placeholder.com/30x30\" alt=\"userr\">\n              </div>\n              <div class=\"content\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <p>Amiah Burton</p>\n                  <p class=\"sub-text text-muted\">2 hrs ago</p>\n                </div>\n                <p class=\"sub-text text-muted\">Project deadline</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"figure\">\n                <img src=\"https://via.placeholder.com/30x30\" alt=\"userr\">\n              </div>\n              <div class=\"content\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <p>Yaretzi Mayo</p>\n                  <p class=\"sub-text text-muted\">5 hr ago</p>\n                </div>\n                <p class=\"sub-text text-muted\">New record</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"dropdown-footer d-flex align-items-center justify-content-center\">\n            <a href=\"\" (click)=\"false\">View all</a>\n          </div>\n        </div>\n      </li>\n      <li class=\"nav-item nav-notifications\" ngbDropdown>\n        <a class=\"nav-link\" ngbDropdownToggle id=\"notificationDropdown\">\n          <i class=\"link-icon feather icon-bell\"></i>\n          <div class=\"indicator\">\n            <div class=\"circle\"></div>\n          </div>\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"notificationDropdown\">\n          <div class=\"dropdown-header d-flex align-items-center justify-content-between\">\n            <p class=\"mb-0 font-weight-medium\">6 New Notifications</p>\n            <a href=\"\" (click)=\"false\" class=\"text-muted\">Clear all</a>\n          </div>\n          <div class=\"dropdown-body\">\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"icon\">\n                <i class=\"feather icon-user-plus\"></i>\n              </div>\n              <div class=\"content\">\n                <p>New customer registered</p>\n                <p class=\"sub-text text-muted\">2 sec ago</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"icon\">\n                <i class=\"feather icon-gift\"></i>\n              </div>\n              <div class=\"content\">\n                <p>New Order Recieved</p>\n                <p class=\"sub-text text-muted\">30 min ago</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"icon\">\n                <i class=\"feather icon-alert-circle\"></i>\n              </div>\n              <div class=\"content\">\n                <p>Server Limit Reached!</p>\n                <p class=\"sub-text text-muted\">1 hrs ago</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"icon\">\n                <i class=\"feather icon-layers\"></i>\n              </div>\n              <div class=\"content\">\n                <p>Apps are ready for update</p>\n                <p class=\"sub-text text-muted\">5 hrs ago</p>\n              </div>\n            </a>\n            <a href=\"\" (click)=\"false\" class=\"dropdown-item\">\n              <div class=\"icon\">\n                <i class=\"feather icon-download\"></i>\n              </div>\n              <div class=\"content\">\n                <p>Download completed</p>\n                <p class=\"sub-text text-muted\">6 hrs ago</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"dropdown-footer d-flex align-items-center justify-content-center\">\n            <a href=\"\" (click)=\"false\">View all</a>\n          </div>\n        </div>\n      </li>\n      <li class=\"nav-item nav-profile\" ngbDropdown>\n        <a class=\"nav-link\" ngbDropdownToggle id=\"profileDropdown\">\n          <img src=\"https://via.placeholder.com/30x30\" alt=\"profile\">\n        </a>\n        <div ngbDropdownMenu aria-labelledby=\"profileDropdown\">\n          <div class=\"dropdown-header d-flex flex-column align-items-center\">\n            <div class=\"figure mb-3\">\n              <img src=\"https://via.placeholder.com/80x80\" alt=\"\">\n            </div>\n            <div class=\"info text-center\">\n              <p class=\"name font-weight-bold mb-0\">Amiah Burton</p>\n              <p class=\"email text-muted mb-3\">amiahburton@gmail.com</p>\n            </div>\n          </div>\n          <div class=\"dropdown-body\">\n            <ul class=\"profile-nav p-0 pt-3\">\n              <li class=\"nav-item\">\n                <a routerLink=\"profile\" class=\"nav-link\">\n                  <i class=\"feather icon-user\"></i>\n                  <span>Profile</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"\" (click)=\"false\" class=\"nav-link\">\n                  <i class=\"feather icon-edit\"></i>\n                  <span>Edit Profile</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"\" (click)=\"false\" class=\"nav-link\">\n                  <i class=\"feather icon-repeat\"></i>\n                  <span>Switch User</span>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"\" (click)=\"onLogout($event)\" class=\"nav-link\">\n                  <i class=\"feather icon-log-out\"></i>\n                  <span>Log Out</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>");

/***/ }),

/***/ "f5Cw":
/*!******************************************************************************!*\
  !*** ./src/app/page/employee/employee-details/employee-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee-details.component.html */ "jau4");
/* harmony import */ var _employee_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-details.component.css */ "WP1f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        alert(this.id);
    }
};
EmployeeDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EmployeeDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employee-details',
        template: _raw_loader_employee_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployeeDetailsComponent);



/***/ }),

/***/ "fkxK":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "fl9W":
/*!***************************************************!*\
  !*** ./src/app/page/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "2MsK");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "mNXq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "gzr8":
/*!********************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "izv0":
/*!*****************************************************!*\
  !*** ./src/app/page/employee/employee.component.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employee_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employee.component.html */ "rfhF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let EmployeeComponent = class EmployeeComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeComponent.ctorParameters = () => [];
EmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-employee',
        template: _raw_loader_employee_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], EmployeeComponent);



/***/ }),

/***/ "jau4":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/employee/employee-details/employee-details.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  employee-details works!\n</p>\n");

/***/ }),

/***/ "kSqf":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "kVkw":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "Om9n");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "fkxK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "m7hs":
/*!***************************************************!*\
  !*** ./src/app/services/master/master.service.ts ***!
  \***************************************************/
/*! exports provided: MasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return MasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MasterService = class MasterService {
    constructor(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "MasterSetting/";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "TenantManagement/";
    }
    dropdownTenantList() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('dropdowntype_id', "0");
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('company_id', sessionStorage.getItem('ci'));
        return this.http.get(this.url + "Dropdown_List", { params: params });
    }
    dropdownList() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('dropdowntype_id', "0");
        return this.http.get(this.uri + "Dropdown_List", { params: params });
    }
    dropdownEntitlement() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('dropdowntype_id', "0");
        return this.http.get(this.uri + "Dropdown_entitlement", { params: params });
    }
    dropdownType() {
        return this.http.get(this.uri + "Dropdowntype_List");
    }
    dropdownCreate(param) {
        return this.http.post(this.uri + "DropdownIU", param);
    }
    menuList() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('instance_name', sessionStorage.getItem('in'));
        params = params.append('user_name', sessionStorage.getItem('us'));
        params = params.append('user_hash', sessionStorage.getItem('uh'));
        params = params.append('access_level_id', sessionStorage.getItem('ai'));
        return this.http.get(this.uri + "Menu_view", { params: params });
    }
};
MasterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], MasterService);



/***/ }),

/***/ "mNXq":
/*!****************************************************!*\
  !*** ./src/app/page/profile/profile.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "mdsD":
/*!****************************************!*\
  !*** ./src/app/layout/sidebar/menu.ts ***!
  \****************************************/
/*! exports provided: MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
const MENU = [
    {
        label: 'Main',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/layout/dashboard',
    },
    {
        label: 'Administration',
        isTitle: true
    },
    {
        label: 'Company Setup',
        icon: 'sliders',
        subItems: [
            {
                label: 'Company',
                link: '/layout/administration/company',
            },
            {
                label: 'Branch',
                link: '/layout/administration/branch-view'
            },
            {
                label: 'Module Access',
                link: '/layout/administration/module-access',
            },
            {
                label: 'Approval Process',
                link: '/layout/administration/approval-process',
            },
            {
                label: 'Dropdown Settings',
                link: '/layout/administration/dropdown-settings'
            },
            {
                label: 'Series Code',
                link: '/layout/administration/series-code'
            },
            {
                label: 'Shift Codes',
                link: '/layout/administration/shiftcodes-view',
            },
            {
                label: 'Leaves',
                link: '/layout/administration/leave-view',
            },
            {
                label: 'Holidays',
                link: '/layout/administration/holiday-view',
            },
            {
                label: 'Allowance/Deduction',
                link: '/layout/administration/allowance-deduction-view',
            },
            {
                label: 'Payroll Rates',
                link: '/layout/administration/payroll-rates',
            },
            {
                label: 'Contribution Table',
                link: '/layout/administration/contributions',
            },
        ]
    },
    {
        label: 'Employee',
        isTitle: true
    },
    {
        label: 'Employee Setup',
        icon: 'users',
        subItems: [
            {
                label: 'Employee',
                link: '#',
            },
            {
                label: 'Category',
                link: '#'
            },
            {
                label: 'Movement',
                link: '#'
            },
        ]
    },
    {
        label: 'Timekeeping',
        isTitle: true
    },
    {
        label: 'Attendance Log',
        icon: 'clock',
    },
    {
        label: 'Overtime Render',
        icon: 'watch',
    },
    {
        label: 'Employee Attendance',
        icon: 'book',
    },
    {
        label: 'Employee Schedule',
        icon: 'clipboard',
    },
    {
        label: 'Payroll',
        isTitle: true
    },
    {
        label: 'Payroll Setup',
        icon: 'book-open',
        subItems: [
            {
                label: 'Recurring',
                link: '#'
            },
            {
                label: 'One Time',
                link: '#'
            },
        ]
    },
    {
        label: 'Loans',
        icon: 'credit-card',
    },
    {
        label: 'Government Contribution',
        icon: 'pocket',
    },
    {
        label: 'Filing',
        isTitle: true
    },
    {
        label: 'Change Schedule',
        icon: 'calendar',
    },
    {
        label: 'Change Log',
        icon: 'clock',
    },
    {
        label: 'Leave',
        icon: 'feather',
    },
    {
        label: 'Official Business',
        icon: 'briefcase',
    },
    {
        label: 'Overtime',
        icon: 'watch',
    },
    {
        label: 'Offset',
        icon: 'sunrise',
    },
    {
        label: 'Management',
        isTitle: true
    },
    {
        label: 'Approval',
        icon: 'user-check',
    },
    {
        label: 'Schedule',
        icon: 'columns',
    },
    {
        label: 'Attendance',
        icon: 'file-text',
    },
];


/***/ }),

/***/ "qXFu":
/*!********************************************************************!*\
  !*** ./src/app/services/administration/company/company.service.ts ***!
  \********************************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");




let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "MasterSetting/";
        this.tenant = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "TenantManagement/";
    }
    dropdownList() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('dropdowntype_id', "0");
        return this.http.get(this.uri + "Dropdown_List", { params: params });
    }
    dropdownEntitlement() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('dropdowntype_id', "0");
        return this.http.get(this.uri + "Dropdown_entitlement", { params: params });
    }
    companyView() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('company_id', sessionStorage.getItem('ci'));
        params = params.append('created_by', sessionStorage.getItem('u'));
        return this.http.get(this.tenant + "company_view_sel", { params: params });
    }
    tenantUpdate(param) {
        return this.http.post(this.tenant + "CompanyIU", param);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CompanyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CompanyService);



/***/ }),

/***/ "rfhF":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/employee/employee.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "tyVc":
/*!**********************************************************!*\
  !*** ./src/app/core/feather-icon/feather-icon.module.ts ***!
  \**********************************************************/
/*! exports provided: FeahterIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeahterIconModule", function() { return FeahterIconModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feather_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feather-icon.directive */ "IYwT");




let FeahterIconModule = class FeahterIconModule {
};
FeahterIconModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_feather_icon_directive__WEBPACK_IMPORTED_MODULE_3__["FeatherIconDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        exports: [_feather_icon_directive__WEBPACK_IMPORTED_MODULE_3__["FeatherIconDirective"]]
    })
], FeahterIconModule);



/***/ }),

/***/ "u0Dx":
/*!******************************************************!*\
  !*** ./src/app/services/auth/login/login.service.ts ***!
  \******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "Auth/authenticateLogin";
    }
    authenticateUser(param) {
        return this.http.post(this.uri, param);
    }
    saveToken(req) {
        sessionStorage.setItem('token', req['token']);
        sessionStorage.setItem('u', req['id']);
        sessionStorage.setItem('cd', req['company_code']);
        sessionStorage.setItem('ci', req['company_id']);
        sessionStorage.setItem('in', req['instance_name']);
        sessionStorage.setItem('us', req['company_user_name']);
        sessionStorage.setItem('uh', req['company_user_hash']);
        sessionStorage.setItem('ai', req['access_level_id']);
    }
    getToken() {
        return sessionStorage.getItem('token');
    }
    isAuthenticated() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], LoginService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _page_administration_administration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/administration/administration.component */ "wyZF");
/* harmony import */ var _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/dashboard/dashboard.component */ "Qrbr");
/* harmony import */ var _page_employee_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/employee/employee-details/employee-details.component */ "f5Cw");
/* harmony import */ var _page_employee_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/employee/employee.component */ "izv0");
/* harmony import */ var _layout_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/base/base.component */ "VObd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/profile/profile.component */ "fl9W");









const routes = [
    { path: '', loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("default~auth-auth-module~page-administration-administration-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule) },
    // 
    { path: 'layout', component: _layout_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"],
        children: [
            {
                path: '', component: _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
            },
            {
                path: 'dashboard', component: _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
            },
            {
                path: 'administration', component: _page_administration_administration_component__WEBPACK_IMPORTED_MODULE_1__["AdministrationComponent"], loadChildren: () => Promise.all(/*! import() | page-administration-administration-module */[__webpack_require__.e("default~auth-auth-module~page-administration-administration-module"), __webpack_require__.e("default~page-administration-administration-module~sweetalert2"), __webpack_require__.e("page-administration-administration-module")]).then(__webpack_require__.bind(null, /*! ./page/administration/administration.module */ "8USl")).then(m => m.AdministrationModule)
            },
            {
                path: 'profile', component: _page_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], loadChildren: () => __webpack_require__.e(/*! import() | page-profile-profile-module */ "page-profile-profile-module").then(__webpack_require__.bind(null, /*! ./page/profile/profile.module */ "9o5d")).then(m => m.ProfileModule)
            },
            {
                path: 'employee', component: _page_employee_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"], loadChildren: () => __webpack_require__.e(/*! import() | page-employee-employee-module */ "page-employee-employee-module").then(__webpack_require__.bind(null, /*! ./page/employee/employee.module */ "/z4o")).then(m => m.EmployeeModule)
            },
            {
                path: 'employee-details/:id', component: _page_employee_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailsComponent"]
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vm3U":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"spinner-wrapper\">\n  <div class=\"spinner\">Loading...</div>\n</div>\n<div class=\"animate__animated animate__fadeInUp\" *ngIf=\"!isLoading\">\n  <nav class=\"page-breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\".\">Dashboard</a></li>\n    </ol>\n  </nav>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 grid-margin stretch-card\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p>Dashboard!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  ");

/***/ }),

/***/ "wyZF":
/*!*****************************************************************!*\
  !*** ./src/app/page/administration/administration.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_administration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./administration.component.html */ "Qw6f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdministrationComponent = class AdministrationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdministrationComponent.ctorParameters = () => [];
AdministrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-administration',
        template: _raw_loader_administration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AdministrationComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yqSI":
/*!*************************************************!*\
  !*** ./src/app/layout/base/base.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map