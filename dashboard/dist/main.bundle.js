webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "div.grid-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (1fr)[6];\r\n      grid-template-columns: repeat(6, 1fr);\r\n  grid-auto-rows: minmax(400px, auto);\r\n}\r\n\r\ndiv.response-time-gauge {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-row-span: 2;\r\n  grid-row: 1/3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 2;\r\n  grid-column: 1/3;\r\n  z-index: 0;\r\n}\r\n\r\ndiv.percentiles-chart {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-row-span: 2;\r\n  grid-row: 1/3;\r\n  -ms-grid-column: 3;\r\n  -ms-grid-column-span: 4;\r\n  grid-column: 3/7;\r\n  z-index: 0;\r\n}\r\n\r\ndiv.error-summary {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 2/3;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1/2;\r\n  z-index: 2;\r\n}\r\n\r\ndiv.response-history {\r\n  -ms-grid-row: 2;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 2/3;\r\n  -ms-grid-column: 2;\r\n  -ms-grid-column-span: 5;\r\n  grid-column: 2/7;\r\n  z-index: 1;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div class=\"grid-wrapper\">\n  <div class=\"response-time-gauge\">\n    <app-response-time-gauge></app-response-time-gauge>\n  </div>\n  <div class=\"percentiles-chart\">\n    <app-percentiles-chart></app-percentiles-chart>\n  </div>\n  <div class=\"error-summary\">\n    <app-error-summary></app-error-summary>\n  </div>\n  <div class=\"response-history\">\n      <app-response-histogram></app-response-histogram>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dashboard Demo';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__response_time_gauge_response_time_gauge_component__ = __webpack_require__("./src/app/response-time-gauge/response-time-gauge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__percentiles_chart_percentiles_chart_component__ = __webpack_require__("./src/app/percentiles-chart/percentiles-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__response_histogram_response_histogram_component__ = __webpack_require__("./src/app/response-histogram/response-histogram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_summary_error_summary_component__ = __webpack_require__("./src/app/error-summary/error-summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__response_time_gauge_response_time_gauge_component__["a" /* ResponseTimeGaugeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__percentiles_chart_percentiles_chart_component__["a" /* PercentilesChartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__response_histogram_response_histogram_component__["a" /* ResponseHistogramComponent */],
                __WEBPACK_IMPORTED_MODULE_8__error_summary_error_summary_component__["a" /* ErrorSummaryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 15000);
        this.data = this.timer
            .flatMap(function (i) { return _this.http.get("/api/metrics/performance"); });
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/error-summary/error-summary.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error-summary/error-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"errors-big\">\n<p>\n  <em>{{ totalErrors }}</em> errors\n</p>\n</div>\n<div class=\"errors-detail\" *ngIf=\"totalErrors > 0\">\n<p>\n  Least reliable: <em>{{ leastReliableEndpoint.name }}</em> ({{ leastReliableEndpoint.amount }} errors)\n</p>\n<p>\n  Most reliable: <em>{{ mostReliableEndpoint.name }}</em> ({{ mostReliableEndpoint.amount }} errors)\n</p>\n<p>\n  Most common: <em>{{ mostCommonError.name }}</em> ({{mostCommonError.amount}} errors)\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/error-summary/error-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metric_by_key__ = __webpack_require__("./src/app/metric-by-key.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorSummaryComponent = /** @class */ (function () {
    function ErrorSummaryComponent(_data) {
        this._data = _data;
        this.leastReliableEndpoint = { name: "", amount: 0 };
        this.mostReliableEndpoint = { name: "", amount: 0 };
        this.mostCommonError = { name: "", amount: 0 };
        this.totalErrors = 0;
    }
    ErrorSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.data.subscribe(function (result) {
            _this.update(result);
        });
    };
    ErrorSummaryComponent.prototype.update = function (data) {
        if (data.errors) {
            this.totalErrors = data.errors.reduce(function (acc, cur) { return acc + cur.total; }, 0);
            var errorsByRoute = [];
            for (var _i = 0, _a = data.errors; _i < _a.length; _i++) {
                var e = _a[_i];
                for (var _b = 0, _c = e.routes; _b < _c.length; _b++) {
                    var r = _c[_b];
                    if (!errorsByRoute[r.route]) {
                        errorsByRoute[r.route] = { route: r.route, errors: r.errors };
                    }
                    else {
                        errorsByRoute[r.route].errors = errorsByRoute[r.route].errors + r.errors;
                    }
                }
            }
            var mostErrors = -1;
            var leastErrors = 2147483647;
            var failureFreeEndpoint = data.response_times_by_endpoint.filter(function (x) { return !errorsByRoute[x.route]; })[0];
            if (failureFreeEndpoint) {
                leastErrors = 0;
                this.mostReliableEndpoint = new __WEBPACK_IMPORTED_MODULE_1__metric_by_key__["a" /* MetricByKey */](failureFreeEndpoint.route, 0);
            }
            // Typescript `of` doesn't work on associative arrays
            for (var r in errorsByRoute) {
                if (errorsByRoute[r].errors > mostErrors) {
                    this.leastReliableEndpoint = new __WEBPACK_IMPORTED_MODULE_1__metric_by_key__["a" /* MetricByKey */](errorsByRoute[r].route, errorsByRoute[r].errors);
                    mostErrors = errorsByRoute[r].errors;
                }
                if (errorsByRoute[r].errors < leastErrors) {
                    this.mostReliableEndpoint = new __WEBPACK_IMPORTED_MODULE_1__metric_by_key__["a" /* MetricByKey */](errorsByRoute[r].route, errorsByRoute[r].errors);
                    leastErrors = errorsByRoute[r].errors;
                }
            }
            var mostCommonError = data.errors.sort(function (a, b) { return b.total - a.total; })[0];
            if (mostCommonError) {
                this.mostCommonError = new __WEBPACK_IMPORTED_MODULE_1__metric_by_key__["a" /* MetricByKey */](mostCommonError.error, mostCommonError.total);
            }
        }
    };
    ErrorSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-error-summary',
            template: __webpack_require__("./src/app/error-summary/error-summary.component.html"),
            styles: [__webpack_require__("./src/app/error-summary/error-summary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ErrorSummaryComponent);
    return ErrorSummaryComponent;
}());



/***/ }),

/***/ "./src/app/metric-by-key.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricByKey; });
var MetricByKey = /** @class */ (function () {
    function MetricByKey(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return MetricByKey;
}());



/***/ }),

/***/ "./src/app/percentiles-chart/percentiles-chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/percentiles-chart/percentiles-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div #chart>\n</div>"

/***/ }),

