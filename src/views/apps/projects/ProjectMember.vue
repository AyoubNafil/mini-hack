<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import { executeQuery, createSObject } from "../../.././api/utile.js";
import Swal from "sweetalert2";

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            firstnameInput: "",
            lastnameInput: "",
            emailInput: "",
            modalShow: false,
            searchText: "",
            filteredMembers: [],
            teamMembers: []

        }
    },
    async mounted() {
        try {


            // Fetch team members' data from the API
            this.teamMembers = await this.fetchTeamMembersData();
            this.filteredMembers = this.teamMembers;
        } catch (error) {
            console.error('Error fetching team members data:', error);
        }
    },
    methods: {
        addMember() {
            // Get the value of the board name from the input field
            const firstnameInput = this.firstnameInput;
            const lastnameInput = this.lastnameInput;
            const emailInput = this.emailInput;

            // Create the data object to pass to createSObject function
            const data = {
                FirstName: firstnameInput,
                LastName: lastnameInput,
                Email: emailInput,
                Username: emailInput,
                LanguageLocaleKey: 'fr',
                EmailEncodingKey: 'UTF-8',
                LocaleSidKey: 'ar_MA',
                TimeZoneSidKey: 'Africa/Casablanca',
                Alias: "in" + lastnameInput,
                ProfileId: '00e8d000002aAYiAAM'
            };

            // Call the createSObject function from your utile.js file
            createSObject("User", data, () => {
                // Callback function called on success
                window.location.reload();
            });

            // Clear the input field and close the modal
            this.firstnameInput = "";
            this.lastnameInput = "";
            this.emailInput = "";
            this.modalShow = false;
            Swal.fire("Good job!", "Team member added Succesfly!", "success");
        },
        async fetchTeamMembersData() {
            // Use executeQuery or your API utility to fetch data from the API
            // Replace the below query with your actual query to fetch team members' data
            const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
            const activeProjectsRecords = await executeQuery("SELECT Id FROM board__c");
            const newLeadsRecords = await executeQuery("SELECT Id FROM task__c");

            // Format the data to return an array of objects with the required properties
            const teamMembersData = queryResult.map((record) => {

                return {
                    Id: record.Id,
                    name: record.Name,
                    position: record.UserType,
                    projects: activeProjectsRecords.length,
                    tasks: newLeadsRecords.length,
                    img: require("@/assets/images/users/Trailblazer_avatar.png")
                    // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
                };
            });

            return teamMembersData;
        },
        filterMembers() {
            const inputText = this.searchText.trim().toLowerCase();
            this.filteredMembers = this.teamMembers.filter(member => member.name.toLowerCase().includes(inputText));
            console.log(this.filteredMembers);

        },
    },
    components: {

    },
    computed: {
        displayedMembers() {
            const inputText = this.searchText.trim().toLowerCase();
            return inputText === "" ? this.teamMembers : this.filteredMembers;
        },
    },
};
</script>

