(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["chunk-common"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HelloWorld',
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage('extName');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/state/helpers */ "./src/state/helpers.js");
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.mjs");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_2__.SimpleBar
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60
      }
    };
  },
  computed: {
    ..._state_helpers__WEBPACK_IMPORTED_MODULE_1__.layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      }
    }
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true
    }
  },
  mounted() {
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");
      collapses.forEach(collapse => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", e => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses = closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach(siblingCollapse => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
                siblingCollapse.parentElement.firstChild.setAttribute("aria-expanded", "false");
              }
            });
          } else {
            let getSiblings = elem => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach(item => {
              if (item.childNodes.length > 2) {
                item.firstElementChild.setAttribute("aria-expanded", "false");
                item.firstElementChild.classList.remove("active");
              }
              let ids = item.querySelectorAll("*[id]");
              ids.forEach(item1 => {
                item1.classList.remove("show");
                item1.parentElement.firstChild.setAttribute("aria-expanded", "false");
                item1.parentElement.firstChild.classList.remove("active");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");
                  val.forEach(subitem => {
                    if (subitem.hasAttribute("aria-expanded")) subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", e => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach(childCollapse => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.classList.remove("show");
            childCollapseInstance.parentElement.firstChild.setAttribute("aria-expanded", "false");
          });
        });
      });
    }
  },
  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500) if (this.$refs.isSimplebar) this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
      }
    },
    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling) parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                const grandparent = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.parentElement.closest(".collapse");
                if (grandparent && grandparent && grandparent.previousElementSibling) {
                  grandparent.previousElementSibling.classList.add("active");
                  grandparent.classList.add("show");
                }
              }
            }
          }
        }
      }, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav-bar.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav-bar.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.mjs");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n */ "./src/i18n.js");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/utile */ "./src/api/utile.js");





/**
 * Nav-bar Component
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      profile: [],
      languages: [{
        flag: __webpack_require__(/*! @/assets/images/flags/us.svg */ "./src/assets/images/flags/us.svg"),
        language: "en",
        title: "English"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/spain.svg */ "./src/assets/images/flags/spain.svg"),
        language: "es",
        title: "Española"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/germany.svg */ "./src/assets/images/flags/germany.svg"),
        language: "gr",
        title: "Deutsche"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/italy.svg */ "./src/assets/images/flags/italy.svg"),
        language: "it",
        title: "italiana"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/russia.svg */ "./src/assets/images/flags/russia.svg"),
        language: "ru",
        title: "русский"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/china.svg */ "./src/assets/images/flags/china.svg"),
        language: "ch",
        title: "中國人"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/french.svg */ "./src/assets/images/flags/french.svg"),
        language: "fr",
        title: "Français"
      }, {
        flag: __webpack_require__(/*! @/assets/images/flags/ae.svg */ "./src/assets/images/flags/ae.svg"),
        language: "ar",
        title: "Arabic"
      }],
      lan: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].locale,
      text: null,
      flag: null,
      value: null,
      myVar: 1,
      DefaultLanguage: ""
    };
  },
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_0__.SimpleBar
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      (0,_api_utile__WEBPACK_IMPORTED_MODULE_2__.getLastDebugLogUserId)().then(logUserId => {
        const query = `SELECT Id, Name,LanguageLocaleKey FROM User WHERE Id = '${logUserId}'`;
        (0,_api_utile__WEBPACK_IMPORTED_MODULE_2__.executeQuery)(query).then(result => {
          // Assuming there is only one record in the result
          if (result.length > 0) {
            const name = result[0].Name;
            this.DefaultLanguage = result[0].LanguageLocaleKey.substring(0, 2);
            console.log("Langue :" + this.DefaultLanguage);
            // Update the name in the HTML
            document.querySelector(".user-name-text").textContent = name;

            // Update the welcome message in the HTML
            document.querySelector(".dropdown-header").textContent = `Welcome ${name}!`;
            this.profile = result[0];
          } else {
            console.log("No matching user found.");
          }
        }).catch(err => {
          console.error(err);
        });
      }).catch(err => {
        console.error(err);
      });
    },
    findLanguageInfo(language) {
      const foundLanguage = this.languages.find(lang => lang.language === language);
      return foundLanguage ? {
        flag: foundLanguage.flag,
        title: foundLanguage.title
      } : null;
    },
    isCustomDropdown() {
      //Search bar
      var searchOptions = document.getElementById("search-close-options");
      var dropdown = document.getElementById("search-dropdown");
      var searchInput = document.getElementById("search-options");
      searchInput.addEventListener("focus", () => {
        var inputLength = searchInput.value.length;
        if (inputLength > 0) {
          dropdown.classList.add("show");
          searchOptions.classList.remove("d-none");
        } else {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });
      searchInput.addEventListener("keyup", () => {
        var inputLength = searchInput.value.length;
        if (inputLength > 0) {
          dropdown.classList.add("show");
          searchOptions.classList.remove("d-none");
        } else {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });
      searchOptions.addEventListener("click", () => {
        searchInput.value = "";
        dropdown.classList.remove("show");
        searchOptions.classList.add("d-none");
      });
      document.body.addEventListener("click", e => {
        if (e.target.getAttribute("id") !== "search-options") {
          dropdown.classList.remove("show");
          searchOptions.classList.add("d-none");
        }
      });
    },
    toggleHamburgerMenu() {
      var windowSize = document.documentElement.clientWidth;
      let layoutType = document.documentElement.getAttribute("data-layout");
      let visiblilityType = document.documentElement.getAttribute("data-sidebar-visibility");
      document.documentElement.setAttribute("data-sidebar-visibility", "show");
      if (windowSize > 767) document.querySelector(".hamburger-icon").classList.toggle("open");

      //For collapse horizontal menu
      if (document.documentElement.getAttribute("data-layout") === "horizontal") {
        document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
      }

      //For collapse vertical menu
      if (visiblilityType === "show" && (layoutType === "vertical" || layoutType === "semibox")) {
        if (windowSize < 1025 && windowSize > 767) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "sm" ? document.documentElement.setAttribute("data-sidebar-size", "") : document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "lg" ? document.documentElement.setAttribute("data-sidebar-size", "sm") : document.documentElement.setAttribute("data-sidebar-size", "lg");
        } else if (windowSize <= 767) {
          document.body.classList.add("vertical-sidebar-enable");
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }

      //Two column menu
      if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
        document.body.classList.contains("twocolumn-panel") ? document.body.classList.remove("twocolumn-panel") : document.body.classList.add("twocolumn-panel");
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (!document.fullscreenElement && /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    setLanguage(locale, country, flag) {
      console.log("setlangueafe executed");
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      document.getElementById("header-lang-img").setAttribute("src", flag);
      _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].global.locale = locale;
    },
    toggleDarkMode() {
      if (document.documentElement.getAttribute("data-layout-mode") == "dark") {
        document.documentElement.setAttribute("data-layout-mode", "light");
      } else {
        document.documentElement.setAttribute("data-layout-mode", "dark");
      }
    },
    initTopbarComponents() {
      function updateCartPrice() {
        var currencySign = "$";
        var subtotal = 0;
        Array.from(document.getElementsByClassName("cart-item-price")).forEach(function (e) {
          subtotal += parseFloat(e.innerHTML);
        });
        if (document.getElementById("cart-item-total")) {
          document.getElementById("cart-item-total").innerHTML = currencySign + subtotal.toFixed(2);
        }
      }
      if (document.getElementsByClassName("dropdown-item-cart")) {
        var dropdownItemCart = document.querySelectorAll(".dropdown-item-cart").length;
        Array.from(document.querySelectorAll("#page-topbar .dropdown-menu-cart .remove-item-btn")).forEach(function (item) {
          item.addEventListener("click", function () {
            dropdownItemCart--;
            this.closest(".dropdown-item-cart").remove();
            Array.from(document.getElementsByClassName("cartitem-badge")).forEach(function (e) {
              e.innerHTML = dropdownItemCart;
            });
            updateCartPrice();
            if (document.getElementById("empty-cart")) {
              document.getElementById("empty-cart").style.display = dropdownItemCart == 0 ? "block" : "none";
            }
            if (document.getElementById("checkout-elem")) {
              document.getElementById("checkout-elem").style.display = dropdownItemCart == 0 ? "none" : "block";
            }
          });
        });
        Array.from(document.getElementsByClassName("cartitem-badge")).forEach(function (e) {
          e.innerHTML = dropdownItemCart;
        });
        if (document.getElementById("empty-cart")) {
          document.getElementById("empty-cart").style.display = "none";
        }
        if (document.getElementById("checkout-elem")) {
          document.getElementById("checkout-elem").style.display = "block";
        }
        updateCartPrice();
      }

      // notification messages
      if (document.getElementsByClassName("notification-check")) {
        Array.from(document.querySelectorAll(".notification-check input")).forEach(function (element) {
          element.addEventListener("click", function (el) {
            el.target.closest(".notification-item").classList.toggle("active");
          });
        });
      }
    }
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      console.log("hi" + this.DefaultLanguage);
      const languageInfo = this.findLanguageInfo(this.DefaultLanguage);

      // Check if languageInfo is not null before using the values

      if (languageInfo) {
        const {
          flag: defaultFlag,
          title: defaultTitle
        } = languageInfo;
        console.log("Default Flag:", defaultFlag);
        console.log("Default Title:", defaultTitle);
        this.setLanguage(this.DefaultLanguage, defaultTitle, defaultFlag);
      } else {
        console.log("Language not found.");
      }
    }, 3000);
    document.addEventListener("scroll", function () {
      var pageTopbar = document.getElementById("page-topbar");
      if (pageTopbar) {
        document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ? pageTopbar.classList.add("topbar-shadow") : pageTopbar.classList.remove("topbar-shadow");
      }
    });
    if (document.getElementById("topnav-hamburger-icon")) document.getElementById("topnav-hamburger-icon").addEventListener("click", this.toggleHamburgerMenu);
    this.isCustomDropdown();
    this.initTopbarComponents();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-header.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-header.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/right-bar.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/right-bar.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/state/helpers */ "./src/state/helpers.js");
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.mjs");
localStorage.setItem("rightbar_isopen", true);


/**
 * Right sidebar component
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_1__.SimpleBar
  },
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },
  methods: {
    ..._state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutMethods,
    hide() {
      console.log("hide");
      this.$parent.toggleRightSidebar();
    },
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      if (event.target.classList) return !event.target.classList.contains("toggle-right");
    },
    removeExtraFade() {
      let fade = document.getElementsByClassName('offcanvas-backdrop fade show');
      for (let i = 0; i < fade.length; i++) {
        while (fade.length > 1) {
          fade[i].remove();
        }
      }
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    resizeWindow() {
      var windowSize = document.documentElement.clientWidth;
      if (windowSize >= 1025) {
        if (document.documentElement.getAttribute("data-layout") === "vertical") {
          document.documentElement.setAttribute("data-sidebar-size", this.$store.state.layout.sidebarSize);
        }
        if (document.documentElement.getAttribute("data-layout") === "semibox") {
          document.documentElement.setAttribute("data-sidebar-size", this.$store.state.layout.sidebarSize);
        }
        if (document.documentElement.getAttribute("data-sidebar-visibility") === "show" && document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.remove("open");
        }
      } else if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("twocolumn-panel");
        if (document.documentElement.getAttribute("data-layout") === "vertical") {
          document.documentElement.setAttribute("data-sidebar-size", "sm");
        }
        if (document.documentElement.getAttribute("data-layout") === "semibox") {
          document.documentElement.setAttribute("data-sidebar-size", "sm");
        }
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      } else if (windowSize <= 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.body.classList.add("twocolumn-panel");
        if (document.documentElement.getAttribute("data-layout") !== "horizontal") {
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
        if (document.querySelector(".hamburger-icon")) {
          document.querySelector(".hamburger-icon").classList.add("open");
        }
      }
    }
  },
  mounted() {
    let backtoTop = document.getElementById("back-to-top");
    if (backtoTop) {
      backtoTop = document.getElementById("back-to-top");
      window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backtoTop.style.display = "block";
        } else {
          backtoTop.style.display = "none";
        }
      };
    }
    let rightbar_isopen = localStorage.getItem('rightbar_isopen');
    if (rightbar_isopen == 'true') {
      document.getElementById('mdi-cog').click();
      localStorage.setItem("rightbar_isopen", false);
    }
    var setpreloader = document.getElementById("preloader");
    if (localStorage.getItem('data-preloader') && localStorage.getItem('data-preloader') == 'enable') {
      document.documentElement.setAttribute("data-preloader", "enable");
      if (setpreloader) {
        setTimeout(function () {
          setpreloader.style.opacity = "0";
          setpreloader.style.visibility = "hidden";
        }, 1000);
      }
    } else {
      document.documentElement.setAttribute("data-preloader", "disable");
      if (setpreloader) {
        setpreloader.style.opacity = "0";
        setpreloader.style.visibility = "hidden";
      }
    }
    if (document.getElementById('collapseBgGradient')) {
      Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach(function () {
        if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
          document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener('click', function () {
            document.getElementById("sidebar-color-gradient").click();
          });
        }
      });
    }
    Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach(function (elem) {
      if (document.querySelector("[data-bs-target='#collapseBgGradient']")) {
        if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
          document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
        } else {
          document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
          document.getElementById('collapseBgGradient').classList.remove('show');
        }
        elem.addEventListener("change", function () {
          if (document.querySelector("#collapseBgGradient .form-check input:checked")) {
            document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active");
          } else {
            document.getElementById('collapseBgGradient').classList.remove('show');
            document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
          }
        });
      }
    });
    window.addEventListener("resize", this.resizeWindow);
  },
  computed: {
    ..._state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
      set(layout) {
        localStorage.setItem("rightbar_isopen", true);
        if (layout == 'semibox') {
          this.changeLayoutType({
            layoutType: layout
          });
          this.changeSidebarView({
            sidebarView: "default"
          });
          this.changeLayoutWidth({
            layoutWidth: "fluid"
          });
          this.changeSidebarSize({
            sidebarSize: 'lg'
          });
        } else {
          this.changeLayoutType({
            layoutType: layout
          });
          this.changeVisibility({
            visibility: 'show'
          });
          document.querySelector(".hamburger-icon").classList.remove("open");
        }
      }
    },
    layoutWidth: {
      get() {
        return this.$store ? this.$store.state.layout.layoutWidth : {} || {};
      },
      set(width) {
        if (width == 'boxed') {
          this.changeLayoutWidth({
            layoutWidth: width
          });
          this.changeSidebarSize({
            sidebarSize: 'sm-hover'
          });
        } else {
          this.changeLayoutWidth({
            layoutWidth: width
          });
        }
      }
    },
    topbar: {
      get() {
        return this.$store ? this.$store.state.layout.topbar : {} || {};
      },
      set(topbar) {
        this.changeTopbar({
          topbar: topbar
        });
      }
    },
    sidebarSize: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarSize : {} || {};
      },
      set(type) {
        return this.changeSidebarSize({
          sidebarSize: type
        });
      }
    },
    position: {
      get() {
        return this.$store ? this.$store.state.layout.position : {} || {};
      },
      set(position) {
        return this.changePosition({
          position: position
        });
      }
    },
    sidebarView: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarView : {} || {};
      },
      set(sidebarView) {
        return this.changeSidebarView({
          sidebarView: sidebarView
        });
      }
    },
    sidebarColor: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarColor : {} || {};
      },
      set(sidebarColor) {
        return this.changeSidebarColor({
          sidebarColor: sidebarColor
        });
      }
    },
    sidebarImage: {
      get() {
        return this.$store ? this.$store.state.layout.sidebarImage : {} || {};
      },
      set(sidebarImage) {
        return this.changeSidebarImage({
          sidebarImage: sidebarImage
        });
      }
    },
    preloader: {
      get() {
        return this.$store ? this.$store.state.layout.preloader : {} || {};
      },
      set(preloader) {
        return this.changePreloader({
          preloader: preloader
        });
      }
    },
    mode: {
      get() {
        return this.$store ? this.$store.state.layout.mode : {} || {};
      },
      set(mode) {
        return this.changeMode({
          mode: mode
        });
      }
    },
    visibility: {
      get() {
        return this.$store ? this.$store.state.layout.visibility : {} || {};
      },
      set(visibility) {
        if (visibility == 'hidden') {
          document.querySelector(".hamburger-icon").classList.add("open");
        } else {
          document.querySelector(".hamburger-icon").classList.remove("open");
        }
        this.changeVisibility({
          visibility: visibility
        });
      }
    }
  },
  watch: {
    mode: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.documentElement.setAttribute("data-layout-mode", "dark");
              break;
            case "light":
              document.documentElement.setAttribute("data-layout-mode", "light");
              break;
          }
        }
      }
    },
    sidebarColor: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              document.documentElement.setAttribute("data-sidebar", "dark");
              break;
            case "light":
              document.documentElement.setAttribute("data-sidebar", "light");
              break;
            case "gradient":
              document.documentElement.setAttribute("data-sidebar", "gradient");
              break;
            case "gradient-2":
              document.documentElement.setAttribute("data-sidebar", "gradient-2");
              break;
            case "gradient-3":
              document.documentElement.setAttribute("data-sidebar", "gradient-3");
              break;
            case "gradient-4":
              document.documentElement.setAttribute("data-sidebar", "gradient-4");
              break;
          }
        }
      }
    },
    preloader: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          localStorage.setItem('data-preloader', newVal);
        }
      }
    },
    sidebarImage: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "img-1":
              document.documentElement.setAttribute("data-sidebar-image", "img-1");
              break;
            case "img-2":
              document.documentElement.setAttribute("data-sidebar-image", "img-2");
              break;
            case "img-3":
              document.documentElement.setAttribute("data-sidebar-image", "img-3");
              break;
            case "img-4":
              document.documentElement.setAttribute("data-sidebar-image", "img-4");
              break;
            case "none":
              document.documentElement.setAttribute("data-sidebar-image", "none");
              break;
          }
        }
      }
    },
    sidebarView: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "detached":
              document.documentElement.setAttribute("data-layout-style", "detached");
              break;
            case "default":
              document.documentElement.setAttribute("data-layout-style", "default");
              break;
          }
        }
      }
    },
    position: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fixed":
              document.documentElement.setAttribute("data-layout-position", "fixed");
              break;
            case "scrollable":
              document.documentElement.setAttribute("data-layout-position", "scrollable");
              break;
          }
        }
      }
    },
    sidebarSize: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "lg":
              document.documentElement.setAttribute("data-sidebar-size", "lg");
              break;
            case "sm":
              document.documentElement.setAttribute("data-sidebar-size", "sm");
              break;
            case "md":
              document.documentElement.setAttribute("data-sidebar-size", "md");
              break;
            case "sm-hover":
              document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
              break;
          }
        }
      }
    },
    topbar: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "light":
              document.documentElement.setAttribute("data-topbar", "light");
              break;
            case "dark":
              document.documentElement.setAttribute("data-topbar", "dark");
              break;
          }
        }
      }
    },
    layoutWidth: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "fluid":
              document.documentElement.setAttribute("data-layout-width", "fluid");
              break;
            case "boxed":
              document.documentElement.setAttribute("data-layout-width", "boxed");
              break;
          }
        }
      }
    },
    layoutType: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "horizontal":
              document.documentElement.setAttribute("data-layout", "horizontal");
              break;
            case "vertical":
              document.documentElement.setAttribute("data-layout", "vertical");
              break;
            case "twocolumn":
              document.documentElement.setAttribute("data-layout", "twocolumn");
              break;
            case "semibox":
              document.documentElement.setAttribute("data-layout", "semibox");
              break;
          }
        }
      }
    },
    visibility: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "show":
              document.documentElement.setAttribute("data-sidebar-visibility", "show");
              break;
            case "hidden":
              document.documentElement.setAttribute("data-sidebar-visibility", "hidden");
              break;
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/lottie.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/lottie.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    };
  },
  mounted() {
    this.anim = lottie_web__WEBPACK_IMPORTED_MODULE_0___default().loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    });
    this.$emit('animCreated', this.anim);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/horizontal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/horizontal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/nav-bar */ "./src/components/nav-bar.vue");
