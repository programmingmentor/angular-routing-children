webpackJsonp([0],{

/***/ "../../../../../src/app/child/child-root/child-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/child/child-root/child-root.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  child-root works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/child/child-root/child-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildRootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildRootComponent = (function () {
    function ChildRootComponent() {
    }
    ChildRootComponent.prototype.ngOnInit = function () {
    };
    return ChildRootComponent;
}());
ChildRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-child-root',
        template: __webpack_require__("../../../../../src/app/child/child-root/child-root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/child/child-root/child-root.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChildRootComponent);

//# sourceMappingURL=child-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/child/child.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__child_root_child_root_component__ = __webpack_require__("../../../../../src/app/child/child-root/child-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grand_child_grand_child_component__ = __webpack_require__("../../../../../src/app/child/grand-child/grand-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grand_child_with_param_grand_child_with_param_component__ = __webpack_require__("../../../../../src/app/child/grand-child-with-param/grand-child-with-param.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildModule", function() { return ChildModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__child_root_child_root_component__["a" /* ChildRootComponent */] },
    { path: 'grand', component: __WEBPACK_IMPORTED_MODULE_4__grand_child_grand_child_component__["a" /* GrandChildComponent */],
        children: [
            { path: ':param', component: __WEBPACK_IMPORTED_MODULE_5__grand_child_with_param_grand_child_with_param_component__["a" /* GrandChildWithParamComponent */] }
        ] },
];
var ChildModule = (function () {
    function ChildModule() {
    }
    return ChildModule;
}());
ChildModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__child_root_child_root_component__["a" /* ChildRootComponent */], __WEBPACK_IMPORTED_MODULE_4__grand_child_grand_child_component__["a" /* GrandChildComponent */], __WEBPACK_IMPORTED_MODULE_5__grand_child_with_param_grand_child_with_param_component__["a" /* GrandChildWithParamComponent */]]
    })
], ChildModule);

//# sourceMappingURL=child.module.js.map

/***/ }),

/***/ "../../../../../src/app/child/grand-child-with-param/grand-child-with-param.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/child/grand-child-with-param/grand-child-with-param.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  grand-child-with-param works!\n</p>\n<p>param value: {{ param }}</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/child/grand-child-with-param/grand-child-with-param.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrandChildWithParamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrandChildWithParamComponent = (function () {
    function GrandChildWithParamComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (params) {
            _this.param = params['param'];
        });
    }
    GrandChildWithParamComponent.prototype.ngOnInit = function () {
    };
    return GrandChildWithParamComponent;
}());
GrandChildWithParamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-grand-child-with-param',
        template: __webpack_require__("../../../../../src/app/child/grand-child-with-param/grand-child-with-param.component.html"),
        styles: [__webpack_require__("../../../../../src/app/child/grand-child-with-param/grand-child-with-param.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], GrandChildWithParamComponent);

var _a;
//# sourceMappingURL=grand-child-with-param.component.js.map

/***/ }),

/***/ "../../../../../src/app/child/grand-child/grand-child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/child/grand-child/grand-child.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  grand-child works!\n</p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/child/grand-child/grand-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrandChildComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrandChildComponent = (function () {
    function GrandChildComponent() {
    }
    GrandChildComponent.prototype.ngOnInit = function () {
    };
    return GrandChildComponent;
}());
GrandChildComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'app-grand-child',
        template: __webpack_require__("../../../../../src/app/child/grand-child/grand-child.component.html"),
        styles: [__webpack_require__("../../../../../src/app/child/grand-child/grand-child.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GrandChildComponent);

//# sourceMappingURL=grand-child.component.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map