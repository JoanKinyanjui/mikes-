exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 2498:
/***/ ((module) => {

// Exports
module.exports = {
	"MainDesktopDiv": "styles_MainDesktopDiv__RYaQX",
	"MainDesktopDivDarkMode": "styles_MainDesktopDivDarkMode__RpofO",
	"MainDesktopContentDiv": "styles_MainDesktopContentDiv__c1_0c",
	"MainDesktopNavbar": "styles_MainDesktopNavbar__xokRC",
	"MainDesktopNavbarMenu": "styles_MainDesktopNavbarMenu__hsPOg",
	"MainDesktopNavbarSocials": "styles_MainDesktopNavbarSocials__l7EJQ",
	"LoupaDiv": "styles_LoupaDiv__xfB4M",
	"Loupa": "styles_Loupa__0Bwf6",
	"LoupaImage": "styles_LoupaImage__nNc1Y",
	"AboutFirstHero": "styles_AboutFirstHero__cedFa",
	"FeaturedPtag": "styles_FeaturedPtag__EWDce",
	"SwyptName": "styles_SwyptName__PSaBz",
	"SwyptPtag": "styles_SwyptPtag__mV0_T",
	"ImageProjectDiv": "styles_ImageProjectDiv__dmYsg",
	"FaeturedProjectsDiv": "styles_FaeturedProjectsDiv__vhjVW",
	"FaeturedProjectsDivDarkMode": "styles_FaeturedProjectsDivDarkMode__x07NO",
	"AllContentOfProjects": "styles_AllContentOfProjects__oHwNM",
	"ReachOutPtag": "styles_ReachOutPtag__1kYIQ",
	"ReachOutImg": "styles_ReachOutImg__VYBT9",
	"emailReachOut": "styles_emailReachOut__FpTl5",
	"messageReachOut": "styles_messageReachOut__bqRaN",
	"OverallReachOutDiv": "styles_OverallReachOutDiv__vQd1T",
	"OverallReachOutDivDarkMode": "styles_OverallReachOutDivDarkMode__plzMK",
	"LineGray": "styles_LineGray__KHyAL",
	"MichaelLoupa": "styles_MichaelLoupa__cA_z3",
	"Scaling": "styles_Scaling__y5s2_",
	"MainDesktopDivM": "styles_MainDesktopDivM__974Ni",
	"MainDesktopDivDarkModeM": "styles_MainDesktopDivDarkModeM__1HWt6",
	"MainDesktopContentDivM": "styles_MainDesktopContentDivM__78amt",
	"AboutFirstHeroM": "styles_AboutFirstHeroM__SdRnZ",
	"FaeturedProjectsDivM": "styles_FaeturedProjectsDivM__YboO1",
	"FaeturedProjectsDivDarkModeM": "styles_FaeturedProjectsDivDarkModeM__XG_Ef",
	"ImageProjectDivM": "styles_ImageProjectDivM__MLeMe",
	"OverallReachOutDivM": "styles_OverallReachOutDivM__NoY7R",
	"ReachOutPtagM": "styles_ReachOutPtagM__3Mr_N",
	"messageReachOutM": "styles_messageReachOutM__x0aKB",
	"SwyptNameM": "styles_SwyptNameM__lj1lx",
	"MichaelLoupaM": "styles_MichaelLoupaM__iSUbW",
	"ScalingM": "styles_ScalingM__UqHcY",
	"LineGrayM": "styles_LineGrayM__egZtY"
};


/***/ }),

/***/ 7751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ AppStateProvider),
/* harmony export */   z: () => (/* binding */ AppStateContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AppStateProvider = ({ children })=>{
    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppStateContext.Provider, {
        value: {
            darkMode,
            toggleDarkMode
        },
        children: children
    });
};


/***/ })

};
;