/* harmony import */ var _components_right_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/right-bar */ "./src/components/right-bar.vue");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/footer */ "./src/components/footer.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
    },
    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling) parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
              }
            }
          }
        }
      }, 1000);
    }
  },
  components: {
    NavBar: _components_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"],
    RightBar: _components_right_bar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/main.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/main.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/state/helpers */ "./src/state/helpers.js");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical */ "./src/layouts/vertical.vue");
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ "./src/layouts/horizontal.vue");
/* harmony import */ var _twocolumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twocolumn */ "./src/layouts/twocolumn.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Vertical: _vertical__WEBPACK_IMPORTED_MODULE_1__["default"],
    Horizontal: _horizontal__WEBPACK_IMPORTED_MODULE_2__["default"],
    TwoColumns: _twocolumn__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {};
  },
  computed: {
    ..._state_helpers__WEBPACK_IMPORTED_MODULE_0__.layoutComputed
  },
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/twocolumn.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/twocolumn.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./src/router/index.js");
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.mjs");
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state/helpers */ "./src/state/helpers.js");
/* harmony import */ var _components_menu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/menu.vue */ "./src/components/menu.vue");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/nav-bar */ "./src/components/nav-bar.vue");
/* harmony import */ var _components_right_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/right-bar */ "./src/components/right-bar.vue");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/footer */ "./src/components/footer.vue");








/**
 * Vertical layout
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_nav_bar__WEBPACK_IMPORTED_MODULE_4__["default"],
    RightBar: _components_right_bar__WEBPACK_IMPORTED_MODULE_5__["default"],
    Footer: _components_footer__WEBPACK_IMPORTED_MODULE_6__["default"],
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_1__.SimpleBar,
    Menu: _components_menu_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      isMenuCondensed: false,
      rmenu: localStorage.getItem("rmenu") ? localStorage.getItem("rmenu") : "twocolumn"
    };
  },
  computed: {
    ..._state_helpers__WEBPACK_IMPORTED_MODULE_2__.layoutComputed
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter(x => x.classList.contains("active"));
        this.removeActivation(activeItems);
        let matchingMenuItem = items.find(x => {
          return x.getAttribute("href") === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        } else {
          var id = pathName.replace("/", "");
          if (id) document.body.classList.add("twocolumn-panel");
          this.activateIconSidebarActive(pathName);
        }
      }
    },
    updateMenu(e) {
      document.body.classList.remove("twocolumn-panel");
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll(".show"));
        items.forEach(item => {
          item.classList.remove("show");
        });
      }
      const icons = document.getElementById("two-column-menu");
      if (icons) {
        const activeIcons = Array.from(icons.querySelectorAll(".nav-icon.active"));
        activeIcons.forEach(item => {
          item.classList.remove("active");
        });
      }
      document.getElementById(e).classList.add("show");
      this.activateIconSidebarActive("#" + e);
    },
    removeActivation(items) {
      items.forEach(item => {
        if (item.classList.contains("menu-link")) {
          if (!item.classList.contains("active")) {
            item.setAttribute("aria-expanded", false);
          }
          item.nextElementSibling.classList.remove("show");
        }
        if (item.classList.contains("nav-link")) {
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.remove("show");
          }
          item.setAttribute("aria-expanded", false);
        }
        item.classList.remove("active");
      });
    },
    activateIconSidebarActive(id) {
      var menu = document.querySelector("#two-column-menu .simplebar-content-wrapper a[href='" + id + "'].nav-icon");
      if (menu !== null) {
        menu.classList.add("active");
      }
    },
    activateParentDropdown(item) {
      // navbar-nav menu add active
      item.classList.add("active");
      let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
      if (parentCollapseDiv) {
        // to set aria expand true remaining
        parentCollapseDiv.classList.add("show");
        parentCollapseDiv.parentElement.children[0].classList.add("active");
        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
        if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
          if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling) {
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown")) {
              const grandparent = parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").previousElementSibling.parentElement.closest(".collapse.menu-dropdown");
              this.activateIconSidebarActive("#" + grandparent.getAttribute("id"));
              grandparent.classList.add("show");
            }
          }
          this.activateIconSidebarActive("#" + parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown").getAttribute("id"));
          parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
          if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling) parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
          return false;
        }
        this.activateIconSidebarActive("#" + parentCollapseDiv.getAttribute("id"));
        return false;
      }
      return false;
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");
      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  },
  mounted() {
    this.initActiveMenu();
    if (this.rmenu == "vertical" && this.layoutType == "twocolumn") {
      document.documentElement.setAttribute("data-layout", "vertical");
    }
    document.getElementById("overlay").addEventListener("click", () => {
      document.body.classList.remove("vertical-sidebar-enable");
    });
    window.addEventListener("resize", () => {
      if (this.layoutType == "twocolumn") {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 767) {
          document.documentElement.setAttribute("data-layout", "vertical");
          this.rmenu = "vertical";
          localStorage.setItem("rmenu", "vertical");
        } else {
          document.documentElement.setAttribute("data-layout", "twocolumn");
          this.rmenu = "twocolumn";
          localStorage.setItem("rmenu", "twocolumn");
          setTimeout(() => {
            this.initActiveMenu();
          }, 50);
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/vertical.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/vertical.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./src/router/index.js");
/* harmony import */ var simplebar_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar-vue3 */ "./node_modules/simplebar-vue3/dist/simplebar-vue3.mjs");
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state/helpers */ "./src/state/helpers.js");
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/nav-bar */ "./src/components/nav-bar.vue");
/* harmony import */ var _components_menu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/menu.vue */ "./src/components/menu.vue");
/* harmony import */ var _components_right_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/right-bar */ "./src/components/right-bar.vue");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/footer */ "./src/components/footer.vue");







localStorage.setItem('hoverd', false);

/**
 * Vertical layout
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_nav_bar__WEBPACK_IMPORTED_MODULE_3__["default"],
    RightBar: _components_right_bar__WEBPACK_IMPORTED_MODULE_5__["default"],
    Footer: _components_footer__WEBPACK_IMPORTED_MODULE_6__["default"],
    SimpleBar: simplebar_vue3__WEBPACK_IMPORTED_MODULE_1__.SimpleBar,
    Menu: _components_menu_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      isMenuCondensed: false
    };
  },
  computed: {
    ..._state_helpers__WEBPACK_IMPORTED_MODULE_2__.layoutComputed
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
        localStorage.setItem('hoverd', true);
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
      } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
        localStorage.setItem('hoverd', false);
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
      } else {
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
      }
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");
      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  },
  mounted() {
    if (localStorage.getItem('hoverd') == 'true') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    }
    document.getElementById('overlay').addEventListener('click', () => {
      document.body.classList.remove('vertical-sidebar-enable');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/Listkanban.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/Listkanban.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _TaskItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskItem.vue */ "./src/views/apps/tasks/TaskItem.vue");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    tagValue: {
      type: String,
      required: true
    }
    // newCardData: Object,
  },

  //     watch: {
  //     newCardData: {
  //       handler(newData) {
  //         // Check if the newCardData is not empty and add it to the task list
  //         if (newData && newData.Id) {
  //           console.log(this.cc);
  //           this.cc.push(newData);
  //           console.log(this.cc);
  //         }
  //       },
  //       immediate: true, // This ensures the watch is triggered immediately when the component is created
  //     },
  //   },
  data() {
    return {
      modalShow2: false,
      modalShow3: false,
      task: [],
      teamMembers: [],
      selectedIds: [],
      newTaskData: null,
      taskTitle: '',
      points: '',
      taskDescription: '',
      date1: '',
      labes: [],
      Features: [],
      labels: []
    };
  },
  async mounted() {
    console.log(this.tagValue);
    this.fetchData();
    const element = document.getElementById(this.item.Id);
    if (element) {
      this.$emit("registerTask", element);
    }
    const ProjectId = this.$route.params.id;
    const result = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Id,Name FROM Feature__c where Board__c = " + "'" + ProjectId + "'");
    this.Features = result.map(item => ({
      value: item.Id,
      label: item.Name
    }));
  },
  methods: {
    async uploadImage(recordId) {
      const fileInput = document.getElementById('fileInput-' + this.item.Id);
      console.log(fileInput);
      const file = fileInput.files[0];
      if (!file) {
        console.log('Please select an image to upload.', 'error');
        return;
      }
      try {
        const fileName = file.name;
        const fileData = await this.readFileAsBase64(file);
        // Convert the base64 image data to binary
        // const binaryData = Buffer.from(fileData, 'base64');

        const attachment = {
          ParentId: recordId,
          Name: fileName,
          Body: fileData,
          ContentType: file.type
        };
        console.log('Attachment', attachment);
        return new Promise((resolve, reject) => {
          (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.createSObject2)('Attachment', attachment).then(newAttachmentId => {
            attachment.Id = newAttachmentId;
            console.log('Image uploaded successfully.', 'success', attachment);
            resolve(attachment);
          }).catch(error => {
            // Handle any errors that occurred
            reject(error);
            console.error(error);
          });
        });
      } catch (error) {
        console.log('Error uploading image: ' + error.message, 'error');
        return null;
      }
    },
    async deleteTask(id) {
      // Use the `id` parameter in your logic here
      console.log("Deleting List with ID:", id);
      try {
        await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.deleteSObject)("Card__c", id);
        this.$emit("reloadList", id);
        this.modalShow3 = false;
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }

      // Rest of your delete task logic...
    },

    readFileAsBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => {
          resolve(event.target.result.split(',')[1]);
        };
        reader.onerror = event => {
          reject(event.target.error);
        };
        reader.readAsDataURL(file);
      });
    },
    async addNewTask() {
      try {
        const data = {
          Name: this.taskTitle,
          Type__c: this.item.Id,
          Description__c: this.taskDescription,
          Points__c: this.points,
          Date__c: this.date1
        };
        (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.createSObject2)("Task__c", data).then(async newTaskId => {
          await this.uploadImage(newTaskId).then(async attachments => {
            this.labels.forEach(async label => {
              const featureData = {
                Feature__c: label,
                Task__c: newTaskId
              };
              const idFeatureTask = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.createSObject2)("Feature_Task__c", featureData);
              console.log(idFeatureTask);
            });
            for (const record of this.selectedIds) {
              const data = {
                Name: newTaskId,
                Task__c: newTaskId,
                User__c: record
              };
              try {
                await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.createSObject2)('Member_Task__c', data);
              } catch (error) {
                console.error('Error inserting record:', error);
              }
            }
            console.log("attachments: ", [attachments]);
            this.newTaskData = {
              Id: newTaskId,
              ...data
            };
            this.newTaskData.attachments = [attachments];
            console.log("newTaskData: ", this.newTaskData);
            this.task.push(this.newTaskData);
            this.modalShow2 = false;
            const element = document.getElementById(this.item.Id);
            element.classList.remove('noTask');
          }).catch(error => {
            console.error(error);
          });
        }).catch(error => {
          console.error(error);
        });
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    },
    async fetchAttachmentsForTasks() {
      try {
        // Construct a list of Task__c IDs from the fetched tasks
        const taskIds = this.task.map(task => `'${task.Id}'`).join(',');

        // Query attachments related to the tasks
        const attachments = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(`SELECT Id, Name, ContentType, Body, ParentId FROM Attachment WHERE ParentId IN (${taskIds})`);

        // Group attachments by their ParentId (Task__c Id)
        const attachmentsByTaskId = {};
        attachments.forEach(attachment => {
          const parentId = attachment.ParentId;
          if (!attachmentsByTaskId[parentId]) {
            attachmentsByTaskId[parentId] = [];
          }
          attachmentsByTaskId[parentId].push(attachment);
        });

        // Assign the attachments to the corresponding tasks
        this.task.forEach(task => {
          task.attachments = attachmentsByTaskId[task.Id] || [];
        });
        console.log("Tasks with attachments:", this.task);
      } catch (error) {
        console.log("Error occurred while fetching attachments:", error);
      }
    },
    async fetchData() {
      try {
        if (this.tagValue == "All") {
          this.task = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(`SELECT Id, Name, Placement__c,Description__c,Points__c ,Date__c FROM Task__c WHERE Type__c = '${this.item.Id}' `);
        } else {
          // Fetch the Feature_Task__c records related to the Task__c using the second query
          const featureTaskIds = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(`SELECT Id,Feature__r.Name,Task__c FROM Feature_Task__c where Feature__r.Id = '${this.tagValue}'`);

          // Extract the Ids of the related Feature_Task__c records into an array
          const featureTaskIdsArray = featureTaskIds.map(record => record.Task__c);

          // Include the subquery in the main query to check if the Task__c Id exists in the related Feature_Task__c records
          const dynamicQuery = `SELECT Id, Name, Placement__c,Description__c,Points__c ,Date__c FROM Task__c WHERE Type__c = '${this.item.Id}' AND Id IN ('${featureTaskIdsArray.join("','")}')`;
          this.task = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(dynamicQuery);
        }
        if (this.task) {
          this.task.sort((a, b) => a.Placement__c - b.Placement__c);
          //console.log(this.task);
          //console.log(this.task.length);
        } else {
          console.log("Empty");
        }
        this.fetchAttachmentsForTasks();
        if (this.task.length == 0) {
          const element = document.getElementById(this.item.Id);
          element.classList.add('noTask');
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    },
    handleReloadListTask(idToDelete) {
      console.log(idToDelete);
      console.log("old", this.task);
      const indexToDelete = this.task.findIndex(item => item.Id === idToDelete);
      if (indexToDelete !== -1) {
        this.task.splice(indexToDelete, 1);
      }
      console.log("new", this.task);
      if (this.task.length == 0) {
        const element = document.getElementById(this.item.Id);
        element.classList.add('noTask');
      }
    },
    async fetchTeamMembersData() {
      try {
        // Use executeQuery or your API utility to fetch data from the API
        // Replace the below query with your actual query to fetch team members' data
        const test = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Board__c where Board__c = '${this.id}'`);
        console.log("test: ", test);

        // Format the data to return an array of objects with the required properties
        // const teamMembersData = await Promise.all(test.map(async (record) => {
        //     //const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
        //     const activeProjectsRecords = await executeQuery(`SELECT Id FROM Member_Board__c where User__c = '${record.User__r.Id}'`);
        //     const newLeadsRecords = await executeQuery(`SELECT Id FROM Member_Task__c where User__c = '${record.User__r.Id}'`);
        //     console.log("activeProjectsRecords:", activeProjectsRecords.length);
        //     console.log("newLeadsRecords:", newLeadsRecords.length);

        //     return {
        //         Id: record.Id,
        //         name: record.User__r.Name,
        //         position: record.User__r.UserType,
        //         projects: activeProjectsRecords.length,
        //         tasks: newLeadsRecords.length,
        //         img: require("@/assets/images/users/Trailblazer_avatar.png"),
        //         // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
        //     };
        // }));

        return test;
      } catch (error) {
        console.error("Error fetching team members data:", error);
        return []; // Return an empty array in case of an error
      }
    },

    async showCreateModal() {
      this.modalShow2 = !this.modalShow2;
      this.teamMembers = await this.fetchTeamMembersData();
    },
    handleCheckboxChange(MemberID) {
      // Check if the ID of the team member is already in the selectedIds array
      const index = this.selectedIds.indexOf(MemberID);

      // If the ID is not found in the selectedIds array, add it; otherwise, remove it
      if (index === -1) {
        this.selectedIds.push(MemberID);
      } else {
        this.selectedIds.splice(index, 1);
      }
      console.log(this.selectedIds);
    }
  },
  components: {
    TaskItem: _TaskItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__["default"],
    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/TaskItem.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/TaskItem.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/widgets/lottie.vue */ "./src/components/widgets/lottie.vue");
/* harmony import */ var _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/gsqxdxog.json */ "./src/components/widgets/gsqxdxog.json");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      features: ["Layout", "Admin", "Dashboard"],
      users: [__webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png"), __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png"), __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png")],
      id: "#TS0001",
      date: "",
      modalShow3: false,
      defaultOptions: {
        animationData: _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_2__
      },
      imageDataURL: '',
      teamMembers: [],
      tags: [],
      isImageHidden: true,
      imageUrl: null
    };
  },
  components: {
    lottie: _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  async mounted() {
    console.log("render");
    const dateParts = this.item.Date__c.split("-"); // Split the input date into parts
    const year = dateParts[0];
    const month = new Date(dateParts[1] + " 01, 2000").toLocaleString("en-us", {
      month: "short"
    });
    const day = dateParts[2];
    const formattedDate = `${day} ${month} ${year}`;
    //console.log(formattedDate); // Output: "25 Jul 2023"

    this.date = formattedDate;
    //fetchAndDisplayImage("00P8d00000F2qKVEAZ");
    //console.log(getImageUrl("00P8d00000F2qKVEAZ"));
    //this.getImageUrl(this.item.attachments);
    this.teamMembers = await this.fetchTeamMembersData();
    this.tags = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT Id, Feature__r.Name FROM Feature_Task__c where Task__c = " + "'" + this.item.Id + "'");
    //console.log("fff: ", this.teamMembers)
  },

  methods: {
    async getImageUrl(attachment) {
      console.log("dddddddddddd1");
      if (attachment) {
        console.log("dddddddddddd2");
        if (attachment.length > 0) {
          console.log(attachment);

          //console.log("dddddddddddd3");
          try {
            const hhh = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.getImageUrl)(attachment[0].Id);
            console.log("hhh:", hhh);
            this.imageUrl = hhh;
            this.isImageHidden = false;
            // //console.log("dddddddddddd4");
            // const attachmentData = await requestSF(attachment[0].Body);
            // //console.log(base64_encode(attachmentData.toString('base64'))); // Fetch the attachment content
            // const base64Data = Buffer.from(attachmentData, 'binary').toString('base64'); // Convert the Buffer to a base64 string
            // const contentType = attachment[0].ContentType;
            // const dataURL = `data:${contentType};base64,${base64Data}`;
            // console.log('dataURL: ', dataURL);
            //this.imageDataURL = hhh; // Set the imageDataURL property with the data URL
            return hhh;
          } catch (error) {
            console.log("Error occurred while executing query:", error);
          }
        } else {
          //this.imageDataURL = ''; // Reset the imageDataURL property if no attachment
          return '';
        }
      }
    },
    async deleteTask(id) {
      // Use the `id` parameter in your logic here
      console.log("Deleting task with ID:", id);
      try {
        await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.deleteSObject)("Task__c", id);
        this.$emit("reloadListTask", id);
        this.modalShow3 = false;
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }

      // Rest of your delete task logic...
    },

    async fetchTeamMembersData() {
      try {
        // Use executeQuery or your API utility to fetch data from the API
        // Replace the below query with your actual query to fetch team members' data
        const test = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`SELECT Id,Task__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Task__c where Task__c = '${this.item.Id}'`);
        console.log("test333: ", test, this.item.Id);
        const formattedTeamMembers = test.map(record => {
          return {
            Id: record.Id,
            name: record.User__r.Name,
            img: __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png")
          };
        });
        console.log("formattedTeamMembers: ", formattedTeamMembers);

        // Format the data to return an array of objects with the required properties
        // const teamMembersData = await Promise.all(test.map(async (record) => {
        //     //const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
        //     const activeProjectsRecords = await executeQuery(`SELECT Id FROM Member_Board__c where User__c = '${record.User__r.Id}'`);
        //     const newLeadsRecords = await executeQuery(`SELECT Id FROM Member_Task__c where User__c = '${record.User__r.Id}'`);
        //     console.log("activeProjectsRecords:", activeProjectsRecords.length);
        //     console.log("newLeadsRecords:", newLeadsRecords.length);

        //     return {
        //         Id: record.Id,
        //         name: record.User__r.Name,
        //         position: record.User__r.UserType,
        //         projects: activeProjectsRecords.length,
        //         tasks: newLeadsRecords.length,
        //         img: require("@/assets/images/users/Trailblazer_avatar.png"),
        //         // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
        //     };
        // }));

        return formattedTeamMembers;
      } catch (error) {
        console.error("Error fetching team members data:", error);
        return []; // Return an empty array in case of an error
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_autoscroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-autoscroller */ "./node_modules/dom-autoscroller/dist/bundle.js");
/* harmony import */ var dom_autoscroller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_autoscroller__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dragula */ "./node_modules/dragula/dragula.js");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");
/* harmony import */ var _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/gsqxdxog.json */ "./src/components/widgets/gsqxdxog.json");
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _Listkanban_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Listkanban.vue */ "./src/views/apps/tasks/Listkanban.vue");

//import { toRaw } from "vue";

//import { VueDraggableNext } from 'vue-draggable-next';




//import Layout from "../../../layouts/main.vue";
//import PageHeader from "@/components/page-header";


//import Lottie from "@/components/widgets/lottie.vue";





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  page: {
    title: "Kanban Board",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_5__.description
    }]
  },
  data() {
    return {
      title: "Kanban Board",
      items: [{
        text: "Tasks",
        href: "/"
      }, {
        text: "Kanban Board",
        active: true
      }],
      boardName: "",
      firstnameInput: "",
      lastnameInput: "",
      emailInput: "",
      modalShow: false,
      modalShow1: false,
      config: {
        wrap: true,
        // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y"
      },
      date: null,
      date1: null,
      defaultOptions: {
        animationData: _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_6__
      },
      enabled: true,
      dragging: false,
      cc: [],
      reloadKey: 0,
      newCardData: null,
      teamMembers: [],
      tags: [],
      tagValue: "All"
      ///drake2,
      //drake
    };
  },

  async mounted() {
    this.initializeDragula();
    //this.initializeDragulaKanbanBoard();
    this.fetchData();
    this.teamMembers = await this.fetchTeamMembersData();
    const result = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.executeQuery)("SELECT Id, Name ,Board__c FROM Feature__c where Board__c = " + "'" + this.id + "'");
    this.tags = result.map(item => ({
      value: item.Id,
      label: item.Name
    }));
  },
  methods: {
    addMember() {
      // Get the value of the board name from the input field
      const firstnameInput = this.firstnameInput;
      const lastnameInput = this.lastnameInput;
      const emailInput = this.emailInput;

      // Create the data object to pass to createSObject function
      const data = {
        FirstName: firstnameInput,
        LastName: lastnameInput,
        Email: emailInput,
        Username: emailInput,
        LanguageLocaleKey: 'fr',
        EmailEncodingKey: 'UTF-8',
        LocaleSidKey: 'ar_MA',
        TimeZoneSidKey: 'Africa/Casablanca',
        Alias: "in" + lastnameInput,
        ProfileId: '00e8d000000u5huAAA'
      };

      // Call the createSObject function from your utile.js file
      (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.createSObject)("User", data, () => {
        // Callback function called on success
        window.location.reload();
      });

      // Clear the input field and close the modal
      this.firstnameInput = "";
      this.lastnameInput = "";
      this.emailInput = "";
      this.modalShow = false;

      //Swal.fire("Good job!", "Team member added Succesfly!", "success");
    },

    addBoard() {
      // Get the value of the board name from the input field
      const boardName = this.boardName;

      // Create the data object to pass to createSObject function
      const data = {
        Board__c: this.id,
        Name: boardName,
        Placement__c: this.cc.length + 1
      };

      // Call the createSObject function from your utile.js file
      (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.createSObject2)("Card__c", data).then(newCardId => {
        // Handle the query result

        // Callback function called on success
        //window.location.reload();
        console.log({
          Id: newCardId,
          ...data
        });
        this.newCardData = {
          Id: newCardId,
          ...data
        };
        this.cc.push(this.newCardData);
      }).catch(error => {
        // Handle any errors that occurred
        console.error(error);
      });

      // Clear the input field and close the modal
      this.boardName = "";
      this.modalShow1 = false;
    },
    handleRegisterTask(element) {
      this.tasks_list.push(element);
    },
    // handleReloadListkanban() {
    //     //console.log(this.reloadKey);
    //     // Increment the reloadKey value to trigger a re-render of the Listkanban component
    //     this.reloadKey++;
    // },

    async fetchData() {
      try {
        this.cc = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.executeQuery)(`select id,name,Placement__c from Card__c where Board__c = '${this.id}'`);
        if (this.cc) {
          this.cc.sort((a, b) => a.Placement__c - b.Placement__c);
          console.log(this.cc);
        } else {
          console.log("Empty");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    },
    initializeDragula() {
      this.tasks_list = [document.getElementById("kanbanboard")];
      // for (let i = 0; i < this.cc.length; i++) {
      //     const element = document.getElementById(this.cc[i].Name);
      //     if (element) {
      //         this.tasks_list.push(element);
      //     }
      // };
      //console.log(this.tasks_list);
      if (this.tasks_list) {
        console.log("this.tasks_list", this.tasks_list);
        this.drake = dragula__WEBPACK_IMPORTED_MODULE_4___default()(this.tasks_list).on("drag", el => {
          el.classList.remove("ex-moved");
          el.style.transform = "rotate(5deg)";
          //console.log("drag", el);
        }).on("drop", (el, container) => {
          el.classList.add("ex-moved");
          el.style.transform = "none";
          console.log("el: ", el);
          console.log("container: ", container);
          if (el.classList.contains("tasks-list") && container.classList.contains("tasks")) {
            drake.cancel(true);
          }

          // if (el.classList.contains("tasks-list") && container.classList.contains("tasks-board")) {
          //     drake.cancel(true);
          // }

          if (el.classList.contains("tasks-list")) {
            const tasksLists = document.querySelectorAll("div.tasks-list:not(.gu-mirror)");
            console.log(tasksLists);
            const updatedCC = Array.from(tasksLists).map((tasksList, index) => {
              const taskId = tasksList.id.split("-")[2]; // Extract the task ID from the tasks list ID
              const task = this.cc.find(item => item.Id === taskId);
              if (task) {
                task.Placement__c = index + 1; // Update the Placement__c value based on the new position
              }

              return task;
            });
            (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.updateSObjects)("Card__c", updatedCC);
            console.log(updatedCC);
          } else if (el.classList.contains("tasks-box")) {
            console.log("in");
            const parentCardId = el.closest(".tasks-list").id.split("-")[2];
            console.log(parentCardId);
            const tasksBoxId = el.id;
            console.log(tasksBoxId);
            (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.updateSObjects)("Task__c", {
              Id: tasksBoxId,
              Type__c: parentCardId
            });

            // const refName = `taskListComponent-${parentCardId}`;
            // console.log("refName: ", refName);
            // const childComponent = this.$refs[refName];
            // console.log("childComponent: ", childComponent);
            // //const childData = childComponent.data();
            // //const tasks = childData.task;
            // //const tasks = childComponent.task;
            // //console.log("ref: ", tasks);
            // //const childComponentInstance = toRaw(childComponent.$);
            // //console.log("childComponentInstance: ",childComponentInstance)
            // //const tasks = childComponentInstance.task;

            // this.$nextTick(() => {
            //     // Wait for the childComponent to be updated
            //     const tasks = childComponent.task;
            //     console.log("ref: ", tasks);
            // });
          }
        }).on("over", (el, container) => {
          container.classList.add("ex-over");
          el.style.transform = "none";
        }).on("out", (el, container) => {
          container.classList.remove("ex-over");
          el.style.transform = "none";
        });
        const drake = this.drake;
        const kanbanboard = document.querySelector("#kanbanboard");
        dom_autoscroller__WEBPACK_IMPORTED_MODULE_1___default()(kanbanboard, {
          margin: 20,
          maxSpeed: 100,
          scrollWhenOutside: true,
          autoScroll: function () {
            return this.down && drake.dragging;
          }
        });
      }
    },
    // initializeDragulaKanbanBoard() {
    //     this.tasks_list2 = [
    //         document.getElementById("kanbanboard"),
    //     ];
    //     // for (let i = 0; i < this.cc.length; i++) {
    //     //     const element = document.getElementById(this.cc[i].Name);
    //     //     if (element) {
    //     //         this.tasks_list.push(element);
    //     //     }
    //     // };
    //     //console.log(this.tasks_list);
    //     if (this.tasks_list2) {
    //         console.log("this.tasks_list2", this.tasks_list2);
    //         this.drake2 = dragula(this.tasks_list2)
    //             .on("drag", (el) => {

    //             })
    //             .on("drop", (el) => {

    //                 //console.log(el);

    //                 const tasksLists = document.querySelectorAll("div.tasks-list:not(.gu-mirror)");
    //                 //console.log(tasksLists);
    //                 const updatedCC = Array.from(tasksLists).map((tasksList, index) => {
    //                     const taskId = tasksList.id.split("-")[2]; // Extract the task ID from the tasks list ID
    //                     const task = this.cc.find((item) => item.Id === taskId);

    //                     if (task) {
    //                         task.Placement__c = index + 1; // Update the Placement__c value based on the new position
    //                     }

    //                     return task;
    //                 });
    //                 updateSObjects("Card__c", updatedCC);
    //                 //console.log(updatedCC);

    //             })
    //             .on("over", (el, container) => {

    //             })
    //             .on("out", (el, container) => {

    //             }).on("dragend", (el, container) => {
    //                 el.draggable = true;

    //             });;

    //     }

    // },

    handleReloadList(idToDelete) {
      const indexToDelete = this.cc.findIndex(item => item.Id === idToDelete);
      if (indexToDelete !== -1) {
        this.cc.splice(indexToDelete, 1);
      }
    },
    log(event) {
      console.log(event);
    },
    async fetchTeamMembersData() {
      try {
        // Use executeQuery or your API utility to fetch data from the API
        // Replace the below query with your actual query to fetch team members' data
        const test = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_9__.executeQuery)(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Board__c where Board__c = '${this.id}'`);
        console.log("test: ", test);

        // Format the data to return an array of objects with the required properties
        // const teamMembersData = await Promise.all(test.map(async (record) => {
        //     //const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
        //     const activeProjectsRecords = await executeQuery(`SELECT Id FROM Member_Board__c where User__c = '${record.User__r.Id}'`);
        //     const newLeadsRecords = await executeQuery(`SELECT Id FROM Member_Task__c where User__c = '${record.User__r.Id}'`);
        //     console.log("activeProjectsRecords:", activeProjectsRecords.length);
        //     console.log("newLeadsRecords:", newLeadsRecords.length);

        //     return {
        //         Id: record.Id,
        //         name: record.User__r.Name,
        //         position: record.User__r.UserType,
        //         projects: activeProjectsRecords.length,
        //         tasks: newLeadsRecords.length,
        //         img: require("@/assets/images/users/Trailblazer_avatar.png"),
        //         // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
        //     };
        // }));

        return test;
      } catch (error) {
        console.error("Error fetching team members data:", error);
        return []; // Return an empty array in case of an error
      }
    }
  },

  components: {
    Listkanban: _Listkanban_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    //Layout,
    //PageHeader,
    //draggable: VueDraggableNext,
    //lottie: Lottie,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__["default"],
    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=template&id=469af010&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=template&id=469af010&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.defaultText), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/footer.vue?vue&type=template&id=6c4d8baa":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/footer.vue?vue&type=template&id=6c4d8baa ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "footer"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-sm-end d-none d-sm-block"
}, " INSANE ", -1 /* HOISTED */);

