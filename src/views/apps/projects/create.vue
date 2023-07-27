<script>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import { createSObject2 } from "../../.././api/utile.js";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DropZone from "@/components/widgets/dropZone";
import useVuelidate from "@vuelidate/core";
import CKEditor from "@ckeditor/ckeditor5-vue";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import Swal from "sweetalert2";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  page: {
    title: "Create Project",
    meta: [{ name: "description", content: appConfig.description }],
  },
  setup() {
    let files = ref([]);
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
      files.value.push(dropzoneFile.value);
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
      files.value.push(dropzoneFile.value);
    };
    return { dropzoneFile, files, drop, selectedFile, v$: useVuelidate() };
  },
  data() {
    return {
      title: "Create Project",
      skills: [],
      items: [
        {
          editorData: '',
          text: "Projects",
          href: "/",
        },
        {
          text: "Create Project",
          active: true,
        },
      ],
      value3: ["Private"],
      value4: ["Designing"],
      value5: ["Ellen Smith"],
      value1: ["Inprogress"],
      value2: ["High"],
      editor: ClassicEditor,
      description: "", // Added the 'description' property for CKEditor content
    };
  },
  methods: {
    deleteRecord(ele) {
      ele.target.parentElement.parentElement.parentElement.remove();
    },
    async createRecord() {
      console.log("here we go");

      // Getting the value of the inputs
      const projectTitle = document.getElementById("project-title-input").value;
      // const projectDescription = document.getElementById("Description").value;
      const projectDescription = this.editorData;
      console.log(this.editorData);
      const status = this.value1; // Retrieve the selected status from the array
      const priority = this.value2[0]; // Retrieve the selected status from the array
      const deadline = this.date;
      console.log(projectTitle);
      console.log(status);
      console.log(projectDescription);
      console.log(deadline);
      console.log(priority);

      const recordData = {
        Name: projectTitle,
        Status__c: status,
        Description__c: projectDescription,
        Priority__c: priority,
        Deadline__c: deadline,
        Company__c :"INTELCIA ITS"
      };
      console.log("rec data " + recordData);

      try {
        const id = await createSObject2("board__c", recordData);

        if (id) {
          console.log(id);

          this.skills.forEach(async (skill) => {
            const featureData = {
              Name: skill,
              Board__c: id,
            };

            const idFeature = await createSObject2("Feature__c", featureData);
            console.log(idFeature);
          });

          Swal.fire("Good job!", "Project Created Successfully!", "success");
          const dynamicPath = `/apps/projects-overview/${id}`;
          this.$router.push(dynamicPath);
        } else {
          console.log("undefined");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);
      }

      console.log(this.skills);
    },
  },
  components: {
    DropZone,
    Layout,
    PageHeader,
    Multiselect,
    flatPickr,
    ckeditor: CKEditor.component,
  },
};

</script>


