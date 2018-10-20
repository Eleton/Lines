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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'Lines';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_create_room_create_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/create-room/create-room.component */ "./src/app/pages/create-room/create-room.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/room-list/room-list.component */ "./src/app/pages/room-list/room-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _pages_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/front-page/front-page.component */ "./src/app/pages/front-page/front-page.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/footer/footer.component */ "./src/app/pages/footer/footer.component.ts");
/* harmony import */ var _pages_create_password_create_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/create-password/create-password.component */ "./src/app/pages/create-password/create-password.component.ts");
/* harmony import */ var _pages_room_admin_room_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/room-admin/room-admin.component */ "./src/app/pages/room-admin/room-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var routes = [
    { path: '', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"] },
    { path: 'admin', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: 'password', component: _pages_create_password_create_password_component__WEBPACK_IMPORTED_MODULE_24__["CreatePasswordComponent"] },
    { path: 'room_admin', component: _pages_room_admin_room_admin_component__WEBPACK_IMPORTED_MODULE_25__["RoomAdminComponent"] },
];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_15__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["faCut"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
                _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
                _pages_create_room_create_room_component__WEBPACK_IMPORTED_MODULE_10__["CreateRoomComponent"],
                _pages_room_list_room_list_component__WEBPACK_IMPORTED_MODULE_12__["RoomListComponent"],
                _pages_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_21__["FrontPageComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _pages_create_password_create_password_component__WEBPACK_IMPORTED_MODULE_24__["CreatePasswordComponent"],
                _pages_room_admin_room_admin_component__WEBPACK_IMPORTED_MODULE_25__["RoomAdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    paramsInheritanceStrategy: 'always'
                }),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/domain/forbidden-name.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/domain/forbidden-name.directive.ts ***!
  \****************************************************/
/*! exports provided: forbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function forbiddenNameValidator(roomService) {
    return function (control) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () { return roomService.doesRoomExist(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (exists) { return exists ? ({ unique: true }) : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return null; })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    };
}


/***/ }),

/***/ "./src/app/domain/index.ts":
/*!*********************************!*\
  !*** ./src/app/domain/index.ts ***!
  \*********************************/
/*! exports provided: RoomService, forbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room.service */ "./src/app/domain/room.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return _room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"]; });

/* harmony import */ var _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forbidden-name.directive */ "./src/app/domain/forbidden-name.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return _forbidden_name_directive__WEBPACK_IMPORTED_MODULE_1__["forbiddenNameValidator"]; });





/***/ }),

