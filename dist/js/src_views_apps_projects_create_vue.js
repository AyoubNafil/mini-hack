"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_apps_projects_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/dropZone.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/dropZone.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dropzone",
  setup() {
    const active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return {
      active,
      toggleActive
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/create.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/create.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../.././api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_widgets_dropZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/dropZone */ "./src/components/widgets/dropZone.vue");
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vuelidate/core */ "./node_modules/@vuelidate/core/dist/index.esm.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-vue */ "./node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/page-header */ "./src/components/page-header.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_14__);















/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Create Project",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_11__.description
    }]
  },
  setup() {
    let files = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    let dropzoneFile = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)("");
    const drop = e => {
      dropzoneFile.value = e.dataTransfer.files[0];
      files.value.push(dropzoneFile.value);
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      files.value.push(dropzoneFile.value);
    };
    return {
      dropzoneFile,
      files,
      drop,
      selectedFile,
      v$: (0,_vuelidate_core__WEBPACK_IMPORTED_MODULE_7__["default"])()
    };
  },
  data() {
    return {
      title: "Create Project",
      skills: [],
      items: [{
        editorData: '',
        text: "Projects",
        href: "/"
      }, {
        text: "Create Project",
        active: true
      }],
      value3: ["Private"],
      value4: ["Designing"],
      value5: ["Ellen Smith"],
      value1: ["Inprogress"],
      value2: ["High"],
      editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default()),
      description: "" // Added the 'description' property for CKEditor content
    };
  },

  methods: {
    deleteRecord(ele) {
      ele.target.parentElement.parentElement.parentElement.remove();
    },
    async createRecord() {
      console.log("here we go");

      // Getting the value of the inputs
      const projectTitle = document.getElementById("project-title-input").value;
      // const projectDescription = document.getElementById("Description").value;
      const projectDescription = this.editorData;
      console.log(this.editorData);
      const status = this.value1; // Retrieve the selected status from the array
      const priority = this.value2[0]; // Retrieve the selected status from the array
      const deadline = this.date;
      console.log(projectTitle);
      console.log(status);
      console.log(projectDescription);
      console.log(deadline);
      console.log(priority);
      const recordData = {
        Name: projectTitle,
        Status__c: status,
        Description__c: projectDescription,
        Priority__c: priority,
        Deadline__c: deadline,
        Company__c: "INTELCIA ITS"
      };
      console.log("rec data " + recordData);
      try {
        const id = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_4__.createSObject2)("board__c", recordData);
        if (id) {
          console.log(id);
          this.skills.forEach(async skill => {
            const featureData = {
              Name: skill,
              Board__c: id
            };
            const idFeature = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_4__.createSObject2)("Feature__c", featureData);
            console.log(idFeature);
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_12___default().fire("Good job!", "Project Created Successfully!", "success");
          const dynamicPath = `/apps/projects-overview/${id}`;
          this.$router.push(dynamicPath);
        } else {
          console.log("undefined");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
      console.log(this.skills);
    }
  },
  components: {
    DropZone: _components_widgets_dropZone__WEBPACK_IMPORTED_MODULE_6__["default"],
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    PageHeader: _components_page_header__WEBPACK_IMPORTED_MODULE_10__["default"],
    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_2__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_13__["default"],
    ckeditor: (_ckeditor_ckeditor5_vue__WEBPACK_IMPORTED_MODULE_8___default().component)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/dropZone.vue?vue&type=template&id=61784d2b":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/dropZone.vue?vue&type=template&id=61784d2b ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "display-4 text-muted ri-upload-cloud-2-fill"
})], -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Drop files here or click to upload.", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "dropzoneFile",
  class: "bg-light text-dark stretched-link"
}, "Upload", -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "file",
  id: "dropzoneFile",
  class: "dropzoneFile btn btn-primary"
}, null, -1 /* HOISTED */);
const _hoisted_5 = [_hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    onDragenter: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $setup.toggleActive && $setup.toggleActive(...args), ["prevent"])),
    onDragleave: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $setup.toggleActive && $setup.toggleActive(...args), ["prevent"])),
    onDragover: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
    onDrop: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $setup.toggleActive && $setup.toggleActive(...args), ["prevent"])),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'active-dropzone': $setup.active
    }, "dropzone position-relative"])
  }, _hoisted_5, 34 /* CLASS, HYDRATE_EVENTS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/create.vue?vue&type=template&id=95ca60a4":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/create.vue?vue&type=template&id=95ca60a4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-label",
  for: "project-title-input"
}, "Project Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control",
  id: "project-title-input",
  placeholder: "Enter project title"
})], -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  class: "form-label",
  for: "project-thumbnail-img"
}, "Thumbnail Image"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-control",
  id: "project-thumbnail-img",
  type: "file",
  accept: "image/png, image/gif, image/jpeg"
})], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "md-form amber-textarea active-amber-textarea",
  style: {
    "margin-bottom": "10px"
  }
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "form19"
}, "Description", -1 /* HOISTED */);
const _hoisted_5 = {
  class: "mb-3 mb-lg-0"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "choices-priority-input",
  class: "form-label"
}, "Priority", -1 /* HOISTED */);
const _hoisted_7 = {
  class: "mb-3 mb-lg-0"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "choices-status-input",
  class: "form-label"
}, "Status", -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "datepicker-deadline-input",
  class: "form-label"
}, "Deadline", -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0"
}, "Attached files", -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Add Attached files here.", -1 /* HOISTED */);
const _hoisted_12 = {
  class: "vstack gap-2"
};
const _hoisted_13 = {
  class: "d-flex align-items-center p-2"
};
const _hoisted_14 = {
  class: "flex-grow-1"
};
const _hoisted_15 = {
  class: "pt-1"
};
const _hoisted_16 = {
  class: "fs-14 mb-1",
  "data-dz-name": ""
};
const _hoisted_17 = {
  class: "fs-13 text-muted mb-0",
  "data-dz-size": ""
};
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  class: "error text-danger",
  "data-dz-errormessage": ""
}, null, -1 /* HOISTED */);
const _hoisted_19 = {
  class: "flex-shrink-0 ms-3"
};
const _hoisted_20 = {
  class: "text-end mb-4"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0"
}, "Privacy", -1 /* HOISTED */);
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "choices-privacy-status-input",
  class: "form-label"
}, "Status", -1 /* HOISTED */);
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0"
}, "Tags", -1 /* HOISTED */);
const _hoisted_24 = {
  class: "mb-3"
};
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "choices-categories-input",
  class: "form-label"
}, "Categories", -1 /* HOISTED */);
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "choices-text-input",
  class: "form-label"
}, "Tags", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");
  const _component_ckeditor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ckeditor");
  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_DropZone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropZone");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader, {
      title: $data.title,
      items: $data.items
    }, null, 8 /* PROPS */, ["title", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        lg: "8"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ckeditor, {
              modelValue: _ctx.editorData,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editorData = $event),
              editor: $data.editor
            }, null, 8 /* PROPS */, ["modelValue", "editor"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
                  modelValue: $data.value2,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.value2 = $event),
                  "close-on-select": true,
                  searchable: true,
                  "create-option": true,
                  options: [{
                    value: 'High',
                    label: 'High'
                  }, {
                    value: 'Medium',
                    label: 'Medium'
                  }, {
                    value: 'Low',
                    label: 'Low'
                  }]
                }, null, 8 /* PROPS */, ["modelValue"])])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
                  modelValue: $data.value1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.value1 = $event),
                  "close-on-select": true,
                  searchable: true,
                  "create-option": true,
                  options: [{
                    value: 'In progress',
                    label: 'In progress'
                  }, {
                    value: 'Completed',
                    label: 'Completed'
                  }]
                }, null, 8 /* PROPS */, ["modelValue"])])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
                  modelValue: _ctx.date,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.date = $event),
                  config: _ctx.config,
                  class: "form-control flatpickr-input"
                }, null, 8 /* PROPS */, ["modelValue", "config"])])]),
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
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_10]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropZone, {
              onDrop: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.drop, ["prevent"]),
              onChange: $setup.selectedFile,
              class: "mb-2"
            }, null, 8 /* PROPS */, ["onDrop", "onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.files, (file, index) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                class: "border rounded",
                key: index
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.size / 1024), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" KB ")]), _hoisted_18])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                variant: "danger",
                size: "sm",
                "data-dz-remove": "",
                onClick: $options.deleteRecord
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete ")]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["onClick"])])])]);
            }), 128 /* KEYED_FRAGMENT */))])])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "danger",
          class: "w-sm me-1"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "submit",
          variant: "secondary",
          class: "w-sm me-1"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Draft ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "submit",
          variant: "success",
          class: "w-sm",
          onClick: $options.createRecord,
          id: "sa-success"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create")]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"])])]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        lg: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_21]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
              modelValue: $data.value3,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.value3 = $event),
              "close-on-select": true,
              searchable: true,
              "create-option": true,
              options: [{
                value: 'Private',
                label: 'Private'
              }, {
                value: 'Team',
                label: 'Team'
              }, {
                value: 'Public',
                label: 'Public'
              }]
            }, null, 8 /* PROPS */, ["modelValue"])])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_23]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
              modelValue: $data.value4,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.value4 = $event),
              "close-on-select": true,
              searchable: true,
              "create-option": true,
              options: [{
                value: 'Designing',
                label: 'Designing'
              }, {
                value: 'Development',
                label: 'Development'
              }]
            }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
              class: "form-control",
              modelValue: $data.skills,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.skills = $event),
              mode: "tags",
              "close-on-select": true,
              searchable: true,
              "create-option": true,
              options: [{
                value: 'Sprint 1',
                label: 'Sprint 1'
              }, {
                value: 'Sprint 2',
                label: 'Sprint 2'
              }, {
                value: 'Sprint 3',
                label: 'Sprint 3'
              }]
            }, null, 8 /* PROPS */, ["modelValue"])])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <b-card no-body>\n          <b-card-header>\n            <h5 class=\"card-title mb-0\">Members</h5>\n          </b-card-header>\n          <b-card-body>\n            <div class=\"mb-3\">\n              <label for=\"choices-lead-input\" class=\"form-label\">Team Lead</label>\n              <Multiselect v-model=\"value5\" :close-on-select=\"true\" :searchable=\"true\" :create-option=\"true\" :options=\"[\n                { value: 'Brent Gonzalez', label: 'Brent Gonzalez' },\n                { value: 'Darline Williams', label: 'Darline Williams' },\n                { value: 'Sylvia Wright', label: 'Sylvia Wright' },\n                { value: 'Ellen Smith', label: 'Ellen Smith' },\n                { value: 'Jeffrey Salazar', label: 'Jeffrey Salazar' },\n                { value: 'Mark Williams', label: 'Mark Williams' },\n              ]\" />\n            </div>\n\n            <div>\n              <label class=\"form-label\">Team Members</label>\n              <div class=\"avatar-group\">\n                <b-link href=\"javascript: void(0);\" class=\"avatar-group-item\" v-b-tooltip.hover title=\"Brent Gonzalez\">\n                  <div class=\"avatar-xs\">\n                    <img src=\"@/assets/images/users/avatar-3.jpg\" alt=\"\" class=\"rounded-circle img-fluid\" />\n                  </div>\n                </b-link>\n                <b-link href=\"javascript: void(0);\" class=\"avatar-group-item\" v-b-tooltip.hover title=\"Sylvia Wright\">\n                  <div class=\"avatar-xs\">\n                    <div class=\"avatar-title rounded-circle bg-secondary\">\n                      S\n                    </div>\n                  </div>\n                </b-link>\n                <b-link href=\"javascript: void(0);\" class=\"avatar-group-item\" v-b-tooltip.hover title=\"Ellen Smith\">\n                  <div class=\"avatar-xs\">\n                    <img src=\"@/assets/images/users/avatar-4.jpg\" alt=\"\" class=\"rounded-circle img-fluid\" />\n                  </div>\n                </b-link>\n                <b-link href=\"javascript: void(0);\" class=\"avatar-group-item\" v-b-tooltip.hover title=\"Add Members\">\n                  <div class=\"avatar-xs\" data-bs-toggle=\"modal\" data-bs-target=\"#inviteMembersModal\">\n                    <div class=\"avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary\">\n                      +\n                    </div>\n                  </div>\n                </b-link>\n              </div>\n            </div>\n          </b-card-body>\n        </b-card> ")]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./src/components/widgets/dropZone.vue":