function render(_ctx, _cache) {
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-container");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        col: "",
        sm: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(new Date().getFullYear()) + " © INSANE ITS ", 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        col: "",
        sm: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=template&id=a380d422":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=template&id=a380d422 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "two-column-menu"
}, null, -1 /* HOISTED */);
const _hoisted_2 = {
  class: "menu-title"
};
const _hoisted_3 = {
  "data-key": "t-menu"
};
const _hoisted_4 = {
  class: "nav-item"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-dashboard-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_6 = {
  "data-key": "t-dashboards"
};
const _hoisted_7 = {
  class: "collapse menu-dropdown",
  id: "sidebarDashboards"
};
const _hoisted_8 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_9 = {
  class: "nav-item"
};
const _hoisted_10 = {
  class: "nav-item"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-apps-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_12 = {
  "data-key": "t-apps"
};
const _hoisted_13 = {
  class: "collapse menu-dropdown",
  id: "sidebarApps"
};
const _hoisted_14 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_15 = {
  class: "nav-item"
};
const _hoisted_16 = {
  class: "collapse menu-dropdown",
  id: "sidebarProjects"
};
const _hoisted_17 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_18 = {
  class: "nav-item"
};
const _hoisted_19 = {
  class: "nav-item"
};
const _hoisted_20 = {
  class: "nav-item"
};
const _hoisted_21 = {
  class: "collapse menu-dropdown",
  id: "sidebarTasks"
};
const _hoisted_22 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_23 = {
  class: "nav-item"
};
const _hoisted_24 = {
  class: "nav-item"
};
const _hoisted_25 = {
  class: "nav-item"
};
const _hoisted_26 = {
  class: "nav-item"
};
const _hoisted_27 = {
  key: 1,
  class: "navbar-nav h-100",
  id: "navbar-nav"
};
const _hoisted_28 = {
  class: "menu-title"
};
const _hoisted_29 = {
  "data-key": "t-menu"
};
const _hoisted_30 = {
  class: "nav-item"
};
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-dashboard-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_32 = {
  "data-key": "t-dashboards"
};
const _hoisted_33 = {
  class: "collapse menu-dropdown",
  id: "sidebarDashboards"
};
const _hoisted_34 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_35 = {
  class: "nav-item"
};
const _hoisted_36 = {
  class: "nav-item"
};
const _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-apps-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_38 = {
  "data-key": "t-apps"
};
const _hoisted_39 = {
  class: "collapse menu-dropdown",
  id: "sidebarApps"
};
const _hoisted_40 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_41 = {
  class: "nav-item"
};
const _hoisted_42 = {
  class: "collapse menu-dropdown",
  id: "sidebarProjects"
};
const _hoisted_43 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_44 = {
  class: "nav-item"
};
const _hoisted_45 = {
  class: "nav-item"
};
const _hoisted_46 = {
  class: "nav-item"
};
const _hoisted_47 = {
  class: "collapse menu-dropdown",
  id: "sidebarTasks"
};
const _hoisted_48 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_49 = {
  class: "nav-item"
};
const _hoisted_50 = {
  class: "nav-item"
};
const _hoisted_51 = {
  class: "collapse menu-dropdown",
  id: "sidebarTickets"
};
const _hoisted_52 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_53 = {
  class: "nav-item"
};
const _hoisted_54 = {
  class: "nav-item"
};
const _hoisted_55 = {
  class: "nav-item"
};
const _hoisted_56 = {
  class: "nav-item"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");
  const _component_b_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-container");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, $options.layoutType === 'twocolumn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
      key: 0,
      class: "navbar-nav",
      id: "navbar-nav"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-menu")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "nav-link menu-link",
        href: "#sidebarDashboards",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarDashboards"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-dashboards")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/dashboard/projects",
        class: "nav-link",
        "data-key": "t-projects"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end Dashboard Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "nav-link menu-link",
        href: "#sidebarApps",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarApps"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-apps")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#sidebarProjects",
        class: "nav-link",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarProjects",
        "data-key": "t-projects"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/projects-list",
        class: "nav-link",
        "data-key": "t-list"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/projects-create",
        class: "nav-link",
        "data-key": "t-create-project"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-create-project")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#sidebarTasks",
        class: "nav-link",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarTasks",
        "data-key": "t-tasks"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-tasks")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/tasks-list-view",
        class: "nav-link",
        "data-key": "t-list-view"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/ChatGPT",
        class: "nav-link",
        "data-key": "t-chat"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-chat")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/AICorrecter",
        class: "nav-link",
        "data-key": "AICorrecter"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" AICorrecter ")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps-api-key",
        class: "nav-link",
        "data-key": "t-api-key"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-api-key")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])])])])])]),

      _: 1 /* STABLE */
    })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-menu")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      class: "nav-link menu-link",
      href: "#sidebarDashboards",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarDashboards"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-dashboards")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/dashboard/projects",
      class: "nav-link",
      "data-key": "t-projects"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end Dashboard Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      class: "nav-link menu-link",
      href: "#sidebarApps",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarApps"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-apps")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "#sidebarProjects",
      class: "nav-link",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarProjects",
      "data-key": "t-projects"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/projects-list",
      class: "nav-link",
      "data-key": "t-list"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/projects-create",
      class: "nav-link",
      "data-key": "t-create-project"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-create-project")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "#sidebarTasks",
      class: "nav-link",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarTasks",
      "data-key": "t-tasks"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-tasks")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/tasks-list-view",
      class: "nav-link",
      "data-key": "t-list-view"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "#sidebarTickets",
      class: "nav-link",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarTickets",
      "data-key": "t-supprt-tickets"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-supprt-tickets")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/tickets-list",
      class: "nav-link",
      "data-key": "t-list-view"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/ChatGPT",
      class: "nav-link",
      "data-key": "t-chat"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-chat")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/AICorrecter",
      class: "nav-link",
      "data-key": "AICorrecter"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" AI Correcter ")]),
      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps-api-key",
      class: "nav-link",
      "data-key": "t-api-key"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-api-key")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])])]))]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav-bar.vue?vue&type=template&id=42c37e09":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav-bar.vue?vue&type=template&id=42c37e09 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/INSANE.png */ "./src/assets/images/INSANE.png");
/* harmony import */ var _assets_images_users_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/users/avatar-2.jpg */ "./src/assets/images/users/avatar-2.jpg");
/* harmony import */ var _assets_images_users_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/users/avatar-3.jpg */ "./src/assets/images/users/avatar-3.jpg");
/* harmony import */ var _assets_images_users_avatar_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/users/avatar-5.jpg */ "./src/assets/images/users/avatar-5.jpg");
/* harmony import */ var _assets_images_flags_us_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/flags/us.svg */ "./src/assets/images/flags/us.svg");
/* harmony import */ var _assets_images_svg_bell_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/svg/bell.svg */ "./src/assets/images/svg/bell.svg");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");








const _hoisted_1 = {
  id: "page-topbar"
};
const _hoisted_2 = {
  class: "layout-width"
};
const _hoisted_3 = {
  class: "navbar-header"
};
const _hoisted_4 = {
  class: "d-flex"
};
const _hoisted_5 = {
  class: "navbar-brand-box horizontal-logo"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "40"
})], -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "40"
})], -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "40"
})], -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "40"
})], -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger",
  id: "topnav-hamburger-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "hamburger-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span")])], -1 /* HOISTED */);
