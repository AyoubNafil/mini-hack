"use strict";
(self["webpackChunkinovascrum"] = self["webpackChunkinovascrum"] || []).push([["src_views_dashboard_projects_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/active-projects.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/active-projects.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setup() {
    // Define a reactive ref for the boards array
    const boards = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    // Define the number of items to show per page
    const itemsPerPage = 5;
    // Define a reactive ref for the current page
    const currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);

    // Fetch data when the component is mounted
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
      try {
        const boardRecords = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Id, Name, Owner.Name, Status__c, Deadline__c, CreatedDate, Description__c, priority__c FROM board__c");
        if (boardRecords && boardRecords.length > 0) {
          boards.value = boardRecords.map(board => {
            // Calculate the time remaining in hours between today and the deadline
            const deadlineDate = new Date(board.Deadline__c);
            const currentDate = new Date();
            const timeRemainingHours = (deadlineDate - currentDate) / (1000 * 60 * 60);

            // Calculate the total time allowed in hours between CreatedDate and Deadline__c
            const createdDate = new Date(board.CreatedDate);
            const totalTimeAllowedHours = (deadlineDate - createdDate) / (1000 * 60 * 60);

            // Calculate the percentage
            let percentage = (totalTimeAllowedHours - timeRemainingHours) / totalTimeAllowedHours * 100;

            // Limit the percentage to a maximum of 100%
            percentage = Math.min(100, percentage);
            return {
              id: board.Id,
              projectName: board.Name,
              img: __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png"),
              // Replace this with the correct image path
              projectLead: board.Owner.Name,
              // You may need to fetch the user's name based on OwnerId
              percentage: percentage.toFixed(0) + "%",
              // Percentage rounded to 0 decimal places
              subItem: [{
                id: 1,
                assImg: __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png")
              }, {
                id: 2,
                assImg: __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png")
              }],
              // Initialize an empty array for subItem, you can populate it later if needed
              badge: board.status__c,
              // Replace this with the correct badge value based on Status__c
              badgeClass: board.status__c === "In Progress" ? "warning" : "success",
              // Set badgeClass based on Status__c
              dueDate: board.Deadline__c // Replace this with the correct due date value
            };
          });
        } else {
          console.log("Empty");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    });

    // Calculate the total number of pages based on the number of boards and itemsPerPage
    const totalPages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Math.ceil(boards.value.length / itemsPerPage));

    // Calculate the displayed items based on the current page and itemsPerPage
    const displayedItems = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return boards.value.slice(startIndex, endIndex);
    });

    // Function to go to the previous page
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    // Function to go to the next page
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    // Function to go to a specific page
    const gotoPage = pageNumber => {
      if (pageNumber >= 1 && pageNumber <= totalPages.value) {
        currentPage.value = pageNumber;
      }
    };
    return {
      boards,
      displayedItems,
      currentPage,
      totalPages,
      prevPage,
      nextPage,
      gotoPage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layouts/main.vue */ "./src/layouts/main.vue");
/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/page-header */ "./src/components/page-header.vue");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.config */ "./app.config.json");
/* harmony import */ var _widget_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget.vue */ "./src/views/dashboard/projects/widget.vue");
/* harmony import */ var _schedule_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule.vue */ "./src/views/dashboard/projects/schedule.vue");
/* harmony import */ var _projects_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.vue */ "./src/views/dashboard/projects/projects.vue");
/* harmony import */ var _tasks_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks.vue */ "./src/views/dashboard/projects/tasks.vue");
/* harmony import */ var _members_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members.vue */ "./src/views/dashboard/projects/members.vue");
/* harmony import */ var _status_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status.vue */ "./src/views/dashboard/projects/status.vue");
/* harmony import */ var _active_projects_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./active-projects.vue */ "./src/views/dashboard/projects/active-projects.vue");








