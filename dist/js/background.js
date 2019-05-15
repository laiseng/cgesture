/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"background": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/background.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cg_main_1 = __webpack_require__(/*! ./lib/cg-main */ "./src/lib/cg-main.ts");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case cg_main_1.MessageTypes.Gesture:
            exeGesture(message.value, sender, sendResponse);
            break;
        case cg_main_1.MessageTypes.Url:
            exeOpenLink(message.value, sender, sendResponse);
            break;
    }
});
function exeOpenLink(payload, sender, sendResponse) {
    console.log("OpeningLink", payload);
    chrome.tabs.create({ url: payload });
}
function exeGesture(payload, sender, sendResponse) {
    if (arraysEqual(payload, [cg_main_1.GestureTypes.Down])) {
        chrome.tabs.remove(sender.tab.id);
    }
    if (arraysEqual(payload, [cg_main_1.GestureTypes.Up])) {
        chrome.tabs.create({ url: "chrome://newtab" });
    }
    if (arraysEqual(payload, [cg_main_1.GestureTypes.Left])) {
        chrome.tabs.executeScript(null, { code: "window.history.back()" });
    }
    if (arraysEqual(payload, [cg_main_1.GestureTypes.Right])) {
        chrome.tabs.executeScript(null, { code: "window.history.forward()" });
    }
    if (arraysEqual(payload, [cg_main_1.GestureTypes.Up, cg_main_1.GestureTypes.Down])) {
        // chrome.history.
        chrome.sessions.restore();
    }
}
function arraysEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length != b.length)
        return false;
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}


/***/ }),

