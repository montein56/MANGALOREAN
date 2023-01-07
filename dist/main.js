/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/mangyFood.jpg */ "./src/images/mangyFood.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/coconut.jpg */ "./src/images/coconut.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "root{\n    font-size: 30px;\n}\n\nhtml, body{\n    margin: 0;\n    height: 100%;\n}\nbody{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n}\n\n#content{\n    display: grid;\n    grid-template-areas: \n    \"header\"\n    \"main\"\n    \"footer\";\n    grid-template-rows: 20vw auto 8vh;\n    height: 100vh;\n    margin: 0;\n    font-size: 100px;\n    color: blueviolet;\n}\n\n/* HEADER */\n.header {\n  display: grid;\n    grid-area: header;\n    grid-template-areas:\n        \"restaurantName\"\n        \"nav\";\n    border: 2px solid black;\n    padding: 25px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    align-items: center;\n}\n\n.nav{\n    grid-area: nav;\n    display: flex;\n    justify-content: space-around;\n}\n\n.buttons{\n    color: aliceblue;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color:rgb(30, 78, 62);\n}\n\n.buttons:hover{\n    color: rgba(94, 27, 7, 0.74);\n    background-color: rgb(153, 205, 50);\n    cursor: pointer;\n}\n\n.restaurantName{\n    grid-area: restaurantName;\n    font-family: 'Oswald' sans-serif;\n    font-size:6vw;\n    font-weight: 700;\n    color: rgb(196, 13, 13);\n    padding:0 1rem;\n    margin: 0;\n    text-align:start;\n}\n\n/* MAIN */\n.main{\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n    justify-content:space-between;\n    padding: 0;\n    margin: 0;\n}\n\n/* HOME */\n.home p{\n    display: flex;\n    font-family: 'Oswald', sans-serif;\n    font-size:4vw;\n    font-weight: 200;\n    color: beige;\n    background-color: rgb(11, 58, 58, .8);\n}\n.home{\n  padding: 0 25vw;\n}\n\n/* MENU */\n.menu{\n  width: 45vw;\n  padding: 0 25vw;\n}\n.menu-item{\n  padding: 0 2vh;\n  padding-bottom: 1vw;\n  background-color: rgb(255, 255, 255, .8);\n}\n\n.menu h2{\n  font-size: 6vw;\n  padding: 3vw 0 0 3vw;\n}\n.menu-item p{\n  display: flex;\n  justify-content: center;\n  font-size: 2vw;\n  color: none;\n  padding-left: 2vw;\n}\n.menuImg{\n  width:100%;\n}\n\n/* CONTACT */\n.contact{\n  margin: 5vx 0 0 0;\n  padding:0 0 0 6vw;\n  width:70vw;\n}\n.contact h2{\n  color: rgb(170, 10, 10);\n  font-size: 4vw;\n  background-color: rgba(129, 157, 199, 0.8);\n  width: 80%;\n  margin: 0;\n}\n.map{\n  width: 80%;\n  aspect-ratio: 1;\n}\n\n/* FOOTER */\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    background-color: rgb(0, 0, 0);\n    color: aliceblue;\n    margin-top: auto;\n  }\n\n.footerImage{\n  width: 3vw;\n  padding: 0 2vw;\n}\n\n@media (max-width: 1030px) {\n  #container{\n    grid-template-rows: 15vw auto 8vh;\n  }\n  .buttons{\n    font-size: 3vw;\n  }\n  .home{\n    padding: 7vw;\n  }\n  .menu{\n    width: 70vw;\n    padding: 0 5vw;\n  }\n  .menu-item{\n    padding: 0;\n  }\n  .contact{\n    padding:0 0 0 1vw;  \n    width:100vw;\n  }\n  .map{\n    width: 80%;\n  }\n  .footer{\n    font-size: 1rem;\n  }\n}\n@media(max-width: 790px){\n  #container{\n    grid-template-rows: 23vw auto 8vh;\n  }\n  header{\n    height: 10vw;\n  }\n  .restaurantName{\n    padding: 0;\n  }\n  .home p{\nfont-size: 8vw;\n  }\n  .menu{\n    padding: 0 5vw;\n  }\n\n  .menu p{\n    font-size: 2.2vh;\n  }\n  \n  .footer{\n    font-size: .7rem;\n  }\n  }\n\n@media(max-width: 550px){\n  .menu{\n    width: 95%;\n  }\n  .home, .menu{\n    padding: 2vw;\n  }\n  .menu p, .home p{\n    font-size: 5vw;\n  }\n  }\n\n  @media(max-width: 400px){\n    .home, .menu{\n      padding: 5vw;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;AACA;EACE,yDAAoD;EACpD,4BAA4B;AAC9B;;AAEA;IACI,aAAa;IACb;;;YAGQ;IACR,iCAAiC;IACjC,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,WAAW;AACX;EACE,aAAa;IACX,iBAAiB;IACjB;;aAES;IACT,uBAAuB;IACvB,aAAa;IACb,mDAA0C;IAC1C,4BAA4B;IAC5B,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,4BAA4B;IAC5B,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,gCAAgC;IAChC,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;IACd,SAAS;IACT,gBAAgB;AACpB;;AAEA,SAAS;AACT;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,UAAU;IACV,SAAS;AACb;;AAEA,SAAS;AACT;IACI,aAAa;IACb,iCAAiC;IACjC,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,qCAAqC;AACzC;AACA;EACE,eAAe;AACjB;;AAEA,SAAS;AACT;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;;AAEA,YAAY;AACZ;EACE,iBAAiB;EACjB,iBAAiB;EACjB,UAAU;AACZ;AACA;EACE,uBAAuB;EACvB,cAAc;EACd,0CAA0C;EAC1C,UAAU;EACV,SAAS;AACX;AACA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA,WAAW;AACX;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,gBAAgB;EAClB;;AAEF;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;IACE,cAAc;EAChB;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;IACX,cAAc;EAChB;EACA;IACE,UAAU;EACZ;EACA;IACE,iBAAiB;IACjB,WAAW;EACb;EACA;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,iCAAiC;EACnC;EACA;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;EACA;AACF,cAAc;EACZ;EACA;IACE,cAAc;EAChB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;EACA;;AAEF;EACE;IACE,UAAU;EACZ;EACA;IACE,YAAY;EACd;EACA;IACE,cAAc;EAChB;EACA;;EAEA;IACE;MACE,YAAY;IACd;EACF","sourcesContent":["root{\n    font-size: 30px;\n}\n\nhtml, body{\n    margin: 0;\n    height: 100%;\n}\nbody{\n  background-image: url('../src/images/mangyFood.jpg');\n  background-attachment: fixed;\n}\n\n#content{\n    display: grid;\n    grid-template-areas: \n    \"header\"\n    \"main\"\n    \"footer\";\n    grid-template-rows: 20vw auto 8vh;\n    height: 100vh;\n    margin: 0;\n    font-size: 100px;\n    color: blueviolet;\n}\n\n/* HEADER */\n.header {\n  display: grid;\n    grid-area: header;\n    grid-template-areas:\n        \"restaurantName\"\n        \"nav\";\n    border: 2px solid black;\n    padding: 25px;\n    background: url(../src/images/coconut.jpg);\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    align-items: center;\n}\n\n.nav{\n    grid-area: nav;\n    display: flex;\n    justify-content: space-around;\n}\n\n.buttons{\n    color: aliceblue;\n    font-size: 3rem;\n    font-weight: 700;\n    background-color:rgb(30, 78, 62);\n}\n\n.buttons:hover{\n    color: rgba(94, 27, 7, 0.74);\n    background-color: rgb(153, 205, 50);\n    cursor: pointer;\n}\n\n.restaurantName{\n    grid-area: restaurantName;\n    font-family: 'Oswald' sans-serif;\n    font-size:6vw;\n    font-weight: 700;\n    color: rgb(196, 13, 13);\n    padding:0 1rem;\n    margin: 0;\n    text-align:start;\n}\n\n/* MAIN */\n.main{\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n    justify-content:space-between;\n    padding: 0;\n    margin: 0;\n}\n\n/* HOME */\n.home p{\n    display: flex;\n    font-family: 'Oswald', sans-serif;\n    font-size:4vw;\n    font-weight: 200;\n    color: beige;\n    background-color: rgb(11, 58, 58, .8);\n}\n.home{\n  padding: 0 25vw;\n}\n\n/* MENU */\n.menu{\n  width: 45vw;\n  padding: 0 25vw;\n}\n.menu-item{\n  padding: 0 2vh;\n  padding-bottom: 1vw;\n  background-color: rgb(255, 255, 255, .8);\n}\n\n.menu h2{\n  font-size: 6vw;\n  padding: 3vw 0 0 3vw;\n}\n.menu-item p{\n  display: flex;\n  justify-content: center;\n  font-size: 2vw;\n  color: none;\n  padding-left: 2vw;\n}\n.menuImg{\n  width:100%;\n}\n\n/* CONTACT */\n.contact{\n  margin: 5vx 0 0 0;\n  padding:0 0 0 6vw;\n  width:70vw;\n}\n.contact h2{\n  color: rgb(170, 10, 10);\n  font-size: 4vw;\n  background-color: rgba(129, 157, 199, 0.8);\n  width: 80%;\n  margin: 0;\n}\n.map{\n  width: 80%;\n  aspect-ratio: 1;\n}\n\n/* FOOTER */\n.footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    background-color: rgb(0, 0, 0);\n    color: aliceblue;\n    margin-top: auto;\n  }\n\n.footerImage{\n  width: 3vw;\n  padding: 0 2vw;\n}\n\n@media (max-width: 1030px) {\n  #container{\n    grid-template-rows: 15vw auto 8vh;\n  }\n  .buttons{\n    font-size: 3vw;\n  }\n  .home{\n    padding: 7vw;\n  }\n  .menu{\n    width: 70vw;\n    padding: 0 5vw;\n  }\n  .menu-item{\n    padding: 0;\n  }\n  .contact{\n    padding:0 0 0 1vw;  \n    width:100vw;\n  }\n  .map{\n    width: 80%;\n  }\n  .footer{\n    font-size: 1rem;\n  }\n}\n@media(max-width: 790px){\n  #container{\n    grid-template-rows: 23vw auto 8vh;\n  }\n  header{\n    height: 10vw;\n  }\n  .restaurantName{\n    padding: 0;\n  }\n  .home p{\nfont-size: 8vw;\n  }\n  .menu{\n    padding: 0 5vw;\n  }\n\n  .menu p{\n    font-size: 2.2vh;\n  }\n  \n  .footer{\n    font-size: .7rem;\n  }\n  }\n\n@media(max-width: 550px){\n  .menu{\n    width: 95%;\n  }\n  .home, .menu{\n    padding: 2vw;\n  }\n  .menu p, .home p{\n    font-size: 5vw;\n  }\n  }\n\n  @media(max-width: 400px){\n    .home, .menu{\n      padding: 5vw;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map.png */ "./src/images/map.png");


function makeContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const mapMangalore = document.createElement("img");
    mapMangalore.classList.add('map');
    mapMangalore.src = _images_map_png__WEBPACK_IMPORTED_MODULE_0__;
    mapMangalore.alt = `map of Mangalore`;
    
    contact.appendChild(makePara("WHERE WE ARE"));
    contact.appendChild(mapMangalore);
    contact.appendChild(makePara("HOURS:"));
    contact.appendChild(makePara("Mon to Fri: CLOSED"));
    contact.appendChild(makePara("Sunday: Noon to Midnight"));
    contact.appendChild(makePara("Saturday: Noon to Midnight"));

    return contact;
}