const _hoisted_11 = {
  class: "app-search d-none d-md-block"
};
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "position-relative"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  placeholder: "Search...",
  autocomplete: "on",
  id: "search-options",
  value: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "mdi mdi-magnify search-widget-icon"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none",
  id: "search-close-options"
})], -1 /* HOISTED */);
const _hoisted_13 = {
  class: "dropdown-menu dropdown-menu-lg",
  id: "search-dropdown"
};
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropdown-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "text-overflow text-muted mb-0 text-uppercase"
}, " Recent Searches ")], -1 /* HOISTED */);
const _hoisted_15 = {
  class: "dropdown-item bg-transparent text-wrap"
};
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-magnify ms-1"
}, null, -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-magnify ms-1"
}, null, -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropdown-header mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "text-overflow text-muted mb-1 text-uppercase"
}, " Pages ")], -1 /* HOISTED */);
const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-bubble-chart-line align-middle fs-18 text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Analytics Dashboard", -1 /* HOISTED */);
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-lifebuoy-line align-middle fs-18 text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Help Center", -1 /* HOISTED */);
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-user-settings-line align-middle fs-18 text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "My account settings", -1 /* HOISTED */);
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropdown-header mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "text-overflow text-muted mb-2 text-uppercase"
}, " Members ")], -1 /* HOISTED */);
const _hoisted_26 = {
  class: "notification-list"
};
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_2__,
  class: "me-3 rounded-circle avatar-xs",
  alt: "user-pic"
}, null, -1 /* HOISTED */);
const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "m-0"
}, "Angela Bernier"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "fs-11 mb-0 text-muted"
}, "Manager")], -1 /* HOISTED */);
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_3__,
  class: "me-3 rounded-circle avatar-xs",
  alt: "user-pic"
}, null, -1 /* HOISTED */);
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "m-0"
}, "David Grasso"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "fs-11 mb-0 text-muted"
}, "Web Designer")], -1 /* HOISTED */);
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_5_jpg__WEBPACK_IMPORTED_MODULE_4__,
  class: "me-3 rounded-circle avatar-xs",
  alt: "user-pic"
}, null, -1 /* HOISTED */);
const _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "m-0"
}, "Mike Bunch"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "fs-11 mb-0 text-muted"
}, "React Developer")], -1 /* HOISTED */);
const _hoisted_33 = {
  class: "text-center pt-3 pb-1"
};
const _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-right-line ms-1"
}, null, -1 /* HOISTED */);
const _hoisted_35 = {
  class: "d-flex align-items-center"
};
const _hoisted_36 = {
  class: "dropdown d-md-none topbar-head-dropdown header-item"
};
const _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-icon btn-topbar btn-ghost-secondary rounded-circle",
  id: "page-header-search-dropdown",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "bx bx-search fs-22"
})], -1 /* HOISTED */);
const _hoisted_38 = {
  class: "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0",
  "aria-labelledby": "page-header-search-dropdown"
};
const _hoisted_39 = {
  class: "p-3"
};
const _hoisted_40 = {
  class: "form-group m-0"
};
const _hoisted_41 = {
  class: "input-group"
};
const _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  placeholder: "Search ...",
  "aria-label": "Recipient's username"
}, null, -1 /* HOISTED */);
const _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-magnify"
}, null, -1 /* HOISTED */);
const _hoisted_44 = {
  class: "dropdown ms-1 topbar-head-dropdown header-item"
};
const _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-icon btn-topbar btn-ghost-secondary rounded-circle",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  id: "header-lang-img",
  src: _assets_images_flags_us_svg__WEBPACK_IMPORTED_MODULE_5__,
  alt: "Header Language",
  height: "20",
  class: "rounded"
})], -1 /* HOISTED */);
const _hoisted_46 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_47 = ["src"];
const _hoisted_48 = {
  class: "align-middle"
};
const _hoisted_49 = {
  class: "ms-1 header-item d-none d-sm-flex"
};
const _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "bx bx-fullscreen fs-22"
}, null, -1 /* HOISTED */);
const _hoisted_51 = {
  class: "ms-1 header-item d-none d-sm-flex"
};
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "bx bx-moon fs-22"
}, null, -1 /* HOISTED */);
const _hoisted_53 = {
  class: "dropdown topbar-head-dropdown ms-1 header-item"
};
const _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-icon btn-topbar btn-ghost-secondary rounded-circle",
  id: "page-header-notifications-dropdown",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "bx bx-bell fs-22"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 3"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "visually-hidden"
}, "unread messages")])], -1 /* HOISTED */);
const _hoisted_55 = {
  class: "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0",
  "aria-labelledby": "page-header-notifications-dropdown"
};
const _hoisted_56 = {
  class: "dropdown-head bg-primary bg-pattern rounded-top"
};
const _hoisted_57 = {
  class: "p-3"
};
const _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "m-0 fs-16 fw-semibold text-white"
}, " Notifications ", -1 /* HOISTED */);
const _hoisted_59 = {
  class: "px-2 pt-2"
};
const _hoisted_60 = {
  class: "nav nav-tabs dropdown-tabs nav-tabs-custom",
  "data-dropdown-tabs": "true",
  id: "notificationItemsTab",
  role: "tablist"
};
const _hoisted_61 = {
  class: "nav-item"
};
const _hoisted_62 = {
  class: "nav-item"
};
const _hoisted_63 = {
  class: "nav-item"
};
const _hoisted_64 = {
  class: "tab-content",
  id: "notificationItemsTabContent"
};
const _hoisted_65 = {
  class: "tab-pane fade py-2 ps-2 show active",
  id: "all-noti-tab",
  role: "tabpanel"
};
const _hoisted_66 = {
  class: "my-3 text-center"
};
const _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-right-line align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_68 = {
  class: "tab-pane fade py-2 ps-2",
  id: "messages-tab",
  role: "tabpanel",
  "aria-labelledby": "messages-tab"
};
const _hoisted_69 = {
  class: "my-3 text-center"
};
const _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-right-line align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "tab-pane fade p-4",
  id: "alerts-tab",
  role: "tabpanel",
  "aria-labelledby": "alerts-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "w-25 w-sm-50 pt-3 mx-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_svg_bell_svg__WEBPACK_IMPORTED_MODULE_6__,
  class: "img-fluid",
  alt: "user-pic"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-center pb-5 mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "fs-18 fw-semibold lh-base"
}, " Hey! You have no any notifications ")])], -1 /* HOISTED */);
const _hoisted_72 = {
  class: "dropdown ms-sm-3 header-item topbar-user"
};
const _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<button type=\"button\" class=\"btn\" id=\"page-header-user-dropdown\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"d-flex align-items-center\"><img class=\"rounded-circle header-profile-user\" src=\"" + _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_7__ + "\" alt=\"Header Avatar\"><span class=\"text-start ms-xl-2\"><span class=\"d-none d-xl-inline-block ms-1 fw-medium user-name-text\"></span><span class=\"d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text\">Admin</span></span></span></button>", 1);
const _hoisted_74 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_75 = {
  class: "dropdown-header"
};
const _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-account-circle text-muted fs-16 align-middle me-1"
}, null, -1 /* HOISTED */);
const _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "align-middle"
}, "Profile", -1 /* HOISTED */);
const _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"
}, null, -1 /* HOISTED */);
const _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "align-middle"
}, "Messages", -1 /* HOISTED */);
const _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"
}, null, -1 /* HOISTED */);
const _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "align-middle"
}, "Taskboard", -1 /* HOISTED */);
const _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"
}, null, -1 /* HOISTED */);
const _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "align-middle"
}, "Help", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-dark"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, _hoisted_7]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-light"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_8, _hoisted_9]),
    _: 1 /* STABLE */
  })]), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" App Search"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
    "data-simplebar": "",
    style: {
      "max-height": "320px"
    }
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/",
      class: "btn btn-soft-secondary btn-sm btn-rounded"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("how to setup "), _hoisted_16]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/",
      class: "btn btn-soft-secondary btn-sm btn-rounded"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("buttons "), _hoisted_17]),
      _: 1 /* STABLE */
    })]), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "javascript:void(0);",
      class: "dropdown-item notify-item"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_19, _hoisted_20]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "javascript:void(0);",
      class: "dropdown-item notify-item"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_21, _hoisted_22]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "javascript:void(0);",
      class: "dropdown-item notify-item"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_23, _hoisted_24]),
      _: 1 /* STABLE */
    }), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "javascript:void(0);",
      class: "d-flex dropdown-item notify-item py-2"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_27, _hoisted_28]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "javascript:void(0);",
      class: "d-flex dropdown-item notify-item py-2"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_29, _hoisted_30]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "javascript:void(0);",
      class: "d-flex dropdown-item notify-item py-2"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_31, _hoisted_32]),
      _: 1 /* STABLE */
    })])]),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/pages/search-results",
    class: "btn btn-primary btn-sm"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View All Results "), _hoisted_34]),
    _: 1 /* STABLE */
  })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "primary",
    type: "submit"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_43]),
    _: 1 /* STABLE */
  })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.languages, (entry, i) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
      href: "javascript:void(0);",
      key: `Lang${i}`,
      value: entry,
      onClick: $event => $options.setLanguage(entry.language, entry.title, entry.flag),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        active: $data.lan === entry.language
      }, "dropdown-item notify-item language py-2"]),
      "data-lang": "en",
      title: "English"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: entry.flag,
        alt: "user-image",
        class: "me-2 rounded",
        height: "18"
      }, null, 8 /* PROPS */, _hoisted_47), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(entry.title), 1 /* TEXT */)]),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value", "onClick", "class"]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    type: "button",
    variant: "ghost-secondary",
    class: "btn-icon btn-topbar rounded-circle",
    "data-toggle": "fullscreen",
    onClick: $options.initFullScreen
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_50]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    type: "button",
    variant: "ghost-secondary",
    class: "btn-icon btn-topbar rounded-circle light-dark-mode",
    onClick: $options.toggleDarkMode
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_52]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
    class: "align-items-center"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_58]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      cols: "auto",
      class: "dropdown-tabs"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
        variant: "soft-light",
        class: "badge-soft-light fs-13"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 0 New")]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
    class: "nav-link active",
    "data-bs-toggle": "tab",
    href: "#all-noti-tab",
    role: "tab",
    "aria-selected": "false",
    onClickCapture: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All (0) ")]),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
    class: "nav-link",
    "data-bs-toggle": "tab",
    href: "#messages-tab",
    role: "tab",
    "aria-selected": "true",
    onClickCapture: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Messages ")]),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
    class: "nav-link",
    "data-bs-toggle": "tab",
    href: "#alerts-tab",
    role: "tab",
    "aria-selected": "false",
    onClickCapture: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"]))
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Alerts ")]),
    _: 1 /* STABLE */
  })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
    "data-simplebar": "",
    style: {
      "max-height": "300px"
    },
    class: "pe-2"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-reset notification-item d-block dropdown-item position-relative\">\n                      <div class=\"d-flex\">\n                        <div class=\"avatar-xs me-3\">\n                          <span class=\"avatar-title bg-soft-info text-info rounded-circle fs-16\">\n                            <i class=\"bx bx-badge-check\"></i>\n                          </span>\n                        </div>\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-2 lh-base\">\n                              Your <b>Elite</b> author Graphic Optimization\n                              <span class=\"text-secondary\">reward</span> is\n                              ready!\n                            </h6>\n                          </b-link>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> Just 30 sec ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-reset notification-item d-block dropdown-item position-relative\">\n                      <div class=\"d-flex\">\n                        <img src=\"@/assets/images/users/avatar-2.jpg\" class=\"me-3 rounded-circle avatar-xs\"\n                          alt=\"user-pic\" />\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-1 fs-13 fw-semibold\">\n                              Angela Bernier\n                            </h6>\n                          </b-link>\n                          <div class=\"fs-13 text-muted\">\n                            <p class=\"mb-1\">\n                              Answered to your comment on the cash flow forecast's graph 🔔.\n                            </p>\n                          </div>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 48 min ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-reset notification-item d-block dropdown-item position-relative\">\n                      <div class=\"d-flex\">\n                        <div class=\"avatar-xs me-3\">\n                          <span class=\"avatar-title bg-soft-danger text-danger rounded-circle fs-16\">\n                            <i class=\"bx bx-message-square-dots\"></i>\n                          </span>\n                        </div>\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-2 fs-13 lh-base\">\n                              You have received <b class=\"text-success\">20</b> new messages in the conversation\n                            </h6>\n                          </b-link>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 2 hrs\n                              ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-reset notification-item d-block dropdown-item position-relative\">\n                      <div class=\"d-flex\">\n                        <img src=\"@/assets/images/users/avatar-8.jpg\" class=\"me-3 rounded-circle avatar-xs\"\n                          alt=\"user-pic\" />\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-1 fs-13 fw-semibold\">\n                              Maureen Gibson\n                            </h6>\n                          </b-link>\n                          <div class=\"fs-13 text-muted\">\n                            <p class=\"mb-1\">\n                              We talked about a project on linkedin.\n                            </p>\n                          </div>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 4 hrs\n                              ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      type: "button",
      variant: "soft-success"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View All Notifications "), _hoisted_67]),
      _: 1 /* STABLE */
    })])]),

    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
    "data-simplebar": "",
    style: {
      "max-height": "300px"
    },
    class: "pe-2"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"text-reset notification-item d-block dropdown-item\">\n                      <div class=\"d-flex\">\n                        <img src=\"@/assets/images/users/avatar-3.jpg\" class=\"me-3 rounded-circle avatar-xs\"\n                          alt=\"user-pic\" />\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-1 fs-13 fw-semibold\">\n                              James Lemire\n                            </h6>\n                          </b-link>\n                          <div class=\"fs-13 text-muted\">\n                            <p class=\"mb-1\">\n                              We talked about a project on linkedin.\n                            </p>\n                          </div>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 30 min ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-reset notification-item d-block dropdown-item\">\n                      <div class=\"d-flex\">\n                        <img src=\"@/assets/images/users/avatar-2.jpg\" class=\"me-3 rounded-circle avatar-xs\"\n                          alt=\"user-pic\" />\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-1 fs-13 fw-semibold\">\n                              Angela Bernier\n                            </h6>\n                          </b-link>\n                          <div class=\"fs-13 text-muted\">\n                            <p class=\"mb-1\">\n                              Answered to your comment on the cash flow\n                              forecast's graph 🔔.\n                            </p>\n                          </div>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 2 hrs\n                              ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-reset notification-item d-block dropdown-item\">\n                      <div class=\"d-flex\">\n                        <img src=\"@/assets/images/users/avatar-6.jpg\" class=\"me-3 rounded-circle avatar-xs\"\n                          alt=\"user-pic\" />\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-1 fs-13 fw-semibold\">\n                              Kenneth Brown\n                            </h6>\n                          </b-link>\n                          <div class=\"fs-13 text-muted\">\n                            <p class=\"mb-1\">\n                              Mentionned you in his comment on 📃 invoice\n                              #12501.\n                            </p>\n                          </div>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 10 hrs\n                              ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"text-reset notification-item d-block dropdown-item\">\n                      <div class=\"d-flex\">\n                        <img src=\"@/assets/images/users/avatar-8.jpg\" class=\"me-3 rounded-circle avatar-xs\"\n                          alt=\"user-pic\" />\n                        <div class=\"flex-1\">\n                          <b-link href=\"#!\" class=\"stretched-link\">\n                            <h6 class=\"mt-0 mb-1 fs-13 fw-semibold\">\n                              Maureen Gibson\n                            </h6>\n                          </b-link>\n                          <div class=\"fs-13 text-muted\">\n                            <p class=\"mb-1\">\n                              We talked about a project on linkedin.\n                            </p>\n                          </div>\n                          <p class=\"mb-0 fs-11 fw-medium text-uppercase text-muted\">\n                            <span><i class=\"mdi mdi-clock-outline\"></i> 3 days\n                              ago</span>\n                          </p>\n                        </div>\n                        <div class=\"px-2 fs-15\">\n                          <input class=\"form-check-input\" type=\"checkbox\" />\n                        </div>\n                      </div>\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      type: "button",
      variant: "soft-success"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View All Messages "), _hoisted_70]),
      _: 1 /* STABLE */
    })])]),

    _: 1 /* STABLE */
  })]), _hoisted_71])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_75, "Welcome " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.profile.Name) + "!", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    class: "dropdown-item",
    to: `/pages/profile/${this.profile.Id}`
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_76, _hoisted_77]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    class: "dropdown-item",
    to: "/chat"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_78, _hoisted_79]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    class: "dropdown-item",
    to: "/apps/tasks-kanban"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_80, _hoisted_81]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    class: "dropdown-item",
    to: "/pages/faqs"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_82, _hoisted_83]),
    _: 1 /* STABLE */
  })])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-header.vue?vue&type=template&id=96d6f7aa":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-header.vue?vue&type=template&id=96d6f7aa ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "page-title-box d-sm-flex align-items-center justify-content-between"
};
const _hoisted_2 = {
  class: "mb-sm-0"
};
const _hoisted_3 = {
  class: "page-title-right"
};
const _hoisted_4 = {
  class: "breadcrumb m-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_row, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      cols: "12"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.items, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["breadcrumb-item", {
            active: item[0]
          }]),
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          href: "javascript: void(0);"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 1 /* TEXT */)]),

          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)], 2 /* CLASS */);
      }), 128 /* KEYED_FRAGMENT */))])])])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/right-bar.vue?vue&type=template&id=f34c67fc":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/right-bar.vue?vue&type=template&id=f34c67fc ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_sidebar_img_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/sidebar/img-1.jpg */ "./src/assets/images/sidebar/img-1.jpg");
/* harmony import */ var _assets_images_sidebar_img_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/sidebar/img-2.jpg */ "./src/assets/images/sidebar/img-2.jpg");
/* harmony import */ var _assets_images_sidebar_img_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/sidebar/img-3.jpg */ "./src/assets/images/sidebar/img-3.jpg");
/* harmony import */ var _assets_images_sidebar_img_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/sidebar/img-4.jpg */ "./src/assets/images/sidebar/img-4.jpg");





const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "preloader"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "spinner-border text-primary avatar-sm",
  role: "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "visually-hidden"
}, "Loading...")])])], -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-up-line"
}, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "customizer-setting d-none d-md-block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2",
  "data-bs-toggle": "offcanvas",
  "data-bs-target": "#theme-settings-offcanvas",
  "aria-controls": "theme-settings-offcanvas",
  id: "mdi-cog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-spin mdi-cog-outline fs-22"
})])], -1 /* HOISTED */);
const _hoisted_4 = {
  class: "offcanvas offcanvas-end border-0",
  tabindex: "-1",
  id: "theme-settings-offcanvas"
};
const _hoisted_5 = {
  class: "d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "m-0 me-2 text-white"
}, "Theme Customizer", -1 /* HOISTED */);
const _hoisted_7 = {
  class: "offcanvas-body p-0"
};
const _hoisted_8 = {
  class: "p-4"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mb-0 fw-semibold text-uppercase"
}, "Layout", -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose your layout", -1 /* HOISTED */);
const _hoisted_11 = {
  class: "form-check card-radio"
};
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "customizer-layout01"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Vertical", -1 /* HOISTED */);
const _hoisted_14 = {
  class: "form-check card-radio"
};
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "customizer-layout02"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex p-1 gap-1 align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 bg-soft-primary rounded me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 px-2 bg-soft-primary"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])], -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Horizontal", -1 /* HOISTED */);
const _hoisted_17 = {
  class: "form-check card-radio"
};
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "customizer-layout03"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 bg-soft-primary mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Two Column", -1 /* HOISTED */);
const _hoisted_20 = {
  class: "form-check card-radio"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "customizer-layout04"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column pt-1 pe-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Semi Box", -1 /* HOISTED */);
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Color Scheme", -1 /* HOISTED */);
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose Light or Dark Scheme.", -1 /* HOISTED */);
const _hoisted_25 = {
  class: "colorscheme-cardradio"
};
const _hoisted_26 = {
  class: "form-check card-radio"
};
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "layout-mode-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Light", -1 /* HOISTED */);
const _hoisted_29 = {
  class: "form-check card-radio dark"
};
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100 bg-dark",
  for: "layout-mode-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-soft-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-light rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-soft-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-soft-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Dark", -1 /* HOISTED */);
const _hoisted_32 = {
  key: 0,
  id: "sidebar-visibility"
};
const _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Sidebar Visibility", -1 /* HOISTED */);
const _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose show or Hidden sidebar.", -1 /* HOISTED */);
const _hoisted_35 = {
  class: "form-check card-radio"
};
const _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-visibility-show"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column pt-1 pe-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Show", -1 /* HOISTED */);
const _hoisted_38 = {
  class: "form-check card-radio"
};
const _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100 px-2",
  for: "sidebar-visibility-hidden"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column pt-1 px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Hidden", -1 /* HOISTED */);
const _hoisted_41 = {
  key: 1,
  id: "layout-width"
};
const _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Layout Width", -1 /* HOISTED */);
const _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose Fluid or Boxed layout.", -1 /* HOISTED */);
const _hoisted_44 = {
  class: "form-check card-radio"
};
const _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "layout-width-fluid"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Fluid", -1 /* HOISTED */);
const _hoisted_47 = {
  class: "form-check card-radio"
};
const _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100 px-2",
  for: "layout-width-boxed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100 border-start border-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Boxed", -1 /* HOISTED */);