/*!*********************************************!*\
  !*** ./src/components/widgets/dropZone.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropZone_vue_vue_type_template_id_61784d2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropZone.vue?vue&type=template&id=61784d2b */ "./src/components/widgets/dropZone.vue?vue&type=template&id=61784d2b");
/* harmony import */ var _dropZone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropZone.vue?vue&type=script&lang=js */ "./src/components/widgets/dropZone.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_dropZone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_dropZone_vue_vue_type_template_id_61784d2b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/widgets/dropZone.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/projects/create.vue":
/*!********************************************!*\
  !*** ./src/views/apps/projects/create.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_95ca60a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=95ca60a4 */ "./src/views/apps/projects/create.vue?vue&type=template&id=95ca60a4");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./src/views/apps/projects/create.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_95ca60a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/projects/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/widgets/dropZone.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/widgets/dropZone.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropZone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropZone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dropZone.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/dropZone.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/projects/create.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/apps/projects/create.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/widgets/dropZone.vue?vue&type=template&id=61784d2b":
/*!***************************************************************************!*\
  !*** ./src/components/widgets/dropZone.vue?vue&type=template&id=61784d2b ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropZone_vue_vue_type_template_id_61784d2b__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_dropZone_vue_vue_type_template_id_61784d2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./dropZone.vue?vue&type=template&id=61784d2b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/widgets/dropZone.vue?vue&type=template&id=61784d2b");


/***/ }),

/***/ "./src/views/apps/projects/create.vue?vue&type=template&id=95ca60a4":
/*!**************************************************************************!*\
  !*** ./src/views/apps/projects/create.vue?vue&type=template&id=95ca60a4 ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_95ca60a4__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_95ca60a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=95ca60a4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/create.vue?vue&type=template&id=95ca60a4");


/***/ })

}]);
//# sourceMappingURL=src_views_apps_projects_create_vue.js.map