function makePara(text){
    const para = document.createElement("h2");
    para.textContent=(text);
    return para;
}
function loadContactPage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(makeContact());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    home.appendChild(makePara("Mangalorean food is an eclectic mix of cuisines from different communities who have long inhabited the coasts of Karnataka."));
    home.appendChild(makePara("Mangalorean cuisine has also been influenced by the food of South India which is why you will find an abundance of curry leaves and coconut. But it is foolhardy to dismiss Mangalorean food as simply South Indian because of its unique dishes."));
    home.appendChild(makePara("Because nowhere else in the world, will you find the delicious ghee roast, kori roti, or leaf-wrapped patolis."))

    return home;
}

function makePara(text){
    const para = document.createElement("p");
    para.textContent=(text);
    return para;
}

function loadHomePage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(makeHome());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        makeMenuItem(
          "POMFRET",
          "Pomfret fish is known for its delicate, flaky white flesh and mild, sweet flavor. It is considered a delicacy in many parts of Asia and is often served as a whole fish with its head and tail intact. The fish can be cooked in a variety of ways, including steaming, grilling, frying, and baking."
        )
      );

    menu.appendChild(
      makeMenuItem(
        "GOLIBAJE",
        "Golibaje or Mangalore bajji is an Indian fried food made from various flours and curd. In Tulu Nadu region, it is known as golibaje. Other names for the dish include Mangalore baje. This is widely famous in Andhra Pradesh and Telangana as Mysore bonda/bajji.",
        "golibaje"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "KORIROTI",
        "Kori rotti is a spicy dish of Tulu Udupi-Mangalorean cuisine, a combination of red-chili and coconut milk based chicken curry and crisp, dry wafers made from boiled rice. Kori means chicken in Tulu.",
        "koriroti"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "GHEEROAST",
        "Chicken ghee roast is a popular Tuluva Mangalorean Chicken recipe whose origins go back to the town, Kundapur, close to Udupi. Chicken ghee roast is fiery red in colour, and has a tangy and spicy flavor with ghee and roasted spices.",
        "gheeroast"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "NEERDOSA",
        "Neer dosa, literally meaning water dosa in Tulu is a crêpe prepared from rice batter. Neer dosa is a delicacy from Tulu Nadu and part of Mangalorean cuisine",
        "neerdosa"
      )
    );
    menu.appendChild(
      makeMenuItem(
        "PATHOLI",
        "Patholi (plural: Patoleo) are sweet stuffed rice rolls which are steamed wrapped in turmeric leaves. Since there’s a unique technique involved in this recipe, the preparation and cooking of this dish is laborious. It is vegan and since rice flour is the main ingredient, the dish is gluten free too.",
        "patholi"
      )
    );

    return menu;
}
function makeMenuItem(item, notes) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = item;
  
    const itemNotes = document.createElement("p");
    itemNotes.textContent = notes;
  
    const itemImage = document.createElement("img");
    itemImage.classList.add('menuImg');
    itemImage.src = `../src/images/${item.toLowerCase()}.jpg`;
    itemImage.alt = `Image of ${item}`;
  
    menuItem.appendChild(foodName);
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemNotes);
  
    return menuItem;
  }
