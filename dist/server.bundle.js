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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst router = __webpack_require__(/*! koa-router */ \"koa-router\")();\n\nconst koaBody = __webpack_require__(/*! koa-body */ \"koa-body\");\n\nconst cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n\nconst json = __webpack_require__(/*! koa-json */ \"koa-json\");\n\nconst app = new Koa();\nrouter.prefix('/api');\nrouter.post('/post', async ctx => {\n  const {\n    body\n  } = ctx.request;\n  console.log(body);\n  console.log(ctx.request);\n  ctx.body = { ...body\n  };\n});\nrouter.get('/api', async ctx => {\n  const params = ctx.request.query;\n  console.log(params);\n  ctx.body = {\n    name: params.name,\n    age: params.age\n  };\n});\napp.use(koaBody());\napp.use(cors());\napp.use(json({\n  pretty: true,\n  param: 'pretty'\n}));\napp.use(router.routes());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJLb2EiLCJyZXF1aXJlIiwicm91dGVyIiwia29hQm9keSIsImNvcnMiLCJqc29uIiwiYXBwIiwicHJlZml4IiwicG9zdCIsImN0eCIsImJvZHkiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsImdldCIsInBhcmFtcyIsInF1ZXJ5IiwibmFtZSIsImFnZSIsInVzZSIsInByZXR0eSIsInBhcmFtIiwicm91dGVzIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsZ0JBQUQsQ0FBbkI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhCQUFELENBQVAsRUFBZjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLG1CQUFPLENBQUMsMEJBQUQsQ0FBdkI7O0FBQ0EsTUFBTUcsSUFBSSxHQUFHSCxtQkFBTyxDQUFDLDRCQUFELENBQXBCOztBQUNBLE1BQU1JLElBQUksR0FBR0osbUJBQU8sQ0FBQywwQkFBRCxDQUFwQjs7QUFDQSxNQUFNSyxHQUFHLEdBQUcsSUFBSU4sR0FBSixFQUFaO0FBRUFFLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLE1BQWQ7QUFFQUwsTUFBTSxDQUFDTSxJQUFQLENBQVksT0FBWixFQUFxQixNQUFNQyxHQUFOLElBQVc7QUFDOUIsUUFBTTtBQUFDQztBQUFELE1BQVNELEdBQUcsQ0FBQ0UsT0FBbkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0UsT0FBaEI7QUFDQUYsS0FBRyxDQUFDQyxJQUFKLEdBQVUsRUFDUixHQUFHQTtBQURLLEdBQVY7QUFHRCxDQVBEO0FBU0FSLE1BQU0sQ0FBQ1ksR0FBUCxDQUFXLE1BQVgsRUFBbUIsTUFBTUwsR0FBTixJQUFXO0FBQzVCLFFBQU1NLE1BQU0sR0FBR04sR0FBRyxDQUFDRSxPQUFKLENBQVlLLEtBQTNCO0FBQ0FKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFaO0FBQ0FOLEtBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1RPLFFBQUksRUFBRUYsTUFBTSxDQUFDRSxJQURKO0FBRVRDLE9BQUcsRUFBRUgsTUFBTSxDQUFDRztBQUZILEdBQVg7QUFJRCxDQVBEO0FBU0FaLEdBQUcsQ0FBQ2EsR0FBSixDQUFRaEIsT0FBTyxFQUFmO0FBQ0FHLEdBQUcsQ0FBQ2EsR0FBSixDQUFRZixJQUFJLEVBQVo7QUFDQUUsR0FBRyxDQUFDYSxHQUFKLENBQVFkLElBQUksQ0FBQztBQUFFZSxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsT0FBSyxFQUFFO0FBQXZCLENBQUQsQ0FBWjtBQUVBZixHQUFHLENBQUNhLEdBQUosQ0FBUWpCLE1BQU0sQ0FBQ29CLE1BQVAsRUFBUjtBQUVBaEIsR0FBRyxDQUFDaUIsTUFBSixDQUFXLElBQVgiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLb2EgPSByZXF1aXJlKCdrb2EnKTtcbmNvbnN0IHJvdXRlciA9IHJlcXVpcmUoJ2tvYS1yb3V0ZXInKSgpO1xuY29uc3Qga29hQm9keSA9IHJlcXVpcmUoJ2tvYS1ib2R5Jyk7XG5jb25zdCBjb3JzID0gcmVxdWlyZSgnQGtvYS9jb3JzJyk7XG5jb25zdCBqc29uID0gcmVxdWlyZSgna29hLWpzb24nKTtcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcblxucm91dGVyLnByZWZpeCgnL2FwaScpXG5cbnJvdXRlci5wb3N0KCcvcG9zdCcsIGFzeW5jIGN0eD0+e1xuICBjb25zdCB7Ym9keX0gPSBjdHgucmVxdWVzdDtcbiAgY29uc29sZS5sb2coYm9keSk7XG4gIGNvbnNvbGUubG9nKGN0eC5yZXF1ZXN0KTtcbiAgY3R4LmJvZHk9IHtcbiAgICAuLi5ib2R5XG4gIH1cbn0pXG5cbnJvdXRlci5nZXQoJy9hcGknLCBhc3luYyBjdHg9PntcbiAgY29uc3QgcGFyYW1zID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gIGN0eC5ib2R5ID0ge1xuICAgIG5hbWU6IHBhcmFtcy5uYW1lLFxuICAgIGFnZTogcGFyYW1zLmFnZVxuICB9XG59KVxuXG5hcHAudXNlKGtvYUJvZHkoKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGpzb24oeyBwcmV0dHk6IHRydWUsIHBhcmFtOiAncHJldHR5J30pKTtcblxuYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpO1xuXG5hcHAubGlzdGVuKDMwMDApXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL2NvcnNcIj9hNjk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrb2EvY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrb2EvY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/cors\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-body\n");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtanNvblwiPzY1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-json\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ })

/******/ });