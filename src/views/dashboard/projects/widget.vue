<script>
import { BriefcaseIcon, AwardIcon, ClockIcon } from '@zhuowenli/vue-feather-icons';
import { ref, onMounted } from 'vue';
import { executeQuery } from '../../../api/utile';

// Function to calculate the difference between two dates in hours and minutes
function calculateTimeDifferenceInHoursMinutes(start, end) {
  const timeDifference = end - start;
  const totalMinutes = timeDifference / (1000 * 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  return { hours, minutes };
}

export default {
  setup() {
    const projectsWidgets = ref([
      {
        id: 1,
        feaIcon: "briefcase",
        feaIconClass: "primary",
        label: "Active Projects",
        counter: 0,
        suffix: "",
        badgeClass: "danger",
        icon: "ri-arrow-down-s-line",
        percentage: "5.02 %",
        caption: "Projects this month",
      },
      {
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
        caption: "Leads this month",
      },
      {
        id: 3,
        feaIcon: "clock",
        feaIconClass: "warning",
        label: "Total Hours",
        counter: "0h 0m",
        suffix: "m",
        badgeClass: "danger",
        icon: "ri-arrow-down-s-line",
        percentage: "10.35 %",
        caption: "Work this month",
      },
    ]);

    // Fetch data when the component is mounted
    onMounted(async () => {
      try {
        // Calculate the count of active projects
        const activeProjectsRecords = await executeQuery("SELECT Id FROM board__c");
        if (activeProjectsRecords && activeProjectsRecords.length > 0) {
          projectsWidgets.value[0].counter = activeProjectsRecords.length;
        }

        // Calculate the count of new leads (tasks)
        const newLeadsRecords = await executeQuery("SELECT Id FROM task__c");
        if (newLeadsRecords && newLeadsRecords.length > 0) {
          projectsWidgets.value[1].counter = newLeadsRecords.length;
        }

        // Calculate the total hours based on the difference between CreatedDate and Deadline__c
        const boardRecords = await executeQuery("SELECT Id, Deadline__c, CreatedDate FROM board__c");
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
      BriefcaseIcon,
      AwardIcon,
      ClockIcon,
    };

  },
};
</script>

<template>
  <b-col xl="4" v-for="(item, index) of projectsWidgets" :key="index">
    <b-card no-body class="card-animate">
      <b-card-body>
        <div class="d-flex align-items-center">
          <div class="avatar-sm flex-shrink-0">
            <span class="avatar-title rounded-2 fs-2" :class="{
              'bg-soft-primary text-primary': item.feaIconClass === 'primary',
              'bg-soft-secondary': item.feaIconClass === 'secondary',
              'bg-soft-warning text-warning': item.feaIconClass === 'warning'
            }">
              <template v-if="item.feaIcon == 'briefcase'">
                <BriefcaseIcon size="24" class="text-primary"></BriefcaseIcon>
              </template>

              <template v-if="item.feaIcon == 'award'">
                <AwardIcon size="24" class="text-secondary"></AwardIcon>
              </template>

              <template v-if="item.feaIcon == 'clock'">
                <ClockIcon size="24" class="text-warning"></ClockIcon>
              </template>
            </span>
          </div>
          <div class="flex-grow-1 overflow-hidden ms-3">
            <p class="text-uppercase fw-medium text-muted text-truncate mb-3">
              {{ item.label }}
            </p>
            <div class="d-flex align-items-center mb-3">
              <h4 class="flex-grow-1 mb-0">
                <span class="counter-value">{{
                    item.counter
                }}</span>
              </h4>
              <span :class="`badge badge-soft-${item.badgeClass} fs-12`"><i :class="`${item.icon
              } fs-13 align-middle me-1`"></i>{{ item.percentage }}</span>
            </div>
            <p class="text-muted text-truncate mb-0">{{ item.caption }}</p>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>

