(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\" style=\"background-color: #afdcfc;\">\n  <a routerLink=\"/\" class=\"btn btn-outline-dark\">Blockchain Project</a>\n\n  <div>\n    <button class=\"btn btn-outline-dark\" routerLink=\"/settings\">\n      Settings\n    </button>\n    &nbsp;\n    <button class=\"btn btn-outline-dark\" routerLink=\"/create-new\">\n      New Data\n    </button>\n    &nbsp;\n    <button class=\"btn btn-outline-dark\" routerLink=\"/pending\">\n      Pending...\n    </button>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/block-view/block-view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block-view/block-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      Block\n      <small class=\"text-muted\" *ngIf=\"block.previousHash == 0\"\n        >(Genesis block)</small\n      >\n    </h5>\n  </div>\n\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <span class=\"\">Hash</span>\n      <br />\n      <div\n        class=\"text-truncate\"\n        [style.color]=\"'#' + block.hash.substring(0, 6)\"\n      >\n        <small>{{ block.hash }}</small>\n      </div>\n\n      <br />\n      <span class=\"\">Hash of previous block</span>\n      <br />\n\n      <div\n        class=\"text-truncate\"\n        [style.color]=\"'#' + block.previousHash.substring(0, 6)\"\n      >\n        <small>{{ block.previousHash }}</small>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\">\n      <span class=\"\">Nonce</span><br />\n      <div class=\"text-truncate text-muted\">\n        <small>{{ block.nonce }}</small>\n      </div>\n    </li>\n\n    <li class=\"list-group-item\">\n      <span class=\"\">Timestamp</span><br />\n      <div class=\"text-truncate text-muted\">\n        <small>{{ block.timestamp }}</small>\n      </div>\n    </li>\n  </ul>\n\n  <!-- <div class=\"card-body\"> -->\n  <!-- <span class=\"card-link\" *ngIf=\"!blockHasTx()\">Block has no data</span> -->\n  <!-- <span class=\"card-link\" *ngIf=\"blockHasTx()\">Contains {{block.data.length}} data</span> -->\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain-views/blockchain-views.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain-views/blockchain-views.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blockchain-body\">\n  <div class=\"row\">\n    <div class=\"col col-lg\">\n      <div class=\"container blocks-container\">\n        <h1>Blocks on chain</h1>\n        <p>Each block click to check the individual block</p>\n        <app-block-view\n          class=\"block-view\"\n          *ngFor=\"let block of blocks\"\n          [block]=\"block\"\n          (click)=\"showData(block)\"\n        >\n        </app-block-view>\n      </div>\n\n      <br />\n      <br />\n    </div>\n    <div class=\"col col-lg\">\n      <div class=\"container\">\n        <h1>Data Table</h1>\n        <app-data-table [metadata]=\"selectedBlock.data\"> </app-data-table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-data/create-data.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-data/create-data.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Create new Data</h1>\n  <br />\n\n  <div class=\"form-group\">\n    <label for=\"fromAddress\">From address</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      id=\"fromAddress\"\n      [(ngModel)]=\"walletKey.publicKey\"\n      disabled\n    />\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"toAddress\">To address</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      id=\"toAddress\"\n      [(ngModel)]=\"newDt.toAddress\"\n    />\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"amount\">Amount</label>\n    <input\n      type=\"number\"\n      class=\"form-control\"\n      id=\"amount\"\n      [(ngModel)]=\"newDt.amount\"\n    />\n  </div>\n\n  <button\n    (click)=\"createData()\"\n    type=\"submit\"\n    class=\"btn btn-outline-dark\"\n    routerLink=\"/pending\"\n  >\n    Sign & create Data\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-table/data-table.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-table/data-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"metadata.length === 0\">there is no Metadata!</p>\n\n<table class=\"table table-hover table-striped\" *ngIf=\"metadata.length > 0\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">From</th>\n      <th scope=\"col\">To</th>\n      <th scope=\"col\">Amount</th>\n      <th scope=\"col\">Timestamp</th>\n      <th scope=\"col\">Valid?</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let tx of metadata; index as index\">\n      <td>{{ index }}</td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n        {{ tx.fromAddress }}\n\n        <span *ngIf=\"tx.fromAddress === null\">System</span>\n      </td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n        {{ tx.toAddress }}\n      </td>\n      <td>\n        {{ tx.amount }}\n        <span *ngIf=\"tx.fromAddress === null\" class=\"text-muted\"\n          ><br /><small>(Block reward)</small></span\n        >\n      </td>\n      <td>\n        {{ tx.timestamp }}<br />\n        <span class=\"text-muted\"\n          ><small>{{ tx.timestamp | date: 'MMM d, y, h:mm:ss a' }}</small></span\n        >\n      </td>\n      <td style=\"max-width: 40px;\">\n        <span *ngIf=\"tx.isValid()\">✓</span>\n        <span *ngIf=\"!tx.isValid()\">✗</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pending-data/pending-data.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pending-data/pending-data.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Pending Data</h1>\n  <app-data-table [metadata]=\"pendingData\"></app-data-table>\n\n  <button\n    class=\"btn btn-outline-dark\"\n    (click)=\"minePendingData()\"\n    routerLink=\"/\"\n    *ngIf=\"pendingData.length > 0\"\n  >\n    Start Mining\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Settings</h1>\n\n  <br />\n  <div class=\"form-group\">\n    <label for=\"difficulty\">Difficulty</label>\n    <input\n      id=\"difficulty\"\n      type=\"number\"\n      class=\"form-control\"\n      [(ngModel)]=\"blockchain.difficulty\"\n    />\n    <p>\n      <small class=\"text-secondary\"\n        >Using a difficulty above > 4 is going to considerably slow the the\n        production of blocks</small\n      >\n    </p>\n  </div>\n  <br />\n  <div class=\"form-group\">\n    <label for=\"mining-reward\">Mining Reward</label>\n    <input\n      type=\"number\"\n      id=\"mining-reward\"\n      class=\"form-control\"\n      [(ngModel)]=\"blockchain.miningReward\"\n    />\n  </div>\n</div>\n"

/***/ }),

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _blockchain_views_blockchain_views_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockchain-views/blockchain-views.component */ "./src/app/blockchain-views/blockchain-views.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _create_data_create_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-data/create-data.component */ "./src/app/create-data/create-data.component.ts");
/* harmony import */ var _pending_data_pending_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-data/pending-data.component */ "./src/app/pending-data/pending-data.component.ts");







