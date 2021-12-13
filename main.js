"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/navigation/navigation.component */ 6222);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/footer/footer.component */ 7496);




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer");
    } }, directives: [_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtaW4taGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-content/no-content.component */ 958);
/* harmony import */ var _common_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/footer/footer.module */ 8897);
/* harmony import */ var _common_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/navigation/navigation.module */ 720);
/* harmony import */ var _features_about_about_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/about/about.module */ 782);
/* harmony import */ var _features_contact_contact_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/contact/contact.module */ 981);
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/home/home.module */ 9762);
/* harmony import */ var _features_resume_resume_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/resume/resume.module */ 8260);
/* harmony import */ var _features_skills_skills_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/skills/skills.module */ 525);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);


// App Component


// Modules











const APP_PROVIDERS = [];
const APP_ROUTES = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_9__.MainComponent },
    { path: '**', component: _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_1__.NoContentComponent }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: APP_PROVIDERS, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(APP_ROUTES, {
                initialNavigation: 'enabled',
                onSameUrlNavigation: 'ignore',
                enableTracing: false,
                relativeLinkResolution: 'legacy'
            }),
            _common_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
            _common_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__.NavigationModule,
            _features_about_about_module__WEBPACK_IMPORTED_MODULE_4__.AboutModule,
            _features_contact_contact_module__WEBPACK_IMPORTED_MODULE_5__.ContactModule,
            _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule,
            _features_resume_resume_module__WEBPACK_IMPORTED_MODULE_7__.ResumeModule,
            _features_skills_skills_module__WEBPACK_IMPORTED_MODULE_8__.SkillsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _main_main_component__WEBPACK_IMPORTED_MODULE_9__.MainComponent,
        _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_1__.NoContentComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _common_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _common_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__.NavigationModule,
        _features_about_about_module__WEBPACK_IMPORTED_MODULE_4__.AboutModule,
        _features_contact_contact_module__WEBPACK_IMPORTED_MODULE_5__.ContactModule,
        _features_home_home_module__WEBPACK_IMPORTED_MODULE_6__.HomeModule,
        _features_resume_resume_module__WEBPACK_IMPORTED_MODULE_7__.ResumeModule,
        _features_skills_skills_module__WEBPACK_IMPORTED_MODULE_8__.SkillsModule] }); })();


/***/ }),

/***/ 7496:
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 1, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.currentYear, " MichaelOuellette.com");
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  background: #eee;\n  bottom: 0;\n  color: #333;\n  display: block;\n  padding: 1.5rem 0;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJmb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX3BhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSxnR0FBQTtBQ0ZSO0VBQ0MsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0NEVztFREVYLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUQ7QUFFQztFQUNDLFNBQUE7RUFDQSxVQUFBO0FBQUYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGUgU2hlZXQgSW1wb3J0c1xuQGltcG9ydCBcInNyYy9zdHlsZXMvcGFsZXR0ZVwiO1xuXG4vLyBGb250IEltcG9ydHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gRm9udHNcbiRwcmltYXJ5LWZvbnQ6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kZGVza3RvcC14bGFyZ2U6ICdtaW4td2lkdGg6IDIwMDBweCc7XG4kYXBwLW1heDogJ21pbi13aWR0aDogMTY4MHB4JztcbiRkZXNrdG9wLWxhcmdlOiAnbWluLXdpZHRoOiAxMjgwcHgnO1xuJGRlc2t0b3AtMTIwMDogJ21pbi13aWR0aDogMTIwMHB4JztcbiRkZXNrdG9wLW1kOiAnbWluLXdpZHRoOjk5MnB4JztcbiRkZXNrdG9wOiAnbWluLXdpZHRoOiA3NjdweCc7XG4kbW9iaWxlOiAnbWF4LXdpZHRoOiA3NjZweCc7XG4keHM6ICdtYXgtd2lkdGg6IDU3NnB4JztcblxuLy8gVHJhbnNpdGlvbnNcbiRwcmltYXJ5LXRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcblxuLy8gTWFpbiBDb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuJHByaW1hcnktY29sb3I6ICRyZWQ7XG4kcHJpbWFyeS1mb250LWNvbG9yOiAkZ3JleS1kYXJrO1xuXG4vLyBOYXZpZ2F0aW9uIENvbG9yc1xuJG5hdi1jb2xvci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRuYXYtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRuYXYtY29sb3ItZm9udC1ob3ZlcjogJGdyZXktbGlnaHQ7XG4kbmF2LXNpemUtZm9udDogMS4yNXJlbTtcblxuLy8gU2VjdGlvbiBWYXJpYWJsZXNcbiRzZWN0aW9uLWJvcmRlcjogMnB4IHNvbGlkICRncmV5LWxpZ2h0O1xuJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbDogM3JlbTtcbiRzZWN0aW9uLXBhZGRpbmc6ICRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgMDtcbiRzZWN0aW9uLXdpZHRoOiA2MCU7XG5cbi8vIE5vdCBGb3VuZFxuJG5vdC1jb2xvci1saW5rOiAkZ3JleS1kYXJrO1xuJG5vdC1jb2xvci1saW5rLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gSG9tZSBDb2xvcnNcbiRob21lLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MjtcbiRob21lLWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kaG9tZS1jb2xvci1pY29uLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gQWJvdXQgQ29sb3JzXG4kcGljdHVyZS1ib3JkZXI6IDFweCBzb2xpZCAkZ3JleS1saWdodDI7XG4kcGljdHVyZS1yYWRpdXM6IDZweDtcblxuLy8gUmVzdW1lXG4kcmVzdW1lLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4kcmVzdW1lLWNvbG9yLWZvbnQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuJHJlc3VtZS1jb2xvci1yb3cxOiAkZ3JleS1saWdodDI7XG4kcmVzdW1lLWNvbG9yLXJvdzI6ICRncmV5LWxpZ2h0O1xuJHJlc3VtZS1jb2xvci1yb3czOiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MTogMS4ycmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cxOiA3MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cyOiAxLjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzI6IDQwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzM6MXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MzogNTAwO1xuXG4vLyBDb250YWN0IFNlY3Rpb25cbiRjb250YWN0LWNvbG9yLWljb246ICRvZmYtd2hpdGU7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kLWhvdmVyOiAkZ3JleS1kYXJrO1xuXG4vLyBGb290ZXIgVmFyaWFibGVzXG4kZm9vdGVyLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MztcbiRmb290ZXItY29sb3ItZm9udDogJGdyZXktZGFyaztcbiIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG5cdGJhY2tncm91bmQ6ICRmb290ZXItY29sb3ItYmFja2dyb3VuZDtcblx0Ym90dG9tOiAwO1xuXHRjb2xvcjogJGZvb3Rlci1jb2xvci1mb250O1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMS41cmVtIDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblxuXHRwIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0fVxufVxuIiwiLy8gUGFsZXR0ZVxuJGdyZXktbGlnaHQ6ICNhNWE1YTU7XG4kZ3JleS1saWdodDI6ICM2MDZjNzQ7XG4kZ3JleS1saWdodDM6ICNlZWU7XG4kZ3JleS1kYXJrOiAjMzMzO1xuJG9mZi13aGl0ZTogI2Y5ZjlmOTtcbiRyZWQ6ICM4YzAwMDA7XG4kd2hpdGU6ICNmZmZmZmU7XG4iXX0= */"] });


/***/ }),

/***/ 8897:
/*!************************************************!*\
  !*** ./src/app/common/footer/footer.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 7496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 6222:
/*!***********************************************************!*\
  !*** ./src/app/common/navigation/navigation.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function NavigationComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
class NavigationComponent {
    constructor() {
        this.NAVIGATION = [
            {
                title: 'About',
                link: '#about'
            },
            {
                title: 'Tech',
                link: '#tech'
            },
            {
                title: 'Résumé',
                link: '#resume'
            },
            {
                title: 'Contact',
                link: '#contact'
            }
        ];
    }
    ngOnInit() { }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 1, vars: 1, consts: [[3, "href", 4, "ngFor", "ngForOf"], [3, "href"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavigationComponent_a_0_Template, 2, 2, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.NAVIGATION);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  background: #8c0000;\n  box-shadow: 1px 1px 4px #333;\n  color: #f9f9f9;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 0;\n  padding: 1.5rem 0 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 5;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%] {\n    justify-content: space-around;\n  }\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #8c0000;\n  color: #f9f9f9;\n  display: inline-block;\n  font-size: 1.25rem;\n  margin: 0 2rem;\n  padding: 0 0 1.5rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.25s linear;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 3.6vw;\n    margin: auto;\n  }\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid #a5a5a5;\n  color: #a5a5a5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL19wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsZ0dBQUE7QUNBUjtFQUNDLG1CQ0NLO0VEQUwsNEJBQUE7RUFDQSxjQ0ZXO0VER1gsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRkQ7QUFJQztFQWREO0lBZUUsNkJBQUE7RUFEQTtBQUNGO0FBR0M7RUFDQyxnQ0FBQTtFQUNBLGNDbkJVO0VEb0JWLHFCQUFBO0VBQ0Esa0JES2M7RUNKZCxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JEWG1CO0FDVXJCO0FBR0U7RUFYRDtJQVlFLGdCQUFBO0lBQ0EsWUFBQTtFQUFEO0FBQ0Y7QUFFRTtFQUNDLGdDQUFBO0VBQ0EsY0N2Q1U7QUR1Q2IiLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlIFNoZWV0IEltcG9ydHNcbkBpbXBvcnQgXCJzcmMvc3R5bGVzL3BhbGV0dGVcIjtcblxuLy8gRm9udCBJbXBvcnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIEZvbnRzXG4kcHJpbWFyeS1mb250OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcblxuLy8gTWVkaWEgUXVlcmllc1xuJGRlc2t0b3AteGxhcmdlOiAnbWluLXdpZHRoOiAyMDAwcHgnO1xuJGFwcC1tYXg6ICdtaW4td2lkdGg6IDE2ODBweCc7XG4kZGVza3RvcC1sYXJnZTogJ21pbi13aWR0aDogMTI4MHB4JztcbiRkZXNrdG9wLTEyMDA6ICdtaW4td2lkdGg6IDEyMDBweCc7XG4kZGVza3RvcC1tZDogJ21pbi13aWR0aDo5OTJweCc7XG4kZGVza3RvcDogJ21pbi13aWR0aDogNzY3cHgnO1xuJG1vYmlsZTogJ21heC13aWR0aDogNzY2cHgnO1xuJHhzOiAnbWF4LXdpZHRoOiA1NzZweCc7XG5cbi8vIFRyYW5zaXRpb25zXG4kcHJpbWFyeS10cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XG5cbi8vIE1haW4gQ29sb3JzXG4kYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcbiRwcmltYXJ5LWNvbG9yOiAkcmVkO1xuJHByaW1hcnktZm9udC1jb2xvcjogJGdyZXktZGFyaztcblxuLy8gTmF2aWdhdGlvbiBDb2xvcnNcbiRuYXYtY29sb3ItYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kbmF2LWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kbmF2LWNvbG9yLWZvbnQtaG92ZXI6ICRncmV5LWxpZ2h0O1xuJG5hdi1zaXplLWZvbnQ6IDEuMjVyZW07XG5cbi8vIFNlY3Rpb24gVmFyaWFibGVzXG4kc2VjdGlvbi1ib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1saWdodDtcbiRzZWN0aW9uLXBhZGRpbmctdmVydGljYWw6IDNyZW07XG4kc2VjdGlvbi1wYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIDA7XG4kc2VjdGlvbi13aWR0aDogNjAlO1xuXG4vLyBOb3QgRm91bmRcbiRub3QtY29sb3ItbGluazogJGdyZXktZGFyaztcbiRub3QtY29sb3ItbGluay1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEhvbWUgQ29sb3JzXG4kaG9tZS1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDI7XG4kaG9tZS1jb2xvci1mb250OiAkb2ZmLXdoaXRlO1xuJGhvbWUtY29sb3ItaWNvbi1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEFib3V0IENvbG9yc1xuJHBpY3R1cmUtYm9yZGVyOiAxcHggc29saWQgJGdyZXktbGlnaHQyO1xuJHBpY3R1cmUtcmFkaXVzOiA2cHg7XG5cbi8vIFJlc3VtZVxuJHJlc3VtZS1jb2xvci1mb250OiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1jb2xvci1mb250LWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcbiRyZXN1bWUtY29sb3Itcm93MTogJGdyZXktbGlnaHQyO1xuJHJlc3VtZS1jb2xvci1yb3cyOiAkZ3JleS1saWdodDtcbiRyZXN1bWUtY29sb3Itcm93MzogJGdyZXktZGFyaztcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzE6IDEuMnJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MTogNzAwO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MjogMS4xcmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cyOiA0MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3czOjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzM6IDUwMDtcblxuLy8gQ29udGFjdCBTZWN0aW9uXG4kY29udGFjdC1jb2xvci1pY29uOiAkb2ZmLXdoaXRlO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZC1ob3ZlcjogJGdyZXktZGFyaztcblxuLy8gRm9vdGVyIFZhcmlhYmxlc1xuJGZvb3Rlci1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDM7XG4kZm9vdGVyLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuJG5hdmlnYXRpb24tcGFkZGluZzogMS41cmVtO1xuXG46aG9zdCB7XG5cdGJhY2tncm91bmQ6ICRuYXYtY29sb3ItYmFja2dyb3VuZDtcblx0Ym94LXNoYWRvdzogMXB4IDFweCA0cHggJGdyZXktZGFyaztcblx0Y29sb3I6ICRuYXYtY29sb3ItZm9udDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogJG5hdmlnYXRpb24tcGFkZGluZyAwIDA7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdHotaW5kZXg6IDU7XG5cblx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdH1cblxuXHRhIHtcblx0XHRib3JkZXItYm90dG9tOiAzcHggc29saWQgJG5hdi1jb2xvci1iYWNrZ3JvdW5kO1xuXHRcdGNvbG9yOiAkbmF2LWNvbG9yLWZvbnQ7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogJG5hdi1zaXplLWZvbnQ7XG5cdFx0bWFyZ2luOiAwIDJyZW07XG5cdFx0cGFkZGluZzogMCAwICRuYXZpZ2F0aW9uLXBhZGRpbmc7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdHRleHQtdHJhbnNmb3JtOiAgdXBwZXJjYXNlO1xuXHRcdHRyYW5zaXRpb246ICRwcmltYXJ5LXRyYW5zaXRpb247XG5cblx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdGZvbnQtc2l6ZTogMy42dnc7XG5cdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0fVxuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiAzcHggc29saWQgJG5hdi1jb2xvci1mb250LWhvdmVyO1xuXHRcdFx0Y29sb3I6ICRuYXYtY29sb3ItZm9udC1ob3Zlcjtcblx0XHR9XG5cdH1cbn1cbiIsIi8vIFBhbGV0dGVcbiRncmV5LWxpZ2h0OiAjYTVhNWE1O1xuJGdyZXktbGlnaHQyOiAjNjA2Yzc0O1xuJGdyZXktbGlnaHQzOiAjZWVlO1xuJGdyZXktZGFyazogIzMzMztcbiRvZmYtd2hpdGU6ICNmOWY5Zjk7XG4kcmVkOiAjOGMwMDAwO1xuJHdoaXRlOiAjZmZmZmZlO1xuIl19 */"] });