<template>
    <b-row class="g-4 mb-3">
        <b-col sm>
            <div class="d-flex">
                <div class="search-box me-2">
                    <input type="text" class="form-control" placeholder="Search member..." @change="filterMembers"
                        v-model="searchText">
                    <i class="ri-search-line search-icon"></i>
                </div>
            </div>
        </b-col>
        <b-col sm="auto">
            <div>
                <b-button type="button" variant="danger" @click="modalShow = !modalShow"><i
                        class="ri-share-line me-1 align-bottom"></i>
                    Invite Member</b-button>
            </div>
        </b-col>
    </b-row>

    <!-- Loop through the teamMembers array and render team member cards dynamically -->
    <div v-for="(member, index) in displayedMembers" :key="index" class="team-list list-view-filter">

        <b-card no-body class="team-box">
            <b-card-body class="px-4">
                <b-row class="align-items-center team-row">
                    <div class="col team-settings">
                        <b-row class="align-items-center">
                            <b-col>
                                <div class="flex-shrink-0 me-2">
                                    <button type="button" class="btn fs-16 p-0 favourite-btn">
                                        <i class="ri-star-fill" @click="toggleFavourite"></i>
                                    </button>
                                </div>
                            </b-col>
                            <div class="col text-end dropdown">
                                <b-link href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ri-more-fill fs-17"></i>
                                </b-link>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <router-link class="dropdown-item" :to="`/pages/profile/${member.Id}`"><i
                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                        </router-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                        </b-link>
                                    </li>
                                </ul>
                            </div>
                        </b-row>
                    </div>
                    <b-col lg="4" cols>
                        <div class="team-profile-img">
                            <div class="avatar-lg img-thumbnail rounded-circle">
                                <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                    class="img-fluid d-block rounded-circle" />
                            </div>
                            <div class="team-content">

                                <h5 class="fs-16 mb-1">
                                    <router-link :to="`/pages/profile/${member.Id}`" class="d-block"
                                        style="color: black;">{{ member.name }}</router-link>
                                </h5>
                                <p class="text-muted mb-0">{{ member.position }}</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="4" cols>
                        <b-row class="text-muted text-center">
                            <b-col cols="6" class="border-end border-end-dashed">
                                <h5 class="mb-1">{{ member.projects }}</h5>
                                <p class="text-muted mb-0">Projects</p>
                            </b-col>
                            <b-col cols="6">
                                <h5 class="mb-1">{{ member.tasks }}</h5>
                                <p class="text-muted mb-0">Tasks</p>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="2">
                        <div class="text-end">
                            <router-link :to="`/pages/profile/${member.Id}`" class="btn btn-light view-btn">View
                                Profile</router-link>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>


    </div>

    <b-row class="g-0 text-center text-sm-start align-items-center mb-3">
        <b-col sm="6">
            <div>
                <p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
            </div>
        </b-col>
        <b-col sm="6">
            <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <li class="page-item disabled">
                    <b-link href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></b-link>
                </li>
                <li class="page-item">
                    <b-link href="#" class="page-link">1</b-link>
                </li>
                <li class="page-item active">
                    <b-link href="#" class="page-link">2</b-link>
                </li>
                <li class="page-item">
                    <b-link href="#" class="page-link">3</b-link>
                </li>
                <li class="page-item">
                    <b-link href="#" class="page-link">4</b-link>
                </li>
                <li class="page-item">
                    <b-link href="#" class="page-link">5</b-link>
                </li>
                <li class="page-item">
                    <b-link href="#" class="page-link"><i class="mdi mdi-chevron-right"></i>
                    </b-link>
                </li>
            </ul>
        </b-col>
    </b-row>
    <b-modal v-model="modalShow" header-class="p-3 bg-soft-warning" content-class="border-0" hide-footer title="Add Member"
        class="v-modal-custom">
        <!-- <b-form @submit.prevent="addMember">
            <b-row class="g-3">
                <b-col lg="6">
                    <label for="firstnameInput" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstnameInput" placeholder="Enter first name"
                        v-model="firstnameInput">
                </b-col>
                <b-col lg="6">
                    <label for="lastnameInput" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastnameInput" placeholder="Enter last name"
                        v-model="lastnameInput">
                </b-col>
                <b-col lg="12">
                    <label for="emailInput" class="form-label">Email ID</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Email" v-model="emailInput">
                </b-col>
                <b-col lg="12">
                    <label for="submissionidInput" class="form-label">Submission ID</label>
                    <input type="number" class="form-control" id="submissionidInput" placeholder="Submission ID">
                </b-col>
                <b-col lg="12">
                    <label for="profileimgInput" class="form-label">Profile Images</label>
                    <input class="form-control" type="file" id="profileimgInput">
                </b-col>

                <b-col lg="12">
                    <label for="designationInput" class="form-label">Designation</label>
                    <input type="text" class="form-control" id="designationInput" placeholder="Designation">
                </b-col>
                <b-col lg="12">
                    <label for="titleInput" class="form-label">Title</label>
                    <input type="text" class="form-control" id="titleInput" placeholder="Title">
                </b-col>
                <b-col lg="6">
                    <label for="numberInput" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="numberInput" placeholder="Phone number">
                </b-col>
                <b-col lg="6">
                    <label for="joiningdateInput" class="form-label">Joining Date</label>

                    <flat-pickr v-model="date" :config="config" placeholder="Select date" class="form-control">
                    </flat-pickr>
                </b-col>
                <div class="modal-footer v-modal-footer">
                    <b-button type="button" variant="light" @click="modalShow = false"><i
                            class="ri-close-line align-bottom me-1"></i> Close</b-button>
                    <b-button type="submit" variant="success" id="addNewMember">Add Member</b-button>
                </div>
            </b-row>
        </b-form> -->
         
    </b-modal>
</template>