(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_apps_projects_overview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/utile.js */ "./src/api/utile.js");
//import Layout from "../../../layouts/main.vue";
//import appConfig from "../../../../app.config";

//import Swal from "sweetalert2";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      headers: [{
        text: "Name",
        value: "Name",
        sortable: true
      }, {
        text: "Description",
        value: "Description__c",
        sortable: true
      }, {
        text: "Points",
        value: "Points__c",
        sortable: true
      }, {
        text: "Date",
        value: "Date__c",
        sortable: true
      }],
      items: [],
      itemsSelected: [],
      searchValue: "",
      themeColor: "#f48225"
    };
  },
  async mounted() {
    try {
      const ProjectId = this.$route.params.id;
      this.items = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`SELECT Id, Name,Description__c,Points__c ,Date__c FROM Task__c where Type__r.Board__c = '${ProjectId}'`);
    } catch (error) {
      console.error('Error fetching team members data:', error);
    }
  },
  methods: {},
  components: {
    //VDataTable, // Register the Vuetify component locally in the component
    //VueGoodTable
    //DataTable,
    //Column
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/utile.js */ "./src/api/utile.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
//import Layout from "../../../layouts/main.vue";
//import appConfig from "../../../../app.config";



//import 'vue-good-table/dist/vue-good-table.css'
//import { VueGoodTable } from 'vue-good-table';

//import Vuetify from 'vuetify';
//import 'vuetify/dist/vuetify.min.css';

//import { VDataTable } from 'vuetify'; // Import the specific Vuetify component
// import { DataTable, Column } from "primevue/datatable";
// import "primevue/resources/themes/nova-light/theme.css";
// import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      firstnameInput: "",
      lastnameInput: "",
      emailInput: "",
      modalShow: false,
      searchText: "",
      filteredMembers: [],
      teamMembers: [],
      //         currentPage: 1,
      //         rows: 5,
      //         paginatorTemplate: `
      //   <div class="p-paginator p-component">
      //     <span class="p-paginator-current">Page {currentPage} of {totalPages}</span>
      //     <button :class="{'p-disabled': currentPage === 1}" @click="firstPage">«</button>
      //     <button :class="{'p-disabled': currentPage === 1}" @click="prevPage">‹</button>
      //     <button :class="{'p-disabled': currentPage === totalPages}" @click="nextPage">›</button>
      //     <button :class="{'p-disabled': currentPage === totalPages}" @click="lastPage">»</button>
      //   </div>
      // `,
      //         users :[
      //             { id: 1, name: "John Doe", age: 30 },
      //             { id: 2, name: "Jane Smith", age: 25 },
      //             // Add more data rows as needed
      //         ],

      // headers: [
      //     { text: 'ID', value: 'id' },
      //     { text: 'Name', value: 'name' },
      //     { text: 'Age', value: 'age' },
      //     // Add more headers as needed
      // ],
      // data: [
      //     { id: 1, name: 'John Doe', age: 30 },
      //     { id: 2, name: 'Jane Smith', age: 25 },
      //     // Add more data items as needed
      // ],

      headers: [{
        text: "Name",
        value: "Name",
        sortable: true
      }, {
        text: "UserType",
        value: "UserType",
        sortable: true
      }],
      items: [],
      itemsSelected: [],
      searchValue: ""
    };
  },
  async mounted() {
    try {
      this.items = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT Id, Name, UserType FROM User where IsActive = true");
      // Fetch team members' data from the API
      this.teamMembers = await this.fetchTeamMembersData();
      this.filteredMembers = this.teamMembers;
    } catch (error) {
      console.error('Error fetching team members data:', error);
    }
  },
  methods: {
    async addMemberProject() {
      console.log(this.itemsSelected);
      for (const record of this.itemsSelected) {
        const data = {
          Name: record.Id,
          Board__c: this.id,
          User__c: record.Id
        };
        try {
          await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.createSObject2)('Member_Board__c', data);

          // Fetch team members' data from the API
          this.teamMembers = await this.fetchTeamMembersData();
          this.filteredMembers = this.teamMembers;
          this.modalShow = false;
        } catch (error) {
          console.error('Error inserting record:', error);
        }
      }
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Good job!", "Added Successfully!", "success");
    },
    async deleteMemberProject(MemberBoardId) {
      //console.log("ddddd");

      try {
        (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.deleteSObject)('Member_Board__c', MemberBoardId);
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Good job!", "Deleted Successfully!", "success");
        // Fetch team members' data from the API
        //this.teamMembers = await this.fetchTeamMembersData();

        const indexToDelete = this.teamMembers.findIndex(item => item.Id === MemberBoardId);
        if (indexToDelete !== -1) {
          this.teamMembers.splice(indexToDelete, 1);
        }
        this.filteredMembers = this.teamMembers;
      } catch (error) {
        console.error('Error deleting record:', error);
      }
    },
    // addMember() {
    //     // Get the value of the board name from the input field
    //     const firstnameInput = this.firstnameInput;
    //     const lastnameInput = this.lastnameInput;
    //     const emailInput = this.emailInput;

    //     // Create the data object to pass to createSObject function
    //     const data = {
    //         FirstName: firstnameInput,
    //         LastName: lastnameInput,
    //         Email: emailInput,
    //         Username: emailInput,
    //         LanguageLocaleKey: 'fr',
    //         EmailEncodingKey: 'UTF-8',
    //         LocaleSidKey: 'ar_MA',
    //         TimeZoneSidKey: 'Africa/Casablanca',
    //         Alias: "in" + lastnameInput,
    //         ProfileId: '00e8d000002aAYiAAM'
    //     };

    //     // Call the createSObject function from your utile.js file
    //     createSObject("User", data, () => {
    //         // Callback function called on success
    //         window.location.reload();
    //     });

    //     // Clear the input field and close the modal
    //     this.firstnameInput = "";
    //     this.lastnameInput = "";
    //     this.emailInput = "";
    //     this.modalShow = false;
    //     Swal.fire("Good job!", "Team member added Succesfly!", "success");
    // },
    async fetchTeamMembersData() {
      try {
        // Use executeQuery or your API utility to fetch data from the API
        // Replace the below query with your actual query to fetch team members' data
        const test = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Board__c where Board__c = '${this.id}'`);
        console.log("test: ", test);

        // Format the data to return an array of objects with the required properties
        const teamMembersData = await Promise.all(test.map(async record => {
          //const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
          const activeProjectsRecords = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`SELECT Id FROM Member_Board__c where User__c = '${record.User__r.Id}'`);
          const newLeadsRecords = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery)(`SELECT Id FROM Member_Task__c where User__c = '${record.User__r.Id}'`);
          console.log("activeProjectsRecords:", activeProjectsRecords.length);
          console.log("newLeadsRecords:", newLeadsRecords.length);
          return {
            Id: record.Id,
            name: record.User__r.Name,
            position: record.User__r.UserType,
            projects: activeProjectsRecords.length,
            tasks: newLeadsRecords.length,
            img: __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png")
            // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
          };
        }));

        return teamMembersData;
      } catch (error) {
        console.error("Error fetching team members data:", error);
        return []; // Return an empty array in case of an error
      }
    },

    filterMembers() {
      const inputText = this.searchText.trim().toLowerCase();
      this.filteredMembers = this.teamMembers.filter(member => member.name.toLowerCase().includes(inputText));
      console.log(this.filteredMembers);
    }
  },
  components: {
    //VDataTable, // Register the Vuetify component locally in the component
    //VueGoodTable
    //DataTable,
    //Column
  },
  computed: {
    displayedMembers() {
      const inputText = this.searchText.trim().toLowerCase();
      return inputText === "" ? this.teamMembers : this.filteredMembers;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/overview.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/overview.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");
/* harmony import */ var _api_utile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.././api/utile.js */ "./src/api/utile.js");
/* harmony import */ var _tasks_kanban_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/kanban.vue */ "./src/views/apps/tasks/kanban.vue");
/* harmony import */ var _ProjectMember_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectMember.vue */ "./src/views/apps/projects/ProjectMember.vue");
/* harmony import */ var _Backlog_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Backlog.vue */ "./src/views/apps/projects/Backlog.vue");



//import Swal from "sweetalert2";



/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Overview",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_1__.description
    }]
  },
  data() {
    return {
      //teamMembers: [], // Store the team members' data here
      title: "Overview",
      items: [{
        text: "Pages",
        href: "/"
      }, {
        text: "Overview",
        active: true
      }],
      //firstnameInput: "",
      //lastnameInput: "",
      //emailInput: "",
      //modalShow: false,
      project: [],
      Features: [],
      members: []
      //searchText: "",
      //filteredMembers: [],
    };
  },

  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    kanban: _tasks_kanban_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProjectMember: _ProjectMember_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Backlog: _Backlog_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  async mounted() {
    try {
      this.getProjectDetail();
      // Fetch team members' data from the API
      //this.teamMembers = await this.fetchTeamMembersData();
      //this.filteredMembers = this.teamMembers;
      const ProjectId = this.$route.params.id;
      this.members = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_2__.executeQuery)(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Board__c where Board__c = '${ProjectId}'`);
    } catch (error) {
      console.error('Error fetching team members data:', error);
    }
  },
  methods: {
    // addMember() {
    //     // Get the value of the board name from the input field
    //     const firstnameInput = this.firstnameInput;
    //     const lastnameInput = this.lastnameInput;
    //     const emailInput = this.emailInput;

    //     // Create the data object to pass to createSObject function
    //     const data = {
    //         FirstName: firstnameInput,
    //         LastName: lastnameInput,
    //         Email: emailInput,
    //         Username: emailInput,
    //         LanguageLocaleKey: 'fr',
    //         EmailEncodingKey: 'UTF-8',
    //         LocaleSidKey: 'ar_MA',
    //         TimeZoneSidKey: 'Africa/Casablanca',
    //         Alias: "in" + lastnameInput,
    //         ProfileId: '00e8d000002aAYiAAM'
    //     };

    //     // Call the createSObject function from your utile.js file
    //     createSObject("User", data, () => {
    //         // Callback function called on success
    //         window.location.reload();
    //     });

    //     // Clear the input field and close the modal
    //     this.firstnameInput = "";
    //     this.lastnameInput = "";
    //     this.emailInput = "";
    //     this.modalShow = false;
    //     Swal.fire("Good job!", "Team member added Succesfly!", "success");
    // },

    toggleFavourite(ele) {
      ele.target.closest('.favourite-btn').classList.toggle("active");
    },
    // async fetchTeamMembersData() {
    //     // Use executeQuery or your API utility to fetch data from the API
    //     // Replace the below query with your actual query to fetch team members' data
    //     const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
    //     const activeProjectsRecords = await executeQuery("SELECT Id FROM board__c");
    //     const newLeadsRecords = await executeQuery("SELECT Id FROM task__c");

    //     // Format the data to return an array of objects with the required properties
    //     const teamMembersData = queryResult.map((record) => {

    //         return {
    //             Id: record.Id,
    //             name: record.Name,
    //             position: record.UserType,
    //             projects: activeProjectsRecords.length,
    //             tasks: newLeadsRecords.length,
    //             img: require("@/assets/images/users/Trailblazer_avatar.png")
    //             // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
    //         };
    //     });

    //     return teamMembersData;
    // },
    async getProjectDetail() {
      try {
        const ProjectId = this.$route.params.id;
        this.project = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_2__.executeQuery)("SELECT Id,Name,CreatedDate ,OwnerId,Status__c,Company__c,Deadline__c,Description__c ,priority__c FROM board__c where id = " + "'" + ProjectId + "'");
        this.Features = await (0,_api_utile_js__WEBPACK_IMPORTED_MODULE_2__.executeQuery)("SELECT Id,Name FROM Feature__c where Board__c = " + "'" + ProjectId + "'");
        this.project = this.project[0];
        this.project.CreatedDate = this.project.CreatedDate.substring(0, 10);
        console.log(this.project);
        if (this.project) {
          console.log(this.project);
          console.log("Description " + this.project.Description__c);
        } else {
          console.log("Empty No project with these id");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    }

    // filterMembers() {
    //     const inputText = this.searchText.trim().toLowerCase();
    //     this.filteredMembers = this.teamMembers.filter(member => member.name.toLowerCase().includes(inputText));
    //     console.log(this.filteredMembers);

    // },
  }
  // computed: {
  //     displayedMembers() {
  //         const inputText = this.searchText.trim().toLowerCase();
  //         return inputText === "" ? this.teamMembers : this.filteredMembers;
  //     },
  // },
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=template&id=51f0c3ca":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=template&id=51f0c3ca ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Search Value: ", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EasyDataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EasyDataTable");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_row, {
    class: "g-4 mb-3"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.searchValue = $event),
      class: "my-input form-control"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchValue]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EasyDataTable, {
      "items-selected": $data.itemsSelected,
      "onUpdate:items-selected": _cache[1] || (_cache[1] = $event => $data.itemsSelected = $event),
      headers: $data.headers,
      items: $data.items,
      "search-value": $data.searchValue,
      class: "my-datatable",
      "theme-color": $data.themeColor,
      "table-class-name": "customize-table"
    }, null, 8 /* PROPS */, ["items-selected", "headers", "items", "search-value", "theme-color"])]),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=template&id=4be31e9e":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=template&id=4be31e9e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png");