/***/ }),

/***/ 720:
/*!********************************************************!*\
  !*** ./src/app/common/navigation/navigation.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* binding */ NavigationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component */ 6222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Components


class NavigationModule {
}
NavigationModule.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); };
NavigationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent] }); })();


/***/ }),

/***/ 3841:
/*!***************************************************!*\
  !*** ./src/app/features/about/about.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 10, vars: 0, consts: [[1, "about"], [1, "about__left"], ["src", "/assets/profile-michael-ouellette.webp", "alt", "Michael Ouellette"], [1, "about__right"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I\u2019m Michael Ouellette and I\u2019m a software engineer and entrepreneur living in Pittsburgh, PA. My web development knowledge has been mainly self-taught and strengthened with my 17+ years of professional and freelance experience, personal projects, and college courses. I enjoy the unique challenge of web application/site development and UI design work balanced between different screen sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I\u2019m always interested in new and challenging web application projects, so if you can find any need for my services I would be more than happy to talk to you. You can reach me through the contact form found on the contact page or through any social web applications listed on the header of this site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 3rem 0;\n  padding-top: 0;\n  position: relative;\n  width: 60%;\n  padding-top: 3rem;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%] {\n    padding: 1.0909090909rem 0;\n    width: 95%;\n  }\n}\n[_nghost-%COMP%]   .about[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   .about[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .about__left[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: inline-block;\n  flex: 1;\n  padding-right: 2rem;\n  position: relative;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   .about__left[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n[_nghost-%COMP%]   .about__left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 1px solid #606c74;\n  border-radius: 6px;\n  display: block;\n  max-width: 100%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   .about__left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 60%;\n  }\n}\n[_nghost-%COMP%]   .about__right[_ngcontent-%COMP%] {\n  align-self: center;\n  display: inline-block;\n  flex: 3;\n  position: relative;\n}\n[_nghost-%COMP%]::after {\n  border-bottom: 2px solid #a5a5a5;\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  padding: 1.5rem 0;\n  width: 30%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]::after {\n    padding: 1.0909090909rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJhYm91dC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsZ0dBQUE7QUNEUjtFQ0ZDLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUZpQ2lCO0VFaENqQixjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVRitCZTtFQ2hDZixpQkQ4QjBCO0FDMUIzQjtBQ0RDO0VETEQ7SUNNRSwwQkFBQTtJQUNBLFVBQUE7RURJQTtBQUNGO0FBUkM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFVRjtBQVJFO0VBSkQ7SUFLRSxzQkFBQTtFQVdEO0FBQ0Y7QUFURTtFQUNDLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVdIO0FBVEc7RUFQRDtJQVFFLFVBQUE7RUFZRjtBQUNGO0FBVkc7RUFDQyx5QkRzQmE7RUNyQmIsa0JEc0JhO0VDckJiLGNBQUE7RUFDQSxlQUFBO0FBWUo7QUFWSTtFQU5EO0lBT0UsY0FBQTtJQUNBLGNBQUE7RUFhSDtBQUNGO0FBVEU7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBV0g7QUN0Q0U7RUFDQyxnQ0ZpQmM7RUVoQmQsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FEeUNIO0FDdkNHO0VBUkQ7SUFTRSwwQkFBQTtFRDBDRjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGUgU2hlZXQgSW1wb3J0c1xuQGltcG9ydCBcInNyYy9zdHlsZXMvcGFsZXR0ZVwiO1xuXG4vLyBGb250IEltcG9ydHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gRm9udHNcbiRwcmltYXJ5LWZvbnQ6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kZGVza3RvcC14bGFyZ2U6ICdtaW4td2lkdGg6IDIwMDBweCc7XG4kYXBwLW1heDogJ21pbi13aWR0aDogMTY4MHB4JztcbiRkZXNrdG9wLWxhcmdlOiAnbWluLXdpZHRoOiAxMjgwcHgnO1xuJGRlc2t0b3AtMTIwMDogJ21pbi13aWR0aDogMTIwMHB4JztcbiRkZXNrdG9wLW1kOiAnbWluLXdpZHRoOjk5MnB4JztcbiRkZXNrdG9wOiAnbWluLXdpZHRoOiA3NjdweCc7XG4kbW9iaWxlOiAnbWF4LXdpZHRoOiA3NjZweCc7XG4keHM6ICdtYXgtd2lkdGg6IDU3NnB4JztcblxuLy8gVHJhbnNpdGlvbnNcbiRwcmltYXJ5LXRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcblxuLy8gTWFpbiBDb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuJHByaW1hcnktY29sb3I6ICRyZWQ7XG4kcHJpbWFyeS1mb250LWNvbG9yOiAkZ3JleS1kYXJrO1xuXG4vLyBOYXZpZ2F0aW9uIENvbG9yc1xuJG5hdi1jb2xvci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRuYXYtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRuYXYtY29sb3ItZm9udC1ob3ZlcjogJGdyZXktbGlnaHQ7XG4kbmF2LXNpemUtZm9udDogMS4yNXJlbTtcblxuLy8gU2VjdGlvbiBWYXJpYWJsZXNcbiRzZWN0aW9uLWJvcmRlcjogMnB4IHNvbGlkICRncmV5LWxpZ2h0O1xuJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbDogM3JlbTtcbiRzZWN0aW9uLXBhZGRpbmc6ICRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgMDtcbiRzZWN0aW9uLXdpZHRoOiA2MCU7XG5cbi8vIE5vdCBGb3VuZFxuJG5vdC1jb2xvci1saW5rOiAkZ3JleS1kYXJrO1xuJG5vdC1jb2xvci1saW5rLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gSG9tZSBDb2xvcnNcbiRob21lLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MjtcbiRob21lLWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kaG9tZS1jb2xvci1pY29uLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gQWJvdXQgQ29sb3JzXG4kcGljdHVyZS1ib3JkZXI6IDFweCBzb2xpZCAkZ3JleS1saWdodDI7XG4kcGljdHVyZS1yYWRpdXM6IDZweDtcblxuLy8gUmVzdW1lXG4kcmVzdW1lLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4kcmVzdW1lLWNvbG9yLWZvbnQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuJHJlc3VtZS1jb2xvci1yb3cxOiAkZ3JleS1saWdodDI7XG4kcmVzdW1lLWNvbG9yLXJvdzI6ICRncmV5LWxpZ2h0O1xuJHJlc3VtZS1jb2xvci1yb3czOiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MTogMS4ycmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cxOiA3MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cyOiAxLjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzI6IDQwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzM6MXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MzogNTAwO1xuXG4vLyBDb250YWN0IFNlY3Rpb25cbiRjb250YWN0LWNvbG9yLWljb246ICRvZmYtd2hpdGU7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kLWhvdmVyOiAkZ3JleS1kYXJrO1xuXG4vLyBGb290ZXIgVmFyaWFibGVzXG4kZm9vdGVyLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MztcbiRmb290ZXItY29sb3ItZm9udDogJGdyZXktZGFyaztcbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvbWl4aW5zJztcblxuOmhvc3Qge1xuXHRAaW5jbHVkZSBzZWN0aW9uLXN0eWxlcztcblx0cGFkZGluZy10b3A6ICRzZWN0aW9uLXBhZGRpbmctdmVydGljYWw7XG5cblx0LmFib3V0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cblx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0fVxuXG5cdFx0Jl9fbGVmdCB7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDJyZW07XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRib3JkZXI6ICRwaWN0dXJlLWJvcmRlcjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogJHBpY3R1cmUtcmFkaXVzO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdG1heC13aWR0aDogNjAlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Jl9fcmlnaHQge1xuXHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0ZmxleDogMztcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR9XG5cdH1cbn1cblxuQGluY2x1ZGUgc2VjdGlvbi1hZnRlcjtcbiIsIkBtaXhpbiBzZWN0aW9uLXN0eWxlcyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogJHNlY3Rpb24tcGFkZGluZztcblx0cGFkZGluZy10b3A6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICRzZWN0aW9uLXdpZHRoO1xuXG5cdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdHBhZGRpbmc6ICBjYWxjKCRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgLyAyLjc1KSAwO1xuXHRcdHdpZHRoOiA5NSU7XG5cdH1cbn1cblxuQG1peGluIHNlY3Rpb24tYWZ0ZXIge1xuXHQ6aG9zdCB7XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogJHNlY3Rpb24tYm9yZGVyO1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cGFkZGluZzogMS41cmVtIDA7XG5cdFx0XHR3aWR0aDogMzAlO1xuXG5cdFx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdFx0cGFkZGluZzogIGNhbGMoJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAvIDIuNzUpIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */"] });


/***/ }),

/***/ 782:
/*!************************************************!*\
  !*** ./src/app/features/about/about.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 3841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Components


class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent] }); })();


/***/ }),

