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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "example-container {\n  display: inline-block;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n#suprButton {\n  background-color: red;\n}\n\n#descInput {\n  list-style-image: none !important;\n  list-style: none !important;\n  list-style-type: none !important;\n}\n\n#coefInput {\n  width:72px !important;\n}\n\n#bottomButtons {\n  width: 100px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\n<mat-toolbar color=\"primary\">\n  <span>Make my choice</span>\n</mat-toolbar>\n<h2>What's on your mind ?</h2>\n\n<div class=\"example-container\">\n  <mat-slide-toggle (change)=\"onSlideChange($event)\">Add coef</mat-slide-toggle>\n  <br>\n</div>\n\n\n<div>\n  <ul id=\"descInput\">\n    <li *ngFor=\"let choice of choices\">\n      <mat-form-field>\n        <input matInput placeholder=\"Choice {{choice.id}}\" [(ngModel)]=\"choice.description\">\n      </mat-form-field>\n      &nbsp;\n      &nbsp;\n      &nbsp;\n      &nbsp;\n      <mat-form-field *ngIf=\"showCoef\" id=\"coefInput\">\n        <input matInput type=\"number\" min=\"1\" placeholder=\"Coef {{choice.id}}\" [(ngModel)]=\"choice.coefficient\">\n      </mat-form-field>\n      &nbsp;\n      &nbsp;\n      <button mat-mini-fab id=\"suprButton\" (click)=\"onSupressChoice(choice.id)\">x</button>\n    </li>\n  </ul>\n</div>\n<div>\n  <button mat-mini-fab (click)=\"onAddChoice()\">+</button>\n</div>\n<br>\n<br>\n<div>\n  <button id=\"bottomButtons\" mat-stroked-button (click)=\"onCalculate()\">Calculate</button>\n  <button id=\"bottomButtons\" mat-stroked-button (click)=\"onReset()\">Reset</button>\n</div>\n\n<br>\n<div *ngIf=\"showChoice\">\n  <span> Your choice is : </span>\n  <br>\n  <span>{{finalChoice}}</span>\n</div>\n\n"

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
/* harmony import */ var _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beans/choice/choice.component */ "./src/app/beans/choice/choice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.choices = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.choices = [];
        this.nbChoice = 0;
        this.nbChoice++;
        var firstChoice = new _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_1__["ChoiceComponent"];
        firstChoice.id = this.nbChoice;
        this.choices[this.nbChoice - 1] = firstChoice;
        this.showChoice = false;
    };
    AppComponent.prototype.onSlideChange = function (ob) {
        ob.checked ? this.showCoef = true : this.showCoef = false;
        if (!this.showCoef) {
            for (var h = 0; h < this.choices.length; h++) {
                this.choices[h].coefficient = null;
            }
        }
    };
    AppComponent.prototype.onAddChoice = function (choice) {
        this.nbChoice++;
        var newChoice = new _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_1__["ChoiceComponent"];
        newChoice.id = this.nbChoice;
        this.choices[this.nbChoice - 1] = newChoice;
    };
    AppComponent.prototype.onSupressChoice = function (id) {
        console.log(id);
        console.log(this.choices);
        // var realId = id - 1;
        this.choices.splice(this.choices.indexOf(id), 1);
        this.nbChoice--;
    };
    AppComponent.prototype.onCalculate = function () {
        var sumCoef = 0;
        var coefList = [];
        // Sum of the coeffs
        for (var j = 0; j < this.choices.length; j++) {
            this.choices[j].coefficient = +this.choices[j].coefficient;
            sumCoef = sumCoef + this.choices[j].coefficient;
        }
        if (!isNaN(sumCoef) && sumCoef != 0) {
            // We are on a coefficiented list
            // First we set all coef at list at 1
            for (var h = 0; h < this.choices.length; h++) {
                if (isNaN(this.choices[h].coefficient)) {
                    this.choices[h].coefficient = 1;
                }
            }
            var resultListSize = 0;
            for (var k = 0; k < this.choices.length; k++) {
                if (!isNaN(this.choices[k].coefficient) && this.choices[k].coefficient != null) {
                    for (var l = 0; l < this.choices[k].coefficient; l++) {
                        coefList[resultListSize] = this.choices[k].id;
                        resultListSize++;
                    }
                }
            }
            // Random on coefList
            var result = Math.ceil(Math.random() * (coefList.length));
            var resultId = coefList[result - 1];
            this.finalChoice = this.choices[resultId - 1].description;
            this.showChoice = true;
        }
        else {
            // We are on a non coefficiented list
            var result = Math.ceil(Math.random() * (this.choices.length));
            this.finalChoice = this.choices[result - 1].description;
            if (this.choices[result - 1].description != "" && this.choices[result - 1].description != undefined) {
                this.showChoice = true;
            }
        }
    };
    AppComponent.prototype.onReset = function () {
        this.choices = [];
        this.nbChoice = 0;
        this.nbChoice++;
        var firstChoice = new _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_1__["ChoiceComponent"];
        firstChoice.id = this.nbChoice;
        this.choices[this.nbChoice - 1] = firstChoice;
        this.finalChoice = "";
        this.showChoice = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_1__["ChoiceComponent"])
    ], AppComponent.prototype, "choice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AppComponent.prototype, "change", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beans/choice/choice.component */ "./src/app/beans/choice/choice.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import {RouterModule, Routes} from '@angular/router';
// const appRoutes: Routes = [
//   { path : 'results', component: ResultsComponent }
// ]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _beans_choice_choice_component__WEBPACK_IMPORTED_MODULE_5__["ChoiceComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"]
                // RouterModule.forRoot(
                //   appRoutes
                // )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beans/choice/choice.component.css":
/*!***************************************************!*\
  !*** ./src/app/beans/choice/choice.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/beans/choice/choice.component.html":
/*!****************************************************!*\
  !*** ./src/app/beans/choice/choice.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  choice works!\n</p>\n"

/***/ }),

/***/ "./src/app/beans/choice/choice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/beans/choice/choice.component.ts ***!
  \**************************************************/
/*! exports provided: ChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceComponent", function() { return ChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChoiceComponent = /** @class */ (function () {
    function ChoiceComponent() {
    }
    ChoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choice',
            template: __webpack_require__(/*! ./choice.component.html */ "./src/app/beans/choice/choice.component.html"),
            styles: [__webpack_require__(/*! ./choice.component.css */ "./src/app/beans/choice/choice.component.css")]
        })
    ], ChoiceComponent);
    return ChoiceComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  results works!\n</p>\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
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

var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hadrien/Documents/Divers/Projects/make-my-choice/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map