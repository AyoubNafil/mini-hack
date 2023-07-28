"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_apps_projects_list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/CardItem.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/CardItem.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zhuowenli/vue-feather-icons */ "./node_modules/@zhuowenli/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      listData: [],
      cardData: [],
      api: [],
      apiKey: '',
      token: '',
      removeProjectModal: false,
      tasks: [],
      taskLength: null
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Inprogress":
          return "warning";
        case "Completed":
          return "success";
        default:
          return "secondary";
      }
    },
    toggleFavourite(ele) {
      ele.target.closest('.favourite-btn').classList.toggle("active");
    },
    removeProject() {
      this.removeProjectModal = true;
      document.getElementById("removeProjectModal");
      addEventListener("click", e => {
        document.getElementById("remove-project").addEventListener("click", () => {
          if (e.target.closest('.project-card')) {
            e.target.closest('.project-card').remove();
          }
          this.removeProjectModal = false;
        });
      });
    },
    Import() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    },
    async Export(boardId, boardName, boardDesc) {
      const boardData = {
        name: boardName,
        desc: boardDesc
      };
      this.api = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT Id, Key__c, Token__c FROM api__c where Name='Trello'");
      this.api = this.api[0];
      this.apiKey = this.api.Key__c;
      this.token = this.api.Token__c;
      const query = "SELECT Name, Placement__c FROM Card__c WHERE Board__c ='" + boardId + "'";
      (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query).then(result => {
        this.listData = result.map(card => ({
          name: card.Name,
          pos: card.Placement__c
        }));
        const query2 = "SELECT Name FROM Task__c WHERE Type__r.Board__c = '" + boardId + "'";
        (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query2).then(result2 => {
          this.cardData = result2.map(task => ({
            // Fix this line to use result2
            name: task.Name,
            listIndex: 0
          }));
          (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.exportToTrello)(boardData, this.listData, this.cardData, this.apiKey, this.token);
        }).catch(error => {
          console.error("Error fetching Task data:", error);
        });
      }).catch(error => {
        console.error("Error fetching Card data:", error);
      });

      //exportToTrello(boardData, this.listData, cardData);
    },

    async deleteProject(id) {
      // Use the `id` parameter in your logic here
      console.log("Deleting task with ID:", id);

      //confirmation popup
      const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
        customClass: {
          confirmButton: "btn btn-danger ml-2  m-2",
          cancelButton: "btn btn-success  m-2"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        showCancelButton: true
      }).then(result => {
        if (result.value) {
          try {
            (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.deleteSObject)("board__c", id);
            this.$emit("reloadListProject", id);
            this.modalShow3 = false;
            setTimeout(() => {
              //window.location.reload()
            }, 2000);
          } catch (error) {
            console.log("Error occurred while executing query:", error);
          }
          swalWithBootstrapButtons.fire("Deleted!", "Your Project has been deleted.", "success");
        } else if ( /* Read more about handling dismissals below */
        result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().DismissReason.cancel)) {
          swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  },
  components: {
    MoreHorizontalIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.MoreHorizontalIcon
  },
  async mounted() {
    try {
      const ProjectId = this.item.Id;
      this.tasks = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`SELECT Id FROM Task__c where Type__r.Board__c = '${ProjectId}'`);
      this.taskLength = this.tasks.length;
      console.log(this.taskLength);
    } catch (error) {
      console.error('Error fetching team members data:', error);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/list.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/list.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.././api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/page-header */ "./src/components/page-header.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");
/* harmony import */ var _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/gsqxdxog.json */ "./src/components/widgets/gsqxdxog.json");
/* harmony import */ var _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/lottie.vue */ "./src/components/widgets/lottie.vue");
/* harmony import */ var _CardItem_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardItem.vue */ "./src/views/apps/projects/CardItem.vue");