/***/ 2120:
/*!*******************************************************!*\
  !*** ./src/app/features/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 9, vars: 0, consts: [[1, "contact"], ["href", "mailto:michaelsouellette@gmail.com", "title", "Contact Michael Ouellette via E-Mail", "rel", "noopener", 1, "contact__icon"], [1, "mdi", "mdi-email"], ["target", "_blank", "href", "https://www.linkedin.com/in/michaelouellette/", "title", "Contact Michael Ouellette via LinkedIn", "rel", "noopener", 1, "contact__icon"], [1, "mdi", "mdi-linkedin"], ["href", "tel:412-467-6016", "title", "Contact Michael Ouellette via Phone", "rel", "noopener", 1, "contact__icon"], [1, "mdi", "mdi-phone"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 3rem 0;\n  padding-top: 0;\n  position: relative;\n  width: 60%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%] {\n    padding: 1.0909090909rem 0;\n    width: 95%;\n  }\n}\n[_nghost-%COMP%]   .contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .contact__icon[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #8c0000;\n  border-radius: 50%;\n  color: #f9f9f9;\n  display: flex;\n  font-size: 3rem;\n  height: 5rem;\n  justify-content: center;\n  margin: 0 2rem;\n  transition: 0.25s linear;\n  width: 5rem;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   .contact__icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    height: 70px;\n    width: 70px;\n  }\n}\n[_nghost-%COMP%]   .contact__icon[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRFI7RUNGQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVGaUNpQjtFRWhDakIsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUYrQmU7QUM3QmhCO0FDQUM7RURMRDtJQ01FLDBCQUFBO0lBQ0EsVUFBQTtFREdBO0FBQ0Y7QUFSQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFVRjtBQVJFO0VBRUMsbUJBQUE7RUFDQSxtQkVURztFRlVILGtCQUFBO0VBQ0EsY0VaUztFRmFULGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFQTztFQVFQLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCREhrQjtFQ0lsQixXQVhPO0FBb0JWO0FBUEc7RUFkRDtJQWdCRSxpQkFBQTtJQUNBLFlBRk87SUFHUCxXQUhPO0VBWVQ7QUFDRjtBQVBHO0VBQ0MsZ0JFOUJRO0FGdUNaIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdHlsZSBTaGVldCBJbXBvcnRzXG5AaW1wb3J0IFwic3JjL3N0eWxlcy9wYWxldHRlXCI7XG5cbi8vIEZvbnQgSW1wb3J0c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyBGb250c1xuJHByaW1hcnktZm9udDogJ1VidW50dScsIHNhbnMtc2VyaWY7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRkZXNrdG9wLXhsYXJnZTogJ21pbi13aWR0aDogMjAwMHB4JztcbiRhcHAtbWF4OiAnbWluLXdpZHRoOiAxNjgwcHgnO1xuJGRlc2t0b3AtbGFyZ2U6ICdtaW4td2lkdGg6IDEyODBweCc7XG4kZGVza3RvcC0xMjAwOiAnbWluLXdpZHRoOiAxMjAwcHgnO1xuJGRlc2t0b3AtbWQ6ICdtaW4td2lkdGg6OTkycHgnO1xuJGRlc2t0b3A6ICdtaW4td2lkdGg6IDc2N3B4JztcbiRtb2JpbGU6ICdtYXgtd2lkdGg6IDc2NnB4JztcbiR4czogJ21heC13aWR0aDogNTc2cHgnO1xuXG4vLyBUcmFuc2l0aW9uc1xuJHByaW1hcnktdHJhbnNpdGlvbjogMC4yNXMgbGluZWFyO1xuXG4vLyBNYWluIENvbG9yc1xuJGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XG4kcHJpbWFyeS1jb2xvcjogJHJlZDtcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICRncmV5LWRhcms7XG5cbi8vIE5hdmlnYXRpb24gQ29sb3JzXG4kbmF2LWNvbG9yLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJG5hdi1jb2xvci1mb250OiAkb2ZmLXdoaXRlO1xuJG5hdi1jb2xvci1mb250LWhvdmVyOiAkZ3JleS1saWdodDtcbiRuYXYtc2l6ZS1mb250OiAxLjI1cmVtO1xuXG4vLyBTZWN0aW9uIFZhcmlhYmxlc1xuJHNlY3Rpb24tYm9yZGVyOiAycHggc29saWQgJGdyZXktbGlnaHQ7XG4kc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsOiAzcmVtO1xuJHNlY3Rpb24tcGFkZGluZzogJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAwO1xuJHNlY3Rpb24td2lkdGg6IDYwJTtcblxuLy8gTm90IEZvdW5kXG4kbm90LWNvbG9yLWxpbms6ICRncmV5LWRhcms7XG4kbm90LWNvbG9yLWxpbmstaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLyBIb21lIENvbG9yc1xuJGhvbWUtY29sb3ItYmFja2dyb3VuZDogJGdyZXktbGlnaHQyO1xuJGhvbWUtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRob21lLWNvbG9yLWljb24taG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLyBBYm91dCBDb2xvcnNcbiRwaWN0dXJlLWJvcmRlcjogMXB4IHNvbGlkICRncmV5LWxpZ2h0MjtcbiRwaWN0dXJlLXJhZGl1czogNnB4O1xuXG4vLyBSZXN1bWVcbiRyZXN1bWUtY29sb3ItZm9udDogJGdyZXktZGFyaztcbiRyZXN1bWUtY29sb3ItZm9udC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG4kcmVzdW1lLWNvbG9yLXJvdzE6ICRncmV5LWxpZ2h0MjtcbiRyZXN1bWUtY29sb3Itcm93MjogJGdyZXktbGlnaHQ7XG4kcmVzdW1lLWNvbG9yLXJvdzM6ICRncmV5LWRhcms7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cxOiAxLjJyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzE6IDcwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzI6IDEuMXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MjogNDAwO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MzoxcmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3czOiA1MDA7XG5cbi8vIENvbnRhY3QgU2VjdGlvblxuJGNvbnRhY3QtY29sb3ItaWNvbjogJG9mZi13aGl0ZTtcbiRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQtaG92ZXI6ICRncmV5LWRhcms7XG5cbi8vIEZvb3RlciBWYXJpYWJsZXNcbiRmb290ZXItY29sb3ItYmFja2dyb3VuZDogJGdyZXktbGlnaHQzO1xuJGZvb3Rlci1jb2xvci1mb250OiAkZ3JleS1kYXJrO1xuIiwiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnc3JjL3N0eWxlcy9taXhpbnMnO1xuXG46aG9zdCB7XG5cdEBpbmNsdWRlIHNlY3Rpb24tc3R5bGVzO1xuXG5cdC5jb250YWN0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1ib3R0b206IGNhbGMoJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAvIDIpO1xuXG5cdFx0Jl9faWNvbiB7XG5cdFx0XHQkc2l6ZTogNXJlbTtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kOiAkY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQ7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogJGNvbnRhY3QtY29sb3ItaWNvbjtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmb250LXNpemU6IDNyZW07XG5cdFx0XHRoZWlnaHQ6ICRzaXplO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRtYXJnaW46IDAgMnJlbTtcblx0XHRcdHRyYW5zaXRpb246ICRwcmltYXJ5LXRyYW5zaXRpb247XG5cdFx0XHR3aWR0aDogJHNpemU7XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHQkc2l6ZTogNzBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAyLjVyZW07XG5cdFx0XHRcdGhlaWdodDogJHNpemU7XG5cdFx0XHRcdHdpZHRoOiAkc2l6ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZC1ob3Zlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIkBtaXhpbiBzZWN0aW9uLXN0eWxlcyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogJHNlY3Rpb24tcGFkZGluZztcblx0cGFkZGluZy10b3A6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6ICRzZWN0aW9uLXdpZHRoO1xuXG5cdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdHBhZGRpbmc6ICBjYWxjKCRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgLyAyLjc1KSAwO1xuXHRcdHdpZHRoOiA5NSU7XG5cdH1cbn1cblxuQG1peGluIHNlY3Rpb24tYWZ0ZXIge1xuXHQ6aG9zdCB7XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogJHNlY3Rpb24tYm9yZGVyO1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0cGFkZGluZzogMS41cmVtIDA7XG5cdFx0XHR3aWR0aDogMzAlO1xuXG5cdFx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdFx0cGFkZGluZzogIGNhbGMoJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAvIDIuNzUpIDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIvLyBQYWxldHRlXG4kZ3JleS1saWdodDogI2E1YTVhNTtcbiRncmV5LWxpZ2h0MjogIzYwNmM3NDtcbiRncmV5LWxpZ2h0MzogI2VlZTtcbiRncmV5LWRhcms6ICMzMzM7XG4kb2ZmLXdoaXRlOiAjZjlmOWY5O1xuJHJlZDogIzhjMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZTtcbiJdfQ== */"] });


/***/ }),

/***/ 981:
/*!****************************************************!*\
  !*** ./src/app/features/contact/contact.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 2120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Components


class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent] }); })();


/***/ }),

/***/ 8463:
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function HomeComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mdi mdi-", item_r1.icon, "");
} }
class HomeComponent {
    constructor() {
        this.socialIcons = [
            {
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/michaelouellette/',
                icon: 'linkedin'
            },
            {
                title: 'GitHub',
                link: 'https://github.com/michaelsouellette',
                icon: 'github'
            },
            {
                title: 'Instagram',
                link: 'https://www.instagram.com/michaelsouellette/',
                icon: 'instagram'
            },
            {
                title: 'Twitter',
                link: 'https://twitter.com/mikesouellette',
                icon: 'twitter'
            }
        ];
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 1, consts: [[1, "home-component"], ["width", "300", "alt", "Michael Ouellette", "src", "assets/logo.png"], [1, "socialIcons"], ["class", "socialIcons__icon", "target", "_blank", "rel", "noopener", 3, "href", "title", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 1, "socialIcons__icon", 3, "href", "title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Michael Ouellette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Software Engineer \u2013 Full stack web applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_a_7_Template, 2, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialIcons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  background-color: #606c74;\n  background-image: url(\"/assets/clement-h-544786-unsplash.webp\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #f9f9f9;\n  display: block;\n  height: 100vh;\n  position: relative;\n  width: 100%;\n}\n.home-component[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  text-align: center;\n  width: 100%;\n}\n@media (max-width: 766px) {\n  .home-component[_ngcontent-%COMP%] {\n    padding-bottom: 3rem;\n  }\n}\n@media (max-width: 766px) {\n  .home-component[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 12rem;\n  }\n}\n.home-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 300;\n  text-transform: uppercase;\n  letter-spacing: 8px;\n}\n.home-component[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .home-component[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 5px #333;\n}\n.home-component[_ngcontent-%COMP%]   .socialIcons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n}\n.home-component[_ngcontent-%COMP%]   .socialIcons__icon[_ngcontent-%COMP%] {\n  color: #f9f9f9;\n  display: inline-block;\n  font-size: 2rem;\n  margin: 0 0.5rem;\n  transition: 0.25s linear;\n}\n.home-component[_ngcontent-%COMP%]   .socialIcons__icon[_ngcontent-%COMP%]:hover {\n  color: #8c0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJob21lLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL19wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsZ0dBQUE7QUNGUjtFQUNDLHlCQ0RhO0VERWIsK0RBQUE7RUFDQSwyQkFBQTtFQUNHLDRCQUFBO0VBQ0gsc0JBQUE7RUFDQSxjQ0hXO0VESVgsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRDtBQUdBO0VBRUMsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUREO0FBR0M7RUFORDtJQU9FLG9CQU5jO0VBTWQ7QUFDRjtBQUdFO0VBREQ7SUFFRSxZQUFBO0VBQUQ7QUFDRjtBQUdDO0VBQ0MsZ0JBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBREw7QUFJQzs7RUFFQyw2QkFBQTtBQUZGO0FBS0M7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNDLGNDNUNTO0VENkNULHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JEakNrQjtBQzhCckI7QUFLRztFQUNDLGNDbERFO0FEK0NOIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdHlsZSBTaGVldCBJbXBvcnRzXG5AaW1wb3J0IFwic3JjL3N0eWxlcy9wYWxldHRlXCI7XG5cbi8vIEZvbnQgSW1wb3J0c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4vLyBGb250c1xuJHByaW1hcnktZm9udDogJ1VidW50dScsIHNhbnMtc2VyaWY7XG5cbi8vIE1lZGlhIFF1ZXJpZXNcbiRkZXNrdG9wLXhsYXJnZTogJ21pbi13aWR0aDogMjAwMHB4JztcbiRhcHAtbWF4OiAnbWluLXdpZHRoOiAxNjgwcHgnO1xuJGRlc2t0b3AtbGFyZ2U6ICdtaW4td2lkdGg6IDEyODBweCc7XG4kZGVza3RvcC0xMjAwOiAnbWluLXdpZHRoOiAxMjAwcHgnO1xuJGRlc2t0b3AtbWQ6ICdtaW4td2lkdGg6OTkycHgnO1xuJGRlc2t0b3A6ICdtaW4td2lkdGg6IDc2N3B4JztcbiRtb2JpbGU6ICdtYXgtd2lkdGg6IDc2NnB4JztcbiR4czogJ21heC13aWR0aDogNTc2cHgnO1xuXG4vLyBUcmFuc2l0aW9uc1xuJHByaW1hcnktdHJhbnNpdGlvbjogMC4yNXMgbGluZWFyO1xuXG4vLyBNYWluIENvbG9yc1xuJGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XG4kcHJpbWFyeS1jb2xvcjogJHJlZDtcbiRwcmltYXJ5LWZvbnQtY29sb3I6ICRncmV5LWRhcms7XG5cbi8vIE5hdmlnYXRpb24gQ29sb3JzXG4kbmF2LWNvbG9yLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJG5hdi1jb2xvci1mb250OiAkb2ZmLXdoaXRlO1xuJG5hdi1jb2xvci1mb250LWhvdmVyOiAkZ3JleS1saWdodDtcbiRuYXYtc2l6ZS1mb250OiAxLjI1cmVtO1xuXG4vLyBTZWN0aW9uIFZhcmlhYmxlc1xuJHNlY3Rpb24tYm9yZGVyOiAycHggc29saWQgJGdyZXktbGlnaHQ7XG4kc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsOiAzcmVtO1xuJHNlY3Rpb24tcGFkZGluZzogJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAwO1xuJHNlY3Rpb24td2lkdGg6IDYwJTtcblxuLy8gTm90IEZvdW5kXG4kbm90LWNvbG9yLWxpbms6ICRncmV5LWRhcms7XG4kbm90LWNvbG9yLWxpbmstaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLyBIb21lIENvbG9yc1xuJGhvbWUtY29sb3ItYmFja2dyb3VuZDogJGdyZXktbGlnaHQyO1xuJGhvbWUtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRob21lLWNvbG9yLWljb24taG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuXG4vLyBBYm91dCBDb2xvcnNcbiRwaWN0dXJlLWJvcmRlcjogMXB4IHNvbGlkICRncmV5LWxpZ2h0MjtcbiRwaWN0dXJlLXJhZGl1czogNnB4O1xuXG4vLyBSZXN1bWVcbiRyZXN1bWUtY29sb3ItZm9udDogJGdyZXktZGFyaztcbiRyZXN1bWUtY29sb3ItZm9udC1ob3ZlcjogJHByaW1hcnktY29sb3I7XG4kcmVzdW1lLWNvbG9yLXJvdzE6ICRncmV5LWxpZ2h0MjtcbiRyZXN1bWUtY29sb3Itcm93MjogJGdyZXktbGlnaHQ7XG4kcmVzdW1lLWNvbG9yLXJvdzM6ICRncmV5LWRhcms7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cxOiAxLjJyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzE6IDcwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzI6IDEuMXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MjogNDAwO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MzoxcmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3czOiA1MDA7XG5cbi8vIENvbnRhY3QgU2VjdGlvblxuJGNvbnRhY3QtY29sb3ItaWNvbjogJG9mZi13aGl0ZTtcbiRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQtaG92ZXI6ICRncmV5LWRhcms7XG5cbi8vIEZvb3RlciBWYXJpYWJsZXNcbiRmb290ZXItY29sb3ItYmFja2dyb3VuZDogJGdyZXktbGlnaHQzO1xuJGZvb3Rlci1jb2xvci1mb250OiAkZ3JleS1kYXJrO1xuIiwiQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGhvbWUtY29sb3ItYmFja2dyb3VuZDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2NsZW1lbnQtaC01NDQ3ODYtdW5zcGxhc2gud2VicCcpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Y29sb3I6ICRob21lLWNvbG9yLWZvbnQ7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZS1jb21wb25lbnQge1xuXHQkaG9tZS1wYWRkaW5nOiAzcmVtO1xuXHRwYWRkaW5nOiAkaG9tZS1wYWRkaW5nIDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cblx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0cGFkZGluZy1ib3R0b206ICRob21lLXBhZGRpbmc7XG5cdH1cblxuXHRpbWcge1xuXHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0d2lkdGg6IDEycmVtO1xuXHRcdH1cblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXdlaWdodDogMzAwO1xuICAgIFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBcdGxldHRlci1zcGFjaW5nOiA4cHg7XG5cdH1cblxuXHRoMSxcblx0aDIge1xuXHRcdHRleHQtc2hhZG93OiAycHggMnB4IDVweCAkZ3JleS1kYXJrOztcblx0fVxuXG5cdC5zb2NpYWxJY29ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRcdCZfX2ljb24ge1xuXHRcdFx0Y29sb3I6ICRob21lLWNvbG9yLWZvbnQ7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRmb250LXNpemU6IDJyZW07XG5cdFx0XHRtYXJnaW46IDAgLjVyZW07XG5cdFx0XHR0cmFuc2l0aW9uOiAkcHJpbWFyeS10cmFuc2l0aW9uO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0Y29sb3I6ICRob21lLWNvbG9yLWljb24taG92ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIvLyBQYWxldHRlXG4kZ3JleS1saWdodDogI2E1YTVhNTtcbiRncmV5LWxpZ2h0MjogIzYwNmM3NDtcbiRncmV5LWxpZ2h0MzogI2VlZTtcbiRncmV5LWRhcms6ICMzMzM7XG4kb2ZmLXdoaXRlOiAjZjlmOWY5O1xuJHJlZDogIzhjMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZTtcbiJdfQ== */"] });


/***/ }),

