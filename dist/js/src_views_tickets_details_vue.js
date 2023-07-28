"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_tickets_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/details.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/details.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./app.config.json");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/utile */ "./src/api/utile.js");
//import Multiselect from "@vueform/multiselect";
//import "@vueform/multiselect/themes/default.css";




/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Tickets Details",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_1__.description
    }]
  },
  data() {
    return {
      ticket: [],
      board: '',
      task: ''
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    // Multiselect,
  },

  async mounted() {
    try {
      this.getTicketDetail();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    async getTicketDetail() {
      try {
        const TicketId = this.$route.params.id;
        this.ticket = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_2__.executeQuery)("SELECT Id, Name, Task__r.Type__r.Board__r.Name, Task__r.Name, Status__c, Priority__c, LastModifiedDate,  CreatedDate, CreatedBy.Name, DueDate__c, Assigned__r.Name, Code__c, Description__c FROM Ticket__c where Id = " + "'" + TicketId + "'");
        this.ticket = this.ticket[0];
        this.ticket.CreatedDate = this.ticket.CreatedDate.substring(0, 10);
        this.ticket.LastModifiedDate = this.ticket.LastModifiedDate.substring(0, 10);
        this.board = this.ticket.Task__r.Type__r.Board__r.Name;
        this.ticket.Assigned__r = this.ticket.Assigned__r.Name;
        console.log(this.ticket);
        this.task = this.ticket.Task__r.Name;
        console.log(this.task);
        if (this.ticket) {
          console.log(this.ticket.Name);
        } else {
          console.log("Empty No ticket with this id");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/details.vue?vue&type=template&id=d2fa7a20":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/details.vue?vue&type=template&id=d2fa7a20 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_companies_img_4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/companies/img-4.png */ "./src/assets/images/companies/img-4.png");
/* harmony import */ var _assets_images_users_avatar_8_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/users/avatar-8.jpg */ "./src/assets/images/users/avatar-8.jpg");
/* harmony import */ var _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/users/avatar-10.jpg */ "./src/assets/images/users/avatar-10.jpg");
/* harmony import */ var _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/users/avatar-6.jpg */ "./src/assets/images/users/avatar-6.jpg");
/* harmony import */ var _assets_images_small_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/small/img-4.jpg */ "./src/assets/images/small/img-4.jpg");
/* harmony import */ var _assets_images_small_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/small/img-5.jpg */ "./src/assets/images/small/img-5.jpg");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");








