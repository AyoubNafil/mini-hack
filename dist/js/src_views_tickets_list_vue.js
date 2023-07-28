"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_tickets_list_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/list.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/list.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue3_count_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-count-to */ "./node_modules/vue3-count-to/dist/vue3-count-to.esm.js");
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css */ "./node_modules/@vueform/multiselect/themes/default.css");
/* harmony import */ var _vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vueform_multiselect_themes_default_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/page-header */ "./src/components/page-header.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../app.config */ "./app.config.json");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/lottie.vue */ "./src/components/widgets/lottie.vue");
/* harmony import */ var _components_widgets_msoeawqm_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/msoeawqm.json */ "./src/components/widgets/msoeawqm.json");
/* harmony import */ var _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/gsqxdxog.json */ "./src/components/widgets/gsqxdxog.json");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../api/utile */ "./src/api/utile.js");















/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "List",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_8__.description
    }]
  },
  data() {
    return {
      title: "List",
      items: [{
        text: "Tickets",
        href: "/"
      }, {
        text: "List",
        active: true
      }],
      modalShow: false,
      rangeDateconfig: {
        wrap: true,
        // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
        mode: "range"
      },
      config: {
        enableTime: false,
        dateFormat: "d M, Y"
      },
      date: null,
      date1: null,
      date2: null,
      filterdate: null,
      filterdate1: null,
      filtervalue: 'All',
      filtervalue1: 'All',
      filtersearchQuery1: null,
      searchQuery: null,
      page: 1,
      perPage: 9,
      pages: [],
      ticketsList: [],
      tot: '',
      pen: '',
      clo: '',
      defaultOptions: {
        animationData: _components_widgets_msoeawqm_json__WEBPACK_IMPORTED_MODULE_11__
      },
      defaultOptions1: {
        animationData: _components_widgets_gsqxdxog_json__WEBPACK_IMPORTED_MODULE_12__
      }
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    PageHeader: _components_page_header__WEBPACK_IMPORTED_MODULE_7__["default"],
    CountTo: vue3_count_to__WEBPACK_IMPORTED_MODULE_1__.CountTo,
    lottie: _components_widgets_lottie_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_2__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.ticketsList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter(data => {
          return data.Name.toLowerCase().includes(search) || data.CreatedBy.Name.toLowerCase().includes(search) || data.CreatedDate.toLowerCase().includes(search) || data.Status__c.toLowerCase().includes(search) || data.Priority__c.toLowerCase().includes(search) || data.Task__r.Name.toLowerCase().includes(search);
        });
      } else if (this.filterdate !== null) {
        if (this.filterdate !== null) {
          var date1 = this.filterdate.split(" to ")[0];
          var date2 = this.filterdate.split(" to ")[1];
        }
        return this.displayedPosts.filter(data => {
          if (new Date(data.due.slice(0, 12)) >= new Date(date1) && new Date(data.due.slice(0, 12)) <= new Date(date2)) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.filtervalue !== null) {
        return this.displayedPosts.filter(data => {
          if (data.status === this.filtervalue || this.filtervalue == 'All') {
            return data;
          } else {
            return null;
          }
        });
      } else {
        return this.displayedPosts;
      }
    }
  },
  watch: {
    posts() {
      this.setPages();
    }
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    }
  },
  methods: {
    SearchData() {
      this.filterdate = this.filterdate1;
      this.filtervalue = this.filtervalue1;
    },
    async getCaseDetail() {
      try {
        this.tot = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_13__.executeQuery)("SELECT Id FROM Ticket__c");
        if (this.tot && this.tot.length > 0) {
          this.tot = this.tot.length;
        }
        this.pen = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_13__.executeQuery)("SELECT Id FROM Ticket__c where status__c!='Closed'");
        if (this.pen && this.pen.length > 0) {
          this.pen = this.pen.length;
        }
        this.clo = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_13__.executeQuery)("SELECT Id FROM Ticket__c where status__c='Closed'");
        if (this.clo && this.clo.length > 0) {
          this.clo = this.clo.length;
        }
        this.ticketsList = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_13__.executeQuery)("SELECT Id, Name, Task__r.Name, Task__r.Type__r.Board__r.Name, Status__c, Priority__c, CreatedDate, CreatedBy.Name, DueDate__c, Assigned__r.Name FROM Ticket__c ");
        //this.ticketsList.CreatedDate = this.ticketsList.CreatedDate.substring(0, 10);
        if (this.ticketsList) {
          console.log(this.ticketsList);
        } else {
          console.log("Empty No ticket with this id");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    },
    editdata(data) {
      this.modalShow = true;
      document.getElementById("modal-id").style.display = "block";
      document.querySelector('.exampleModalLabel').innerHTML = "Edit Ticket";
      document.getElementById('orderId').value = data.id;
      document.getElementById('tasksTitle').value = data.title;
      document.getElementById('clientName').value = data.client;
      document.getElementById('assignedtoName').value = data.assigned;
      document.getElementById('cdate').value = data.create;
      document.getElementById('ddate').value = data.due;
      document.getElementById('ticketstatus').value = data.status;
      document.getElementById('priority').value = data.priority;
      document.getElementById('edit-btn').style.display = 'block';
      document.getElementById('add-btn').style.display = 'none';
    },
    updateorder() {
      let result = this.ticketsList.findIndex(o => o.id == document.getElementById('orderId').value);
      this.ticketsList[result].title = document.getElementById('tasksTitle').value;
      this.ticketsList[result].client = document.getElementById('clientName').value;
      this.ticketsList[result].assigned = document.getElementById('assignedtoName').value;
      this.ticketsList[result].create = document.getElementById('cdate').value;
      this.ticketsList[result].due = document.getElementById('ddate').value;
      this.ticketsList[result].status = document.getElementById('ticketstatus').value;
      this.ticketsList[result].priority = document.getElementById('priority').value;
      document.getElementById('closemodal').click();
      axios__WEBPACK_IMPORTED_MODULE_14__["default"].patch(`https://api-node.themesbrand.website/apps/ticket/${this.ticketsList[result]._id}`, this.ticketsList[result]).then(() => {}).catch(er => {
        console.log(er);
      });
    },
    deletedata(event) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.ticketsList.splice(this.ticketsList.indexOf(event), 1);
          axios__WEBPACK_IMPORTED_MODULE_14__["default"]["delete"](`https://api-node.themesbrand.website/apps/ticket/${event._id}`).then(() => {}).catch(er => {
            console.log(er);
          });
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
          var cusList = this.ticketsList;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders.id != id;
            });
          });
          this.ticketsList = cusList;
          document.getElementById("checkAll").checked = false;
          var itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked == true) {
              ele.checked = false;
              ele.closest("tr").classList.remove("table-active");
            }
          });
        } else {
          return false;
        }
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true
        });
      }
    },
    addorder() {
      var id = '#VLZ4' + this.ticketsList.length + 1;
      var title = document.getElementById('tasksTitle').value;
      var client = document.getElementById('clientName').value;
      var assigned = document.getElementById('assignedtoName').value;
      var create = document.getElementById('cdate').value;
      var due = document.getElementById('ddate').value;
      var status = document.getElementById('ticketstatus').value;
      var priority = document.getElementById('priority').value;
      var data = {
        id: id,
        title: title,
        client: client,
        assigned: assigned,
        create: create,
        due: due,
        status: status,
        priority: priority
      };
      this.ticketsList.push(data);
      axios__WEBPACK_IMPORTED_MODULE_14__["default"].post(`https://api-node.themesbrand.website/apps/ticket`, data).then(() => {}).catch(er => {
        console.log(er);
      });
      document.getElementById('closemodal').click();
      document.getElementById("addform").reset();
    },
    addnew() {
      this.modalShow = true;
      document.getElementById("addform").reset();
      document.getElementById("modal-id").style.display = "none";
      document.querySelector('.exampleModalLabel').innerHTML = "Add Ticket";
      document.getElementById('add-btn').style.display = 'block';
      document.getElementById('edit-btn').style.display = 'none';
      // this.modalShow = !this.modalShow;
    },

    setPages() {
      let numberOfPages = Math.ceil(this.ticketsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(ticketsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return ticketsList.slice(from, to);
    }
  },
  async mounted() {
    this.getCaseDetail();
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll('.form-check-all input[type="checkbox"]');
        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
            document.getElementById('remove-actions').style.display = 'block';
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
            document.getElementById('remove-actions').style.display = 'none';
          });
        }
      };
    }
    var checkboxes = document.querySelectorAll('#ticketsList .form-check-input');
    Array.from(checkboxes).forEach(function (element) {
      element.addEventListener('change', function (event) {
        var checkedCount = document.querySelectorAll('#ticketsList .form-check-input:checked').length;
        if (event.target.closest("tr").classList.contains("table-active")) {
          checkedCount > 0 ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        } else {
          checkedCount > 0 ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/list.vue?vue&type=template&id=45a7c640":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/list.vue?vue&type=template&id=45a7c640 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "d-flex justify-content-between"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "fw-medium text-muted mb-0"
}, "Total Tickets", -1 /* HOISTED */);
const _hoisted_3 = {
  class: "mt-4 ff-secondary fw-semibold"
};
const _hoisted_4 = {
  class: "mb-0 text-muted"
};
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-up-line align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title bg-soft-primary text-primary rounded-circle fs-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-ticket-2-line"
})])])], -1 /* HOISTED */);
const _hoisted_7 = {
  class: "d-flex justify-content-between"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "fw-medium text-muted mb-0"
}, "Pending Tickets", -1 /* HOISTED */);
const _hoisted_9 = {
  class: "mt-4 ff-secondary fw-semibold"
};
const _hoisted_10 = {
  class: "mb-0 text-muted"
};
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-down-line align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title bg-soft-warning text-warning rounded-circle fs-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-timer-sand"
})])])], -1 /* HOISTED */);
const _hoisted_13 = {
  class: "d-flex justify-content-between"
};
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "fw-medium text-muted mb-0"
}, "Closed Tickets", -1 /* HOISTED */);
const _hoisted_15 = {
  class: "mt-4 ff-secondary fw-semibold"
};
const _hoisted_16 = {
  class: "mb-0 text-muted"
};
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-down-line align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title bg-soft-secondary text-secondary rounded-circle fs-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-shopping-bag-line"
})])])], -1 /* HOISTED */);
const _hoisted_19 = {
  class: "d-flex justify-content-between"
};
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "fw-medium text-muted mb-0"
}, "Deleted Tickets", -1 /* HOISTED */);
const _hoisted_21 = {
  class: "mt-4 ff-secondary fw-semibold"
};
const _hoisted_22 = {
  class: "mb-0 text-muted"
};
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-up-line align-middle"
}, null, -1 /* HOISTED */);
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "avatar-sm flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "avatar-title bg-soft-danger text-danger rounded-circle fs-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-line"
})])])], -1 /* HOISTED */);
const _hoisted_25 = {
  class: "d-flex align-items-center"
};
const _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "card-title mb-0 flex-grow-1"
}, "Tickets", -1 /* HOISTED */);
const _hoisted_27 = {
  class: "flex-shrink-0"
};
const _hoisted_28 = {
  class: "d-flex flex-wrap gap-2"
};
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-2-line"
}, null, -1 /* HOISTED */);
const _hoisted_30 = {
  class: "search-box"
};
const _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-search-line search-icon"
}, null, -1 /* HOISTED */);
const _hoisted_32 = {
  class: "input-light"
};
const _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-equalizer-fill me-1 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_34 = {
  class: "table-responsive table-card mb-4"
};
const _hoisted_35 = {
  class: "table align-middle table-nowrap mb-0",
  id: "ticketTable"
};
const _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "40px"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  id: "checkAll",
  value: "option"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "tasks_name"
}, "Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "client_name"
}, "Client"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "id"
}, "Task/Project"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "assignedto"
}, "Assigned To"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "create_date"
}, "Create Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "due_date"
}, "Due Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "status"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "priority"
}, "Priority"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  class: "sort",
  "data-sort": "action"
}, "Action")])], -1 /* HOISTED */);
const _hoisted_37 = {
  class: "list form-check-all"
};
const _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "form-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  class: "form-check-input",
  type: "checkbox",
  name: "chk_child",
  value: "option1"
})])], -1 /* HOISTED */);
const _hoisted_39 = {
  class: "tasks_name"
};
const _hoisted_40 = {
  class: "client_name"
};
const _hoisted_41 = {
  class: "tasks_name"
};
const _hoisted_42 = {
  class: "assignedto"
};
const _hoisted_43 = {
  class: "create_date"
};
const _hoisted_44 = {
  class: "due_date"
};
const _hoisted_45 = {
  class: "status"
};
const _hoisted_46 = {
  class: "Priority"
};
const _hoisted_47 = {
  class: "col text-end dropdown"
};
const _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-more-fill fs-17"
}, null, -1 /* HOISTED */);
const _hoisted_49 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-eye-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-pencil-fill align-bottom me-2 text-muted"
}, null, -1 /* HOISTED */);
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-delete-bin-5-fill text-muted me-2 align-bottom"
}, null, -1 /* HOISTED */);
const _hoisted_53 = {
  class: "text-center"
};
const _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  class: "mt-2"
}, "Sorry! No Result Found", -1 /* HOISTED */);
const _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, " We've searched more than 150+ Tickets We did not find any Tickets for you search. ", -1 /* HOISTED */);
const _hoisted_56 = {
  class: "d-flex justify-content-end mt-3"
};
const _hoisted_57 = {
  class: "pagination-wrap hstack gap-2"
};
const _hoisted_58 = {
  class: "pagination listjs-pagination mb-0"
};
const _hoisted_59 = ["onClick"];
const _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "modal-id"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "orderId",
  class: "form-label"
}, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "orderId",
  class: "form-control",
  placeholder: "ID",
  value: "#VLZ462",
  readonly: ""
})], -1 /* HOISTED */);
const _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "tasksTitle-field",
  class: "form-label"
}, "Title"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "tasksTitle",
  class: "form-control",
  placeholder: "Title",
  required: ""
})], -1 /* HOISTED */);
const _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "clientName-field",
  class: "form-label"
}, "Client"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "clientName",
  class: "form-control",
  placeholder: "Client Name",
  required: ""
})], -1 /* HOISTED */);
const _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "assignedtoName-field",
  class: "form-label"
}, "Assigned To"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "assignedtoName",
  class: "form-control",
  placeholder: "Assigned to",
  required: ""
})], -1 /* HOISTED */);
const _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "date-field",
  class: "form-label"
}, "Create Date", -1 /* HOISTED */);
const _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "duedate-field",
  class: "form-label"
}, "Due Date", -1 /* HOISTED */);
const _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "ticket-status",
  class: "form-label"
}, "Status", -1 /* HOISTED */);
const _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
  class: "form-control",
  "data-plugin": "choices",
  name: "ticket-status",
  id: "ticketstatus"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "New"
}, "New"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Inprogress"
}, "Inprogress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Closed"
}, "Closed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Open"
}, "Open")], -1 /* HOISTED */);
const _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  for: "priority-field",
  class: "form-label"
}, "Priority", -1 /* HOISTED */);
const _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
  class: "form-control",
  "data-plugin": "choices",
  name: "priority-field",
  id: "priority"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Priority"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "High"
}, "High"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Medium"
}, "Medium"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Low"
}, "Low")], -1 /* HOISTED */);
const _hoisted_70 = {
  class: "modal-footer v-modal-footer mt-3"
};
const _hoisted_71 = {
  class: "hstack gap-2 justify-content-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");
  const _component_count_to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("count-to");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_Multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Multiselect");
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_lottie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lottie");
  const _component_b_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form");
  const _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader, {
      title: $data.title,
      items: $data.items
    }, null, 8 /* PROPS */, ["title", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3",
        sm: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "card-animate"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
              duration: 1000,
              startVal: 0,
              endVal: `${this.tot}`
            }, null, 8 /* PROPS */, ["endVal"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              class: "bg-light text-success mb-0"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 17.32 % ")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" vs. previous month ")])]), _hoisted_6])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3",
        sm: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "card-animate"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
              duration: 1000,
              startVal: 0,
              endVal: `${this.pen}`
            }, null, 8 /* PROPS */, ["endVal"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              class: "bg-light text-danger mb-0"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 0.96 % ")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" vs. previous month ")])]), _hoisted_12])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3",
        sm: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "card-animate"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
              duration: 1000,
              startVal: 0,
              endVal: `${this.clo}`
            }, null, 8 /* PROPS */, ["endVal"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              class: "bg-light text-danger mb-0"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 3.87 % ")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" vs. previous month ")])]), _hoisted_18])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "3",
        sm: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          class: "card-animate"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
              duration: 1000,
              startVal: 0,
              endVal: 0
            })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
              class: "bg-light text-success mb-0"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 1.09 % ")]),
              _: 1 /* STABLE */
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" vs. previous month ")])]), _hoisted_24])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        lg: "12"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
          "no-body": "",
          id: "ticketsList"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
            class: "border-0"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
              variant: "soft-danger",
              class: "me-1",
              id: "remove-actions",
              onClick: $options.deleteMultiple
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_29]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"])])])])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
            class: "border border-dashed border-end-0 border-start-0"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
              class: "g-3"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                xxl: "5",
                sm: "12"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                  type: "text",
                  class: "form-control search bg-light border-light",
                  placeholder: "Search for ticket details or something...",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.searchQuery = $event)
                }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchQuery]]), _hoisted_31])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                xxl: "3",
                sm: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
                  modelValue: $data.filterdate1,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.filterdate1 = $event),
                  config: $data.rangeDateconfig,
                  class: "form-control bg-light border-light",
                  placeholder: "Select date"
                }, null, 8 /* PROPS */, ["modelValue", "config"])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                xxl: "3",
                sm: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Multiselect, {
                  modelValue: $data.filtervalue1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.filtervalue1 = $event),
                  "close-on-select": true,
                  searchable: true,
                  "create-option": true,
                  options: [{
                    value: '',
                    label: 'Status'
                  }, {
                    value: 'All',
                    label: 'All'
                  }, {
                    value: 'Open',
                    label: 'Open'
                  }, {
                    value: 'Inprogress',
                    label: 'Inprogress'
                  }, {
                    value: 'Closed',
                    label: 'Closed'
                  }, {
                    value: 'New',
                    label: 'New'
                  }]
                }, null, 8 /* PROPS */, ["modelValue"])])]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
                xxl: "1",
                sm: "4"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
                  type: "button",
                  variant: "secondary",
                  class: "w-100",
                  onClick: $options.SearchData
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Filters ")]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["onClick"])]),
                _: 1 /* STABLE */
              })]),

              _: 1 /* STABLE */
            })])]),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", _hoisted_37, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.resultQuery, (data, index) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                key: index
              }, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                to: `/apps/tickets-details/${data.Id}`,
                class: "fw-medium link-primary"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.Name), 1 /* TEXT */)]),

                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.CreatedBy.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.Task__r.Name) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.Task__r.Type__r.Board__r.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.Assigned__r.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.CreatedDate.substring(0, 10)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.DueDate__c), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge text-uppercase", {
                  'badge-soft-warning': data.Status__c == 'Inprogress',
                  'badge-soft-info': data.Status__c == 'New',
                  'badge-soft-success': data.Status__c == 'Open',
                  'badge-soft-danger': data.Status__c == 'Closed'
                }])
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.Status__c), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["badge text-uppercase", {
                  'bg-danger': data.Priority__c == 'High',
                  'bg-success': data.Priority__c == 'Low',
                  'bg-warning': data.Priority__c == 'Medium'
                }])
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.Priority__c), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                href: "javascript:void(0);",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_48]),
                _: 1 /* STABLE */
              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                class: "dropdown-item",
                to: `/apps/tickets-details/${data.Id}`
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View ")]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "dropdown-item",
                href: "javascript:void(0);"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit ")]),
                _: 1 /* STABLE */
              })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "dropdown-item",
                href: "javascript:void(0);"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete ")]),
                _: 1 /* STABLE */
              })])])])])]);
            }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["noresult", {
                'd-block': $options.resultQuery.length == 0
              }]),
              style: {
                "display": "none"
              }
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lottie, {
              class: "avatar-xl",
              colors: "primary:#121331,secondary:#08a88a",
              options: $data.defaultOptions,
              height: 90,
              width: 90
            }, null, 8 /* PROPS */, ["options"]), _hoisted_54, _hoisted_55])], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [$data.page != 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
              key: 0,
              class: "page-item pagination-prev",
              href: "#",
              onClick: _cache[3] || (_cache[3] = $event => $data.page--)
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Previous ")]),
              _: 1 /* STABLE */
            })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_58, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.pages, (pageNumber, index) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                  active: pageNumber == $data.page,
                  disabled: pageNumber == '...'
                }),
                key: index,
                onClick: $event => $data.page = pageNumber
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
                class: "page",
                href: "#"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pageNumber), 1 /* TEXT */)]),

                _: 2 /* DYNAMIC */
              }, 1024 /* DYNAMIC_SLOTS */)], 10 /* CLASS, PROPS */, _hoisted_59);
            }), 128 /* KEYED_FRAGMENT */))]), $data.page < $data.pages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_link, {
              key: 1,
              class: "page-item pagination-next",
              href: "#",
              onClick: _cache[4] || (_cache[4] = $event => $data.page++)
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Next ")]),
              _: 1 /* STABLE */
            })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
      modelValue: $data.modalShow,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $data.modalShow = $event),
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
        id: "addform",
        class: "tablelist-form",
        autocomplete: "off"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
          class: "g-3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "12"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_60]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "12"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_61]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_62]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_63]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
              modelValue: $data.date1,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.date1 = $event),
              config: $data.config,
              class: "form-control bg-light border-light",
              id: "cdate"
            }, null, 8 /* PROPS */, ["modelValue", "config"])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
              modelValue: $data.date2,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.date2 = $event),
              config: $data.config,
              class: "form-control bg-light border-light",
              id: "ddate"
            }, null, 8 /* PROPS */, ["modelValue", "config"])]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_66, _hoisted_67]),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            lg: "6"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_68, _hoisted_69]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "light",
          onClick: _cache[7] || (_cache[7] = $event => $data.modalShow = false),
          id: "closemodal"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close ")]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "submit",
          variant: "success",
          id: "add-btn",
          onClick: $options.addorder
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Ticket ")]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
          type: "button",
          variant: "success",
          id: "edit-btn",
          onClick: $options.updateorder
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update ")]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"])])])]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])]),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./src/views/tickets/list.vue":
/*!************************************!*\
  !*** ./src/views/tickets/list.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_45a7c640__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=45a7c640 */ "./src/views/tickets/list.vue?vue&type=template&id=45a7c640");
/* harmony import */ var _list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js */ "./src/views/tickets/list.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_list_vue_vue_type_template_id_45a7c640__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/tickets/list.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/tickets/list.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/views/tickets/list.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/list.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/tickets/list.vue?vue&type=template&id=45a7c640":
/*!******************************************************************!*\
  !*** ./src/views/tickets/list.vue?vue&type=template&id=45a7c640 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_template_id_45a7c640__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_template_id_45a7c640__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./list.vue?vue&type=template&id=45a7c640 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/tickets/list.vue?vue&type=template&id=45a7c640");


/***/ })

}]);
//# sourceMappingURL=src_views_tickets_list_vue.js.map