/***/ 9762:
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Components


class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent] }); })();


/***/ }),

/***/ 7704:
/*!***************************************************************************!*\
  !*** ./src/app/features/resume/components/position/position.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionComponent": () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var _position_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position.model */ 1469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function PositionComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.data.companyLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.company);
} }
function PositionComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.company);
} }
function PositionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.data.position);
} }
function PositionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.data.description);
} }
class PositionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PositionComponent.ɵfac = function PositionComponent_Factory(t) { return new (t || PositionComponent)(); };
PositionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PositionComponent, selectors: [["app-position"]], inputs: { data: "data" }, decls: 11, vars: 6, consts: [[1, "row__first"], [4, "ngIf"], ["class", "row__second", 4, "ngIf"], ["class", "row__third", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "row__second"], [1, "row__third"]], template: function PositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PositionComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PositionComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PositionComponent_div_9_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PositionComponent_div_10_Template, 3, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.companyLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.companyLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  display: block;\n  padding-bottom: 2rem;\n  position: relative;\n}\n.row__first[_ngcontent-%COMP%] {\n  color: #606c74;\n  display: flex;\n  flex-direction: row;\n  font-size: 1.2rem;\n  font-weight: 700;\n  justify-content: space-between;\n  margin-bottom: 0.25rem;\n}\n@media (max-width: 766px) {\n  .row__first[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.row__first[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .row__first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n}\n.row__first[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .row__first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #606c74;\n  text-decoration: none;\n  transition: 0.25s linear;\n}\n.row__first[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .row__first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8c0000;\n}\n@media (max-width: 766px) {\n  .row__first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n.row__second[_ngcontent-%COMP%] {\n  color: #a5a5a5;\n  font-size: 1.1rem;\n  font-weight: 400;\n}\n@media (max-width: 766px) {\n  .row__second[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n  }\n}\n.row__third[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1rem;\n  font-weight: 500;\n}\n@media (max-width: 766px) {\n  .row__third[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJwb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRlI7RUFDQyxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFEO0FBSUM7RUFDQyxjQ1JZO0VEU1osYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJENkNzQjtFQzVDdEIsZ0JENkN3QjtFQzVDeEIsOEJBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFURDtJQVVFLGNBQUE7RUFBRDtBQUNGO0FBRUU7O0VBRUMsaUJEa0NxQjtFQ2pDckIsU0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQUFIO0FBRUc7O0VBQ0MsY0M1QlU7RUQ2QlYscUJBQUE7RUFDQSx3QkRaaUI7QUNhckI7QUFDSTs7RUFDQyxjQzdCQztBRCtCTjtBQUdFO0VBQ0M7SUFDQyxpQkFBQTtFQURGO0FBQ0Y7QUFLQztFQUNDLGNDL0NXO0VEZ0RYLGlCRFdzQjtFQ1Z0QixnQkRXd0I7QUNkMUI7QUFLRTtFQUxEO0lBTUUsa0JBQUE7RUFGRDtBQUNGO0FBS0M7RUFDQyxXQ3REVTtFRHVEVixlREdxQjtFQ0ZyQixnQkRHd0I7QUNOMUI7QUFLRTtFQUxEO0lBTUUsaUJBQUE7RUFGRDtBQUNGIiwiZmlsZSI6InBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGUgU2hlZXQgSW1wb3J0c1xuQGltcG9ydCBcInNyYy9zdHlsZXMvcGFsZXR0ZVwiO1xuXG4vLyBGb250IEltcG9ydHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gRm9udHNcbiRwcmltYXJ5LWZvbnQ6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kZGVza3RvcC14bGFyZ2U6ICdtaW4td2lkdGg6IDIwMDBweCc7XG4kYXBwLW1heDogJ21pbi13aWR0aDogMTY4MHB4JztcbiRkZXNrdG9wLWxhcmdlOiAnbWluLXdpZHRoOiAxMjgwcHgnO1xuJGRlc2t0b3AtMTIwMDogJ21pbi13aWR0aDogMTIwMHB4JztcbiRkZXNrdG9wLW1kOiAnbWluLXdpZHRoOjk5MnB4JztcbiRkZXNrdG9wOiAnbWluLXdpZHRoOiA3NjdweCc7XG4kbW9iaWxlOiAnbWF4LXdpZHRoOiA3NjZweCc7XG4keHM6ICdtYXgtd2lkdGg6IDU3NnB4JztcblxuLy8gVHJhbnNpdGlvbnNcbiRwcmltYXJ5LXRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcblxuLy8gTWFpbiBDb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuJHByaW1hcnktY29sb3I6ICRyZWQ7XG4kcHJpbWFyeS1mb250LWNvbG9yOiAkZ3JleS1kYXJrO1xuXG4vLyBOYXZpZ2F0aW9uIENvbG9yc1xuJG5hdi1jb2xvci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRuYXYtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRuYXYtY29sb3ItZm9udC1ob3ZlcjogJGdyZXktbGlnaHQ7XG4kbmF2LXNpemUtZm9udDogMS4yNXJlbTtcblxuLy8gU2VjdGlvbiBWYXJpYWJsZXNcbiRzZWN0aW9uLWJvcmRlcjogMnB4IHNvbGlkICRncmV5LWxpZ2h0O1xuJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbDogM3JlbTtcbiRzZWN0aW9uLXBhZGRpbmc6ICRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgMDtcbiRzZWN0aW9uLXdpZHRoOiA2MCU7XG5cbi8vIE5vdCBGb3VuZFxuJG5vdC1jb2xvci1saW5rOiAkZ3JleS1kYXJrO1xuJG5vdC1jb2xvci1saW5rLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gSG9tZSBDb2xvcnNcbiRob21lLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MjtcbiRob21lLWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kaG9tZS1jb2xvci1pY29uLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gQWJvdXQgQ29sb3JzXG4kcGljdHVyZS1ib3JkZXI6IDFweCBzb2xpZCAkZ3JleS1saWdodDI7XG4kcGljdHVyZS1yYWRpdXM6IDZweDtcblxuLy8gUmVzdW1lXG4kcmVzdW1lLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4kcmVzdW1lLWNvbG9yLWZvbnQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuJHJlc3VtZS1jb2xvci1yb3cxOiAkZ3JleS1saWdodDI7XG4kcmVzdW1lLWNvbG9yLXJvdzI6ICRncmV5LWxpZ2h0O1xuJHJlc3VtZS1jb2xvci1yb3czOiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MTogMS4ycmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cxOiA3MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cyOiAxLjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzI6IDQwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzM6MXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MzogNTAwO1xuXG4vLyBDb250YWN0IFNlY3Rpb25cbiRjb250YWN0LWNvbG9yLWljb246ICRvZmYtd2hpdGU7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kLWhvdmVyOiAkZ3JleS1kYXJrO1xuXG4vLyBGb290ZXIgVmFyaWFibGVzXG4kZm9vdGVyLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MztcbiRmb290ZXItY29sb3ItZm9udDogJGdyZXktZGFyaztcbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZy1ib3R0b206IDJyZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJvdyB7XG5cdCZfX2ZpcnN0IHtcblx0XHRjb2xvcjogJHJlc3VtZS1jb2xvci1yb3cxO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmb250LXNpemU6ICRyZXN1bWUtc2l6ZS1mb250LXJvdzE7XG5cdFx0Zm9udC13ZWlnaHQ6ICRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luLWJvdHRvbTogLjI1cmVtO1xuXG5cdFx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cblx0XHRoNSxcblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogJHJlc3VtZS1zaXplLWZvbnQtcm93MTtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuXHRcdFx0YSB7XG5cdFx0XHRcdGNvbG9yOiAkcmVzdW1lLWNvbG9yLXJvdzE7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0dHJhbnNpdGlvbjogJHByaW1hcnktdHJhbnNpdGlvbjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogJHByaW1hcnktY29sb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6ICRyZXN1bWUtc2l6ZS1mb250LXJvdzEgKiAuNzU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Jl9fc2Vjb25kIHtcblx0XHRjb2xvcjogJHJlc3VtZS1jb2xvci1yb3cyO1xuXHRcdGZvbnQtc2l6ZTogJHJlc3VtZS1zaXplLWZvbnQtcm93Mjtcblx0XHRmb250LXdlaWdodDogJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cyO1xuXG5cdFx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0XHRmb250LXNpemU6ICRyZXN1bWUtc2l6ZS1mb250LXJvdzIgKiAuODtcblx0XHR9XG5cdH1cblxuXHQmX190aGlyZCB7XG5cdFx0Y29sb3I6ICRyZXN1bWUtY29sb3Itcm93Mztcblx0XHRmb250LXNpemU6ICRyZXN1bWUtc2l6ZS1mb250LXJvdzM7XG5cdFx0Zm9udC13ZWlnaHQ6ICRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MztcblxuXHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0Zm9udC1zaXplOiAkcmVzdW1lLXNpemUtZm9udC1yb3czICogLjg7XG5cdFx0fVxuXHR9XG59XG4iLCIvLyBQYWxldHRlXG4kZ3JleS1saWdodDogI2E1YTVhNTtcbiRncmV5LWxpZ2h0MjogIzYwNmM3NDtcbiRncmV5LWxpZ2h0MzogI2VlZTtcbiRncmV5LWRhcms6ICMzMzM7XG4kb2ZmLXdoaXRlOiAjZjlmOWY5O1xuJHJlZDogIzhjMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZTtcbiJdfQ== */"] });


/***/ }),

/***/ 1469:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/position/position.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPosition": () => (/* binding */ IPosition)
/* harmony export */ });
class IPosition {
    constructor(company, startDate, endDate, description, position, companyLink) {
        this.company = company;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.position = position;
        this.companyLink = companyLink;
    }
}


/***/ }),