const routes = [
    {
        path: '',
        component: _blockchain_views_blockchain_views_component__WEBPACK_IMPORTED_MODULE_3__["BlockchainViewsComponent"]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    },
    {
        path: 'create-new',
        component: _create_data_create_data_component__WEBPACK_IMPORTED_MODULE_5__["CreateDataComponent"]
    },
    {
        path: 'pending',
        component: _pending_data_pending_data_component__WEBPACK_IMPORTED_MODULE_6__["PendingDataComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'blockchain-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blockchain_views_blockchain_views_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blockchain-views/blockchain-views.component */ "./src/app/blockchain-views/blockchain-views.component.ts");
/* harmony import */ var _block_view_block_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-view/block-view.component */ "./src/app/block-view/block-view.component.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/data-table/data-table.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _create_data_create_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-data/create-data.component */ "./src/app/create-data/create-data.component.ts");
/* harmony import */ var _pending_data_pending_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pending-data/pending-data.component */ "./src/app/pending-data/pending-data.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _blockchain_views_blockchain_views_component__WEBPACK_IMPORTED_MODULE_6__["BlockchainViewsComponent"],
            _block_view_block_view_component__WEBPACK_IMPORTED_MODULE_7__["BlockViewComponent"],
            _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
            _create_data_create_data_component__WEBPACK_IMPORTED_MODULE_10__["CreateDataComponent"],
            _pending_data_pending_data_component__WEBPACK_IMPORTED_MODULE_11__["PendingDataComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/block-view/block-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/block-view/block-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 500px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #eefcff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvYmxvY2tjaGFpbi1hbmd1bGFyL3NyYy9hcHAvYmxvY2stdmlldy9ibG9jay12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLXZpZXcvYmxvY2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjUyLCAyNTUpO1xufVxuIiwiLmNhcmQge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmY2ZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/block-view/block-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-view/block-view.component.ts ***!
  \****************************************************/
/*! exports provided: BlockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockViewComponent", function() { return BlockViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockViewComponent = class BlockViewComponent {
    constructor() {
        this.isClicked = false;
        setTimeout(() => {
            console.log('from block-view component => ', this.block);
        }, 2000);
    }
    handleClick() {
        this.isClicked = !this.isClicked;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockViewComponent.prototype, "block", void 0);
BlockViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-view',
        template: __webpack_require__(/*! raw-loader!./block-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/block-view/block-view.component.html"),
        styles: [__webpack_require__(/*! ./block-view.component.scss */ "./src/app/block-view/block-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockViewComponent);



/***/ }),

/***/ "./src/app/blockchain-views/blockchain-views.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/blockchain-views/blockchain-views.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blockchain-body {\n  margin-bottom: 100px;\n}\n\n.blocks-container {\n  text-align: center;\n}\n\nh1 {\n  padding: 20px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvYmxvY2tjaGFpbi1hbmd1bGFyL3NyYy9hcHAvYmxvY2tjaGFpbi12aWV3cy9ibG9ja2NoYWluLXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ja2NoYWluLXZpZXdzL2Jsb2NrY2hhaW4tdmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tjaGFpbi12aWV3cy9ibG9ja2NoYWluLXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrY2hhaW4tYm9keSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmJsb2Nrcy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmJsb2NrY2hhaW4tYm9keSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uYmxvY2tzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blockchain-views/blockchain-views.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/blockchain-views/blockchain-views.component.ts ***!
  \****************************************************************/
/*! exports provided: BlockchainViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainViewsComponent", function() { return BlockchainViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let BlockchainViewsComponent = class BlockchainViewsComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.selectedBlock = null;
        this.blocks = blockchainService.getBlocks();
        this.selectedBlock = this.blocks[0];
    }
    ngOnInit() { }
    showData(block) {
        this.selectedBlock = block;
    }
};
BlockchainViewsComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
BlockchainViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockchain-views',
        template: __webpack_require__(/*! raw-loader!./blockchain-views.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain-views/blockchain-views.component.html"),
        styles: [__webpack_require__(/*! ./blockchain-views.component.scss */ "./src/app/blockchain-views/blockchain-views.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], BlockchainViewsComponent);



/***/ }),