const _hoisted_50 = {
  key: 2,
  id: "layout-position"
};
const _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, " Layout Position ", -1 /* HOISTED */);
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Choose Fixed or Scrollable Layout Position. ", -1 /* HOISTED */);
const _hoisted_53 = {
  class: "btn-group radio",
  role: "group"
};
const _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "btn btn-light w-sm",
  for: "layout-position-fixed"
}, "Fixed", -1 /* HOISTED */);
const _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "btn btn-light w-sm ms-0",
  for: "layout-position-scrollable"
}, "Scrollable", -1 /* HOISTED */);
const _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Topbar Color", -1 /* HOISTED */);
const _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose Light or Dark Topbar Color.", -1 /* HOISTED */);
const _hoisted_58 = {
  class: "form-check card-radio"
};
const _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "topbar-color-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Light", -1 /* HOISTED */);
const _hoisted_61 = {
  class: "form-check card-radio"
};
const _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "topbar-color-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-primary d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Dark", -1 /* HOISTED */);
const _hoisted_64 = {
  key: 3,
  id: "sidebar-size"
};
const _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Sidebar Size", -1 /* HOISTED */);
const _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose a size of Sidebar.", -1 /* HOISTED */);
const _hoisted_67 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-size-default"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Default", -1 /* HOISTED */);
const _hoisted_70 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-size-compact"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Compact", -1 /* HOISTED */);
const _hoisted_73 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-size-small"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 bg-soft-primary mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Small (Icon View)", -1 /* HOISTED */);
const _hoisted_76 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-size-small-hover"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 bg-soft-primary mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Small Hover View", -1 /* HOISTED */);
const _hoisted_79 = {
  key: 4,
  id: "sidebar-view"
};
const _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Sidebar View", -1 /* HOISTED */);
const _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose Default or Detached Sidebar view.", -1 /* HOISTED */);
const _hoisted_82 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-view-default"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Default", -1 /* HOISTED */);
const _hoisted_85 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-view-detached"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex p-1 gap-1 align-items-center px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 bg-soft-primary rounded me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 pb-0 px-2 bg-soft-primary"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100 p-1 px-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto px-2"
})])], -1 /* HOISTED */);
const _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Detached", -1 /* HOISTED */);
const _hoisted_88 = {
  key: 5,
  id: "sidebar-color"
};
const _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, " Sidebar Color ", -1 /* HOISTED */);
const _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose Ligth or Dark Sidebar Color.", -1 /* HOISTED */);
const _hoisted_91 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-color-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-white border-end d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Light", -1 /* HOISTED */);
const _hoisted_94 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "sidebar-color-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-primary d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-light rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Dark", -1 /* HOISTED */);
const _hoisted_97 = {
  class: "btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed",
  type: "button"
};
const _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-light rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-light"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])], -1 /* HOISTED */);
const _hoisted_99 = [_hoisted_98];
const _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Gradient", -1 /* HOISTED */);
const _hoisted_101 = {
  class: "d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded"
};
const _hoisted_102 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-xs rounded-circle",
  for: "sidebar-color-gradient"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle bg-vertical-gradient"
})], -1 /* HOISTED */);
const _hoisted_104 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-xs rounded-circle",
  for: "sidebar-color-gradient-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle bg-vertical-gradient-2"
})], -1 /* HOISTED */);
const _hoisted_106 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-xs rounded-circle",
  for: "sidebar-color-gradient-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle bg-vertical-gradient-3"
})], -1 /* HOISTED */);
const _hoisted_108 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-xs rounded-circle",
  for: "sidebar-color-gradient-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle bg-vertical-gradient-4"
})], -1 /* HOISTED */);
const _hoisted_110 = {
  key: 6,
  id: "sidebar-img"
};
const _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Sidebar Images", -1 /* HOISTED */);
const _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose a image of Sidebar.", -1 /* HOISTED */);
const _hoisted_113 = {
  class: "d-flex gap-2 flex-wrap img-switch"
};
const _hoisted_114 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-sm h-auto",
  for: "sidebarimg-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-md w-auto bg-light d-flex align-items-center justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-close-fill fs-20"
})])], -1 /* HOISTED */);
const _hoisted_116 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-sm h-auto",
  for: "sidebarimg-01"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_sidebar_img_1_jpg__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "avatar-md w-auto object-cover"
})], -1 /* HOISTED */);
const _hoisted_118 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-sm h-auto",
  for: "sidebarimg-02"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_sidebar_img_2_jpg__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  class: "avatar-md w-auto object-cover"
})], -1 /* HOISTED */);
const _hoisted_120 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-sm h-auto",
  for: "sidebarimg-03"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_sidebar_img_3_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-md w-auto object-cover"
})], -1 /* HOISTED */);
const _hoisted_122 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-sm h-auto",
  for: "sidebarimg-04"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_sidebar_img_4_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "avatar-md w-auto object-cover"
})], -1 /* HOISTED */);
const _hoisted_124 = {
  id: "preloader-menu"
};
const _hoisted_125 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mt-4 mb-0 fw-semibold text-uppercase"
}, "Preloader", -1 /* HOISTED */);
const _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Choose a preloader.", -1 /* HOISTED */);
const _hoisted_127 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "preloader-view-custom"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "status",
  class: "d-flex align-items-center justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "spinner-border text-primary avatar-xxs m-auto",
  role: "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "visually-hidden"
}, "Loading...")])])], -1 /* HOISTED */);
const _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Enable", -1 /* HOISTED */);
const _hoisted_130 = {
  class: "form-check sidebar-setting card-radio"
};
const _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label p-0 avatar-md w-100",
  for: "preloader-view-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex gap-1 h-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-flex h-100 flex-column gap-1 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 bg-soft-primary rounded mb-2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-block p-1 px-2 pb-0 bg-soft-primary"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "d-flex h-100 flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "bg-light d-block p-1 mt-auto"
})])])])], -1 /* HOISTED */);
const _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13 text-center mt-2"
}, "Disable", -1 /* HOISTED */);
const _hoisted_133 = {
  class: "offcanvas-footer border-top p-3 text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_collapse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-collapse");
  const _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");
  const _directive_b_toggle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-toggle");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "danger",
    onClick: $options.topFunction,
    class: "btn-icon",
    id: "back-to-top"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    type: "button",
    variant: "white",
    class: "btn-close btn-close-white ms-auto",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
    class: "h-100"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
      class: "gy-3"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          id: "customizer-layout01",
          name: "data-layout",
          type: "radio",
          value: "vertical",
          class: "form-check-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $options.layoutType = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.layoutType]]), _hoisted_12]), _hoisted_13]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          id: "customizer-layout02",
          name: "data-layout",
          type: "radio",
          value: "horizontal",
          class: "form-check-input",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.layoutType = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.layoutType]]), _hoisted_15]), _hoisted_16]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          id: "customizer-layout03",
          name: "data-layout",
          type: "radio",
          value: "twocolumn",
          class: "form-check-input",
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $options.layoutType = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.layoutType]]), _hoisted_18]), _hoisted_19]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          id: "customizer-layout04",
          name: "data-layout",
          type: "radio",
          value: "semibox",
          class: "form-check-input",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $options.layoutType = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.layoutType]]), _hoisted_21]), _hoisted_22]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), _hoisted_23, _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-layout-mode",
          id: "layout-mode-light",
          value: "light",
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $options.mode = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.mode]]), _hoisted_27]), _hoisted_28]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $options.mode = $event),
          type: "radio",
          name: "data-layout-mode",
          id: "layout-mode-dark",
          value: "dark"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.mode]]), _hoisted_30]), _hoisted_31]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]), $options.layoutType == 'semibox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [_hoisted_33, _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-sidebar-visibility",
          id: "sidebar-visibility-show",
          value: "show",
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $options.visibility = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.visibility]]), _hoisted_36]), _hoisted_37]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-sidebar-visibility",
          id: "sidebar-visibility-hidden",
          value: "hidden",
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $options.visibility = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.visibility]]), _hoisted_39]), _hoisted_40]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.layoutType == 'vertical' || $options.layoutType == 'horizontal' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, [_hoisted_42, _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $options.layoutWidth = $event),
          name: "data-layout-width",
          id: "layout-width-fluid",
          value: "fluid"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.layoutWidth]]), _hoisted_45]), _hoisted_46]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $options.layoutWidth = $event),
          name: "data-layout-width",
          id: "layout-width-boxed",
          value: "boxed"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.layoutWidth]]), _hoisted_48]), _hoisted_49]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.layoutType != 'twocolumn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [_hoisted_51, _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      class: "btn-check",
      name: "data-layout-position",
      id: "layout-position-fixed",
      value: "fixed",
      "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => $options.position = $event)
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.position]]), _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "radio",
      class: "btn-check",
      name: "data-layout-position",
      id: "layout-position-scrollable",
      value: "scrollable",
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => $options.position = $event)
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.position]]), _hoisted_55])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-topbar",
          id: "topbar-color-light",
          value: "light",
          "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => $options.topbar = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.topbar]]), _hoisted_59]), _hoisted_60]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-topbar",
          id: "topbar-color-dark",
          value: "dark",
          "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => $options.topbar = $event)
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.topbar]]), _hoisted_62]), _hoisted_63]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), $options.layoutType == 'vertical' || $options.layoutType == 'semibox' && $options.visibility == 'show' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_64, [_hoisted_65, _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-sidebar-size",
          id: "sidebar-size-default",
          "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => $options.sidebarSize = $event),
          value: "lg"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarSize]]), _hoisted_68]), _hoisted_69]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          type: "radio",
          name: "data-sidebar-size",
          id: "sidebar-size-compact",
          "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => $options.sidebarSize = $event),
          value: "md"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarSize]]), _hoisted_71]), _hoisted_72]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => $options.sidebarSize = $event),
          type: "radio",
          name: "data-sidebar-size",
          id: "sidebar-size-small",
          value: "sm"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarSize]]), _hoisted_74]), _hoisted_75]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => $options.sidebarSize = $event),
          type: "radio",
          name: "data-sidebar-size",
          id: "sidebar-size-small-hover",
          value: "sm-hover"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarSize]]), _hoisted_77]), _hoisted_78]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.layoutType == 'vertical' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_79, [_hoisted_80, _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => $options.sidebarView = $event),
          type: "radio",
          name: "data-layout-style",
          id: "sidebar-view-default",
          value: "default"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarView]]), _hoisted_83]), _hoisted_84]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => $options.sidebarView = $event),
          type: "radio",
          name: "data-layout-style",
          id: "sidebar-view-detached",
          value: "detached"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarView]]), _hoisted_86]), _hoisted_87]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.layoutType == 'vertical' || $options.layoutType === 'twocolumn' || $options.layoutType === 'semibox' && $options.visibility === 'show' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_88, [_hoisted_89, _hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => $options.sidebarColor = $event),
          type: "radio",
          name: "data-sidebar",
          id: "sidebar-color-light",
          value: "light"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarColor]]), _hoisted_92]), _hoisted_93]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => $options.sidebarColor = $event),
          type: "radio",
          name: "data-sidebar",
          id: "sidebar-color-dark",
          value: "dark"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarColor]]), _hoisted_95]), _hoisted_96]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_97, _hoisted_99)), [[_directive_b_toggle, void 0, void 0, {
          collapseBgGradient: true
        }]]), _hoisted_100]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_collapse, {
      id: "collapseBgGradient"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        class: "form-check-input",
        type: "radio",
        "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => $options.sidebarColor = $event),
        name: "data-sidebar",
        id: "sidebar-color-gradient",
        value: "gradient"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarColor]]), _hoisted_103]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        class: "form-check-input",
        type: "radio",
        "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => $options.sidebarColor = $event),
        name: "data-sidebar",
        id: "sidebar-color-gradient-2",
        value: "gradient-2"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarColor]]), _hoisted_105]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        class: "form-check-input",
        type: "radio",
        "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => $options.sidebarColor = $event),
        name: "data-sidebar",
        id: "sidebar-color-gradient-3",
        value: "gradient-3"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarColor]]), _hoisted_107]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        class: "form-check-input",
        type: "radio",
        "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => $options.sidebarColor = $event),
        name: "data-sidebar",
        id: "sidebar-color-gradient-4",
        value: "gradient-4"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarColor]]), _hoisted_109])])]),
      _: 1 /* STABLE */
    })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.layoutType == 'vertical' || $options.layoutType === 'twocolumn' || $options.layoutType === 'semibox' && $options.visibility === 'show' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_110, [_hoisted_111, _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      class: "form-check-input",
      "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => $options.sidebarImage = $event),
      type: "radio",
      name: "data-sidebar-img",
      id: "sidebarimg-none",
      value: "none"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarImage]]), _hoisted_115]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      class: "form-check-input",
      "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => $options.sidebarImage = $event),
      type: "radio",
      name: "data-sidebar-img",
      id: "sidebarimg-01",
      value: "img-1"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarImage]]), _hoisted_117]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      class: "form-check-input",
      "onUpdate:modelValue": _cache[28] || (_cache[28] = $event => $options.sidebarImage = $event),
      type: "radio",
      name: "data-sidebar-img",
      id: "sidebarimg-02",
      value: "img-2"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarImage]]), _hoisted_119]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      class: "form-check-input",
      "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => $options.sidebarImage = $event),
      type: "radio",
      name: "data-sidebar-img",
      id: "sidebarimg-03",
      value: "img-3"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarImage]]), _hoisted_121]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      class: "form-check-input",
      "onUpdate:modelValue": _cache[30] || (_cache[30] = $event => $options.sidebarImage = $event),
      type: "radio",
      name: "data-sidebar-img",
      id: "sidebarimg-04",
      value: "img-4"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.sidebarImage]]), _hoisted_123])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [_hoisted_125, _hoisted_126, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => $options.preloader = $event),
          type: "radio",
          name: "data-preloader",
          id: "preloader-view-custom",
          value: "enable"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.preloader]]), _hoisted_128]), _hoisted_129]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input",
          "onUpdate:modelValue": _cache[32] || (_cache[32] = $event => $options.preloader = $event),
          type: "radio",
          name: "data-preloader",
          id: "preloader-view-none",
          value: "disable"
        }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $options.preloader]]), _hoisted_131]), _hoisted_132]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })])])]),

    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      cols: "6"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        class: "w-100",
        id: "reset-layout"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reset ")]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      cols: "6"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "primary",
        class: "w-100 ms-auto",
        "data-bs-dismiss": "offcanvas",
        "aria-label": "Close"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Preview ")]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  })])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/lottie.vue?vue&type=template&id=64edace2":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/lottie.vue?vue&type=template&id=64edace2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($data.style),
    ref: "lavContainer"
  }, null, 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/horizontal.vue?vue&type=template&id=795debfa":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/horizontal.vue?vue&type=template&id=795debfa ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/logo-sm.png */ "./src/assets/images/logo-sm.png");
/* harmony import */ var _assets_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/logo-dark.png */ "./src/assets/images/logo-dark.png");
/* harmony import */ var _assets_images_logo_light_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/logo-light.png */ "./src/assets/images/logo-light.png");




const _hoisted_1 = {
  id: "layout-wrapper"
};
const _hoisted_2 = {
  class: "app-menu navbar-menu"
};
const _hoisted_3 = {
  class: "navbar-brand-box"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "70"
})], -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  height: "70"
})], -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "70"
})], -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_light_png__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  height: "70"
})], -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover",
  id: "vertical-hover"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-record-circle-line"
})], -1 /* HOISTED */);
const _hoisted_9 = {
  id: "scrollbar"
};
const _hoisted_10 = {
  class: "navbar-nav h-100",
  id: "navbar-nav"
};
const _hoisted_11 = {
  class: "menu-title"
};
const _hoisted_12 = {
  "data-key": "t-menu"
};
const _hoisted_13 = {
  class: "nav-item"
};
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-dashboard-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_15 = {
  "data-key": "t-dashboards"
};
const _hoisted_16 = {
  class: "collapse menu-dropdown",
  id: "sidebarDashboards"
};
const _hoisted_17 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_18 = {
  class: "nav-item"
};
const _hoisted_19 = {
  class: "nav-item"
};
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-apps-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_21 = {
  "data-key": "t-apps"
};
const _hoisted_22 = {
  class: "collapse menu-dropdown",
  id: "sidebarApps"
};
const _hoisted_23 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_24 = {
  class: "nav-item"
};
const _hoisted_25 = {
  class: "collapse menu-dropdown",
  id: "sidebarProjects"
};
const _hoisted_26 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_27 = {
  class: "nav-item"
};
const _hoisted_28 = {
  class: "nav-item"
};
const _hoisted_29 = {
  class: "nav-item"
};
const _hoisted_30 = {
  class: "collapse menu-dropdown",
  id: "sidebarTasks"
};
const _hoisted_31 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_32 = {
  class: "nav-item"
};
const _hoisted_33 = {
  class: "nav-item"
};
const _hoisted_34 = {
  class: "collapse menu-dropdown",
  id: "sidebarTickets"
};
const _hoisted_35 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_36 = {
  class: "nav-item"
};
const _hoisted_37 = {
  class: "nav-item"
};
const _hoisted_38 = {
  class: "nav-item"
};
const _hoisted_39 = {
  class: "nav-item"
};
const _hoisted_40 = {
  class: "menu-title"
};
const _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
}, null, -1 /* HOISTED */);
const _hoisted_42 = {
  "data-key": "t-pages"
};
const _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vertical-overlay"
}, null, -1 /* HOISTED */);
const _hoisted_44 = {
  class: "main-content"
};
const _hoisted_45 = {
  class: "page-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavBar");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-container");
  const _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");
  const _component_RightBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RightBar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ========== App Menu ========== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dark Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-dark"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_4, _hoisted_5]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Light Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-light"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, _hoisted_7]),
    _: 1 /* STABLE */
  }), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-menu")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      class: "nav-link menu-link",
      href: "#sidebarDashboards",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarDashboards"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-dashboards")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/dashboard/projects",
      class: "nav-link",
      "data-key": "t-projects"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end Dashboard Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      class: "nav-link menu-link",
      href: "#sidebarApps",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarApps"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-apps")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "#sidebarProjects",
      class: "nav-link",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarProjects",
      "data-key": "t-projects"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/projects-list",
      class: "nav-link",
      "data-key": "t-list"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/projects-create",
      class: "nav-link",
      "data-key": "t-create-project"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-create-project")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "#sidebarTasks",
      class: "nav-link",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarTasks",
      "data-key": "t-tasks"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-tasks")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/tasks-list-view",
      class: "nav-link",
      "data-key": "t-list-view"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
      href: "#sidebarTickets",
      class: "nav-link",
      "data-bs-toggle": "collapse",
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "sidebarTickets",
      "data-key": "t-supprt-tickets"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-supprt-tickets")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps/tickets-list",
      class: "nav-link",
      "data-key": "t-list-view"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/ChatGPT",
      class: "nav-link",
      "data-key": "t-chat"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-chat")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/AICorrecter",
      class: "nav-link",
      "data-key": "AICorrecter"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" AI Correcter ")]),
      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: "/apps-api-key",
      class: "nav-link",
      "data-key": "t-api-key"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-api-key")), 1 /* TEXT */)]),

      _: 1 /* STABLE */
    })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-pages")), 1 /* TEXT */)])])]),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left Sidebar End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Vertical Overlay"), _hoisted_43]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ============================================================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Page Content here "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ============================================================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RightBar)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/main.vue?vue&type=template&id=5f3af258":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/main.vue?vue&type=template&id=5f3af258 ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Vertical = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Vertical");
  const _component_Horizontal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Horizontal");
  const _component_TwoColumns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TwoColumns");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.layoutType === 'vertical' || _ctx.layoutType === 'semibox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Vertical, {
    key: 0,
    layout: _ctx.layoutType
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["layout"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.layoutType === 'horizontal' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Horizontal, {
    key: 1,
    layout: _ctx.layoutType
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["layout"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.layoutType === 'twocolumn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TwoColumns, {
    key: 2,
    layout: _ctx.layoutType
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["layout"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/twocolumn.vue?vue&type=template&id=77647c13":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/twocolumn.vue?vue&type=template&id=77647c13 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/INSANE.png */ "./src/assets/images/INSANE.png");


const _hoisted_1 = {
  id: "layout-wrapper"
};
const _hoisted_2 = {
  class: "app-menu navbar-menu"
};
const _hoisted_3 = {
  class: "navbar-brand-box"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "100"
})], -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "100"
})], -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "100"
})], -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "100"
})], -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover",
  id: "vertical-hover"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-record-circle-line"
})], -1 /* HOISTED */);
const _hoisted_9 = {
  key: 0,
  id: "scrollbar"
};
const _hoisted_10 = {
  id: "two-column-menu"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "Logo",
  height: "35"
}, null, -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-dashboard-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-apps-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_14 = {
  class: "menu-title"
};
const _hoisted_15 = {
  "data-key": "t-menu"
};
const _hoisted_16 = {
  class: "nav-item"
};
const _hoisted_17 = {
  class: "collapse menu-dropdown",
  id: "sidebarDashboards"
};
const _hoisted_18 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_19 = {
  class: "nav-item"
};
const _hoisted_20 = {
  class: "nav-item"
};
const _hoisted_21 = {
  class: "collapse menu-dropdown",
  id: "sidebarApps"
};
const _hoisted_22 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_23 = {
  class: "nav-item"
};
const _hoisted_24 = {
  class: "collapse menu-dropdown",
  id: "sidebarProjects"
};
const _hoisted_25 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_26 = {
  class: "nav-item"
};
const _hoisted_27 = {
  class: "nav-item"
};
const _hoisted_28 = {
  class: "nav-item"
};
const _hoisted_29 = {
  class: "collapse menu-dropdown",
  id: "sidebarTasks"
};
const _hoisted_30 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_31 = {
  class: "nav-item"
};
const _hoisted_32 = {
  class: "nav-item"
};
const _hoisted_33 = {
  class: "collapse menu-dropdown",
  id: "sidebarTickets"
};
const _hoisted_34 = {
  class: "nav nav-sm flex-column"
};
const _hoisted_35 = {
  class: "nav-item"
};
const _hoisted_36 = {
  class: "nav-item"
};
const _hoisted_37 = {
  class: "nav-item"
};
const _hoisted_38 = {
  class: "nav-item"
};
const _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "sidebar-background"
}, null, -1 /* HOISTED */);
const _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vertical-overlay",
  id: "overlay"
}, null, -1 /* HOISTED */);
const _hoisted_41 = {
  class: "main-content"
};
const _hoisted_42 = {
  class: "page-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavBar");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");
  const _component_b_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-container");
  const _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");
  const _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");
  const _component_RightBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RightBar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ========== Left Sidebar Start ========== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ========== App Menu ========== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dark Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-dark"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_4, _hoisted_5]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Light Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-light"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, _hoisted_7]),
    _: 1 /* STABLE */
  }), _hoisted_8]), $data.rmenu == 'twocolumn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
      class: "twocolumn-iconview list-unstyled"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "logo"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "nav-icon",
        href: "#sidebarDashboards",
        role: "button",
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.updateMenu('sidebarDashboards'), ["prevent"]))
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_12]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "nav-icon",
        href: "#sidebarApps",
        role: "button",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => $options.updateMenu('sidebarApps'), ["prevent"]))
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    })]), _ctx.layoutType === 'twocolumn' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
      key: 0,
      class: "navbar-nav",
      id: "navbar-nav"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-menu")), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/dashboard/projects",
        class: "nav-link",
        "data-key": "t-projects"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end Dashboard Menu "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#sidebarProjects",
        class: "nav-link",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarProjects",
        "data-key": "t-projects"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-projects")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/projects-list",
        class: "nav-link",
        "data-key": "t-list"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/projects-create",
        class: "nav-link",
        "data-key": "t-create-project"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-create-project")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#sidebarTasks",
        class: "nav-link",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarTasks",
        "data-key": "t-tasks"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-tasks")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/tasks-list-view",
        class: "nav-link",
        "data-key": "t-list-view"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#sidebarTickets",
        class: "nav-link",
        "data-bs-toggle": "collapse",
        role: "button",
        "aria-expanded": "false",
        "aria-controls": "sidebarTickets",
        "data-key": "t-supprt-tickets"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-supprt-tickets")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps/tickets-list",
        class: "nav-link",
        "data-key": "t-list-view"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-list-view")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/ChatGPT",
        class: "nav-link",
        "data-key": "t-chat"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-chat")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/AICorrecter",
        class: "nav-link",
        "data-key": "AICorrecter"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" AI Correcter ")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/apps-api-key",
        class: "nav-link",
        "data-key": "t-api-key"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t("t-api-key")), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      })])])])])]),

      _: 1 /* STABLE */
    })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    _: 1 /* STABLE */
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.rmenu == 'vertical' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SimpleBar, {
    key: 1,
    id: "scrollbar",
    class: "h-100",
    ref: "scrollbar"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu)]),
    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_39]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left Sidebar End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Vertical Overlay"), _hoisted_40]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ============================================================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Page Content here "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ============================================================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RightBar)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/vertical.vue?vue&type=template&id=14729215":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/vertical.vue?vue&type=template&id=14729215 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/INSANE.png */ "./src/assets/images/INSANE.png");
/* harmony import */ var _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/logo-sm.png */ "./src/assets/images/logo-sm.png");



const _hoisted_1 = {
  id: "layout-wrapper"
};
const _hoisted_2 = {
  class: "app-menu navbar-menu"
};
const _hoisted_3 = {
  class: "navbar-brand-box"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "64"
})], -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "64"
})], -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_INSANE_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "64"
})], -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "logo-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  height: "64"
})], -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-record-circle-line"
}, null, -1 /* HOISTED */);
const _hoisted_9 = [_hoisted_8];
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "sidebar-background"
}, null, -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vertical-overlay",
  id: "overlay"
}, null, -1 /* HOISTED */);
const _hoisted_12 = {
  class: "main-content"
};
const _hoisted_13 = {
  class: "page-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NavBar");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_Menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Menu");
  const _component_SimpleBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SimpleBar");
  const _component_b_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-container");
  const _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");
  const _component_RightBar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RightBar");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NavBar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ========== Left Sidebar Start ========== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ========== App Menu ========== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" LOGO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dark Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-dark"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_4, _hoisted_5]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Light Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    class: "logo logo-light"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, _hoisted_7]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    class: "btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover",
    id: "vertical-hover",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.initActiveMenu && $options.initActiveMenu(...args))
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SimpleBar, {
    id: "scrollbar",
    class: "h-100",
    ref: "scrollbar"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Menu)]),
    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Left Sidebar End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Vertical Overlay"), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ============================================================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Page Content here "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ============================================================== "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Start Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_container, {
    fluid: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RightBar)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/Listkanban.vue?vue&type=template&id=3b271169":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/Listkanban.vue?vue&type=template&id=3b271169 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");


const _hoisted_1 = ["id"];
const _hoisted_2 = {
  class: "d-flex mb-3"
};
const _hoisted_3 = {
  class: "flex-grow-1"
};
const _hoisted_4 = {
  class: "fs-14 text-uppercase fw-semibold mb-0"
};
const _hoisted_5 = {
  class: "flex-shrink-0"
};
const _hoisted_6 = {
  class: "dropdown card-header-dropdown"
};
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "fw-medium text-muted fs-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Menu"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-down ms-1"
})], -1 /* HOISTED */);
const _hoisted_8 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-line align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_10 = {
  "data-simplebar": "",
  class: "tasks-wrapper px-3 mx-n3"
};
const _hoisted_11 = ["id"];
const _hoisted_12 = {
  class: "my-3"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "sub-tasks",
  class: "form-label"
}, "Task Title", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "task-description",
  class: "form-label"
}, "Task Description", -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "formFile",
  class: "form-label"
}, "Tasks Images", -1 /* HOISTED */);
const _hoisted_16 = ["id"];
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "tasks-progress",
  class: "form-label"
}, "Add Team Member", -1 /* HOISTED */);
const _hoisted_18 = {
  "data-simplebar": "",
  style: {
    "height": "95px"
  }
};
const _hoisted_19 = {
  class: "list-unstyled vstack gap-2 mb-0"
};
const _hoisted_20 = {
  class: "form-check d-flex align-items-center"
};
const _hoisted_21 = ["value", "id", "onChange"];
const _hoisted_22 = ["for"];
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "avatar-xxs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_24 = {
  class: "flex-grow-1 ms-2"
};
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "due-date",
  class: "form-label"
}, "Due Date", -1 /* HOISTED */);
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "categories",
  class: "form-label"
}, "Tags", -1 /* HOISTED */);
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "tasks-progress",
  class: "form-label"
}, "Story points", -1 /* HOISTED */);
const _hoisted_28 = {
  class: "mt-4"
};
const _hoisted_29 = {
  class: "hstack gap-2 justify-content-end"
};
const _hoisted_30 = {
  class: "mt-2 text-center"
};
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mt-4 pt-2 fs-15 mx-4 mx-sm-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Are you sure ?"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mx-4 mb-0"
}, "Are you sure you want to remove this tasks ?")], -1 /* HOISTED */);
const _hoisted_32 = {
  class: "d-flex gap-2 justify-content-center mt-4 mb-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_TaskItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TaskItem");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  const _component_lottie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lottie");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "tasks-list",
    id: 'tasks-list-' + $props.item.Id
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
    tag: "small",
    variant: "success",
    class: "align-bottom ms-1"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.task.length), 1 /* TEXT */)]),

    _: 1 /* STABLE */
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
    class: "text-reset dropdown-btn",
    href: "#",
    "data-bs-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_7]),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    class: "dropdown-item",
    onClick: _cache[0] || (_cache[0] = $event => $data.modalShow3 = !$data.modalShow3)
  }, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: $props.item.Id,
    class: "tasks"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.task, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_TaskItem, {
      key: index,
      item: item,
      onReloadListTask: $options.handleReloadListTask
    }, null, 8 /* PROPS */, ["item", "onReloadListTask"]);
  }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_11)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "soft-info",
    class: "w-100",
    onClick: $options.showCreateModal
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add More")]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])])], 8 /* PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.modalShow2,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.modalShow2 = $event),
    "header-class": "p-3 bg-soft-info",
    "content-class": "border-0",
    "hide-footer": "",
    title: "Create New Task",
    class: "v-modal-custom",
    size: "lg",
    centered: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
      action: "#"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        class: "g-3"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.taskTitle = $event),
            type: "text",
            class: "form-control",
            id: "sub-tasks",
            placeholder: "Task title"
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.taskTitle]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.taskDescription = $event),
            class: "form-control",
            id: "task-description",
            rows: "3"
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.taskDescription]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            class: "form-control",
            type: "file",
            id: 'fileInput-' + $props.item.Id
          }, null, 8 /* PROPS */, _hoisted_16)]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Loop through the team members data using v-for "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.teamMembers, teamMember => {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
              key: teamMember.User__r.Id
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              class: "form-check-input me-3",
              type: "checkbox",
              value: teamMember.User__r.Id,
              id: teamMember.User__r.Id,
              onChange: $event => $options.handleCheckboxChange(teamMember.User__r.Id)
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
              class: "form-check-label d-flex align-items-center",
              for: teamMember.User__r.Id
            }, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(teamMember.User__r.Name), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_22)])]);
          }), 128 /* KEYED_FRAGMENT */))])])]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "4"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
            id: "due-date",
            modelValue: $data.date1,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.date1 = $event),
            placeholder: "Select date",
            class: "form-control"
          }, null, 8 /* PROPS */, ["modelValue"])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "4"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            class: "form-control",
            modelValue: $data.labels,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.labels = $event),
            mode: "tags",
            "close-on-select": true,
            searchable: true,
            "create-option": true,
            options: $data.Features
          }, null, 8 /* PROPS */, ["modelValue", "options"])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "4"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.points = $event),
            type: "text",
            class: "form-control",
            maxlength: "3",
            id: "tasks-progress",
            placeholder: "Enter points"
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.points]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "light",
          onClick: _cache[6] || (_cache[6] = $event => $data.modalShow2 = false)
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "success",
          onClick: $options.addNewTask
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Task")]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"])])])]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.modalShow3,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $data.modalShow3 = $event),
    id: "deleteTask",
    "modal-class": "zoomIn",
    "hide-footer": "",
    class: "v-modal-custom",
    centered: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lottie, {
      class: "avatar-xl",
      colors: "primary:#f7b84b,secondary:#f7666e",
      options: _ctx.defaultOptions,
      height: 100,
      width: 100
    }, null, 8 /* PROPS */, ["options"]), _hoisted_31]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      type: "button",
      variant: "light",
      class: "w-sm",
      "data-bs-dismiss": "modal"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close")]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      type: "button",
      variant: "danger",
      class: "w-sm",
      id: "delete-record",
      onClick: _cache[8] || (_cache[8] = $event => $options.deleteTask($props.item.Id))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Yes, Delete It!")]),
      _: 1 /* STABLE */
    })])]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/TaskItem.vue?vue&type=template&id=20e25fcc":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/TaskItem.vue?vue&type=template&id=20e25fcc ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");


const _hoisted_1 = {
  class: "d-flex mb-2"
};
const _hoisted_2 = {
  class: "fs-15 mb-0 flex-grow-1 text-truncate"
};
const _hoisted_3 = {
  class: "dropdown"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  class: "dropdown-menu",
  "aria-labelledby": "dropdownMenuLink1"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-edit-2-line align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-line align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_9 = {
  class: "text-muted"
};
const _hoisted_10 = ["hidden", "id", "src"];
const _hoisted_11 = {
  class: "mb-3"
};
const _hoisted_12 = {
  class: "d-flex mb-1"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "text-muted mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-secondary"
}, "0%"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" of 100%")])], -1 /* HOISTED */);
const _hoisted_14 = {
  class: "flex-shrink-0"
};
const _hoisted_15 = {
  class: "text-muted"
};
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "progress rounded-3 progress-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "progress-bar bg-danger",
  role: "progressbar",
  style: {
    "width": "0%"
  },
  "aria-valuenow": "0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
})], -1 /* HOISTED */);
const _hoisted_17 = {
  class: "d-flex align-items-center"
};
const _hoisted_18 = {
  class: "flex-grow-1"
};
const _hoisted_19 = {
  class: "flex-shrink-0"
};
const _hoisted_20 = {
  class: "avatar-group"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "rounded-circle avatar-xxs"
}, null, -1 /* HOISTED */);
const _hoisted_22 = {
  class: "d-flex"
};
const _hoisted_23 = {
  class: "flex-grow-1"
};
const _hoisted_24 = {
  class: "text-muted mb-0"
};
const _hoisted_25 = {
  class: "flex-shrink-0"
};
const _hoisted_26 = {
  class: "link-inline mb-0"
};
const _hoisted_27 = {
  class: "list-inline-item"
};
const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-line align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_29 = {
  class: "list-inline-item"
};
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-question-answer-line align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_31 = {
  class: "list-inline-item"
};
const _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-attachment-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_33 = {
  class: "mt-2 text-center"
};
const _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mt-4 pt-2 fs-15 mx-4 mx-sm-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Are you sure ?"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mx-4 mb-0"
}, "Are you sure you want to remove this tasks ?")], -1 /* HOISTED */);
const _hoisted_35 = {
  class: "d-flex gap-2 justify-content-center mt-4 mb-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card_footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-footer");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_lottie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lottie");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  const _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
    "no-body": "",
    class: "tasks-box",
    id: $props.item.Id
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: `/apps/tasks-details/${$props.item.Id}`,
        class: "d-block text-reset"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.Name), 1 /* TEXT */)]),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-muted",
        id: "dropdownMenuLink1",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_4]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        class: "dropdown-item",
        to: "/apps/tasks-details"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View ")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        class: "dropdown-item",
        onClick: _cache[0] || (_cache[0] = $event => $data.modalShow3 = !$data.modalShow3)
      }, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.Description__c), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        hidden: $data.isImageHidden,
        id: this.getImageUrl(this.item.attachments),
        src: $data.imageUrl,
        alt: "Attachment",
        class: "tasks-img rounded"
      }, null, 8 /* PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.date), 1 /* TEXT */)])]), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.tags, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_badge, {
          variant: "soft-primary",
          class: "badge-soft-primary me-1",
          key: index
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.Feature__r.Name), 1 /* TEXT */)]),

          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */);
      }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.teamMembers, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
          href: "javascript: void(0);",
          key: index,
          class: "avatar-group-item",
          title: item.name
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_21]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title"])), [[_directive_b_tooltip, void 0, void 0, {
          hover: true
        }]]);
      }), 128 /* KEYED_FRAGMENT */))])])])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_footer, {
      class: "border-top-dashed"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0)",
        class: "text-muted"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 04")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0)",
        class: "text-muted"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 19 ")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0)",
        class: "text-muted"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 02")]),
        _: 1 /* STABLE */
      })])])])])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["id"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.modalShow3,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.modalShow3 = $event),
    id: "deleteTask",
    "modal-class": "zoomIn",
    "hide-footer": "",
    class: "v-modal-custom",
    centered: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lottie, {
      class: "avatar-xl",
      colors: "primary:#f7b84b,secondary:#f7666e",
      options: $data.defaultOptions,
      height: 100,
      width: 100
    }, null, 8 /* PROPS */, ["options"]), _hoisted_34]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      type: "button",
      variant: "light",
      class: "w-sm",
      "data-bs-dismiss": "modal"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close")]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      type: "button",
      variant: "danger",
      class: "w-sm",
      id: "delete-record",
      onClick: _cache[1] || (_cache[1] = $event => $options.deleteTask($props.item.Id))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Yes, Delete It!")]),
      _: 1 /* STABLE */
    })])]),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=template&id=021f902b":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=template&id=021f902b ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");