function loadMenuPage() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(makeMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _images_helmet_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/helmet.jpg */ "./src/images/helmet.jpg");





function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurantName");
    restaurantName.textContent=("The MANGALOREAN");
   
    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header;
}

function createNav(){
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("buttons");
    homeButton.textContent=("HOME"); 
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
      });

    const menuButton = document.createElement("button");
    menuButton.classList.add("buttons");
    menuButton.textContent=("MENU");
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });

    const contactButton = document.createElement("button");
    contactButton.classList.add("buttons");
    contactButton.textContent=("CONTACT");
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
      });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".buttons");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }
function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    main.classList.add("main");
    return main;
}

function createFooter(){
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerTextL = document.createElement('p');
  footerTextL.innerHTML = 'A Mangy project';
  footer.appendChild(footerTextL);

  const footerImage = document.createElement('img');
  footerImage.src = _images_helmet_jpg__WEBPACK_IMPORTED_MODULE_3__;
  footerImage.alt = 'Mangalorian Helmet';
  footerImage.classList.add('footerImage');
  footer.appendChild(footerImage);
  
  const footerTextR = document.createElement('p');
  footerTextR.innerHTML = 'NM Dec 2022';
  footer.appendChild(footerTextR);
  
  return footer;
}

function webInitialize(){

  const container = document.getElementById("content");

  container.appendChild (createHeader());
  container.appendChild (createMain());
  container.appendChild (createFooter());
  setActiveButton(document.querySelector(".buttons"));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webInitialize);

/***/ }),

/***/ "./src/images/coconut.jpg":
/*!********************************!*\
  !*** ./src/images/coconut.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "929409e60514db35441a.jpg";

/***/ }),

/***/ "./src/images/helmet.jpg":
/*!*******************************!*\
  !*** ./src/images/helmet.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79d245e5e75b2b3d869e.jpg";

/***/ }),