/***/ 8470:
/*!*********************************************************************************!*\
  !*** ./src/app/features/resume/components/resume-body/resume-body.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeBodyComponent": () => (/* binding */ ResumeBodyComponent)
/* harmony export */ });
/* harmony import */ var _resume_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.data */ 7374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../position/position.component */ 7704);





function ResumeBodyComponent_app_position_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-position", 9);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", item_r3);
} }
function ResumeBodyComponent_app_position_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-position", 9);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", item_r4);
} }
function ResumeBodyComponent_app_position_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-position", 9);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", item_r5);
} }
class ResumeBodyComponent {
    constructor(educationInfo, freelanceInfo, professionalInfo) {
        this.educationInfo = educationInfo;
        this.freelanceInfo = freelanceInfo;
        this.professionalInfo = professionalInfo;
    }
    ngOnInit() {
        this.freelanceExperience = this.freelanceInfo.getInfo();
        this.professionalExperience = this.professionalInfo.getInfo();
        this.education = this.educationInfo.getInfo();
    }
}
ResumeBodyComponent.ɵfac = function ResumeBodyComponent_Factory(t) { return new (t || ResumeBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_resume_data__WEBPACK_IMPORTED_MODULE_0__.EducationInfo), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_resume_data__WEBPACK_IMPORTED_MODULE_0__.FreelanceInfo), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_resume_data__WEBPACK_IMPORTED_MODULE_0__.ProfessionalInfo)); };
ResumeBodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResumeBodyComponent, selectors: [["app-resume-body"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            _resume_data__WEBPACK_IMPORTED_MODULE_0__.EducationInfo,
            _resume_data__WEBPACK_IMPORTED_MODULE_0__.FreelanceInfo,
            _resume_data__WEBPACK_IMPORTED_MODULE_0__.ProfessionalInfo
        ])], decls: 31, vars: 3, consts: [[1, "details"], [1, "details__lineItem"], [1, "mdi", "mdi-briefcase"], [1, "mdi", "mdi-email"], ["href", "mailto:michaelsouellette@gmail.com", "rel", "noopener"], [1, "mdi", "mdi-web"], ["href", "/"], [1, "mdi", "mdi-home"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function ResumeBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Software Engineering Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "michaelsouellette@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "https://michaelouellette.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Pittsburgh, PA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Experienced Software Engineer with a demonstrated history of web applications. Skilled in Angular, Node.js, SASS, HTML, Firebase, PHP, Web Design, and Adobe Photoshop. Strong engineering professional with a Bachelor of Science (B.S.) focused in Business Management and Management Information Systems from Penn State Erie, The Behrend College.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Professional Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ResumeBodyComponent_app_position_22_Template, 1, 1, "app-position", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Freelance Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ResumeBodyComponent_app_position_26_Template, 1, 1, "app-position", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ResumeBodyComponent_app_position_30_Template, 1, 1, "app-position", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.professionalExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freelanceExperience);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.education);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _position_position_component__WEBPACK_IMPORTED_MODULE_1__.PositionComponent], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n.details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  transition: 0.25s linear;\n}\n.details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8c0000;\n}\n.details[_ngcontent-%COMP%]   .mdi[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1.8rem;\n}\n.details__lineItem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n.details__lineItem[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJyZXN1bWUtYm9keS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRFA7RUFDQyxXQUFBO0VBQ0Esd0JEZW1CO0FDaEJyQjtBQUdFO0VBQ0MsY0NGRztBRENOO0FBS0M7RUFDQyxxQkFBQTtFQUNBLGFBQUE7QUFIRjtBQU1DO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBQ0Msa0JBQUE7QUFKSCIsImZpbGUiOiJyZXN1bWUtYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlIFNoZWV0IEltcG9ydHNcbkBpbXBvcnQgXCJzcmMvc3R5bGVzL3BhbGV0dGVcIjtcblxuLy8gRm9udCBJbXBvcnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIEZvbnRzXG4kcHJpbWFyeS1mb250OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcblxuLy8gTWVkaWEgUXVlcmllc1xuJGRlc2t0b3AteGxhcmdlOiAnbWluLXdpZHRoOiAyMDAwcHgnO1xuJGFwcC1tYXg6ICdtaW4td2lkdGg6IDE2ODBweCc7XG4kZGVza3RvcC1sYXJnZTogJ21pbi13aWR0aDogMTI4MHB4JztcbiRkZXNrdG9wLTEyMDA6ICdtaW4td2lkdGg6IDEyMDBweCc7XG4kZGVza3RvcC1tZDogJ21pbi13aWR0aDo5OTJweCc7XG4kZGVza3RvcDogJ21pbi13aWR0aDogNzY3cHgnO1xuJG1vYmlsZTogJ21heC13aWR0aDogNzY2cHgnO1xuJHhzOiAnbWF4LXdpZHRoOiA1NzZweCc7XG5cbi8vIFRyYW5zaXRpb25zXG4kcHJpbWFyeS10cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XG5cbi8vIE1haW4gQ29sb3JzXG4kYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcbiRwcmltYXJ5LWNvbG9yOiAkcmVkO1xuJHByaW1hcnktZm9udC1jb2xvcjogJGdyZXktZGFyaztcblxuLy8gTmF2aWdhdGlvbiBDb2xvcnNcbiRuYXYtY29sb3ItYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kbmF2LWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kbmF2LWNvbG9yLWZvbnQtaG92ZXI6ICRncmV5LWxpZ2h0O1xuJG5hdi1zaXplLWZvbnQ6IDEuMjVyZW07XG5cbi8vIFNlY3Rpb24gVmFyaWFibGVzXG4kc2VjdGlvbi1ib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1saWdodDtcbiRzZWN0aW9uLXBhZGRpbmctdmVydGljYWw6IDNyZW07XG4kc2VjdGlvbi1wYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIDA7XG4kc2VjdGlvbi13aWR0aDogNjAlO1xuXG4vLyBOb3QgRm91bmRcbiRub3QtY29sb3ItbGluazogJGdyZXktZGFyaztcbiRub3QtY29sb3ItbGluay1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEhvbWUgQ29sb3JzXG4kaG9tZS1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDI7XG4kaG9tZS1jb2xvci1mb250OiAkb2ZmLXdoaXRlO1xuJGhvbWUtY29sb3ItaWNvbi1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEFib3V0IENvbG9yc1xuJHBpY3R1cmUtYm9yZGVyOiAxcHggc29saWQgJGdyZXktbGlnaHQyO1xuJHBpY3R1cmUtcmFkaXVzOiA2cHg7XG5cbi8vIFJlc3VtZVxuJHJlc3VtZS1jb2xvci1mb250OiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1jb2xvci1mb250LWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcbiRyZXN1bWUtY29sb3Itcm93MTogJGdyZXktbGlnaHQyO1xuJHJlc3VtZS1jb2xvci1yb3cyOiAkZ3JleS1saWdodDtcbiRyZXN1bWUtY29sb3Itcm93MzogJGdyZXktZGFyaztcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzE6IDEuMnJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MTogNzAwO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MjogMS4xcmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cyOiA0MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3czOjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzM6IDUwMDtcblxuLy8gQ29udGFjdCBTZWN0aW9uXG4kY29udGFjdC1jb2xvci1pY29uOiAkb2ZmLXdoaXRlO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZC1ob3ZlcjogJGdyZXktZGFyaztcblxuLy8gRm9vdGVyIFZhcmlhYmxlc1xuJGZvb3Rlci1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDM7XG4kZm9vdGVyLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5kZXRhaWxzIHtcblx0YSB7XG5cdFx0Y29sb3I6ICRyZXN1bWUtY29sb3ItZm9udDtcblx0XHR0cmFuc2l0aW9uOiAkcHJpbWFyeS10cmFuc2l0aW9uO1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJHJlc3VtZS1jb2xvci1mb250LWhvdmVyO1xuXHRcdH1cblx0fVxuXG5cdC5tZGkge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR3aWR0aDogMS44cmVtO1xuXHR9XG5cblx0Jl9fbGluZUl0ZW0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQmID4gKiB7XG5cdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0fVxuXHR9XG59XG4iLCIvLyBQYWxldHRlXG4kZ3JleS1saWdodDogI2E1YTVhNTtcbiRncmV5LWxpZ2h0MjogIzYwNmM3NDtcbiRncmV5LWxpZ2h0MzogI2VlZTtcbiRncmV5LWRhcms6ICMzMzM7XG4kb2ZmLXdoaXRlOiAjZjlmOWY5O1xuJHJlZDogIzhjMDAwMDtcbiR3aGl0ZTogI2ZmZmZmZTtcbiJdfQ== */"] });


/***/ }),

/***/ 7374:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/resume-body/resume.data.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationInfo": () => (/* binding */ EducationInfo),
/* harmony export */   "FreelanceInfo": () => (/* binding */ FreelanceInfo),
/* harmony export */   "ProfessionalInfo": () => (/* binding */ ProfessionalInfo)
/* harmony export */ });
/* harmony import */ var _position_position_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../position/position.model */ 1469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class EducationInfo {
    constructor() {
        this.education = [];
        this.education.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition('Penn State Erie, The Behrend College', '2005', '2009', 'Bachelor of Science (B.S.) in Business Management and Management Information Systems'));
        this.education.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition('Coudersport Jr./Sr. High School', '2000', '2005', 'High School Diploma'));
    }
    getInfo() {
        return this.education;
    }
}
EducationInfo.ɵfac = function EducationInfo_Factory(t) { return new (t || EducationInfo)(); };
EducationInfo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EducationInfo, factory: EducationInfo.ɵfac });
class FreelanceInfo {
    constructor() {
        this.jobs = [];
        this.jobTitle = 'Freelance Web Developer';
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`Rod's Welding`, '07/2001', 'Present', 'Designed site layout; enhanced user experience; created graphics and content to enhance site appearance; search engine optimization; innovated back end system to manage company sales;  tracked trends and metrics in Google Analytics.', this.jobTitle, 'http://www.rodswelding.com/'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`Jack Brice on Wine`, '03/2014', '03/2015', 'Design new site layout; creation of a custom WordPress theme; development of a responsive site; moved site from WordPress.com to a hosted version; improve user site experience; create graphics and content to enhance site aesthetic; and search engine optimization.', this.jobTitle, 'https://www.jackbricewine.com/'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`Off-the-Grid`, '11/2012', '03/2015', 'Design new site layout; creation of a custom WordPress theme; development of a responsive site; improve user site experience; create graphics and content to enhance site aesthetic; and search engine optimization.', this.jobTitle, 'https://off-the-grid.ws/'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`Pittsburgh Water Limo`, '05/2010', '11/2012', 'Designed site layout; enhanced user experience; created graphics and content to enhance site appearance; developed e-commerce solution using PayPal APIs; search engine optimization; built MySQL database for easy site maintenance; innovated back end system to manage company sales;  tracked trends and metrics in Google Analytics.', this.jobTitle));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`WineMakingTalk.com`, '04/2010', '12/2012', 'Utilized Google Maps API and mySQL to develop map and database of locations for web community; used jQuery and CSS3 to build an interactive user experience.', this.jobTitle));
    }
    getInfo() {
        return this.jobs;
    }
}
FreelanceInfo.ɵfac = function FreelanceInfo_Factory(t) { return new (t || FreelanceInfo)(); };
FreelanceInfo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FreelanceInfo, factory: FreelanceInfo.ɵfac });
class ProfessionalInfo {
    constructor() {
        this.jobs = [];
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`DICK's Sporting Goods`, '10/2019', 'Present', 'Managing the software engineers for the Athlete Engagement product team; design high level software architecture guides for new projects; enable cross teams collaboration in the technology space; manage the development of an in-house marketing content management system; help in the transition of digital asset management (DAM) systems.', 'Engineering Manager', 'https://www.dickssportinggoods.com/'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`DICK's Sporting Goods`, '11/2018', '10/2019', 'Guided an engineering team in the creation of an in-house marketing content management system (CMS); grew the use of the CMS to the most called API on the site; enabled site content and marketing teams the ability to react quickly to the market place; helped in establishing many guidelines for the growth of Angular applications within the organization; guided the largest sections of marketing content from legacy systems to newer and more scalable approaches.', 'Senior Software Engineer', 'https://www.dickssportinggoods.com/'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition(`DICK's Sporting Goods`, '02/2018', '11/2018', 'Lead a team of front-end developers in the creation of marketing assets for the e-commerce storefront; helped in the creation of tools to speed of business processes around site content; managed many large "instantaneous" site content shifts; worked with design teams in creating scalable and reusable content (sans CMS); managed the deprecation of legacy applications into newer processes.', 'Senior Front-End Web Developer', 'https://www.dickssportinggoods.com/'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition('Industry Weapon', '12/2015', '02/2018', `Creating interactive wireframes for web apps, using AngularJS, jQuery, HTML5, and Sass to create integrations for interactive digital signage; contributing in the development of a web app style framework for future digital signage development; developing Node.js and AngularJS based mobile applications for wayfinding in relation to digital signage; using WebSocket to create real-time queue management systems; creating interactive puzzles and games using modern web technologies for use on touchscreen displays.`, 'Front-End Web Developer'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition('Jawbone', '07/2013', '11/2015', 'Developed growth initiatives around UP platform; responsive site development; rapid prototyping; full-stack development; lead development team in building of application; built web application using Python, AngularJS, HTML5, jQuery, and CSS3.', 'Web Developer'));
        this.jobs.push(new _position_position_model__WEBPACK_IMPORTED_MODULE_0__.IPosition('BodyMedia', '03/2011', '07/2013', 'Improved user site experience, improved site performance and load speed, designed and implemented website changes, e-commerce site development, JavaScript & jQuery programming, developed online pages and e-commerce through use of NetSuite software.', 'Web Developer'));
    }
    getInfo() {
        return this.jobs;
    }
}
ProfessionalInfo.ɵfac = function ProfessionalInfo_Factory(t) { return new (t || ProfessionalInfo)(); };
ProfessionalInfo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfessionalInfo, factory: ProfessionalInfo.ɵfac });