/***/ "./src/lib/cg-main.ts":
/*!****************************!*\
  !*** ./src/lib/cg-main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var MessageTypes;
(function (MessageTypes) {
    MessageTypes[MessageTypes["Gesture"] = 0] = "Gesture";
    MessageTypes[MessageTypes["Url"] = 1] = "Url";
})(MessageTypes = exports.MessageTypes || (exports.MessageTypes = {}));
var GestureTypes;
(function (GestureTypes) {
    GestureTypes[GestureTypes["Up"] = 0] = "Up";
    GestureTypes[GestureTypes["Down"] = 1] = "Down";
    GestureTypes[GestureTypes["Left"] = 2] = "Left";
    GestureTypes[GestureTypes["Right"] = 3] = "Right";
})(GestureTypes = exports.GestureTypes || (exports.GestureTypes = {}));
const MIN_LENGTH = 10;
class CGMain {
    constructor() {
        this.inGesture = false;
        this.gestures = [];
        rxjs_1.fromEvent(document, "contextmenu").subscribe(e => {
            if (this.inGesture) {
                e.preventDefault();
            }
            this.inGesture = false;
        });
        let move$ = rxjs_1.fromEvent(document, "mousemove").pipe(operators_1.takeUntil(rxjs_1.fromEvent(document, "mouseup").pipe(operators_1.tap(e => {
            this.anchorCoordinate = null;
            if (this.currentAnchorTarget) {
                console.log("is anchor", this.currentAnchorTarget);
                chrome.runtime.sendMessage({
                    type: MessageTypes.Url,
                    value: this.currentAnchorTarget.href
                });
            }
            else {
                chrome.runtime.sendMessage({
                    type: MessageTypes.Gesture,
                    value: this.gestures
                });
            }
            this.gestures = [];
        }))));
        rxjs_1.fromEvent(document, "mousedown")
            .pipe(operators_1.tap(e => {
            this.inGesture = false;
        }), operators_1.filter(e => this.isGestureButton(e)), operators_1.tap(e => {
            console.log("tapping mouse down is anchor");
            this.currentAnchorTarget = this.lookupParentsForAnchor(e);
            console.log("[currentAnchorTarget]", this.currentAnchorTarget, chrome.tabs);
        }), operators_1.switchMap(e => move$))
            .subscribe(e => {
            // this.addDot(e);
            let currentCoordinate = this.getCoordinate(e);
            if (!this.anchorCoordinate) {
                this.anchorCoordinate = currentCoordinate;
            }
            if (this.getDistance(this.anchorCoordinate, currentCoordinate) >
                MIN_LENGTH) {
                this.inGesture = true;
                let vector = this.getVector(this.getDegrees(this.anchorCoordinate, currentCoordinate));
                if (vector != null) {
                    if ((this.gestures.length > 0 &&
                        this.gestures[this.gestures.length - 1] != vector) ||
                        this.gestures.length == 0) {
                        this.gestures.push(vector);
                    }
                    this.anchorCoordinate = currentCoordinate;
                }
            }
        });
        this.setIFrameMouseEventBorderStyle();
    }
    lookupParentsForAnchor(e) {
        console.log("this.currentAnchorTarget", e.target);
        let t = e.target;
        while (t.parentElement) {
            t = t.parentElement;
            if (t.href != null) {
                return t;
            }
        }
        return null;
    }
    getCoordinate(e) {
        return { x: e.clientX, y: e.clientY };
    }
    getDistance(start, end) {
        return Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
    }
    getDegrees(start, end) {
        return (Math.atan2(start.y - end.y, start.x - end.x) * 180) / Math.PI;
    }
    getVector(deg) {
        if (deg > -30 && deg < 30) {
            console.log("gesture", "left");
            // window.history.back();
            return GestureTypes.Left;
        }
        else if (deg > 60 && deg < 120) {
            console.log("gesture", "up");
            return GestureTypes.Up;
        }
        else if (deg > -120 && deg < -60) {
            console.log("gesture", "down");
            return GestureTypes.Down;
        }
        else if (deg > 150 || deg < -150) {
            console.log("gesture", "right");
            // window.history.forward();
            return GestureTypes.Right;
        }
        console.log("undefined");
    }
    isGestureButton(e) {
        return e.button == 2;
    }
    getVectorText() {
        return this.gestures.map(x => {
            return GestureTypes[x];
        });
    }
    addDot(e) {
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = e.clientX + "px";
        div.style.top = e.clientY + "px";
        div.style.width = "3px";
        div.style.height = "3px";
        div.style.backgroundColor = e.button == 0 ? "red" : "green";
        document.body.appendChild(div);
    }
    setIFrameMouseEventBorderStyle() {
        // document.querySelectorAll('iframe').forEach((frame: HTMLIFrameElement) => {
        //   console.log('add iframe style to ', frame);
        //   frame.addEventListener('mouseenter', (e: MouseEvent) => {
        //     (e.target as HTMLElement).style.border = '2px solid #ccff00';
        //   });
        //   frame.addEventListener('mouseleave', (e: MouseEvent) => {
        //     (e.target as HTMLElement).style.border = '';
        //   });
        // })
    }
}
exports.CGMain = CGMain;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9jZy1tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsMkNBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQSx5Q0FBeUMsZ0NBQWdDO0FBQ3pFO0FBQ0E7QUFDQSx5Q0FBeUMsbUNBQW1DO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsZ0RBQU07QUFDN0Isb0JBQW9CLG1CQUFPLENBQUMsb0VBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxtRUFBbUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxtRUFBbUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0EiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYmFja2dyb3VuZFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2JhY2tncm91bmQudHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNnX21haW5fMSA9IHJlcXVpcmUoXCIuL2xpYi9jZy1tYWluXCIpO1xyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgIGNhc2UgY2dfbWFpbl8xLk1lc3NhZ2VUeXBlcy5HZXN0dXJlOlxyXG4gICAgICAgICAgICBleGVHZXN0dXJlKG1lc3NhZ2UudmFsdWUsIHNlbmRlciwgc2VuZFJlc3BvbnNlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBjZ19tYWluXzEuTWVzc2FnZVR5cGVzLlVybDpcclxuICAgICAgICAgICAgZXhlT3BlbkxpbmsobWVzc2FnZS52YWx1ZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcbmZ1bmN0aW9uIGV4ZU9wZW5MaW5rKHBheWxvYWQsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk9wZW5pbmdMaW5rXCIsIHBheWxvYWQpO1xyXG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBwYXlsb2FkIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGV4ZUdlc3R1cmUocGF5bG9hZCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcclxuICAgIGlmIChhcnJheXNFcXVhbChwYXlsb2FkLCBbY2dfbWFpbl8xLkdlc3R1cmVUeXBlcy5Eb3duXSkpIHtcclxuICAgICAgICBjaHJvbWUudGFicy5yZW1vdmUoc2VuZGVyLnRhYi5pZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXlzRXF1YWwocGF5bG9hZCwgW2NnX21haW5fMS5HZXN0dXJlVHlwZXMuVXBdKSkge1xyXG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogXCJjaHJvbWU6Ly9uZXd0YWJcIiB9KTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheXNFcXVhbChwYXlsb2FkLCBbY2dfbWFpbl8xLkdlc3R1cmVUeXBlcy5MZWZ0XSkpIHtcclxuICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KG51bGwsIHsgY29kZTogXCJ3aW5kb3cuaGlzdG9yeS5iYWNrKClcIiB9KTtcclxuICAgIH1cclxuICAgIGlmIChhcnJheXNFcXVhbChwYXlsb2FkLCBbY2dfbWFpbl8xLkdlc3R1cmVUeXBlcy5SaWdodF0pKSB7XHJcbiAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdChudWxsLCB7IGNvZGU6IFwid2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpXCIgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyYXlzRXF1YWwocGF5bG9hZCwgW2NnX21haW5fMS5HZXN0dXJlVHlwZXMuVXAsIGNnX21haW5fMS5HZXN0dXJlVHlwZXMuRG93bl0pKSB7XHJcbiAgICAgICAgLy8gY2hyb21lLmhpc3RvcnkuXHJcbiAgICAgICAgY2hyb21lLnNlc3Npb25zLnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYilcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyBJZiB5b3UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgb3JkZXIgb2YgdGhlIGVsZW1lbnRzIGluc2lkZVxyXG4gICAgLy8gdGhlIGFycmF5LCB5b3Ugc2hvdWxkIHNvcnQgYm90aCBhcnJheXMgaGVyZS5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcclxuY29uc3Qgb3BlcmF0b3JzXzEgPSByZXF1aXJlKFwicnhqcy9vcGVyYXRvcnNcIik7XHJcbnZhciBNZXNzYWdlVHlwZXM7XHJcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGVzKSB7XHJcbiAgICBNZXNzYWdlVHlwZXNbTWVzc2FnZVR5cGVzW1wiR2VzdHVyZVwiXSA9IDBdID0gXCJHZXN0dXJlXCI7XHJcbiAgICBNZXNzYWdlVHlwZXNbTWVzc2FnZVR5cGVzW1wiVXJsXCJdID0gMV0gPSBcIlVybFwiO1xyXG59KShNZXNzYWdlVHlwZXMgPSBleHBvcnRzLk1lc3NhZ2VUeXBlcyB8fCAoZXhwb3J0cy5NZXNzYWdlVHlwZXMgPSB7fSkpO1xyXG52YXIgR2VzdHVyZVR5cGVzO1xyXG4oZnVuY3Rpb24gKEdlc3R1cmVUeXBlcykge1xyXG4gICAgR2VzdHVyZVR5cGVzW0dlc3R1cmVUeXBlc1tcIlVwXCJdID0gMF0gPSBcIlVwXCI7XHJcbiAgICBHZXN0dXJlVHlwZXNbR2VzdHVyZVR5cGVzW1wiRG93blwiXSA9IDFdID0gXCJEb3duXCI7XHJcbiAgICBHZXN0dXJlVHlwZXNbR2VzdHVyZVR5cGVzW1wiTGVmdFwiXSA9IDJdID0gXCJMZWZ0XCI7XHJcbiAgICBHZXN0dXJlVHlwZXNbR2VzdHVyZVR5cGVzW1wiUmlnaHRcIl0gPSAzXSA9IFwiUmlnaHRcIjtcclxufSkoR2VzdHVyZVR5cGVzID0gZXhwb3J0cy5HZXN0dXJlVHlwZXMgfHwgKGV4cG9ydHMuR2VzdHVyZVR5cGVzID0ge30pKTtcclxuY29uc3QgTUlOX0xFTkdUSCA9IDEwO1xyXG5jbGFzcyBDR01haW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbkdlc3R1cmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdlc3R1cmVzID0gW107XHJcbiAgICAgICAgcnhqc18xLmZyb21FdmVudChkb2N1bWVudCwgXCJjb250ZXh0bWVudVwiKS5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluR2VzdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5HZXN0dXJlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IG1vdmUkID0gcnhqc18xLmZyb21FdmVudChkb2N1bWVudCwgXCJtb3VzZW1vdmVcIikucGlwZShvcGVyYXRvcnNfMS50YWtlVW50aWwocnhqc18xLmZyb21FdmVudChkb2N1bWVudCwgXCJtb3VzZXVwXCIpLnBpcGUob3BlcmF0b3JzXzEudGFwKGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuY2hvckNvb3JkaW5hdGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5jaG9yVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzIGFuY2hvclwiLCB0aGlzLmN1cnJlbnRBbmNob3JUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1lc3NhZ2VUeXBlcy5VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuY3VycmVudEFuY2hvclRhcmdldC5ocmVmXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZXMuR2VzdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXN0dXJlc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXN0dXJlcyA9IFtdO1xyXG4gICAgICAgIH0pKSkpO1xyXG4gICAgICAgIHJ4anNfMS5mcm9tRXZlbnQoZG9jdW1lbnQsIFwibW91c2Vkb3duXCIpXHJcbiAgICAgICAgICAgIC5waXBlKG9wZXJhdG9yc18xLnRhcChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbkdlc3R1cmUgPSBmYWxzZTtcclxuICAgICAgICB9KSwgb3BlcmF0b3JzXzEuZmlsdGVyKGUgPT4gdGhpcy5pc0dlc3R1cmVCdXR0b24oZSkpLCBvcGVyYXRvcnNfMS50YXAoZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFwcGluZyBtb3VzZSBkb3duIGlzIGFuY2hvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5jaG9yVGFyZ2V0ID0gdGhpcy5sb29rdXBQYXJlbnRzRm9yQW5jaG9yKGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltjdXJyZW50QW5jaG9yVGFyZ2V0XVwiLCB0aGlzLmN1cnJlbnRBbmNob3JUYXJnZXQsIGNocm9tZS50YWJzKTtcclxuICAgICAgICB9KSwgb3BlcmF0b3JzXzEuc3dpdGNoTWFwKGUgPT4gbW92ZSQpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmFkZERvdChlKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb29yZGluYXRlID0gdGhpcy5nZXRDb29yZGluYXRlKGUpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYW5jaG9yQ29vcmRpbmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmNob3JDb29yZGluYXRlID0gY3VycmVudENvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RGlzdGFuY2UodGhpcy5hbmNob3JDb29yZGluYXRlLCBjdXJyZW50Q29vcmRpbmF0ZSkgPlxyXG4gICAgICAgICAgICAgICAgTUlOX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbkdlc3R1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZlY3RvciA9IHRoaXMuZ2V0VmVjdG9yKHRoaXMuZ2V0RGVncmVlcyh0aGlzLmFuY2hvckNvb3JkaW5hdGUsIGN1cnJlbnRDb29yZGluYXRlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmVjdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuZ2VzdHVyZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlc3R1cmVzW3RoaXMuZ2VzdHVyZXMubGVuZ3RoIC0gMV0gIT0gdmVjdG9yKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlc3R1cmVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VzdHVyZXMucHVzaCh2ZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckNvb3JkaW5hdGUgPSBjdXJyZW50Q29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0SUZyYW1lTW91c2VFdmVudEJvcmRlclN0eWxlKCk7XHJcbiAgICB9XHJcbiAgICBsb29rdXBQYXJlbnRzRm9yQW5jaG9yKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY3VycmVudEFuY2hvclRhcmdldFwiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgbGV0IHQgPSBlLnRhcmdldDtcclxuICAgICAgICB3aGlsZSAodC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHQgPSB0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh0LmhyZWYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXRDb29yZGluYXRlKGUpIHtcclxuICAgICAgICByZXR1cm4geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xyXG4gICAgfVxyXG4gICAgZ2V0RGlzdGFuY2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coc3RhcnQueCAtIGVuZC54LCAyKSArIE1hdGgucG93KHN0YXJ0LnkgLSBlbmQueSwgMikpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVncmVlcyhzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIChNYXRoLmF0YW4yKHN0YXJ0LnkgLSBlbmQueSwgc3RhcnQueCAtIGVuZC54KSAqIDE4MCkgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG4gICAgZ2V0VmVjdG9yKGRlZykge1xyXG4gICAgICAgIGlmIChkZWcgPiAtMzAgJiYgZGVnIDwgMzApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXN0dXJlXCIsIFwibGVmdFwiKTtcclxuICAgICAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm4gR2VzdHVyZVR5cGVzLkxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRlZyA+IDYwICYmIGRlZyA8IDEyMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdlc3R1cmVcIiwgXCJ1cFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIEdlc3R1cmVUeXBlcy5VcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGVnID4gLTEyMCAmJiBkZWcgPCAtNjApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXN0dXJlXCIsIFwiZG93blwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIEdlc3R1cmVUeXBlcy5Eb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZWcgPiAxNTAgfHwgZGVnIDwgLTE1MCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdlc3R1cmVcIiwgXCJyaWdodFwiKTtcclxuICAgICAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gR2VzdHVyZVR5cGVzLlJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVmaW5lZFwiKTtcclxuICAgIH1cclxuICAgIGlzR2VzdHVyZUJ1dHRvbihlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUuYnV0dG9uID09IDI7XHJcbiAgICB9XHJcbiAgICBnZXRWZWN0b3JUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlc3R1cmVzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEdlc3R1cmVUeXBlc1t4XTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZERvdChlKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBlLmNsaWVudFkgKyBcInB4XCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gXCIzcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCIzcHhcIjtcclxuICAgICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZS5idXR0b24gPT0gMCA/IFwicmVkXCIgOiBcImdyZWVuXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG4gICAgc2V0SUZyYW1lTW91c2VFdmVudEJvcmRlclN0eWxlKCkge1xyXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lmcmFtZScpLmZvckVhY2goKGZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ2FkZCBpZnJhbWUgc3R5bGUgdG8gJywgZnJhbWUpO1xyXG4gICAgICAgIC8vICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCAjY2NmZjAwJztcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyID0gJyc7XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ0dNYWluID0gQ0dNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9