<script>
import { executeQuery } from "../../../api/utile";

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
        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(
          val[0]
        );
        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
}
export default {
  data() {
    return {
      statusData: [],
      series: [125, 42, 58, 89],
      chartOptions: {
        labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
        chart: {
          type: "donut",
          height: 230,
        },
        plotOptions: {
          pie: {
            size: 100,
            offsetX: 0,
            offsetY: 0,
            donut: {
              size: "90%",
              labels: {
                show: false,
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          lineCap: "round",
          width: 0,
        },
        colors: getChartColorsArray(
          '["--vz-success", "--vz-primary", "--vz-warning", "--vz-secondary"]'
        ),
      },
      totalProjects: 0,
      newProjects: 0,
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
      const queryResult = await executeQuery(
        "SELECT COUNT(Id)  totalProjects FROM Board__c"
      );
      return queryResult[0].totalProjects;
    },
    async newfetchTotalProjectCount() {
      // Use Salesforce REST API or SOQL query to fetch the total count of projects
      // Replace the below query with your actual SOQL query to get the total count of projects
      let date = new Date().toJSON().slice(0, 10);
      const queryResult = await executeQuery(
        "SELECT COUNT(Id)  totalProjects FROM Board__c where DAY_ONLY(CreatedDate) >= " +
          date +
          ""
      );
      return queryResult[0].totalProjects;
    },
    async fetchStatusDataFromSalesforce() {
      // Use Salesforce REST API or SOQL query to fetch data for "status__c" field and count of projects for each status
      // Replace the below query with your actual SOQL query for the "status__c" field and count of projects
      const queryResult = await executeQuery(
        "SELECT status__c, COUNT(Id) projectCount FROM Board__c GROUP BY status__c ORDER BY status__c desc"
      );

      // Format the data to return an array of objects with "name" and "value" properties
      // based on the fetched data
      const statusData = queryResult.map((record) => {
        return {
          name: record.status__c,
          value: record.projectCount,
        };
      });

      return statusData;
    },
    processChartData(data) {
      this.statusData = data; // Store the status data for use in the template
      this.series = data.map((item) => item.value);
      this.chartOptions.labels = data.map((item) => item.name);
      this.chartOptions.colors = getChartColorsArray(
        '["--vz-success", "--vz-primary", "--vz-warning", "--vz-secondary"]'
      ); // Set colors dynamically
    },
  },
};
</script>

<template>
  <b-card no-body class="b-card card-height-100">
    <b-card-header class="align-items-center d-flex">
      <b-card-title class="mb-0 flex-grow-1">Projects Status</b-card-title>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <b-link
            class="dropdown-btn text-muted"
            href="#"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Time <i class="mdi mdi-chevron-down ms-1"></i>
          </b-link>
          <div class="dropdown-menu dropdown-menu-end">
            <b-link class="dropdown-item" href="#">All Time</b-link>
            <b-link class="dropdown-item" href="#">Last 7 Days</b-link>
            <b-link class="dropdown-item" href="#">Last 30 Days</b-link>
            <b-link class="dropdown-item" href="#">Last 90 Days</b-link>
          </div>
        </div>
      </div>
    </b-card-header>

    <b-card-body>
      <apexchart
        class="apex-charts"
        dir="ltr"
        height="230"
        :series="series"
        :options="chartOptions"
      ></apexchart>
      <div class="mt-3">
        <div class="d-flex justify-content-center align-items-center mb-4">
          <h2 class="me-3 ff-secondary mb-0">{{ totalProjects }}</h2>
          <div>
            <p class="text-muted mb-0">Total Projects</p>
            <p class="text-success fw-medium mb-0">
              <b-badge variant="soft-success" pill class="badge-soft-success p-1"
                ><i class="ri-arrow-right-up-line"></i
              ></b-badge>
              +{{ newProjects }} New
            </p>
          </div>
        </div>

        <div
          v-for="item in statusData"
          :key="item.name"
          class="d-flex justify-content-between border-bottom border-bottom-dashed py-2"
        >
          <p class="fw-medium mb-0">
            <i class="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i>
            {{ item.name }}
          </p>
          <div>
            <span class="text-muted pe-5">{{ item.value }} Projects</span>
            <span class="text-success fw-medium fs-12">~{{ item.hours }}hrs</span>
          </div>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>
