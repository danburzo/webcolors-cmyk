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








var colors = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(culori__WEBPACK_IMPORTED_MODULE_3__["colorsNamed"]).sort();

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('rgb'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist ".concat(tab === 'rgb' ? "swatchlist--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, colors.map(function (color, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: color,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist ".concat(tab === 'coatedFogra' ? "swatchlist--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_4__.map(function (_ref, i) {
    var converted = _ref.converted;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: converted,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist ".concat(tab === 'uncoatedFogra' ? "swatchlist--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _data_cmyk_adobe_uncoated_fogra29_json__WEBPACK_IMPORTED_MODULE_5__.map(function (_ref2, i) {
    var converted = _ref2.converted;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: converted,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist ".concat(tab === 'webCoated' ? "swatchlist--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _data_cmyk_adobe_us_web_coated_swop_json__WEBPACK_IMPORTED_MODULE_6__.map(function (_ref3, i) {
    var converted = _ref3.converted;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: converted,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "swatchlist ".concat(tab === 'webUncoated' ? "swatchlist--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _data_cmyk_adobe_us_web_uncoated_json__WEBPACK_IMPORTED_MODULE_7__.map(function (_ref4, i) {
    var converted = _ref4.converted;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Swatch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: converted,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9bb75a84a82e928339c0.hot-update.js.map