/***/ "./src/app/percentiles-chart/percentiles-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercentilesChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js__ = __webpack_require__("./node_modules/plotly.js/dist/plotly-cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PercentilesChartComponent = /** @class */ (function () {
    function PercentilesChartComponent(_data) {
        this._data = _data;
    }
    PercentilesChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.data.subscribe(function (result) {
            _this.metrics = result;
            _this.updateGraph();
        });
    };
    PercentilesChartComponent.prototype.getGraphData = function () {
        return [{
                type: "bar",
                x: this.metrics.response_times_by_endpoint.map(function (r) { return r.p_50; }),
                y: this.metrics.response_times_by_endpoint.map(function (r) { return r.route; }),
                name: "50th percentile",
                marker: {
                    color: "rgba(0,127,0,0.5)",
                    width: 1
                },
                orientation: "h"
            },
            {
                type: "bar",
                x: this.metrics.response_times_by_endpoint.map(function (r) { return r.p_90 - r.p_50; }),
                y: this.metrics.response_times_by_endpoint.map(function (r) { return r.route; }),
                name: "50th-90th percentile",
                marker: {
                    color: "rgba(255,255,0,0.5)",
                    width: 1
                },
                orientation: "h"
            },
            {
                type: "bar",
                x: this.metrics.response_times_by_endpoint.map(function (r) { return r.p_99 - r.p_90; }),
                y: this.metrics.response_times_by_endpoint.map(function (r) { return r.route; }),
                name: "90th-99th percentile",
                marker: {
                    color: "rgba(255,0,0,0.5)",
                    width: 1
                },
                orientation: "h"
            }];
    };
    PercentilesChartComponent.prototype.getLayout = function () {
        return {
            title: "Response Times by Endpoint",
            barmode: "stack"
        };
    };
    PercentilesChartComponent.prototype.updateGraph = function () {
        var element = this.el.nativeElement;
        if (this.metrics) {
            var response_time = this.metrics.median_response_time;
            __WEBPACK_IMPORTED_MODULE_1_plotly_js__["newPlot"](element, this.getGraphData(), this.getLayout());
        }
        else {
            element.text = "No data";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])("chart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], PercentilesChartComponent.prototype, "el", void 0);
    PercentilesChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-percentiles-chart',
            template: __webpack_require__("./src/app/percentiles-chart/percentiles-chart.component.html"),
            styles: [__webpack_require__("./src/app/percentiles-chart/percentiles-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], PercentilesChartComponent);
    return PercentilesChartComponent;
}());



/***/ }),

/***/ "./src/app/response-histogram/response-histogram.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/response-histogram/response-histogram.component.html":
/***/ (function(module, exports) {

module.exports = "<div #chart>\n</div>"

/***/ }),