const _hoisted_1 = {
  class: "d-flex"
};
const _hoisted_2 = {
  class: "search-box me-2"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-search-line search-icon"
}, null, -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-share-line me-1 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_5 = {
  class: "col team-settings"
};
const _hoisted_6 = {
  class: "flex-shrink-0 me-2"
};
const _hoisted_7 = {
  type: "button",
  class: "btn fs-16 p-0 favourite-btn"
};
const _hoisted_8 = {
  class: "col text-end dropdown"
};
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill fs-17"
}, null, -1 /* HOISTED */);
const _hoisted_10 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-star-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_14 = {
  class: "team-profile-img"
};
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-lg img-thumbnail rounded-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "img-fluid d-block rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_16 = {
  class: "team-content"
};
const _hoisted_17 = {
  class: "fs-16 mb-1"
};
const _hoisted_18 = {
  class: "text-muted mb-0"
};
const _hoisted_19 = {
  class: "mb-1"
};
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Projects", -1 /* HOISTED */);
const _hoisted_21 = {
  class: "mb-1"
};
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Tasks", -1 /* HOISTED */);
const _hoisted_23 = {
  class: "text-end"
};
const _hoisted_24 = {
  class: "mb-sm-0"
};
const _hoisted_25 = {
  class: "pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0"
};
const _hoisted_26 = {
  class: "page-item disabled"
};
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-left"
}, null, -1 /* HOISTED */);
const _hoisted_28 = {
  class: "page-item active"
};
const _hoisted_29 = {
  class: "page-item"
};
const _hoisted_30 = {
  class: "page-item"
};
const _hoisted_31 = {
  class: "page-item"
};
const _hoisted_32 = {
  class: "page-item"
};
const _hoisted_33 = {
  class: "page-item"
};
const _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-right"
}, null, -1 /* HOISTED */);
const _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Search Value: ", -1 /* HOISTED */);
const _hoisted_36 = {
  class: "my-button-container"
};
const _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-add-line align-bottom me-1"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_EasyDataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EasyDataTable");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
    class: "g-4 mb-3"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      sm: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        class: "form-control",
        placeholder: "Search member...",
        onChange: _cache[0] || (_cache[0] = (...args) => $options.filterMembers && $options.filterMembers(...args)),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.searchText = $event)
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchText]]), _hoisted_3])])]),
      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      sm: "auto"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "danger",
        onClick: _cache[2] || (_cache[2] = $event => $data.modalShow = !$data.modalShow)
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Invite Member")]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Loop through the teamMembers array and render team member cards dynamically "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.displayedMembers, (member, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      class: "team-list list-view-filter"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
      "no-body": "",
      class: "team-box"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
        class: "px-4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
          class: "align-items-center team-row"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
            class: "align-items-center"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, null, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                class: "ri-star-fill",
                onClick: _cache[3] || (_cache[3] = (...args) => _ctx.toggleFavourite && _ctx.toggleFavourite(...args))
              })])])]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              href: "javascript:void(0);",
              "data-bs-toggle": "dropdown",
              "aria-expanded": "false"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_9]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              class: "dropdown-item",
              to: `/pages/profile/${member.Id}`
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View ")]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Favourite ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "dropdown-item",
              href: "javascript:void(0);",
              onClick: $event => $options.deleteMemberProject(member.Id)
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete ")]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])])])])]),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "4",
            cols: ""
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: `/pages/profile/${member.Id}`,
              class: "d-block",
              style: {
                "color": "black"
              }
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(member.name), 1 /* TEXT */)]),

              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(member.position), 1 /* TEXT */)])])]),

            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "4",
            cols: ""
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "text-muted text-center"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                cols: "6",
                class: "border-end border-end-dashed"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(member.projects), 1 /* TEXT */), _hoisted_20]),
                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                cols: "6"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(member.tasks), 1 /* TEXT */), _hoisted_22]),
                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */)]),

              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */)]),

            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "2"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
              to: `/pages/profile/${member.Id}`,
              class: "btn btn-light view-btn"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View Profile")]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])])]),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)]),

          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)]),

        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */)]),

      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */)]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
    class: "g-0 text-center text-sm-start align-items-center mb-3"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      sm: "6"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, "Showing 1 to " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.displayedMembers.length) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.displayedMembers.length) + " entries", 1 /* TEXT */)])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
      sm: "6"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_27]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("2")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("3")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("4")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("5")]),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_34]),
        _: 1 /* STABLE */
      })])])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.modalShow,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.modalShow = $event),
    "header-class": "p-3 bg-soft-warning",
    "content-class": "border-0",
    "hide-footer": "",
    title: "Add Member",
    class: "v-modal-custom"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <b-form @submit.prevent=\"addMember\">\r\n            <b-row class=\"g-3\">\r\n                <b-col lg=\"6\">\r\n                    <label for=\"firstnameInput\" class=\"form-label\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"firstnameInput\" placeholder=\"Enter first name\"\r\n                        v-model=\"firstnameInput\">\r\n                </b-col>\r\n                <b-col lg=\"6\">\r\n                    <label for=\"lastnameInput\" class=\"form-label\">Last Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"lastnameInput\" placeholder=\"Enter last name\"\r\n                        v-model=\"lastnameInput\">\r\n                </b-col>\r\n                <b-col lg=\"12\">\r\n                    <label for=\"emailInput\" class=\"form-label\">Email ID</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"emailInput\" placeholder=\"Email\" v-model=\"emailInput\">\r\n                </b-col>\r\n                <b-col lg=\"12\">\r\n                    <label for=\"submissionidInput\" class=\"form-label\">Submission ID</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"submissionidInput\" placeholder=\"Submission ID\">\r\n                </b-col>\r\n                <b-col lg=\"12\">\r\n                    <label for=\"profileimgInput\" class=\"form-label\">Profile Images</label>\r\n                    <input class=\"form-control\" type=\"file\" id=\"profileimgInput\">\r\n                </b-col>\r\n\r\n                <b-col lg=\"12\">\r\n                    <label for=\"designationInput\" class=\"form-label\">Designation</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"designationInput\" placeholder=\"Designation\">\r\n                </b-col>\r\n                <b-col lg=\"12\">\r\n                    <label for=\"titleInput\" class=\"form-label\">Title</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"titleInput\" placeholder=\"Title\">\r\n                </b-col>\r\n                <b-col lg=\"6\">\r\n                    <label for=\"numberInput\" class=\"form-label\">Phone Number</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"numberInput\" placeholder=\"Phone number\">\r\n                </b-col>\r\n                <b-col lg=\"6\">\r\n                    <label for=\"joiningdateInput\" class=\"form-label\">Joining Date</label>\r\n\r\n                    <flat-pickr v-model=\"date\" :config=\"config\" placeholder=\"Select date\" class=\"form-control\">\r\n                    </flat-pickr>\r\n                </b-col>\r\n                <div class=\"modal-footer v-modal-footer\">\r\n                    <b-button type=\"button\" variant=\"light\" @click=\"modalShow = false\"><i\r\n                            class=\"ri-close-line align-bottom me-1\"></i> Close</b-button>\r\n                    <b-button type=\"submit\" variant=\"success\" id=\"addNewMember\">Add Member</b-button>\r\n                </div>\r\n            </b-row>\r\n        </b-form> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <vue-good-table :columns=\"columns\" :rows=\"rows\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-data-table :headers=\"headers\" :items=\"data\" :item-key=\"itemKey\" :show-select=\"true\"\r\n            v-model:selected=\"selectedItems\"></v-data-table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-data-table :headers=\"headers\" :items=\"data\"></v-data-table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <v-data-table :headers=\"headers\" :items=\"data\"></v-data-table> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>\r\n            <div class=\"p-mb-2\">\r\n                <h3 class=\"p-mb-0\">Users</h3>\r\n                <p class=\"p-mt-0\">A simple data table with PrimeVue</p>\r\n            </div>\r\n\r\n            <DataTable :value=\"users\" :paginator=\"true\" :rows=\"5\" :paginatorTemplate=\"paginatorTemplate\"\r\n                :rowsPerPageOptions=\"[5, 10, 25]\">\r\n                <Column field=\"id\" header=\"ID\" sortable></Column>\r\n                <Column field=\"name\" header=\"Name\" sortable></Column>\r\n                <Column field=\"age\" header=\"Age\" sortable></Column>\r\n            </DataTable>\r\n        </div> "), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.searchValue = $event),
      class: "my-input form-control"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchValue]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EasyDataTable, {
      "items-selected": $data.itemsSelected,
      "onUpdate:items-selected": _cache[5] || (_cache[5] = $event => $data.itemsSelected = $event),
      headers: $data.headers,
      items: $data.items,
      "search-value": $data.searchValue,
      class: "my-datatable"
    }, null, 8 /* PROPS */, ["items-selected", "headers", "items", "search-value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
      variant: "secondary",
      onClick: $options.addMemberProject
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add ")]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/overview.vue?vue&type=template&id=633b772b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/overview.vue?vue&type=template&id=633b772b ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_brands_Salesforce_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/brands/Salesforce.png */ "./src/assets/images/brands/Salesforce.png");
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
  class: "avatar-md"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-white rounded-circle"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_brands_Salesforce_png__WEBPACK_IMPORTED_MODULE_1__,
  alt: "",
  class: "avatar-xs",
  style: {
    "width": "50px"
  }
})])], -1 /* HOISTED */);
const _hoisted_3 = {
  class: "fw-bold"
};
const _hoisted_4 = {
  class: "hstack gap-3 flex-wrap"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-building-line align-bottom me-1"
}, null, -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vr"
}, null, -1 /* HOISTED */);
const _hoisted_7 = {
  class: "fw-medium"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vr"
}, null, -1 /* HOISTED */);
const _hoisted_9 = {
  class: "fw-medium"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "vr"
}, null, -1 /* HOISTED */);
const _hoisted_11 = {
  class: "hstack gap-1 flex-wrap"
};
const _hoisted_12 = {
  type: "button",
  class: "btn py-0 fs-16 favourite-btn active"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn py-0 fs-16 text-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-share-line"
})], -1 /* HOISTED */);
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn py-0 fs-16 text-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-flag-line"
})], -1 /* HOISTED */);
const _hoisted_15 = {
  class: "nav nav-tabs-custom border-bottom-0",
  role: "tablist"
};
const _hoisted_16 = {
  class: "nav-item"
};
const _hoisted_17 = {
  class: "nav-item"
};
const _hoisted_18 = {
  class: "nav-item"
};
const _hoisted_19 = {
  class: "nav-item"
};
const _hoisted_20 = {
  class: "tab-content text-muted"
};
const _hoisted_21 = {
  class: "tab-pane fade show active",
  id: "project-overview",
  role: "tabpanel"
};
const _hoisted_22 = {
  class: "text-muted"
};
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mb-3 fw-semibold text-uppercase"
}, "Summary", -1 /* HOISTED */);
const _hoisted_24 = {
  class: "description-container"
};
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = {
  key: 0,
  class: "show-more-button"
};
const _hoisted_27 = {
  class: "pt-3 border-top border-top-dashed mt-4"
};
const _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "mb-2 text-uppercase fw-medium"
}, "Create Date :", -1 /* HOISTED */);
const _hoisted_29 = {
  class: "fs-15 mb-0"
};
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "mb-2 text-uppercase fw-medium"
}, "Due Date :", -1 /* HOISTED */);
const _hoisted_31 = {
  class: "fs-15 mb-0"
};
const _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "mb-2 text-uppercase fw-medium"
}, "Priority :", -1 /* HOISTED */);
const _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "mb-2 text-uppercase fw-medium"
}, "Status :", -1 /* HOISTED */);
const _hoisted_34 = {
  class: "pt-3 border-top border-top-dashed mt-4"
};
const _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "mb-3 fw-semibold text-uppercase"
}, "Resources", -1 /* HOISTED */);
const _hoisted_36 = {
  class: "border rounded border-dashed p-2"
};
const _hoisted_37 = {
  class: "d-flex align-items-center"
};
const _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-secondary rounded fs-24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-file-word-2-line"
})])])], -1 /* HOISTED */);
const _hoisted_39 = {
  class: "flex-grow-1 overflow-hidden"
};
const _hoisted_40 = {
  class: "fs-13 mb-1"
};
const _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "2.2MB", -1 /* HOISTED */);
const _hoisted_42 = {
  class: "flex-shrink-0 ms-2"
};
const _hoisted_43 = {
  class: "d-flex gap-1"
};
const _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-icon text-muted btn-sm fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-download-2-line"
})], -1 /* HOISTED */);
const _hoisted_45 = {
  class: "dropdown"
};
const _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
})], -1 /* HOISTED */);
const _hoisted_47 = {
  class: "dropdown-menu"
};
const _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-pencil-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_50 = {
  class: "flex-shrink-0"
};
const _hoisted_51 = {
  class: "dropdown card-header-dropdown"
};
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Recent"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-down ms-1"
})], -1 /* HOISTED */);
const _hoisted_53 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_54 = {
  "data-simplebar": "",
  style: {
    "height": "300px"
  },
  class: "px-3 mx-n3 mb-2"
};
const _hoisted_55 = {
  class: "d-flex mb-4"
};
const _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_8_jpg__WEBPACK_IMPORTED_MODULE_2__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_57 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Joseph Parker "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted ms-2"
}, "20 Dec 2021 - 05:47AM")], -1 /* HOISTED */);
const _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "I am getting message from customers that when they place order always get error message .", -1 /* HOISTED */);
const _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_61 = {
  class: "d-flex mt-4"
};
const _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_63 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Alexis Clarke "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted ms-2"
}, "22 Dec 2021 - 02:32PM")], -1 /* HOISTED */);
const _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.", -1 /* HOISTED */);
const _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_67 = {
  class: "d-flex mb-4"
};
const _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_69 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Donald Palmer "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted ms-2"
}, "24 Dec 2021 - 05:20PM")], -1 /* HOISTED */);
const _hoisted_71 = {
  class: "text-muted"
};
const _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_73 = {
  class: "d-flex"
};
const _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_10_jpg__WEBPACK_IMPORTED_MODULE_3__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_75 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Alexis Clarke "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted ms-2"
}, "26 min ago")], -1 /* HOISTED */);
const _hoisted_77 = {
  class: "text-muted"
};
const _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_small_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__,
  alt: "",
  class: "img-fluid rounded"
}, null, -1 /* HOISTED */);
const _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_small_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__,
  alt: "",
  class: "img-fluid rounded"
}, null, -1 /* HOISTED */);
const _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_81 = {
  class: "d-flex mt-4"
};
const _hoisted_82 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_avatar_6_jpg__WEBPACK_IMPORTED_MODULE_4__,
  alt: "",
  class: "avatar-xs rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_83 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "fs-13"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Donald Palmer "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  class: "text-muted ms-2"
}, "8 sec ago")], -1 /* HOISTED */);
const _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted"
}, "Other shipping methods are available at checkout if you want your purchase delivered faster. ", -1 /* HOISTED */);
const _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-reply"
}, null, -1 /* HOISTED */);
const _hoisted_87 = {
  class: "mt-4"
};
const _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "exampleFormControlTextarea1",
  class: "form-label text-body"
}, "Leave a Comments", -1 /* HOISTED */);
const _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  class: "form-control bg-light border-light",
  id: "exampleFormControlTextarea1",
  rows: "3",
  placeholder: "Enter your comment..."
}, null, -1 /* HOISTED */);
const _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-attachment-line fs-16"
}, null, -1 /* HOISTED */);
const _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-4"
}, "Tags", -1 /* HOISTED */);
const _hoisted_92 = {
  class: "d-flex flex-wrap gap-2 fs-16"
};
const _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <b-button type=\"button\" variant=\"soft-danger\" size=\"sm\"><i\n                                                    class=\"ri-share-line me-1 align-bottom\"></i> Invite Member\n                                            </b-button> ")], -1 /* HOISTED */);
const _hoisted_94 = {
  "data-simplebar": "",
  style: {
    "height": "235px"
  },
  class: "mx-n3 px-3"
};
const _hoisted_95 = {
  class: "vstack gap-3"
};
const _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-xs flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_images_users_Trailblazer_avatar_png__WEBPACK_IMPORTED_MODULE_7__,
  alt: "Avatar",
  class: "img-fluid rounded-circle"
})], -1 /* HOISTED */);
const _hoisted_97 = {
  class: "flex-grow-1"
};
const _hoisted_98 = {
  class: "fs-13 mb-0"
};
const _hoisted_99 = {
  class: "flex-shrink-0"
};
const _hoisted_100 = {
  class: "d-flex align-items-center gap-1"
};
const _hoisted_101 = {
  class: "dropdown"
};
const _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "btn btn-icon btn-sm fs-16 text-muted dropdown",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
})], -1 /* HOISTED */);
const _hoisted_103 = {
  class: "dropdown-menu"
};
const _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_105 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-star-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_106 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_107 = {
  class: "flex-shrink-0"
};
const _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-upload-2-fill me-1 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_109 = {
  class: "vstack gap-2"
};
const _hoisted_110 = {
  class: "border rounded border-dashed p-2"
};
const _hoisted_111 = {
  class: "d-flex align-items-center"
};
const _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "flex-shrink-0 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-title bg-light text-secondary rounded fs-24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-file-word-2-line"
})])])], -1 /* HOISTED */);
const _hoisted_113 = {
  class: "flex-grow-1 overflow-hidden"
};
const _hoisted_114 = {
  class: "fs-13 mb-1"
};
const _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "2.2MB", -1 /* HOISTED */);
const _hoisted_116 = {
  class: "flex-shrink-0 ms-2"
};
const _hoisted_117 = {
  class: "d-flex gap-1"
};
const _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  class: "btn btn-icon text-muted btn-sm fs-18"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-download-2-line"
})], -1 /* HOISTED */);
const _hoisted_119 = {
  class: "dropdown"
};
const _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  class: "btn btn-icon text-muted btn-sm fs-18 dropdown",
  type: "button",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill"
})], -1 /* HOISTED */);
const _hoisted_121 = {
  class: "dropdown-menu"
};
const _hoisted_122 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-pencil-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_123 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_124 = {
  class: "mt-2 text-center"
};
const _hoisted_125 = {
  class: "tab-pane fade",
  id: "project-team",
  role: "tabpanel"
};
const _hoisted_126 = {
  class: "tab-pane fade",
  id: "project-backlog",
  role: "tabpanel"
};
const _hoisted_127 = {
  class: "tab-pane fade",
  id: "project-tasks",
  role: "tabpanel"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_ProjectMember = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProjectMember");
  const _component_Backlog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Backlog");
  const _component_kanban = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("kanban");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        lg: "12"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "mt-n4"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "pb-0 px-4"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "mb-3"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                md: ""
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
                  class: "align-items-center g-3"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: "auto"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_2]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    md: ""
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.Company__c), 1 /* TEXT */)]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Create Date : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.CreatedDate), 1 /* TEXT */)]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Due Date : "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.Deadline__c), 1 /* TEXT */)]), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
                      pill: "",
                      class: "bg-info fs-12"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("New")]),
                      _: 1 /* STABLE */
                    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
                      variant: "danger",
                      pill: "",
                      class: "bg-danger fs-12"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.Priority__c), 1 /* TEXT */)]),

                      _: 1 /* STABLE */
                    })])])]),

                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                })]),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                md: "auto"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                  class: "ri-star-fill",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleFavourite && $options.toggleFavourite(...args))
                })]), _hoisted_13, _hoisted_14])]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link active fw-semibold",
              "data-bs-toggle": "tab",
              href: "#project-overview",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Overview ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link fw-semibold",
              "data-bs-toggle": "tab",
              href: "#project-team",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Team ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link fw-semibold",
              "data-bs-toggle": "tab",
              href: "#project-backlog",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Backlog ")]),
              _: 1 /* STABLE */
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
              class: "nav-link fw-semibold",
              "data-bs-toggle": "tab",
              href: "#project-tasks",
              role: "tab"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tasks ")]),
              _: 1 /* STABLE */
            })])])]),

            _: 1 /* STABLE */
          })])]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        lg: "12"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            xl: "9",
            lg: "8"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
              "no-body": ""
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                    'expanded': _ctx.showFullDescription
                  }),
                  innerHTML: $data.project.Description__c,
                  ref: "description"
                }, null, 10 /* CLASS, PROPS */, _hoisted_25), !_ctx.showFullDescription ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "button",
                  variant: "link",
                  class: "link-success p-0",
                  onClick: _ctx.toggleDescription
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Show more ")]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["onClick"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "3",
                    sm: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.CreatedDate), 1 /* TEXT */)])]),

                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "3",
                    sm: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.Deadline__c), 1 /* TEXT */)])]),

                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "3",
                    sm: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
                      tag: "div",
                      class: "bg-danger fs-12"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.Priority__c), 1 /* TEXT */)]),

                      _: 1 /* STABLE */
                    })])]),

                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "3",
                    sm: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
                      tag: "div",
                      class: "bg-warning fs-12"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.project.status__c), 1 /* TEXT */)]),

                      _: 1 /* STABLE */
                    })])]),

                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
                  class: "g-3"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    xxl: "4",
                    lg: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                      href: "#",
                      class: "text-body text-truncate d-block"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cahier de charge.docx")]),
                      _: 1 /* STABLE */
                    })]), _hoisted_41]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                      class: "dropdown-item",
                      href: "#"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rename")]),
                      _: 1 /* STABLE */
                    })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                      class: "dropdown-item",
                      href: "#"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete")]),
                      _: 1 /* STABLE */
                    })])])])])])])])]),

                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                })])])]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
              "no-body": ""
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                class: "align-items-center d-flex"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
                  class: "mb-0 flex-grow-1"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Comments")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  class: "text-reset dropdown-btn",
                  href: "#",
                  "data-bs-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_52]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  class: "dropdown-item",
                  href: "#"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Recent")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  class: "dropdown-item",
                  href: "#"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Top Rated")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  class: "dropdown-item",
                  href: "#"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Previous")]),
                  _: 1 /* STABLE */
                })])])])]),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript: void(0);",
                  class: "badge text-muted bg-light"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [_hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript: void(0);",
                  class: "badge text-muted bg-light"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
                  _: 1 /* STABLE */
                })])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("If you have further questions, please contact Customer Support from the “Action Menu” on your "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript:void(0);",
                  class: "text-decoration-underline"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Online Order Support ")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript: void(0);",
                  class: "badge text-muted bg-light"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
                  _: 1 /* STABLE */
                })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [_hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Your "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript:void(0)",
                  class: "text-decoration-underline"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Online Order Support ")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more.")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
                  class: "g-2 mb-3"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "1",
                    sm: "2",
                    cols: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_78]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    lg: "1",
                    sm: "2",
                    cols: "6"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_79]),
                    _: 1 /* STABLE */
                  })]),

                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript: void(0);",
                  class: "badge text-muted bg-light"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [_hoisted_82, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, _hoisted_85, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "javascript: void(0);",
                  class: "badge text-muted bg-light"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply")]),
                  _: 1 /* STABLE */
                })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
                  class: "g-3"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                    cols: "12"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_88, _hoisted_89]),
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
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_90]),
                      _: 1 /* STABLE */
                    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                      href: "javascript:void(0);",
                      class: "btn btn-primary"
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
            xl: "3",
            lg: "4"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
              "no-body": ""
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.Features, feature => {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_badge, {
                    key: feature,
                    variant: "soft-secondary",
                    tag: "div",
                    class: "fw-medium badge-soft-secondary"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(feature.Name), 1 /* TEXT */)]),

                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */);
                }), 128 /* KEYED_FRAGMENT */))])]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
              "no-body": ""
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                class: "align-items-center d-flex border-bottom-dashed"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
                  class: "mb-0 flex-grow-1"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Members")]),
                  _: 1 /* STABLE */
                }), _hoisted_93]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.members, member => {
                  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                    key: member.Id,
                    class: "d-flex align-items-center mb-3"
                  }, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                    href: `#`,
                    class: "text-body d-block"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(member.User__r.Name), 1 /* TEXT */)]),

                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                    type: "button",
                    variant: "light",
                    size: "sm"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Message")]),
                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_101, [_hoisted_102, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                    class: "dropdown-item",
                    href: "javascript:void(0);"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_104, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View ")]),
                    _: 1 /* STABLE */
                  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                    class: "dropdown-item",
                    href: "javascript:void(0);"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_105, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Favourite ")]),
                    _: 1 /* STABLE */
                  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                    class: "dropdown-item",
                    href: "javascript:void(0);"
                  }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete ")]),
                    _: 1 /* STABLE */
                  })])])])])])]);
                }), 128 /* KEYED_FRAGMENT */))])])]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
              "no-body": ""
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
                class: "align-items-center d-flex border-bottom-dashed"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
                  class: "mb-0 flex-grow-1"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Attachments")]),
                  _: 1 /* STABLE */
                }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "button",
                  variant: "soft-success",
                  size: "sm"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Upload")]),
                  _: 1 /* STABLE */
                })])]),

                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  href: "#",
                  class: "text-body text-truncate d-block"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cahier de charge.docx")]),
                  _: 1 /* STABLE */
                })]), _hoisted_115]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [_hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [_hoisted_120, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  class: "dropdown-item",
                  href: "#"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_122, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rename")]),
                  _: 1 /* STABLE */
                })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                  class: "dropdown-item",
                  href: "#"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_123, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Delete")]),
                  _: 1 /* STABLE */
                })])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "button",
                  variant: "secondary"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View more")]),
                  _: 1 /* STABLE */
                })])])]),

                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })]),

            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProjectMember, {
          id: this.$route.params.id
        }, null, 8 /* PROPS */, ["id"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Backlog, {
          id: this.$route.params.id
        }, null, 8 /* PROPS */, ["id"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_kanban, {
          id: this.$route.params.id
        }, null, 8 /* PROPS */, ["id"])])])]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.p-paginator {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 1rem;\n}\n.p-paginator button {\r\n    margin: 0 0.25rem;\r\n    padding: 0.25rem 0.5rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n    cursor: pointer;\n}\n.p-paginator button:hover {\r\n    background-color: #f2f2f2;\n}\n.p-disabled {\r\n    opacity: 0.5;\r\n    cursor: not-allowed;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.my-input {\r\n    margin-bottom: 10px;\n}\n.my-datatable {\r\n    margin-bottom: 20px;\n}\n.my-button-container {\r\n    display: flex;\r\n    justify-content: flex-end;\n}\n.customize-table {\r\n\r\n    --easy-table-header-background-color: #e4e7ff;\r\n    --easy-table-header-font-size: 13px;\r\n    --easy-table-body-row-font-size: 13px;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.p-paginator {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 1rem;\n}\n.p-paginator button {\r\n    margin: 0 0.25rem;\r\n    padding: 0.25rem 0.5rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    background-color: #fff;\r\n    cursor: pointer;\n}\n.p-paginator button:hover {\r\n    background-color: #f2f2f2;\n}\n.p-disabled {\r\n    opacity: 0.5;\r\n    cursor: not-allowed;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.my-input {\r\n    margin-bottom: 10px;\n}\n.my-datatable {\r\n    margin-bottom: 20px;\n}\n.my-button-container {\r\n    display: flex;\r\n    justify-content: flex-end;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/apps/projects/Backlog.vue":
/*!*********************************************!*\
  !*** ./src/views/apps/projects/Backlog.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Backlog_vue_vue_type_template_id_51f0c3ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Backlog.vue?vue&type=template&id=51f0c3ca */ "./src/views/apps/projects/Backlog.vue?vue&type=template&id=51f0c3ca");