const _hoisted_1 = {
  class: "bg-soft-primary"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-md mb-md-0 mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-white rounded-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_companies_img_4_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "avatar-sm"
})])], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "fw-semibold"
};
const _hoisted_4 = {
  class: "hstack gap-3 flex-wrap"
};
const _hoisted_5 = {
  class: "text-muted"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-building-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vr"
}, null, -1 /* HOISTED */);
const _hoisted_8 = {
  class: "text-muted"
};
const _hoisted_9 = {
  class: "fw-medium"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vr"
}, null, -1 /* HOISTED */);
const _hoisted_11 = {
  class: "text-muted"
};
const _hoisted_12 = {
  class: "fw-medium"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vr"
}, null, -1 /* HOISTED */);
const _hoisted_14 = {
  class: "hstack gap-1 flex-wrap"
};
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn avatar-xs mt-n1 p-0 favourite-btn active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title bg-transparent fs-15"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-star-fill"
})])], -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-share-line"
}, null, -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-share-forward-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn py-0 fs-16 text-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-flag-line"
})], -1 /* HOISTED */);
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "fw-semibold text-uppercase mb-3"
}, "Ticket DESCRIPTION", -1 /* HOISTED */);
const _hoisted_22 = {
  class: "text-muted"
};
const _hoisted_23 = {
  class: "mt-4"
};
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "fw-semibold text-uppercase mb-3"
}, "Code", -1 /* HOISTED */);
const _hoisted_25 = {
  class: "language-markup rounded-2"
};
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-4"
}, "Comments", -1 /* HOISTED */);
const _hoisted_27 = {
  "data-simplebar": "",
  style: {
    "height": "300px"
  },
  class: "px-3 mx-n3"
};
const _hoisted_28 = {
  class: "d-flex mb-4"
};
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_8_jpg__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_30 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Joseph Parker "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "20 Dec 2021 - 05:47AM")], -1 /* HOISTED */);
const _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "I am getting message from customers that when they place order always get error message .", -1 /* HOISTED */);
const _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_34 = {
  class: "d-flex mt-4"
};
const _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_36 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Alexis Clarke "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "22 Dec 2021 - 02:32PM")], -1 /* HOISTED */);
const _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.", -1 /* HOISTED */);
const _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_40 = {
  class: "d-flex mb-4"
};
const _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_42 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Donald Palmer "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "24 Dec 2021 - 05:20PM")], -1 /* HOISTED */);
const _hoisted_44 = {
  class: "text-muted"
};
const _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_46 = {
  class: "d-flex"
};
const _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_48 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Alexis Clarke "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "26 min ago")], -1 /* HOISTED */);
const _hoisted_50 = {
  class: "text-muted"
};
const _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_small_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__,
  alt: "",
  class: "img-fluid rounded"
}, null, -1 /* HOISTED */);
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_small_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__,
  alt: "",
  class: "img-fluid rounded"
}, null, -1 /* HOISTED */);
const _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_54 = {
  class: "d-flex mt-4"
};
const _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_56 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Donald Palmer "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "8 sec ago")], -1 /* HOISTED */);
const _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Other shipping methods are available at checkout if you want your purchase delivered faster.", -1 /* HOISTED */);
const _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_60 = {
  action: "javascript:void(0);",
  class: "mt-3"
};
const _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "exampleFormControlTextarea1",
  class: "form-label"
}, "Leave a Comments", -1 /* HOISTED */);
const _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  class: "form-control bg-light border-light",
  id: "exampleFormControlTextarea1",
  rows: "3",
  placeholder: "Enter comments"
}, null, -1 /* HOISTED */);
const _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0"
}, "Ticket Details", -1 /* HOISTED */);
const _hoisted_64 = {
  class: "table-responsive table-card"
};
const _hoisted_65 = {
  class: "table table-borderless align-middle mb-0"
};
const _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Ticket", -1 /* HOISTED */);
const _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Task", -1 /* HOISTED */);
const _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Project", -1 /* HOISTED */);
const _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Assigned To:", -1 /* HOISTED */);
const _hoisted_70 = {
  class: "avatar-group"
};
const _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_7__,
  alt: "",
  class: "rounded-circle avatar-xs"
}, null, -1 /* HOISTED */);
const _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Status:", -1 /* HOISTED */);
const _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Priority", -1 /* HOISTED */);
const _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Create Date", -1 /* HOISTED */);
const _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Due Date", -1 /* HOISTED */);
const _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Last Activity", -1 /* HOISTED */);
const _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "card-title fw-semibold mb-0"
}, "Files Attachment", -1 /* HOISTED */);
const _hoisted_78 = {
  class: "d-flex align-items-center border border-dashed p-2 rounded"
};
const _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-image-fill fs-20 text-primary"
})])], -1 /* HOISTED */);
const _hoisted_80 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_81 = {
  class: "mb-1"
};
const _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "3.2 MB", -1 /* HOISTED */);
const _hoisted_83 = {
  class: "hstack gap-3 fs-16"
};
const _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-download-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-line"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_dropdown_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown-item");
  const _component_b_dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-dropdown");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  const _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        lg: "12"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "mt-n4 mb-n5"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "pb-4 mb-5"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                md: ""
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
                  class: "align-items-center"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "auto"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: ""
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.task), 1 /* TEXT */)]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create Date : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.CreatedDate), 1 /* TEXT */)]), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Due Date : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.DueDate__c), 1 /* TEXT */)]), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
                      pill: "",
                      class: "bg-info fs-12"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Status__c), 1 /* TEXT */)]),

                      _: 1 /* STABLE */
                    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
                      pill: "",
                      variant: "danger",
                      class: "fs-12"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Priority__c), 1 /* TEXT */)]),

                      _: 1 /* STABLE */
                    })])]),

                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                })]),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                md: "auto",
                class: "mt-md-0 mt-4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown, {
                  variant: "transparent",
                  "toggle-class": "fs-16 text-body arrow-none",
                  size: "sm",
                  "no-caret": ""
                }, {
                  "button-content": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_16]),
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, {
                    href: "/apps/tickets-details"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View ")]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, {
                    href: "#",
                    onClick: _cache[0] || (_cache[0] = $event => _ctx.editdata(_ctx.data))
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Share with ")]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_dropdown_item, {
                    href: "#",
                    onClick: _cache[1] || (_cache[1] = $event => _ctx.deletedata(_ctx.data))
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")]),
                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                }), _hoisted_20])]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })]),

            _: 1 /* STABLE */
          })])]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "9"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "p-4"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Description__c), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Code__c), 1 /* TEXT */)])])])]),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "p-4"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("If you have further questions, please contact Customer Support from the “Action Menu” on your "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "text-decoration-underline"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Online Order Support")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Your "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0)",
              class: "text-decoration-underline"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Online Order Support")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more.")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "g-2 mb-3"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "1",
                sm: "2",
                cols: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_51]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "1",
                sm: "2",
                cols: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_52]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "g-3"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_61, _hoisted_62]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12",
                class: "text-end"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript:void(0);",
                  class: "btn btn-secondary"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Post Comments")]),
                  _: 1 /* STABLE */
                })]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_63]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.task), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.board), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
              href: "javascript:void(0);",
              class: "avatar-group-item",
              title: `${this.ticket.Assigned__r}`
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_71]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["title"])), [[_directive_b_tooltip, void 0, void 0, {
              hover: true
            }]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              variant: "info"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Status__c), 1 /* TEXT */)]),

              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              variant: "danger"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.Priority__c), 1 /* TEXT */)]),

              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.CreatedDate), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.DueDate__c), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.ticket.LastModifiedDate), 1 /* TEXT */)])])])])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_77]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Screen.png")]),
              _: 1 /* STABLE */
            })]), _hoisted_82]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "text-muted"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_84]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "text-muted"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_85]),
              _: 1 /* STABLE */
            })])])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./src/views/tickets/details.vue":
/*!***************************************!*\
  !*** ./src/views/tickets/details.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_vue_vue_type_template_id_d2fa7a20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=d2fa7a20 */ "./src/views/tickets/details.vue?vue&type=template&id=d2fa7a20");
/* harmony import */ var _details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js */ "./src/views/tickets/details.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_details_vue_vue_type_template_id_d2fa7a20__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/tickets/details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/tickets/details.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/tickets/details.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/tickets/details.vue?vue&type=template&id=d2fa7a20":
/*!*********************************************************************!*\
  !*** ./src/views/tickets/details.vue?vue&type=template&id=d2fa7a20 ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_template_id_d2fa7a20__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_template_id_d2fa7a20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./details.vue?vue&type=template&id=d2fa7a20 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/details.vue?vue&type=template&id=d2fa7a20");


/***/ }),

/***/ "./src/assets/images/companies/img-4.png":
/*!***********************************************!*\
  !*** ./src/assets/images/companies/img-4.png ***!
  \***********************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ })

}]);
//# sourceMappingURL=src_views_tickets_details_vue.js.map