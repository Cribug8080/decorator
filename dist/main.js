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
/***/ (function(module, exports) {

var _class, _class2, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function log(target) {
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _loop = function _loop() {
    var key = _Object$keys[_i];

    if (key === 'constructor') {
      return "continue";
    }

    var func = desc[key].value;

    if ('function' === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          console.log('before ' + key);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var ret = func.apply(this, args);
          console.log("after " + key);
          return ret;
        }
      });
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(desc); _i < _Object$keys.length; _i++) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
}

function readonly(target, key, descriptor) {
  descriptor.writable = false;
}

function validate(target, key, descriptor) {
  var func = descriptor.value;

  descriptor.value = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var _i2 = 0, _args = args; _i2 < _args.length; _i2++) {
      var num = _args[_i2];

      if ('number' !== typeof num) {
        throw new Error("\"".concat(num, "\" is not number"));
      }
    }

    return func.apply(this, args);
  };
}

var NumBeric = log(_class = (_class2 = (_temp =
/*#__PURE__*/
function () {
  function NumBeric() {
    _classCallCheck(this, NumBeric);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(NumBeric, [{
    key: "add",
    value: function add() {
      for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nums[_key3] = arguments[_key3];
      }

      return nums.reduce(function (p, c) {
        return p + c;
      }, 0);
    }
  }, {
    key: "set",
    value: function set(pi) {
      PI = pi;
    }
  }]);

  return NumBeric;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.1415926;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "add", [validate], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)) || _class;

console.log(new NumBeric().add(1, 'x'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvZyIsInRhcmdldCIsImRlc2MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwicHJvdG90eXBlIiwia2V5IiwiZnVuYyIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25zb2xlIiwiYXJncyIsInJldCIsImFwcGx5Iiwia2V5cyIsInJlYWRvbmx5IiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwidmFsaWRhdGUiLCJudW0iLCJFcnJvciIsIk51bUJlcmljIiwibnVtcyIsInJlZHVjZSIsInAiLCJjIiwicGkiLCJQSSIsImFkZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCLE1BQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyx5QkFBUCxDQUFpQ0gsTUFBTSxDQUFDSSxTQUF4QyxDQUFiOztBQURpQjtBQUdaLFFBQU1DLEdBQUcsbUJBQVQ7O0FBQ0QsUUFBSUEsR0FBRyxLQUFLLGFBQVosRUFBMkI7QUFDdkI7QUFDSDs7QUFFRCxRQUFNQyxJQUFJLEdBQUdMLElBQUksQ0FBQ0ksR0FBRCxDQUFKLENBQVVFLEtBQXZCOztBQUNBLFFBQUksZUFBZSxPQUFPRCxJQUExQixFQUFnQztBQUM1QkosWUFBTSxDQUFDTSxjQUFQLENBQXNCUixNQUFNLENBQUNJLFNBQTdCLEVBQXdDQyxHQUF4QyxFQUE2QztBQUN6Q0UsYUFEeUMsbUJBQzFCO0FBQ1hFLGlCQUFPLENBQUNWLEdBQVIsQ0FBWSxZQUFZTSxHQUF4Qjs7QUFEVyw0Q0FBTkssSUFBTTtBQUFOQSxnQkFBTTtBQUFBOztBQUVYLGNBQU1DLEdBQUcsR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsSUFBakIsQ0FBWjtBQUNBRCxpQkFBTyxDQUFDVixHQUFSLENBQVksV0FBV00sR0FBdkI7QUFFQSxpQkFBT00sR0FBUDtBQUNIO0FBUHdDLE9BQTdDO0FBU0g7QUFuQlk7O0FBR2pCLGtDQUFrQlQsTUFBTSxDQUFDVyxJQUFQLENBQVlaLElBQVosQ0FBbEIsa0NBQXFDO0FBQUE7O0FBQUEsNkJBRTdCO0FBZVA7QUFDSjs7QUFFRCxTQUFTYSxRQUFULENBQWtCZCxNQUFsQixFQUEwQkssR0FBMUIsRUFBK0JVLFVBQS9CLEVBQTJDO0FBQ3ZDQSxZQUFVLENBQUNDLFFBQVgsR0FBc0IsS0FBdEI7QUFDSDs7QUFFRCxTQUFTQyxRQUFULENBQWtCakIsTUFBbEIsRUFBMEJLLEdBQTFCLEVBQStCVSxVQUEvQixFQUEyQztBQUN2QyxNQUFNVCxJQUFJLEdBQUdTLFVBQVUsQ0FBQ1IsS0FBeEI7O0FBQ0FRLFlBQVUsQ0FBQ1IsS0FBWCxHQUFtQixZQUFtQjtBQUFBLHVDQUFORyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDbEMsOEJBQWtCQSxJQUFsQiw2QkFBd0I7QUFBbkIsVUFBTVEsR0FBRyxhQUFUOztBQUNELFVBQUcsYUFBYSxPQUFPQSxHQUF2QixFQUE0QjtBQUN4QixjQUFNLElBQUlDLEtBQUosYUFBY0QsR0FBZCxzQkFBTjtBQUNIO0FBQ0o7O0FBRUQsV0FBT1osSUFBSSxDQUFDTSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsSUFBakIsQ0FBUDtBQUNILEdBUkQ7QUFTSDs7SUFHS1UsUSxHQURMckIsRzs7Ozs7Ozs7Ozs7MEJBS2U7QUFBQSx5Q0FBTHNCLElBQUs7QUFBTEEsWUFBSztBQUFBOztBQUNSLGFBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVdELENBQUMsR0FBR0MsQ0FBZjtBQUFBLE9BQVosRUFBK0IsQ0FBL0IsQ0FBUDtBQUNIOzs7d0JBQ0dDLEUsRUFBSTtBQUNKQyxRQUFFLEdBQUdELEVBQUw7QUFDSDs7OztnRkFSQVgsUTs7Ozs7V0FBYyxTOzt5REFFZEcsUTs7QUFTTFIsT0FBTyxDQUFDVixHQUFSLENBQVksSUFBSXFCLFFBQUosR0FBZU8sR0FBZixDQUFtQixDQUFuQixFQUFzQixHQUF0QixDQUFaLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5mdW5jdGlvbiBsb2codGFyZ2V0KSB7XG4gICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldC5wcm90b3R5cGUpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXNjKSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBkZXNjW2tleV0udmFsdWU7XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZnVuYykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldC5wcm90b3R5cGUsIGtleSwge1xuICAgICAgICAgICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZSAnICsga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIFwiICsga2V5KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlYWRvbmx5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIGNvbnN0IGZ1bmMgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBmb3IgKGNvbnN0IG51bSBvZiBhcmdzKSB7XG4gICAgICAgICAgICBpZignbnVtYmVyJyAhPT0gdHlwZW9mIG51bSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke251bX1cIiBpcyBub3QgbnVtYmVyYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG59XG5cbkBsb2dcbmNsYXNzIE51bUJlcmljIHtcbiAgICBAcmVhZG9ubHkgUEkgPSAzLjE0MTU5MjZcblxuICAgIEB2YWxpZGF0ZVxuICAgIGFkZCguLi5udW1zKXtcbiAgICAgICAgcmV0dXJuIG51bXMucmVkdWNlKChwLCBjKSA9PiAocCArIGMpLCAwKVxuICAgIH1cbiAgICBzZXQocGkpIHtcbiAgICAgICAgUEkgPSBwaTtcbiAgICB9XG59XG5cbmNvbnNvbGUubG9nKG5ldyBOdW1CZXJpYygpLmFkZCgxLCAneCcpKSJdLCJzb3VyY2VSb290IjoiIn0=