/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Project List",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_4__.description
    }]
  },
  data() {
    return {
      title: "Project List",
      items: [{
        text: "Projects",
        href: "/"
      }, {
        text: "Project List",
        active: true
      }],
      defaultOptions: {
        animationData: _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_5__
      },
      removeProjectModal: false,
      boards: [],
      filteredProjects: [],
      // Filtered data to be displayed based on the input
      searchText: ""
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageHeader: _components_page_header__WEBPACK_IMPORTED_MODULE_3__["default"],
    // Multiselect,
    // MoreHorizontalIcon,
    lottie: _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CardItem: _CardItem_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  methods: {
    handleReloadListProject(idToDelete) {
      //console.log(idToDelete);
      //console.log("old",this.task);
      const indexToDelete = this.displayedProjects.findIndex(item => item.Id === idToDelete);
      if (indexToDelete !== -1) {
        this.displayedProjects.splice(indexToDelete, 1);
      }
      //console.log("new",this.task);
    },

    async getProjectsRecords(query) {
      try {
        this.boards = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(query);
        this.filteredProjects = this.boards; // Initialize filtered data with all data
        if (this.boards.length > 0) {
          console.log("Projects fetched:", this.boards);
        } else {
          console.log("Empty data");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    },
    filterProjects() {
      const inputText = this.searchText.trim().toLowerCase();
      this.filteredProjects = this.boards.filter(project => project.Name.toLowerCase().startsWith(inputText));
      console.log(this.filteredProjects);
    }
  },
  created() {
    const queryAllProject = "SELECT Id, Name, OwnerId, Status__c, Deadline__c, Description__c, priority__c FROM board__c";
    this.getProjectsRecords(queryAllProject);
  },
  computed: {
    displayedProjects() {
      const inputText = this.searchText.trim().toLowerCase();
      return inputText === "" ? this.boards : this.filteredProjects;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/CardItem.vue?vue&type=template&id=28afcb15":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/CardItem.vue?vue&type=template&id=28afcb15 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_brands_Salesforce_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/brands/Salesforce.png */ "./src/assets/images/brands/Salesforce.png");


const _hoisted_1 = {
  class: "p-3 mt-n3 mx-n3 bg-soft-secondary rounded-top"
};
const _hoisted_2 = {
  class: "d-flex gap-1 align-items-center justify-content-end my-n2"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title bg-transparent fs-15"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-star-fill"
})], -1 /* HOISTED */);
const _hoisted_4 = {
  class: "dropdown"
};
const _hoisted_5 = {
  class: "btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15",
  "data-bs-toggle": "dropdown",
  "aria-haspopup": "true",
  "aria-expanded": "true"
};
const _hoisted_6 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-pencil-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropdown-divider"
}, null, -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "dropdown-divider"
}, null, -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-database-import align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-database-export align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "text-center pb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_brands_Salesforce_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  height: "50"
})], -1 /* HOISTED */);
const _hoisted_15 = {
  class: "py-3"
};
const _hoisted_16 = {
  class: "fs-14 mb-3"
};
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-1"
}, "Status", -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-1"
}, "Deadline", -1 /* HOISTED */);
const _hoisted_19 = {
  class: "fs-14"
};
const _hoisted_20 = {
  class: "d-flex align-items-center mt-3"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0 me-2"
}, "Team :", -1 /* HOISTED */);
const _hoisted_22 = {
  class: "avatar-group"
};
const _hoisted_23 = {
  class: "avatar-xxs"
};
const _hoisted_24 = ["src"];
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  class: "avatar-group-item",
  href: "javascript: void(0);",
  target: "_self",
  "data-bs-toggle": "tooltip"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xxs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title rounded-circle bg-undefined"
}, "+")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if")], -1 /* HOISTED */);
const _hoisted_26 = {
  class: "d-flex mb-2"
};
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Tasks")], -1 /* HOISTED */);
const _hoisted_28 = {
  class: "flex-shrink-0"
};
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-list-check align-bottom me-1 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_30 = {
  class: "progress progress-sm animated-progess"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_MoreHorizontalIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MoreHorizontalIcon");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_col, {
    xxl: "3",
    sm: "6",
    class: "project-card"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
      "no-body": ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "transparent",
          class: "btn avatar-xs p-0 favourite-btn",
          onClick: $options.toggleFavourite
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MoreHorizontalIcon, {
          class: "icon-sm"
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          class: "dropdown-item",
          to: "/apps/projects-overview"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          class: "dropdown-item",
          to: "/apps/projects-create"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")]),
          _: 1 /* STABLE */
        }), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "dropdown-item",
          onClick: _cache[0] || (_cache[0] = $event => $options.deleteProject($props.item.Id))
        }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Remove")]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "dropdown-item",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.Import && $options.Import(...args))
        }, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Import ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "dropdown-item",
          onClick: _cache[2] || (_cache[2] = $event => $options.Export($props.item.Id, $props.item.Name, $props.item.Description__c))
        }, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Export ")])])])]), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: `/apps/projects-overview/${$props.item.Id}`,
          class: "text-dark"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.Name), 1 /* TEXT */)]),

          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
          class: "gy-3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            cols: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`badge badge-soft-${$options.getStatusClass($props.item.status__c)} fs-12`)
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.status__c), 3 /* TEXT, CLASS */)])]),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            cols: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.Deadline__c), 1 /* TEXT */)])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.item.subItem, (subItem, index) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
            href: "javascript: void(0);",
            key: index,
            class: "avatar-group-item",
            title: "Donna Kline"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: subItem.imgTeam,
              alt: "",
              class: "rounded-circle img-fluid"
            }, null, 8 /* PROPS */, _hoisted_24)])]),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)), [[_directive_b_tooltip, void 0, void 0, {
            hover: true
          }]]);
        }), 128 /* KEYED_FRAGMENT */)), _hoisted_25])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.taskLength), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "progress-bar bg-success",
          role: "progressbar",
          "aria-valuenow": "71",
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`width: ${$data.taskLength}%`)
        }, null, 4 /* STYLE */)])])]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/list.vue?vue&type=template&id=37d20660":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/list.vue?vue&type=template&id=37d20660 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-add-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_2 = {
  class: "d-flex justify-content-sm-end gap-2"
};
const _hoisted_3 = {
  class: "search-box ms-2"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-search-line search-icon"
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  class: "mt-2 text-center"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mt-4 pt-2 fs-15 mx-4 mx-sm-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Are you Sure ?"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mx-4 mb-0"
}, "Are you Sure You want to Remove this Project ?")], -1 /* HOISTED */);
const _hoisted_7 = {
  class: "d-flex gap-2 justify-content-center mt-4 mb-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_card_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("card-item");
  const _component_lottie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lottie");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader, {
      title: $data.title,
      items: $data.items
    }, null, 8 /* PROPS */, ["title", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
      class: "g-4 mb-3"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        sm: "auto"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: "/apps/projects-create",
          class: "btn btn-primary"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add New")]),
          _: 1 /* STABLE */
        })])]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        sm: ""
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          class: "form-control",
          placeholder: "Search...",
          onChange: _cache[0] || (_cache[0] = (...args) => $options.filterProjects && $options.filterProjects(...args)),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.searchText = $event)
        }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchText]]), _hoisted_4])])]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.displayedProjects, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_card_item, {
          key: index,
          item: item,
          onReloadListProject: $options.handleReloadListProject
        }, null, 8 /* PROPS */, ["item", "onReloadListProject"]);
      }), 128 /* KEYED_FRAGMENT */))]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
      modelValue: $data.removeProjectModal,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.removeProjectModal = $event),
      id: "removeProjectModal",
      "hide-footer": "",
      class: "v-modal-custom",
      "modal-class": "zoomIn",
      centered: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lottie, {
        class: "avatar-xl",
        colors: "primary:#f7b84b,secondary:#f7666e",
        options: $data.defaultOptions,
        height: 100,
        width: 100
      }, null, 8 /* PROPS */, ["options"]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        class: "w-sm",
        onClick: _cache[2] || (_cache[2] = $event => $data.removeProjectModal = false)
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Close")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "danger",
        class: "w-sm",
        id: "remove-project"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Yes, Delete It!")]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])]),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./src/views/apps/projects/CardItem.vue":
