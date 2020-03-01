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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    'message': 'hello from A'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2EuanM/YzE5OCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxHQUFULEVBQWE7QUFDNUJBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1QsZUFBVTtBQURELEdBQVg7QUFHRCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2FwaS9hLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjdHgpe1xuICBjdHguYm9keSA9IHtcbiAgICAnbWVzc2FnZSc6J2hlbGxvIGZyb20gQSdcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/api/b.js":
/*!**********************!*\
  !*** ./src/api/b.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (ctx) {\n  ctx.body = {\n    'message': 'hello from B'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2IuanM/ZGVmZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3R4IiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxHQUFULEVBQWE7QUFDNUJBLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1QsZUFBVTtBQURELEdBQVg7QUFHRCxDQUpEIiwiZmlsZSI6Ii4vc3JjL2FwaS9iLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjdHgpe1xuICBjdHguYm9keSA9IHtcbiAgICAnbWVzc2FnZSc6J2hlbGxvIGZyb20gQidcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/b.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/route */ \"./src/routes/route.js\");\n/* harmony import */ var _routes_route__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes_route__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_4___default.a.join(__dirname, '../public')));\napp.use(_routes_route__WEBPACK_IMPORTED_MODULE_1___default()());\napp.listen(3000);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJhcHAiLCJLb2EiLCJ1c2UiLCJoZWxtZXQiLCJzdGF0aWNzIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJyb3V0ZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLDBDQUFKLEVBQVo7QUFFQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLGlEQUFNLEVBQWQ7QUFDQUgsR0FBRyxDQUFDRSxHQUFKLENBQVFFLGlEQUFPLENBQUNDLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsU0FBVixFQUFvQixXQUFwQixDQUFELENBQWY7QUFDQVAsR0FBRyxDQUFDRSxHQUFKLENBQVFNLG9EQUFNLEVBQWQ7QUFDQVIsR0FBRyxDQUFDUyxNQUFKLENBQVcsSUFBWCxFIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzL3JvdXRlJztcbmltcG9ydCBoZWxtZXQgZnJvbSAna29hLWhlbG1ldCc7XG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5cbmFwcC51c2UoaGVsbWV0KCkpO1xuYXBwLnVzZShzdGF0aWNzKHBhdGguam9pbihfX2Rpcm5hbWUsJy4uL3B1YmxpYycpKSk7XG5hcHAudXNlKHJvdXRlcigpKTtcbmFwcC5saXN0ZW4oMzAwMClcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/aRoute.js":
/*!******************************!*\
  !*** ./src/routes/aRoute.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router();\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FSb3V0ZS5qcz8zZmQ2Il0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJhIiwicm91dGVyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUgsTUFBSixFQUFmO0FBRUFHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLElBQVgsRUFBaUJGLENBQWpCO0FBRUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2FSb3V0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKTtcbmNvbnN0IGEgPSByZXF1aXJlKCcuLi9hcGkvYScpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9hJywgYSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/aRoute.js\n");

/***/ }),

/***/ "./src/routes/bRoute.js":
/*!******************************!*\
  !*** ./src/routes/bRoute.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst b = __webpack_require__(/*! ../api/b */ \"./src/api/b.js\");\n\nconst router = new Router();\nrouter.get('/b', b);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2JSb3V0ZS5qcz81OWVkIl0sIm5hbWVzIjpbIlJvdXRlciIsInJlcXVpcmUiLCJiIiwicm91dGVyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQXRCOztBQUNBLE1BQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUgsTUFBSixFQUFmO0FBRUFHLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLElBQVgsRUFBaUJGLENBQWpCO0FBRUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiLi9zcmMvcm91dGVzL2JSb3V0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKTtcbmNvbnN0IGIgPSByZXF1aXJlKCcuLi9hcGkvYicpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9iJywgYik7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/bRoute.js\n");

/***/ }),

/***/ "./src/routes/route.js":
/*!*****************************!*\
  !*** ./src/routes/route.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const combineRoutes = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst aRoutes = __webpack_require__(/*! ./aRoute */ \"./src/routes/aRoute.js\");\n\nconst bRoutes = __webpack_require__(/*! ./bRoute */ \"./src/routes/bRoute.js\");\n\nmodule.exports = combineRoutes(aRoutes, bRoutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlLmpzPzM2YWEiXSwibmFtZXMiOlsiY29tYmluZVJvdXRlcyIsInJlcXVpcmUiLCJhUm91dGVzIiwiYlJvdXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGFBQWEsR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUE3Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsd0NBQUQsQ0FBdkI7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixtQkFBTyxDQUFDLHdDQUFELENBQXZCOztBQUVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLGFBQWEsQ0FDNUJFLE9BRDRCLEVBRTVCQyxPQUY0QixDQUE5QiIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21iaW5lUm91dGVzID0gcmVxdWlyZSgna29hLWNvbWJpbmUtcm91dGVycycpO1xuXG5jb25zdCBhUm91dGVzID0gcmVxdWlyZSgnLi9hUm91dGUnKTtcbmNvbnN0IGJSb3V0ZXMgPSByZXF1aXJlKCcuL2JSb3V0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXMoXG4gIGFSb3V0ZXMsXG4gIGJSb3V0ZXNcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/route.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });