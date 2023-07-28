(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_apps_tasks_details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/page-header */ "./src/components/page-header.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");
/* harmony import */ var _components_widgets_kbtmbyzy_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/kbtmbyzy.json */ "./src/components/widgets/kbtmbyzy.json");
/* harmony import */ var _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/lottie.vue */ "./src/components/widgets/lottie.vue");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
//import Multiselect from "@vueform/multiselect";











/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Tasks Details",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_3__.description
    }]
  },
  data() {
    return {
      title: "Tasks Details",
      items: [{
        text: "Tasks",
        href: "/"
      }, {
        text: "Tasks Details",
        active: true
      }],
      modalShow: false,
      modalShow1: false,
      task: [],
      users: [],
      board: "",
      selectedUser: "",
      titleInput: "",
      date2: "",
      statusInput: "",
      priorityInput: "",
      descriptionInput: "",
      codeInput: "",
      TaskId: "",
      value: null,
      defaultOptions: {
        animationData: _components_widgets_kbtmbyzy_json__WEBPACK_IMPORTED_MODULE_4__
      },
      teamMembers: [],
      inputValues: {}
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageHeader: _components_page_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    lottie: _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    //Multiselect,

    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  async mounted() {
    try {
      this.getTaskDetail();
      this.teamMembers = await this.fetchTeamMembersData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    addTicket() {
      // Get the value of the board name from the input field
      const selectedUser = this.selectedUser;
      const titleInput = this.titleInput;
      const date2 = this.date2;
      const statusInput = this.statusInput;
      const priorityInput = this.priorityInput;
      const descriptionInput = this.descriptionInput;
      const codeInput = this.codeInput;

      // Create the data object to pass to createSObject function
      const data = {
        Name: titleInput,
        Status__c: statusInput,
        Priority__c: priorityInput,
        DueDate__c: date2,
        Task__c: this.TaskId,
        Assigned__c: selectedUser,
        Description__c: descriptionInput,
        Code__c: codeInput
      };

      // Call the createSObject function from your utile.js file
      (0,_api_utile__WEBPACK_IMPORTED_MODULE_6__.createSObject)("Ticket__c", data, () => {
        // Callback function called on success
        window.location.reload();
      });

      // Clear the input field and close the modal
      this.selectedUser = "";
      this.titleInput = "";
      this.date2 = "";
      this.statusInput = "";
      this.priorityInput = "";
      this.descriptionInput = "";
      this.codeInput = "";
      this.modalShow1 = false;
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire("Good job!", "Ticket added Succesfly!", "success");
    },
    async getTaskDetail() {
      try {
        this.TaskId = this.$route.params.id;
        this.tags = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_6__.executeQuery)("SELECT Id, Feature__r.Name FROM Feature_Task__c where Task__c = " + "'" + this.TaskId + "'");
        this.task = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_6__.executeQuery)("SELECT Id,Name,CreatedDate ,Type__r.Board__r.Name , Date__c,Watch__c,Type__r.name,Description__c FROM task__c where id = " + "'" + this.TaskId + "'");
        this.users = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_6__.executeQuery)("SELECT Id,User__c,User__r.Name FROM member_task__c where task__c = " + "'" + this.TaskId + "'");
        console.log(this.users);
        console.log(this.TaskId);
        this.task = this.task[0];
        this.task.CreatedDate = this.task.CreatedDate.substring(0, 10);
        this.task.Watch__c = this.task.Type__r.Name;
        this.board = this.task.Type__r.Board__r.Name;
        console.log(this.task);
        this.task.Id = this.task.Id.substring(0, 16);
        if (this.task) {
          console.log(this.task);
          console.log("Description " + this.task.Description__c);
          console.log(this.task.Type__r.Name);
        } else {
          console.log("Empty No task with this id");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    },
    async fetchTeamMembersData() {
      try {
        // Use executeQuery or your API utility to fetch data from the API
        // Replace the below query with your actual query to fetch team members' data
        this.TaskId = this.$route.params.id;
        const test = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_6__.executeQuery)(`SELECT Id,Task__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Task__c where Task__c = '${this.TaskId}'`);
        console.log("test333: ", test);
        const formattedTeamMembers = test.map(record => {
          this.inputValues[record.User__r.Id] = 0;
          return {
            Id: record.User__r.Id,
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
    },

    async updatePoints() {
      console.log(this.inputValues);
    },
    incrementValue(itemId) {
      // Increment the input value
      const currentValue = this.inputValues[itemId] || 0;
      this.inputValues[itemId] = currentValue + 1;
    },
    decrementValue(itemId) {
      // Decrement the input value
      const currentValue = this.inputValues[itemId] || 0;
      if (currentValue > 0) {
        this.inputValues[itemId] = currentValue - 1;
      }
    },
    updateInputValue(itemId, value) {
      // Update the input value when the user types a value directly
      this.inputValues[itemId] = parseInt(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=template&id=8c36e504":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=template&id=8c36e504 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");
/* harmony import */ var _assets_images_users_avatar_7_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/users/avatar-7.jpg */ "./src/assets/images/users/avatar-7.jpg");
/* harmony import */ var _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/users/avatar-10.jpg */ "./src/assets/images/users/avatar-10.jpg");
/* harmony import */ var _assets_images_users_avatar_8_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/users/avatar-8.jpg */ "./src/assets/images/users/avatar-8.jpg");
/* harmony import */ var _assets_images_small_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/small/img-4.jpg */ "./src/assets/images/small/img-4.jpg");
/* harmony import */ var _assets_images_small_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/small/img-5.jpg */ "./src/assets/images/small/img-5.jpg");
/* harmony import */ var _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/users/avatar-6.jpg */ "./src/assets/images/users/avatar-6.jpg");
/* harmony import */ var _assets_images_users_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/images/users/avatar-2.jpg */ "./src/assets/images/users/avatar-2.jpg");
/* harmony import */ var _assets_images_users_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/images/users/avatar-3.jpg */ "./src/assets/images/users/avatar-3.jpg");
/* harmony import */ var _assets_images_users_avatar_4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/images/users/avatar-4.jpg */ "./src/assets/images/users/avatar-4.jpg");











const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "card-title mb-3 flex-grow-1 text-start"
}, "Time Tracking", -1 /* HOISTED */);
const _hoisted_2 = {
  class: "mb-2"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  class: "mb-1"
}, "0 hrs 0 min", -1 /* HOISTED */);
const _hoisted_4 = {
  class: "fs-14 mb-4"
};
const _hoisted_5 = {
  class: "hstack gap-2 justify-content-center"
};
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-stop-circle-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-play-circle-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_8 = {
  class: "mb-4 d-flex justify-content-center align-items-center"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-stop-circle-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_10 = {
  class: "table-card"
};
const _hoisted_11 = {
  class: "table mb-0"
};
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Task's No", -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Task's Title", -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Project Name", -1 /* HOISTED */);
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Priority", -1 /* HOISTED */);
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Status", -1 /* HOISTED */);
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  class: "fw-medium"
}, "Due Date", -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "d-flex mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "card-title mb-0 flex-grow-1"
}, "Assigned To"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"flex-shrink-0\">\n                                <b-button type=\"button\" variant=\"soft-danger\" size=\"sm\" @click=\"modalShow = !modalShow\">\n                                    <i class=\"ri-share-line me-1 align-bottom\"></i>\n                                    Assigned Member\n                                </b-button>\n                            </div> ")], -1 /* HOISTED */);
const _hoisted_19 = {
  class: "list-unstyled vstack gap-3 mb-0"
};
const _hoisted_20 = {
  class: "d-flex align-items-center"
};
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_22 = {
  class: "flex-grow-1 ms-2"
};
const _hoisted_23 = {
  class: "mb-1"
};
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Full Stack Developer", -1 /* HOISTED */);
const _hoisted_25 = {
  class: "flex-shrink-0"
};
const _hoisted_26 = {
  class: "dropdown"
};
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
})], -1 /* HOISTED */);
const _hoisted_28 = {
  class: "dropdown-menu"
};
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-star-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-3"
}, "Attachments", -1 /* HOISTED */);
const _hoisted_33 = {
  class: "vstack gap-2"
};
const _hoisted_34 = {
  class: "border rounded border-dashed p-2"
};
const _hoisted_35 = {
  class: "d-flex align-items-center"
};
const _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-secondary rounded fs-24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-image-fill"
})])])], -1 /* HOISTED */);
const _hoisted_37 = {
  class: "flex-grow-1 overflow-hidden"
};
const _hoisted_38 = {
  class: "fs-13 mb-1"
};
const _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "1.2MB", -1 /* HOISTED */);
const _hoisted_40 = {
  class: "flex-shrink-0 ms-2"
};
const _hoisted_41 = {
  class: "d-flex gap-1"
};
const _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-icon text-muted btn-sm fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-download-2-line"
})], -1 /* HOISTED */);
const _hoisted_43 = {
  class: "dropdown"
};
const _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
})], -1 /* HOISTED */);
const _hoisted_45 = {
  class: "dropdown-menu"
};
const _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-pencil-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_48 = {
  class: "mt-2 text-center"
};
const _hoisted_49 = {
  class: "text-muted"
};
const _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mb-3 fw-semibold text-uppercase"
}, "Summary", -1 /* HOISTED */);
const _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mb-3 fw-semibold text-uppercase"
}, "Sub-tasks", -1 /* HOISTED */);
const _hoisted_52 = {
  class: "ps-3 list-unstyled vstack gap-2"
};
const _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "Avatar",
  class: "img-fluid rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_54 = {
  class: "flex-grow-1"
};
const _hoisted_55 = {
  class: "fs-13 mb-0"
};
const _hoisted_56 = {
  class: "input-step step-primary"
};
const _hoisted_57 = ["onClick"];
const _hoisted_58 = ["value", "id", "onInput"];
const _hoisted_59 = ["onClick"];
const _hoisted_60 = {
  class: "pt-3 border-top border-top-dashed mt-4"
};
const _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mb-3 fw-semibold text-uppercase"
}, "Tasks Tags", -1 /* HOISTED */);
const _hoisted_62 = {
  class: "hstack flex-wrap gap-2 fs-15"
};
const _hoisted_63 = {
  class: "my-button-container"
};
const _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-save-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_65 = {
  class: "nav nav-tabs-custom rounded card-header-tabs border-bottom-0",
  role: "tablist"
};
const _hoisted_66 = {
  class: "nav-item"
};
const _hoisted_67 = {
  class: "nav-item"
};
const _hoisted_68 = {
  class: "nav-item"
};
const _hoisted_69 = {
  class: "tab-content"
};
const _hoisted_70 = {
  class: "tab-pane active",
  id: "home-1",
  role: "tabpanel"
};
const _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-4"
}, "Comments", -1 /* HOISTED */);
const _hoisted_72 = {
  "data-simplebar": "",
  style: {
    "height": "508px"
  },
  class: "px-3 mx-n3 mb-2"
};
const _hoisted_73 = {
  class: "d-flex mb-4"
};
const _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_7_jpg__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_75 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_76 = {
  class: "fs-13"
};
const _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "20 Dec 2021 - 05:47AM", -1 /* HOISTED */);
const _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " I am getting message from customers that when they place order always get error message . ", -1 /* HOISTED */);
const _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_80 = {
  class: "d-flex mt-4"
};
const _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_82 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_83 = {
  class: "fs-13"
};
const _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "22 Dec 2021 - 02:32PM", -1 /* HOISTED */);
const _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam. ", -1 /* HOISTED */);
const _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_87 = {
  class: "d-flex mb-4"
};
const _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_8_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_89 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_90 = {
  class: "fs-13"
};
const _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "24 Dec 2021 - 05:20PM", -1 /* HOISTED */);
const _hoisted_92 = {
  class: "text-muted"
};
const _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_94 = {
  class: "d-flex"
};
const _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_96 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_97 = {
  class: "fs-13"
};
const _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "26 min ago", -1 /* HOISTED */);
const _hoisted_99 = {
  class: "text-muted"
};
const _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_small_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__,
  alt: "",
  class: "img-fluid rounded"
}, null, -1 /* HOISTED */);
const _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_small_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__,
  alt: "",
  class: "img-fluid rounded"
}, null, -1 /* HOISTED */);
const _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_103 = {
  class: "d-flex mt-4"
};
const _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_7__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_105 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_106 = {
  class: "fs-13"
};
const _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted"
}, "8 sec ago", -1 /* HOISTED */);
const _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, " Other shipping methods are available at checkout if you want your purchase delivered faster. ", -1 /* HOISTED */);
const _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_110 = {
  class: "mt-4"
};
const _hoisted_111 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "exampleFormControlTextarea1",
  class: "form-label"
}, "Leave a Comments", -1 /* HOISTED */);
const _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  class: "form-control bg-light border-light",
  id: "exampleFormControlTextarea1",
  rows: "3",
  placeholder: "Enter comments"
}, null, -1 /* HOISTED */);
const _hoisted_113 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-attachment-line fs-16"
}, null, -1 /* HOISTED */);
const _hoisted_114 = {
  class: "tab-pane",
  id: "messages-1",
  role: "tabpanel"
};
const _hoisted_115 = {
  class: "table-responsive table-card"
};
const _hoisted_116 = {
  class: "table table-borderless align-middle mb-0"
};
const _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  class: "table-light text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "File Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Size"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Upload Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Action")])], -1 /* HOISTED */);
const _hoisted_118 = {
  class: "d-flex align-items-center"
};
const _hoisted_119 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-soft-danger text-danger rounded fs-20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-image-2-fill"
})])], -1 /* HOISTED */);
const _hoisted_120 = {
  class: "ms-3 flex-grow-1"
};
const _hoisted_121 = {
  class: "fs-15 mb-0"
};
const _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "PNG File", -1 /* HOISTED */);
const _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "879 KB", -1 /* HOISTED */);
const _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "02 Nov 2021", -1 /* HOISTED */);
const _hoisted_125 = {
  class: "dropdown"
};
const _hoisted_126 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-equalizer-fill"
}, null, -1 /* HOISTED */);
const _hoisted_127 = {
  class: "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "dropdownMenuLink4",
  "data-popper-placement": "bottom-end",
  style: {
    "position": "absolute",
    "inset": "0px 0px auto auto",
    "margin": "0px",
    "transform": "translate(0px, 23px)"
  }
};
const _hoisted_128 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill me-2 align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-download-2-fill me-2 align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_130 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-line me-2 align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_131 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "tab-pane",
  id: "profile-1",
  role: "tabpanel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "card-title mb-4 pb-2"
}, "Time Entries"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "table-responsive table-card"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  class: "table align-middle mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  class: "table-light text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Member"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Duration"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Timer Idle"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Tasks Title")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody")])])], -1 /* HOISTED */);
const _hoisted_132 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "search-box mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  class: "form-control bg-light border-light",
  placeholder: "Search here..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-search-line search-icon"
})], -1 /* HOISTED */);
const _hoisted_133 = {
  class: "mb-4 d-flex align-items-center"
};
const _hoisted_134 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "mb-0 fs-13"
}, "Members :")], -1 /* HOISTED */);
const _hoisted_135 = {
  class: "avatar-group justify-content-center"
};
const _hoisted_136 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "rounded-circle img-fluid"
})], -1 /* HOISTED */);
const _hoisted_137 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_8_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "rounded-circle img-fluid"
})], -1 /* HOISTED */);
const _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_8__,
  alt: "",
  class: "rounded-circle img-fluid"
})], -1 /* HOISTED */);
const _hoisted_139 = {
  class: "mx-n4 px-4",
  "data-simplebar": "",
  style: {
    "max-height": "225px"
  }
};
const _hoisted_140 = {
  class: "vstack gap-3"
};
const _hoisted_141 = {
  class: "d-flex align-items-center"
};
const _hoisted_142 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_8__,
  alt: "",
  class: "img-fluid rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_143 = {
  class: "flex-grow-1"
};
const _hoisted_144 = {
  class: "fs-13 mb-0"
};
const _hoisted_145 = {
  class: "flex-shrink-0"
};
const _hoisted_146 = {
  class: "d-flex align-items-center"
};
const _hoisted_147 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-soft-danger text-danger rounded-circle"
}, "HB")], -1 /* HOISTED */);
const _hoisted_148 = {
  class: "flex-grow-1"
};
const _hoisted_149 = {
  class: "fs-13 mb-0"
};
const _hoisted_150 = {
  class: "flex-shrink-0"
};
const _hoisted_151 = {
  class: "d-flex align-items-center"
};
const _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_9__,
  alt: "",
  class: "img-fluid rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_153 = {
  class: "flex-grow-1"
};
const _hoisted_154 = {
  class: "fs-13 mb-0"
};
const _hoisted_155 = {
  class: "flex-shrink-0"
};
const _hoisted_156 = {
  class: "d-flex align-items-center"
};
const _hoisted_157 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_4_jpg__WEBPACK_IMPORTED_MODULE_10__,
  alt: "",
  class: "img-fluid rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_158 = {
  class: "flex-grow-1"
};
const _hoisted_159 = {
  class: "fs-13 mb-0"
};
const _hoisted_160 = {
  class: "flex-shrink-0"
};
const _hoisted_161 = {
  class: "d-flex align-items-center"
};
const _hoisted_162 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-soft-success text-success rounded-circle"
}, " AC ")], -1 /* HOISTED */);
const _hoisted_163 = {
  class: "flex-grow-1"
};
const _hoisted_164 = {
  class: "fs-13 mb-0"
};
const _hoisted_165 = {
  class: "flex-shrink-0"
};
const _hoisted_166 = {
  class: "d-flex align-items-center"
};
const _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_7_jpg__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  class: "img-fluid rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_168 = {
  class: "flex-grow-1"
};
const _hoisted_169 = {
  class: "fs-13 mb-0"
};
const _hoisted_170 = {
  class: "flex-shrink-0"
};
const _hoisted_171 = {
  class: "modal-footer v-modal-footer"
};
const _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "tasksTitle-field",
  class: "form-label"
}, "Title", -1 /* HOISTED */);
const _hoisted_173 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "tasksTitle-field",
  class: "form-label"
}, "Description", -1 /* HOISTED */);
const _hoisted_174 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "tasksTitle-field",
  class: "form-label"
}, "Code", -1 /* HOISTED */);
const _hoisted_175 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "assignedtoName-field",
  class: "form-label"
}, "Assigned To", -1 /* HOISTED */);
const _hoisted_176 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  disabled: ""
}, "Select an option", -1 /* HOISTED */);
const _hoisted_177 = ["value"];
const _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "duedate-field",
  class: "form-label"
}, "Due Date", -1 /* HOISTED */);
const _hoisted_179 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "ticket-status",
  class: "form-label"
}, "Status", -1 /* HOISTED */);
const _hoisted_180 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Status", -1 /* HOISTED */);
const _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "New"
}, "New", -1 /* HOISTED */);
const _hoisted_182 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Inprogress"
}, "Inprogress", -1 /* HOISTED */);
const _hoisted_183 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Closed"
}, "Closed", -1 /* HOISTED */);
const _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Open"
}, "Open", -1 /* HOISTED */);
const _hoisted_185 = [_hoisted_180, _hoisted_181, _hoisted_182, _hoisted_183, _hoisted_184];
const _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "priority-field",
  class: "form-label"
}, "Priority", -1 /* HOISTED */);
const _hoisted_187 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Priority", -1 /* HOISTED */);
const _hoisted_188 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "High"
}, "High", -1 /* HOISTED */);
const _hoisted_189 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Medium"
}, "Medium", -1 /* HOISTED */);
const _hoisted_190 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Low"
}, "Low", -1 /* HOISTED */);
const _hoisted_191 = [_hoisted_187, _hoisted_188, _hoisted_189, _hoisted_190];
const _hoisted_192 = {
  class: "modal-footer v-modal-footer mt-3"
};
const _hoisted_193 = {
  class: "hstack gap-2 justify-content-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");
  const _component_lottie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lottie");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  const _directive_b_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("b-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader, {
      title: $data.title,
      items: $data.items
    }, null, 8 /* PROPS */, ["title", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "text-center"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lottie, {
              colors: "primary:#687cfe,secondary:#ff7f5d",
              options: $data.defaultOptions,
              height: 90,
              width: 90
            }, null, 8 /* PROPS */, ["options"])]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
              variant: "danger",
              size: "sm"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Stop")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
              variant: "primary",
              size: "sm"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Start")]),
              _: 1 /* STABLE */
            })])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "mb-3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
              variant: "danger",
              size: "sm",
              onClick: _cache[0] || (_cache[0] = $event => $data.modalShow1 = !$data.modalShow1)
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Ticket ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.Id), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.Name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.board), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              variant: "soft-danger",
              class: "badge-soft-danger"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("High")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              variant: "soft-secondary",
              class: "badge-soft-secondary"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.Watch__c), 1 /* TEXT */)]),

              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.CreatedDate), 1 /* TEXT */)])])])])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "mb-3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_19, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.teamMembers, (item, index) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                key: index
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                to: "/pages/profile",
                class: "text-reset"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)]),

                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */)]), _hoisted_24]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "dropdown-item",
                href: "javascript:void(0);"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View ")]),
                _: 1 /* STABLE */
              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "dropdown-item",
                href: "javascript:void(0);"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Favourite ")]),
                _: 1 /* STABLE */
              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "dropdown-item",
                href: "javascript:void(0);"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete ")]),
                _: 1 /* STABLE */
              })])])])])])]);
            }), 128 /* KEYED_FRAGMENT */))])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "text-body text-truncate d-block"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Banner.png")]),
              _: 1 /* STABLE */
            })]), _hoisted_39]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rename")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete")]),
              _: 1 /* STABLE */
            })])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
              type: "button",
              variant: "primary"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View more")]),
              _: 1 /* STABLE */
            })])])]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "9"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.task.Description__c), 1 /* TEXT */), _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_52, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.teamMembers, (item, index) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: index,
                class: "d-flex align-items-center mb-3"
              }, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                href: `#`,
                class: "text-body d-block"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)]),

                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                class: "minus",
                onClick: $event => this.decrementValue(item.Id)
              }, "–", 8 /* PROPS */, _hoisted_57), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                type: "number",
                class: "product-quantity",
                value: $data.inputValues[item.Id],
                min: "0",
                max: "100",
                id: item.Id,
                ref_for: true,
                ref: `input-${item.Id}`,
                onInput: $event => this.updateInputValue(item.Id, $event.target.value)
              }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_58), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                type: "button",
                class: "plus",
                onClick: $event => this.incrementValue(item.Id)
              }, "+", 8 /* PROPS */, _hoisted_59)])]);
            }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(this.tags, (item, index) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_badge, {
                variant: "soft-info",
                tag: "div",
                class: "fw-medium badge-soft-info",
                key: index
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.Feature__r.Name), 1 /* TEXT */)]),

                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */);
            }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
              variant: "secondary",
              onClick: $options.updatePoints
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update ")]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"])])])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": ""
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link active",
              "data-bs-toggle": "tab",
              href: "#home-1",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Comments (5) ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link",
              "data-bs-toggle": "tab",
              href: "#messages-1",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Attachments File (1) ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link",
              "data-bs-toggle": "tab",
              href: "#profile-1",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Time Entries (0 hrs 0 min) ")]),
              _: 1 /* STABLE */
            })])])])]),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: "/pages/profile",
              class: "text-reset"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Joseph Parker")]),
              _: 1 /* STABLE */
            }), _hoisted_77]), _hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: "/pages/profile",
              class: "text-reset"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tonya Noble")]),
              _: 1 /* STABLE */
            }), _hoisted_84]), _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [_hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: "/pages/profile",
              class: "text-reset"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Thomas Taylor")]),
              _: 1 /* STABLE */
            }), _hoisted_91]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" If you have further questions, please contact Customer Support from the “Action Menu” on your "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "text-decoration-underline"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Online Order Support")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_93, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: "/pages/profile",
              class: "text-reset"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tonya Noble")]),
              _: 1 /* STABLE */
            }), _hoisted_98]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0)",
              class: "text-decoration-underline"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Online Order Support")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more. ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "g-2 mb-3"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "1",
                sm: "2",
                cols: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_100]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "1",
                sm: "2",
                cols: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_101]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: "/pages/profile",
              class: "text-reset"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Nancy Martino")]),
              _: 1 /* STABLE */
            }), _hoisted_107]), _hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript: void(0);",
              class: "badge text-muted bg-light"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
              _: 1 /* STABLE */
            })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "g-3"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                lg: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_111, _hoisted_112]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                cols: "12",
                class: "text-end"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "button",
                  variant: "ghost-secondary",
                  class: "btn-icon me-1"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_113]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript:void(0);",
                  class: "btn btn-primary"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Post Comments ")]),
                  _: 1 /* STABLE */
                })]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_116, [_hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [_hoisted_119, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Banner.png ")]),
              _: 1 /* STABLE */
            })])])])]), _hoisted_122, _hoisted_123, _hoisted_124, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              class: "btn btn-light btn-icon",
              id: "dropdownMenuLink4",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "true"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_126]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Download ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_130, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete ")]),
              _: 1 /* STABLE */
            })])])])])])])])])]), _hoisted_131])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
      modelValue: $data.modalShow,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.modalShow = $event),
      "hide-footer": "",
      title: "Team Members",
      "body-class": "p-4",
      "content-class": "border-0",
      "header-class": "p-3 ps-4 bg-soft-success",
      class: "v-modal-custom",
      centered: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_132, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [_hoisted_134, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_135, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
        href: "javascript: void(0);",
        class: "avatar-group-item",
        title: "Tonya Noble"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_136]),
        _: 1 /* STABLE */
      })), [[_directive_b_tooltip, void 0, void 0, {
        hover: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
        href: "javascript: void(0);",
        class: "avatar-group-item",
        title: "Thomas Taylor"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_137]),
        _: 1 /* STABLE */
      })), [[_directive_b_tooltip, void 0, void 0, {
        hover: true
      }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
        href: "javascript: void(0);",
        class: "avatar-group-item",
        title: "Nancy Martino"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_138]),
        _: 1 /* STABLE */
      })), [[_directive_b_tooltip, void 0, void 0, {
        hover: true
      }]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, [_hoisted_142, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_144, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-body d-block"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Nancy Martino ")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_146, [_hoisted_147, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_149, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-body d-block"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Henry Baird ")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [_hoisted_152, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-body d-block"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Frank Hook ")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_158, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-body d-block"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Jennifer Carter ")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_161, [_hoisted_162, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_164, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-body d-block"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Alexis Clarke ")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [_hoisted_167, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_168, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-body d-block"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Joseph Parker ")]),
        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_170, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add")]),
        _: 1 /* STABLE */
      })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "light",
        class: "w-xs",
        onClick: _cache[1] || (_cache[1] = $event => $data.modalShow = false)
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cancel")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "success",
        class: "w-xs"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Assigned")]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
      modelValue: $data.modalShow1,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => $data.modalShow1 = $event),
      id: "showModal",
      "modal-class": "zoomIn",
      "title-class": "exampleModalLabel",
      "hide-footer": "",
      "header-class": "p-3 bg-soft-info",
      class: "v-modal-custom",
      centered: "",
      "no-close-on-backdrop": "",
      size: "lg"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form, {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.addTicket, ["prevent"])
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
          class: "g-3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "12"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_172, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              type: "text",
              id: "tasksTitle",
              class: "form-control",
              placeholder: "Title",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.titleInput = $event)
            }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.titleInput]])])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "12"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_173, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
              id: "tasksTitle",
              class: "form-control",
              placeholder: "Description",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.descriptionInput = $event)
            }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.descriptionInput]])])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "12"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_174, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
              id: "tasksTitle",
              class: "form-control",
              placeholder: "Code",
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.codeInput = $event)
            }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.codeInput]])])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_175, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
              id: "assignedtoName",
              class: "form-select",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.selectedUser = $event)
            }, [_hoisted_176, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.users, user => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
                key: user.User__c,
                value: user.User__c
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.User__r.Name), 9 /* TEXT, PROPS */, _hoisted_177);
            }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selectedUser]])])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_178, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
              modelValue: $data.date2,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.date2 = $event),
              config: _ctx.config,
              class: "form-control bg-light border-light",
              id: "ddate"
            }, null, 8 /* PROPS */, ["modelValue", "config"])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_179, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
              class: "form-control",
              "data-plugin": "choices",
              name: "ticket-status",
              id: "ticketstatus",
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $data.statusInput = $event)
            }, _hoisted_185, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.statusInput]])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
              class: "form-control",
              "data-plugin": "choices",
              name: "priority-field",
              id: "priority",
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $data.priorityInput = $event)
            }, _hoisted_191, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.priorityInput]])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_192, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "light",
          onClick: _cache[10] || (_cache[10] = $event => $data.modalShow1 = false),
          id: "closemodal"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "submit",
          variant: "success",
          id: "add"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Ticket ")]),
          _: 1 /* STABLE */
        })])])]),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onSubmit"])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])]),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.my-button-container {\n    display: flex;\n    justify-content: flex-end;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/apps/tasks/details.vue":
/*!******************************************!*\
  !*** ./src/views/apps/tasks/details.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_vue_vue_type_template_id_8c36e504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=8c36e504 */ "./src/views/apps/tasks/details.vue?vue&type=template&id=8c36e504");
/* harmony import */ var _details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js */ "./src/views/apps/tasks/details.vue?vue&type=script&lang=js");
/* harmony import */ var _details_vue_vue_type_style_index_0_id_8c36e504_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&id=8c36e504&lang=css */ "./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_details_vue_vue_type_template_id_8c36e504__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/tasks/details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/tasks/details.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/views/apps/tasks/details.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/tasks/details.vue?vue&type=template&id=8c36e504":
/*!************************************************************************!*\
  !*** ./src/views/apps/tasks/details.vue?vue&type=template&id=8c36e504 ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_template_id_8c36e504__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_template_id_8c36e504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./details.vue?vue&type=template&id=8c36e504 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=template&id=8c36e504");


/***/ }),

/***/ "./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css":
/*!**************************************************************************************!*\
  !*** ./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_style_index_0_id_8c36e504_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./details.vue?vue&type=style&index=0&id=8c36e504&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_style_index_0_id_8c36e504_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_style_index_0_id_8c36e504_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_style_index_0_id_8c36e504_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_details_vue_vue_type_style_index_0_id_8c36e504_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./details.vue?vue&type=style&index=0&id=8c36e504&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/tasks/details.vue?vue&type=style&index=0&id=8c36e504&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("732e2b5b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/widgets/kbtmbyzy.json":
/*!**********************************************!*\
  !*** ./src/components/widgets/kbtmbyzy.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"v":"5.6.10","fr":24,"ip":0,"op":49,"w":500,"h":500,"nm":"45-clock-time-outline","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"02092020","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-105,15,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"02092020002","np":3,"mn":"ADBE Checkbox Control","ix":1,"en":1,"ef":[{"ty":7,"nm":"Checkbox","mn":"ADBE Checkbox Control-0001","ix":1,"v":{"a":0,"k":0,"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"lordicon.com Outlines","cl":"com","sr":1,"ks":{"o":{"a":0,"k":20,"ix":11,"x":"var $bm_rt;\\nvar checkbox = thisComp.layer(\'02092020\').effect(\'02092020002\')(\'Checkbox\');\\nif (checkbox == 1) {\\n    $bm_rt = 20;\\n} else {\\n    $bm_rt = 0;\\n}\\n;"},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[249.934,481.369,0],"ix":2},"a":{"a":0,"k":[79.934,0.369,0],"ix":1},"s":{"a":0,"k":[265.159,265.159,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.415,0],[11.014,0],[11.014,-2.523],[4.656,-2.523],[4.656,-14.809],[1.415,-14.809]],"c":true},"ix":2},"nm":"l","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"l","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[11.167,-7.199],[12.992,-1.661],[18.243,0.369],[23.514,-1.743],[25.381,-7.548],[23.494,-13.127],[18.284,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[14.49,-7.302],[15.577,-11.609],[18.305,-12.86],[21.689,-10.235],[22.058,-7.589],[21.053,-3.343],[18.284,-1.969],[15.597,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.287,-0.841],[-0.144,-0.82],[0,0],[0.164,0.656],[0.226,1.743],[2.236,0.205],[0,2.769],[0.923,0.8],[1.641,-0.021],[0,0]],"o":[[0,0],[0,0],[0,0],[0.533,0],[0.205,0.574],[0,0],[-0.164,-0.246],[-0.103,-0.41],[-0.267,-1.928],[0.718,-0.205],[0,-0.964],[-1.19,-1.026],[0,0],[0,0]],"v":[[27.381,0],[30.622,0],[30.622,-5.989],[33.411,-5.989],[35.011,-5.148],[35.811,0],[39.318,0],[38.867,-1.067],[38.416,-3.938],[35.749,-7.343],[38.847,-10.973],[37.554,-13.824],[33.063,-14.829],[27.381,-14.829]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.492,-0.349],[0,-1.005],[0.226,-0.164],[0.369,0],[0,0]],"o":[[0,0],[1.005,0],[0.287,0.185],[0,1.046],[-0.513,0.41],[0,0],[0,0]],"v":[[30.519,-12.491],[32.652,-12.491],[34.744,-12.142],[35.524,-10.481],[34.703,-8.758],[33.083,-8.348],[30.519,-8.348]],"c":true},"ix":2},"nm":"r","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"r","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.554,0.103],[0,4.553],[1.866,1.374],[0.82,0],[0,0]],"o":[[0,0],[1.497,0],[2.81,-0.513],[0,-2.113],[-1.784,-1.313],[0,0],[0,0]],"v":[[41.068,0],[45.683,0],[48.349,-0.164],[53.6,-7.609],[51.077,-13.434],[45.97,-14.768],[41.068,-14.788]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-0.656,-0.185],[0,-2.092],[1.251,-1.251],[1.354,0],[0.349,0.021]],"o":[[1.825,-0.082],[1.99,0.554],[0,0.718],[-0.923,0.923],[-0.369,0],[0,0]],"v":[[44.288,-12.388],[47.611,-12.183],[50.318,-7.609],[48.985,-3.425],[45.539,-2.4],[44.288,-2.441]],"c":true},"ix":2},"nm":"d","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"d","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[55.669,0],[58.849,0],[58.849,-14.87],[55.669,-14.87]],"c":true},"ix":2},"nm":"i","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"i","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[73.104,-9.989],[67.587,-14.911],[60.798,-7.097],[67.566,0.349],[71.894,-1.313],[73.227,-4.799],[69.884,-4.799],[67.218,-1.99],[64.121,-7.076],[67.464,-12.593],[69.864,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[74.546,-7.199],[76.372,-1.661],[81.622,0.369],[86.894,-1.743],[88.76,-7.548],[86.873,-13.127],[81.663,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[77.869,-7.302],[78.956,-11.609],[81.684,-12.86],[85.068,-10.235],[85.437,-7.589],[84.432,-3.343],[81.663,-1.969],[78.977,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[91.007,0],[94.001,0],[94.001,-12.306],[99.744,0],[104.113,0],[104.113,-14.829],[101.159,-14.829],[101.159,-3.159],[95.601,-14.829],[91.007,-14.829]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"n","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[106.893,0],[109.497,0],[109.497,-2.728],[106.893,-2.728]],"c":true},"ix":2},"nm":".","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":".","np":3,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[3.241,0],[0,-4.697],[-5.107,0],[-1.313,1.354],[-0.062,0.882],[0,0],[1.333,0],[0,0.882],[-2.359,0],[-0.062,-0.513]],"o":[[0,-2.954],[-4.164,0],[0,3.671],[1.354,0],[1.19,-1.231],[0,0],[-0.062,1.969],[-3.097,0],[0,-3.056],[2.154,0],[0,0]],"v":[[124.04,-9.989],[118.523,-14.911],[111.734,-7.097],[118.502,0.349],[122.83,-1.313],[124.163,-4.799],[120.82,-4.799],[118.154,-1.99],[115.057,-7.076],[118.4,-12.593],[120.8,-9.989]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"c","np":3,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.938],[-1.62,-1.723],[-1.949,0],[-1.641,1.846],[0,2.154],[1.579,1.805],[1.579,0]],"o":[[0,1.354],[1.354,1.415],[1.231,0],[1.21,-1.354],[0,-1.456],[-1.456,-1.641],[-5.333,0]],"v":[[125.482,-7.199],[127.308,-1.661],[132.558,0.369],[137.829,-1.743],[139.696,-7.548],[137.809,-13.127],[132.599,-15.137]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,1.415],[-0.841,1.026],[-1.19,0],[-0.615,-1.825],[0,-0.718],[0.492,-0.738],[1.292,0],[0.451,0.615]],"o":[[0,-1.682],[0.595,-0.759],[1.518,0],[0.308,0.902],[0,2.359],[-0.595,0.923],[-1.477,0],[-0.882,-1.149]],"v":[[128.805,-7.302],[129.892,-11.609],[132.62,-12.86],[136.004,-10.235],[136.373,-7.589],[135.368,-3.343],[132.599,-1.969],[129.912,-3.159]],"c":true},"ix":2},"nm":"o","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"o","np":5,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[141.696,0],[144.67,0],[144.67,-12.716],[148.629,0],[151.254,0],[155.295,-12.716],[155.295,0],[158.453,0],[158.453,-14.829],[153.408,-14.829],[150.024,-4.041],[146.885,-14.829],[141.696,-14.829]],"c":true},"ix":2},"nm":"m","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"m","np":3,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false}],"ip":1,"op":10,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.070588238537,0.074509806931,0.192156866193,1],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.031372550875,0.658823549747,0.541176497936,1],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":70,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":90,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"NULL","parent":4,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[407,407,100],"ix":6}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Warstwa 5","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":48,"s":[360]}],"ix":10},"p":{"a":0,"k":[60.167,60.69,0],"ix":2},"a":{"a":0,"k":[0.182,0.75,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.182,0.75],[18.051,-17.119]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4.8 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Warstwa 4","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":48,"s":[720]}],"ix":10},"p":{"a":0,"k":[60.167,60.69,0],"ix":2},"a":{"a":0,"k":[0.182,0.75,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.182,-0.21],[0.182,-34.571]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4.8 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Warstwa 2","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60.167,60.69,0],"ix":2},"a":{"a":0,"k":[0.182,0.75,0],"ix":1},"s":{"a":0,"k":[92,92,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.526,-19.526],[19.526,19.526],[-19.526,19.526],[-19.526,-19.526]],"o":[[-19.526,19.526],[-19.526,-19.526],[19.526,-19.526],[19.526,19.526]],"v":[[35.537,36.105],[-35.173,36.105],[-35.173,-34.605],[35.537,-34.605]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156862745,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4.8 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0}],"markers":[]}');

/***/ })

}]);
//# sourceMappingURL=src_views_apps_tasks_details_vue.js.map