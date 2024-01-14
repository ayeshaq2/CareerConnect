"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resumeOptimizer/page",{

/***/ "(app-pages-browser)/./src/app/resumeOptimizer/page.js":
/*!*****************************************!*\
  !*** ./src/app/resumeOptimizer/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n//const resumeparse = require('resume-parser');\nfunction Home() {\n    _s();\n    const [resume, setResume] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [jobDescription, setJobDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const parseResume = async ()=>{\n        try {\n            if (!resume) {\n                console.error(\"no file\");\n            }\n            console.log(\"enteres\");\n            const formData = new FormData();\n            formData.append(\"resume\", resume);\n            const response = await fetch(\"http://localhost:3000/parse/\".concat(resume));\n            const data = await response.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    const handleResumeChange = (event)=>{\n        setResume(event.target.files[0]);\n    //parseResume()\n    // resumeparse\n    // .parseResumeFile(resume)\n    // .then(file=>{\n    //   console.log(\"yeahhh\" + file);\n    // })\n    // .catch(error=>{\n    //   console.error(error)\n    // });\n    };\n    parseResume();\n    const handleJobDescriptionChange = (event)=>{\n        setJobDescription(event.target.value);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        setIsSubmitting(true);\n        setMessage(\"\");\n        console.log(\"Resume:\", resume);\n        console.log(\"Job Description:\", jobDescription);\n        try {\n            await new Promise((resolve)=>setTimeout(resolve, 2000));\n            setMessage(\"Resume Optimized successfully!\");\n        } catch (error) {\n            setMessage(\"Error Optimizing resume.\");\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 min-h-screen bg-white flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-md w-full bg-gray-50 rounded-lg border border-gray-200 shadow-md p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-4 text-center text-gray-800\",\n                    children: \"Resume Optimizer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-2 text-lg font-medium text-gray-700\",\n                                    htmlFor: \"resume\",\n                                    children: \"Upload Your Resume\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    id: \"resume\",\n                                    onChange: handleResumeChange,\n                                    className: \"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E2F0C3] file:text-gray-700 hover:file:bg-[#cde5b6]\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block mb-2 text-lg font-medium text-gray-700\",\n                                    htmlFor: \"job-description\",\n                                    children: \"Job Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"job-description\",\n                                    rows: \"4\",\n                                    onChange: handleJobDescriptionChange,\n                                    className: \"block w-full p-2.5 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-[#E2F0C3] hover:bg-[#cde5b6] text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                            disabled: isSubmitting,\n                            children: isSubmitting ? \"Generating...\" : \"Optimize Resume\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-center text-sm font-medium text-gray-700\",\n                    children: message\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n                    lineNumber: 87,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ayesh\\\\Documents\\\\Software-Projects\\\\SheHacks2024\\\\shehacks8\\\\Shehacks8\\\\my-app\\\\src\\\\app\\\\resumeOptimizer\\\\page.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e8sijaBBAyECXr0ZT9Msi3/RwfQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVzdW1lT3B0aW1pemVyL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2lDO0FBQ2pDLCtDQUErQztBQUVoQyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1VLGNBQWM7UUFDbEIsSUFBRztZQUNELElBQUcsQ0FBQ1IsUUFBTztnQkFDVFMsUUFBUUMsS0FBSyxDQUFDO1lBQ2hCO1lBQ0FELFFBQVFFLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxVQUFTZDtZQUV6QixNQUFNZSxXQUFXLE1BQU1DLE1BQU0sK0JBQXNDLE9BQVBoQjtZQUM1RCxNQUFNaUIsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDVCxRQUFRRSxHQUFHLENBQUNNO1FBQ2QsRUFBQyxPQUFNUCxPQUFNO1lBQ1hELFFBQVFDLEtBQUssQ0FBQyxVQUFVQTtRQUMxQjtJQUNGO0lBSUEsTUFBTVMscUJBQXFCLENBQUNDO1FBQzFCbkIsVUFBVW1CLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDL0IsZUFBZTtJQUVmLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxLQUFLO0lBQ0wsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixNQUFNO0lBQ1I7SUFFQWQ7SUFFQSxNQUFNZSw2QkFBNkIsQ0FBQ0g7UUFDbENqQixrQkFBa0JpQixNQUFNQyxNQUFNLENBQUNHLEtBQUs7SUFDdEM7SUFFQSxNQUFNQyxlQUFlLE9BQU9MO1FBQzFCQSxNQUFNTSxjQUFjO1FBQ3BCckIsZ0JBQWdCO1FBQ2hCRSxXQUFXO1FBRVhFLFFBQVFFLEdBQUcsQ0FBQyxXQUFXWDtRQUN2QlMsUUFBUUUsR0FBRyxDQUFDLG9CQUFvQlQ7UUFFaEMsSUFBSTtZQUNGLE1BQU0sSUFBSXlCLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBUztZQUNuRHJCLFdBQVc7UUFDYixFQUFFLE9BQU9HLE9BQU87WUFDZEgsV0FBVztRQUNiLFNBQVU7WUFDUkYsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBb0Q7Ozs7Ozs4QkFDbEUsOERBQUNFO29CQUFLQyxVQUFVVDtvQkFBY00sV0FBVTs7c0NBQ3RDLDhEQUFDRDs7OENBQ0MsOERBQUNLO29DQUFNSixXQUFVO29DQUErQ0ssU0FBUTs4Q0FBUzs7Ozs7OzhDQUNqRiw4REFBQ0M7b0NBQU1DLE1BQUs7b0NBQU9DLElBQUc7b0NBQVNDLFVBQVVyQjtvQ0FBb0JZLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFekUsOERBQUNEOzs4Q0FDQyw4REFBQ0s7b0NBQU1KLFdBQVU7b0NBQStDSyxTQUFROzhDQUFrQjs7Ozs7OzhDQUMxRiw4REFBQ0s7b0NBQVNGLElBQUc7b0NBQWtCRyxNQUFLO29DQUFJRixVQUFVakI7b0NBQTRCUSxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRTFGLDhEQUFDWTs0QkFBT0wsTUFBSzs0QkFBU1AsV0FBVTs0QkFBMkhhLFVBQVV4QztzQ0FDbEtBLGVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Z0JBR3JDRSx5QkFBVyw4REFBQ3VDO29CQUFFZCxXQUFVOzhCQUFzRHpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RjtHQXBGd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVzdW1lT3B0aW1pemVyL3BhZ2UuanM/MDRmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IENvbmNlcnRfT25lIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vL2NvbnN0IHJlc3VtZXBhcnNlID0gcmVxdWlyZSgncmVzdW1lLXBhcnNlcicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcmVzdW1lLCBzZXRSZXN1bWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2pvYkRlc2NyaXB0aW9uLCBzZXRKb2JEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHBhcnNlUmVzdW1lID0gYXN5bmMoKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICBpZighcmVzdW1lKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibm8gZmlsZVwiKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXJlc1wiKVxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Jlc3VtZScscmVzdW1lKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3BhcnNlLyR7cmVzdW1lfWApXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc3VtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UmVzdW1lKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAvL3BhcnNlUmVzdW1lKClcclxuXHJcbiAgICAvLyByZXN1bWVwYXJzZVxyXG4gICAgLy8gLnBhcnNlUmVzdW1lRmlsZShyZXN1bWUpXHJcbiAgICAvLyAudGhlbihmaWxlPT57XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwieWVhaGhoXCIgKyBmaWxlKTtcclxuICAgIC8vIH0pXHJcbiAgICAvLyAuY2F0Y2goZXJyb3I9PntcclxuICAgIC8vICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIC8vIH0pO1xyXG4gIH07XHJcblxyXG4gIHBhcnNlUmVzdW1lKClcclxuXHJcbiAgY29uc3QgaGFuZGxlSm9iRGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEpvYkRlc2NyaXB0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgc2V0TWVzc2FnZSgnJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1Jlc3VtZTonLCByZXN1bWUpO1xyXG4gICAgY29uc29sZS5sb2coJ0pvYiBEZXNjcmlwdGlvbjonLCBqb2JEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpOyBcclxuICAgICAgc2V0TWVzc2FnZSgnUmVzdW1lIE9wdGltaXplZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRNZXNzYWdlKCdFcnJvciBPcHRpbWl6aW5nIHJlc3VtZS4nKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IG1pbi1oLXNjcmVlbiBiZy13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcC02XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyIHRleHQtZ3JheS04MDBcIj5SZXN1bWUgT3B0aW1pemVyPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiIGh0bWxGb3I9XCJyZXN1bWVcIj5VcGxvYWQgWW91ciBSZXN1bWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInJlc3VtZVwiIG9uQ2hhbmdlPXtoYW5kbGVSZXN1bWVDaGFuZ2V9IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZmlsZTptci00IGZpbGU6cHktMiBmaWxlOnB4LTQgZmlsZTpyb3VuZGVkLWxnIGZpbGU6Ym9yZGVyLTAgZmlsZTp0ZXh0LXNtIGZpbGU6Zm9udC1zZW1pYm9sZCBmaWxlOmJnLVsjRTJGMEMzXSBmaWxlOnRleHQtZ3JheS03MDAgaG92ZXI6ZmlsZTpiZy1bI2NkZTViNl1cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIiBodG1sRm9yPVwiam9iLWRlc2NyaXB0aW9uXCI+Sm9iIERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiam9iLWRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBvbkNoYW5nZT17aGFuZGxlSm9iRGVzY3JpcHRpb25DaGFuZ2V9IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBwLTIuNSB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjRTJGMEMzXSBob3ZlcjpiZy1bI2NkZTViNl0gdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAnR2VuZXJhdGluZy4uLicgOiAnT3B0aW1pemUgUmVzdW1lJ31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPnttZXNzYWdlfTwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJyZXN1bWUiLCJzZXRSZXN1bWUiLCJqb2JEZXNjcmlwdGlvbiIsInNldEpvYkRlc2NyaXB0aW9uIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJwYXJzZVJlc3VtZSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJoYW5kbGVSZXN1bWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlSm9iRGVzY3JpcHRpb25DaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/resumeOptimizer/page.js\n"));

/***/ })

});