/***/ }),

/***/ 1430:
/*!***********************************************************************!*\
  !*** ./src/app/features/resume/components/skills/skills.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _skills_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.data */ 1194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function SkillsComponent_div_3_ng_container_4_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 8);
} }
function SkillsComponent_div_3_ng_container_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 9);
} }
function SkillsComponent_div_3_ng_container_4_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 10);
} }
function SkillsComponent_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SkillsComponent_div_3_ng_container_4_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SkillsComponent_div_3_ng_container_4_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SkillsComponent_div_3_ng_container_4_i_3_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const starItem_r4 = ctx.$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", starItem_r4 <= item_r1.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isDecimal(item_r1.stars) && starItem_r4 > item_r1.stars && starItem_r4 !== ctx_r3.mathCeiling(item_r1.stars + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", starItem_r4 > item_r1.stars && starItem_r4 > ctx_r3.mathCeiling(item_r1.stars));
} }
const _c0 = function () { return [1, 2, 3, 4, 5]; };
function SkillsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SkillsComponent_div_3_ng_container_4_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
class SkillsComponent {
    constructor(resumeSkills) {
        this.resumeSkills = resumeSkills;
    }
    ngOnInit() {
        this.skillsData = this.resumeSkills.getInfo();
    }
    isDecimal(i) {
        return Math.floor(i) === i;
    }
    mathCeiling(i) {
        return Math.ceil(i);
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_skills_data__WEBPACK_IMPORTED_MODULE_0__.ResumeSkills)); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_skills_data__WEBPACK_IMPORTED_MODULE_0__.ResumeSkills])], decls: 4, vars: 1, consts: [[1, "skills"], ["class", "skills__item", 4, "ngFor", "ngForOf"], [1, "skills__item"], [1, "skills__stars"], [4, "ngFor", "ngForOf"], ["class", "mdi mdi-star", 4, "ngIf"], ["class", "mdi mdi-star-half-full", 4, "ngIf"], ["class", "mdi mdi-star-outline", 4, "ngIf"], [1, "mdi", "mdi-star"], [1, "mdi", "mdi-star-half-full"], [1, "mdi", "mdi-star-outline"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SkillsComponent_div_3_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skillsData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\nh4[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.skills__stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8c0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJza2lsbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3BhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSxnR0FBQTtBQ0ZSO0VBQ0MsYUFBQTtBQUFEO0FBS0U7RUFDQyxjQ0hHO0FEQ04iLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGUgU2hlZXQgSW1wb3J0c1xuQGltcG9ydCBcInNyYy9zdHlsZXMvcGFsZXR0ZVwiO1xuXG4vLyBGb250IEltcG9ydHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gRm9udHNcbiRwcmltYXJ5LWZvbnQ6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kZGVza3RvcC14bGFyZ2U6ICdtaW4td2lkdGg6IDIwMDBweCc7XG4kYXBwLW1heDogJ21pbi13aWR0aDogMTY4MHB4JztcbiRkZXNrdG9wLWxhcmdlOiAnbWluLXdpZHRoOiAxMjgwcHgnO1xuJGRlc2t0b3AtMTIwMDogJ21pbi13aWR0aDogMTIwMHB4JztcbiRkZXNrdG9wLW1kOiAnbWluLXdpZHRoOjk5MnB4JztcbiRkZXNrdG9wOiAnbWluLXdpZHRoOiA3NjdweCc7XG4kbW9iaWxlOiAnbWF4LXdpZHRoOiA3NjZweCc7XG4keHM6ICdtYXgtd2lkdGg6IDU3NnB4JztcblxuLy8gVHJhbnNpdGlvbnNcbiRwcmltYXJ5LXRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcblxuLy8gTWFpbiBDb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuJHByaW1hcnktY29sb3I6ICRyZWQ7XG4kcHJpbWFyeS1mb250LWNvbG9yOiAkZ3JleS1kYXJrO1xuXG4vLyBOYXZpZ2F0aW9uIENvbG9yc1xuJG5hdi1jb2xvci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRuYXYtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRuYXYtY29sb3ItZm9udC1ob3ZlcjogJGdyZXktbGlnaHQ7XG4kbmF2LXNpemUtZm9udDogMS4yNXJlbTtcblxuLy8gU2VjdGlvbiBWYXJpYWJsZXNcbiRzZWN0aW9uLWJvcmRlcjogMnB4IHNvbGlkICRncmV5LWxpZ2h0O1xuJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbDogM3JlbTtcbiRzZWN0aW9uLXBhZGRpbmc6ICRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgMDtcbiRzZWN0aW9uLXdpZHRoOiA2MCU7XG5cbi8vIE5vdCBGb3VuZFxuJG5vdC1jb2xvci1saW5rOiAkZ3JleS1kYXJrO1xuJG5vdC1jb2xvci1saW5rLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gSG9tZSBDb2xvcnNcbiRob21lLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MjtcbiRob21lLWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kaG9tZS1jb2xvci1pY29uLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gQWJvdXQgQ29sb3JzXG4kcGljdHVyZS1ib3JkZXI6IDFweCBzb2xpZCAkZ3JleS1saWdodDI7XG4kcGljdHVyZS1yYWRpdXM6IDZweDtcblxuLy8gUmVzdW1lXG4kcmVzdW1lLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4kcmVzdW1lLWNvbG9yLWZvbnQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuJHJlc3VtZS1jb2xvci1yb3cxOiAkZ3JleS1saWdodDI7XG4kcmVzdW1lLWNvbG9yLXJvdzI6ICRncmV5LWxpZ2h0O1xuJHJlc3VtZS1jb2xvci1yb3czOiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MTogMS4ycmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cxOiA3MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cyOiAxLjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzI6IDQwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzM6MXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MzogNTAwO1xuXG4vLyBDb250YWN0IFNlY3Rpb25cbiRjb250YWN0LWNvbG9yLWljb246ICRvZmYtd2hpdGU7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kLWhvdmVyOiAkZ3JleS1kYXJrO1xuXG4vLyBGb290ZXIgVmFyaWFibGVzXG4kZm9vdGVyLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MztcbiRmb290ZXItY29sb3ItZm9udDogJGdyZXktZGFyaztcbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcblxuaDQge1xuXHRtYXJnaW4tdG9wOiAwO1xufVxuXG4uc2tpbGxzIHtcblx0Jl9fc3RhcnMge1xuXHRcdGkge1xuXHRcdFx0Y29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuXHRcdH1cblx0fVxufVxuIiwiLy8gUGFsZXR0ZVxuJGdyZXktbGlnaHQ6ICNhNWE1YTU7XG4kZ3JleS1saWdodDI6ICM2MDZjNzQ7XG4kZ3JleS1saWdodDM6ICNlZWU7XG4kZ3JleS1kYXJrOiAjMzMzO1xuJG9mZi13aGl0ZTogI2Y5ZjlmOTtcbiRyZWQ6ICM4YzAwMDA7XG4kd2hpdGU6ICNmZmZmZmU7XG4iXX0= */"] });


/***/ }),

/***/ 1194:
/*!******************************************************************!*\
  !*** ./src/app/features/resume/components/skills/skills.data.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeSkills": () => (/* binding */ ResumeSkills)
/* harmony export */ });
/* harmony import */ var _skills_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.model */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ResumeSkills {
    constructor() {
        this.skills = [];
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Angular', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Node.js', 4.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Express', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('MEAN', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('M*EAN', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('HTML 5', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('CSS 3', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Sass', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('TypeScript', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Javascript', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('git', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Redis', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('SQL', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('NoSQL', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Firebase', 3.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('NPM', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Bootstrap', 4.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Webpack', 3.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('JSON', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Python', 2));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('PHP', 3));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Gulp', 3.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('jQuery', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('WordPress', 5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Google Cloud', 3.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('AWS', 3.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Azure', 3.5));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Jira', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('XML', 4));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('IBM WebSphere Commerce', 3));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('NetSuite', 3));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('Sketch', 3));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.IResumeSkills('PhotoShop', 2));
    }
    getInfo() {
        return this.skills;
    }
}
ResumeSkills.ɵfac = function ResumeSkills_Factory(t) { return new (t || ResumeSkills)(); };
ResumeSkills.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResumeSkills, factory: ResumeSkills.ɵfac });


/***/ }),

/***/ 5353:
/*!*******************************************************************!*\
  !*** ./src/app/features/resume/components/skills/skills.model.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IResumeSkills": () => (/* binding */ IResumeSkills)
/* harmony export */ });
class IResumeSkills {
    constructor(name, stars) {
        this.name = name;
        this.stars = stars;
    }
}


/***/ }),

/***/ 8988:
/*!*****************************************************!*\
  !*** ./src/app/features/resume/resume.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_resume_body_resume_body_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/resume-body/resume-body.component */ 8470);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/skills/skills.component */ 1430);



