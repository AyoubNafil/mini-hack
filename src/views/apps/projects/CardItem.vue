<script>
import {
  MoreHorizontalIcon
} from "@zhuowenli/vue-feather-icons";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      removeProjectModal: false,
    }
  },
  methods: {
    getStatusClass(status) {

      switch (status) {
        case "Inprogress":
          return "warning";
        case "Completed":
          return "success";
        default:
          return "secondary";
    }},

    toggleFavourite(ele) {
      ele.target.closest('.favourite-btn').classList.toggle("active");
    },

    removeProject() {
      this.removeProjectModal = true;
      document.getElementById("removeProjectModal")
      addEventListener("click", (e) => {
        document
          .getElementById("remove-project")
          .addEventListener("click", () => {
            if (e.target.closest('.project-card')) {
              e.target.closest('.project-card').remove();
            }
            this.removeProjectModal = false;
          });
      });
    }
    
  },
  components: {
   
    MoreHorizontalIcon,
    
  },
};
</script>


<template>
  <b-col xxl="3" sm="6" class="project-card">
    <b-card no-body>
      <b-card-body>
        <div class="p-3 mt-n3 mx-n3 bg-soft-secondary rounded-top">
          <div class="d-flex gap-1 align-items-center justify-content-end my-n2">
            <b-button type="button" variant="transparent" class="btn avatar-xs p-0 favourite-btn active"
              @click="toggleFavourite">
              <span class="avatar-title bg-transparent fs-15">
                <i class="ri-star-fill"></i>
              </span>
            </b-button>
            <div class="dropdown">
              <button class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="true">
                <MoreHorizontalIcon class="icon-sm"></MoreHorizontalIcon>
              </button>

              <div class="dropdown-menu dropdown-menu-end">
                <router-link class="dropdown-item" to="/apps/projects-overview">
                  <i class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                </router-link>
                <router-link class="dropdown-item" to="/apps/projects-create">
                  <i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit
                </router-link>
                <div class="dropdown-divider"></div>
                <div class="dropdown-item" @click="removeProject">
                  <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Remove
                </div>
              </div>
            </div>
          </div>
          <div class="text-center pb-3">
            <img src= "@/assets/images/brands/Salesforce.png"  alt="" height="50" />
          </div>
        </div>

        <div class="py-3">
          <h5 class="fs-14 mb-3">
            <router-link :to="`/apps/projects-overview/${item.Id}`" class="text-dark">{{ item.Name }}</router-link>
          </h5>
          <b-row class="gy-3">
            <b-col cols="6">
              <div>
                <p class="text-muted mb-1">Status</p>
                <div :class="`badge badge-soft-${getStatusClass(item.status__c)} fs-12`">{{ item.status__c }}</div>
              </div>
            </b-col>
            <b-col cols="6">
              <div>
                <p class="text-muted mb-1">Deadline</p>
                <h5 class="fs-14">{{ item.Deadline__c }}</h5>
              </div>
            </b-col>
          </b-row>

          <div class="d-flex align-items-center mt-3">
            <p class="text-muted mb-0 me-2">Team :</p>
            <div class="avatar-group">
              <b-link href="javascript: void(0);" v-for="(subItem, index) of item.subItem" :key="index"
                class="avatar-group-item" v-b-tooltip.hover title="Donna Kline">
                <div class="avatar-xxs" >
                  <img :src="subItem.imgTeam" alt="" class="rounded-circle img-fluid" />
                </div>
              </b-link>

              <a class="avatar-group-item" href="javascript: void(0);" target="_self" data-bs-toggle="tooltip" ><div class="avatar-xxs"><div class="avatar-title rounded-circle bg-undefined">+</div></div><!--v-if--></a>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex mb-2">
            <div class="flex-grow-1">
              <div>Tasks</div>
            </div>
            <div class="flex-shrink-0">
              <div>
                <i class="ri-list-check align-bottom me-1 text-muted"></i> {{ item.number }}
              </div>
            </div>
          </div>
          <div class="progress progress-sm animated-progess">
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100"
              :style="`width: ${item.progressBar};`"></div>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>