/* harmony import */ var _Backlog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backlog.vue?vue&type=script&lang=js */ "./src/views/apps/projects/Backlog.vue?vue&type=script&lang=js");
/* harmony import */ var _Backlog_vue_vue_type_style_index_0_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css */ "./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css");
/* harmony import */ var _Backlog_vue_vue_type_style_index_1_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css */ "./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_Backlog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Backlog_vue_vue_type_template_id_51f0c3ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/projects/Backlog.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/projects/ProjectMember.vue":
/*!***************************************************!*\
  !*** ./src/views/apps/projects/ProjectMember.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectMember_vue_vue_type_template_id_4be31e9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectMember.vue?vue&type=template&id=4be31e9e */ "./src/views/apps/projects/ProjectMember.vue?vue&type=template&id=4be31e9e");
/* harmony import */ var _ProjectMember_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectMember.vue?vue&type=script&lang=js */ "./src/views/apps/projects/ProjectMember.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectMember_vue_vue_type_style_index_0_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css */ "./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css");
/* harmony import */ var _ProjectMember_vue_vue_type_style_index_1_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css */ "./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;



const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ProjectMember_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProjectMember_vue_vue_type_template_id_4be31e9e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/projects/ProjectMember.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/projects/overview.vue":
/*!**********************************************!*\
  !*** ./src/views/apps/projects/overview.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_vue_vue_type_template_id_633b772b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.vue?vue&type=template&id=633b772b */ "./src/views/apps/projects/overview.vue?vue&type=template&id=633b772b");
