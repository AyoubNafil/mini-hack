<script>
import { executeQuery } from "../../.././api/utile.js";

import "@vueform/multiselect/themes/default.css";
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import animationData from "@/components/widgets/gsqxdxog.json";

import Lottie from "@/components/widgets/lottie.vue";

import CardItem from './CardItem.vue';

export default {
  page: {
    title: "Project List",
    meta: [{
      name: "description",
      content: appConfig.description
    }],
  },
  data() {
    return {
      title: "Project List",
      items: [{
        text: "Projects",
        href: "/",
      },
      {
        text: "Project List",
        active: true,
      },
      ],
      defaultOptions: { animationData: animationData },
      removeProjectModal: false,
      projectListWidgets3: [
        {
          id: 1,
          img: require("@/assets/images/brands/Salesforce.png"),
          label: "Kanban Board",
          status: "Inprogess",
          deadline: "08 Dec, 2021",
          number: "17/20",
          progressBar: "71%",
          subItem: [
          {
            id: 2,
            imgTeam: require("@/assets/images/users/Trailblazer_avatar.png")
          },
          
          ],
        },

        {
          id: 5,
          img: require("@/assets/images/brands/Salesforce.png"),
          label: "Multipurpose landing template",
          status: "Completed",
          deadline: "18 Sep, 2021",
          number: "25/32",
          progressBar: "75%",
          subItem: [
          {
            id: 2,
            imgTeam: require("@/assets/images/users/Trailblazer_avatar.png")
          },
          {
            id: 3,
            imgTeam: require("@/assets/images/users/Trailblazer_avatar.png")
          },
          
          ],
        },
      ],
      boards :[]
    };
  },
  components: {
    Layout,
    PageHeader,
    // Multiselect,
    // MoreHorizontalIcon,
    lottie: Lottie,
    CardItem
  },
  methods: {
    async getProjectsRecords() {
            try {
                this.boards = await executeQuery("SELECT Id,Name ,OwnerId,Status__c,Deadline__c,Description__c ,priority__c FROM board__c ");
                if (this.boards) {
                    console.log(this.boards);
                } else {
                    console.log("Empty");
                }
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }
        },},
  created(){
    this.getProjectsRecords();
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row class="g-4 mb-3">
      <b-col sm="auto">
        <div>
          <router-link to="/apps/projects-create" class="btn btn-primary"><i class="ri-add-line align-bottom me-1"></i>
            Add New</router-link>
        </div>
      </b-col>
      <b-col sm>
        <div class="d-flex justify-content-sm-end gap-2">
          <div class="search-box ms-2">
            <input type="text" class="form-control" placeholder="Search..." />
            <i class="ri-search-line search-icon"></i>
          </div>

          
        </div>
      </b-col>
    </b-row>



    <b-row>
      <card-item v-for="(item, index) in boards" :key="index" :item="item"></card-item>
    </b-row>

  

    <b-modal v-model="removeProjectModal" id="removeProjectModal" hide-footer class="v-modal-custom" modal-class="zoomIn"
      centered>
      <div class="mt-2 text-center">
        <lottie class="avatar-xl" colors="primary:#f7b84b,secondary:#f7666e" :options="defaultOptions" :height="100"
          :width="100" />
        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
          <h4>Are you Sure ?</h4>
          <p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Project ?</p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <b-button type="button" variant="light" class="w-sm" @click="removeProjectModal = false">Close</b-button>
        <b-button type="button" variant="danger" class="w-sm" id="remove-project">Yes, Delete It!</b-button>
      </div>
    </b-modal>

  </Layout>
</template>