const _hoisted_1 = {
  class: "hstack gap-2"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-add-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "search-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control search",
  placeholder: "Search for project, tasks..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-search-line search-icon"
})], -1 /* HOISTED */);
const _hoisted_4 = {
  class: "col-auto ms-sm-auto"
};
const _hoisted_5 = {
  class: "avatar-group",
  id: "newMembar"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "rounded-circle avatar-xs"
}, null, -1 /* HOISTED */);
const _hoisted_7 = {
  class: "tasks-board mb-3",
  id: "kanbanboard"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "firstnameInput",
  class: "form-label"
}, "First Name", -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "lastnameInput",
  class: "form-label"
}, "Last Name", -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "emailInput",
  class: "form-label"
}, "Email ID", -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "submissionidInput",
  class: "form-label"
}, "Submission ID", -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "number",
  class: "form-control",
  id: "submissionidInput",
  placeholder: "Submission ID"
}, null, -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "profileimgInput",
  class: "form-label"
}, "Profile Images", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-control",
  type: "file",
  id: "profileimgInput"
}, null, -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "designationInput",
  class: "form-label"
}, "Designation", -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "designationInput",
  placeholder: "Designation"
}, null, -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "titleInput",
  class: "form-label"
}, "Title", -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "titleInput",
  placeholder: "Title"
}, null, -1 /* HOISTED */);
const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "numberInput",
  class: "form-label"
}, "Phone Number", -1 /* HOISTED */);
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "numberInput",
  placeholder: "Phone number"
}, null, -1 /* HOISTED */);
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "joiningdateInput",
  class: "form-label"
}, "Joining Date", -1 /* HOISTED */);
const _hoisted_22 = {
  class: "modal-footer v-modal-footer"
};
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-close-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "boardName",
  class: "form-label"
}, "Board Name", -1 /* HOISTED */);
const _hoisted_25 = {
  class: "mt-4"
};
const _hoisted_26 = {
  class: "hstack gap-2 justify-content-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_Listkanban = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Listkanban");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  const _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
    "no-body": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        class: "g-2"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "auto"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
            variant: "primary",
            onClick: _cache[0] || (_cache[0] = $event => $data.modalShow1 = !$data.modalShow1)
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Board")]),
            _: 1 /* STABLE */
          })])]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "3",
          class: "col-auto"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "3",
          class: "col-auto"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
            modelValue: $data.tagValue,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.tagValue = $event),
            options: this.tags
          }, null, 8 /* PROPS */, ["modelValue", "options"])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.teamMembers, teamMember => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: teamMember.Id
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
            href: "javascript: void(0);",
            class: "avatar-group-item",
            title: teamMember.User__r.Name
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title"])), [[_directive_b_tooltip, void 0, void 0, {
            hover: true
          }]])]);
        }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"avatar-group-item\" @click=\"modalShow = !modalShow\">\n                            <div class=\"avatar-xs\">\n                                <div class=\"avatar-title bg-secondary rounded-circle\">\n                                    +\n                                </div>\n                            </div>\n                        </div> ")])])]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.cc, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Listkanban, {
      key: `listkanban-${index}-${$data.reloadKey}-${$data.tagValue}`,
      item: item,
      onRegisterTask: $options.handleRegisterTask,
      ref_for: true,
      ref: `taskListComponent-${item.Id}`,
      onReloadList: $options.handleReloadList,
      id: this.$route.params.id,
      tagValue: $data.tagValue
    }, null, 8 /* PROPS */, ["item", "onRegisterTask", "onReloadList", "id", "tagValue"]);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.modalShow,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.modalShow = $event),
    "header-class": "p-3 bg-soft-warning",
    "content-class": "border-0",
    "hide-footer": "",
    title: "Add Member",
    class: "v-modal-custom"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
      onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.addMember, ["prevent"])
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        class: "g-3"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "6"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            class: "form-control",
            id: "firstnameInput",
            placeholder: "Enter firstname",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.firstnameInput = $event)
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.firstnameInput]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "6"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            class: "form-control",
            id: "lastnameInput",
            placeholder: "Enter lastname",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.lastnameInput = $event)
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.lastnameInput]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "email",
            class: "form-control",
            id: "emailInput",
            placeholder: "Email",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.emailInput = $event)
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.emailInput]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11, _hoisted_12]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13, _hoisted_14]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_15, _hoisted_16]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_17, _hoisted_18]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "6"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_19, _hoisted_20]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "6"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
            modelValue: $data.date,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.date = $event),
            config: $data.config,
            placeholder: "Select date",
            class: "form-control"
          }, null, 8 /* PROPS */, ["modelValue", "config"])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "light",
          onClick: _cache[6] || (_cache[6] = $event => $data.modalShow = false)
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "submit",
          variant: "success",
          id: "addNewMember"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Member")]),
          _: 1 /* STABLE */
        })])]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.modalShow1,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => $data.modalShow1 = $event),
    "header-class": "p-3 bg-soft-info",
    "content-class": "border-0",
    "hide-footer": "",
    title: "Add Board",
    class: "v-modal-custom",
    centered: ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
      onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.addBoard, ["prevent"])
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          lg: "12"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            class: "form-control",
            id: "boardName",
            placeholder: "Enter board name",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $data.boardName = $event)
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.boardName]])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "light",
          onClick: _cache[9] || (_cache[9] = $event => $data.modalShow1 = false)
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "submit",
          variant: "success",
          id: "addNewBoard"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Board")]),
          _: 1 /* STABLE */
        })])])]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./src/state/helpers.js":
/*!******************************!*\
  !*** ./src/state/helpers.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authComputed": function() { return /* binding */ authComputed; },
/* harmony export */   "authFackMethods": function() { return /* binding */ authFackMethods; },
/* harmony export */   "authMethods": function() { return /* binding */ authMethods; },
/* harmony export */   "layoutComputed": function() { return /* binding */ layoutComputed; },
/* harmony export */   "layoutMethods": function() { return /* binding */ layoutMethods; },
/* harmony export */   "notificationMethods": function() { return /* binding */ notificationMethods; },
/* harmony export */   "todoComputed": function() { return /* binding */ todoComputed; },
/* harmony export */   "todoMethods": function() { return /* binding */ todoMethods; }
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");

const authComputed = {
  ...(0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('auth', {
    currentUser: state => state.currentUser
  }),
  ...(0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('auth', ['loggedIn'])
};
const layoutComputed = {
  ...(0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('layout', {
    layoutType: state => state.layoutType,
    sidebarSize: state => state.sidebarSize,
    layoutWidth: state => state.layoutWidth,
    topbar: state => state.topbar,
    mode: state => state.mode,
    position: state => state.position,
    sidebarView: state => state.sidebarView,
    sidebarColor: state => state.sidebarColor,
    sidebarImage: state => state.sidebarImage,
    visibility: state => state.visibility
  })
};
const authMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('auth', ['logIn', 'logOut', 'register', 'resetPassword']);
const layoutMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('layout', ['changeLayoutType', 'changeLayoutWidth', 'changeSidebarSize', 'changeTopbar', 'changeMode', 'changePosition', 'changeSidebarView', 'changeSidebarColor', 'changeSidebarImage', 'changePreloader', 'changeVisibility']);
const authFackMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('authfack', ['login', 'registeruser', 'logout']);
const notificationMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('notification', ['success', 'error', 'clear']);
const todoComputed = {
  ...(0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('todo', {
    todos: state => state.todos
  })
};
const todoMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('todo', ['fetchTodos']);

/***/ }),

/***/ "./src/views/apps/data.js":
/*!********************************!*\
  !*** ./src/views/apps/data.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatData": function() { return /* binding */ chatData; },
/* harmony export */   "chatMessagesData": function() { return /* binding */ chatMessagesData; }
/* harmony export */ });
const chatData = [{
  id: 1,
  image: __webpack_require__(/*! @/assets/images/users/avatar-2.jpg */ "./src/assets/images/users/avatar-2.jpg"),
  name: 'Steven Franklin',
  message: 'Hey! there I\'m available',
  time: '',
  color: 'secondary'
}, {
  id: 2,
  image: __webpack_require__(/*! @/assets/images/users/avatar-3.jpg */ "./src/assets/images/users/avatar-3.jpg"),
  name: 'Adam Miller',
  message: 'I\'ve finished it! See you so',
  time: '5',
  color: 'success'
}, {
  id: 3,
  name: 'Keith Gonzales',
  message: 'This theme is awesome!',
  time: '2',
  color: 'success'
}, {
  id: 4,
  image: __webpack_require__(/*! @/assets/images/users/avatar-4.jpg */ "./src/assets/images/users/avatar-4.jpg"),
  name: 'Jose Vickery',
  message: 'Nice to meet you',
  time: '',
  color: 'warning'
}, {
  id: 5,
  name: 'Mitchel Givens',
  message: 'Hey! there I\'m available',
  time: '',
  color: 'secondary'
}, {
  id: 6,
  image: __webpack_require__(/*! @/assets/images/users/avatar-4.jpg */ "./src/assets/images/users/avatar-4.jpg"),
  name: 'Stephen Hadley',
  message: 'I\'ve finished it! See you so',
  time: '7',
  color: 'success'
}, {
  id: 7,
  image: __webpack_require__(/*! @/assets/images/users/avatar-2.jpg */ "./src/assets/images/users/avatar-2.jpg"),
  name: 'Leord Joseph',
  message: 'This theme is awesome!',
  time: '',
  color: 'success'
}];
const chatMessagesData = [{
  align: 'right',
  name: 'Henry Wells',
  message: 'Hi, How are you? What about our next meeting?',
  time: '10:02'
}];

// const unassigned= [
//     {
//         title: "Profile Page Satructure",
//         description: "Profile Page means a web page accessible to the public or to guests.",
//         features: ["Admin"],
//         users: [require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-5.jpg")],
//         id: "#VL2436",
//         watch: "04",
//         message: "19",
//         file: "2"
//     },
//     {
//         title: "Velzon - Admin Layout Design",
//         description: "The dashboard is the front page of the Administration UI.",
//         features: ["Layout", "Admin", "Dashboard"],
//         users: [require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-1.jpg")],
//         id: "#VL2436",
//         watch: "04",
//         message: "19",
//         file: "2",
//         date: " 07 Jan, 2022"
//     }
// ];
// const todo= [
//     {
//         title: "Admin Layout Design",
//         description: "Landing page template with clean, minimal and modern design.",
//         features: ["Design", "Wensite"],
//         users: [require("@/assets/images/users/avatar-10.jpg"), require("@/assets/images/users/avatar-3.jpg")],
//         id: "#VL2436",
//         watch: "13",
//         message: "52",
//         file: "17",
//         date: " 07 Jan, 2022"
//     },
//     {
//         title: "Marketing & Sales",
//         description: "Sales and marketing are two business functions within an organization.",
//         features: ["Marketing", "Business"],
//         users: [require("@/assets/images/users/avatar-9.jpg"), require("@/assets/images/users/avatar-8.jpg")],
//         id: "#VL2436",
//         watch: "24",
//         message: "10",
//         file: "10",
//         date: " 27 Dec, 2021"
//     },
// ];
// const inprogress= [
//     {
//         title: "Brand Logo Design ",
//         description: "BrandCrowd's brand logo maker allows you to generate and customize stand-out brand logos in minutes.",
//         features: ["Logo", "Design", "UI/UX"],
//         users: [require("@/assets/images/users/avatar-10.jpg"), require("@/assets/images/users/avatar-3.jpg")],
//         id: "#VL2436",
//         watch: "24",
//         message: "10",
//         file: "10",
//         date: " 22 Dec, 2022"
//     },
//     {
//         title: "Change Old App Icon",
//         description: "Change app icons on Android: How do you change the look of your apps.",
//         features: ["Marketing", "Business"],
//         users: [require("@/assets/images/users/avatar-9.jpg"), require("@/assets/images/users/avatar-8.jpg")],
//         id: "#VL2436",
//         watch: "64",
//         message: "35",
//         file: "23",
//         date: " 24 Oct, 2021"
//     },
// ];
// const reviews= [
//     {
//         title: "Product Features Analysis",
//         description: "An essential part of strategic planning is running a product feature analysis.",
//         features: ["Project", "Analysis"],
//         users: [require("@/assets/images/users/avatar-5.jpg"), require("@/assets/images/users/avatar-6.jpg")],
//         id: "#VL2436",
//         watch: "14",
//         message: "31",
//         file: "07",
//         date: " 05 Jan, 2022"
//     },
//     {
//         title: "Create a Graph of Sketch",
//         description: "To make a pie chart with equal slices create a perfect circle by selecting an Oval Tool.",
//         features: ["Sketch", "Marketing", "Design"],
//         users: [require("@/assets/images/users/avatar-4.jpg"), require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-2.jpg"), require("@/assets/images/users/avatar-1.jpg")],
//         id: "#VL2436",
//         watch: "64",
//         message: "35",
//         file: "23",
//         date: " 24 Oct, 2021"
//     },
// ];
// const completed= [
//     {
//         title: "Create a Blog Template UI",
//         description: "Landing page template with clean, minimal and modern design.",
//         features: ["Design", "Website"],
//         users: [require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg")],
//         id: "#VL2451",
//         watch: "24",
//         message: "10",
//         file: "10",
//         date: " 05 Jan, 2022"
//     },
// ];
// const newData= [
//     {
//         title: "Banner Design for FB & Twitter",
//         image: require("@/assets/images/small/img-4.jpg"),
//         features: ["UI/UX", "Graphic"],
//         users: [require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg")],
//         id: "#VL2451",
//         watch: "24",
//         message: "10",
//         file: "10",
//         date: " 05 Jan, 2022"
//     },
// ];

// const projectListWidgets3= [
//     {
//       id: 1,
//       img: require("@/assets/images/brands/Salesforce.png"),
//       label: "Kanban Board",
//       status: "Inprogess",
//       statusClass: "warning",
//       deadline: "08 Dec, 2021",
//       number: "17/20",
//       progressBar: "71%",
//       subItem: [{
//         id: 1,
//         imgNumber: "D",
//         bgColor: "danger"
//       },
//       {
//         id: 2,
//         imgTeam: require("@/assets/images/users/avatar-5.jpg")
//       },
//       {
//         id: 3,
//         imgNumber: "+"
//       },
//       ],
//     },

//     {
//       id: 5,
//       img: require("@/assets/images/brands/Salesforce.png"),
//       label: "Multipurpose landing template",
//       status: "Completed",
//       statusClass: "success",
//       deadline: "18 Sep, 2021",
//       number: "25/32",
//       progressBar: "75%",
//       subItem: [{
//         id: 1,
//         imgNumber: "D",
//         bgColor: "danger"
//       },
//       {
//         id: 2,
//         imgTeam: require("@/assets/images/users/avatar-5.jpg")
//       },
//       {
//         id: 3,
//         imgTeam: require("@/assets/images/users/avatar-6.jpg")
//       },
//       {
//         id: 4,
//         imgNumber: "+"
//       },
//       ],
//     },
// ];

// const task=[
//     {
//         title: "Profile Page Satructure",
//         description: "Profile Page means a web page accessible to the public or to guests.",
//         features: ["Admin"],
//         users: [require("@/assets/images/users/Trailblazer_avatar.png"), require("@/assets/images/users/Trailblazer_avatar.png")],
//         id: "#VL2436",
//         watch: "04",
//         message: "19",
//         file: "2"
//     },
//     {
//         title: "Velzon - Admin Layout Design",
//         description: "The dashboard is the front page of the Administration UI.",
//         features: ["Layout", "Admin", "Dashboard"],
//         users: [require("@/assets/images/users/Trailblazer_avatar.png"), require("@/assets/images/users/Trailblazer_avatar.png"), require("@/assets/images/users/Trailblazer_avatar.png")],
//         id: "#VL2436",
//         watch: "04",
//         message: "19",
//         file: "2",
//         date: " 07 Jan, 2022"
//     }
// ]



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-469af010] {\n  font-size: 20px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_dragula_dist_dragula_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/dragula/dist/dragula.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/dragula/dist/dragula.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_dragula_dist_dragula_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/HelloWorld.vue":
/*!***************************************!*\
  !*** ./src/components/HelloWorld.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_469af010_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=template&id=469af010&scoped=true */ "./src/components/HelloWorld.vue?vue&type=template&id=469af010&scoped=true");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=script&lang=js */ "./src/components/HelloWorld.vue?vue&type=script&lang=js");
/* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_469af010_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css */ "./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HelloWorld_vue_vue_type_template_id_469af010_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-469af010"],['__file',"src/components/HelloWorld.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/footer.vue":
/*!***********************************!*\
  !*** ./src/components/footer.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_6c4d8baa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=6c4d8baa */ "./src/components/footer.vue?vue&type=template&id=6c4d8baa");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_footer_vue_vue_type_template_id_6c4d8baa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/menu.vue":
/*!*********************************!*\
  !*** ./src/components/menu.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_a380d422__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=a380d422 */ "./src/components/menu.vue?vue&type=template&id=a380d422");
/* harmony import */ var _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js */ "./src/components/menu.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_menu_vue_vue_type_template_id_a380d422__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/menu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/nav-bar.vue":
/*!************************************!*\
  !*** ./src/components/nav-bar.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_vue_vue_type_template_id_42c37e09__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=template&id=42c37e09 */ "./src/components/nav-bar.vue?vue&type=template&id=42c37e09");
/* harmony import */ var _nav_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=script&lang=js */ "./src/components/nav-bar.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_nav_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_nav_bar_vue_vue_type_template_id_42c37e09__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/nav-bar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/page-header.vue":
/*!****************************************!*\
  !*** ./src/components/page-header.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_vue_vue_type_template_id_96d6f7aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.vue?vue&type=template&id=96d6f7aa */ "./src/components/page-header.vue?vue&type=template&id=96d6f7aa");
/* harmony import */ var _page_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.vue?vue&type=script&lang=js */ "./src/components/page-header.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_page_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_page_header_vue_vue_type_template_id_96d6f7aa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/page-header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/right-bar.vue":
/*!**************************************!*\
  !*** ./src/components/right-bar.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_bar_vue_vue_type_template_id_f34c67fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-bar.vue?vue&type=template&id=f34c67fc */ "./src/components/right-bar.vue?vue&type=template&id=f34c67fc");
/* harmony import */ var _right_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-bar.vue?vue&type=script&lang=js */ "./src/components/right-bar.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_right_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_right_bar_vue_vue_type_template_id_f34c67fc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/right-bar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/widgets/lottie.vue":
/*!*******************************************!*\
  !*** ./src/components/widgets/lottie.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lottie_vue_vue_type_template_id_64edace2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lottie.vue?vue&type=template&id=64edace2 */ "./src/components/widgets/lottie.vue?vue&type=template&id=64edace2");
/* harmony import */ var _lottie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lottie.vue?vue&type=script&lang=js */ "./src/components/widgets/lottie.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_lottie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_lottie_vue_vue_type_template_id_64edace2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/widgets/lottie.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/layouts/horizontal.vue":
/*!************************************!*\
  !*** ./src/layouts/horizontal.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _horizontal_vue_vue_type_template_id_795debfa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal.vue?vue&type=template&id=795debfa */ "./src/layouts/horizontal.vue?vue&type=template&id=795debfa");
/* harmony import */ var _horizontal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal.vue?vue&type=script&lang=js */ "./src/layouts/horizontal.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_horizontal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_horizontal_vue_vue_type_template_id_795debfa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/layouts/horizontal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/layouts/main.vue":
/*!******************************!*\
  !*** ./src/layouts/main.vue ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_5f3af258__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=5f3af258 */ "./src/layouts/main.vue?vue&type=template&id=5f3af258");
/* harmony import */ var _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js */ "./src/layouts/main.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_main_vue_vue_type_template_id_5f3af258__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/layouts/main.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/layouts/twocolumn.vue":
/*!***********************************!*\
  !*** ./src/layouts/twocolumn.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _twocolumn_vue_vue_type_template_id_77647c13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twocolumn.vue?vue&type=template&id=77647c13 */ "./src/layouts/twocolumn.vue?vue&type=template&id=77647c13");
/* harmony import */ var _twocolumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twocolumn.vue?vue&type=script&lang=js */ "./src/layouts/twocolumn.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_twocolumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_twocolumn_vue_vue_type_template_id_77647c13__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/layouts/twocolumn.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/layouts/vertical.vue":
/*!**********************************!*\
  !*** ./src/layouts/vertical.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vertical_vue_vue_type_template_id_14729215__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical.vue?vue&type=template&id=14729215 */ "./src/layouts/vertical.vue?vue&type=template&id=14729215");
/* harmony import */ var _vertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical.vue?vue&type=script&lang=js */ "./src/layouts/vertical.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_vertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_vertical_vue_vue_type_template_id_14729215__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/layouts/vertical.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/tasks/Listkanban.vue":
/*!*********************************************!*\
  !*** ./src/views/apps/tasks/Listkanban.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listkanban_vue_vue_type_template_id_3b271169__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listkanban.vue?vue&type=template&id=3b271169 */ "./src/views/apps/tasks/Listkanban.vue?vue&type=template&id=3b271169");
/* harmony import */ var _Listkanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listkanban.vue?vue&type=script&lang=js */ "./src/views/apps/tasks/Listkanban.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Listkanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Listkanban_vue_vue_type_template_id_3b271169__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/tasks/Listkanban.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/tasks/TaskItem.vue":
/*!*******************************************!*\
  !*** ./src/views/apps/tasks/TaskItem.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskItem_vue_vue_type_template_id_20e25fcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskItem.vue?vue&type=template&id=20e25fcc */ "./src/views/apps/tasks/TaskItem.vue?vue&type=template&id=20e25fcc");
/* harmony import */ var _TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskItem.vue?vue&type=script&lang=js */ "./src/views/apps/tasks/TaskItem.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TaskItem_vue_vue_type_template_id_20e25fcc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/tasks/TaskItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/tasks/kanban.vue":
/*!*****************************************!*\
  !*** ./src/views/apps/tasks/kanban.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kanban_vue_vue_type_template_id_021f902b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kanban.vue?vue&type=template&id=021f902b */ "./src/views/apps/tasks/kanban.vue?vue&type=template&id=021f902b");
