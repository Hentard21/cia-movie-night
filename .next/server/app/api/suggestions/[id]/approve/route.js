/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/suggestions/[id]/approve/route";
exports.ids = ["app/api/suggestions/[id]/approve/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&page=%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&page=%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_markkaluznyj_movie_voting_app_src_app_api_suggestions_id_approve_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/suggestions/[id]/approve/route.ts */ \"(rsc)/./src/app/api/suggestions/[id]/approve/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/suggestions/[id]/approve/route\",\n        pathname: \"/api/suggestions/[id]/approve\",\n        filename: \"route\",\n        bundlePath: \"app/api/suggestions/[id]/approve/route\"\n    },\n    resolvedPagePath: \"/Users/markkaluznyj/movie-voting-app/src/app/api/suggestions/[id]/approve/route.ts\",\n    nextConfigOutput,\n    userland: _Users_markkaluznyj_movie_voting_app_src_app_api_suggestions_id_approve_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdWdnZXN0aW9ucyUyRiU1QmlkJTVEJTJGYXBwcm92ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3VnZ2VzdGlvbnMlMkYlNUJpZCU1RCUyRmFwcHJvdmUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdWdnZXN0aW9ucyUyRiU1QmlkJTVEJTJGYXBwcm92ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hcmtrYWx1em55aiUyRm1vdmllLXZvdGluZy1hcHAlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWFya2thbHV6bnlqJTJGbW92aWUtdm90aW5nLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tYXJra2FsdXpueWovbW92aWUtdm90aW5nLWFwcC9zcmMvYXBwL2FwaS9zdWdnZXN0aW9ucy9baWRdL2FwcHJvdmUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1Z2dlc3Rpb25zL1tpZF0vYXBwcm92ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1Z2dlc3Rpb25zL1tpZF0vYXBwcm92ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc3VnZ2VzdGlvbnMvW2lkXS9hcHByb3ZlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hcmtrYWx1em55ai9tb3ZpZS12b3RpbmctYXBwL3NyYy9hcHAvYXBpL3N1Z2dlc3Rpb25zL1tpZF0vYXBwcm92ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&page=%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/suggestions/[id]/approve/route.ts":
/*!*******************************************************!*\
  !*** ./src/app/api/suggestions/[id]/approve/route.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase/server */ \"(rsc)/./src/lib/supabase/server.ts\");\n\n\nasync function POST(_request, { params }) {\n    const { id } = await params;\n    const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_1__.createClient)();\n    const { data: suggestion, error: fetchErr } = await supabase.from(\"suggestions\").select(\"*\").eq(\"id\", id).single();\n    if (fetchErr || !suggestion) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Suggestion not found\"\n        }, {\n            status: 404\n        });\n    }\n    const { error: insertErr } = await supabase.from(\"movies\").insert({\n        imdb_id: suggestion.imdb_id,\n        title: suggestion.title,\n        poster_url: suggestion.poster_url,\n        year: suggestion.year,\n        director: suggestion.director,\n        plot: suggestion.plot,\n        genre: suggestion.genre,\n        imdb_rating: suggestion.imdb_rating,\n        added_by: suggestion.submitted_by\n    });\n    if (insertErr) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: insertErr.message\n        }, {\n            status: 500\n        });\n    }\n    await supabase.from(\"suggestions\").delete().eq(\"id\", id);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zdWdnZXN0aW9ucy9baWRdL2FwcHJvdmUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBQ0g7QUFFOUMsZUFBZUUsS0FDcEJDLFFBQXFCLEVBQ3JCLEVBQUVDLE1BQU0sRUFBdUM7SUFFL0MsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBRyxNQUFNRDtJQUNyQixNQUFNRSxXQUFXLE1BQU1MLGtFQUFZQTtJQUVuQyxNQUFNLEVBQUVNLE1BQU1DLFVBQVUsRUFBRUMsT0FBT0MsUUFBUSxFQUFFLEdBQUcsTUFBTUosU0FDakRLLElBQUksQ0FBQyxlQUNMQyxNQUFNLENBQUMsS0FDUEMsRUFBRSxDQUFDLE1BQU1SLElBQ1RTLE1BQU07SUFFVCxJQUFJSixZQUFZLENBQUNGLFlBQVk7UUFDM0IsT0FBT1IscURBQVlBLENBQUNlLElBQUksQ0FBQztZQUFFTixPQUFPO1FBQXVCLEdBQUc7WUFBRU8sUUFBUTtRQUFJO0lBQzVFO0lBRUEsTUFBTSxFQUFFUCxPQUFPUSxTQUFTLEVBQUUsR0FBRyxNQUFNWCxTQUFTSyxJQUFJLENBQUMsVUFBVU8sTUFBTSxDQUFDO1FBQ2hFQyxTQUFTWCxXQUFXVyxPQUFPO1FBQzNCQyxPQUFPWixXQUFXWSxLQUFLO1FBQ3ZCQyxZQUFZYixXQUFXYSxVQUFVO1FBQ2pDQyxNQUFNZCxXQUFXYyxJQUFJO1FBQ3JCQyxVQUFVZixXQUFXZSxRQUFRO1FBQzdCQyxNQUFNaEIsV0FBV2dCLElBQUk7UUFDckJDLE9BQU9qQixXQUFXaUIsS0FBSztRQUN2QkMsYUFBYWxCLFdBQVdrQixXQUFXO1FBQ25DQyxVQUFVbkIsV0FBV29CLFlBQVk7SUFDbkM7SUFFQSxJQUFJWCxXQUFXO1FBQ2IsT0FBT2pCLHFEQUFZQSxDQUFDZSxJQUFJLENBQUM7WUFBRU4sT0FBT1EsVUFBVVksT0FBTztRQUFDLEdBQUc7WUFBRWIsUUFBUTtRQUFJO0lBQ3ZFO0lBRUEsTUFBTVYsU0FBU0ssSUFBSSxDQUFDLGVBQWVtQixNQUFNLEdBQUdqQixFQUFFLENBQUMsTUFBTVI7SUFFckQsT0FBT0wscURBQVlBLENBQUNlLElBQUksQ0FBQztRQUFFZ0IsSUFBSTtJQUFLO0FBQ3RDIiwic291cmNlcyI6WyIvVXNlcnMvbWFya2thbHV6bnlqL21vdmllLXZvdGluZy1hcHAvc3JjL2FwcC9hcGkvc3VnZ2VzdGlvbnMvW2lkXS9hcHByb3ZlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlL3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoXHJcbiAgX3JlcXVlc3Q6IE5leHRSZXF1ZXN0LFxyXG4gIHsgcGFyYW1zIH06IHsgcGFyYW1zOiBQcm9taXNlPHsgaWQ6IHN0cmluZyB9PiB9XHJcbikge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGF3YWl0IHBhcmFtcztcclxuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHN1Z2dlc3Rpb24sIGVycm9yOiBmZXRjaEVyciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwic3VnZ2VzdGlvbnNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJpZFwiLCBpZClcclxuICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgaWYgKGZldGNoRXJyIHx8ICFzdWdnZXN0aW9uKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJTdWdnZXN0aW9uIG5vdCBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGVycm9yOiBpbnNlcnRFcnIgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJtb3ZpZXNcIikuaW5zZXJ0KHtcclxuICAgIGltZGJfaWQ6IHN1Z2dlc3Rpb24uaW1kYl9pZCxcclxuICAgIHRpdGxlOiBzdWdnZXN0aW9uLnRpdGxlLFxyXG4gICAgcG9zdGVyX3VybDogc3VnZ2VzdGlvbi5wb3N0ZXJfdXJsLFxyXG4gICAgeWVhcjogc3VnZ2VzdGlvbi55ZWFyLFxyXG4gICAgZGlyZWN0b3I6IHN1Z2dlc3Rpb24uZGlyZWN0b3IsXHJcbiAgICBwbG90OiBzdWdnZXN0aW9uLnBsb3QsXHJcbiAgICBnZW5yZTogc3VnZ2VzdGlvbi5nZW5yZSxcclxuICAgIGltZGJfcmF0aW5nOiBzdWdnZXN0aW9uLmltZGJfcmF0aW5nLFxyXG4gICAgYWRkZWRfYnk6IHN1Z2dlc3Rpb24uc3VibWl0dGVkX2J5LFxyXG4gIH0pO1xyXG5cclxuICBpZiAoaW5zZXJ0RXJyKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogaW5zZXJ0RXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcblxyXG4gIGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzdWdnZXN0aW9uc1wiKS5kZWxldGUoKS5lcShcImlkXCIsIGlkKTtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IHRydWUgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZUNsaWVudCIsIlBPU1QiLCJfcmVxdWVzdCIsInBhcmFtcyIsImlkIiwic3VwYWJhc2UiLCJkYXRhIiwic3VnZ2VzdGlvbiIsImVycm9yIiwiZmV0Y2hFcnIiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJqc29uIiwic3RhdHVzIiwiaW5zZXJ0RXJyIiwiaW5zZXJ0IiwiaW1kYl9pZCIsInRpdGxlIiwicG9zdGVyX3VybCIsInllYXIiLCJkaXJlY3RvciIsInBsb3QiLCJnZW5yZSIsImltZGJfcmF0aW5nIiwiYWRkZWRfYnkiLCJzdWJtaXR0ZWRfYnkiLCJtZXNzYWdlIiwiZGVsZXRlIiwib2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/suggestions/[id]/approve/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/supabase/server.ts":
/*!************************************!*\
  !*** ./src/lib/supabase/server.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nasync function createClient() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(\"https://peyidfqcjhhjafituwqx.supabase.co\", \"sb_publishable_Zi81Iv4yZKrPDr0NrBI_Wg_JJC8Zt4c\", {\n        cookies: {\n            getAll () {\n                return cookieStore.getAll();\n            },\n            setAll (cookiesToSet) {\n                try {\n                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));\n                } catch  {\n                // ignore in Server Components\n                }\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N1cGFiYXNlL3NlcnZlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFDWjtBQUVoQyxlQUFlRTtJQUNwQixNQUFNQyxjQUFjLE1BQU1GLHFEQUFPQTtJQUNqQyxPQUFPRCxpRUFBa0JBLENBQ3ZCSSwwQ0FBb0MsRUFDcENBLGdEQUF5QyxFQUN6QztRQUNFSCxTQUFTO1lBQ1BPO2dCQUNFLE9BQU9MLFlBQVlLLE1BQU07WUFDM0I7WUFDQUMsUUFBT0MsWUFBa0Y7Z0JBQ3ZGLElBQUk7b0JBQ0ZBLGFBQWFDLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FDNUNYLFlBQVlZLEdBQUcsQ0FBQ0gsTUFBTUMsT0FBT0M7Z0JBRWpDLEVBQUUsT0FBTTtnQkFDTiw4QkFBOEI7Z0JBQ2hDO1lBQ0Y7UUFDRjtJQUNGO0FBRUoiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJra2FsdXpueWovbW92aWUtdm90aW5nLWFwcC9zcmMvbGliL3N1cGFiYXNlL3NlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNsaWVudCgpIHtcclxuICBjb25zdCBjb29raWVTdG9yZSA9IGF3YWl0IGNvb2tpZXMoKTtcclxuICByZXR1cm4gY3JlYXRlU2VydmVyQ2xpZW50KFxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZISxcclxuICAgIHtcclxuICAgICAgY29va2llczoge1xyXG4gICAgICAgIGdldEFsbCgpIHtcclxuICAgICAgICAgIHJldHVybiBjb29raWVTdG9yZS5nZXRBbGwoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFsbChjb29raWVzVG9TZXQ6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfVtdKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb29raWVzVG9TZXQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PlxyXG4gICAgICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgaW4gU2VydmVyIENvbXBvbmVudHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNlcnZlckNsaWVudCIsImNvb2tpZXMiLCJjcmVhdGVDbGllbnQiLCJjb29raWVTdG9yZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImdldEFsbCIsInNldEFsbCIsImNvb2tpZXNUb1NldCIsImZvckVhY2giLCJuYW1lIiwidmFsdWUiLCJvcHRpb25zIiwic2V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase/server.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&page=%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsuggestions%2F%5Bid%5D%2Fapprove%2Froute.ts&appDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarkkaluznyj%2Fmovie-voting-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();