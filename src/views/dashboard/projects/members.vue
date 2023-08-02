<script>
import { executeQuery } from "../../../api/utile";

export default {
  data() {
    return {
      date: null,
      config: {
        inline: true,
      },
      teamMembersData: [], // Non-reactive data property to hold the fetched team members data
      chartOptions: {
          chart: {
            type: "radialBar",
            width: 36,
            height: 36,
            sparkline: {
              enabled: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: "50%",
              },
              track: {
                margin: 1,
              },
              dataLabels: {
                show: false,
              },
            },
          },
          colors: ["#687cfe"],
        },
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
      return this.teamMembersData.map((member) => {
        return {
          id: member.Id,
          img: member.FullPhotoUrl, // You can update this based on the actual member data
          name: member.Name,
          position: member.UserType,
          hours: "110",
          tasks: "258",
          series: [50],
          chartsColor: "#687cfe",
        };
      });
    },
  },
  methods: {
    async fetchTeamMembersDataFromSalesforce() {
      // Use Salesforce REST API or SOQL query to fetch team members data
      // Replace the below query with your actual SOQL query to get team members data
      const queryResult = await executeQuery(
        "SELECT Id, Name, UserType, FullPhotoUrl FROM User"
      );

      // You can format the data further if needed before returning
      return queryResult;
    },
  },
};
</script>

<template>
  <b-card no-body class="card-height-100">
    <b-card-header class="align-items-center d-flex">
      <b-card-title class="mb-0 flex-grow-1">Team Members</b-card-title>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span class="text-muted">Last 30 Days<i
                class="mdi mdi-chevron-down ms-1"></i></span>
          </b-link>
          <div class="dropdown-menu dropdown-menu-end">
            <b-link class="dropdown-item" href="#">Today</b-link>
            <b-link class="dropdown-item" href="#">Yesterday</b-link>
            <b-link class="dropdown-item" href="#">Last 7 Days</b-link>
            <b-link class="dropdown-item" href="#">Last 30 Days</b-link>
            <b-link class="dropdown-item" href="#">This Month</b-link>
            <b-link class="dropdown-item" href="#">Last Month</b-link>
          </div>
        </div>
      </div>
    </b-card-header>

    <b-card-body>
      <div class="table-responsive table-card">
        <table class="table table-borderless table-nowrap align-middle mb-0">
          <thead class="table-light text-muted">
            <tr>
              <th scope="col">Member</th>
              <th scope="col">Hours</th>
              <th scope="col">Tasks</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of teamMembers" :key="index">
              <td class="d-flex">
                <img :src="item.img" alt="" class="avatar-xs rounded-3 me-2" />
                <div>
                  <h5 class="fs-13 mb-0">{{ item.name }}</h5>
                  <p class="fs-12 mb-0 text-muted">{{ item.position }}</p>
                </div>
              </td>
              <td>
                <h6 class="mb-0">{{ item.hours }}
                  : <span class="text-muted">150h</span></h6>
              </td>
              <td>
                {{ item.tasks }}
              </td>
              <td style="width: 5%">
                <apexchart class="apex-charts" height="36" dir="ltr" :series="item.series"
                  :options="{ ...chartOptions, ...{ colors: [item.chartsColor] } }"></apexchart>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card-body>
  </b-card>
</template>
