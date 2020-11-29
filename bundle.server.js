/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/server */ \"./src/server/index.tsx\");\n\nvar PORT = process.env.PORT || 3006;\n_src_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(PORT, function () {\n    console.log(\"Server is listening on port \" + PORT);\n});\n\n\n//# sourceURL=webpack:///./server.ts?");

/***/ }),

/***/ "./src/client/App.tsx":
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./src/client/components/index.tsx\");\n/* harmony import */ var _layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-components */ \"./src/client/layout-components/index.tsx\");\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes */ \"./src/client/Routes.tsx\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nfunction App() {\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], __assign({ theme: { mode: 'light' } }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", __assign({ className: \"App\" }, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_layout_components__WEBPACK_IMPORTED_MODULE_3__[\"WindoW\"], __assign({ init: true, column: true }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {}, void 0),\n                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0),\n                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_components__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"], {}, void 0)] }), void 0) }), void 0) }), void 0));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack:///./src/client/App.tsx?");

/***/ }),

/***/ "./src/client/Routes.tsx":
/*!*******************************!*\
  !*** ./src/client/Routes.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ \"./src/client/pages/index.tsx\");\n\n\n\nvar Routes = function () {\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { to: '/', component: _pages__WEBPACK_IMPORTED_MODULE_2__[\"Home\"] }, void 0) }, void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n\n//# sourceURL=webpack:///./src/client/Routes.tsx?");

/***/ }),

/***/ "./src/client/components/Footer.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-config */ \"./src/client/site-config/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\n\n\n\nvar Foot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  width: 100%;\\n  height: \", \";\\n  box-shadow: 1px 1px transparent;\\n  border-top: 1px solid #dadce0;\\n  background: \", \";\\n\"], [\"\\n  width: 100%;\\n  height: \", \";\\n  box-shadow: 1px 1px transparent;\\n  border-top: 1px solid #dadce0;\\n  background: \",\n    \";\\n\"])), _site_config__WEBPACK_IMPORTED_MODULE_2__[\"siteConfig\"].style.footerHeight, function (props) {\n    return props.background ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"][props.background] : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].background;\n});\nvar Footer = function (props) {\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Foot, {}, void 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/components/Footer.tsx?");

/***/ }),

/***/ "./src/client/components/Nav.tsx":
/*!***************************************!*\
  !*** ./src/client/components/Nav.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-components */ \"./src/client/content-components/index.tsx\");\n/* harmony import */ var _layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-components */ \"./src/client/layout-components/index.tsx\");\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site-config */ \"./src/client/site-config/index.ts\");\n/* harmony import */ var _typography_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typography-components */ \"./src/client/typography-components/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: \", \";\\n  width: 100%;\\n  height: \", \";\\n  box-shadow: 1px 1px transparent;\\n  border-bottom: 1px solid #dadce0;\\n\"], [\"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: \",\n    \";\\n  width: 100%;\\n  height: \", \";\\n  box-shadow: 1px 1px transparent;\\n  border-bottom: 1px solid #dadce0;\\n\"])), function (props) {\n    return props.background ? _site_config__WEBPACK_IMPORTED_MODULE_4__[\"colors\"][props.background] : _site_config__WEBPACK_IMPORTED_MODULE_4__[\"colors\"].background;\n}, _site_config__WEBPACK_IMPORTED_MODULE_4__[\"siteConfig\"].style.navHeight);\nvar links = [{ path: '/', text: 'Home' }];\nvar Navbar = function (props) {\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Nav, __assign({}, props, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_layout_components__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], __assign({ width: '90%', layout: [50, 50] }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_content_components__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], { height: _site_config__WEBPACK_IMPORTED_MODULE_4__[\"siteConfig\"].style.navHeight, src: \"https://www.logolynx.com/images/logolynx/c7/c7c248a2814b2049d22615ae332559de.jpeg\" }, void 0),\n                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_layout_components__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], __assign({ xAlign: 'flex-end', height: _site_config__WEBPACK_IMPORTED_MODULE_4__[\"siteConfig\"].style.navHeight, yAlign: \"center\" }, { children: links.map(function (_a) {\n                        var path = _a.path, text = _a.text;\n                        return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], __assign({ variant: \"p\", to: path }, { children: \"Text\" }), text));\n                    }) }), void 0)] }), void 0) }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/components/Nav.tsx?");

/***/ }),

/***/ "./src/client/components/index.tsx":
/*!*****************************************!*\
  !*** ./src/client/components/index.tsx ***!
  \*****************************************/
