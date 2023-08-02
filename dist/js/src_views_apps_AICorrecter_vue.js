"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_apps_AICorrecter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/AICorrecter.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/AICorrecter.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_api_utile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.././src/api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zhuowenli/vue-feather-icons */ "./node_modules/@zhuowenli/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vuelidate/validators */ "./node_modules/@vuelidate/validators/dist/index.esm.js");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuelidate/core */ "./node_modules/@vuelidate/core/dist/index.esm.js");
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.config */ "./app.config.json");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/views/apps/data.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  setup() {
    return {
      v$: (0,_vuelidate_core__WEBPACK_IMPORTED_MODULE_2__["default"])()
    };
  },
  page: {
    title: "Chat",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_4__.description
    }]
  },
  data() {
    return {
      languageLabel: "Languages",
      languageSelected: '',
      resp: '',
      message: '',
      chatData: _data__WEBPACK_IMPORTED_MODULE_5__.chatData,
      // chatMessagesData: chatMessagesData,
      chatMessagesData: [],
      title: "ChatGPT",
      items: [{
        text: "Velzon",
        href: "/"
      }, {
        text: "Chat",
        active: true
      }],
      submitted: false,
      form: {
        message: ""
      },
      username: "INSANE CORRECTOR",
      profile: __webpack_require__(/*! @/assets/images/users/corrector.jpeg */ "./src/assets/images/users/corrector.jpeg")
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SearchIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.SearchIcon,
    InfoIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.InfoIcon,
    MoreVerticalIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon
  },
  validations: {
    form: {
      message: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_7__.helpers.withMessage("Message is required", _vuelidate_validators__WEBPACK_IMPORTED_MODULE_7__.required)
      }
    }
  },
  methods: {
    addLeadingZero(number) {
      return number < 10 ? "0" + number : number;
    },
    renderChatResponse(response) {
      const responseContainer = document.getElementById('responseContainer');
      responseContainer.innerHTML = ''; // Clear any previous content

      // Check if the response contains code
      if (this.containsCode(response)) {
        // Wrap code blocks in <code> tags
        const codeFormattedResponse = response.replace(/`([^`]+)`/g, '<code>$1</code>');
        responseContainer.innerHTML = codeFormattedResponse;
      } else {
        // If no code, display the response as is
        responseContainer.textContent = response;
      }
    },
    containsCode(response) {
      // Regular expression to match code blocks enclosed in backticks (```)
      const codeRegex = /`([^`]+)`/g;
      return codeRegex.test(response);
    },
    handleSelection(selectedLanguage) {
      // Do something with the selected value
      console.log("slected hhhhhh " + selectedLanguage);
      const dropdownButton = document.getElementById('languageDropdown');
      this.selectedLanguage = selectedLanguage;
      // this.languageLabel == selectedLanguage;
      dropdownButton.textContent = selectedLanguage;
    },
    async ExecuteChatGptCorrecter(msg) {
      // var timeNow = hours + ":" + minutes;
      if (msg == '') {
        var nowEmptyResp = new Date();
        var hoursEmptyResp = this.addLeadingZero(nowEmptyResp.getHours());
        var minutesEmptyResp = this.addLeadingZero(nowEmptyResp.getMinutes());
        var timeNow2 = hoursEmptyResp + ":" + minutesEmptyResp;
        this.chatMessagesData.push({
          align: 'left',
          name: 'ChatGPT',
          message: "Im a Text corrector ,please provide an input to correct :)",
          time: timeNow2
        });
      } else {
        var CorrectionRequest = "Correct this Text between brackets (" + msg + ") ,the language used is " + this.selectedLanguage;
        this.api = await (0,_src_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Id, Key__c, Token__c FROM api__c where Name='GPT'");
        this.api = this.api[0];
        this.apiKey = this.api.Key__c;
        (0,_src_api_utile_js__WEBPACK_IMPORTED_MODULE_1__.callGpt35TurboAPI)(CorrectionRequest, this.apiKey).then(response => {
          var now = new Date();
          var hours = this.addLeadingZero(now.getHours());
          var minutes = this.addLeadingZero(now.getMinutes());
          // Handle the response here
          console.log('Received Response:', response);
          var timeNow2 = hours + ":" + minutes;
          this.chatMessagesData.push({
            align: 'left',
            name: 'ChatGPT',
            message: response,
            time: timeNow2
          });
        }).catch(error => {
          // Handle errors here
          console.error('Error:', error);
        });
      }
      console.log(this.chatMessagesData);
    },
    /**
     * Get the name of user
     */
    scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") ? document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") : '';
        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ? document.getElementById(id).getElementsByClassName("chat-conversation-list")[0].scrollHeight - window.innerHeight + 600 : 0;
        if (offsetHeight) simpleBar.scrollTo({
          top: offsetHeight,
          behavior: "smooth"
        });
      }, 300);
    },
    chatUsername(name, image) {
      this.username = name;
      this.profile = image;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();
      const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
      const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: hours + ":" + minutes
      });
    },
    /**
     * Char form Submit
     */
    formSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
        const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: hours + ":" + minutes
        });
        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);
      }
      this.submitted = false;
      this.form = {};
    }
  },
  mounted() {
    var currentChatId = "users-chat";
    this.scrollToBottom(currentChatId);
    document.getElementById('copyClipBoard').style.display = 'none';
    var userChatElement = document.querySelectorAll(".user-chat");
    document.querySelectorAll(".chat-user-list li a").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.add("user-chat-show");
        });

        // chat user list link active
        var chatUserList = document.querySelector(".chat-user-list li.active");
        if (chatUserList) chatUserList.classList.remove("active");
        this.parentNode.classList.add("active");
      });
    });

    // user-chat-remove
    document.querySelectorAll(".user-chat-remove").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.remove("user-chat-show");
        });
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/AICorrecter.vue?vue&type=template&id=9c187368":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/AICorrecter.vue?vue&type=template&id=9c187368 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "chat-wrapper d-lg-flex gap-1 mt-n4 py-1"
};
const _hoisted_2 = {
  class: "user-chat w-100 overflow-hidden"
};
const _hoisted_3 = {
  class: "chat-content d-lg-flex"
};
const _hoisted_4 = {
  class: "w-100 overflow-hidden position-relative"
};
const _hoisted_5 = {
  class: "position-relative"
};
const _hoisted_6 = {
  class: "p-3 user-chat-topbar"
};
const _hoisted_7 = {
  class: "d-flex align-items-center"
};
const _hoisted_8 = {
  class: "flex-shrink-0 d-block d-lg-none me-3"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-left-s-line align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_10 = {
  class: "flex-grow-1 overflow-hidden"
};
const _hoisted_11 = {
  class: "d-flex align-items-center"
};
const _hoisted_12 = {
  class: "flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0"
};
const _hoisted_13 = ["src"];
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "user-status"
}, null, -1 /* HOISTED */);
const _hoisted_15 = {
  class: "flex-grow-1 overflow-hidden"
};
const _hoisted_16 = {
  class: "text-truncate mb-0 fs-16"
};
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-truncate text-muted fs-14 mb-0 userStatus"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "Online")], -1 /* HOISTED */);
const _hoisted_18 = {
  class: "list-inline user-chat-nav text-end mb-0"
};
const _hoisted_19 = {
  class: "list-inline-item m-0"
};
const _hoisted_20 = {
  class: "dropdown"
};
const _hoisted_21 = {
  class: "btn btn-ghost-secondary btn-icon",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "p-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "search-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control bg-light border-light",
  placeholder: "Search here...",
  onkeyup: "searchMessages()",
  id: "searchMessage"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-search-2-line search-icon"
})])])], -1 /* HOISTED */);
const _hoisted_23 = {
  class: "list-inline-item d-none d-lg-inline-block m-0"
};
const _hoisted_24 = {
  class: "list-inline-item m-0"
};
const _hoisted_25 = {
  class: "dropdown"
};
const _hoisted_26 = {
  class: "btn btn-ghost-secondary btn-icon",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
const _hoisted_27 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-user-2-fill align-bottom text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-inbox-archive-line align-bottom text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-mic-off-line align-bottom text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-line align-bottom text-muted me-2"
}, null, -1 /* HOISTED */);
const _hoisted_32 = {
  class: "position-relative",
  id: "users-chat"
};
const _hoisted_33 = {
  class: "chat-conversation p-3 p-lg-4",
  id: "chat-conversation",
  "data-simplebar": "",
  ref: "current"
};
const _hoisted_34 = {
  class: "list-unstyled chat-conversation-list"
};
const _hoisted_35 = {
  class: "conversation-list"
};
const _hoisted_36 = {
  key: 0,
  class: "chat-avatar"
};
const _hoisted_37 = ["src"];
const _hoisted_38 = {
  class: "user-chat-content"
};
const _hoisted_39 = {
  class: "ctext-wrap"
};
const _hoisted_40 = {
  class: "ctext-wrap-content"
};
const _hoisted_41 = {
  class: "mb-0 ctext-content",
  id: "responseContainer"
};
const _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show",
  id: "copyClipBoard",
  role: "alert"
}, " Message copied ", -1 /* HOISTED */);
const _hoisted_43 = {
  class: "chat-input-section p-3 p-lg-4"
};
const _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "chat-input-links me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Chat input links here ")], -1 /* HOISTED */);
const _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "chat-input-feedback"
}, null, -1 /* HOISTED */);
const _hoisted_46 = {
  class: "input-group"
};
const _hoisted_47 = {
  class: "dropdown"
};
const _hoisted_48 = {
  id: "languageDropdown",
  class: "btn btn-primary dropdown-toggle",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
};
const _hoisted_49 = {
  class: "dropdown-menu"
};
const _hoisted_50 = {
  key: 0,
  class: "invalid-feedback"
};
const _hoisted_51 = {
  key: 0
};
const _hoisted_52 = {
  class: "chat-input-links ms-2 d-flex flex-column"
};
const _hoisted_53 = {
  class: "links-list-item"
};
const _hoisted_54 = {
  class: "replyCard"
};
const _hoisted_55 = {
  class: "replymessage-block mb-0 d-flex align-items-start"
};
const _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "conversation-name"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "mb-0"
})], -1 /* HOISTED */);
const _hoisted_57 = {
  class: "flex-shrink-0"
};
const _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "bx bx-x align-middle"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_search_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-icon");
  const _component_info_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("info-icon");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_more_vertical_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("more-vertical-icon");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
      class: "align-items-center"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        sm: "4",
        cols: "8"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          href: "javascript: void(0);",
          class: "user-chat-remove fs-18 p-1"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_9]),
          _: 1 /* STABLE */
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: $data.profile ? $data.profile : __webpack_require__(/*! @/assets/images/users/user-dummy-img.jpg */ "./src/assets/images/users/user-dummy-img.jpg"),
          class: "rounded-circle avatar-xs",
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_13), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          class: "text-reset username",
          "data-bs-toggle": "offcanvas",
          href: "#userProfileCanvasExample",
          "aria-controls": "userProfileCanvasExample"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.username), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        })]), _hoisted_17])])])])]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        sm: "8",
        cols: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_icon, {
          class: "icon-sm"
        })]), _hoisted_22])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "ghost-secondary",
          class: "btn-icon",
          "data-bs-toggle": "offcanvas",
          "data-bs-target": "#userProfileCanvasExample",
          "aria-controls": "userProfileCanvasExample"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_info_icon, {
            class: "icon-sm"
          })]),
          _: 1 /* STABLE */
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_more_vertical_icon, {
          class: "icon-sm"
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          class: "dropdown-item d-block d-lg-none user-profile-show"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Profile ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          class: "dropdown-item"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Archive ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          class: "dropdown-item"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Muted ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          class: "dropdown-item"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")]),
          _: 1 /* STABLE */
        })])])])])]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_34, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.chatMessagesData, data => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: data.message,
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          right: `${data.align}` === 'right',
          left: `${data.align}` !== 'right'
        }, "chat-list"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [data.align !== 'right' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $data.profile ? $data.profile : __webpack_require__(/*! @/assets/images/users/user-dummy-img.jpg */ "./src/assets/images/users/user-dummy-img.jpg"),
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_37)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.message), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ... (other dropdown and message content) ... ")])])])], 2 /* CLASS */);
    }), 128 /* KEYED_FRAGMENT */))])], 512 /* NEED_PATCH */), _hoisted_42]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
      onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.formSubmit && $options.formSubmit(...args), ["prevent"]))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
      class: "g-0 align-items-center"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "auto"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_44]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.languageLabel), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          class: "dropdown-item",
          onClick: _cache[0] || (_cache[0] = $event => $options.handleSelection('English'))
        }, "English")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          class: "dropdown-item",
          onClick: _cache[1] || (_cache[1] = $event => $options.handleSelection('French'))
        }, "French")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          class: "dropdown-item",
          onClick: _cache[2] || (_cache[2] = $event => $options.handleSelection('Spanish'))
        }, "Spanish")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.form.message = $event),
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control chat-input bg-light border-light", {
            'is-invalid': $data.submitted && $setup.v$.form.message.$error
          }]),
          placeholder: "Enter Text to Correct..."
        }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.message]])]), $data.submitted && $setup.v$.form.message.$error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [$setup.v$.form.message.required.$message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.v$.form.message.required.$message), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col)]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        cols: "auto"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          style: {
            "width": "90px",
            "font-size": "medium"
          },
          pill: "",
          variant: "primary",
          type: "submit",
          class: "waves-effect waves-light",
          onClick: _cache[4] || (_cache[4] = $event => $options.ExecuteChatGptCorrecter($data.form.message))
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Correct")]),
          _: 1 /* STABLE */
        })])])]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })], 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
      "no-body": "",
      class: "mb-0"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
        class: "py-3"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "link",
          size: "sm",
          id: "close_toggle",
          class: "mt-n2 me-n3 fs-18"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_58]),
          _: 1 /* STABLE */
        })])])]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })])])])])])])]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./src/views/apps/AICorrecter.vue":
/*!****************************************!*\
  !*** ./src/views/apps/AICorrecter.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AICorrecter_vue_vue_type_template_id_9c187368__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AICorrecter.vue?vue&type=template&id=9c187368 */ "./src/views/apps/AICorrecter.vue?vue&type=template&id=9c187368");
/* harmony import */ var _AICorrecter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AICorrecter.vue?vue&type=script&lang=js */ "./src/views/apps/AICorrecter.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AICorrecter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AICorrecter_vue_vue_type_template_id_9c187368__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/AICorrecter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/AICorrecter.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/apps/AICorrecter.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AICorrecter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AICorrecter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AICorrecter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/AICorrecter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/AICorrecter.vue?vue&type=template&id=9c187368":
/*!**********************************************************************!*\
  !*** ./src/views/apps/AICorrecter.vue?vue&type=template&id=9c187368 ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AICorrecter_vue_vue_type_template_id_9c187368__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AICorrecter_vue_vue_type_template_id_9c187368__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AICorrecter.vue?vue&type=template&id=9c187368 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/AICorrecter.vue?vue&type=template&id=9c187368");


/***/ }),

/***/ "./src/assets/images/users/corrector.jpeg":
/*!************************************************!*\
  !*** ./src/assets/images/users/corrector.jpeg ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/corrector.aaf01e7e.jpeg";

/***/ })

}]);
//# sourceMappingURL=src_views_apps_AICorrecter_vue.js.map