/*!**********************************************!*\
  !*** ./src/views/apps/projects/CardItem.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardItem_vue_vue_type_template_id_28afcb15__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardItem.vue?vue&type=template&id=28afcb15 */ "./src/views/apps/projects/CardItem.vue?vue&type=template&id=28afcb15");
/* harmony import */ var _CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardItem.vue?vue&type=script&lang=js */ "./src/views/apps/projects/CardItem.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CardItem_vue_vue_type_template_id_28afcb15__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/projects/CardItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/projects/list.vue":
/*!******************************************!*\
  !*** ./src/views/apps/projects/list.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_37d20660__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=37d20660 */ "./src/views/apps/projects/list.vue?vue&type=template&id=37d20660");
/* harmony import */ var _list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js */ "./src/views/apps/projects/list.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_list_vue_vue_type_template_id_37d20660__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/projects/list.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/projects/CardItem.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/views/apps/projects/CardItem.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/CardItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/projects/list.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/views/apps/projects/list.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/list.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/projects/CardItem.vue?vue&type=template&id=28afcb15":
/*!****************************************************************************!*\
  !*** ./src/views/apps/projects/CardItem.vue?vue&type=template&id=28afcb15 ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardItem_vue_vue_type_template_id_28afcb15__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CardItem_vue_vue_type_template_id_28afcb15__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CardItem.vue?vue&type=template&id=28afcb15 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/CardItem.vue?vue&type=template&id=28afcb15");


/***/ }),

/***/ "./src/views/apps/projects/list.vue?vue&type=template&id=37d20660":
/*!************************************************************************!*\
  !*** ./src/views/apps/projects/list.vue?vue&type=template&id=37d20660 ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_template_id_37d20660__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_template_id_37d20660__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./list.vue?vue&type=template&id=37d20660 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/list.vue?vue&type=template&id=37d20660");


/***/ })

}]);
//# sourceMappingURL=src_views_apps_projects_list_vue.js.map