/*! exports provided: Nav, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ \"./src/client/components/Nav.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return _Nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/client/components/Footer.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/components/index.tsx?");

/***/ }),

/***/ "./src/client/content-components/Icon.tsx":
/*!************************************************!*\
  !*** ./src/client/content-components/Icon.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-config */ \"./src/client/site-config/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar iconSizes = {\n    verySmall: '10px',\n    small: '20px',\n    normal: '30px',\n    large: '40px',\n    veryLarge: '50px',\n};\nvar Element = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  font-size: \", \";\\n  color: \", \";\\n\"], [\"\\n  font-size: \", \";\\n  color: \", \";\\n\"])), function (props) { return (props.size ? iconSizes[props.size] : iconSizes.normal); }, function (props) { return (props.color ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"][props.color] : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].background); });\nvar Icon = function (props) {\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Element, __assign({}, props, { className: \"\" + (props.provider || 'material-icons') }, { children: props.name }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/content-components/Icon.tsx?");

/***/ }),

/***/ "./src/client/content-components/Image.tsx":
/*!*************************************************!*\
  !*** ./src/client/content-components/Image.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  width: \", \";\\n  height: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n  object-fit: \", \";\\n\"], [\"\\n  width: \", \";\\n  height: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n  object-fit: \", \";\\n\"])), function (props) { return props.width || 'auto'; }, function (props) { return props.height || 'auto'; }, function (props) { return props.margin || '0'; }, function (props) { return props.padding || '0'; }, function (props) { return props.objectFit || 'contain'; });\nvar Image = function (props) {\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Img, __assign({}, props), void 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/content-components/Image.tsx?");

/***/ }),

/***/ "./src/client/content-components/index.tsx":
/*!*************************************************!*\
  !*** ./src/client/content-components/index.tsx ***!
  \*************************************************/
/*! exports provided: Image, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ \"./src/client/content-components/Image.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ \"./src/client/content-components/Icon.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Icon\", function() { return _Icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/content-components/index.tsx?");

/***/ }),

/***/ "./src/client/element-components/buttons/Button.tsx":
/*!**********************************************************!*\
  !*** ./src/client/element-components/buttons/Button.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../site-config */ \"./src/client/site-config/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar Element = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  \\n  width: auto;\\n  min-width: 120px;\\n  height: 60px;\\n  cursor: pointer;\\n  background: \", \";\\n  color: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n  border-radius: 5px;\\n  outline: none;\\n  \\n  &:disabled {\\n    background: \", \";\\n    color: #fff;\\n    opacity: .7;\\n    cursor: not-allowed;\\n  }\\n  &:not([disabled]):hover {\\n    cursor: pointer;\\n  }\\n\"], [\"\\n  \\n  width: auto;\\n  min-width: 120px;\\n  height: 60px;\\n  cursor: pointer;\\n  background: \",\n    \";\\n  color: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n  border-radius: 5px;\\n  outline: none;\\n  \\n  &:disabled {\\n    background: \", \";\\n    color: #fff;\\n    opacity: .7;\\n    cursor: not-allowed;\\n  }\\n  &:not([disabled]):hover {\\n    cursor: pointer;\\n  }\\n\"])), function (props) {\n    return props.background ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"][props.background] : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].background;\n}, function (props) { return (props.color ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"][props.color] : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].background); }, function (props) { return props.margin || '0'; }, function (props) { return props.padding || '0'; }, _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].disabled);\nvar Button = function (props) {\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Element, __assign({}, props, { children: props.children }), void 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/element-components/buttons/Button.tsx?");

/***/ }),

/***/ "./src/client/element-components/buttons/index.tsx":
/*!*********************************************************!*\
  !*** ./src/client/element-components/buttons/index.tsx ***!
  \*********************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/client/element-components/buttons/Button.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/element-components/buttons/index.tsx?");

/***/ }),

/***/ "./src/client/element-components/index.tsx":
/*!*************************************************!*\
  !*** ./src/client/element-components/index.tsx ***!
  \*************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/client/element-components/buttons/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _buttons__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/element-components/index.tsx?");

/***/ }),