/* harmony import */ var _overview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.vue?vue&type=script&lang=js */ "./src/views/apps/projects/overview.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_overview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_overview_vue_vue_type_template_id_633b772b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/apps/projects/overview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/apps/projects/Backlog.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/apps/projects/Backlog.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backlog.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/projects/ProjectMember.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/apps/projects/ProjectMember.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMember.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/projects/overview.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/views/apps/projects/overview.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_overview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_overview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./overview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/overview.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/apps/projects/Backlog.vue?vue&type=template&id=51f0c3ca":
/*!***************************************************************************!*\
  !*** ./src/views/apps/projects/Backlog.vue?vue&type=template&id=51f0c3ca ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_template_id_51f0c3ca__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_template_id_51f0c3ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backlog.vue?vue&type=template&id=51f0c3ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=template&id=51f0c3ca");


/***/ }),

/***/ "./src/views/apps/projects/ProjectMember.vue?vue&type=template&id=4be31e9e":
/*!*********************************************************************************!*\
  !*** ./src/views/apps/projects/ProjectMember.vue?vue&type=template&id=4be31e9e ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_template_id_4be31e9e__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_template_id_4be31e9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMember.vue?vue&type=template&id=4be31e9e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=template&id=4be31e9e");


/***/ }),

/***/ "./src/views/apps/projects/overview.vue?vue&type=template&id=633b772b":
/*!****************************************************************************!*\
  !*** ./src/views/apps/projects/overview.vue?vue&type=template&id=633b772b ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_overview_vue_vue_type_template_id_633b772b__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_overview_vue_vue_type_template_id_633b772b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./overview.vue?vue&type=template&id=633b772b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/overview.vue?vue&type=template&id=633b772b");


/***/ }),

/***/ "./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_0_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_0_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_0_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_0_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_0_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_1_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_1_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_1_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_1_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Backlog_vue_vue_type_style_index_1_id_51f0c3ca_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_0_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_0_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_0_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_0_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_0_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_1_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_1_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_1_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_1_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectMember_vue_vue_type_style_index_1_id_4be31e9e_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=0&id=51f0c3ca&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("59813147", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/Backlog.vue?vue&type=style&index=1&id=51f0c3ca&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("503b95b4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=0&id=4be31e9e&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("26da99ab", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/apps/projects/ProjectMember.vue?vue&type=style&index=1&id=4be31e9e&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("5fbafa4a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=src_views_apps_projects_overview_vue.js.map