/***/ "./src/app/domain/room.service.ts":
/*!****************************************!*\
  !*** ./src/app/domain/room.service.ts ***!
  \****************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomService = /** @class */ (function () {
    function RoomService(afs) {
        this.afs = afs;
    }
    RoomService.prototype.getRooms = function () {
        return this.afs.collection('rooms').valueChanges();
    };
    RoomService.prototype.createRoom = function (name, password) {
        var date = new Date(Date.now());
        var newRoom = {
            id: this.toId(name),
            name: name,
            password: password,
            date: date
        };
        console.log(newRoom);
        return this.ref(newRoom.id).set(newRoom).then(function () { return newRoom; });
    };
    RoomService.prototype.doesRoomExist = function (name) {
        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(Date.now(), 'YYYY-MM-DD');
        var id = this.toId(name);
        return this.ref(id).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (s) { return s.exists; }));
    };
    RoomService.prototype.ref = function (roomId) {
        return this.afs.collection('rooms').doc(roomId);
    };
    RoomService.prototype.toId = function (name) {
        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(Date.now(), 'YYYY-MM-DD');
        return btoa(name.toLowerCase() + date);
    };
    RoomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/pages/create-password/create-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-password/create-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card class=\"section section__inputs\">\n  <div class=\"input\"></div>\n  <div class=\"input\"></div>\n  <div class=\"input\"></div>\n  <div class=\"input\"></div>\n</mat-card>\n<p>Skriv in lösenord</p>\n<mat-card class=\"section section__numpad\">\n  <button mat-fab class=\"button button__1\">1</button>\n  <button mat-fab class=\"button button__2\">2</button>\n  <button mat-fab class=\"button button__3\">3</button>\n  <button mat-fab class=\"button button__4\">4</button>\n  <button mat-fab class=\"button button__5\">5</button>\n  <button mat-fab class=\"button button__6\">6</button>\n  <button mat-fab class=\"button button__7\">7</button>\n  <button mat-fab class=\"button button__8\">8</button>\n  <button mat-fab class=\"button button__9\">9</button>\n  <button\n    mat-fab\n    class=\"button button__backspace\"\n  >\n    <\n  </button>\n  <button mat-fab class=\"button button__0\">0</button>\n  <button\n    mat-fab\n    class=\"button button__confirm\"\n    routerLink=\"/room_admin\"\n  >\n    >\n  </button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/create-password/create-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-password/create-password.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 1fr auto 3fr;\n      grid-template-rows: auto 1fr auto 3fr;\n  height: 100vh;\n  background-color: ivory; }\n\n.section__inputs {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.input {\n  border: 4px solid #222;\n  height: 3rem;\n  width: 3rem;\n  background-color: ivory; }\n\n.section__numpad {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr 10px 1fr 10px 1fr 10px 1fr;\n  -ms-grid-columns: auto 10px auto 10px auto;\n      grid-template: 1fr 1fr 1fr 1fr / auto auto auto;\n  grid-gap: 10px;\n  padding: 1rem 3rem; }\n\n.section__numpad .button {\n    -ms-grid-column-align: center;\n        justify-self: center;\n    font-size: 1.5rem;\n    border-radius: 50%; }\n\np {\n  display: flex;\n  justify-content: center;\n  font-family: 'Courgette', cursive;\n  font-size: 1.5rem;\n  text-shadow: 2px 2px 0px #ddd; }\n\n@media (orientation: landscape) {\n  p {\n    margin: 8px; }\n  .section__numpad {\n    -ms-grid-rows: 1fr 1fr;\n    -ms-grid-columns: auto auto auto auto auto auto auto;\n        grid-template: 1fr 1fr / auto auto auto auto auto auto auto; }\n    .section__numpad .button__1 {\n      -ms-grid-column: 2;\n      grid-column: 2;\n      -ms-grid-row: 1;\n      grid-row: 1; }\n    .section__numpad .button__2 {\n      -ms-grid-column: 3;\n      grid-column: 3;\n      -ms-grid-row: 1;\n      grid-row: 1; }\n    .section__numpad .button__3 {\n      -ms-grid-column: 4;\n      grid-column: 4;\n      -ms-grid-row: 1;\n      grid-row: 1; }\n    .section__numpad .button__4 {\n      -ms-grid-column: 5;\n      grid-column: 5;\n      -ms-grid-row: 1;\n      grid-row: 1; }\n    .section__numpad .button__5 {\n      -ms-grid-column: 6;\n      grid-column: 6;\n      -ms-grid-row: 1;\n      grid-row: 1; }\n    .section__numpad .button__6 {\n      -ms-grid-column: 2;\n      grid-column: 2;\n      -ms-grid-row: 2;\n      grid-row: 2; }\n    .section__numpad .button__7 {\n      -ms-grid-column: 3;\n      grid-column: 3;\n      -ms-grid-row: 2;\n      grid-row: 2; }\n    .section__numpad .button__8 {\n      -ms-grid-column: 4;\n      grid-column: 4;\n      -ms-grid-row: 2;\n      grid-row: 2; }\n    .section__numpad .button__9 {\n      -ms-grid-column: 5;\n      grid-column: 5;\n      -ms-grid-row: 2;\n      grid-row: 2; }\n    .section__numpad .button__backspace {\n      -ms-grid-column: 1;\n      grid-column: 1;\n      -ms-grid-row: 2;\n      grid-row: 2; }\n    .section__numpad .button__0 {\n      -ms-grid-column: 6;\n      grid-column: 6;\n      -ms-grid-row: 2;\n      grid-row: 2; }\n    .section__numpad .button__confirm {\n      -ms-grid-column: 7;\n      grid-column: 7;\n      -ms-grid-row: 2;\n      grid-row: 2; } }\n"

/***/ }),

/***/ "./src/app/pages/create-password/create-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/create-password/create-password.component.ts ***!
  \********************************************************************/