/***/ "./src/app/create-data/create-data.component.scss":
/*!********************************************************!*\
  !*** ./src/app/create-data/create-data.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding: 20px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvYmxvY2tjaGFpbi1hbmd1bGFyL3NyYy9hcHAvY3JlYXRlLWRhdGEvY3JlYXRlLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS1kYXRhL2NyZWF0ZS1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZGF0YS9jcmVhdGUtZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJoMSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/create-data/create-data.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-data/create-data.component.ts ***!
  \******************************************************/
/*! exports provided: CreateDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDataComponent", function() { return CreateDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




let CreateDataComponent = class CreateDataComponent {
    constructor(blockchainService, dataService) {
        this.blockchainService = blockchainService;
        this.dataService = dataService;
        this.walletKey = blockchainService.walletKeys[0];
        this.newDt = dataService.dataInstance;
    }
    ngOnInit() { }
    createData() {
        this.newDt.fromAddress = this.walletKey.publicKey;
        this.newDt.signData(this.walletKey.keyObj);
        this.blockchainService.addData(this.newDt);
        this.newDt = this.dataService.dataInstance;
        console.log('create-data component: New data ===> ', this.newDt);
        console.log('create-data component: Validation ===> ', this.newDt.isValid());
        console.log('create-data component: Wallet key ===> ', this.walletKey);
    }
};
CreateDataComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
CreateDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-data',
        template: __webpack_require__(/*! raw-loader!./create-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-data/create-data.component.html"),
        styles: [__webpack_require__(/*! ./create-data.component.scss */ "./src/app/create-data/create-data.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], CreateDataComponent);



/***/ }),

/***/ "./src/app/data-table/data-table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/data-table/data-table.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/data-table/data-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/data-table/data-table.component.ts ***!
  \****************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let DataTableComponent = class DataTableComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.metadata = [];
    }
    ngOnInit() {
        setTimeout(() => {
            console.log('metadata from data-table component => ', this.metadata);
        }, 2000);
    }
};
DataTableComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], DataTableComponent.prototype, "metadata", void 0);
DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-table',
        template: __webpack_require__(/*! raw-loader!./data-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-table/data-table.component.html"),
        styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/data-table/data-table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], DataTableComponent);



/***/ }),

/***/ "./src/app/pending-data/pending-data.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pending-data/pending-data.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding: 20px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvYmxvY2tjaGFpbi1hbmd1bGFyL3NyYy9hcHAvcGVuZGluZy1kYXRhL3BlbmRpbmctZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGVuZGluZy1kYXRhL3BlbmRpbmctZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGVuZGluZy1kYXRhL3BlbmRpbmctZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJoMSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pending-data/pending-data.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pending-data/pending-data.component.ts ***!
  \********************************************************/