/***/ "./src/app/response-histogram/response-histogram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseHistogramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js__ = __webpack_require__("./node_modules/plotly.js/dist/plotly-cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseHistogramComponent = /** @class */ (function () {
    function ResponseHistogramComponent(_data) {
        this._data = _data;
    }
    ResponseHistogramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.data.subscribe(function (result) {
            _this.metrics = result;
            _this.updateGraph();
        });
    };
    ResponseHistogramComponent.prototype.getGraphData = function () {
        return [{
                type: "scatter",
                mode: "lines",
                name: "Average Duration (ms)",
                x: this.metrics.response_time_history.map(function (m) { return m.timestamp; }),
                y: this.metrics.response_time_history.map(function (m) { return m.average_duration; }),
                line: { color: "#7F7F7F" }
            }];
    };
    ResponseHistogramComponent.prototype.getLayout = function () {
        return {
            title: "Response Time History"
        };
    };
    ResponseHistogramComponent.prototype.updateGraph = function () {
        var element = this.el.nativeElement;
        if (this.metrics) {
            var response_time = this.metrics.median_response_time;
            __WEBPACK_IMPORTED_MODULE_1_plotly_js__["newPlot"](element, this.getGraphData(), this.getLayout());
        }
        else {
            element.text = "No data";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])("chart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ResponseHistogramComponent.prototype, "el", void 0);
    ResponseHistogramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-response-histogram',
            template: __webpack_require__("./src/app/response-histogram/response-histogram.component.html"),
            styles: [__webpack_require__("./src/app/response-histogram/response-histogram.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ResponseHistogramComponent);
    return ResponseHistogramComponent;
}());



/***/ }),

/***/ "./src/app/response-time-gauge/response-time-gauge.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/response-time-gauge/response-time-gauge.component.html":
/***/ (function(module, exports) {

module.exports = "<div #chart>\n</div>"

/***/ }),

/***/ "./src/app/response-time-gauge/response-time-gauge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseTimeGaugeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js__ = __webpack_require__("./node_modules/plotly.js/dist/plotly-cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_plotly_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_plotly_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseTimeGaugeComponent = /** @class */ (function () {
    function ResponseTimeGaugeComponent(_data) {
        this._data = _data;
        this.chart_degrees = 220;
    }
    ResponseTimeGaugeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.data.subscribe(function (result) {
            _this.metrics = result;
            _this.updateGraph();
        });
    };
    ResponseTimeGaugeComponent.prototype.getPath = function (response_time) {
        var degrees = ((this.chart_degrees / 2) + 90) - ((response_time * this.chart_degrees) / 1000);
        var radius = 0.5;
        var radians = degrees * Math.PI / 180;
        var x = radius * Math.cos(radians);
        var y = radius * Math.sin(radians);
        var mainPath = "M -.0 -0.025 L .0 0.025 L ";
        var path = mainPath.concat(String(x), " ", String(y), " Z");
        return path;
    };
    ResponseTimeGaugeComponent.prototype.getGraphData = function (response_time) {
        return [
            {
                type: "scatter",
                x: [0],
                y: [0],
                marker: { size: 28, color: "333333" },
                showlegend: false,
                name: "ms",
                text: response_time,
                hoverinfo: "text+name"
            },
            {
                type: "pie",
                values: [(this.chart_degrees / 3), (this.chart_degrees / 24), (this.chart_degrees / 3) - ((this.chart_degrees / 12)), (this.chart_degrees / 24), (this.chart_degrees / 3), 360 - this.chart_degrees],
                rotation: -(this.chart_degrees / 2),
                sort: false,
                direction: "clockwise",
                text: ["Good", "", "Average", "", "Poor", ""],
                textinfo: "text",
                textposition: "inside",
                marker: { colors: [
                        "rgba(0,127,0,.5)",
                        "rgba(127,192,0,.5)",
                        "rgba(255,255,0,.5)",
                        "rgba(255,127,0,.5)",
                        "rgba(255,0,0,.5)",
                        "rgba(255,255,255,1)"
                    ] },
                labels: ["0-333", "", "333-667", "", "667-1000", ""],
                hoverinfo: "label",
                hole: 0.5,
                showlegend: false
            }
        ];
    };
    ResponseTimeGaugeComponent.prototype.getLayout = function (response_time) {
        var path = this.getPath(response_time);
        return {
            shapes: [{
                    type: "path",
                    path: path,
                    fillcolor: "555555",
                    line: {
                        color: "444444"
                    }
                }],
            title: "Median Response Time: " + Math.round(response_time) + "ms",
            height: 600,
            width: 600,
            xaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1] },
            yaxis: { zeroline: false, showticklabels: false, showgrid: false, range: [-1, 1] }
        };
    };
    ResponseTimeGaugeComponent.prototype.updateGraph = function () {
        var element = this.el.nativeElement;
        if (this.metrics) {
            var response_time = this.metrics.median_response_time;
            __WEBPACK_IMPORTED_MODULE_1_plotly_js__["newPlot"](element, this.getGraphData(response_time), this.getLayout(response_time));
        }
        else {
            element.text = "No data";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])("chart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ResponseTimeGaugeComponent.prototype, "el", void 0);
    ResponseTimeGaugeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-response-time-gauge',
            template: __webpack_require__("./src/app/response-time-gauge/response-time-gauge.component.html"),
            styles: [__webpack_require__("./src/app/response-time-gauge/response-time-gauge.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ResponseTimeGaugeComponent);
    return ResponseTimeGaugeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map