/* harmony import */ var _kanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kanban.vue?vue&type=script&lang=js */ "./src/views/apps/tasks/kanban.vue?vue&type=script&lang=js");
/* harmony import */ var _kanban_vue_vue_type_style_index_0_id_021f902b_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kanban.vue?vue&type=style&index=0&id=021f902b&lang=css */ "./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_kanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_kanban_vue_vue_type_template_id_021f902b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/tasks/kanban.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/HelloWorld.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/HelloWorld.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HelloWorld.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/menu.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/components/menu.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./menu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/nav-bar.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/nav-bar.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_nav_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_nav_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nav-bar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav-bar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/page-header.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/page-header.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page-header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/right-bar.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/right-bar.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_right_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_right_bar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./right-bar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/right-bar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/widgets/lottie.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/widgets/lottie.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lottie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lottie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lottie.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/lottie.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/layouts/horizontal.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/layouts/horizontal.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_horizontal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_horizontal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./horizontal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/horizontal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/layouts/main.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./src/layouts/main.vue?vue&type=script&lang=js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./main.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/main.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/layouts/twocolumn.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/layouts/twocolumn.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_twocolumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_twocolumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./twocolumn.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/twocolumn.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/layouts/vertical.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/layouts/vertical.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vertical.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/vertical.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/tasks/Listkanban.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/apps/tasks/Listkanban.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Listkanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Listkanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Listkanban.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/Listkanban.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/tasks/TaskItem.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/apps/tasks/TaskItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TaskItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/TaskItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/tasks/kanban.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/views/apps/tasks/kanban.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./kanban.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/HelloWorld.vue?vue&type=template&id=469af010&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/HelloWorld.vue?vue&type=template&id=469af010&scoped=true ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_template_id_469af010_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_template_id_469af010_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HelloWorld.vue?vue&type=template&id=469af010&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=template&id=469af010&scoped=true");


/***/ }),

/***/ "./src/components/footer.vue?vue&type=template&id=6c4d8baa":
/*!*****************************************************************!*\
  !*** ./src/components/footer.vue?vue&type=template&id=6c4d8baa ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_template_id_6c4d8baa__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_footer_vue_vue_type_template_id_6c4d8baa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./footer.vue?vue&type=template&id=6c4d8baa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/footer.vue?vue&type=template&id=6c4d8baa");


/***/ }),

/***/ "./src/components/menu.vue?vue&type=template&id=a380d422":
/*!***************************************************************!*\
  !*** ./src/components/menu.vue?vue&type=template&id=a380d422 ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_menu_vue_vue_type_template_id_a380d422__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_menu_vue_vue_type_template_id_a380d422__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./menu.vue?vue&type=template&id=a380d422 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/menu.vue?vue&type=template&id=a380d422");


/***/ }),

/***/ "./src/components/nav-bar.vue?vue&type=template&id=42c37e09":
/*!******************************************************************!*\
  !*** ./src/components/nav-bar.vue?vue&type=template&id=42c37e09 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_nav_bar_vue_vue_type_template_id_42c37e09__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_nav_bar_vue_vue_type_template_id_42c37e09__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nav-bar.vue?vue&type=template&id=42c37e09 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav-bar.vue?vue&type=template&id=42c37e09");


/***/ }),

/***/ "./src/components/page-header.vue?vue&type=template&id=96d6f7aa":
/*!**********************************************************************!*\
  !*** ./src/components/page-header.vue?vue&type=template&id=96d6f7aa ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_header_vue_vue_type_template_id_96d6f7aa__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_page_header_vue_vue_type_template_id_96d6f7aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./page-header.vue?vue&type=template&id=96d6f7aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-header.vue?vue&type=template&id=96d6f7aa");


/***/ }),

/***/ "./src/components/right-bar.vue?vue&type=template&id=f34c67fc":
/*!********************************************************************!*\
  !*** ./src/components/right-bar.vue?vue&type=template&id=f34c67fc ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_right_bar_vue_vue_type_template_id_f34c67fc__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_right_bar_vue_vue_type_template_id_f34c67fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./right-bar.vue?vue&type=template&id=f34c67fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/right-bar.vue?vue&type=template&id=f34c67fc");


/***/ }),

/***/ "./src/components/widgets/lottie.vue?vue&type=template&id=64edace2":
/*!*************************************************************************!*\
  !*** ./src/components/widgets/lottie.vue?vue&type=template&id=64edace2 ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lottie_vue_vue_type_template_id_64edace2__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_lottie_vue_vue_type_template_id_64edace2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./lottie.vue?vue&type=template&id=64edace2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/lottie.vue?vue&type=template&id=64edace2");


/***/ }),

/***/ "./src/layouts/horizontal.vue?vue&type=template&id=795debfa":
/*!******************************************************************!*\
  !*** ./src/layouts/horizontal.vue?vue&type=template&id=795debfa ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_horizontal_vue_vue_type_template_id_795debfa__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_horizontal_vue_vue_type_template_id_795debfa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./horizontal.vue?vue&type=template&id=795debfa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/horizontal.vue?vue&type=template&id=795debfa");


/***/ }),

/***/ "./src/layouts/main.vue?vue&type=template&id=5f3af258":
/*!************************************************************!*\
  !*** ./src/layouts/main.vue?vue&type=template&id=5f3af258 ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_main_vue_vue_type_template_id_5f3af258__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_main_vue_vue_type_template_id_5f3af258__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./main.vue?vue&type=template&id=5f3af258 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/main.vue?vue&type=template&id=5f3af258");


/***/ }),

/***/ "./src/layouts/twocolumn.vue?vue&type=template&id=77647c13":
/*!*****************************************************************!*\
  !*** ./src/layouts/twocolumn.vue?vue&type=template&id=77647c13 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_twocolumn_vue_vue_type_template_id_77647c13__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_twocolumn_vue_vue_type_template_id_77647c13__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./twocolumn.vue?vue&type=template&id=77647c13 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/twocolumn.vue?vue&type=template&id=77647c13");


/***/ }),

/***/ "./src/layouts/vertical.vue?vue&type=template&id=14729215":
/*!****************************************************************!*\
  !*** ./src/layouts/vertical.vue?vue&type=template&id=14729215 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vertical_vue_vue_type_template_id_14729215__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vertical_vue_vue_type_template_id_14729215__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vertical.vue?vue&type=template&id=14729215 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/layouts/vertical.vue?vue&type=template&id=14729215");


/***/ }),

/***/ "./src/views/apps/tasks/Listkanban.vue?vue&type=template&id=3b271169":
/*!***************************************************************************!*\
  !*** ./src/views/apps/tasks/Listkanban.vue?vue&type=template&id=3b271169 ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Listkanban_vue_vue_type_template_id_3b271169__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Listkanban_vue_vue_type_template_id_3b271169__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Listkanban.vue?vue&type=template&id=3b271169 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/Listkanban.vue?vue&type=template&id=3b271169");


/***/ }),

/***/ "./src/views/apps/tasks/TaskItem.vue?vue&type=template&id=20e25fcc":
/*!*************************************************************************!*\
  !*** ./src/views/apps/tasks/TaskItem.vue?vue&type=template&id=20e25fcc ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_template_id_20e25fcc__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TaskItem_vue_vue_type_template_id_20e25fcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TaskItem.vue?vue&type=template&id=20e25fcc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/TaskItem.vue?vue&type=template&id=20e25fcc");


/***/ }),

/***/ "./src/views/apps/tasks/kanban.vue?vue&type=template&id=021f902b":
/*!***********************************************************************!*\
  !*** ./src/views/apps/tasks/kanban.vue?vue&type=template&id=021f902b ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_template_id_021f902b__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_template_id_021f902b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./kanban.vue?vue&type=template&id=021f902b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=template&id=021f902b");


/***/ }),

/***/ "./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_style_index_0_id_469af010_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_style_index_0_id_469af010_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_style_index_0_id_469af010_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_style_index_0_id_469af010_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HelloWorld_vue_vue_type_style_index_0_id_469af010_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css":
/*!*************************************************************************************!*\
  !*** ./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_style_index_0_id_021f902b_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./kanban.vue?vue&type=style&index=0&id=021f902b&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_style_index_0_id_021f902b_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_style_index_0_id_021f902b_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_style_index_0_id_021f902b_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_kanban_vue_vue_type_style_index_0_id_021f902b_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=469af010&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("17208f61", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./kanban.vue?vue&type=style&index=0&id=021f902b&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/kanban.vue?vue&type=style&index=0&id=021f902b&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("3482e646", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z%27/%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z%27/%3E%3C/svg%3E":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z%27/%3E%3C/svg%3E ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 320 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 512 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z%27/%3E%3C/svg%3E":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 512 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z%27/%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 512 512%27 fill=%27currentColor%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "./src/assets/images/flags/ae.svg":
/*!****************************************!*\
  !*** ./src/assets/images/flags/ae.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/ae.0f60a447.svg";

/***/ }),

/***/ "./src/assets/images/flags/china.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/flags/china.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/china.0317e07e.svg";

/***/ }),

/***/ "./src/assets/images/flags/french.svg":
/*!********************************************!*\
  !*** ./src/assets/images/flags/french.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/french.22f3f1fe.svg";

/***/ }),

/***/ "./src/assets/images/flags/germany.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/flags/germany.svg ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/germany.fd8aab25.svg";

/***/ }),

/***/ "./src/assets/images/flags/italy.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/flags/italy.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/italy.d10016e3.svg";

/***/ }),

/***/ "./src/assets/images/flags/russia.svg":
/*!********************************************!*\
  !*** ./src/assets/images/flags/russia.svg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/russia.fbc9712a.svg";

/***/ }),

/***/ "./src/assets/images/flags/spain.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/flags/spain.svg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/spain.071722e8.svg";

/***/ }),

/***/ "./src/assets/images/svg/bell.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/bell.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/bell.d26124af.svg";

/***/ }),

/***/ "./src/assets/images/INSANE.png":
/*!**************************************!*\
  !*** ./src/assets/images/INSANE.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/INSANE.aab24046.png";

/***/ }),

/***/ "./src/assets/images/brands/Salesforce.png":
/*!*************************************************!*\
  !*** ./src/assets/images/brands/Salesforce.png ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/assets/images/logo-dark.png":
/*!*****************************************!*\
  !*** ./src/assets/images/logo-dark.png ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAAgCAYAAABKMQnqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVGNjYyN0ZBMTlDMjExRUM4QUVDQzdEMDg1RkNDOERDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVGNjYyN0ZCMTlDMjExRUM4QUVDQzdEMDg1RkNDOERDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUY2NjI3RjgxOUMyMTFFQzhBRUNDN0QwODVGQ0M4REMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUY2NjI3RjkxOUMyMTFFQzhBRUNDN0QwODVGQ0M4REMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4dfGK0AAAL60lEQVR42tRcCXgV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";

/***/ }),

/***/ "./src/assets/images/logo-light.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo-light.png ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAAgCAYAAABKMQnqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyNTU4MUZFMTlDMjExRUM5MTU3ODNDMzcyQzcwRUI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNTU4MUZGMTlDMjExRUM5MTU3ODNDMzcyQzcwRUI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI1NTgxRkMxOUMyMTFFQzkxNTc4M0MzNzJDNzBFQjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI1NTgxRkQxOUMyMTFFQzkxNTc4M0MzNzJDNzBFQjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Bb6J6AAAK/UlEQVR42txcC3QW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";

/***/ }),

/***/ "./src/assets/images/logo-sm.png":
/*!***************************************!*\
  !*** ./src/assets/images/logo-sm.png ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFNTY1RjFDMEJEQzExRUM5QjY4OTczMzRBQUM0MzhFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFNTY1RjFEMEJEQzExRUM5QjY4OTczMzRBQUM0MzhFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkU1NjVGMUEwQkRDMTFFQzlCNjg5NzMzNEFBQzQzOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkU1NjVGMUIwQkRDMTFFQzlCNjg5NzMzNEFBQzQzOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6daqnhAAAYqUlEQVR42tRdC7Qd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";

/***/ }),

/***/ "./src/assets/images/profile-bg.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/profile-bg.jpg ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/profile-bg.e58f8b2b.jpg";

/***/ }),

/***/ "./src/assets/images/small/img-4.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/small/img-4.jpg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/img-4.c0c3d991.jpg";

/***/ }),

/***/ "./src/assets/images/small/img-5.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/small/img-5.jpg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/img-5.136ac881.jpg";

/***/ }),

/***/ "./src/assets/images/users/Trailblazer_avatar.png":
/*!********************************************************!*\
  !*** ./src/assets/images/users/Trailblazer_avatar.png ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/Trailblazer_avatar.6ca2bd6b.png";

/***/ }),

/***/ "./src/assets/images/users/avatar-1.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-1.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-1.7e66bd07.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-10.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/users/avatar-10.jpg ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-10.efbb6bf9.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-2.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-2.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-2.0c4e66a9.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-3.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-3.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-3.910af76d.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-4.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-4.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-4.ca97be65.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-5.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-5.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-5.b19b6752.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-6.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-6.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-6.74a373ee.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-7.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-7.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-7.49822f16.jpg";

/***/ }),

/***/ "./src/assets/images/users/avatar-8.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/users/avatar-8.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/avatar-8.6329af45.jpg";

/***/ }),

/***/ "./src/assets/images/users/user-dummy-img.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/users/user-dummy-img.jpg ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/jpeg;base64,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";

/***/ }),

/***/ "./src/components/widgets/gsqxdxog.json":
/*!**********************************************!*\
  !*** ./src/components/widgets/gsqxdxog.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"v":"5.6.10","fr":100,"ip":0,"op":83,"w":500,"h":500,"nm":"185-trash-bin-outline","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"02092020","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-105,15,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"02092020002","np":3,"mn":"ADBE Checkbox Control","ix":1,"en":1,"ef":[{"ty":7,"nm":"Checkbox","mn":"ADBE Checkbox Control-0001","ix":1,"v":{"a":0,"k":0,"ix":1}}]}],"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"lordicon.com Outlines","cl":"com","sr":1,"ks":{"o":{"a":0,"k":20,"ix":11,"x":"var $bm_rt;\\nvar checkbox = thisComp.layer(\'02092020\').effect(\'02092020002\')(\'Checkbox\');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[249.934,481.369,0],"ix":2},"a":{"a":0,"k":[79.934,0.369,0],"ix":1},"s":{"a":0,"k":[265.159,265.159,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],"c":true},"ix":2},"nm":"l","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],"o":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],"v":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],"o":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],"v":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"r","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],"o":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],"v":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],"o":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],"v":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"d","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"i","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"n","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],"c":true},"ix":2},"nm":".","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":".","np":3,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],"c":true},"ix":2},"nm":"m","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"m","np":3,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false}],"ip":4.16666666666667,"op":41.6666666666667,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.070588238537,0.074509806931,0.192156866193,1],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":70,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"NULL","parent":4,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,61,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[450,450,100],"ix":6}},"ao":0,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 10","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.23],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.77],"y":[0]},"t":13,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":29,"s":[4]},{"t":46,"s":[0]}],"ix":10},"p":{"a":0,"k":[60.4,98.535,0],"ix":2},"a":{"a":0,"k":[-4.1,34.035,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":44,"ix":2},"o":{"a":0,"k":-82,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.969,-34.031],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.08,-34.125],[26.879,-33.955]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 3","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-3,-34],"to":[-0.208,-1.583],"ti":[-0.083,2.25]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":13,"s":[-4.25,-43.5],"to":[0.083,-2.25],"ti":[0.125,0.083]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[-2.5,-47.5],"to":[-0.125,-0.083],"ti":[0.083,-2.25]},{"i":{"x":0.23,"y":1},"o":{"x":0.167,"y":0.167},"t":38,"s":[-5,-44],"to":[-0.083,2.25],"ti":[-0.333,-1.667]},{"t":82,"s":[-3,-34]}],"ix":2},"a":{"a":0,"k":[-3,-34],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[-20]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[5]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":38,"s":[16]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":46,"s":[-6]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":60,"s":[3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":71,"s":[-2]},{"t":82,"s":[0]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Cover","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[8.998,-17.844],[8.998,16.802]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-3.982,-17.844],[-3.982,16.802]],"c":false},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-17.02,-17.844],[-17.02,16.802]],"c":false},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[21.974,-33.961],[21.563,-33.959],[-29.781,-34.123],[-30.053,-34.119],[-30.06,-33.937],[-30.104,34.035],[22.119,34.035],[21.982,-33.563]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"Round Corners 1","r":{"a":0,"k":6,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"tm","s":{"a":1,"k":[{"t":0,"s":[23],"h":1},{"t":1,"s":[0],"h":1},{"t":66,"s":[23],"h":1}],"ix":1},"e":{"a":1,"k":[{"t":0,"s":[99.5],"h":1},{"t":1,"s":[100],"h":1},{"t":66,"s":[99.5],"h":1}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":3,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":500,"st":0,"bm":0}],"markers":[{"tm":13,"cm":"2","dr":0},{"tm":64,"cm":"3","dr":0},{"tm":76,"cm":"4","dr":0},{"tm":88,"cm":"5","dr":0}]}');

/***/ }),

/***/ "./src/components/widgets/msoeawqm.json":
/*!**********************************************!*\
  !*** ./src/components/widgets/msoeawqm.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"v":"5.6.10","fr":24,"ip":0,"op":17,"w":500,"h":500,"nm":"19-magnifier-zoom-search-outline","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"02092020","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-105,15,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"02092020002","np":3,"mn":"ADBE Checkbox Control","ix":1,"en":1,"ef":[{"ty":7,"nm":"Checkbox","mn":"ADBE Checkbox Control-0001","ix":1,"v":{"a":0,"k":0,"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"lordicon.com Outlines","cl":"com","sr":1,"ks":{"o":{"a":0,"k":20,"ix":11,"x":"var $bm_rt;\\nvar checkbox = thisComp.layer(\'02092020\').effect(\'02092020002\')(\'Checkbox\');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[249.934,481.369,0],"ix":2},"a":{"a":0,"k":[79.934,0.369,0],"ix":1},"s":{"a":0,"k":[265.159,265.159,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],"c":true},"ix":2},"nm":"l","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],"o":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],"v":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],"o":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],"v":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"r","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],"o":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],"v":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],"o":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],"v":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"d","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"i","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"n","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],"c":true},"ix":2},"nm":".","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":".","np":3,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],"c":true},"ix":2},"nm":"m","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"m","np":3,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":10,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.070588238537,0.074509806931,0.192156866193,1],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":70,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"NULL","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Warstwa 6","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[21.486,21.427],[46.642,46.152]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(6 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Warstwa 7","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-8.526,-8.465,0],"ix":2},"a":{"a":0,"k":[-8.526,-8.465,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.997,-12.997],[12.997,-12.997],[12.997,12.997],[-12.997,12.997]],"o":[[12.997,12.997],[-12.997,12.997],[-12.997,-12.997],[12.997,-12.997]],"v":[[14.753,-32.253],[14.753,14.814],[-32.314,14.814],[-32.314,-32.253]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6.72,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10.56,"s":[51]},{"t":15.36,"s":[52],"h":1},{"t":16.3203125,"s":[0],"h":1}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[14]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6.72,"s":[66]},{"t":15.36,"s":[65.8],"h":1},{"t":16.3203125,"s":[14],"h":1}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-113]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6.72,"s":[247]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10.56,"s":[1156]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13.44,"s":[1133]},{"t":15.36,"s":[1141.2],"h":1},{"t":16.3203125,"s":[-113],"h":1}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(5.2 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Warstwa 4","parent":4,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9.334,"s":[2]},{"t":16,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":1,"y":0},"t":0,"s":[30.158,30.373,0],"to":[2.917,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9.334,"s":[47.658,30.373,0],"to":[0,0,0],"ti":[2.917,0,0]},{"t":16,"s":[30.158,30.373,0]}],"ix":2},"a":{"a":0,"k":[-8.526,-8.465,0],"ix":1},"s":{"a":0,"k":[350,350,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-16.196,-16.196],[16.196,-16.196],[16.196,16.196],[-16.196,16.196]],"o":[[16.196,16.196],[-16.196,16.196],[-16.196,-16.196],[16.196,-16.196]],"v":[[20.8,-37.791],[20.8,20.861],[-37.853,20.861],[-37.853,-37.791]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(5 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0}],"markers":[]}');

/***/ })

}]);
//# sourceMappingURL=chunk-common.js.map