/***/ "./src/images/mangyFood.jpg":
/*!**********************************!*\
  !*** ./src/images/mangyFood.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f65b083fdb006c413440.jpg";

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6b8ce26a3b70fddf983.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDhIQUE4QztBQUMxRiw0Q0FBNEMsMEhBQTRDO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsK0NBQStDLHNCQUFzQixHQUFHLGVBQWUsZ0JBQWdCLG1CQUFtQixHQUFHLE9BQU8sc0VBQXNFLGlDQUFpQyxHQUFHLGFBQWEsb0JBQW9CLDBFQUEwRSx3Q0FBd0Msb0JBQW9CLGdCQUFnQix1QkFBdUIsd0JBQXdCLEdBQUcsMkJBQTJCLGtCQUFrQix3QkFBd0Isd0VBQXdFLDhCQUE4QixvQkFBb0Isa0VBQWtFLG1DQUFtQyxpQ0FBaUMsMEJBQTBCLEdBQUcsU0FBUyxxQkFBcUIsb0JBQW9CLG9DQUFvQyxHQUFHLGFBQWEsdUJBQXVCLHNCQUFzQix1QkFBdUIsdUNBQXVDLEdBQUcsbUJBQW1CLG1DQUFtQywwQ0FBMEMsc0JBQXNCLEdBQUcsb0JBQW9CLGdDQUFnQyx1Q0FBdUMsb0JBQW9CLHVCQUF1Qiw4QkFBOEIscUJBQXFCLGdCQUFnQix1QkFBdUIsR0FBRyxzQkFBc0Isc0JBQXNCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLGlCQUFpQixnQkFBZ0IsR0FBRyx3QkFBd0Isb0JBQW9CLHdDQUF3QyxvQkFBb0IsdUJBQXVCLG1CQUFtQiw0Q0FBNEMsR0FBRyxRQUFRLG9CQUFvQixHQUFHLHNCQUFzQixnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSxtQkFBbUIsd0JBQXdCLDZDQUE2QyxHQUFHLGFBQWEsbUJBQW1CLHlCQUF5QixHQUFHLGVBQWUsa0JBQWtCLDRCQUE0QixtQkFBbUIsZ0JBQWdCLHNCQUFzQixHQUFHLFdBQVcsZUFBZSxHQUFHLDRCQUE0QixzQkFBc0Isc0JBQXNCLGVBQWUsR0FBRyxjQUFjLDRCQUE0QixtQkFBbUIsK0NBQStDLGVBQWUsY0FBYyxHQUFHLE9BQU8sZUFBZSxvQkFBb0IsR0FBRywyQkFBMkIsd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixxQ0FBcUMsdUJBQXVCLHVCQUF1QixLQUFLLGlCQUFpQixlQUFlLG1CQUFtQixHQUFHLGdDQUFnQyxlQUFlLHdDQUF3QyxLQUFLLGFBQWEscUJBQXFCLEtBQUssVUFBVSxtQkFBbUIsS0FBSyxVQUFVLGtCQUFrQixxQkFBcUIsS0FBSyxlQUFlLGlCQUFpQixLQUFLLGFBQWEsMEJBQTBCLGtCQUFrQixLQUFLLFNBQVMsaUJBQWlCLEtBQUssWUFBWSxzQkFBc0IsS0FBSyxHQUFHLDJCQUEyQixlQUFlLHdDQUF3QyxLQUFLLFdBQVcsbUJBQW1CLEtBQUssb0JBQW9CLGlCQUFpQixLQUFLLFlBQVksaUJBQWlCLEtBQUssVUFBVSxxQkFBcUIsS0FBSyxjQUFjLHVCQUF1QixLQUFLLGdCQUFnQix1QkFBdUIsS0FBSyxLQUFLLDZCQUE2QixVQUFVLGlCQUFpQixLQUFLLGlCQUFpQixtQkFBbUIsS0FBSyxxQkFBcUIscUJBQXFCLEtBQUssS0FBSywrQkFBK0IsbUJBQW1CLHFCQUFxQixPQUFPLEtBQUssT0FBTyxnRkFBZ0YsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyw4QkFBOEIsc0JBQXNCLEdBQUcsZUFBZSxnQkFBZ0IsbUJBQW1CLEdBQUcsT0FBTyx5REFBeUQsaUNBQWlDLEdBQUcsYUFBYSxvQkFBb0IsMEVBQTBFLHdDQUF3QyxvQkFBb0IsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3Qix3RUFBd0UsOEJBQThCLG9CQUFvQixpREFBaUQsbUNBQW1DLGlDQUFpQywwQkFBMEIsR0FBRyxTQUFTLHFCQUFxQixvQkFBb0Isb0NBQW9DLEdBQUcsYUFBYSx1QkFBdUIsc0JBQXNCLHVCQUF1Qix1Q0FBdUMsR0FBRyxtQkFBbUIsbUNBQW1DLDBDQUEwQyxzQkFBc0IsR0FBRyxvQkFBb0IsZ0NBQWdDLHVDQUF1QyxvQkFBb0IsdUJBQXVCLDhCQUE4QixxQkFBcUIsZ0JBQWdCLHVCQUF1QixHQUFHLHNCQUFzQixzQkFBc0Isb0JBQW9CLDZCQUE2QixvQ0FBb0MsaUJBQWlCLGdCQUFnQixHQUFHLHdCQUF3QixvQkFBb0Isd0NBQXdDLG9CQUFvQix1QkFBdUIsbUJBQW1CLDRDQUE0QyxHQUFHLFFBQVEsb0JBQW9CLEdBQUcsc0JBQXNCLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLG1CQUFtQix3QkFBd0IsNkNBQTZDLEdBQUcsYUFBYSxtQkFBbUIseUJBQXlCLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLG1CQUFtQixnQkFBZ0Isc0JBQXNCLEdBQUcsV0FBVyxlQUFlLEdBQUcsNEJBQTRCLHNCQUFzQixzQkFBc0IsZUFBZSxHQUFHLGNBQWMsNEJBQTRCLG1CQUFtQiwrQ0FBK0MsZUFBZSxjQUFjLEdBQUcsT0FBTyxlQUFlLG9CQUFvQixHQUFHLDJCQUEyQix3QkFBd0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHFDQUFxQyx1QkFBdUIsdUJBQXVCLEtBQUssaUJBQWlCLGVBQWUsbUJBQW1CLEdBQUcsZ0NBQWdDLGVBQWUsd0NBQXdDLEtBQUssYUFBYSxxQkFBcUIsS0FBSyxVQUFVLG1CQUFtQixLQUFLLFVBQVUsa0JBQWtCLHFCQUFxQixLQUFLLGVBQWUsaUJBQWlCLEtBQUssYUFBYSwwQkFBMEIsa0JBQWtCLEtBQUssU0FBUyxpQkFBaUIsS0FBSyxZQUFZLHNCQUFzQixLQUFLLEdBQUcsMkJBQTJCLGVBQWUsd0NBQXdDLEtBQUssV0FBVyxtQkFBbUIsS0FBSyxvQkFBb0IsaUJBQWlCLEtBQUssWUFBWSxpQkFBaUIsS0FBSyxVQUFVLHFCQUFxQixLQUFLLGNBQWMsdUJBQXVCLEtBQUssZ0JBQWdCLHVCQUF1QixLQUFLLEtBQUssNkJBQTZCLFVBQVUsaUJBQWlCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxLQUFLLCtCQUErQixtQkFBbUIscUJBQXFCLE9BQU8sS0FBSyxtQkFBbUI7QUFDMTZSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNma0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDRDQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ2hDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDdEIzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUI7QUFDeEQsZ0NBQWdDLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFTztBQUNBO0FBQ007QUFDQzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVk7QUFDcEIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFZO0FBQ3BCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBZTtBQUN2QixPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBWTtBQUNkO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pHNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXlDO0FBQ3BCO0FBQ3JCLHVEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21hbmdhbG9yZWFuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hbmdhbG9yZWFuLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL21hbmdhbG9yZWFuLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hbmdhbG9yZWFuL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWFuZ2Fsb3JlYW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hbmdhbG9yZWFuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hbmdhbG9yZWFuL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21hbmdhbG9yZWFuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYW5nYWxvcmVhbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9tYW5neUZvb2QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9jb2NvbnV0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJyb290e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmh0bWwsIGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5e1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlclxcXCJcXG4gICAgXFxcIm1haW5cXFwiXFxuICAgIFxcXCJmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwdncgYXV0byA4dmg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwicmVzdGF1cmFudE5hbWVcXFwiXFxuICAgICAgICBcXFwibmF2XFxcIjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2e1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5idXR0b25ze1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDMwLCA3OCwgNjIpO1xcbn1cXG5cXG4uYnV0dG9uczpob3ZlcntcXG4gICAgY29sb3I6IHJnYmEoOTQsIDI3LCA3LCAwLjc0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjA1LCA1MCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlc3RhdXJhbnROYW1le1xcbiAgICBncmlkLWFyZWE6IHJlc3RhdXJhbnROYW1lO1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHJnYigxOTYsIDEzLCAxMyk7XFxuICAgIHBhZGRpbmc6MCAxcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246c3RhcnQ7XFxufVxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIT01FICovXFxuLmhvbWUgcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6NHZ3O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogYmVpZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgNTgsIDU4LCAuOCk7XFxufVxcbi5ob21le1xcbiAgcGFkZGluZzogMCAyNXZ3O1xcbn1cXG5cXG4vKiBNRU5VICovXFxuLm1lbnV7XFxuICB3aWR0aDogNDV2dztcXG4gIHBhZGRpbmc6IDAgMjV2dztcXG59XFxuLm1lbnUtaXRlbXtcXG4gIHBhZGRpbmc6IDAgMnZoO1xcbiAgcGFkZGluZy1ib3R0b206IDF2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuOCk7XFxufVxcblxcbi5tZW51IGgye1xcbiAgZm9udC1zaXplOiA2dnc7XFxuICBwYWRkaW5nOiAzdncgMCAwIDN2dztcXG59XFxuLm1lbnUtaXRlbSBwe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxuICBjb2xvcjogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xcbn1cXG4ubWVudUltZ3tcXG4gIHdpZHRoOjEwMCU7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4uY29udGFjdHtcXG4gIG1hcmdpbjogNXZ4IDAgMCAwO1xcbiAgcGFkZGluZzowIDAgMCA2dnc7XFxuICB3aWR0aDo3MHZ3O1xcbn1cXG4uY29udGFjdCBoMntcXG4gIGNvbG9yOiByZ2IoMTcwLCAxMCwgMTApO1xcbiAgZm9udC1zaXplOiA0dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSwgMTU3LCAxOTksIDAuOCk7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWFwe1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxuXFxuLmZvb3RlckltYWdle1xcbiAgd2lkdGg6IDN2dztcXG4gIHBhZGRpbmc6IDAgMnZ3O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XFxuICAjY29udGFpbmVye1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dncgYXV0byA4dmg7XFxuICB9XFxuICAuYnV0dG9uc3tcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICB9XFxuICAuaG9tZXtcXG4gICAgcGFkZGluZzogN3Z3O1xcbiAgfVxcbiAgLm1lbnV7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBwYWRkaW5nOiAwIDV2dztcXG4gIH1cXG4gIC5tZW51LWl0ZW17XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAuY29udGFjdHtcXG4gICAgcGFkZGluZzowIDAgMCAxdnc7ICBcXG4gICAgd2lkdGg6MTAwdnc7XFxuICB9XFxuICAubWFwe1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgLmZvb3RlcntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEobWF4LXdpZHRoOiA3OTBweCl7XFxuICAjY29udGFpbmVye1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIzdncgYXV0byA4dmg7XFxuICB9XFxuICBoZWFkZXJ7XFxuICAgIGhlaWdodDogMTB2dztcXG4gIH1cXG4gIC5yZXN0YXVyYW50TmFtZXtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5ob21lIHB7XFxuZm9udC1zaXplOiA4dnc7XFxuICB9XFxuICAubWVudXtcXG4gICAgcGFkZGluZzogMCA1dnc7XFxuICB9XFxuXFxuICAubWVudSBwe1xcbiAgICBmb250LXNpemU6IDIuMnZoO1xcbiAgfVxcbiAgXFxuICAuZm9vdGVye1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbiAgfVxcbiAgfVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDU1MHB4KXtcXG4gIC5tZW51e1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbiAgLmhvbWUsIC5tZW51e1xcbiAgICBwYWRkaW5nOiAydnc7XFxuICB9XFxuICAubWVudSBwLCAuaG9tZSBwe1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gIH1cXG4gIH1cXG5cXG4gIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcXG4gICAgLmhvbWUsIC5tZW51e1xcbiAgICAgIHBhZGRpbmc6IDV2dztcXG4gICAgfVxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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W1wicm9vdHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5odG1sLCBib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYm9keXtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2ltYWdlcy9tYW5neUZvb2QuanBnJyk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgIFxcXCJtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZ3IGF1dG8gOHZoO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInJlc3RhdXJhbnROYW1lXFxcIlxcbiAgICAgICAgXFxcIm5hdlxcXCI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vc3JjL2ltYWdlcy9jb2NvbnV0LmpwZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2e1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5idXR0b25ze1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDMwLCA3OCwgNjIpO1xcbn1cXG5cXG4uYnV0dG9uczpob3ZlcntcXG4gICAgY29sb3I6IHJnYmEoOTQsIDI3LCA3LCAwLjc0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMjA1LCA1MCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlc3RhdXJhbnROYW1le1xcbiAgICBncmlkLWFyZWE6IHJlc3RhdXJhbnROYW1lO1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjZ2dztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHJnYigxOTYsIDEzLCAxMyk7XFxuICAgIHBhZGRpbmc6MCAxcmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246c3RhcnQ7XFxufVxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIT01FICovXFxuLmhvbWUgcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6NHZ3O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogYmVpZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgNTgsIDU4LCAuOCk7XFxufVxcbi5ob21le1xcbiAgcGFkZGluZzogMCAyNXZ3O1xcbn1cXG5cXG4vKiBNRU5VICovXFxuLm1lbnV7XFxuICB3aWR0aDogNDV2dztcXG4gIHBhZGRpbmc6IDAgMjV2dztcXG59XFxuLm1lbnUtaXRlbXtcXG4gIHBhZGRpbmc6IDAgMnZoO1xcbiAgcGFkZGluZy1ib3R0b206IDF2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuOCk7XFxufVxcblxcbi5tZW51IGgye1xcbiAgZm9udC1zaXplOiA2dnc7XFxuICBwYWRkaW5nOiAzdncgMCAwIDN2dztcXG59XFxuLm1lbnUtaXRlbSBwe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxuICBjb2xvcjogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xcbn1cXG4ubWVudUltZ3tcXG4gIHdpZHRoOjEwMCU7XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4uY29udGFjdHtcXG4gIG1hcmdpbjogNXZ4IDAgMCAwO1xcbiAgcGFkZGluZzowIDAgMCA2dnc7XFxuICB3aWR0aDo3MHZ3O1xcbn1cXG4uY29udGFjdCBoMntcXG4gIGNvbG9yOiByZ2IoMTcwLCAxMCwgMTApO1xcbiAgZm9udC1zaXplOiA0dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOSwgMTU3LCAxOTksIDAuOCk7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWFwe1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxuXFxuLmZvb3RlckltYWdle1xcbiAgd2lkdGg6IDN2dztcXG4gIHBhZGRpbmc6IDAgMnZ3O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XFxuICAjY29udGFpbmVye1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dncgYXV0byA4dmg7XFxuICB9XFxuICAuYnV0dG9uc3tcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICB9XFxuICAuaG9tZXtcXG4gICAgcGFkZGluZzogN3Z3O1xcbiAgfVxcbiAgLm1lbnV7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBwYWRkaW5nOiAwIDV2dztcXG4gIH1cXG4gIC5tZW51LWl0ZW17XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAuY29udGFjdHtcXG4gICAgcGFkZGluZzowIDAgMCAxdnc7ICBcXG4gICAgd2lkdGg6MTAwdnc7XFxuICB9XFxuICAubWFwe1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcbiAgLmZvb3RlcntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEobWF4LXdpZHRoOiA3OTBweCl7XFxuICAjY29udGFpbmVye1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIzdncgYXV0byA4dmg7XFxuICB9XFxuICBoZWFkZXJ7XFxuICAgIGhlaWdodDogMTB2dztcXG4gIH1cXG4gIC5yZXN0YXVyYW50TmFtZXtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5ob21lIHB7XFxuZm9udC1zaXplOiA4dnc7XFxuICB9XFxuICAubWVudXtcXG4gICAgcGFkZGluZzogMCA1dnc7XFxuICB9XFxuXFxuICAubWVudSBwe1xcbiAgICBmb250LXNpemU6IDIuMnZoO1xcbiAgfVxcbiAgXFxuICAuZm9vdGVye1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbiAgfVxcbiAgfVxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDU1MHB4KXtcXG4gIC5tZW51e1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbiAgLmhvbWUsIC5tZW51e1xcbiAgICBwYWRkaW5nOiAydnc7XFxuICB9XFxuICAubWVudSBwLCAuaG9tZSBwe1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gIH1cXG4gIH1cXG5cXG4gIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcXG4gICAgLmhvbWUsIC5tZW51e1xcbiAgICAgIHBhZGRpbmc6IDV2dztcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwIGZyb20gJy4vaW1hZ2VzL21hcC5wbmcnXG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0KCl7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgbWFwTWFuZ2Fsb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYXBNYW5nYWxvcmUuY2xhc3NMaXN0LmFkZCgnbWFwJyk7XG4gICAgbWFwTWFuZ2Fsb3JlLnNyYyA9IG1hcDtcbiAgICBtYXBNYW5nYWxvcmUuYWx0ID0gYG1hcCBvZiBNYW5nYWxvcmVgO1xuICAgIFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobWFrZVBhcmEoXCJXSEVSRSBXRSBBUkVcIikpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobWFwTWFuZ2Fsb3JlKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiSE9VUlM6XCIpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiTW9uIHRvIEZyaTogQ0xPU0VEXCIpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiU3VuZGF5OiBOb29uIHRvIE1pZG5pZ2h0XCIpKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiU2F0dXJkYXk6IE5vb24gdG8gTWlkbmlnaHRcIikpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYXJhKHRleHQpe1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcGFyYS50ZXh0Q29udGVudD0odGV4dCk7XG4gICAgcmV0dXJuIHBhcmE7XG59XG5mdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50PVwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWtlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlOyIsImZ1bmN0aW9uIG1ha2VIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQobWFrZVBhcmEoXCJNYW5nYWxvcmVhbiBmb29kIGlzIGFuIGVjbGVjdGljIG1peCBvZiBjdWlzaW5lcyBmcm9tIGRpZmZlcmVudCBjb21tdW5pdGllcyB3aG8gaGF2ZSBsb25nIGluaGFiaXRlZCB0aGUgY29hc3RzIG9mIEthcm5hdGFrYS5cIikpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQobWFrZVBhcmEoXCJNYW5nYWxvcmVhbiBjdWlzaW5lIGhhcyBhbHNvIGJlZW4gaW5mbHVlbmNlZCBieSB0aGUgZm9vZCBvZiBTb3V0aCBJbmRpYSB3aGljaCBpcyB3aHkgeW91IHdpbGwgZmluZCBhbiBhYnVuZGFuY2Ugb2YgY3VycnkgbGVhdmVzIGFuZCBjb2NvbnV0LiBCdXQgaXQgaXMgZm9vbGhhcmR5IHRvIGRpc21pc3MgTWFuZ2Fsb3JlYW4gZm9vZCBhcyBzaW1wbHkgU291dGggSW5kaWFuIGJlY2F1c2Ugb2YgaXRzIHVuaXF1ZSBkaXNoZXMuXCIpKTtcbiAgICBob21lLmFwcGVuZENoaWxkKG1ha2VQYXJhKFwiQmVjYXVzZSBub3doZXJlIGVsc2UgaW4gdGhlIHdvcmxkLCB3aWxsIHlvdSBmaW5kIHRoZSBkZWxpY2lvdXMgZ2hlZSByb2FzdCwga29yaSByb3RpLCBvciBsZWFmLXdyYXBwZWQgcGF0b2xpcy5cIikpXG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhcmEodGV4dCl7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmEudGV4dENvbnRlbnQ9KHRleHQpO1xuICAgIHJldHVybiBwYXJhO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50PVwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWtlSG9tZSgpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZTsiLCJmdW5jdGlvbiBtYWtlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIG1ha2VNZW51SXRlbShcbiAgICAgICAgICBcIlBPTUZSRVRcIixcbiAgICAgICAgICBcIlBvbWZyZXQgZmlzaCBpcyBrbm93biBmb3IgaXRzIGRlbGljYXRlLCBmbGFreSB3aGl0ZSBmbGVzaCBhbmQgbWlsZCwgc3dlZXQgZmxhdm9yLiBJdCBpcyBjb25zaWRlcmVkIGEgZGVsaWNhY3kgaW4gbWFueSBwYXJ0cyBvZiBBc2lhIGFuZCBpcyBvZnRlbiBzZXJ2ZWQgYXMgYSB3aG9sZSBmaXNoIHdpdGggaXRzIGhlYWQgYW5kIHRhaWwgaW50YWN0LiBUaGUgZmlzaCBjYW4gYmUgY29va2VkIGluIGEgdmFyaWV0eSBvZiB3YXlzLCBpbmNsdWRpbmcgc3RlYW1pbmcsIGdyaWxsaW5nLCBmcnlpbmcsIGFuZCBiYWtpbmcuXCJcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICBtYWtlTWVudUl0ZW0oXG4gICAgICAgIFwiR09MSUJBSkVcIixcbiAgICAgICAgXCJHb2xpYmFqZSBvciBNYW5nYWxvcmUgYmFqamkgaXMgYW4gSW5kaWFuIGZyaWVkIGZvb2QgbWFkZSBmcm9tIHZhcmlvdXMgZmxvdXJzIGFuZCBjdXJkLiBJbiBUdWx1IE5hZHUgcmVnaW9uLCBpdCBpcyBrbm93biBhcyBnb2xpYmFqZS4gT3RoZXIgbmFtZXMgZm9yIHRoZSBkaXNoIGluY2x1ZGUgTWFuZ2Fsb3JlIGJhamUuIFRoaXMgaXMgd2lkZWx5IGZhbW91cyBpbiBBbmRocmEgUHJhZGVzaCBhbmQgVGVsYW5nYW5hIGFzIE15c29yZSBib25kYS9iYWpqaS5cIixcbiAgICAgICAgXCJnb2xpYmFqZVwiXG4gICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgbWFrZU1lbnVJdGVtKFxuICAgICAgICBcIktPUklST1RJXCIsXG4gICAgICAgIFwiS29yaSByb3R0aSBpcyBhIHNwaWN5IGRpc2ggb2YgVHVsdSBVZHVwaS1NYW5nYWxvcmVhbiBjdWlzaW5lLCBhIGNvbWJpbmF0aW9uIG9mIHJlZC1jaGlsaSBhbmQgY29jb251dCBtaWxrIGJhc2VkIGNoaWNrZW4gY3VycnkgYW5kIGNyaXNwLCBkcnkgd2FmZXJzIG1hZGUgZnJvbSBib2lsZWQgcmljZS4gS29yaSBtZWFucyBjaGlja2VuIGluIFR1bHUuXCIsXG4gICAgICAgIFwia29yaXJvdGlcIlxuICAgICAgKVxuICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgIG1ha2VNZW51SXRlbShcbiAgICAgICAgXCJHSEVFUk9BU1RcIixcbiAgICAgICAgXCJDaGlja2VuIGdoZWUgcm9hc3QgaXMgYSBwb3B1bGFyIFR1bHV2YSBNYW5nYWxvcmVhbiBDaGlja2VuIHJlY2lwZSB3aG9zZSBvcmlnaW5zIGdvIGJhY2sgdG8gdGhlIHRvd24sIEt1bmRhcHVyLCBjbG9zZSB0byBVZHVwaS4gQ2hpY2tlbiBnaGVlIHJvYXN0IGlzIGZpZXJ5IHJlZCBpbiBjb2xvdXIsIGFuZCBoYXMgYSB0YW5neSBhbmQgc3BpY3kgZmxhdm9yIHdpdGggZ2hlZSBhbmQgcm9hc3RlZCBzcGljZXMuXCIsXG4gICAgICAgIFwiZ2hlZXJvYXN0XCJcbiAgICAgIClcbiAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICBtYWtlTWVudUl0ZW0oXG4gICAgICAgIFwiTkVFUkRPU0FcIixcbiAgICAgICAgXCJOZWVyIGRvc2EsIGxpdGVyYWxseSBtZWFuaW5nIHdhdGVyIGRvc2EgaW4gVHVsdSBpcyBhIGNyw6pwZSBwcmVwYXJlZCBmcm9tIHJpY2UgYmF0dGVyLiBOZWVyIGRvc2EgaXMgYSBkZWxpY2FjeSBmcm9tIFR1bHUgTmFkdSBhbmQgcGFydCBvZiBNYW5nYWxvcmVhbiBjdWlzaW5lXCIsXG4gICAgICAgIFwibmVlcmRvc2FcIlxuICAgICAgKVxuICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgIG1ha2VNZW51SXRlbShcbiAgICAgICAgXCJQQVRIT0xJXCIsXG4gICAgICAgIFwiUGF0aG9saSAocGx1cmFsOiBQYXRvbGVvKSBhcmUgc3dlZXQgc3R1ZmZlZCByaWNlIHJvbGxzIHdoaWNoIGFyZSBzdGVhbWVkIHdyYXBwZWQgaW4gdHVybWVyaWMgbGVhdmVzLiBTaW5jZSB0aGVyZeKAmXMgYSB1bmlxdWUgdGVjaG5pcXVlIGludm9sdmVkIGluIHRoaXMgcmVjaXBlLCB0aGUgcHJlcGFyYXRpb24gYW5kIGNvb2tpbmcgb2YgdGhpcyBkaXNoIGlzIGxhYm9yaW91cy4gSXQgaXMgdmVnYW4gYW5kIHNpbmNlIHJpY2UgZmxvdXIgaXMgdGhlIG1haW4gaW5ncmVkaWVudCwgdGhlIGRpc2ggaXMgZ2x1dGVuIGZyZWUgdG9vLlwiLFxuICAgICAgICBcInBhdGhvbGlcIlxuICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cbmZ1bmN0aW9uIG1ha2VNZW51SXRlbShpdGVtLCBub3Rlcykge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICBcbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IGl0ZW07XG4gIFxuICAgIGNvbnN0IGl0ZW1Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGl0ZW1Ob3Rlcy50ZXh0Q29udGVudCA9IG5vdGVzO1xuICBcbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51SW1nJyk7XG4gICAgaXRlbUltYWdlLnNyYyA9IGAuLi9zcmMvaW1hZ2VzLyR7aXRlbS50b0xvd2VyQ2FzZSgpfS5qcGdgO1xuICAgIGl0ZW1JbWFnZS5hbHQgPSBgSW1hZ2Ugb2YgJHtpdGVtfWA7XG4gIFxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1Ob3Rlcyk7XG4gIFxuICAgIHJldHVybiBtZW51SXRlbTtcbiAgfVxuZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudD1cIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFrZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51UGFnZTsiLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgaGVsbWV0IGZyb20gJy4vaW1hZ2VzL2hlbG1ldC5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnROYW1lXCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50PShcIlRoZSBNQU5HQUxPUkVBTlwiKTtcbiAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50PShcIkhPTUVcIik7IFxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdXR0b24pO1xuICAgICAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50PShcIk1FTlVcIik7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQ9KFwiQ09OVEFDVFwiKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbnNcIik7XG4gIFxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICBcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgZm9vdGVyVGV4dEwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3RlclRleHRMLmlubmVySFRNTCA9ICdBIE1hbmd5IHByb2plY3QnO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dEwpO1xuXG4gIGNvbnN0IGZvb3RlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGZvb3RlckltYWdlLnNyYyA9IGhlbG1ldDtcbiAgZm9vdGVySW1hZ2UuYWx0ID0gJ01hbmdhbG9yaWFuIEhlbG1ldCc7XG4gIGZvb3RlckltYWdlLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckltYWdlJyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJJbWFnZSk7XG4gIFxuICBjb25zdCBmb290ZXJUZXh0UiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9vdGVyVGV4dFIuaW5uZXJIVE1MID0gJ05NIERlYyAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHRSKTtcbiAgXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIHdlYkluaXRpYWxpemUoKXtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkIChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCAoY3JlYXRlTWFpbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkIChjcmVhdGVGb290ZXIoKSk7XG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIikpO1xuICBsb2FkSG9tZVBhZ2UoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHdlYkluaXRpYWxpemU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB3ZWJJbml0aWFsaXplIGZyb20gXCIuL3dlYnNpdGUuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xud2ViSW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9