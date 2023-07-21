<script>
import flatPickr from "vue-flatpickr-component";
import { executeQuery } from "../../../api/utile";

export default {
  components: {
    flatPickr,
  },
  data() {
    return {
      date: null,
      config: {
        inline: true,
      },
      eventsData: [], // Non-reactive data property to hold the events data
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
    },
  },
  methods: {
    async fetchEventsDataFromSalesforce() {
      // Use Salesforce REST API or SOQL query to fetch events data
      // Replace the below query with your actual SOQL query to get events data
      const queryResult = await executeQuery(
        "SELECT Name, Description__c, Deadline__c FROM Board__c"
      );

      // You can format the data further if needed before returning
      return queryResult;
    },
    formatDate(dateTime) {
      // Helper method to format date and time from the fetched data
      const date = new Date(dateTime);
      return {
        date: date.getDate().toString().padStart(2, "0"),
        time: `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`,
      };
    },
  },
};
</script>

<template>
  <b-card no-body>
    <b-card-header class="border-0">
      <b-card-title class="mb-0">Upcoming Schedules</b-card-title>
    </b-card-header>
    <b-card-body class="pt-0">
      <div class="upcoming-scheduled">
        <flat-pickr v-model="date" :config="config"></flat-pickr>
      </div>

      <h6 class="text-uppercase fw-semibold mt-4 mb-3 text-muted">Events:</h6>
      <div v-for="event in events" :key="event.Id" class="mini-stats-wid d-flex align-items-center mt-3">
        <div class="flex-shrink-0 avatar-sm">
          <span class="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4">
            {{ formatDate(event.Deadline__c).date }}
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">{{ event.Name }}</h6>
          <p class="text-muted mb-0">{{ event.Description__c }}</p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            {{ formatDate(event.Deadline__c).time }} <span class="text-uppercase">am</span>
          </p>
        </div>
      </div>

      <div class="mt-3 text-center">
        <a href="javascript:void(0);" class="text-muted text-decoration-underline">View all Events</a>
      </div>
    </b-card-body>
  </b-card>
</template>
