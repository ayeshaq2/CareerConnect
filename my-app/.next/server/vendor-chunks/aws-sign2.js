/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aws-sign2";
exports.ids = ["vendor-chunks/aws-sign2"];
exports.modules = {

/***/ "(ssr)/./node_modules/aws-sign2/index.js":
/*!*****************************************!*\
  !*** ./node_modules/aws-sign2/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n *  Copyright 2010 LearnBoost <dev@learnboost.com>\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ /**\n * Module dependencies.\n */ var crypto = __webpack_require__(/*! crypto */ \"crypto\"), parse = (__webpack_require__(/*! url */ \"url\").parse);\n/**\n * Valid keys.\n */ var keys = [\n    \"acl\",\n    \"location\",\n    \"logging\",\n    \"notification\",\n    \"partNumber\",\n    \"policy\",\n    \"requestPayment\",\n    \"torrent\",\n    \"uploadId\",\n    \"uploads\",\n    \"versionId\",\n    \"versioning\",\n    \"versions\",\n    \"website\"\n];\n/**\n * Return an \"Authorization\" header value with the given `options`\n * in the form of \"AWS <key>:<signature>\"\n *\n * @param {Object} options\n * @return {String}\n * @api private\n */ function authorization(options) {\n    return \"AWS \" + options.key + \":\" + sign(options);\n}\nmodule.exports = authorization;\nmodule.exports.authorization = authorization;\n/**\n * Simple HMAC-SHA1 Wrapper\n *\n * @param {Object} options\n * @return {String}\n * @api private\n */ function hmacSha1(options) {\n    return crypto.createHmac(\"sha1\", options.secret).update(options.message).digest(\"base64\");\n}\nmodule.exports.hmacSha1 = hmacSha1;\n/**\n * Create a base64 sha1 HMAC for `options`. \n * \n * @param {Object} options\n * @return {String}\n * @api private\n */ function sign(options) {\n    options.message = stringToSign(options);\n    return hmacSha1(options);\n}\nmodule.exports.sign = sign;\n/**\n * Create a base64 sha1 HMAC for `options`. \n *\n * Specifically to be used with S3 presigned URLs\n * \n * @param {Object} options\n * @return {String}\n * @api private\n */ function signQuery(options) {\n    options.message = queryStringToSign(options);\n    return hmacSha1(options);\n}\nmodule.exports.signQuery = signQuery;\n/**\n * Return a string for sign() with the given `options`.\n *\n * Spec:\n * \n *    <verb>\\n\n *    <md5>\\n\n *    <content-type>\\n\n *    <date>\\n\n *    [headers\\n]\n *    <resource>\n *\n * @param {Object} options\n * @return {String}\n * @api private\n */ function stringToSign(options) {\n    var headers = options.amazonHeaders || \"\";\n    if (headers) headers += \"\\n\";\n    var r = [\n        options.verb,\n        options.md5,\n        options.contentType,\n        options.date ? options.date.toUTCString() : \"\",\n        headers + options.resource\n    ];\n    return r.join(\"\\n\");\n}\nmodule.exports.stringToSign = stringToSign;\n/**\n * Return a string for sign() with the given `options`, but is meant exclusively\n * for S3 presigned URLs\n *\n * Spec:\n * \n *    <date>\\n\n *    <resource>\n *\n * @param {Object} options\n * @return {String}\n * @api private\n */ function queryStringToSign(options) {\n    return \"GET\\n\\n\\n\" + options.date + \"\\n\" + options.resource;\n}\nmodule.exports.queryStringToSign = queryStringToSign;\n/**\n * Perform the following:\n *\n *  - ignore non-amazon headers\n *  - lowercase fields\n *  - sort lexicographically\n *  - trim whitespace between \":\"\n *  - join with newline\n *\n * @param {Object} headers\n * @return {String}\n * @api private\n */ function canonicalizeHeaders(headers) {\n    var buf = [], fields = Object.keys(headers);\n    for(var i = 0, len = fields.length; i < len; ++i){\n        var field = fields[i], val = headers[field], field = field.toLowerCase();\n        if (0 !== field.indexOf(\"x-amz\")) continue;\n        buf.push(field + \":\" + val);\n    }\n    return buf.sort().join(\"\\n\");\n}\nmodule.exports.canonicalizeHeaders = canonicalizeHeaders;\n/**\n * Perform the following:\n *\n *  - ignore non sub-resources\n *  - sort lexicographically\n *\n * @param {String} resource\n * @return {String}\n * @api private\n */ function canonicalizeResource(resource) {\n    var url = parse(resource, true), path = url.pathname, buf = [];\n    Object.keys(url.query).forEach(function(key) {\n        if (!~keys.indexOf(key)) return;\n        var val = \"\" == url.query[key] ? \"\" : \"=\" + encodeURIComponent(url.query[key]);\n        buf.push(key + val);\n    });\n    return path + (buf.length ? \"?\" + buf.sort().join(\"&\") : \"\");\n}\nmodule.exports.canonicalizeResource = canonicalizeResource;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXdzLXNpZ24yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7Ozs7OztDQWNDLEdBRUQ7O0NBRUMsR0FFRCxJQUFJQSxTQUFTQyxtQkFBT0EsQ0FBQyx5QkFDakJDLFFBQVFELDZDQUFvQjtBQUdoQzs7Q0FFQyxHQUVELElBQUlFLE9BQ0Y7SUFBRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFSDs7Ozs7OztDQU9DLEdBRUQsU0FBU0MsY0FBZUMsT0FBTztJQUM3QixPQUFPLFNBQVNBLFFBQVFDLEdBQUcsR0FBRyxNQUFNQyxLQUFLRjtBQUMzQztBQUVBRyxPQUFPQyxPQUFPLEdBQUdMO0FBQ2pCSSw0QkFBNEIsR0FBR0o7QUFFL0I7Ozs7OztDQU1DLEdBRUQsU0FBU00sU0FBVUwsT0FBTztJQUN4QixPQUFPTCxPQUFPVyxVQUFVLENBQUMsUUFBUU4sUUFBUU8sTUFBTSxFQUFFQyxNQUFNLENBQUNSLFFBQVFTLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBQ2xGO0FBRUFQLHVCQUF1QixHQUFHRTtBQUUxQjs7Ozs7O0NBTUMsR0FFRCxTQUFTSCxLQUFNRixPQUFPO0lBQ3BCQSxRQUFRUyxPQUFPLEdBQUdFLGFBQWFYO0lBQy9CLE9BQU9LLFNBQVNMO0FBQ2xCO0FBQ0FHLG1CQUFtQixHQUFHRDtBQUV0Qjs7Ozs7Ozs7Q0FRQyxHQUVELFNBQVNVLFVBQVdaLE9BQU87SUFDekJBLFFBQVFTLE9BQU8sR0FBR0ksa0JBQWtCYjtJQUNwQyxPQUFPSyxTQUFTTDtBQUNsQjtBQUNBRyx3QkFBd0IsR0FBRVM7QUFFMUI7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBRUQsU0FBU0QsYUFBY1gsT0FBTztJQUM1QixJQUFJYyxVQUFVZCxRQUFRZSxhQUFhLElBQUk7SUFDdkMsSUFBSUQsU0FBU0EsV0FBVztJQUN4QixJQUFJRSxJQUNGO1FBQUVoQixRQUFRaUIsSUFBSTtRQUNaakIsUUFBUWtCLEdBQUc7UUFDWGxCLFFBQVFtQixXQUFXO1FBQ25CbkIsUUFBUW9CLElBQUksR0FBR3BCLFFBQVFvQixJQUFJLENBQUNDLFdBQVcsS0FBSztRQUM1Q1AsVUFBVWQsUUFBUXNCLFFBQVE7S0FDM0I7SUFDSCxPQUFPTixFQUFFTyxJQUFJLENBQUM7QUFDaEI7QUFDQXBCLDJCQUEyQixHQUFHUTtBQUU5Qjs7Ozs7Ozs7Ozs7O0NBWUMsR0FFRCxTQUFTRSxrQkFBbUJiLE9BQU87SUFDakMsT0FBTyxjQUFjQSxRQUFRb0IsSUFBSSxHQUFHLE9BQU9wQixRQUFRc0IsUUFBUTtBQUM3RDtBQUNBbkIsZ0NBQWdDLEdBQUdVO0FBRW5DOzs7Ozs7Ozs7Ozs7Q0FZQyxHQUVELFNBQVNXLG9CQUFxQlYsT0FBTztJQUNuQyxJQUFJVyxNQUFNLEVBQUUsRUFDUkMsU0FBU0MsT0FBTzdCLElBQUksQ0FBQ2dCO0lBRXpCLElBQUssSUFBSWMsSUFBSSxHQUFHQyxNQUFNSCxPQUFPSSxNQUFNLEVBQUVGLElBQUlDLEtBQUssRUFBRUQsRUFBRztRQUNqRCxJQUFJRyxRQUFRTCxNQUFNLENBQUNFLEVBQUUsRUFDakJJLE1BQU1sQixPQUFPLENBQUNpQixNQUFNLEVBQ3BCQSxRQUFRQSxNQUFNRSxXQUFXO1FBRTdCLElBQUksTUFBTUYsTUFBTUcsT0FBTyxDQUFDLFVBQVU7UUFDbENULElBQUlVLElBQUksQ0FBQ0osUUFBUSxNQUFNQztJQUN6QjtJQUNBLE9BQU9QLElBQUlXLElBQUksR0FBR2IsSUFBSSxDQUFDO0FBQ3pCO0FBQ0FwQixrQ0FBa0MsR0FBR3FCO0FBRXJDOzs7Ozs7Ozs7Q0FTQyxHQUVELFNBQVNhLHFCQUFzQmYsUUFBUTtJQUNyQyxJQUFJZ0IsTUFBTXpDLE1BQU15QixVQUFVLE9BQ3RCaUIsT0FBT0QsSUFBSUUsUUFBUSxFQUNuQmYsTUFBTSxFQUFFO0lBR1pFLE9BQU83QixJQUFJLENBQUN3QyxJQUFJRyxLQUFLLEVBQUVDLE9BQU8sQ0FBQyxTQUFTekMsR0FBRztRQUN6QyxJQUFJLENBQUMsQ0FBQ0gsS0FBS29DLE9BQU8sQ0FBQ2pDLE1BQU07UUFDekIsSUFBSStCLE1BQU0sTUFBTU0sSUFBSUcsS0FBSyxDQUFDeEMsSUFBSSxHQUFHLEtBQUssTUFBTTBDLG1CQUFtQkwsSUFBSUcsS0FBSyxDQUFDeEMsSUFBSTtRQUM3RXdCLElBQUlVLElBQUksQ0FBQ2xDLE1BQU0rQjtJQUNqQjtJQUVBLE9BQU9PLE9BQVFkLENBQUFBLElBQUlLLE1BQU0sR0FBRyxNQUFNTCxJQUFJVyxJQUFJLEdBQUdiLElBQUksQ0FBQyxPQUFPLEVBQUM7QUFDNUQ7QUFDQXBCLG1DQUFtQyxHQUFHa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvYXdzLXNpZ24yL2luZGV4LmpzPzgyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKiFcbiAqICBDb3B5cmlnaHQgMjAxMCBMZWFybkJvb3N0IDxkZXZAbGVhcm5ib29zdC5jb20+XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJylcbiAgLCBwYXJzZSA9IHJlcXVpcmUoJ3VybCcpLnBhcnNlXG4gIDtcblxuLyoqXG4gKiBWYWxpZCBrZXlzLlxuICovXG5cbnZhciBrZXlzID0gXG4gIFsgJ2FjbCdcbiAgLCAnbG9jYXRpb24nXG4gICwgJ2xvZ2dpbmcnXG4gICwgJ25vdGlmaWNhdGlvbidcbiAgLCAncGFydE51bWJlcidcbiAgLCAncG9saWN5J1xuICAsICdyZXF1ZXN0UGF5bWVudCdcbiAgLCAndG9ycmVudCdcbiAgLCAndXBsb2FkSWQnXG4gICwgJ3VwbG9hZHMnXG4gICwgJ3ZlcnNpb25JZCdcbiAgLCAndmVyc2lvbmluZydcbiAgLCAndmVyc2lvbnMnXG4gICwgJ3dlYnNpdGUnXG4gIF1cblxuLyoqXG4gKiBSZXR1cm4gYW4gXCJBdXRob3JpemF0aW9uXCIgaGVhZGVyIHZhbHVlIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYFxuICogaW4gdGhlIGZvcm0gb2YgXCJBV1MgPGtleT46PHNpZ25hdHVyZT5cIlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhdXRob3JpemF0aW9uIChvcHRpb25zKSB7XG4gIHJldHVybiAnQVdTICcgKyBvcHRpb25zLmtleSArICc6JyArIHNpZ24ob3B0aW9ucylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhdXRob3JpemF0aW9uXG5tb2R1bGUuZXhwb3J0cy5hdXRob3JpemF0aW9uID0gYXV0aG9yaXphdGlvblxuXG4vKipcbiAqIFNpbXBsZSBITUFDLVNIQTEgV3JhcHBlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqLyBcblxuZnVuY3Rpb24gaG1hY1NoYTEgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyeXB0by5jcmVhdGVIbWFjKCdzaGExJywgb3B0aW9ucy5zZWNyZXQpLnVwZGF0ZShvcHRpb25zLm1lc3NhZ2UpLmRpZ2VzdCgnYmFzZTY0Jylcbn1cblxubW9kdWxlLmV4cG9ydHMuaG1hY1NoYTEgPSBobWFjU2hhMVxuXG4vKipcbiAqIENyZWF0ZSBhIGJhc2U2NCBzaGExIEhNQUMgZm9yIGBvcHRpb25zYC4gXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzaWduIChvcHRpb25zKSB7XG4gIG9wdGlvbnMubWVzc2FnZSA9IHN0cmluZ1RvU2lnbihvcHRpb25zKVxuICByZXR1cm4gaG1hY1NoYTEob3B0aW9ucylcbn1cbm1vZHVsZS5leHBvcnRzLnNpZ24gPSBzaWduXG5cbi8qKlxuICogQ3JlYXRlIGEgYmFzZTY0IHNoYTEgSE1BQyBmb3IgYG9wdGlvbnNgLiBcbiAqXG4gKiBTcGVjaWZpY2FsbHkgdG8gYmUgdXNlZCB3aXRoIFMzIHByZXNpZ25lZCBVUkxzXG4gKiBcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzaWduUXVlcnkgKG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5tZXNzYWdlID0gcXVlcnlTdHJpbmdUb1NpZ24ob3B0aW9ucylcbiAgcmV0dXJuIGhtYWNTaGExKG9wdGlvbnMpXG59XG5tb2R1bGUuZXhwb3J0cy5zaWduUXVlcnk9IHNpZ25RdWVyeVxuXG4vKipcbiAqIFJldHVybiBhIHN0cmluZyBmb3Igc2lnbigpIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYC5cbiAqXG4gKiBTcGVjOlxuICogXG4gKiAgICA8dmVyYj5cXG5cbiAqICAgIDxtZDU+XFxuXG4gKiAgICA8Y29udGVudC10eXBlPlxcblxuICogICAgPGRhdGU+XFxuXG4gKiAgICBbaGVhZGVyc1xcbl1cbiAqICAgIDxyZXNvdXJjZT5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nVG9TaWduIChvcHRpb25zKSB7XG4gIHZhciBoZWFkZXJzID0gb3B0aW9ucy5hbWF6b25IZWFkZXJzIHx8ICcnXG4gIGlmIChoZWFkZXJzKSBoZWFkZXJzICs9ICdcXG4nXG4gIHZhciByID0gXG4gICAgWyBvcHRpb25zLnZlcmJcbiAgICAsIG9wdGlvbnMubWQ1XG4gICAgLCBvcHRpb25zLmNvbnRlbnRUeXBlXG4gICAgLCBvcHRpb25zLmRhdGUgPyBvcHRpb25zLmRhdGUudG9VVENTdHJpbmcoKSA6ICcnXG4gICAgLCBoZWFkZXJzICsgb3B0aW9ucy5yZXNvdXJjZVxuICAgIF1cbiAgcmV0dXJuIHIuam9pbignXFxuJylcbn1cbm1vZHVsZS5leHBvcnRzLnN0cmluZ1RvU2lnbiA9IHN0cmluZ1RvU2lnblxuXG4vKipcbiAqIFJldHVybiBhIHN0cmluZyBmb3Igc2lnbigpIHdpdGggdGhlIGdpdmVuIGBvcHRpb25zYCwgYnV0IGlzIG1lYW50IGV4Y2x1c2l2ZWx5XG4gKiBmb3IgUzMgcHJlc2lnbmVkIFVSTHNcbiAqXG4gKiBTcGVjOlxuICogXG4gKiAgICA8ZGF0ZT5cXG5cbiAqICAgIDxyZXNvdXJjZT5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb1NpZ24gKG9wdGlvbnMpe1xuICByZXR1cm4gJ0dFVFxcblxcblxcbicgKyBvcHRpb25zLmRhdGUgKyAnXFxuJyArIG9wdGlvbnMucmVzb3VyY2Vcbn1cbm1vZHVsZS5leHBvcnRzLnF1ZXJ5U3RyaW5nVG9TaWduID0gcXVlcnlTdHJpbmdUb1NpZ25cblxuLyoqXG4gKiBQZXJmb3JtIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogIC0gaWdub3JlIG5vbi1hbWF6b24gaGVhZGVyc1xuICogIC0gbG93ZXJjYXNlIGZpZWxkc1xuICogIC0gc29ydCBsZXhpY29ncmFwaGljYWxseVxuICogIC0gdHJpbSB3aGl0ZXNwYWNlIGJldHdlZW4gXCI6XCJcbiAqICAtIGpvaW4gd2l0aCBuZXdsaW5lXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNhbm9uaWNhbGl6ZUhlYWRlcnMgKGhlYWRlcnMpIHtcbiAgdmFyIGJ1ZiA9IFtdXG4gICAgLCBmaWVsZHMgPSBPYmplY3Qua2V5cyhoZWFkZXJzKVxuICAgIDtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZpZWxkcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBmaWVsZCA9IGZpZWxkc1tpXVxuICAgICAgLCB2YWwgPSBoZWFkZXJzW2ZpZWxkXVxuICAgICAgLCBmaWVsZCA9IGZpZWxkLnRvTG93ZXJDYXNlKClcbiAgICAgIDtcbiAgICBpZiAoMCAhPT0gZmllbGQuaW5kZXhPZigneC1hbXonKSkgY29udGludWVcbiAgICBidWYucHVzaChmaWVsZCArICc6JyArIHZhbClcbiAgfVxuICByZXR1cm4gYnVmLnNvcnQoKS5qb2luKCdcXG4nKVxufVxubW9kdWxlLmV4cG9ydHMuY2Fub25pY2FsaXplSGVhZGVycyA9IGNhbm9uaWNhbGl6ZUhlYWRlcnNcblxuLyoqXG4gKiBQZXJmb3JtIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogIC0gaWdub3JlIG5vbiBzdWItcmVzb3VyY2VzXG4gKiAgLSBzb3J0IGxleGljb2dyYXBoaWNhbGx5XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlc291cmNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjYW5vbmljYWxpemVSZXNvdXJjZSAocmVzb3VyY2UpIHtcbiAgdmFyIHVybCA9IHBhcnNlKHJlc291cmNlLCB0cnVlKVxuICAgICwgcGF0aCA9IHVybC5wYXRobmFtZVxuICAgICwgYnVmID0gW11cbiAgICA7XG5cbiAgT2JqZWN0LmtleXModXJsLnF1ZXJ5KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgaWYgKCF+a2V5cy5pbmRleE9mKGtleSkpIHJldHVyblxuICAgIHZhciB2YWwgPSAnJyA9PSB1cmwucXVlcnlba2V5XSA/ICcnIDogJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVybC5xdWVyeVtrZXldKVxuICAgIGJ1Zi5wdXNoKGtleSArIHZhbClcbiAgfSlcblxuICByZXR1cm4gcGF0aCArIChidWYubGVuZ3RoID8gJz8nICsgYnVmLnNvcnQoKS5qb2luKCcmJykgOiAnJylcbn1cbm1vZHVsZS5leHBvcnRzLmNhbm9uaWNhbGl6ZVJlc291cmNlID0gY2Fub25pY2FsaXplUmVzb3VyY2VcbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJyZXF1aXJlIiwicGFyc2UiLCJrZXlzIiwiYXV0aG9yaXphdGlvbiIsIm9wdGlvbnMiLCJrZXkiLCJzaWduIiwibW9kdWxlIiwiZXhwb3J0cyIsImhtYWNTaGExIiwiY3JlYXRlSG1hYyIsInNlY3JldCIsInVwZGF0ZSIsIm1lc3NhZ2UiLCJkaWdlc3QiLCJzdHJpbmdUb1NpZ24iLCJzaWduUXVlcnkiLCJxdWVyeVN0cmluZ1RvU2lnbiIsImhlYWRlcnMiLCJhbWF6b25IZWFkZXJzIiwiciIsInZlcmIiLCJtZDUiLCJjb250ZW50VHlwZSIsImRhdGUiLCJ0b1VUQ1N0cmluZyIsInJlc291cmNlIiwiam9pbiIsImNhbm9uaWNhbGl6ZUhlYWRlcnMiLCJidWYiLCJmaWVsZHMiLCJPYmplY3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZmllbGQiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJwdXNoIiwic29ydCIsImNhbm9uaWNhbGl6ZVJlc291cmNlIiwidXJsIiwicGF0aCIsInBhdGhuYW1lIiwicXVlcnkiLCJmb3JFYWNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/aws-sign2/index.js\n");

/***/ })

};
;