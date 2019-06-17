webpackHotUpdate('static/development/pages/index.js', {
	/***/ './pages/index.js':
		/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
		/*! exports provided: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__);
			/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
				react__WEBPACK_IMPORTED_MODULE_0__
			);
			/* harmony import */ var _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
				/*! ../data/cmyk-adobe-coated-fogra39.json */ './data/cmyk-adobe-coated-fogra39.json'
			);
			var _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/ __webpack_require__.t(
				/*! ../data/cmyk-adobe-coated-fogra39.json */ './data/cmyk-adobe-coated-fogra39.json',
				1
			);
			/* harmony import */ var _components_Swatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
				/*! ../components/Swatch */ './components/Swatch.js'
			);
			var _jsxFileName =
				'/Users/danburzo/projects/webcolors-cmyk/pages/index.js';

			var Home = function Home() {
				return _data_cmyk_adobe_coated_fogra39_json__WEBPACK_IMPORTED_MODULE_1__.map(
					function(_ref) {
						var converted = _ref.converted;
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							_components_Swatch__WEBPACK_IMPORTED_MODULE_2__[
								'default'
							],
							{
								color: converted,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 6
								},
								__self: this
							}
						);
					}
				);
			};

			/* harmony default export */ __webpack_exports__['default'] = Home;

			/***/
		}
});
//# sourceMappingURL=index.js.4c240b202780fa9b4019.hot-update.js.map