/***/ "./src/client/layout-components/Flex.tsx":
/*!***********************************************!*\
  !*** ./src/client/layout-components/Flex.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/client/util/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar Vessel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  display: flex;\\n  flex-direction: \", \";\\n  flex-wrap: \", \";\\n  width: \", \";\\n  height: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n  \", \"\\n\"], [\"\\n  display: flex;\\n  flex-direction: \", \";\\n  flex-wrap: \", \";\\n  width: \", \";\\n  height: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n  \", \"\\n\"])), function (props) { return (props.column ? 'column' : 'row'); }, function (props) { return (props.noWrap ? 'nowrap' : 'wrap'); }, function (props) { return props.width || '100%'; }, function (props) { return props.height || 'auto'; }, function (props) { return props.margin || '0'; }, function (props) { return props.padding || '0'; }, function (props) { var _a; return (_a = props.alignment) === null || _a === void 0 ? void 0 : _a.map(function (str) { return str; }); });\nvar Flex = function (props) {\n    var alignment = Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"getFlexAlignment\"])({\n        column: props.column,\n        yAlign: props.yAlign,\n        xAlign: props.xAlign,\n    });\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Vessel, __assign({}, props, { alignment: alignment }), void 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flex);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/layout-components/Flex.tsx?");

/***/ }),

/***/ "./src/client/layout-components/Grid.tsx":
/*!***********************************************!*\
  !*** ./src/client/layout-components/Grid.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\nvar Vessel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  display: grid;\\n  grid-template-columns: \", \";\\n  width: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n\"], [\"\\n  display: grid;\\n  grid-template-columns: \",\n    \";\\n  width: \", \";\\n  margin: \", \";\\n  padding: \", \";\\n\"])), function (props) {\n    return props.centerMobile ? 'repeat(auto-fill, 100%)' : props.formattedLayout;\n}, function (props) { return props.width || '100%'; }, function (props) { return props.margin || '0'; }, function (props) { return props.padding || '0'; });\nvar Grid = function (props) {\n    var formattedLayout = props.layout.reduce(function (acc, curr) { return (acc += \" \" + curr + \"%\"); }, '');\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Vessel, __assign({}, props, { formattedLayout: formattedLayout }, { children: props.children }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/layout-components/Grid.tsx?");

/***/ }),

/***/ "./src/client/layout-components/WindoW.tsx":
/*!*************************************************!*\
  !*** ./src/client/layout-components/WindoW.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-config */ \"./src/client/site-config/index.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ \"./src/client/util/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar Vessel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  display: flex;\\n  flex-direction: \", \";\\n  flex-wrap: \", \";\\n  min-height: \", \";\\n  width: 100vw;\\n  background: \", \";\\n  \", \"\\n\"], [\"\\n  display: flex;\\n  flex-direction: \", \";\\n  flex-wrap: \", \";\\n  min-height: \", \";\\n  width: 100vw;\\n  background: \",\n    \";\\n  \", \"\\n\"])), function (props) { return (props.column ? 'column' : 'row'); }, function (props) { return (props.noWrap ? 'nowrap' : 'wrap'); }, function (props) { return props.init ? \"calc(100vh - \" + _site_config__WEBPACK_IMPORTED_MODULE_2__[\"siteConfig\"].style.navHeight + \" - \" + _site_config__WEBPACK_IMPORTED_MODULE_2__[\"siteConfig\"].style.footerHeight + \")\" : '100vh'; }, function (props) {\n    return props.background ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"][props.background] : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].background;\n}, function (props) { var _a; return (_a = props.alignment) === null || _a === void 0 ? void 0 : _a.map(function (str) { return str; }); });\nvar WindoW = function (props) {\n    var alignment = Object(_util__WEBPACK_IMPORTED_MODULE_3__[\"getFlexAlignment\"])({\n        column: props.column,\n        yAlign: props.yAlign,\n        xAlign: props.xAlign,\n    });\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Vessel, __assign({}, props, { alignment: alignment }), void 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindoW);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/client/layout-components/WindoW.tsx?");

/***/ }),

/***/ "./src/client/layout-components/index.tsx":
/*!************************************************!*\
  !*** ./src/client/layout-components/index.tsx ***!
  \************************************************/
/*! exports provided: WindoW, Grid, Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WindoW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WindoW */ \"./src/client/layout-components/WindoW.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WindoW\", function() { return _WindoW__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ \"./src/client/layout-components/Grid.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flex */ \"./src/client/layout-components/Flex.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Flex\", function() { return _Flex__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/layout-components/index.tsx?");

/***/ }),

