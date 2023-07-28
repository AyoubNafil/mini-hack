"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_pages_profile_setting_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/profile/setting.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/profile/setting.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");







/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Setting",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_5__.description
    }]
  },
  data() {
    return {
      title: "Setting",
      items: [{
        text: "Velzon",
        href: "/"
      }, {
        text: "Setting",
        active: true
      }],
      value: ['javascript'],
      date: null
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_0__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    changepass() {
      var data = {
        password: document.getElementById('oldpasswordInput').value,
        new_password: document.getElementById('newpasswordInput').value,
        confirm_password: document.getElementById('confirmpasswordInput').value
      };
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].patch('https://api-node.themesbrand.website/updatepassword', data).then(data => {
        console.log(data);
      }).catch(e => {
        console.log(e);
      });
    },
    updatedata() {
      var userid = localStorage.getItem('userid');
      var data = {
        first_name: document.getElementById('firstnameInput').value,
        last_name: document.getElementById('lastnameInput').value,
        phone: document.getElementById('phonenumberInput').value,
        email: document.getElementById('emailInput').value,
        joining_date: document.getElementById('dateinput').value,
        skills: document.getElementById('skillsinput').value,
        designation: document.getElementById('designationInput').value,
        website: document.getElementById('websiteInput1').value,
        city: document.getElementById('cityInput').value,
        country: document.getElementById('countryInput').value,
        zipcode: document.getElementById('zipcodeInput').value,
        Description: document.getElementById('exampleFormControlTextarea').value
      };
      axios__WEBPACK_IMPORTED_MODULE_6__["default"].patch('https://api-node.themesbrand.website/user/' + userid, data).then(data => {
        console.log(data);
      }).catch(e => {
        console.log(e);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/profile/setting.vue?vue&type=template&id=88eb7b16":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/profile/setting.vue?vue&type=template&id=88eb7b16 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_profile_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/profile-bg.jpg */ "./src/assets/images/profile-bg.jpg");
/* harmony import */ var _assets_images_users_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/users/avatar-1.jpg */ "./src/assets/images/users/avatar-1.jpg");



const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "position-relative mx-n4 mt-n4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "profile-wid-bg profile-setting-img"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_profile_bg_jpg__WEBPACK_IMPORTED_MODULE_1__,
  class: "profile-wid-img",
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "overlay-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-end p-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "p-0 ms-auto rounded-circle profile-photo-edit"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "profile-foreground-img-file-input",
  type: "file",
  class: "profile-foreground-img-file-input"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "profile-foreground-img-file-input",
  class: "profile-photo-edit btn btn-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-image-edit-line align-bottom me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Cover ")])])])])])], -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "profile-user position-relative d-inline-block mx-auto mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_2__,
  class: "rounded-circle avatar-xl img-thumbnail user-profile-image",
  alt: "user-profile-image"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs p-0 rounded-circle profile-photo-edit"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  id: "profile-img-file-input",
  type: "file",
  class: "profile-img-file-input"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "profile-img-file-input",
  class: "profile-photo-edit avatar-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle bg-light text-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-camera-fill"
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-16 mb-1"
}, "Anna Adame"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Lead Designer / Developer")], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "d-flex align-items-center mb-5"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0"
}, "Complete Your Profile")], -1 /* HOISTED */);
const _hoisted_5 = {
  class: "flex-shrink-0"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-edit-box-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "label"
}, "30%", -1 /* HOISTED */);
const _hoisted_8 = {
  class: "d-flex align-items-center mb-4"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0"
}, "Portfolio")], -1 /* HOISTED */);
const _hoisted_10 = {
  class: "flex-shrink-0"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-add-fill align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3 d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs d-block flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle fs-16 bg-dark text-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-github-fill"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "email",
  class: "form-control",
  id: "gitUsername",
  placeholder: "Username",
  value: "@daveadame"
})], -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3 d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs d-block flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle fs-16 bg-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-global-fill"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "websiteInput",
  placeholder: "www.example.com",
  value: "www.velzon.com"
})], -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3 d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs d-block flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle fs-16 bg-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-dribbble-fill"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "dribbleName",
  placeholder: "Username",
  value: "@dave_adame"
})], -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs d-block flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title rounded-circle fs-16 bg-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-pinterest-fill"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "pinterestName",
  placeholder: "Username",
  value: "Advance Dave"
})], -1 /* HOISTED */);
const _hoisted_16 = {
  class: "nav nav-tabs-custom rounded card-header-tabs border-bottom-0",
  role: "tablist"
};
const _hoisted_17 = {
  class: "nav-item"
};
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "fas fa-home"
}, null, -1 /* HOISTED */);
const _hoisted_19 = {
  class: "nav-item"
};
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "far fa-user"
}, null, -1 /* HOISTED */);
const _hoisted_21 = {
  class: "nav-item"
};
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "far fa-envelope"
}, null, -1 /* HOISTED */);
const _hoisted_23 = {
  class: "nav-item"
};
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "far fa-envelope"
}, null, -1 /* HOISTED */);
const _hoisted_25 = {
  class: "tab-content"
};
const _hoisted_26 = {
  class: "tab-pane active",
  id: "personalDetails",
  role: "tabpanel"
};
const _hoisted_27 = {
  action: "javascript:void(0);"
};
const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "firstnameInput",
  class: "form-label"
}, "First Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "firstnameInput",
  placeholder: "Enter your firstname",
  value: "Dave"
})], -1 /* HOISTED */);
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "lastnameInput",
  class: "form-label"
}, "Last Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "lastnameInput",
  placeholder: "Enter your lastname",
  value: "Adame"
})], -1 /* HOISTED */);
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "phonenumberInput",
  class: "form-label"
}, "Phone Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "phonenumberInput",
  placeholder: "Enter your phone number",
  value: "+(1) 987 6543"
})], -1 /* HOISTED */);
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "emailInput",
  class: "form-label"
}, "Email Address"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "email",
  class: "form-control",
  id: "emailInput",
  placeholder: "Enter your email",
  value: "daveadame@velzon.com"
})], -1 /* HOISTED */);
const _hoisted_32 = {
  class: "mb-3"
};
const _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "JoiningdatInput",
  class: "form-label"
}, "Joining Date", -1 /* HOISTED */);
const _hoisted_34 = {
  class: "mb-3"
};
const _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "skillsInput",
  class: "form-label"
}, "Skills", -1 /* HOISTED */);
const _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "designationInput",
  class: "form-label"
}, "Designation"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "designationInput",
  placeholder: "Designation",
  value: "Lead Designer / Developer"
})], -1 /* HOISTED */);
const _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "websiteInput1",
  class: "form-label"
}, "Website"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "websiteInput1",
  placeholder: "www.example.com",
  value: "www.velzon.com"
})], -1 /* HOISTED */);
const _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "cityInput",
  class: "form-label"
}, "City"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "cityInput",
  placeholder: "City",
  value: "California"
})], -1 /* HOISTED */);
const _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "countryInput",
  class: "form-label"
}, "Country"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "countryInput",
  placeholder: "Country",
  value: "United States"
})], -1 /* HOISTED */);
const _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "zipcodeInput",
  class: "form-label"
}, "Zip Code"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  minlength: "5",
  maxlength: "6",
  id: "zipcodeInput",
  placeholder: "Enter zipcode",
  value: "90011"
})], -1 /* HOISTED */);
const _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "exampleFormControlTextarea",
  class: "form-label"
}, "Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  class: "form-control",
  id: "exampleFormControlTextarea",
  placeholder: "Enter your description",
  rows: "3"
}, "\nHi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.")], -1 /* HOISTED */);
const _hoisted_42 = {
  class: "hstack gap-2 justify-content-end"
};
const _hoisted_43 = {
  class: "tab-pane",
  id: "changePassword",
  role: "tabpanel"
};
const _hoisted_44 = {
  action: "javascript:void(0);"
};
const _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "oldpasswordInput",
  class: "form-label"
}, "Old Password*"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  class: "form-control",
  id: "oldpasswordInput",
  placeholder: "Enter current password"
})], -1 /* HOISTED */);
const _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "newpasswordInput",
  class: "form-label"
}, "New Password*"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  class: "form-control",
  id: "newpasswordInput",
  placeholder: "Enter new password"
})], -1 /* HOISTED */);
const _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "confirmpasswordInput",
  class: "form-label"
}, "Confirm Password*"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  class: "form-control",
  id: "confirmpasswordInput",
  placeholder: "Confirm password"
})], -1 /* HOISTED */);
const _hoisted_48 = {
  class: "mb-3"
};
const _hoisted_49 = {
  class: "text-end"
};
const _hoisted_50 = {
  class: "mt-4 mb-3 border-bottom pb-2"
};
const _hoisted_51 = {
  class: "float-end"
};
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title"
}, "Login History", -1 /* HOISTED */);
const _hoisted_53 = {
  class: "d-flex align-items-center mb-3"
};
const _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-primary rounded-3 fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-smartphone-line"
})])], -1 /* HOISTED */);
const _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1 ms-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "iPhone 12 Pro"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, " Los Angeles, United States - March 16 at 2:47PM ")], -1 /* HOISTED */);
const _hoisted_56 = {
  class: "d-flex align-items-center mb-3"
};
const _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-primary rounded-3 fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-tablet-line"
})])], -1 /* HOISTED */);
const _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1 ms-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Apple iPad Pro"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, " Washington, United States - November 06 at 10:43AM ")], -1 /* HOISTED */);
const _hoisted_59 = {
  class: "d-flex align-items-center mb-3"
};
const _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-primary rounded-3 fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-smartphone-line"
})])], -1 /* HOISTED */);
const _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1 ms-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Galaxy S21 Ultra 5G"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, " Conneticut, United States - June 12 at 3:24PM ")], -1 /* HOISTED */);
const _hoisted_62 = {
  class: "d-flex align-items-center"
};
const _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-primary rounded-3 fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-macbook-line"
})])], -1 /* HOISTED */);
const _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1 ms-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Dell Inspiron 14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, " Phoenix, United States - July 26 at 8:10AM ")], -1 /* HOISTED */);
const _hoisted_65 = {
  class: "tab-pane",
  id: "experience",
  role: "tabpanel"
};
const _hoisted_66 = {
  id: "newlink"
};
const _hoisted_67 = {
  id: "1"
};
const _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "jobTitle",
  class: "form-label"
}, "Job Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "jobTitle",
  placeholder: "Job title",
  value: "Lead Designer / Developer"
})], -1 /* HOISTED */);
const _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "companyName",
  class: "form-label"
}, "Company Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "companyName",
  placeholder: "Company name",
  value: "Themesbrand"
})], -1 /* HOISTED */);
const _hoisted_70 = {
  class: "mb-3"
};
const _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "experienceYear",
  class: "form-label"
}, "Experience Years", -1 /* HOISTED */);
const _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "jobDescription",
  class: "form-label"
}, "Job Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  class: "form-control",
  id: "jobDescription",
  rows: "3",
  placeholder: "Enter description"
}, "\nYou always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. ")], -1 /* HOISTED */);
const _hoisted_73 = {
  class: "hstack gap-2 justify-content-end"
};
const _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "newForm",
  style: {
    "display": "none"
  }
}, null, -1 /* HOISTED */);
const _hoisted_75 = {
  class: "hstack gap-2"
};
const _hoisted_76 = {
  class: "tab-pane",
  id: "privacy",
  role: "tabpanel"
};
const _hoisted_77 = {
  class: "mb-4 pb-2"
};
const _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title text-decoration-underline mb-3"
}, " Security: ", -1 /* HOISTED */);
const _hoisted_79 = {
  class: "d-flex flex-column flex-sm-row mb-4 mb-sm-0"
};
const _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "fs-14 mb-1"
}, "Two-factor Authentication"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported. ")], -1 /* HOISTED */);
const _hoisted_81 = {
  class: "flex-shrink-0 ms-sm-3"
};
const _hoisted_82 = {
  class: "d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2"
};
const _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "fs-14 mb-1"
}, "Secondary Verification"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina. ")], -1 /* HOISTED */);
const _hoisted_84 = {
  class: "flex-shrink-0 ms-sm-3"
};
const _hoisted_85 = {
  class: "d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2"
};
const _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "fs-14 mb-1"
}, "Backup Codes"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-sm-0"
}, " A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com. ")], -1 /* HOISTED */);
const _hoisted_87 = {
  class: "flex-shrink-0 ms-sm-3"
};
const _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title text-decoration-underline mb-3"
}, " Application Notifications: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  class: "list-unstyled mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "directMessage",
  class: "form-check-label fs-14"
}, "Direct messages"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Messages from people you follow ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check form-switch"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  role: "switch",
  id: "directMessage",
  checked: ""
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "d-flex mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label fs-14",
  for: "desktopNotification"
}, " Show desktop notifications "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Choose the option you want as your default setting. Block a site: Next to \"Not allowed to send notifications,\" click Add. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check form-switch"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  role: "switch",
  id: "desktopNotification",
  checked: ""
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "d-flex mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label fs-14",
  for: "emailNotification"
}, " Show email notifications "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check form-switch"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  role: "switch",
  id: "emailNotification"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "d-flex mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label fs-14",
  for: "chatNotification"
}, " Show chat notifications "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat notifications. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check form-switch"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  role: "switch",
  id: "chatNotification"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  class: "d-flex mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-check-label fs-14",
  for: "purchaesNotification"
}, " Show purchase notifications "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Get real-time purchase alerts to protect yourself from fraudulent charges. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check form-switch"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  role: "switch",
  id: "purchaesNotification"
})])])])])], -1 /* HOISTED */);
const _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title text-decoration-underline mb-3"
}, " Delete This Account: ", -1 /* HOISTED */);
const _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Go to the Data & Privacy section of your profile Account. Scroll to \"Your data & privacy options.\" Delete your Profile Account. Follow the instructions to delete your account : ", -1 /* HOISTED */);
const _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  class: "form-control",
  id: "passwordInput",
  placeholder: "Enter your password",
  value: "make@321654987",
  style: {
    "max-width": "265px"
  }
})], -1 /* HOISTED */);
const _hoisted_92 = {
  class: "hstack gap-2 mt-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_progress_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-progress-bar");
  const _component_b_progress = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-progress");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "mt-n5"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "p-4"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "badge bg-light text-primary fs-12"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_progress, {
              class: "animated-progress custom-progress progress-label"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_progress_bar, {
                value: 30,
                variant: "danger"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_7]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "badge bg-light text-primary fs-12"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add")]),
              _: 1 /* STABLE */
            })])]), _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "9"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "mt-xxl-n5"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link active",
              "data-bs-toggle": "tab",
              href: "#personalDetails",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Personal Details ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link",
              "data-bs-toggle": "tab",
              href: "#changePassword",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link",
              "data-bs-toggle": "tab",
              href: "#experience",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Experience ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link",
              "data-bs-toggle": "tab",
              href: "#privacy",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Privacy Policy ")]),
              _: 1 /* STABLE */
            })])])]),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "p-4"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_28]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_29]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_30]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_31]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
                  modelValue: $data.date,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.date = $event),
                  id: "dateinput",
                  class: "form-control"
                }, null, 8 /* PROPS */, ["modelValue"])])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
                  modelValue: $data.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.value = $event),
                  id: "skillsinput",
                  mode: "tags",
                  "close-on-select": false,
                  searchable: true,
                  "create-option": true,
                  options: [{
                    value: 'illustrator',
                    label: 'Illustrator'
                  }, {
                    value: 'photoshop',
                    label: 'Photoshop'
                  }, {
                    value: 'css',
                    label: 'CSS'
                  }, {
                    value: 'html',
                    label: 'HTML'
                  }, {
                    value: 'javascript',
                    label: 'Javascript'
                  }, {
                    value: 'python',
                    label: 'Python'
                  }, {
                    value: 'php',
                    label: 'PHP'
                  }]
                }, null, 8 /* PROPS */, ["modelValue"])])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_36]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_37]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_38]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_39]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_40]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_41]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "submit",
                  variant: "secondary",
                  onClick: $options.updatedata
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Updates ")]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "button",
                  variant: "soft-danger"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancel ")]),
                  _: 1 /* STABLE */
                })])]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "g-2"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_45]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_46]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_47]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript:void(0);",
                  class: "link-primary text-decoration-underline"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Forgot Password ?")]),
                  _: 1 /* STABLE */
                })])]),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "submit",
                  variant: "secondary",
                  onClick: $options.changepass
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ")]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["onClick"])])]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "link-primary"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("All Logout")]),
              _: 1 /* STABLE */
            })]), _hoisted_52]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [_hoisted_57, _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [_hoisted_63, _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Logout")]),
              _: 1 /* STABLE */
            })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_68]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_69]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "5"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
                      class: "form-control",
                      modelValue: _ctx.value2,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.value2 = $event),
                      "close-on-select": true,
                      searchable: true,
                      "create-option": true,
                      options: [{
                        value: '',
                        label: 'Select years'
                      }, {
                        value: 'Choice 1',
                        label: '2001'
                      }, {
                        value: 'Choice 2',
                        label: '2002'
                      }, {
                        value: 'Choice 3',
                        label: '2003'
                      }, {
                        value: 'Choice 4',
                        label: '2004'
                      }, {
                        value: 'Choice 5',
                        label: '2005'
                      }, {
                        value: 'Choice 6',
                        label: '2006'
                      }, {
                        value: 'Choice 7',
                        label: '2007'
                      }, {
                        value: 'Choice 8',
                        label: '2008'
                      }, {
                        value: 'Choice 9',
                        label: '2009'
                      }, {
                        value: 'Choice 10',
                        label: '2010'
                      }, {
                        value: 'Choice 11',
                        label: '2011'
                      }, {
                        value: 'Choice 12',
                        label: '2012'
                      }, {
                        value: 'Choice 13',
                        label: '2013'
                      }, {
                        value: 'Choice 14',
                        label: '2014'
                      }, {
                        value: 'Choice 15',
                        label: '2015'
                      }, {
                        value: 'Choice 16',
                        label: '2016'
                      }, {
                        value: 'Choice 17',
                        label: '2017'
                      }, {
                        value: 'Choice 18',
                        label: '2018'
                      }, {
                        value: 'Choice 19',
                        label: '2019'
                      }, {
                        value: 'Choice 20',
                        label: '2020'
                      }, {
                        value: 'Choice 21',
                        label: '2021'
                      }, {
                        value: 'Choice 22',
                        label: '2022'
                      }]
                    }, null, 8 /* PROPS */, ["modelValue"])]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    cols: "auto",
                    class: "align-self-center"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("to")]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "5"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
                      class: "form-control",
                      modelValue: _ctx.value1,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.value1 = $event),
                      "close-on-select": true,
                      searchable: true,
                      "create-option": true,
                      options: [{
                        value: '',
                        label: 'Select years'
                      }, {
                        value: 'Choice 1',
                        label: '2001'
                      }, {
                        value: 'Choice 2',
                        label: '2002'
                      }, {
                        value: 'Choice 3',
                        label: '2003'
                      }, {
                        value: 'Choice 4',
                        label: '2004'
                      }, {
                        value: 'Choice 5',
                        label: '2005'
                      }, {
                        value: 'Choice 6',
                        label: '2006'
                      }, {
                        value: 'Choice 7',
                        label: '2007'
                      }, {
                        value: 'Choice 8',
                        label: '2008'
                      }, {
                        value: 'Choice 9',
                        label: '2009'
                      }, {
                        value: 'Choice 10',
                        label: '2010'
                      }, {
                        value: 'Choice 11',
                        label: '2011'
                      }, {
                        value: 'Choice 12',
                        label: '2012'
                      }, {
                        value: 'Choice 13',
                        label: '2013'
                      }, {
                        value: 'Choice 14',
                        label: '2014'
                      }, {
                        value: 'Choice 15',
                        label: '2015'
                      }, {
                        value: 'Choice 16',
                        label: '2016'
                      }, {
                        value: 'Choice 17',
                        label: '2017'
                      }, {
                        value: 'Choice 18',
                        label: '2018'
                      }, {
                        value: 'Choice 19',
                        label: '2019'
                      }, {
                        value: 'Choice 20',
                        label: '2020'
                      }, {
                        value: 'Choice 21',
                        label: '2021'
                      }, {
                        value: 'Choice 22',
                        label: '2022'
                      }]
                    }, null, 8 /* PROPS */, ["modelValue"])]),
                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                })])]),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_72]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "btn btn-danger",
                href: "javascript:void(0);"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete")]),
                _: 1 /* STABLE */
              })])]),

              _: 1 /* STABLE */
            })])]), _hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
              lg: "12"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                type: "button",
                variant: "primary"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update ")]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                href: "javascript:void(0);",
                class: "btn btn-secondary"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add New")]),
                _: 1 /* STABLE */
              })])]),

              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "btn btn-sm btn-primary"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Enable Two-facor Authentication ")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "btn btn-sm btn-primary"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Set up secondary method")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "btn btn-sm btn-primary"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Generate backup codes")]),
              _: 1 /* STABLE */
            })])])]), _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_89, _hoisted_90, _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "btn btn-soft-danger"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close & Delete This Account")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "btn btn-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel")]),
              _: 1 /* STABLE */
            })])])])])]),

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

/***/ "./src/views/pages/profile/setting.vue":
/*!*********************************************!*\
  !*** ./src/views/pages/profile/setting.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_88eb7b16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=88eb7b16 */ "./src/views/pages/profile/setting.vue?vue&type=template&id=88eb7b16");
/* harmony import */ var _setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js */ "./src/views/pages/profile/setting.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_setting_vue_vue_type_template_id_88eb7b16__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/pages/profile/setting.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/pages/profile/setting.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/pages/profile/setting.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_setting_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./setting.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/profile/setting.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/pages/profile/setting.vue?vue&type=template&id=88eb7b16":
/*!***************************************************************************!*\
  !*** ./src/views/pages/profile/setting.vue?vue&type=template&id=88eb7b16 ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_setting_vue_vue_type_template_id_88eb7b16__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_setting_vue_vue_type_template_id_88eb7b16__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./setting.vue?vue&type=template&id=88eb7b16 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/profile/setting.vue?vue&type=template&id=88eb7b16");


/***/ })

}]);
//# sourceMappingURL=src_views_pages_profile_setting_vue.js.map