class ResumeComponent {
    constructor() { }
    ngOnInit() { }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 5, vars: 0, consts: [[1, "resume"], [1, "resume__left"], [1, "resume__right"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "R\u00E9sum\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-resume-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-skills", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_components_resume_body_resume_body_component__WEBPACK_IMPORTED_MODULE_0__.ResumeBodyComponent, _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_1__.SkillsComponent], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 3rem 0;\n  padding-top: 0;\n  position: relative;\n  width: 60%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%] {\n    padding: 1.0909090909rem 0;\n    width: 95%;\n  }\n}\n[_nghost-%COMP%]  h4 {\n  border-bottom: 1px solid #8c0000;\n  font-size: 1.3rem;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]  h4 {\n    font-size: 1rem;\n  }\n}\n[_nghost-%COMP%]   .resume[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .resume__left[_ngcontent-%COMP%] {\n  flex: 2;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   .resume__left[_ngcontent-%COMP%] {\n    flex: 1.5;\n    max-width: 65%;\n  }\n}\n[_nghost-%COMP%]   .resume__right[_ngcontent-%COMP%] {\n  border-left: 1px solid #eee;\n  box-sizing: border-box;\n  flex: 0.5;\n  margin-left: 2rem;\n  padding-left: 2rem;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]   .resume__right[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-left: 0.6666666667rem;\n    padding-left: 0.6666666667rem;\n  }\n}\n[_nghost-%COMP%]::after {\n  border-bottom: 2px solid #a5a5a5;\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  padding: 1.5rem 0;\n  width: 30%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]::after {\n    padding: 1.0909090909rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJyZXN1bWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRFI7RUNGQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVGaUNpQjtFRWhDakIsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUYrQmU7QUM3QmhCO0FDQUM7RURMRDtJQ01FLDBCQUFBO0lBQ0EsVUFBQTtFREdBO0FBQ0Y7QUFQRTtFQUNDLGdDQUFBO0VBQ0EsaUJBQUE7QUFTSDtBQVBHO0VBSkQ7SUFLRSxlQUFBO0VBVUY7QUFDRjtBQU5DO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBUUY7QUFORTtFQUNDLE9BQUE7QUFRSDtBQU5HO0VBSEQ7SUFJRSxTQUFBO0lBQ0EsY0FBQTtFQVNGO0FBQ0Y7QUFORTtFQUVDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBSmdCO0VBS2hCLGtCQUxnQjtBQVluQjtBQUxHO0VBUkQ7SUFVRSxPQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQU9GO0FBQ0Y7QUNsQ0U7RUFDQyxnQ0ZpQmM7RUVoQmQsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FEcUNIO0FDbkNHO0VBUkQ7SUFTRSwwQkFBQTtFRHNDRjtBQUNGIiwiZmlsZSI6InJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlIFNoZWV0IEltcG9ydHNcbkBpbXBvcnQgXCJzcmMvc3R5bGVzL3BhbGV0dGVcIjtcblxuLy8gRm9udCBJbXBvcnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIEZvbnRzXG4kcHJpbWFyeS1mb250OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcblxuLy8gTWVkaWEgUXVlcmllc1xuJGRlc2t0b3AteGxhcmdlOiAnbWluLXdpZHRoOiAyMDAwcHgnO1xuJGFwcC1tYXg6ICdtaW4td2lkdGg6IDE2ODBweCc7XG4kZGVza3RvcC1sYXJnZTogJ21pbi13aWR0aDogMTI4MHB4JztcbiRkZXNrdG9wLTEyMDA6ICdtaW4td2lkdGg6IDEyMDBweCc7XG4kZGVza3RvcC1tZDogJ21pbi13aWR0aDo5OTJweCc7XG4kZGVza3RvcDogJ21pbi13aWR0aDogNzY3cHgnO1xuJG1vYmlsZTogJ21heC13aWR0aDogNzY2cHgnO1xuJHhzOiAnbWF4LXdpZHRoOiA1NzZweCc7XG5cbi8vIFRyYW5zaXRpb25zXG4kcHJpbWFyeS10cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XG5cbi8vIE1haW4gQ29sb3JzXG4kYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcbiRwcmltYXJ5LWNvbG9yOiAkcmVkO1xuJHByaW1hcnktZm9udC1jb2xvcjogJGdyZXktZGFyaztcblxuLy8gTmF2aWdhdGlvbiBDb2xvcnNcbiRuYXYtY29sb3ItYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kbmF2LWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kbmF2LWNvbG9yLWZvbnQtaG92ZXI6ICRncmV5LWxpZ2h0O1xuJG5hdi1zaXplLWZvbnQ6IDEuMjVyZW07XG5cbi8vIFNlY3Rpb24gVmFyaWFibGVzXG4kc2VjdGlvbi1ib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1saWdodDtcbiRzZWN0aW9uLXBhZGRpbmctdmVydGljYWw6IDNyZW07XG4kc2VjdGlvbi1wYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIDA7XG4kc2VjdGlvbi13aWR0aDogNjAlO1xuXG4vLyBOb3QgRm91bmRcbiRub3QtY29sb3ItbGluazogJGdyZXktZGFyaztcbiRub3QtY29sb3ItbGluay1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEhvbWUgQ29sb3JzXG4kaG9tZS1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDI7XG4kaG9tZS1jb2xvci1mb250OiAkb2ZmLXdoaXRlO1xuJGhvbWUtY29sb3ItaWNvbi1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEFib3V0IENvbG9yc1xuJHBpY3R1cmUtYm9yZGVyOiAxcHggc29saWQgJGdyZXktbGlnaHQyO1xuJHBpY3R1cmUtcmFkaXVzOiA2cHg7XG5cbi8vIFJlc3VtZVxuJHJlc3VtZS1jb2xvci1mb250OiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1jb2xvci1mb250LWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcbiRyZXN1bWUtY29sb3Itcm93MTogJGdyZXktbGlnaHQyO1xuJHJlc3VtZS1jb2xvci1yb3cyOiAkZ3JleS1saWdodDtcbiRyZXN1bWUtY29sb3Itcm93MzogJGdyZXktZGFyaztcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzE6IDEuMnJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MTogNzAwO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MjogMS4xcmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cyOiA0MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3czOjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzM6IDUwMDtcblxuLy8gQ29udGFjdCBTZWN0aW9uXG4kY29udGFjdC1jb2xvci1pY29uOiAkb2ZmLXdoaXRlO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZC1ob3ZlcjogJGdyZXktZGFyaztcblxuLy8gRm9vdGVyIFZhcmlhYmxlc1xuJGZvb3Rlci1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDM7XG4kZm9vdGVyLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdzcmMvc3R5bGVzL21peGlucyc7XG5cbjpob3N0IHtcblx0QGluY2x1ZGUgc2VjdGlvbi1zdHlsZXM7XG5cblx0Jjo6bmctZGVlcCB7XG5cdFx0aDQge1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuXHRcdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnJlc3VtZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5cdFx0Jl9fbGVmdCB7XG5cdFx0XHRmbGV4OiAyO1xuXG5cdFx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdFx0ZmxleDogMS41O1xuXHRcdFx0XHRtYXgtd2lkdGg6IDY1JTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQmX19yaWdodCB7XG5cdFx0XHQkcmlnaHQtc3BhY2luZzogMnJlbTtcblx0XHRcdGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGdyZXktbGlnaHQzO1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGZsZXg6IC41O1xuXHRcdFx0bWFyZ2luLWxlZnQ6ICRyaWdodC1zcGFjaW5nO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAkcmlnaHQtc3BhY2luZztcblxuXHRcdFx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0XHRcdCRkaXZpc2lvbi1tdWx0aXBsaWVyOiAzO1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogY2FsYygkcmlnaHQtc3BhY2luZyAvICRkaXZpc2lvbi1tdWx0aXBsaWVyKTtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiBjYWxjKCRyaWdodC1zcGFjaW5nIC8gJGRpdmlzaW9uLW11bHRpcGxpZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5AaW5jbHVkZSBzZWN0aW9uLWFmdGVyO1xuIiwiQG1peGluIHNlY3Rpb24tc3R5bGVzIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nO1xuXHRwYWRkaW5nLXRvcDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogJHNlY3Rpb24td2lkdGg7XG5cblx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0cGFkZGluZzogIGNhbGMoJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAvIDIuNzUpIDA7XG5cdFx0d2lkdGg6IDk1JTtcblx0fVxufVxuXG5AbWl4aW4gc2VjdGlvbi1hZnRlciB7XG5cdDpob3N0IHtcblx0XHQmOjphZnRlciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiAkc2VjdGlvbi1ib3JkZXI7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRwYWRkaW5nOiAxLjVyZW0gMDtcblx0XHRcdHdpZHRoOiAzMCU7XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRwYWRkaW5nOiAgY2FsYygkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIC8gMi43NSkgMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8260:
/*!**************************************************!*\
  !*** ./src/app/features/resume/resume.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeModule": () => (/* binding */ ResumeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/position/position.component */ 7704);
/* harmony import */ var _components_resume_body_resume_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resume-body/resume-body.component */ 8470);
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/skills/skills.component */ 1430);
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume.component */ 8988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);

// Components





class ResumeModule {
}
ResumeModule.ɵfac = function ResumeModule_Factory(t) { return new (t || ResumeModule)(); };
ResumeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent,
        _components_position_position_component__WEBPACK_IMPORTED_MODULE_0__.PositionComponent,
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent,
        _components_resume_body_resume_body_component__WEBPACK_IMPORTED_MODULE_1__.ResumeBodyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent] }); })();


/***/ }),

/***/ 1277:
/*!*****************************************************!*\
  !*** ./src/app/features/skills/skills.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _skills_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.data */ 748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function SkillsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/languages/" + item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
} }
class SkillsComponent {
    constructor(skillsInfo) {
        this.skillsInfo = skillsInfo;
    }
    ngOnInit() {
        this.skills = this.skillsInfo.getInfo();
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_skills_data__WEBPACK_IMPORTED_MODULE_0__.SkillsInfo)); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _skills_data__WEBPACK_IMPORTED_MODULE_0__.SkillsInfo
        ])], decls: 4, vars: 1, consts: [[1, "language"], ["class", "language__item", 4, "ngFor", "ngForOf"], [1, "language__item"], [3, "src", "alt"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Technology Proficiencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SkillsComponent_div_3_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 3rem 0;\n  padding-top: 0;\n  position: relative;\n  width: 60%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%] {\n    padding: 1.0909090909rem 0;\n    width: 95%;\n  }\n}\n.language[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  position: relative;\n}\n.language__item[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin-bottom: 2.5rem;\n  padding: 0 1rem;\n  text-align: center;\n  width: 16%;\n}\n@media (max-width: 766px) {\n  .language__item[_ngcontent-%COMP%] {\n    width: 33%;\n  }\n}\n.language__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  max-height: 8vw;\n  width: 100%;\n}\n@media (max-width: 766px) {\n  .language__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 16vw;\n  }\n}\n.language__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n@media (max-width: 766px) {\n  .language__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n[_nghost-%COMP%]::after {\n  border-bottom: 2px solid #a5a5a5;\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  padding: 1.5rem 0;\n  width: 30%;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%]::after {\n    padding: 1.0909090909rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJza2lsbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRFI7RUNGQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVGaUNpQjtFRWhDakIsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUYrQmU7QUM3QmhCO0FDQUM7RURMRDtJQ01FLDBCQUFBO0lBQ0EsVUFBQTtFREdBO0FBQ0Y7QUFQQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBVUQ7QUFSQztFQUNDLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBVUY7QUFSRTtFQVBEO0lBUUUsVUFBQTtFQVdEO0FBQ0Y7QUFURTtFQUNDLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFXSDtBQVRHO0VBTEQ7SUFNRSxnQkFBQTtFQVlGO0FBQ0Y7QUFURTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQVdIO0FBVEc7RUFKRDtJQUtFLGlCQUFBO0VBWUY7QUFDRjtBQ3JDRTtFQUNDLGdDRmlCYztFRWhCZCxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUR3Q0g7QUN0Q0c7RUFSRDtJQVNFLDBCQUFBO0VEeUNGO0FBQ0YiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGUgU2hlZXQgSW1wb3J0c1xuQGltcG9ydCBcInNyYy9zdHlsZXMvcGFsZXR0ZVwiO1xuXG4vLyBGb250IEltcG9ydHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuLy8gRm9udHNcbiRwcmltYXJ5LWZvbnQ6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuXG4vLyBNZWRpYSBRdWVyaWVzXG4kZGVza3RvcC14bGFyZ2U6ICdtaW4td2lkdGg6IDIwMDBweCc7XG4kYXBwLW1heDogJ21pbi13aWR0aDogMTY4MHB4JztcbiRkZXNrdG9wLWxhcmdlOiAnbWluLXdpZHRoOiAxMjgwcHgnO1xuJGRlc2t0b3AtMTIwMDogJ21pbi13aWR0aDogMTIwMHB4JztcbiRkZXNrdG9wLW1kOiAnbWluLXdpZHRoOjk5MnB4JztcbiRkZXNrdG9wOiAnbWluLXdpZHRoOiA3NjdweCc7XG4kbW9iaWxlOiAnbWF4LXdpZHRoOiA3NjZweCc7XG4keHM6ICdtYXgtd2lkdGg6IDU3NnB4JztcblxuLy8gVHJhbnNpdGlvbnNcbiRwcmltYXJ5LXRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcblxuLy8gTWFpbiBDb2xvcnNcbiRiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuJHByaW1hcnktY29sb3I6ICRyZWQ7XG4kcHJpbWFyeS1mb250LWNvbG9yOiAkZ3JleS1kYXJrO1xuXG4vLyBOYXZpZ2F0aW9uIENvbG9yc1xuJG5hdi1jb2xvci1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRuYXYtY29sb3ItZm9udDogJG9mZi13aGl0ZTtcbiRuYXYtY29sb3ItZm9udC1ob3ZlcjogJGdyZXktbGlnaHQ7XG4kbmF2LXNpemUtZm9udDogMS4yNXJlbTtcblxuLy8gU2VjdGlvbiBWYXJpYWJsZXNcbiRzZWN0aW9uLWJvcmRlcjogMnB4IHNvbGlkICRncmV5LWxpZ2h0O1xuJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbDogM3JlbTtcbiRzZWN0aW9uLXBhZGRpbmc6ICRzZWN0aW9uLXBhZGRpbmctdmVydGljYWwgMDtcbiRzZWN0aW9uLXdpZHRoOiA2MCU7XG5cbi8vIE5vdCBGb3VuZFxuJG5vdC1jb2xvci1saW5rOiAkZ3JleS1kYXJrO1xuJG5vdC1jb2xvci1saW5rLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gSG9tZSBDb2xvcnNcbiRob21lLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MjtcbiRob21lLWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kaG9tZS1jb2xvci1pY29uLWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcblxuLy8gQWJvdXQgQ29sb3JzXG4kcGljdHVyZS1ib3JkZXI6IDFweCBzb2xpZCAkZ3JleS1saWdodDI7XG4kcGljdHVyZS1yYWRpdXM6IDZweDtcblxuLy8gUmVzdW1lXG4kcmVzdW1lLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4kcmVzdW1lLWNvbG9yLWZvbnQtaG92ZXI6ICRwcmltYXJ5LWNvbG9yO1xuJHJlc3VtZS1jb2xvci1yb3cxOiAkZ3JleS1saWdodDI7XG4kcmVzdW1lLWNvbG9yLXJvdzI6ICRncmV5LWxpZ2h0O1xuJHJlc3VtZS1jb2xvci1yb3czOiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MTogMS4ycmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cxOiA3MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3cyOiAxLjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzI6IDQwMDtcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzM6MXJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MzogNTAwO1xuXG4vLyBDb250YWN0IFNlY3Rpb25cbiRjb250YWN0LWNvbG9yLWljb246ICRvZmYtd2hpdGU7XG4kY29udGFjdC1jb2xvci1pY29uLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kLWhvdmVyOiAkZ3JleS1kYXJrO1xuXG4vLyBGb290ZXIgVmFyaWFibGVzXG4kZm9vdGVyLWNvbG9yLWJhY2tncm91bmQ6ICRncmV5LWxpZ2h0MztcbiRmb290ZXItY29sb3ItZm9udDogJGdyZXktZGFyaztcbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvbWl4aW5zJztcblxuOmhvc3Qge1xuXHRAaW5jbHVkZSBzZWN0aW9uLXN0eWxlcztcbn1cblxuLmxhbmd1YWdlIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHQmX19pdGVtIHtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblx0XHRwYWRkaW5nOiAwIDFyZW07XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHdpZHRoOiAxNiU7XG5cblx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdHdpZHRoOiAzMyU7XG5cdFx0fVxuXG5cdFx0aW1nIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IC43NXJlbTtcblx0XHRcdG1heC1oZWlnaHQ6IDh2dztcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRAbWVkaWEgKCRtb2JpbGUpIHtcblx0XHRcdFx0bWF4LWhlaWdodDogMTZ2dztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRzcGFuIHtcblx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRmb250LXNpemU6IC45cmVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5AaW5jbHVkZSBzZWN0aW9uLWFmdGVyO1xuIiwiQG1peGluIHNlY3Rpb24tc3R5bGVzIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nO1xuXHRwYWRkaW5nLXRvcDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogJHNlY3Rpb24td2lkdGg7XG5cblx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0cGFkZGluZzogIGNhbGMoJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAvIDIuNzUpIDA7XG5cdFx0d2lkdGg6IDk1JTtcblx0fVxufVxuXG5AbWl4aW4gc2VjdGlvbi1hZnRlciB7XG5cdDpob3N0IHtcblx0XHQmOjphZnRlciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiAkc2VjdGlvbi1ib3JkZXI7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRwYWRkaW5nOiAxLjVyZW0gMDtcblx0XHRcdHdpZHRoOiAzMCU7XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRwYWRkaW5nOiAgY2FsYygkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIC8gMi43NSkgMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 748:
/*!************************************************!*\
  !*** ./src/app/features/skills/skills.data.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsInfo": () => (/* binding */ SkillsInfo)
/* harmony export */ });
/* harmony import */ var _skills_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.model */ 3056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SkillsInfo {
    constructor() {
        this.skills = [];
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Angular', 'angular-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Node.js', 'nodejs-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('HTML 5', 'html5-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('CSS 3', 'css3-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Sass', 'sass-original.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('TypeScript', 'typescript-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Javascript', 'javascript-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('git', 'git-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Redis', 'redis-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('MySQL', 'mysql-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('MongoDB', 'mongodb-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Firebase', 'firebase.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('NPM', 'npm-original-wordmark.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Webpack', 'webpack-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Wordpress', 'wordpress-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Bootstrap', 'bootstrap-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('Python', 'python-plain.svg'));
        this.skills.push(new _skills_model__WEBPACK_IMPORTED_MODULE_0__.ISkill('PHP', 'php-plain.svg'));
    }
    getInfo() {
        return this.skills;
    }
}
SkillsInfo.ɵfac = function SkillsInfo_Factory(t) { return new (t || SkillsInfo)(); };
SkillsInfo.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SkillsInfo, factory: SkillsInfo.ɵfac });


/***/ }),

