"use strict";
(() => {
var exports = {};
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fleads_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fleads_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/leads.js
var leads_namespaceObject = {};
__webpack_require__.r(leads_namespaceObject);
__webpack_require__.d(leads_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./pages/api/leads.js


const leadsFilePath = external_path_default().join(process.cwd(), "data", "leads.json");
function handler(req, res) {
    if (req.method === "GET") {
        const leads = JSON.parse(external_fs_default().readFileSync(leadsFilePath, "utf-8"));
        res.status(200).json(leads);
    } else if (req.method === "POST") {
        const leads = JSON.parse(external_fs_default().readFileSync(leadsFilePath, "utf-8"));
        const newLead = {
            id: Date.now(),
            ...req.body
        };
        leads.push(newLead);
        external_fs_default().writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));
        res.status(201).json(newLead);
    } else {
        res.setHeader("Allow", [
            "GET",
            "POST"
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fleads&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fleads.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fleads_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fleads_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(leads_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(leads_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/leads",
        pathname: "/api/leads",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: leads_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(5458)));
module.exports = __webpack_exports__;

})();