/***/ "./src/client/pages/Home.tsx":
/*!***********************************!*\
  !*** ./src/client/pages/Home.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-components */ \"./src/client/content-components/index.tsx\");\n/* harmony import */ var _element_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element-components */ \"./src/client/element-components/index.tsx\");\n/* harmony import */ var _layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-components */ \"./src/client/layout-components/index.tsx\");\n/* harmony import */ var _typography_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../typography-components */ \"./src/client/typography-components/index.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nvar Home = function () {\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_layout_components__WEBPACK_IMPORTED_MODULE_3__[\"WindoW\"], __assign({ init: true, xAlign: \"center\", yAlign: \"center\", column: true }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ color: \"safe\", variant: \"h1\" }, { children: \"Hello\" }), void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"h2\" }, { children: \"Hello\" }), void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"h3\" }, { children: \"Hello\" }), void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_layout_components__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], __assign({ yAlign: \"flex-start\", xAlign: \"center\" }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"h4\" }, { children: \"Hello\" }), void 0),\n                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"h5\" }, { children: \"Hello\" }), void 0)] }), void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_element_components__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], __assign({ background: 'safe', onClick: function () { return console.log('click'); } }, { children: \"Hello\" }), void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxs\"])(_layout_components__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], __assign({ layout: [23, 40, 17] }, { children: [Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"h6\" }, { children: \"Hello\" }), void 0),\n                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"p\" }, { children: \"Hello\" }), void 0),\n                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], __assign({ variant: \"span\" }, { children: \"Hello\" }), void 0)] }), void 0),\n            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_content_components__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], { size: 'veryLarge', name: 'send', color: 'safe' }, void 0)] }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack:///./src/client/pages/Home.tsx?");

/***/ }),

/***/ "./src/client/pages/index.tsx":
/*!************************************!*\
  !*** ./src/client/pages/index.tsx ***!
  \************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/client/pages/Home.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/pages/index.tsx?");

/***/ }),

/***/ "./src/client/site-config/colors.ts":
/*!******************************************!*\
  !*** ./src/client/site-config/colors.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-theming */ \"styled-theming\");\n/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_0__);\n\nvar colors = {\n    primary: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: 'red',\n        dark: '#000',\n    }),\n    secondary: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: 'black',\n        dark: '#000',\n    }),\n    tertiary: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: 'gray',\n        dark: '#000',\n    }),\n    quaternary: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: 'yellow',\n        dark: '#000',\n    }),\n    danger: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: 'red',\n        dark: '#000',\n    }),\n    safe: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: 'forestgreen',\n        dark: '#000',\n    }),\n    background: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: '#fff',\n        dark: '#000',\n    }),\n    disabled: styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {\n        light: '#eee',\n        dark: '#eee',\n    }),\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (colors);\n\n\n//# sourceURL=webpack:///./src/client/site-config/colors.ts?");

/***/ }),

/***/ "./src/client/site-config/fontFamily.ts":
/*!**********************************************!*\
  !*** ./src/client/site-config/fontFamily.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar fontFamily = {\n    primary: 'Montserrat',\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fontFamily);\n\n\n//# sourceURL=webpack:///./src/client/site-config/fontFamily.ts?");

/***/ }),

/***/ "./src/client/site-config/index.ts":
/*!*****************************************!*\
  !*** ./src/client/site-config/index.ts ***!
  \*****************************************/
/*! exports provided: colors, fontFamily, siteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/client/site-config/colors.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _fontFamily__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontFamily */ \"./src/client/site-config/fontFamily.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fontFamily\", function() { return _fontFamily__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ \"./src/client/site-config/interfaces/index.ts\");\n/* empty/unused harmony star reexport *//* harmony import */ var _site_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-config.json */ \"./src/client/site-config/site-config.json\");\nvar _site_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./site-config.json */ \"./src/client/site-config/site-config.json\", 1);\n/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, \"siteConfig\", function() { return _site_config_json__WEBPACK_IMPORTED_MODULE_3__; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/site-config/index.ts?");

/***/ }),

/***/ "./src/client/site-config/interfaces/index.ts":
/*!****************************************************!*\
  !*** ./src/client/site-config/interfaces/index.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\n//# sourceURL=webpack:///./src/client/site-config/interfaces/index.ts?");

/***/ }),

/***/ "./src/client/site-config/site-config.json":
/*!*************************************************!*\
  !*** ./src/client/site-config/site-config.json ***!
  \*************************************************/
/*! exports provided: style, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"style\\\":{\\\"navHeight\\\":\\\"70px\\\",\\\"footerHeight\\\":\\\"70px\\\"}}\");\n\n//# sourceURL=webpack:///./src/client/site-config/site-config.json?");

/***/ }),