<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <b-col lg="8">
        <b-card no-body>
          <b-card-body>
            <div class="mb-3">
              <label class="form-label" for="project-title-input">Project Title</label>
              <input type="text" class="form-control" id="project-title-input" placeholder="Enter project title" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="project-thumbnail-img">Thumbnail Image</label>
              <input class="form-control" id="project-thumbnail-img" type="file"
                accept="image/png, image/gif, image/jpeg" />
            </div>

            <div class="md-form amber-textarea active-amber-textarea" style="margin-bottom: 10px;">
              <label for="form19">Description</label>
              <ckeditor v-model="editorData" :editor="editor"></ckeditor>
            </div>

            <b-row>
              <b-col lg="4">
                <div class="mb-3 mb-lg-0">
                  <label for="choices-priority-input" class="form-label">Priority</label>

                  <Multiselect v-model="value2" :close-on-select="true" :searchable="true" :create-option="true" :options="[
                    { value: 'High', label: 'High' },
                    { value: 'Medium', label: 'Medium' },
                    { value: 'Low', label: 'Low' },
                  ]" />
                </div>
              </b-col>
              <b-col lg="4">
                <div class="mb-3 mb-lg-0">
                  <label for="choices-status-input" class="form-label">Status</label>

                  <Multiselect v-model="value1" :close-on-select="true" :searchable="true" :create-option="true" :options="[
                    { value: 'In progress', label: 'In progress' },
                    { value: 'Completed', label: 'Completed' },
                  ]" />
                </div>
              </b-col>
              <b-col lg="4">
                <div>
                  <label for="datepicker-deadline-input" class="form-label">Deadline</label>

                  <flat-pickr v-model="date" :config="config" class="form-control flatpickr-input"></flat-pickr>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header>
            <h5 class="card-title mb-0">Attached files</h5>
          </b-card-header>
          <b-card-body>
            <div>
              <p class="text-muted">Add Attached files here.</p>

              <DropZone @drop.prevent="drop" @change="selectedFile" class="mb-2" />
              <div class="vstack gap-2">
                <div class="border rounded" v-for="(file, index) of files" :key="index">
                  <div class="d-flex align-items-center p-2">
                    <div class="flex-grow-1">
                      <div class="pt-1">
                        <h5 class="fs-14 mb-1" data-dz-name="">
                          {{ file.name }}
                        </h5>
                        <p class="fs-13 text-muted mb-0" data-dz-size="">
                          <strong>{{ file.size / 1024 }}</strong> KB
                        </p>
                        <strong class="error text-danger" data-dz-errormessage=""></strong>
                      </div>
                    </div>
                    <div class="flex-shrink-0 ms-3">
                      <b-button variant="danger" size="sm" data-dz-remove="" @click="deleteRecord">
                        Delete
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
        <div class="text-end mb-4">
          <b-button type="button" variant="danger" class="w-sm me-1">Delete</b-button>
          <b-button type="submit" variant="secondary" class="w-sm me-1"> Draft </b-button>
          <b-button type="submit" variant="success" class="w-sm" @click="createRecord" id="sa-success">Create</b-button>
        </div>
      </b-col>
      <b-col lg="4">
        <b-card no-body>
          <b-card-header>
            <h5 class="card-title mb-0">Privacy</h5>
          </b-card-header>
          <b-card-body>
            <div>
              <label for="choices-privacy-status-input" class="form-label">Status</label>
              <Multiselect v-model="value3" :close-on-select="true" :searchable="true" :create-option="true" :options="[
                { value: 'Private', label: 'Private' },
                { value: 'Team', label: 'Team' },
                { value: 'Public', label: 'Public' },
              ]" />
            </div>
          </b-card-body>
        </b-card>

        <b-card no-body>
          <b-card-header>
            <h5 class="card-title mb-0">Tags</h5>
          </b-card-header>
          <b-card-body>
            <div class="mb-3">
              <label for="choices-categories-input" class="form-label">Categories</label>
              <Multiselect v-model="value4" :close-on-select="true" :searchable="true" :create-option="true" :options="[
                { value: 'Designing', label: 'Designing' },
                { value: 'Development', label: 'Development' },
              ]" />
            </div>

            <div>
              <label for="choices-text-input" class="form-label">Tags</label>
              <Multiselect class="form-control" v-model="skills" mode="tags" :close-on-select="true" :searchable="true"
                :create-option="true" :options="[
                 { value: 'Sprint 1', label: 'Sprint 1' },
                  { value: 'Sprint 2', label: 'Sprint 2' },
                  { value: 'Sprint 3', label: 'Sprint 3' },
                ]" />
            </div>
          </b-card-body>
        </b-card>

        <!-- <b-card no-body>
          <b-card-header>
            <h5 class="card-title mb-0">Members</h5>
          </b-card-header>
          <b-card-body>
            <div class="mb-3">
              <label for="choices-lead-input" class="form-label">Team Lead</label>
              <Multiselect v-model="value5" :close-on-select="true" :searchable="true" :create-option="true" :options="[
                { value: 'Brent Gonzalez', label: 'Brent Gonzalez' },
                { value: 'Darline Williams', label: 'Darline Williams' },
                { value: 'Sylvia Wright', label: 'Sylvia Wright' },
                { value: 'Ellen Smith', label: 'Ellen Smith' },
                { value: 'Jeffrey Salazar', label: 'Jeffrey Salazar' },
                { value: 'Mark Williams', label: 'Mark Williams' },
              ]" />
            </div>

            <div>
              <label class="form-label">Team Members</label>
              <div class="avatar-group">
                <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Brent Gonzalez">
                  <div class="avatar-xs">
                    <img src="@/assets/images/users/avatar-3.jpg" alt="" class="rounded-circle img-fluid" />
                  </div>
                </b-link>
                <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Sylvia Wright">
                  <div class="avatar-xs">
                    <div class="avatar-title rounded-circle bg-secondary">
                      S
                    </div>
                  </div>
                </b-link>
                <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Ellen Smith">
                  <div class="avatar-xs">
                    <img src="@/assets/images/users/avatar-4.jpg" alt="" class="rounded-circle img-fluid" />
                  </div>
                </b-link>
                <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Add Members">
                  <div class="avatar-xs" data-bs-toggle="modal" data-bs-target="#inviteMembersModal">
                    <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                      +
                    </div>
                  </div>
                </b-link>
              </div>
            </div>
          </b-card-body>
        </b-card> -->
      </b-col>
    </b-row>
  </Layout>
</template>
