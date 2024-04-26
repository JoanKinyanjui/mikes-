exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 6294:
/***/ ((module) => {

// Exports
module.exports = {
	"MichaelLoupaWord": "drawer_MichaelLoupaWord__lkQWA",
	"DesignandDevelopment": "drawer_DesignandDevelopment__atGF0",
	"HomeDiv": "drawer_HomeDiv__aQC8X",
	"BorderBox": "drawer_BorderBox__Kwide"
};


/***/ }),

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


/***/ }),

/***/ 7001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6294);
/* harmony import */ var _styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2498);
/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





function Drawer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-10/12 mx-auto ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/mikeProfile.png",
                        className: "mx-auto"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "place-content-center  flex w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().MichaelLoupaWord)}`,
                            children: "Michael Loupa"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "place-content-center  flex w-full",
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().DesignandDevelopment)} `,
                                children: "Design and Development"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid place-content-center w-10/12 mx-auto py-4 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().HomeDiv)} w-full  py-[35px] flex place-content-center`,
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Home"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().BorderBox)}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/about",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().HomeDiv)}  py-[35px] flex place-content-center`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "About"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().BorderBox)}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/nft",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().HomeDiv)}  py-[35px] flex place-content-center`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Nft"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().BorderBox)}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/techStack",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().HomeDiv)}  py-[35px] flex place-content-center`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "TechStack"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().BorderBox)}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().OverallReachOutDivM)} flex w-10/12 max-auto shadow-lg py-2`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().ReachOutMore)} w-3/4 h-full grid place-content-center items-center pl-4`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().ReachOutPtagM)} my-4`,
                                children: "Reach Out"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm md:text-lg",
                                children: "Want to create something awesome? Or, you have any queries?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm md:text-lg",
                                children: "Drop a message through email or twitter."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-1/2 justify-between  pt-6 ml-0 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/radix.png"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/material-symbols_mail-outline-rounded.png"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().ReachOutImg)} w-1/4 flex relative h-full`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/images/email3d.png",
                            className: `${(_styles_drawer_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageReachOutM)}`
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);


/***/ })

};
;