/***/ "./src/client/typography-components/Link.tsx":
/*!***************************************************!*\
  !*** ./src/client/typography-components/Link.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _typography_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography-components */ \"./src/client/typography-components/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\nvar a = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\"], [\"\"])));\nvar L = function (props) {\n    var Element = props.external ? a : react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"];\n    var StyledElement = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Element).attrs({\n        href: props.to,\n        target: props.openInNewTab ? '_blank' : '',\n    })(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n    transition: all 300ms;\\n    text-decoration: none;\\n    &:hover {\\n      text-decoration: underline;\\n    }\\n  \"], [\"\\n    transition: all 300ms;\\n    text-decoration: none;\\n    &:hover {\\n      text-decoration: underline;\\n    }\\n  \"])));\n    return (Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(StyledElement, __assign({}, props, { children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_typography_components__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], __assign({}, props, { children: props.children }), void 0) }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (L);\nvar templateObject_1, templateObject_2;\n\n\n//# sourceURL=webpack:///./src/client/typography-components/Link.tsx?");

/***/ }),

/***/ "./src/client/typography-components/Typography.tsx":
/*!*********************************************************!*\
  !*** ./src/client/typography-components/Typography.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-config */ \"./src/client/site-config/index.ts\");\nvar __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar h1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n  font-size: 4em;\\n\"], [\"\\n  font-size: 4em;\\n\"])));\nvar h2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n  font-size: 3.5em;\\n\"], [\"\\n  font-size: 3.5em;\\n\"])));\nvar h3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n  font-size: 3em;\\n\"], [\"\\n  font-size: 3em;\\n\"])));\nvar h4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4(templateObject_4 || (templateObject_4 = __makeTemplateObject([\"\\n  font-size: 2.5em;\\n\"], [\"\\n  font-size: 2.5em;\\n\"])));\nvar h5 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5(templateObject_5 || (templateObject_5 = __makeTemplateObject([\"\\n  font-size: 2em;\\n\"], [\"\\n  font-size: 2em;\\n\"])));\nvar h6 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h6(templateObject_6 || (templateObject_6 = __makeTemplateObject([\"\\n  font-size: 1.5em;\\n\"], [\"\\n  font-size: 1.5em;\\n\"])));\nvar p = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(templateObject_7 || (templateObject_7 = __makeTemplateObject([\"\\n  font-size: 1em;\\n\"], [\"\\n  font-size: 1em;\\n\"])));\nvar span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(templateObject_8 || (templateObject_8 = __makeTemplateObject([\"\\n  font-size: 0.5em;\\n\"], [\"\\n  font-size: 0.5em;\\n\"])));\nvar TextComponents = {\n    h1: h1,\n    h2: h2,\n    h3: h3,\n    h4: h4,\n    h5: h5,\n    h6: h6,\n    p: p,\n    span: span,\n};\nvar Typography = function (props) {\n    var Element = props.variant\n        ? TextComponents[props.variant]\n        : TextComponents.span;\n    var StyledElement = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Element).attrs({})(templateObject_9 || (templateObject_9 = __makeTemplateObject([\"\\n    color: \", \";\\n    margin: \", \";\\n    padding: \", \";\\n    line-height: 1.5;\\n    -moz-osx-font-smoothing: grayscale;\\n    -webkit-font-smoothing: antialiased;\\n    transition: all 300ms;\\n    font-family: \", \";\\n  \"], [\"\\n    color: \", \";\\n    margin: \", \";\\n    padding: \", \";\\n    line-height: 1.5;\\n    -moz-osx-font-smoothing: grayscale;\\n    -webkit-font-smoothing: antialiased;\\n    transition: all 300ms;\\n    font-family: \",\n        \";\\n  \"])), props.color ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"][props.color] : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].primary, props.margin || '0', props.padding || '0', props.fontFamily\n        ? _site_config__WEBPACK_IMPORTED_MODULE_2__[\"fontFamily\"][props.fontFamily]\n        : _site_config__WEBPACK_IMPORTED_MODULE_2__[\"fontFamily\"].primary);\n    return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(StyledElement, __assign({}, props), void 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typography);\nvar templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;\n\n\n//# sourceURL=webpack:///./src/client/typography-components/Typography.tsx?");

/***/ }),

/***/ "./src/client/typography-components/index.ts":
/*!***************************************************!*\
  !*** ./src/client/typography-components/index.ts ***!
  \***************************************************/
