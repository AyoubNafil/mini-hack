<script>
import { ref, onMounted } from 'vue';
import { executeQuery } from '../../../api/utile';

export default {
  setup() {
    // Define a reactive ref for the task data
    const tasks = ref([]);

    // Fetch data when the component is mounted
    onMounted(async () => {
      try {
        // Fetch task data using the query
        const taskRecords = await executeQuery("SELECT Name, Type__r.Name, CreatedDate FROM task__c");

        // Check if the taskRecords is not empty
        if (taskRecords && taskRecords.length > 0) {
          // Map the taskRecords to the tasks array with the required properties
          tasks.value = taskRecords.map((task) => ({
            name: task.Name,
            type: task.Type__r ? task.Type__r.Name : 'Unknown',
            deadline: formatDate(task.CreatedDate),
            createdDate: formatDate(task.CreatedDate),
            assignee: require("@/assets/images/users/Trailblazer_avatar.png"), // Replace this with the correct image path
          }));
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }
    });

    // Function to format the date as "DD MMM YYYY" (e.g., 03 Nov 2021)
    function formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: '2-digit' };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    }

    return {
      tasks, // Expose the tasks ref to the template
    };
  },
};
</script>

<template>
  <b-card no-body>
    <b-card-header class="align-items-center d-flex">
      <b-card-title class="mb-0 flex-grow-1 py-1">My Tasks</b-card-title>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <span class="text-muted">All Tasks <i class="mdi mdi-chevron-down ms-1"></i></span>
          </b-link>
          <div class="dropdown-menu dropdown-menu-end">
            <b-link class="dropdown-item" href="#">All Tasks</b-link>
            <b-link class="dropdown-item" href="#">Completed </b-link>
            <b-link class="dropdown-item" href="#">Inprogress</b-link>
            <b-link class="dropdown-item" href="#">Pending</b-link>
          </div>
        </div>


      </div>
    </b-card-header>
    <b-card-body>
      <div class="table-responsive table-card">
        <table class="table table-borderless table-nowrap table-centered align-middle mb-0">
          <thead class="table-light text-muted">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Deadline</th>
              <th scope="col">Status</th>
              <th scope="col">Assignee</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop through tasks and render each row -->
            <tr v-for="(task, index) in tasks" :key="index">
              <td>
                <div class="form-check">
                  <input class="form-check-input fs-15" type="checkbox" :value="task.name" :id="'checkTask' + (index + 1)" />
                  <label class="form-check-label ms-2" :for="'checkTask' + (index + 1)">
                    {{ task.name }}
                  </label>
                </div>
              </td>
              
              <td class="text-muted">{{ task.deadline }}</td>
              <td>
                <!-- Conditionally display the badge based on the task status -->
                <b-badge :variant="task.type === 'Completed' ? 'soft-success' : 'soft-warning'">
                  {{ task.type }}
                </b-badge>
              </td>
              <!-- ... (other columns) ... -->
              <td>
                <b-link href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip"
                  data-bs-placement="top" title="" :data-bs-original-title="task.assignee">
                  <img :src="task.assignee" alt="" class="rounded-circle avatar-xxs" />
                </b-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-3 text-center">
        <b-link href="javascript:void(0);" class="text-muted text-decoration-underline">Load More</b-link>
      </div>
    </b-card-body>
  </b-card>
</template>