/***/ 3056:
/*!*************************************************!*\
  !*** ./src/app/features/skills/skills.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ISkill": () => (/* binding */ ISkill)
/* harmony export */ });
class ISkill {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}


/***/ }),

/***/ 525:
/*!**************************************************!*\
  !*** ./src/app/features/skills/skills.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsModule": () => (/* binding */ SkillsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _skills_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills.component */ 1277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Components


class SkillsModule {
}
SkillsModule.ɵfac = function SkillsModule_Factory(t) { return new (t || SkillsModule)(); };
SkillsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SkillsModule });
SkillsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SkillsModule, { declarations: [_skills_component__WEBPACK_IMPORTED_MODULE_0__.SkillsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_skills_component__WEBPACK_IMPORTED_MODULE_0__.SkillsComponent] }); })();


/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/home/home.component */ 8463);
/* harmony import */ var _features_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/about/about.component */ 3841);
/* harmony import */ var _features_skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/skills/skills.component */ 1277);
/* harmony import */ var _features_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/resume/resume.component */ 8988);
/* harmony import */ var _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/contact/contact.component */ 2120);






class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 0, consts: [["id", "about"], ["id", "tech"], ["id", "resume"], ["id", "contact"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-about", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-skills", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-resume", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-contact", 3);
    } }, directives: [_features_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _features_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _features_skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _features_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent, _features_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent], encapsulation: 2 });


/***/ }),

/***/ 958:
/*!****************************************************!*\
  !*** ./src/app/no-content/no-content.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoContentComponent": () => (/* binding */ NoContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



function NoContentComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click here to go back to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "main page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.path);
} }
class NoContentComponent {
    constructor() {
        this.path = '/';
    }
    ngOnInit() { }
}
NoContentComponent.ɵfac = function NoContentComponent_Factory(t) { return new (t || NoContentComponent)(); };
NoContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoContentComponent, selectors: [["app-no-content"]], decls: 3, vars: 1, consts: [[4, "ngIf"], [3, "routerLink"]], template: function NoContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404 - Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoContentComponent_p_2_Template, 4, 1, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.path);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap\");\n[_nghost-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  padding: 3rem 0;\n  padding-top: 0;\n  position: relative;\n  width: 60%;\n  flex: 1;\n}\n@media (max-width: 766px) {\n  [_nghost-%COMP%] {\n    padding: 1.0909090909rem 0;\n    width: 95%;\n  }\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  transition: 0.25s linear;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #8c0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJuby1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyIsIi4uLy4uL3N0eWxlcy9fcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGdHQUFBO0FDRFI7RUNGQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVGaUNpQjtFRWhDakIsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUYrQmU7RUNoQ2YsT0FBQTtBQUlEO0FDREM7RURMRDtJQ01FLDBCQUFBO0lBQ0EsVUFBQTtFRElBO0FBQ0Y7QUFSQztFQUNDLFdFSlU7RUZLVix3QkRXbUI7QUNEckI7QUFSRTtFQUNDLGNFTkc7QUZnQk4iLCJmaWxlIjoibm8tY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlIFNoZWV0IEltcG9ydHNcbkBpbXBvcnQgXCJzcmMvc3R5bGVzL3BhbGV0dGVcIjtcblxuLy8gRm9udCBJbXBvcnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIEZvbnRzXG4kcHJpbWFyeS1mb250OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcblxuLy8gTWVkaWEgUXVlcmllc1xuJGRlc2t0b3AteGxhcmdlOiAnbWluLXdpZHRoOiAyMDAwcHgnO1xuJGFwcC1tYXg6ICdtaW4td2lkdGg6IDE2ODBweCc7XG4kZGVza3RvcC1sYXJnZTogJ21pbi13aWR0aDogMTI4MHB4JztcbiRkZXNrdG9wLTEyMDA6ICdtaW4td2lkdGg6IDEyMDBweCc7XG4kZGVza3RvcC1tZDogJ21pbi13aWR0aDo5OTJweCc7XG4kZGVza3RvcDogJ21pbi13aWR0aDogNzY3cHgnO1xuJG1vYmlsZTogJ21heC13aWR0aDogNzY2cHgnO1xuJHhzOiAnbWF4LXdpZHRoOiA1NzZweCc7XG5cbi8vIFRyYW5zaXRpb25zXG4kcHJpbWFyeS10cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XG5cbi8vIE1haW4gQ29sb3JzXG4kYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcbiRwcmltYXJ5LWNvbG9yOiAkcmVkO1xuJHByaW1hcnktZm9udC1jb2xvcjogJGdyZXktZGFyaztcblxuLy8gTmF2aWdhdGlvbiBDb2xvcnNcbiRuYXYtY29sb3ItYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4kbmF2LWNvbG9yLWZvbnQ6ICRvZmYtd2hpdGU7XG4kbmF2LWNvbG9yLWZvbnQtaG92ZXI6ICRncmV5LWxpZ2h0O1xuJG5hdi1zaXplLWZvbnQ6IDEuMjVyZW07XG5cbi8vIFNlY3Rpb24gVmFyaWFibGVzXG4kc2VjdGlvbi1ib3JkZXI6IDJweCBzb2xpZCAkZ3JleS1saWdodDtcbiRzZWN0aW9uLXBhZGRpbmctdmVydGljYWw6IDNyZW07XG4kc2VjdGlvbi1wYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIDA7XG4kc2VjdGlvbi13aWR0aDogNjAlO1xuXG4vLyBOb3QgRm91bmRcbiRub3QtY29sb3ItbGluazogJGdyZXktZGFyaztcbiRub3QtY29sb3ItbGluay1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEhvbWUgQ29sb3JzXG4kaG9tZS1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDI7XG4kaG9tZS1jb2xvci1mb250OiAkb2ZmLXdoaXRlO1xuJGhvbWUtY29sb3ItaWNvbi1ob3ZlcjogJHByaW1hcnktY29sb3I7XG5cbi8vIEFib3V0IENvbG9yc1xuJHBpY3R1cmUtYm9yZGVyOiAxcHggc29saWQgJGdyZXktbGlnaHQyO1xuJHBpY3R1cmUtcmFkaXVzOiA2cHg7XG5cbi8vIFJlc3VtZVxuJHJlc3VtZS1jb2xvci1mb250OiAkZ3JleS1kYXJrO1xuJHJlc3VtZS1jb2xvci1mb250LWhvdmVyOiAkcHJpbWFyeS1jb2xvcjtcbiRyZXN1bWUtY29sb3Itcm93MTogJGdyZXktbGlnaHQyO1xuJHJlc3VtZS1jb2xvci1yb3cyOiAkZ3JleS1saWdodDtcbiRyZXN1bWUtY29sb3Itcm93MzogJGdyZXktZGFyaztcbiRyZXN1bWUtc2l6ZS1mb250LXJvdzE6IDEuMnJlbTtcbiRyZXN1bWUtd2VpZ2h0LWZvbnQtcm93MTogNzAwO1xuJHJlc3VtZS1zaXplLWZvbnQtcm93MjogMS4xcmVtO1xuJHJlc3VtZS13ZWlnaHQtZm9udC1yb3cyOiA0MDA7XG4kcmVzdW1lLXNpemUtZm9udC1yb3czOjFyZW07XG4kcmVzdW1lLXdlaWdodC1mb250LXJvdzM6IDUwMDtcblxuLy8gQ29udGFjdCBTZWN0aW9uXG4kY29udGFjdC1jb2xvci1pY29uOiAkb2ZmLXdoaXRlO1xuJGNvbnRhY3QtY29sb3ItaWNvbi1iYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiRjb250YWN0LWNvbG9yLWljb24tYmFja2dyb3VuZC1ob3ZlcjogJGdyZXktZGFyaztcblxuLy8gRm9vdGVyIFZhcmlhYmxlc1xuJGZvb3Rlci1jb2xvci1iYWNrZ3JvdW5kOiAkZ3JleS1saWdodDM7XG4kZm9vdGVyLWNvbG9yLWZvbnQ6ICRncmV5LWRhcms7XG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdzcmMvc3R5bGVzL21peGlucyc7XG5cbjpob3N0IHtcblx0QGluY2x1ZGUgc2VjdGlvbi1zdHlsZXM7XG5cdGZsZXg6IDE7XG5cblx0YSB7XG5cdFx0Y29sb3I6ICRub3QtY29sb3ItbGluaztcblx0XHR0cmFuc2l0aW9uOiAkcHJpbWFyeS10cmFuc2l0aW9uO1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJG5vdC1jb2xvci1saW5rLWhvdmVyO1xuXHRcdH1cblx0fVxufVxuIiwiQG1peGluIHNlY3Rpb24tc3R5bGVzIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAkc2VjdGlvbi1wYWRkaW5nO1xuXHRwYWRkaW5nLXRvcDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogJHNlY3Rpb24td2lkdGg7XG5cblx0QG1lZGlhICgkbW9iaWxlKSB7XG5cdFx0cGFkZGluZzogIGNhbGMoJHNlY3Rpb24tcGFkZGluZy12ZXJ0aWNhbCAvIDIuNzUpIDA7XG5cdFx0d2lkdGg6IDk1JTtcblx0fVxufVxuXG5AbWl4aW4gc2VjdGlvbi1hZnRlciB7XG5cdDpob3N0IHtcblx0XHQmOjphZnRlciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiAkc2VjdGlvbi1ib3JkZXI7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRwYWRkaW5nOiAxLjVyZW0gMDtcblx0XHRcdHdpZHRoOiAzMCU7XG5cblx0XHRcdEBtZWRpYSAoJG1vYmlsZSkge1xuXHRcdFx0XHRwYWRkaW5nOiAgY2FsYygkc2VjdGlvbi1wYWRkaW5nLXZlcnRpY2FsIC8gMi43NSkgMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi8vIFBhbGV0dGVcbiRncmV5LWxpZ2h0OiAjYTVhNWE1O1xuJGdyZXktbGlnaHQyOiAjNjA2Yzc0O1xuJGdyZXktbGlnaHQzOiAjZWVlO1xuJGdyZXktZGFyazogIzMzMztcbiRvZmYtd2hpdGU6ICNmOWY5Zjk7XG4kcmVkOiAjOGMwMDAwO1xuJHdoaXRlOiAjZmZmZmZlO1xuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch((err) => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map