/*! exports provided: Typography, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography */ \"./src/client/typography-components/Typography.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Typography\", function() { return _Typography__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ \"./src/client/typography-components/Link.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return _Link__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/typography-components/index.ts?");

/***/ }),

/***/ "./src/client/util/getFlexAlignment.ts":
/*!*********************************************!*\
  !*** ./src/client/util/getFlexAlignment.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getFlexAlignment = function (_a) {\n    var column = _a.column, yAlign = _a.yAlign, xAlign = _a.xAlign;\n    var alignment = [];\n    if (column) {\n        alignment.push(\"justify-content: \" + yAlign + \";\");\n        alignment.push(\"align-items: \" + xAlign + \";\");\n    }\n    else {\n        alignment.push(\"justify-content: \" + xAlign + \";\");\n        alignment.push(\"align-items: \" + yAlign + \";\");\n    }\n    return alignment;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFlexAlignment);\n\n\n//# sourceURL=webpack:///./src/client/util/getFlexAlignment.ts?");

/***/ }),

/***/ "./src/client/util/index.ts":
/*!**********************************!*\
  !*** ./src/client/util/index.ts ***!
  \**********************************/
/*! exports provided: getFlexAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getFlexAlignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFlexAlignment */ \"./src/client/util/getFlexAlignment.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFlexAlignment\", function() { return _getFlexAlignment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/util/index.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.tsx\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ \"./src/server/util/index.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\n // <-- importing ServerStyleSheet\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.get('/', function (req, res) {\n    var context = {};\n    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__[\"ServerStyleSheet\"]();\n    var body = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], __assign({ location: req.url, context: context }, { children: sheet.collectStyles(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_client_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0)) }), void 0));\n    var styles = sheet.getStyleTags();\n    var title = Object(_util__WEBPACK_IMPORTED_MODULE_7__[\"getTitle\"])({ url: req.url });\n    var indexFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('./build/index.html');\n    res.send(Object(_util__WEBPACK_IMPORTED_MODULE_7__[\"html\"])({ body: body, title: title, styles: styles }));\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('./build'));\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n\n//# sourceURL=webpack:///./src/server/index.tsx?");

/***/ }),

/***/ "./src/server/util/getTitle.ts":
/*!*************************************!*\
  !*** ./src/server/util/getTitle.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getTitle = function (_a) {\n    var url = _a.url;\n    console.log(url);\n    return 'TITLE HERE';\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getTitle);\n\n\n//# sourceURL=webpack:///./src/server/util/getTitle.ts?");

/***/ }),

/***/ "./src/server/util/html.ts":
/*!*********************************!*\
  !*** ./src/server/util/html.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar html = function (_a) {\n    var body = _a.body, title = _a.title, styles = _a.styles;\n    return \"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <title>\" + title + \"</title>\\n      <meta charset=\\\"utf-8\\\" />\\n      <link rel=\\\"icon\\\" href=\\\"%PUBLIC_URL%/favicon.ico\\\" />\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n      <meta name=\\\"theme-color\\\" content=\\\"#000000\\\" />\\n      <meta\\n        name=\\\"description\\\"\\n        content=\\\"Web site created using create-react-app\\\"\\n      />\\n      <link rel=\\\"apple-touch-icon\\\" href=\\\"%PUBLIC_URL%/logo192.png\\\" />\\n\\n      <link rel=\\\"manifest\\\" href=\\\"%PUBLIC_URL%/manifest.json\\\" />\\n      <link\\n        href=\\\"https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap\\\"\\n        rel=\\\"stylesheet\\\"\\n      />\\n      <link\\n        href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\"\\n        rel=\\\"stylesheet\\\"\\n      />\\n      \" + styles + \"\\n    </head>\\n    <body style=\\\"margin:0\\\">\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n    </body>\\n  </html>\\n\";\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (html);\n\n\n//# sourceURL=webpack:///./src/server/util/html.ts?");

/***/ }),

/***/ "./src/server/util/index.ts":
/*!**********************************!*\
  !*** ./src/server/util/index.ts ***!
  \**********************************/
/*! exports provided: html, getTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ \"./src/server/util/html.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return _html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _getTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTitle */ \"./src/server/util/getTitle.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getTitle\", function() { return _getTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/server/util/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-runtime\");\n\n//# sourceURL=webpack:///external_%22react/jsx-runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "styled-theming":
/*!*********************************!*\
  !*** external "styled-theming" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-theming\");\n\n//# sourceURL=webpack:///external_%22styled-theming%22?");

/***/ })

/******/ });