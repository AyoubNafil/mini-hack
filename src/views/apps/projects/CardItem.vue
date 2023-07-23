<script>
import {
  MoreHorizontalIcon
} from "@zhuowenli/vue-feather-icons";

import { executeQuery } from "../../../api/utile";
import { exportToTrello } from "../../../api/utile";
import { deleteSObject } from "../../../api/utile";
import Swal from "sweetalert2";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      listData: [],
      cardData: [],
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
      }
    },

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
    },
    Import() {
      Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
})
    },

  
    Export(boardId, boardName, boardDesc) {
      const boardData = {
        name: boardName,
        desc: boardDesc
      };


      const query = "SELECT Name, Placement__c FROM Card__c WHERE Board__c ='" + boardId + "'";
executeQuery(query)
  .then((result) => {
    this.listData = result.map((card) => ({
      name: card.Name,
      pos: card.Placement__c
    }));
    const query2 = "SELECT Name FROM Task__c WHERE Type__r.Board__c = '" + boardId + "'";
    executeQuery(query2)
      .then((result2) => {
        this.cardData = result2.map((task) => ({ // Fix this line to use result2
          name: task.Name,
          listIndex: 0
        }));
        exportToTrello(boardData, this.listData, this.cardData);
        Swal.fire("Good job!", "Project Exported to trello Succesfly!", "success");
      })
      .catch((error) => {
        console.error("Error fetching Task data:", error);
      });
  })
  .catch((error) => {
    console.error("Error fetching Card data:", error);
  });


      

      //exportToTrello(boardData, this.listData, cardData);
    },

    async deleteProject(id) {
      // Use the `id` parameter in your logic here
      console.log("Deleting task with ID:", id);


      //confirmation popup
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-danger ml-2  m-2",
          cancelButton: "btn btn-success  m-2",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          showCancelButton: true,
        })
        .then((result) => {
          if (result.value) {
            try {
              deleteSObject("board__c", id);
              this.$emit("reloadListProject",id);
              this.modalShow3 = false;
              setTimeout(() => {
              //window.location.reload()
              }, 2000);
            } catch (error) {
              console.log("Error occurred while executing query:", error);
            }
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your Project has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
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
            <b-button type="button" variant="transparent" class="btn avatar-xs p-0 favourite-btn "
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
                <div class="dropdown-item" @click="deleteProject(item.Id)">
                  <i class="ri-delete-bin-fill align-bottom me-2 text-muted" ></i> Remove</div>
                <div class="dropdown-divider"></div>
                <div class="dropdown-item" @click="Import">
                  <i class="mdi mdi-database-import align-bottom me-2 text-muted"></i> Import
                </div>
                <div class="dropdown-item" @click="Export(item.Id, item.Name, item.Description__c)">
                  <i class="mdi mdi-database-export align-bottom me-2 text-muted"></i> Export
                </div>
              </div>
            </div>
          </div>
          <div class="text-center pb-3">
            <img src="@/assets/images/brands/Salesforce.png" alt="" height="50" />
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
                <div class="avatar-xxs">
                  <img :src="subItem.imgTeam" alt="" class="rounded-circle img-fluid" />
                </div>
              </b-link>

              <a class="avatar-group-item" href="javascript: void(0);" target="_self" data-bs-toggle="tooltip">
                <div class="avatar-xxs">
                  <div class="avatar-title rounded-circle bg-undefined">+</div>
                </div><!--v-if-->
              </a>
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
            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="71" aria-valuemin="0"
              aria-valuemax="100" :style="`width: ${item.progressBar};`"></div>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>


