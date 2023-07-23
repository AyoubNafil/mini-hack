<script>
import { ref, onMounted, computed } from 'vue';
import { executeQuery } from '../../../api/utile';

export default {
  setup() {
    // Define a reactive ref for the boards array
    const boards = ref([]);
    // Define the number of items to show per page
    const itemsPerPage = 5;
    // Define a reactive ref for the current page
    const currentPage = ref(1);

    // Fetch data when the component is mounted
    onMounted(async () => {
      try {
        const boardRecords = await executeQuery("SELECT Id, Name, Owner.Name, Status__c, Deadline__c, CreatedDate, Description__c, priority__c FROM board__c");
if (boardRecords && boardRecords.length > 0) {
  boards.value = boardRecords.map((board) => {
    // Calculate the time remaining in hours between today and the deadline
    const deadlineDate = new Date(board.Deadline__c);
    const currentDate = new Date();
    const timeRemainingHours = (deadlineDate - currentDate) / (1000 * 60 * 60);

    // Calculate the total time allowed in hours between CreatedDate and Deadline__c
    const createdDate = new Date(board.CreatedDate);
    const totalTimeAllowedHours = (deadlineDate - createdDate) / (1000 * 60 * 60);

    // Calculate the percentage
    let percentage = ((totalTimeAllowedHours - timeRemainingHours) / totalTimeAllowedHours) * 100;

    // Limit the percentage to a maximum of 100%
    percentage = Math.min(100, percentage);

    return {
      id: board.Id,
      projectName: board.Name,
      img: require("@/assets/images/users/Trailblazer_avatar.png"), // Replace this with the correct image path
      projectLead: board.Owner.Name, // You may need to fetch the user's name based on OwnerId
      percentage: percentage.toFixed(0) + "%", // Percentage rounded to 0 decimal places
      subItem: [
        { id: 1, assImg: require("@/assets/images/users/Trailblazer_avatar.png") },
        { id: 2, assImg: require("@/assets/images/users/Trailblazer_avatar.png") },
      ], // Initialize an empty array for subItem, you can populate it later if needed
      badge: board.status__c, // Replace this with the correct badge value based on Status__c
      badgeClass: board.status__c === "In Progress" ? "warning" : "success", // Set badgeClass based on Status__c
      dueDate: board.Deadline__c, // Replace this with the correct due date value
    };
  });
}
else {
          console.log("Empty");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    });

    // Calculate the total number of pages based on the number of boards and itemsPerPage
    const totalPages = computed(() => Math.ceil(boards.value.length / itemsPerPage));

    // Calculate the displayed items based on the current page and itemsPerPage
    const displayedItems = computed(() => {
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
    const gotoPage = (pageNumber) => {
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
      gotoPage,
    };
  },
};
</script>

<template>
  <b-card no-body>
    <b-card-header class="d-flex align-items-center">
      <b-card-title class="flex-grow-1 mb-0">Active Projects</b-card-title>
      <div class="flex-shrink-0">
        <b-link href="javascript:void(0);" class="btn btn-soft-info btn-sm">Export Report</b-link>
      </div>
    </b-card-header>
    <b-card-body>
      <div class="table-responsive table-card">
        <table class="table table-nowrap table-centered align-middle">
          <thead class="bg-light text-muted">
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Project Lead</th>
              <th scope="col">Progress</th>
              <th scope="col">Assignee</th>
              <th scope="col">Status</th>
              <th scope="col" style="width: 10%">Due Date</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, index) of boards" :key="index">
              <td class="fw-medium">{{ item.projectName }}</td>
              <td>
                <img :src="item.img" class="avatar-xxs rounded-circle me-1" alt="" />
                <b-link href="javascript: void(0);" class="text-reset">{{ item.projectLead }}</b-link>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-1 text-muted fs-13">{{ item.percentage }}</div>
                  <b-progress class="progress-sm flex-grow-1 rounded" :value="53" variant="primary" />
                </div>
              </td>
              <td>
                <div class="avatar-group flex-nowrap">
                  <div class="avatar-group-item" v-for="(subitem, index) of item.subItem" :key="index">
                    <b-link href="javascript: void(0);" class="d-inline-block">
                      <img :src="subitem.assImg" alt="" class="rounded-circle avatar-xxs" />
                    </b-link>
                  </div>
                </div>
              </td>
              <td><span :class="`badge badge-soft-${item.badgeClass}`">{{ item.badge }}</span></td>
              <td class="text-muted">{{ item.dueDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="align-items-center mt-xl-3 mt-4 justify-content-between d-flex">
    <div class="flex-shrink-0">
      <div class="text-muted">
        Showing <span class="fw-semibold">{{ displayedItems.length }}</span> of
        <span class="fw-semibold">{{ boards.length }}</span> Results
      </div>
    </div>
    <ul class="pagination pagination-separated pagination-sm mb-0">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <b-link @click="prevPage" href="#" class="page-link">←</b-link>
      </li>
      <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ active: currentPage === pageNumber }">
        <b-link @click="gotoPage(pageNumber)" href="#" class="page-link">{{ pageNumber }}</b-link>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <b-link @click="nextPage" href="#" class="page-link">→</b-link>
      </li>
    </ul>
  </div>
    </b-card-body>
  </b-card>
</template>