/*! exports provided: PendingDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingDataComponent", function() { return PendingDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let PendingDataComponent = class PendingDataComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.pendingData = [];
        this.pendingData = blockchainService.getPendingData();
    }
    ngOnInit() { }
    minePendingData() {
        this.blockchainService.minePendingData();
    }
};
PendingDataComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
PendingDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-data',
        template: __webpack_require__(/*! raw-loader!./pending-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/pending-data/pending-data.component.html"),
        styles: [__webpack_require__(/*! ./pending-data.component.scss */ "./src/app/pending-data/pending-data.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], PendingDataComponent);



/***/ }),

/***/ "./src/app/services/blockchain.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/blockchain.service.ts ***!
  \************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/blockchain.js */ "./src/assets/blockchain.js");
/* harmony import */ var _assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);




let BlockchainService = class BlockchainService {
    constructor() {
        this.blockchainInstance = new _assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2__["Blockchain"]();
        this.walletKeys = [];
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingData('my-wallet-address');
        this.generateWalletKeys();
    }
    getBlocks() {
        return this.blockchainInstance.chain;
    }
    addData(dt) {
        this.blockchainInstance.addData(dt);
    }
    getPendingData() {
        return this.blockchainInstance.pendingData;
    }
    minePendingData() {
        this.blockchainInstance.minePendingData(this.walletKeys[0].publicKey);
    }
    generateWalletKeys() {
        const ec = new elliptic__WEBPACK_IMPORTED_MODULE_3__["ec"]('secp256k1');
        const key = ec.genKeyPair();
        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex')
        });
    }
};
BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockchainService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/blockchain.js */ "./src/assets/blockchain.js");
/* harmony import */ var _assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2__);



let DataService = class DataService {
    constructor() {
        this.dataInstance = new _assets_blockchain_js__WEBPACK_IMPORTED_MODULE_2__["Data"]();
        this.dataInstance = this.dataInstance;
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding: 20px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0Rlc2t0b3AvYmxvY2tjaGFpbi1hbmd1bGFyL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJoMSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



let SettingsComponent = class SettingsComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blockchain = blockchainService.blockchainInstance;
    }
    ngOnInit() { }
};
SettingsComponent.ctorParameters = () => [
    { type: _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/assets/blockchain.js":
/*!**********************************!*\
  !*** ./src/assets/blockchain.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SHA256 = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");
const EC = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js").ec;
const ec = new EC('secp256k1');

class Data {
  constructor(fromAddress, toAddress, amount) {
    (this.fromAddress = fromAddress),
      (this.toAddress = toAddress),
      (this.amount = amount);
    this.timestamp = Date.now();
  }
  calculateHash() {
    return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
  }
  signData(signingKey) {
    if (signingKey.getPublic('hex') !== this.fromAddress) {
      throw new Error('forbidden');
    }
    const hashDATA = this.calculateHash();
    const sig = signingKey.sign(hashDATA, 'base64');
    this.signature = sig.toDER('hex');
    console.log('this is the signature ..................... ', sig);
  }

  isValid() {
    if (this.fromAddress === null) return true;
    if (!this.signature || this.signature.length === 0) {
      throw new Error('no signature');
    }
    const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
    return publicKey.verify(this.calculateHash(), this.signature);
  }
}

class Block {
  constructor(timestamp, data, previousHash = '') {
    (this.timestamp = timestamp),
      (this.data = data),
      (this.previousHash = previousHash),
      (this.hash = this.calculateHash()),
      (this.nonce = 0);
  }
  calculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log('Block Mined: ' + this.hash);
  }

  hasValidData() {
    for (const dt of this.data) {
      if (!dt.isValid()) {
        return false;
      }
    }
    return true;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.pendingData = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingData(mineRewardAddress) {
    const rewardData = new Data(null, mineRewardAddress, this.miningReward);
    this.pendingData.push(rewardData);

    let block = new Block(
      Date.now(),
      this.pendingData,
      this.getLatestBlock().hash
    );
    block.mineBlock(this.difficulty);

    // console.log('Block successfully mined!');
    this.chain.push(block);

    this.pendingData = [];
  }

  addData(data) {
    if (!data.fromAddress || !data.toAddress) {
      throw new Error('Data must include from to address');
    }
    if (!data.isValid()) {
      throw new Error('invalid block');
    }
    if (data.amount <= 0) {
      throw new Error('amount should be higher than 0');
    }

    this.pendingData.push(data);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const dt of block.data) {
        if (dt.fromAddress === address) {
          balance -= dt.amount;
        }
        if (dt.toAddress === address) {
          balance += dt.amount;
        }
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!currentBlock.hasValidData()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

module.exports.Blockchain = Blockchain;
module.exports.Block = Block;
module.exports.Data = Data;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Desktop/blockchain-angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map