//import Chat from "./chat.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Projects",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_2__.description
    }]
  },
  data() {
    return {
      title: "Projects",
      items: [{
        text: "Dashboards",
        href: "/"
      }, {
        text: "Projects",
        active: true
      }]
    };
  },
  components: {
    Layout: _layouts_main_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PageHeader: _components_page_header__WEBPACK_IMPORTED_MODULE_1__["default"],
    Widgets: _widget_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Schedules: _schedule_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Project: _projects_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Task: _tasks_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Member: _members_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ActiveProjects: _active_projects_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Status: _status_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/members.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/members.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      date: null,
      config: {
        inline: true
      },
      teamMembersData: [],
      // Non-reactive data property to hold the fetched team members data
      chartOptions: {
        chart: {
          type: "radialBar",
          width: 36,
          height: 36,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%"
            },
            track: {
              margin: 1
            },
            dataLabels: {
              show: false
            }
          }
        },
        colors: ["#687cfe"]
      }
    };
  },
  async mounted() {
    try {
      this.teamMembersData = await this.fetchTeamMembersDataFromSalesforce();
    } catch (error) {
      console.error("Error fetching team members data:", error);
    }
  },
  computed: {
    teamMembers() {
      // Format the team members data to include additional properties needed for the template
      return this.teamMembersData.map(member => {
        return {
          id: member.Id,
          img: member.FullPhotoUrl,
          // You can update this based on the actual member data
          name: member.Name,
          position: member.UserType,
          hours: "110",
          tasks: "258",
          series: [50],
          chartsColor: "#687cfe"
        };
      });
    }
  },
  methods: {
    async fetchTeamMembersDataFromSalesforce() {
      // Use Salesforce REST API or SOQL query to fetch team members data
      // Replace the below query with your actual SOQL query to get team members data
      const queryResult = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT Id, Name, UserType, FullPhotoUrl FROM User");

      // You can format the data further if needed before returning
      return queryResult;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/projects.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/projects.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue3_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-count-to */ "./node_modules/vue3-count-to/dist/vue3-count-to.esm.js");

function getChartColorsArray(colors) {
  colors = JSON.parse(colors);
  return colors.map(function (value) {
    var newValue = value.replace(" ", "");
    if (newValue.indexOf(",") === -1) {
      var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
      if (color) {
        color = color.replace(" ", "");
        return color;
      } else return newValue;
    } else {
      var val = value.split(',');
      if (val.length == 2) {
        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CountTo: vue3_count_to__WEBPACK_IMPORTED_MODULE_0__.CountTo
  },
  setup() {
    return {
      series: [{
        name: "Number of Projects",
        type: "bar",
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
      }, {
        name: "Revenue",
        type: "area",
        data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
      }, {
        name: "Active Projects",
        type: "bar",
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
      }],
      chartOptions: {
        chart: {
          height: 374,
          type: "line",
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: "smooth",
          dashArray: [0, 3, 0],
          width: [0, 1, 0]
        },
        fill: {
          opacity: [1, 0.1, 1]
        },
        markers: {
          size: [0, 4, 0],
          strokeWidth: 2,
          hover: {
            size: 4
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          }
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            right: -2,
            bottom: 15,
            left: 10
          }
        },
        legend: {
          show: true,
          horizontalAlign: "center",
          offsetX: 0,
          offsetY: -5,
          markers: {
            width: 9,
            height: 9,
            radius: 6
          },
          itemMargin: {
            horizontal: 10,
            vertical: 0
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "30%",
            barHeight: "70%"
          }
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-secondary", "--vz-danger"]'),
        tooltip: {
          shared: true,
          y: [{
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
            }
          }, {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return "$" + y.toFixed(2) + "k";
              }
              return y;
            }
          }, {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
            }
          }]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/schedule.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/schedule.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/esm/index.js");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      date: null,
      config: {
        inline: true
      },
      eventsData: [] // Non-reactive data property to hold the events data
    };
  },

  async mounted() {
    try {
      this.eventsData = await this.fetchEventsDataFromSalesforce();
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  },
  computed: {
    events() {
      return this.eventsData;
    }
  },
  methods: {
    async fetchEventsDataFromSalesforce() {
      // Use Salesforce REST API or SOQL query to fetch events data
      // Replace the below query with your actual SOQL query to get events data
      const queryResult = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Name, Description__c, Deadline__c FROM Board__c");

      // You can format the data further if needed before returning
      return queryResult;
    },
    formatDate(dateTime) {
      // Helper method to format date and time from the fetched data
      const date = new Date(dateTime);
      return {
        date: date.getDate().toString().padStart(2, "0"),
        time: `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/status.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/status.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");

function getChartColorsArray(colors) {
  colors = JSON.parse(colors);
  return colors.map(function (value) {
    var newValue = value.replace(" ", "");
    if (newValue.indexOf(",") === -1) {
      var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
      if (color) {
        color = color.replace(" ", "");
        return color;
      } else return newValue;
    } else {
      var val = value.split(",");
      if (val.length == 2) {
        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      statusData: [],
      series: [125, 42, 58, 89],
      chartOptions: {
        labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
        chart: {
          type: "donut",
          height: 230
        },
        plotOptions: {
          pie: {
            size: 100,
            offsetX: 0,
            offsetY: 0,
            donut: {
              size: "90%",
              labels: {
                show: false
              }
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        stroke: {
          lineCap: "round",
          width: 0
        },
        colors: getChartColorsArray('["--vz-success", "--vz-primary", "--vz-warning", "--vz-secondary"]')
      },
      totalProjects: 0,
      newProjects: 0
    };
  },
  async mounted() {
    try {
      // Fetch status data and update the chart labels and counts
      const statusData = await this.fetchStatusDataFromSalesforce();
      this.processChartData(statusData);

      // Fetch the total count of projects
      const totalCount = await this.fetchTotalProjectCount();
      this.totalProjects = totalCount;
      const newtotalCount = await this.newfetchTotalProjectCount();
      this.newProjects = newtotalCount;
      console.log(this.newProjects);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    async fetchTotalProjectCount() {
      // Use Salesforce REST API or SOQL query to fetch the total count of projects
      // Replace the below query with your actual SOQL query to get the total count of projects
      const queryResult = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT COUNT(Id)  totalProjects FROM Board__c");
      return queryResult[0].totalProjects;
    },
    async newfetchTotalProjectCount() {
      // Use Salesforce REST API or SOQL query to fetch the total count of projects
      // Replace the below query with your actual SOQL query to get the total count of projects
      let date = new Date().toJSON().slice(0, 10);
      const queryResult = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT COUNT(Id)  totalProjects FROM Board__c where DAY_ONLY(CreatedDate) >= " + date + "");
      return queryResult[0].totalProjects;
    },
    async fetchStatusDataFromSalesforce() {
      // Use Salesforce REST API or SOQL query to fetch data for "status__c" field and count of projects for each status
      // Replace the below query with your actual SOQL query for the "status__c" field and count of projects
      const queryResult = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_0__.executeQuery)("SELECT status__c, COUNT(Id) projectCount FROM Board__c GROUP BY status__c ORDER BY status__c desc");

      // Format the data to return an array of objects with "name" and "value" properties
      // based on the fetched data
      const statusData = queryResult.map(record => {
        return {
          name: record.status__c,
          value: record.projectCount
        };
      });
      return statusData;
    },
    processChartData(data) {
      this.statusData = data; // Store the status data for use in the template
      this.series = data.map(item => item.value);
      this.chartOptions.labels = data.map(item => item.name);
      this.chartOptions.colors = getChartColorsArray('["--vz-success", "--vz-primary", "--vz-warning", "--vz-secondary"]'); // Set colors dynamically
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/tasks.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/tasks.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setup() {
    // Define a reactive ref for the task data
    const tasks = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    // Fetch data when the component is mounted
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
      try {
        // Fetch task data using the query
        const taskRecords = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Name, Type__r.Name, CreatedDate FROM task__c");

        // Check if the taskRecords is not empty
        if (taskRecords && taskRecords.length > 0) {
          // Map the taskRecords to the tasks array with the required properties
          tasks.value = taskRecords.map(task => ({
            name: task.Name,
            type: task.Type__r ? task.Type__r.Name : 'Unknown',
            deadline: formatDate(task.CreatedDate),
            createdDate: formatDate(task.CreatedDate),
            assignee: __webpack_require__(/*! @/assets/images/users/Trailblazer_avatar.png */ "./src/assets/images/users/Trailblazer_avatar.png") // Replace this with the correct image path
          }));
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    });

    // Function to format the date as "DD MMM YYYY" (e.g., 03 Nov 2021)
    function formatDate(dateString) {
      const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    }
    return {
      tasks // Expose the tasks ref to the template
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/widget.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/widget.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zhuowenli/vue-feather-icons */ "./node_modules/@zhuowenli/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _api_utile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/utile */ "./src/api/utile.js");




// Function to calculate the difference between two dates in hours and minutes
function calculateTimeDifferenceInHoursMinutes(start, end) {
  const timeDifference = end - start;
  const totalMinutes = timeDifference / (1000 * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  return {
    hours,
    minutes
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  setup() {
    const projectsWidgets = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      id: 1,
      feaIcon: "briefcase",
      feaIconClass: "primary",
      label: "Active Projects",
      counter: 0,
      suffix: "",
      badgeClass: "danger",
      icon: "ri-arrow-down-s-line",
      percentage: "5.02 %",
      caption: "Projects this month"
    }, {
      id: 2,
      feaIcon: "award",
      feaIconClass: "secondary",
      label: "New Tasks",
      counter: 0,
      separator: ",",
      suffix: "",
      badgeClass: "success",
      icon: "ri-arrow-up-s-line",
      percentage: "3.58 %",
      caption: "Leads this month"
    }, {
      id: 3,
      feaIcon: "clock",
      feaIconClass: "warning",
      label: "Total Hours",
      counter: "0h 0m",
      suffix: "m",
      badgeClass: "danger",
      icon: "ri-arrow-down-s-line",
      percentage: "10.35 %",
      caption: "Work this month"
    }]);

    // Fetch data when the component is mounted
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
      try {
        // Calculate the count of active projects
        const activeProjectsRecords = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Id FROM board__c");
        if (activeProjectsRecords && activeProjectsRecords.length > 0) {
          projectsWidgets.value[0].counter = activeProjectsRecords.length;
        }

        // Calculate the count of new leads (tasks)
        const newLeadsRecords = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Id FROM task__c");
        if (newLeadsRecords && newLeadsRecords.length > 0) {
          projectsWidgets.value[1].counter = newLeadsRecords.length;
        }

        // Calculate the total hours based on the difference between CreatedDate and Deadline__c
        const boardRecords = await (0,_api_utile__WEBPACK_IMPORTED_MODULE_1__.executeQuery)("SELECT Id, Deadline__c, CreatedDate FROM board__c");
        if (boardRecords && boardRecords.length > 0) {
          const totalMinutes = boardRecords.reduce((acc, board) => {
            const deadlineDate = new Date(board.Deadline__c);
            const createdDate = new Date(board.CreatedDate);
            const timeDifference = calculateTimeDifferenceInHoursMinutes(createdDate, deadlineDate);
            return acc + timeDifference.hours * 60 + timeDifference.minutes;
          }, 0);

          // Limit the total hours to a maximum of 730
          const maxTotalMinutes = 730 * 60;
          const limitedTotalMinutes = Math.min(totalMinutes, maxTotalMinutes);
          const hours = Math.floor(limitedTotalMinutes / 60);
          const minutes = limitedTotalMinutes % 60;
          const formattedTotalHours = `${Math.abs(hours)}h ${Math.abs(minutes)}m`;
          projectsWidgets.value[2].counter = formattedTotalHours;
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    });
    return {
      projectsWidgets,
      BriefcaseIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.BriefcaseIcon,
      AwardIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.AwardIcon,
      ClockIcon: _zhuowenli_vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ClockIcon
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/active-projects.vue?vue&type=template&id=0293ff01":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/active-projects.vue?vue&type=template&id=0293ff01 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "flex-shrink-0"
};
const _hoisted_2 = {
  class: "table-responsive table-card"
};
const _hoisted_3 = {
  class: "table table-nowrap table-centered align-middle"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  class: "bg-light text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Project Lead"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Assignee"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "10%"
  }
}, "Due Date")])], -1 /* HOISTED */);
const _hoisted_5 = {
  class: "fw-medium"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "d-flex align-items-center"
};
const _hoisted_8 = {
  class: "flex-shrink-0 me-1 text-muted fs-13"
};
const _hoisted_9 = {
  class: "avatar-group flex-nowrap"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  class: "text-muted"
};
const _hoisted_12 = {
  class: "align-items-center mt-xl-3 mt-4 justify-content-between d-flex"
};
const _hoisted_13 = {
  class: "flex-shrink-0"
};
const _hoisted_14 = {
  class: "text-muted"
};
const _hoisted_15 = {
  class: "fw-semibold"
};
const _hoisted_16 = {
  class: "fw-semibold"
};
const _hoisted_17 = {
  class: "pagination pagination-separated pagination-sm mb-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_b_progress = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-progress");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    "no-body": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "d-flex align-items-center"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
        class: "flex-grow-1 mb-0"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Active Projects")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "btn btn-soft-info btn-sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Export Report")]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.boards, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.projectName), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.img,
          class: "avatar-xxs rounded-circle me-1",
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          href: "javascript: void(0);",
          class: "text-reset"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.projectLead), 1 /* TEXT */)]),

          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.percentage), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_progress, {
          class: "progress-sm flex-grow-1 rounded",
          value: 53,
          variant: "primary"
        })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.subItem, (subitem, index) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            class: "avatar-group-item",
            key: index
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
            href: "javascript: void(0);",
            class: "d-inline-block"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: subitem.assImg,
              alt: "",
              class: "rounded-circle avatar-xxs"
            }, null, 8 /* PROPS */, _hoisted_10)]),
            _: 2 /* DYNAMIC */
          }, 1024 /* DYNAMIC_SLOTS */)]);
        }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`badge badge-soft-${item.badgeClass}`)
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.badge), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.dueDate), 1 /* TEXT */)]);
      }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Showing "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.displayedItems.length), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" of "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.boards.length), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Results ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
          disabled: $setup.currentPage === 1
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        onClick: $setup.prevPage,
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("←")]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])], 2 /* CLASS */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.totalPages, pageNumber => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
            active: $setup.currentPage === pageNumber
          }]),
          key: pageNumber
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          onClick: $event => $setup.gotoPage(pageNumber),
          href: "#",
          class: "page-link"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(pageNumber), 1 /* TEXT */)]),

          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])], 2 /* CLASS */);
      }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
          disabled: $setup.currentPage === $setup.totalPages
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        onClick: $setup.nextPage,
        href: "#",
        class: "page-link"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("→")]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"])], 2 /* CLASS */)])])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/index.vue?vue&type=template&id=04472df2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/index.vue?vue&type=template&id=04472df2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PageHeader");
  const _component_Widgets = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Widgets");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_Project = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Project");
  const _component_Schedules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Schedules");
  const _component_ActiveProjects = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActiveProjects");
  const _component_Task = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Task");
  const _component_Member = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Member");
  const _component_Status = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Status");
  const _component_Layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PageHeader, {
      title: $data.title,
      items: $data.items
    }, null, 8 /* PROPS */, ["title", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
      class: "project-wrapper"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "8"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Widgets), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            xl: "4"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            xl: "4"
          })]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
            xl: "12"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Project)]),
            _: 1 /* STABLE */
          })]),

          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "4"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Schedules)]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xl: "7"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ActiveProjects)]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xl: "5"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Task)]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "7"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Member)]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
        xxl: "5",
        lg: "6"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Status)]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/members.vue?vue&type=template&id=519e90b9":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/members.vue?vue&type=template&id=519e90b9 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "flex-shrink-0"
};
const _hoisted_2 = {
  class: "dropdown card-header-dropdown"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "fw-semibold text-uppercase fs-12"
}, "Sort by: ", -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last 30 Days"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-down ms-1"
})], -1 /* HOISTED */);
const _hoisted_5 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_6 = {
  class: "table-responsive table-card"
};
const _hoisted_7 = {
  class: "table table-borderless table-nowrap align-middle mb-0"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  class: "table-light text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Member"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Hours"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Tasks"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Status")])], -1 /* HOISTED */);
const _hoisted_9 = {
  class: "d-flex"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  class: "fs-13 mb-0"
};
const _hoisted_12 = {
  class: "fs-12 mb-0 text-muted"
};
const _hoisted_13 = {
  class: "mb-0"
};
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-muted"
}, "150h", -1 /* HOISTED */);
const _hoisted_15 = {
  style: {
    "width": "5%"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_apexchart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("apexchart");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    "no-body": "",
    class: "card-height-100"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "align-items-center d-flex"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
        class: "mb-0 flex-grow-1"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Team Members")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "text-reset dropdown-btn",
        href: "#",
        "data-bs-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3, _hoisted_4]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Today")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Yesterday")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last 7 Days")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last 30 Days")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("This Month")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last Month")]),
        _: 1 /* STABLE */
      })])])])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.teamMembers, (item, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.img,
          alt: "",
          class: "avatar-xs rounded-3 me-2"
        }, null, 8 /* PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.position), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.hours) + " : ", 1 /* TEXT */), _hoisted_14])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.tasks), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_apexchart, {
          class: "apex-charts",
          height: "36",
          dir: "ltr",
          series: item.series,
          options: {
            ...$data.chartOptions,
            ...{
              colors: [item.chartsColor]
            }
          }
        }, null, 8 /* PROPS */, ["series", "options"])])]);
      }), 128 /* KEYED_FRAGMENT */))])])])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/projects.vue?vue&type=template&id=010234ec":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/projects.vue?vue&type=template&id=010234ec ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "hstack gap-1"
};
const _hoisted_2 = {
  class: "p-3 border border-dashed border-start-0"
};
const _hoisted_3 = {
  class: "mb-1"
};
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Number of Projects", -1 /* HOISTED */);
const _hoisted_5 = {
  class: "p-3 border border-dashed border-start-0"
};
const _hoisted_6 = {
  class: "mb-1"
};
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Active Projects", -1 /* HOISTED */);
const _hoisted_8 = {
  class: "p-3 border border-dashed border-start-0"
};
const _hoisted_9 = {
  class: "mb-1"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Revenue", -1 /* HOISTED */);
const _hoisted_11 = {
  class: "p-3 border border-dashed border-start-0 border-end-0"
};
const _hoisted_12 = {
  class: "mb-1 text-success"
};
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Working Hours", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_count_to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("count-to");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  const _component_b_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-row");
  const _component_apexchart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("apexchart");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    "no-body": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "border-0 align-items-center d-flex"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
        class: "mb-0 flex-grow-1"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Projects Overview")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "soft-secondary",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ALL")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "soft-secondary",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1M")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "soft-secondary",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("6M")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        type: "button",
        variant: "soft-primary",
        size: "sm"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("1Y")]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "p-0 border-0 bg-soft-light"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_row, {
        class: "g-0 text-center"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          cols: "6",
          sm: "3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
            duration: 1000,
            startVal: 0,
            endVal: 9851
          })]), _hoisted_4])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          cols: "6",
          sm: "3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
            duration: 1000,
            startVal: 0,
            endVal: 1026
          })]), _hoisted_7])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          cols: "6",
          sm: "3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
            duration: 1000,
            startVal: 0,
            endVal: 228
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("k ")]), _hoisted_10])]),
          _: 1 /* STABLE */
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_col, {
          cols: "6",
          sm: "3"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_count_to, {
            duration: 1000,
            startVal: 0,
            endVal: 10589
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("h ")]), _hoisted_13])]),
          _: 1 /* STABLE */
        })]),

        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
      class: "p-0 pb-2"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_apexchart, {
        class: "apex-charts",
        height: "374",
        dir: "ltr",
        series: $setup.series,
        options: $setup.chartOptions
      }, null, 8 /* PROPS */, ["series", "options"])])]),
      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/schedule.vue?vue&type=template&id=0bb80927":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/schedule.vue?vue&type=template&id=0bb80927 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "upcoming-scheduled"
};
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  class: "text-uppercase fw-semibold mt-4 mb-3 text-muted"
}, "Events:", -1 /* HOISTED */);
const _hoisted_3 = {
  class: "flex-shrink-0 avatar-sm"
};
const _hoisted_4 = {
  class: "mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4"
};
const _hoisted_5 = {
  class: "flex-grow-1 ms-3"
};
const _hoisted_6 = {
  class: "mb-1"
};
const _hoisted_7 = {
  class: "text-muted mb-0"
};
const _hoisted_8 = {
  class: "flex-shrink-0"
};
const _hoisted_9 = {
  class: "text-muted mb-0"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-uppercase"
}, "am", -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  class: "mt-3 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);",
  class: "text-muted text-decoration-underline"
}, "View all Events")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_flat_pickr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flat-pickr");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    "no-body": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "border-0"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
        class: "mb-0"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Upcoming Schedules")]),
        _: 1 /* STABLE */
      })]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, {
      class: "pt-0"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flat_pickr, {
        modelValue: $data.date,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.date = $event),
        config: $data.config
      }, null, 8 /* PROPS */, ["modelValue", "config"])]), _hoisted_2, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.events, event => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: event.Id,
          class: "mini-stats-wid d-flex align-items-center mt-3"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(event.Deadline__c).date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.Name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(event.Description__c), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(event.Deadline__c).time) + " ", 1 /* TEXT */), _hoisted_10])])]);
      }), 128 /* KEYED_FRAGMENT */)), _hoisted_11]),
      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/status.vue?vue&type=template&id=697e9f02":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/status.vue?vue&type=template&id=697e9f02 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "flex-shrink-0"
};
const _hoisted_2 = {
  class: "dropdown card-header-dropdown"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-down ms-1"
}, null, -1 /* HOISTED */);
const _hoisted_4 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_5 = {
  class: "mt-3"
};
const _hoisted_6 = {
  class: "d-flex justify-content-center align-items-center mb-4"
};
const _hoisted_7 = {
  class: "me-3 ff-secondary mb-0"
};
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  class: "text-muted mb-0"
}, "Total Projects", -1 /* HOISTED */);
const _hoisted_9 = {
  class: "text-success fw-medium mb-0"
};
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-arrow-right-up-line"
}, null, -1 /* HOISTED */);
const _hoisted_11 = {
  class: "fw-medium mb-0"
};
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "ri-checkbox-blank-circle-fill text-success align-middle me-2"
}, null, -1 /* HOISTED */);
const _hoisted_13 = {
  class: "text-muted pe-5"
};
const _hoisted_14 = {
  class: "text-success fw-medium fs-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_apexchart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("apexchart");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    "no-body": "",
    class: "b-card card-height-100"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "align-items-center d-flex"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
        class: "mb-0 flex-grow-1"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Projects Status")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-btn text-muted",
        href: "#",
        "data-bs-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All Time "), _hoisted_3]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("All Time")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last 7 Days")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last 30 Days")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Last 90 Days")]),
        _: 1 /* STABLE */
      })])])])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_apexchart, {
        class: "apex-charts",
        dir: "ltr",
        height: "230",
        series: $data.series,
        options: $data.chartOptions
      }, null, 8 /* PROPS */, ["series", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.totalProjects), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
        variant: "soft-success",
        pill: "",
        class: "badge-soft-success p-1"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_10]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" +" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.newProjects) + " New ", 1 /* TEXT */)])])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.statusData, item => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: item.name,
          class: "d-flex justify-content-between border-bottom border-bottom-dashed py-2"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value) + " Projects", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, "~" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.hours) + "hrs", 1 /* TEXT */)])]);
      }), 128 /* KEYED_FRAGMENT */))])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/tasks.vue?vue&type=template&id=403cc2ae":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/tasks.vue?vue&type=template&id=403cc2ae ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "flex-shrink-0"
};
const _hoisted_2 = {
  class: "dropdown card-header-dropdown"
};
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  class: "text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("All Tasks "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  class: "mdi mdi-chevron-down ms-1"
})], -1 /* HOISTED */);
const _hoisted_4 = {
  class: "dropdown-menu dropdown-menu-end"
};
const _hoisted_5 = {
  class: "table-responsive table-card"
};
const _hoisted_6 = {
  class: "table table-borderless table-nowrap table-centered align-middle mb-0"
};
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", {
  class: "table-light text-muted"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Deadline"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Assignee")])], -1 /* HOISTED */);
const _hoisted_8 = {
  class: "form-check"
};
const _hoisted_9 = ["value", "id"];
const _hoisted_10 = ["for"];
const _hoisted_11 = {
  class: "text-muted"
};
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  class: "mt-3 text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_b_card_title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-title");
  const _component_b_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-link");
  const _component_b_card_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-header");
  const _component_b_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-badge");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_card, {
    "no-body": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_header, {
      class: "align-items-center d-flex"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_title, {
        class: "mb-0 flex-grow-1 py-1"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("My Tasks")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "text-reset dropdown-btn",
        href: "#",
        "data-bs-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_hoisted_3]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("All Tasks")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Completed ")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Inprogress")]),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        class: "dropdown-item",
        href: "#"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Pending")]),
        _: 1 /* STABLE */
      })])])])]),

      _: 1 /* STABLE */
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Loop through tasks and render each row "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tasks, (task, index) => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          class: "form-check-input fs-15",
          type: "checkbox",
          value: task.name,
          id: 'checkTask' + (index + 1)
        }, null, 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          class: "form-check-label ms-2",
          for: 'checkTask' + (index + 1)
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.name), 9 /* TEXT, PROPS */, _hoisted_10)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.deadline), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Conditionally display the badge based on the task status "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_badge, {
          variant: task.type === 'Completed' ? 'soft-success' : 'soft-warning'
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(task.type), 1 /* TEXT */)]),

          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["variant"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ... (other columns) ... "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
          href: "javascript: void(0);",
          class: "d-inline-block",
          "data-bs-toggle": "tooltip",
          "data-bs-placement": "top",
          title: "",
          "data-bs-original-title": task.assignee
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            src: task.assignee,
            alt: "",
            class: "rounded-circle avatar-xxs"
          }, null, 8 /* PROPS */, _hoisted_12)]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["data-bs-original-title"])])]);
      }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_link, {
        href: "javascript:void(0);",
        class: "text-muted text-decoration-underline"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Load More")]),
        _: 1 /* STABLE */
      })])]),

      _: 1 /* STABLE */
    })]),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/widget.vue?vue&type=template&id=4866b054":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/widget.vue?vue&type=template&id=4866b054 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = {
  class: "d-flex align-items-center"
};
const _hoisted_2 = {
  class: "avatar-sm flex-shrink-0"
};
const _hoisted_3 = {
  class: "flex-grow-1 overflow-hidden ms-3"
};
const _hoisted_4 = {
  class: "text-uppercase fw-medium text-muted text-truncate mb-3"
};
const _hoisted_5 = {
  class: "d-flex align-items-center mb-3"
};
const _hoisted_6 = {
  class: "flex-grow-1 mb-0"
};
const _hoisted_7 = {
  class: "counter-value"
};
const _hoisted_8 = {
  class: "text-muted text-truncate mb-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BriefcaseIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BriefcaseIcon");
  const _component_AwardIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AwardIcon");
  const _component_ClockIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ClockIcon");
  const _component_b_card_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card-body");
  const _component_b_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-card");
  const _component_b_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-col");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.projectsWidgets, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_col, {
      xl: "4",
      key: index
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card, {
        "no-body": "",
        class: "card-animate"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_card_body, null, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["avatar-title rounded-2 fs-2", {
              'bg-soft-primary text-primary': item.feaIconClass === 'primary',
              'bg-soft-secondary': item.feaIconClass === 'secondary',
              'bg-soft-warning text-warning': item.feaIconClass === 'warning'
            }])
          }, [item.feaIcon == 'briefcase' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BriefcaseIcon, {
            key: 0,
            size: "24",
            class: "text-primary"
          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.feaIcon == 'award' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_AwardIcon, {
            key: 1,
            size: "24",
            class: "text-secondary"
          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), item.feaIcon == 'clock' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ClockIcon, {
            key: 2,
            size: "24",
            class: "text-warning"
          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.counter), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`badge badge-soft-${item.badgeClass} fs-12`)
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`${item.icon} fs-13 align-middle me-1`)
          }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.percentage), 1 /* TEXT */)], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.caption), 1 /* TEXT */)])])]),

          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)]),

        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */)]),

      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */);
  }), 128 /* KEYED_FRAGMENT */);
}

/***/ }),

/***/ "./src/views/dashboard/projects/active-projects.vue":
/*!**********************************************************!*\
  !*** ./src/views/dashboard/projects/active-projects.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _active_projects_vue_vue_type_template_id_0293ff01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active-projects.vue?vue&type=template&id=0293ff01 */ "./src/views/dashboard/projects/active-projects.vue?vue&type=template&id=0293ff01");
/* harmony import */ var _active_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-projects.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/active-projects.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_active_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_active_projects_vue_vue_type_template_id_0293ff01__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/active-projects.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/index.vue":
/*!************************************************!*\
  !*** ./src/views/dashboard/projects/index.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_04472df2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=04472df2 */ "./src/views/dashboard/projects/index.vue?vue&type=template&id=04472df2");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_04472df2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/members.vue":
/*!**************************************************!*\
  !*** ./src/views/dashboard/projects/members.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _members_vue_vue_type_template_id_519e90b9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members.vue?vue&type=template&id=519e90b9 */ "./src/views/dashboard/projects/members.vue?vue&type=template&id=519e90b9");
/* harmony import */ var _members_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/members.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_members_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_members_vue_vue_type_template_id_519e90b9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/members.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/projects.vue":
/*!***************************************************!*\
  !*** ./src/views/dashboard/projects/projects.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_vue_vue_type_template_id_010234ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.vue?vue&type=template&id=010234ec */ "./src/views/dashboard/projects/projects.vue?vue&type=template&id=010234ec");
/* harmony import */ var _projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/projects.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_projects_vue_vue_type_template_id_010234ec__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/projects.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/schedule.vue":
/*!***************************************************!*\
  !*** ./src/views/dashboard/projects/schedule.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_vue_vue_type_template_id_0bb80927__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.vue?vue&type=template&id=0bb80927 */ "./src/views/dashboard/projects/schedule.vue?vue&type=template&id=0bb80927");
/* harmony import */ var _schedule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/schedule.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_schedule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_schedule_vue_vue_type_template_id_0bb80927__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/schedule.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/status.vue":
/*!*************************************************!*\
  !*** ./src/views/dashboard/projects/status.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _status_vue_vue_type_template_id_697e9f02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status.vue?vue&type=template&id=697e9f02 */ "./src/views/dashboard/projects/status.vue?vue&type=template&id=697e9f02");
/* harmony import */ var _status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/status.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_status_vue_vue_type_template_id_697e9f02__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/status.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/tasks.vue":
/*!************************************************!*\
  !*** ./src/views/dashboard/projects/tasks.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_vue_vue_type_template_id_403cc2ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.vue?vue&type=template&id=403cc2ae */ "./src/views/dashboard/projects/tasks.vue?vue&type=template&id=403cc2ae");
/* harmony import */ var _tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/tasks.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_tasks_vue_vue_type_template_id_403cc2ae__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/tasks.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/widget.vue":
/*!*************************************************!*\
  !*** ./src/views/dashboard/projects/widget.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_vue_vue_type_template_id_4866b054__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget.vue?vue&type=template&id=4866b054 */ "./src/views/dashboard/projects/widget.vue?vue&type=template&id=4866b054");
/* harmony import */ var _widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget.vue?vue&type=script&lang=js */ "./src/views/dashboard/projects/widget.vue?vue&type=script&lang=js");
/* harmony import */ var D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Extention_corporateVueExtention2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_widget_vue_vue_type_template_id_4866b054__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/dashboard/projects/widget.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/dashboard/projects/active-projects.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./src/views/dashboard/projects/active-projects.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_active_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_active_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./active-projects.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/active-projects.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/index.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/dashboard/projects/index.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/members.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/views/dashboard/projects/members.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_members_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_members_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./members.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/members.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/projects.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/dashboard/projects/projects.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_projects_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./projects.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/projects.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/schedule.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/dashboard/projects/schedule.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_schedule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_schedule_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./schedule.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/schedule.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/status.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/views/dashboard/projects/status.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./status.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/status.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/tasks.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/dashboard/projects/tasks.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tasks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./tasks.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/tasks.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/widget.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/views/dashboard/projects/widget.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widget.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/widget.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/views/dashboard/projects/active-projects.vue?vue&type=template&id=0293ff01":
/*!****************************************************************************************!*\
  !*** ./src/views/dashboard/projects/active-projects.vue?vue&type=template&id=0293ff01 ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_active_projects_vue_vue_type_template_id_0293ff01__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_active_projects_vue_vue_type_template_id_0293ff01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./active-projects.vue?vue&type=template&id=0293ff01 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/active-projects.vue?vue&type=template&id=0293ff01");


/***/ }),

/***/ "./src/views/dashboard/projects/index.vue?vue&type=template&id=04472df2":
/*!******************************************************************************!*\
  !*** ./src/views/dashboard/projects/index.vue?vue&type=template&id=04472df2 ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_04472df2__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_04472df2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=04472df2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/index.vue?vue&type=template&id=04472df2");


/***/ }),

/***/ "./src/views/dashboard/projects/members.vue?vue&type=template&id=519e90b9":
/*!********************************************************************************!*\
  !*** ./src/views/dashboard/projects/members.vue?vue&type=template&id=519e90b9 ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_members_vue_vue_type_template_id_519e90b9__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_members_vue_vue_type_template_id_519e90b9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./members.vue?vue&type=template&id=519e90b9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/members.vue?vue&type=template&id=519e90b9");


/***/ }),

/***/ "./src/views/dashboard/projects/projects.vue?vue&type=template&id=010234ec":
/*!*********************************************************************************!*\
  !*** ./src/views/dashboard/projects/projects.vue?vue&type=template&id=010234ec ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_projects_vue_vue_type_template_id_010234ec__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_projects_vue_vue_type_template_id_010234ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./projects.vue?vue&type=template&id=010234ec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/projects.vue?vue&type=template&id=010234ec");


/***/ }),

/***/ "./src/views/dashboard/projects/schedule.vue?vue&type=template&id=0bb80927":
/*!*********************************************************************************!*\
  !*** ./src/views/dashboard/projects/schedule.vue?vue&type=template&id=0bb80927 ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_schedule_vue_vue_type_template_id_0bb80927__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_schedule_vue_vue_type_template_id_0bb80927__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./schedule.vue?vue&type=template&id=0bb80927 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/schedule.vue?vue&type=template&id=0bb80927");


/***/ }),

/***/ "./src/views/dashboard/projects/status.vue?vue&type=template&id=697e9f02":
/*!*******************************************************************************!*\
  !*** ./src/views/dashboard/projects/status.vue?vue&type=template&id=697e9f02 ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_status_vue_vue_type_template_id_697e9f02__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_status_vue_vue_type_template_id_697e9f02__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./status.vue?vue&type=template&id=697e9f02 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/status.vue?vue&type=template&id=697e9f02");


/***/ }),

/***/ "./src/views/dashboard/projects/tasks.vue?vue&type=template&id=403cc2ae":
/*!******************************************************************************!*\
  !*** ./src/views/dashboard/projects/tasks.vue?vue&type=template&id=403cc2ae ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tasks_vue_vue_type_template_id_403cc2ae__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_tasks_vue_vue_type_template_id_403cc2ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./tasks.vue?vue&type=template&id=403cc2ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/tasks.vue?vue&type=template&id=403cc2ae");


/***/ }),

/***/ "./src/views/dashboard/projects/widget.vue?vue&type=template&id=4866b054":
/*!*******************************************************************************!*\
  !*** ./src/views/dashboard/projects/widget.vue?vue&type=template&id=4866b054 ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_vue_vue_type_template_id_4866b054__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widget_vue_vue_type_template_id_4866b054__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widget.vue?vue&type=template&id=4866b054 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/projects/widget.vue?vue&type=template&id=4866b054");


/***/ })

}]);
//# sourceMappingURL=src_views_dashboard_projects_index_vue.js.map