/*! exports provided: CreatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePasswordComponent", function() { return CreatePasswordComponent; });
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

var CreatePasswordComponent = /** @class */ (function () {
    function CreatePasswordComponent() {
    }
    CreatePasswordComponent.prototype.ngOnInit = function () {
    };
    CreatePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-password',
            template: __webpack_require__(/*! ./create-password.component.html */ "./src/app/pages/create-password/create-password.component.html"),
            styles: [__webpack_require__(/*! ./create-password.component.scss */ "./src/app/pages/create-password/create-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatePasswordComponent);
    return CreatePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-room/create-room.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-room/create-room.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form class=\"example-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <!-- <label>\n      Name of Room\n      <input type=\"text\" formControlName=\"roomName\">\n    </label>\n    <label>\n      Password\n      <input type=\"text\" formControlName=\"password\">\n    </label> -->\n    <div class=\"input\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Name of Room\" formControlName=\"roomName\">\n      </mat-form-field>\n      <!--<mat-spinner class=\"example-margin\" [diameter]=\"20\"></mat-spinner>-->\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n    <button mat-button type=\"submit\" [disabled]=\"!form.valid\" (click)=\"submitRoom()\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/create-room/create-room.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-room/create-room.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.input {\n  display: flex;\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/pages/create-room/create-room.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/create-room/create-room.component.ts ***!
  \************************************************************/
/*! exports provided: CreateRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomComponent", function() { return CreateRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain */ "./src/app/domain/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRoomComponent = /** @class */ (function () {
    function CreateRoomComponent(roomService, fb) {
        this.roomService = roomService;
        this.fb = fb;
        this.form = this.fb.group({
            roomName: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                Object(_domain__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(this.roomService)
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    CreateRoomComponent.prototype.ngOnInit = function () {
    };
    CreateRoomComponent.prototype.submitRoom = function () {
        this.roomService.createRoom(this.form.get('roomName').value, this.form.get('password').value);
    };
    CreateRoomComponent.prototype.onSubmit = function () {
        this.roomService.doesRoomExist(this.form.get('roomName').value);
    };
    CreateRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-room',
            template: __webpack_require__(/*! ./create-room.component.html */ "./src/app/pages/create-room/create-room.component.html"),
            styles: [__webpack_require__(/*! ./create-room.component.scss */ "./src/app/pages/create-room/create-room.component.scss")]
        }),
        __metadata("design:paramtypes", [_domain__WEBPACK_IMPORTED_MODULE_2__["RoomService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateRoomComponent);
    return CreateRoomComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Skapare: Aiman Josefsson</p>\n<p>2018</p>"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/footer/footer.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  font-family: 'Courgette', cursive;\n  background-color: #222;\n  color: ivory;\n  padding-bottom: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 4px; }\n\np {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/front-page/front-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/front-page/front-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<mat-card class=\"section section__input\">\n  <mat-form-field class=\"inputRoomName\">\n    <input matInput placeholder=\"Namn på Rum\" [formControl]=\"roomName\">\n  </mat-form-field>\n  <div\n    class=\"response-container\"\n  >\n    <mat-spinner\n    *ngIf=\"pending === 'PENDING'\"\n    class=\"example-margin\"\n    [diameter]=\"20\"\n    color=\"accent\"\n    ></mat-spinner>\n    <div class=\"response-container__text\" *ngIf=\"pending === 'VALID'\">Rummet är ledigt!</div>\n    <div class=\"response-container__text\" *ngIf=\"pending === 'INVALID'\">Rummet är skapat!</div>\n  </div>\n</mat-card>\n\n<p>Jag är en:</p>\n\n<button\n  [disabled]=\"pending !== 'VALID' || inputText.length === 0\"\n  mat-raised-button\n  class=\"section\"\n  routerLink=\"/password\"\n>\n  Rumskapare\n</button>\n<button\n  [disabled]=\"pending !== 'INVALID' || inputText.length === 0\"\n  mat-raised-button\n  class=\"section\"\n>\n  Aktör\n</button>\n<button\n  [disabled]=\"pending !== 'INVALID' || inputText.length === 0\"\n  mat-raised-button\n  class=\"section\"\n>\n  Publik\n</button>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/pages/front-page/front-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/front-page/front-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 5fr auto 5fr 5fr 5fr auto;\n      grid-template-rows: auto 5fr auto 5fr 5fr 5fr auto;\n  height: 100vh;\n  background-color: ivory; }\n\n.section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin: 4px 8px;\n  background-color: #fefefe; }\n\n.section .inputRoomName {\n    text-align: center; }\n\n.response-container {\n  height: 20px; }\n\n.response-container .response-container__text {\n    font-size: 1.2rem;\n    font-weight: 200;\n    color: #009000; }\n\np {\n  display: flex;\n  justify-content: center;\n  font-family: 'Courgette', cursive;\n  font-size: 1.5rem;\n  text-shadow: 2px 2px 0px #ddd; }\n\n@media (orientation: landscape) {\n  :host {\n    -ms-grid-rows: auto 1fr auto 1fr auto;\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template: auto 1fr auto 1fr auto / 1fr 1fr 1fr; }\n  app-header {\n    -ms-grid-row: 1;\n    grid-row: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-column: 1 / 4; }\n  .section__input {\n    -ms-grid-row: 2;\n    grid-row: 2;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-column: 1 / 4;\n    font-size: 18px; }\n  p {\n    -ms-grid-row: 3;\n    grid-row: 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-column: 1 / 4;\n    margin: 0;\n    padding: 4px; }\n  app-footer {\n    -ms-grid-row: 5;\n    grid-row: 5;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-column: 1 / 4; } }\n"

/***/ }),

/***/ "./src/app/pages/front-page/front-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/front-page/front-page.component.ts ***!
  \**********************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain */ "./src/app/domain/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent(roomService) {
        this.roomService = roomService;
        this.pending = '';
        this.inputText = '';
        this.roomName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_domain__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(this.roomService));
    }
    FrontPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomName.statusChanges.subscribe(function (status) {
            _this.pending = status;
        });
        this.roomName.valueChanges.subscribe(function (inputText) {
            _this.inputText = inputText;
        });
    };
    FrontPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-page',
            template: __webpack_require__(/*! ./front-page.component.html */ "./src/app/pages/front-page/front-page.component.html"),
            styles: [__webpack_require__(/*! ./front-page.component.scss */ "./src/app/pages/front-page/front-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_domain__WEBPACK_IMPORTED_MODULE_2__["RoomService"]])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ImproAppar: Repliker</h1>"

/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: #222;\n  display: block;\n  color: ivory;\n  height: 12vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 8px;\n  margin-bottom: 4px; }\n\nh1 {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"afAuth.user | async as user; else showLogin\">\n  <h1>Hello {{ user.displayName }}!</h1>\n  <button (click)=\"logout()\">Logout</button>\n  <app-create-room></app-create-room>\n  <app-room-list></app-room-list>\n</div>\n<ng-template #showLogin>\n  <p>Please login.</p>\n  <button (click)=\"login()\">Login with Google</button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(afAuth) {
        this.afAuth = afAuth;
    }
    LoginPageComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    LoginPageComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginPageComponent.prototype.logCurrentUser = function () {
        console.log(this.afAuth.auth);
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        // let ui = new firebaseui.auth.AuthUI(firebase.auth());
        // let uiConfig = {
        //   callbacks: {
        //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        //       // User successfully signed in.
        //       // Return type determines whether we continue the redirect automatically
        //       // or whether we leave that to developer to handle.
        //       return true;
        //     },
        //     uiShown: function() {
        //       // The widget is rendered.
        //       // Hide the loader.
        //       document.getElementById('loader').style.display = 'none';
        //     }
        //   },
        //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        //   signInFlow: 'popup',
        //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
        //   signInOptions: [
        //     // Leave the lines as is for the providers you want to offer your users.
        //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
        //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //     firebase.auth.PhoneAuthProvider.PROVIDER_ID
        //   ],
        //   // Terms of service url.
        //   tosUrl: '<your-tos-url>',
        //   // Privacy policy url.
        //   privacyPolicyUrl: '<your-privacy-policy-url>'
        // };
        // ui.start('#firebaseui-auth-container', uiConfig);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-login-page></app-login-page>-->\n<app-front-page></app-front-page>"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(afs) {
        this.afs = afs;
        var test = afs.collection('rooms').doc('iy9V4SqdEsjp5jV5ucm4').collection('lines');
        var lol = test.valueChanges();
        lol.subscribe(function (x) { return console.log(x); });
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/room-admin/room-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/room-admin/room-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<mat-card class=\"section\">\n  <div class=\"section__info\">\n    <div class=\"room\">Rum:</div>\n    <div class=\"room-value\">Amöban</div>\n    <div class=\"password\">Lösenord:</div>\n    <div class=\"password-value\">5555</div>\n  </div>\n</mat-card>\n<p> Aktuella repliker:</p>\n<mat-card class=\"section section__lines\">\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre, och vet du att hemma på min gata i stan där bor det en, faktiskt</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n    <div class=\"section__lines__line\">\n      <div>Jag vill inte vara din kompis längre</div>\n      <fa-icon icon=\"cut\"></fa-icon>\n    </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/room-admin/room-admin.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/room-admin/room-admin.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto auto auto 1fr;\n      grid-template-rows: auto auto auto 1fr;\n  background-color: ivory; }\n\n.section {\n  margin: 8px; }\n\n.section .section__info {\n    display: -ms-grid;\n    display: grid;\n    grid: auto auto / auto auto;\n    grid-gap: 8px; }\n\n.section .section__info .room, .section .section__info .password {\n      -ms-grid-column-align: end;\n          justify-self: end;\n      font-weight: 600; }\n\n.section__lines {\n  overflow: scroll; }\n\n.section__lines .section__lines__line {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr auto;\n        grid-template-columns: 1fr auto; }\n\n.section__lines .section__lines__line:not(:last-child) {\n    margin-bottom: 8px; }\n\np {\n  display: flex;\n  justify-content: center;\n  font-family: 'Courgette', cursive;\n  font-size: 1.5rem;\n  text-shadow: 2px 2px 0px #ddd; }\n\n@media (orientation: landscape) {\n  .section .section__info {\n    grid: 1fr / 1fr 1fr 1fr 1fr; }\n  .section__lines {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n    grid-column-gap: 2rem; }\n  p {\n    margin: 8px; } }\n"

/***/ }),

/***/ "./src/app/pages/room-admin/room-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/room-admin/room-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: RoomAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomAdminComponent", function() { return RoomAdminComponent; });
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

var RoomAdminComponent = /** @class */ (function () {
    function RoomAdminComponent() {
    }
    RoomAdminComponent.prototype.ngOnInit = function () {
    };
    RoomAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-admin',
            template: __webpack_require__(/*! ./room-admin.component.html */ "./src/app/pages/room-admin/room-admin.component.html"),
            styles: [__webpack_require__(/*! ./room-admin.component.scss */ "./src/app/pages/room-admin/room-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomAdminComponent);
    return RoomAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/room-list/room-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/room-list/room-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let room of rooms | async\">\n  {{room.name}}, {{room.id}}\n</p>\n"

/***/ }),

/***/ "./src/app/pages/room-list/room-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/room-list/room-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/room-list/room-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/room-list/room-list.component.ts ***!
  \********************************************************/
/*! exports provided: RoomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomListComponent", function() { return RoomListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain */ "./src/app/domain/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomListComponent = /** @class */ (function () {
    function RoomListComponent(roomService) {
        this.roomService = roomService;
        this.rooms = roomService.getRooms();
    }
    RoomListComponent.prototype.ngOnInit = function () {
    };
    RoomListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-list',
            template: __webpack_require__(/*! ./room-list.component.html */ "./src/app/pages/room-list/room-list.component.html"),
            styles: [__webpack_require__(/*! ./room-list.component.scss */ "./src/app/pages/room-list/room-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_domain__WEBPACK_IMPORTED_MODULE_1__["RoomService"]])
    ], RoomListComponent);
    return RoomListComponent;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyCwA_MNySu8iYZwzpkXt1HQERrxZhPn1AU',
        authDomain: 'lines-521aa.firebaseapp.com',
        databaseURL: 'https://lines-521aa.firebaseio.com',
        projectId: 'lines-521aa',
        storageBucket: 'lines-521aa.appspot.com',
        messagingSenderId: '601629839909'
    }
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

module.exports = __webpack_require__(/*! /Users/aiman/code/hobby/Lines/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map