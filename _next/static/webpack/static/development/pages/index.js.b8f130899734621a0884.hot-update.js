webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var culori__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! culori */ "./node_modules/culori/build/culori.umd.js");
/* harmony import */ var culori__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(culori__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/cmyk-adobe-coated-fogra39.json */ "./data/cmyk-adobe-coated-fogra39.json");
var _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/cmyk-adobe-coated-fogra39.json */ "./data/cmyk-adobe-coated-fogra39.json", 1);
/* harmony import */ var _data_cmyk_adobe_uncoated_fogra29_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/cmyk-adobe-uncoated-fogra29.json */ "./data/cmyk-adobe-uncoated-fogra29.json");
var _data_cmyk_adobe_uncoated_fogra29_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/cmyk-adobe-uncoated-fogra29.json */ "./data/cmyk-adobe-uncoated-fogra29.json", 1);
/* harmony import */ var _data_cmyk_adobe_us_web_coated_swop_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/cmyk-adobe-us-web-coated-swop.json */ "./data/cmyk-adobe-us-web-coated-swop.json");
var _data_cmyk_adobe_us_web_coated_swop_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/cmyk-adobe-us-web-coated-swop.json */ "./data/cmyk-adobe-us-web-coated-swop.json", 1);
/* harmony import */ var _data_cmyk_adobe_us_web_uncoated_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/cmyk-adobe-us-web-uncoated.json */ "./data/cmyk-adobe-us-web-uncoated.json");
var _data_cmyk_adobe_us_web_uncoated_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/cmyk-adobe-us-web-uncoated.json */ "./data/cmyk-adobe-us-web-uncoated.json", 1);
/* harmony import */ var _components_Swatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Swatch */ "./components/Swatch.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/danburzo/projects/webcolors-cmyk/pages/index.js";

// Libs

 // Data








var rgb = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(culori__WEBPACK_IMPORTED_MODULE_3__["colorsNamed"]).sort().map(function (c) {
  return {
    converted: c
  };
});

var colormap = {
  rgb: rgb,
  coatedFogra: _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_4__,
  uncoatedFogra: _data_cmyk_adobe_uncoated_fogra29_json__WEBPACK_IMPORTED_MODULE_5__,
  webCoated: _data_cmyk_adobe_us_web_coated_swop_json__WEBPACK_IMPORTED_MODULE_6__,
  webUncoated: _data_cmyk_adobe_us_web_uncoated_json__WEBPACK_IMPORTED_MODULE_7__
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('rgb'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var list = colormap[tab];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setTab('rgb');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "RGB"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setTab('coatedFogra');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Coated FOGRA 39"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setTab('uncoatedFogra');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Uncoated FOGRA 29"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setTab('webCoated');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "US Web Coated SWOP"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setTab('webUncoated');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "US Web Uncoated")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, list.map(function (_ref, i) {
    var converted = _ref.converted;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: converted,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b8f130899734621a0884.hot-update.js.map