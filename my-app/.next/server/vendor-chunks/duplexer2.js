"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/duplexer2";
exports.ids = ["vendor-chunks/duplexer2"];
exports.modules = {

/***/ "(ssr)/./node_modules/duplexer2/index.js":
/*!*****************************************!*\
  !*** ./node_modules/duplexer2/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar stream = __webpack_require__(/*! readable-stream */ \"(ssr)/./node_modules/readable-stream/readable.js\");\nfunction DuplexWrapper(options, writable, readable) {\n    if (typeof readable === \"undefined\") {\n        readable = writable;\n        writable = options;\n        options = null;\n    }\n    stream.Duplex.call(this, options);\n    if (typeof readable.read !== \"function\") {\n        readable = new stream.Readable(options).wrap(readable);\n    }\n    this._writable = writable;\n    this._readable = readable;\n    this._waiting = false;\n    var self = this;\n    writable.once(\"finish\", function() {\n        self.end();\n    });\n    this.once(\"finish\", function() {\n        writable.end();\n    });\n    readable.on(\"readable\", function() {\n        if (self._waiting) {\n            self._waiting = false;\n            self._read();\n        }\n    });\n    readable.once(\"end\", function() {\n        self.push(null);\n    });\n    if (!options || typeof options.bubbleErrors === \"undefined\" || options.bubbleErrors) {\n        writable.on(\"error\", function(err) {\n            self.emit(\"error\", err);\n        });\n        readable.on(\"error\", function(err) {\n            self.emit(\"error\", err);\n        });\n    }\n}\nDuplexWrapper.prototype = Object.create(stream.Duplex.prototype, {\n    constructor: {\n        value: DuplexWrapper\n    }\n});\nDuplexWrapper.prototype._write = function _write(input, encoding, done) {\n    this._writable.write(input, encoding, done);\n};\nDuplexWrapper.prototype._read = function _read() {\n    var buf;\n    var reads = 0;\n    while((buf = this._readable.read()) !== null){\n        this.push(buf);\n        reads++;\n    }\n    if (reads === 0) {\n        this._waiting = true;\n    }\n};\nmodule.exports = function duplex2(options, writable, readable) {\n    return new DuplexWrapper(options, writable, readable);\n};\nmodule.exports.DuplexWrapper = DuplexWrapper;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZHVwbGV4ZXIyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBRWIsSUFBSUEsU0FBU0MsbUJBQU9BLENBQUMseUVBQWlCO0FBRXRDLFNBQVNDLGNBQWNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxRQUFRO0lBQ2hELElBQUksT0FBT0EsYUFBYSxhQUFhO1FBQ25DQSxXQUFXRDtRQUNYQSxXQUFXRDtRQUNYQSxVQUFVO0lBQ1o7SUFFQUgsT0FBT00sTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFSjtJQUV6QixJQUFJLE9BQU9FLFNBQVNHLElBQUksS0FBSyxZQUFZO1FBQ3ZDSCxXQUFXLElBQUtMLE9BQU9TLFFBQVEsQ0FBQ04sU0FBVU8sSUFBSSxDQUFDTDtJQUNqRDtJQUVBLElBQUksQ0FBQ00sU0FBUyxHQUFHUDtJQUNqQixJQUFJLENBQUNRLFNBQVMsR0FBR1A7SUFDakIsSUFBSSxDQUFDUSxRQUFRLEdBQUc7SUFFaEIsSUFBSUMsT0FBTyxJQUFJO0lBRWZWLFNBQVNXLElBQUksQ0FBQyxVQUFVO1FBQ3RCRCxLQUFLRSxHQUFHO0lBQ1Y7SUFFQSxJQUFJLENBQUNELElBQUksQ0FBQyxVQUFVO1FBQ2xCWCxTQUFTWSxHQUFHO0lBQ2Q7SUFFQVgsU0FBU1ksRUFBRSxDQUFDLFlBQVk7UUFDdEIsSUFBSUgsS0FBS0QsUUFBUSxFQUFFO1lBQ2pCQyxLQUFLRCxRQUFRLEdBQUc7WUFDaEJDLEtBQUtJLEtBQUs7UUFDWjtJQUNGO0lBRUFiLFNBQVNVLElBQUksQ0FBQyxPQUFPO1FBQ25CRCxLQUFLSyxJQUFJLENBQUM7SUFDWjtJQUVBLElBQUksQ0FBQ2hCLFdBQVcsT0FBT0EsUUFBUWlCLFlBQVksS0FBSyxlQUFlakIsUUFBUWlCLFlBQVksRUFBRTtRQUNuRmhCLFNBQVNhLEVBQUUsQ0FBQyxTQUFTLFNBQVNJLEdBQUc7WUFDL0JQLEtBQUtRLElBQUksQ0FBQyxTQUFTRDtRQUNyQjtRQUVBaEIsU0FBU1ksRUFBRSxDQUFDLFNBQVMsU0FBU0ksR0FBRztZQUMvQlAsS0FBS1EsSUFBSSxDQUFDLFNBQVNEO1FBQ3JCO0lBQ0Y7QUFDRjtBQUVBbkIsY0FBY3FCLFNBQVMsR0FBR0MsT0FBT0MsTUFBTSxDQUFDekIsT0FBT00sTUFBTSxDQUFDaUIsU0FBUyxFQUFFO0lBQUNHLGFBQWE7UUFBQ0MsT0FBT3pCO0lBQWE7QUFBQztBQUVyR0EsY0FBY3FCLFNBQVMsQ0FBQ0ssTUFBTSxHQUFHLFNBQVNBLE9BQU9DLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxJQUFJO0lBQ3BFLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ3FCLEtBQUssQ0FBQ0gsT0FBT0MsVUFBVUM7QUFDeEM7QUFFQTdCLGNBQWNxQixTQUFTLENBQUNMLEtBQUssR0FBRyxTQUFTQTtJQUN2QyxJQUFJZTtJQUNKLElBQUlDLFFBQVE7SUFDWixNQUFPLENBQUNELE1BQU0sSUFBSSxDQUFDckIsU0FBUyxDQUFDSixJQUFJLEVBQUMsTUFBTyxLQUFNO1FBQzdDLElBQUksQ0FBQ1csSUFBSSxDQUFDYztRQUNWQztJQUNGO0lBQ0EsSUFBSUEsVUFBVSxHQUFHO1FBQ2YsSUFBSSxDQUFDckIsUUFBUSxHQUFHO0lBQ2xCO0FBQ0Y7QUFFQXNCLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxRQUFRbEMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7SUFDM0QsT0FBTyxJQUFJSCxjQUFjQyxTQUFTQyxVQUFVQztBQUM5QztBQUVBOEIsNEJBQTRCLEdBQUdqQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9kdXBsZXhlcjIvaW5kZXguanM/ODlhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0cmVhbSA9IHJlcXVpcmUoXCJyZWFkYWJsZS1zdHJlYW1cIik7XG5cbmZ1bmN0aW9uIER1cGxleFdyYXBwZXIob3B0aW9ucywgd3JpdGFibGUsIHJlYWRhYmxlKSB7XG4gIGlmICh0eXBlb2YgcmVhZGFibGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZWFkYWJsZSA9IHdyaXRhYmxlO1xuICAgIHdyaXRhYmxlID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIHN0cmVhbS5EdXBsZXguY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICBpZiAodHlwZW9mIHJlYWRhYmxlLnJlYWQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlYWRhYmxlID0gKG5ldyBzdHJlYW0uUmVhZGFibGUob3B0aW9ucykpLndyYXAocmVhZGFibGUpO1xuICB9XG5cbiAgdGhpcy5fd3JpdGFibGUgPSB3cml0YWJsZTtcbiAgdGhpcy5fcmVhZGFibGUgPSByZWFkYWJsZTtcbiAgdGhpcy5fd2FpdGluZyA9IGZhbHNlO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB3cml0YWJsZS5vbmNlKFwiZmluaXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuZW5kKCk7XG4gIH0pO1xuXG4gIHRoaXMub25jZShcImZpbmlzaFwiLCBmdW5jdGlvbigpIHtcbiAgICB3cml0YWJsZS5lbmQoKTtcbiAgfSk7XG5cbiAgcmVhZGFibGUub24oXCJyZWFkYWJsZVwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoc2VsZi5fd2FpdGluZykge1xuICAgICAgc2VsZi5fd2FpdGluZyA9IGZhbHNlO1xuICAgICAgc2VsZi5fcmVhZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVhZGFibGUub25jZShcImVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICBzZWxmLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucy5idWJibGVFcnJvcnMgPT09IFwidW5kZWZpbmVkXCIgfHwgb3B0aW9ucy5idWJibGVFcnJvcnMpIHtcbiAgICB3cml0YWJsZS5vbihcImVycm9yXCIsIGZ1bmN0aW9uKGVycikge1xuICAgICAgc2VsZi5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcblxuICAgIHJlYWRhYmxlLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBzZWxmLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cbkR1cGxleFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdHJlYW0uRHVwbGV4LnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IER1cGxleFdyYXBwZXJ9fSk7XG5cbkR1cGxleFdyYXBwZXIucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIF93cml0ZShpbnB1dCwgZW5jb2RpbmcsIGRvbmUpIHtcbiAgdGhpcy5fd3JpdGFibGUud3JpdGUoaW5wdXQsIGVuY29kaW5nLCBkb25lKTtcbn07XG5cbkR1cGxleFdyYXBwZXIucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gX3JlYWQoKSB7XG4gIHZhciBidWY7XG4gIHZhciByZWFkcyA9IDA7XG4gIHdoaWxlICgoYnVmID0gdGhpcy5fcmVhZGFibGUucmVhZCgpKSAhPT0gbnVsbCkge1xuICAgIHRoaXMucHVzaChidWYpO1xuICAgIHJlYWRzKys7XG4gIH1cbiAgaWYgKHJlYWRzID09PSAwKSB7XG4gICAgdGhpcy5fd2FpdGluZyA9IHRydWU7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZHVwbGV4MihvcHRpb25zLCB3cml0YWJsZSwgcmVhZGFibGUpIHtcbiAgcmV0dXJuIG5ldyBEdXBsZXhXcmFwcGVyKG9wdGlvbnMsIHdyaXRhYmxlLCByZWFkYWJsZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5EdXBsZXhXcmFwcGVyID0gRHVwbGV4V3JhcHBlcjtcbiJdLCJuYW1lcyI6WyJzdHJlYW0iLCJyZXF1aXJlIiwiRHVwbGV4V3JhcHBlciIsIm9wdGlvbnMiLCJ3cml0YWJsZSIsInJlYWRhYmxlIiwiRHVwbGV4IiwiY2FsbCIsInJlYWQiLCJSZWFkYWJsZSIsIndyYXAiLCJfd3JpdGFibGUiLCJfcmVhZGFibGUiLCJfd2FpdGluZyIsInNlbGYiLCJvbmNlIiwiZW5kIiwib24iLCJfcmVhZCIsInB1c2giLCJidWJibGVFcnJvcnMiLCJlcnIiLCJlbWl0IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsIl93cml0ZSIsImlucHV0IiwiZW5jb2RpbmciLCJkb25lIiwid3JpdGUiLCJidWYiLCJyZWFkcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkdXBsZXgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/duplexer2/index.js\n");

/***/ })

};
;