<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import { executeQuery } from "../../.././api/utile.js";
//import Swal from "sweetalert2";
import kanban from "../tasks/kanban.vue";
import ProjectMember from "./ProjectMember.vue";
import Backlog from "./Backlog.vue";


export default {
    page: {
        title: "Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            //teamMembers: [], // Store the team members' data here
            title: "Overview",
            items: [
                {
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
            //firstnameInput: "",
            //lastnameInput: "",
            //emailInput: "",
            //modalShow: false,
            project: [],
            Features: [],
            members: []
            //searchText: "",
            //filteredMembers: [],
        };

    },
    components: {
        Layout,
        kanban,
        ProjectMember,
        Backlog
    }, async mounted() {
        try {

            this.getProjectDetail();
            // Fetch team members' data from the API
            //this.teamMembers = await this.fetchTeamMembersData();
            //this.filteredMembers = this.teamMembers;
            const ProjectId = this.$route.params.id;
            this.members = await executeQuery(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Board__c where Board__c = '${ProjectId}'`);
        } catch (error) {
            console.error('Error fetching team members data:', error);
        }
    },
    methods: {

        // addMember() {
        //     // Get the value of the board name from the input field
        //     const firstnameInput = this.firstnameInput;
        //     const lastnameInput = this.lastnameInput;
        //     const emailInput = this.emailInput;

        //     // Create the data object to pass to createSObject function
        //     const data = {
        //         FirstName: firstnameInput,
        //         LastName: lastnameInput,
        //         Email: emailInput,
        //         Username: emailInput,
        //         LanguageLocaleKey: 'fr',
        //         EmailEncodingKey: 'UTF-8',
        //         LocaleSidKey: 'ar_MA',
        //         TimeZoneSidKey: 'Africa/Casablanca',
        //         Alias: "in" + lastnameInput,
        //         ProfileId: '00e8d000002aAYiAAM'
        //     };

        //     // Call the createSObject function from your utile.js file
        //     createSObject("User", data, () => {
        //         // Callback function called on success
        //         window.location.reload();
        //     });

        //     // Clear the input field and close the modal
        //     this.firstnameInput = "";
        //     this.lastnameInput = "";
        //     this.emailInput = "";
        //     this.modalShow = false;
        //     Swal.fire("Good job!", "Team member added Succesfly!", "success");
        // },

        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        },

        // async fetchTeamMembersData() {
        //     // Use executeQuery or your API utility to fetch data from the API
        //     // Replace the below query with your actual query to fetch team members' data
        //     const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
        //     const activeProjectsRecords = await executeQuery("SELECT Id FROM board__c");
        //     const newLeadsRecords = await executeQuery("SELECT Id FROM task__c");

        //     // Format the data to return an array of objects with the required properties
        //     const teamMembersData = queryResult.map((record) => {

        //         return {
        //             Id: record.Id,
        //             name: record.Name,
        //             position: record.UserType,
        //             projects: activeProjectsRecords.length,
        //             tasks: newLeadsRecords.length,
        //             img: require("@/assets/images/users/Trailblazer_avatar.png")
        //             // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
        //         };
        //     });

        //     return teamMembersData;
        // },
        async getProjectDetail() {
            try {
                const ProjectId = this.$route.params.id;

                this.project = await executeQuery("SELECT Id,Name,CreatedDate ,OwnerId,Status__c,Company__c,Deadline__c,Description__c ,priority__c FROM board__c where id = " + "'" + ProjectId + "'");
                this.Features = await executeQuery("SELECT Id,Name FROM Feature__c where Board__c = " + "'" + ProjectId + "'");
                this.project = this.project[0];
                this.project.CreatedDate = this.project.CreatedDate.substring(0, 10)
                console.log(this.project);
                if (this.project) {
                    console.log(this.project);
                    console.log("Description " + this.project.Description__c);

                } else {
                    console.log("Empty No project with these id");
                }
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }
        },

        // filterMembers() {
        //     const inputText = this.searchText.trim().toLowerCase();
        //     this.filteredMembers = this.teamMembers.filter(member => member.name.toLowerCase().includes(inputText));
        //     console.log(this.filteredMembers);

        // },
    },
    // computed: {
    //     displayedMembers() {
    //         const inputText = this.searchText.trim().toLowerCase();
    //         return inputText === "" ? this.teamMembers : this.filteredMembers;
    //     },
    // },
};

</script>

<template>
    <Layout>

        <b-row>
            <b-col lg="12">
                <b-card no-body class="mt-n4">
                    <div class="bg-soft-primary">
                        <b-card-body class="pb-0 px-4">
                            <b-row class="mb-3">
                                <b-col md>
                                    <b-row class="align-items-center g-3">
                                        <b-col md="auto">
                                            <div class="avatar-md">
                                                <div class="avatar-title bg-white rounded-circle">
                                                    <img src="@/assets/images/brands/Salesforce.png" alt=""
                                                        class="avatar-xs" style="width: 50px;">
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col md>
                                            <div>
                                                <h4 class="fw-bold">{{ project.Name }}</h4>
                                                <div class="hstack gap-3 flex-wrap">
                                                    <div><i class="ri-building-line align-bottom me-1"></i>
                                                        {{ project.Company__c }}
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div>Create Date : <span class="fw-medium">{{ project.CreatedDate
                                                    }}</span></div>
                                                    <div class="vr"></div>
                                                    <div>Due Date : <span class="fw-medium">{{ project.Deadline__c }}</span>
                                                    </div>
                                                    <div class="vr"></div>
                                                    <b-badge pill class="bg-info fs-12">New</b-badge>
                                                    <b-badge variant="danger" pill class="bg-danger fs-12">{{
                                                        project.Priority__c }}</b-badge>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col md="auto">
                                    <div class="hstack gap-1 flex-wrap">
                                        <button type="button" class="btn py-0 fs-16 favourite-btn active">
                                            <i class="ri-star-fill" @click="toggleFavourite"></i>
                                        </button>
                                        <button type="button" class="btn py-0 fs-16 text-body">
                                            <i class="ri-share-line"></i>
                                        </button>
                                        <button type="button" class="btn py-0 fs-16 text-body">
                                            <i class="ri-flag-line"></i>
                                        </button>
                                    </div>
                                </b-col>
                            </b-row>

                            <ul class="nav nav-tabs-custom border-bottom-0" role="tablist">
                                <li class="nav-item">
                                    <b-link class="nav-link active fw-semibold" data-bs-toggle="tab"
                                        href="#project-overview" role="tab">
                                        Overview
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link fw-semibold" data-bs-toggle="tab" href="#project-team"
                                        role="tab">
                                        Team
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link fw-semibold" data-bs-toggle="tab" href="#project-backlog"
                                        role="tab">
                                        Backlog
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link fw-semibold" data-bs-toggle="tab" href="#project-tasks"
                                        role="tab">
                                        Tasks
                                    </b-link>
                                </li>
                            </ul>
                        </b-card-body>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <div class="tab-content text-muted">
                    <div class="tab-pane fade show active" id="project-overview" role="tabpanel">
                        <b-row>
                            <b-col xl="9" lg="8">
                                <b-card no-body>
                                    <b-card-body>
                                        <div class="text-muted">
                                            <h6 class="mb-3 fw-semibold text-uppercase">Summary</h6>
                                            <div class="description-container">
                                                <div :class="{ 'expanded': showFullDescription }"
                                                    v-html="project.Description__c" ref="description"></div>
                                                <div v-if="!showFullDescription" class="show-more-button">
                                                    <b-button type="button" variant="link" class="link-success p-0"
                                                        @click="toggleDescription">
                                                        Show more
                                                    </b-button>
                                                </div>
                                            </div>


                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                <b-row>

                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Create Date :</p>
                                                            <h5 class="fs-15 mb-0">{{ project.CreatedDate }}</h5>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Due Date :</p>
                                                            <h5 class="fs-15 mb-0">{{ project.Deadline__c }}</h5>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Priority :</p>
                                                            <b-badge tag="div" class="bg-danger fs-12">{{
                                                                project.Priority__c }}</b-badge>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Status :</p>
                                                            <b-badge tag="div" class="bg-warning fs-12">{{ project.status__c
                                                            }}</b-badge>
                                                        </div>
                                                    </b-col>
                                                </b-row>
                                            </div>

                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                <h6 class="mb-3 fw-semibold text-uppercase">Resources</h6>
                                                <b-row class="g-3">
                                                    <b-col xxl="4" lg="6">
                                                        <div class="border rounded border-dashed p-2">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0 me-3">
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light text-secondary rounded fs-24">
                                                                            <i class="ri-file-word-2-line"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="fs-13 mb-1">
                                                                        <b-link href="#"
                                                                            class="text-body text-truncate d-block">Cahier
                                                                            de charge.docx</b-link>
                                                                    </h5>
                                                                    <div>2.2MB</div>
                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <div class="d-flex gap-1">
                                                                        <button type="button"
                                                                            class="btn btn-icon text-muted btn-sm fs-18"><i
                                                                                class="ri-download-2-line"></i></button>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                                type="button" data-bs-toggle="dropdown"
                                                                                aria-expanded="false">
                                                                                <i class="ri-more-fill"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li>
                                                                                    <b-link class="dropdown-item"
                                                                                        href="#"><i
                                                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                        Rename</b-link>
                                                                                </li>
                                                                                <li>
                                                                                    <b-link class="dropdown-item"
                                                                                        href="#"><i
                                                                                            class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                        Delete</b-link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-col>

                                                </b-row>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex">
                                        <b-card-title class="mb-0 flex-grow-1">Comments</b-card-title>
                                        <div class="flex-shrink-0">
                                            <div class="dropdown card-header-dropdown">
                                                <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <span class="text-muted">Recent<i
                                                            class="mdi mdi-chevron-down ms-1"></i></span>
                                                </b-link>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <b-link class="dropdown-item" href="#">Recent</b-link>
                                                    <b-link class="dropdown-item" href="#">Top Rated</b-link>
                                                    <b-link class="dropdown-item" href="#">Previous</b-link>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-header>

                                    <b-card-body>

                                        <div data-simplebar style="height: 300px;" class="px-3 mx-n3 mb-2">
                                            <div class="d-flex mb-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">Joseph Parker <small class="text-muted ms-2">20
                                                            Dec 2021 - 05:47AM</small></h5>
                                                    <p class="text-muted">I am getting message from customers that when
                                                        they place order always get error message .</p>
                                                    <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</b-link>
                                                    <div class="d-flex mt-4">
                                                        <div class="flex-shrink-0">
                                                            <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                                class="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 class="fs-13">Alexis Clarke <small
                                                                    class="text-muted ms-2">22 Dec 2021 -
                                                                    02:32PM</small></h5>
                                                            <p class="text-muted">Please be sure to check your Spam
                                                                mailbox to see if your email filters have identified the
                                                                email from Dell as spam.</p>
                                                            <b-link href="javascript: void(0);"
                                                                class="badge text-muted bg-light"><i
                                                                    class="mdi mdi-reply"></i> Reply</b-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex mb-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">Donald Palmer <small class="text-muted ms-2">24
                                                            Dec 2021 - 05:20PM</small></h5>
                                                    <p class="text-muted">If you have further questions, please contact
                                                        Customer Support from the “Action Menu” on your <b-link
                                                            href="javascript:void(0);"
                                                            class="text-decoration-underline">Online Order Support
                                                        </b-link>.
                                                    </p>
                                                    <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</b-link>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">Alexis Clarke <small class="text-muted ms-2">26
                                                            min ago</small></h5>
                                                    <p class="text-muted">Your <b-link href="javascript:void(0)"
                                                            class="text-decoration-underline">Online Order Support
                                                        </b-link>
                                                        provides you with the most current status of your order. To help
                                                        manage your order refer to the “Action Menu” to initiate return,
                                                        contact Customer Support and more.</p>
                                                    <b-row class="g-2 mb-3">
                                                        <b-col lg="1" sm="2" cols="6">
                                                            <img src="@/assets/images/small/img-4.jpg" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                        <b-col lg="1" sm="2" cols="6">
                                                            <img src="@/assets/images/small/img-5.jpg" alt=""
                                                                class="img-fluid rounded">
                                                        </b-col>
                                                    </b-row>
                                                    <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i>
                                                        Reply</b-link>
                                                    <div class="d-flex mt-4">
                                                        <div class="flex-shrink-0">
                                                            <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                                class="avatar-xs rounded-circle" />
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 class="fs-13">Donald Palmer <small class="text-muted ms-2">8
                                                                    sec ago</small></h5>
                                                            <p class="text-muted">Other shipping methods are available
                                                                at checkout if you want your purchase delivered faster.
                                                            </p>
                                                            <b-link href="javascript: void(0);"
                                                                class="badge text-muted bg-light"><i
                                                                    class="mdi mdi-reply"></i> Reply</b-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <form class="mt-4">
                                            <b-row class="g-3">
                                                <b-col cols="12">
                                                    <label for="exampleFormControlTextarea1"
                                                        class="form-label text-body">Leave a Comments</label>
                                                    <textarea class="form-control bg-light border-light"
                                                        id="exampleFormControlTextarea1" rows="3"
                                                        placeholder="Enter your comment..."></textarea>
                                                </b-col>
                                                <b-col cols="12" class="text-end">
                                                    <b-button type="button" variant="ghost-secondary"
                                                        class="btn-icon me-1"><i class="ri-attachment-line fs-16"></i>
                                                    </b-button>
                                                    <b-link href="javascript:void(0);" class="btn btn-primary">Post
                                                        Comments</b-link>
                                                </b-col>
                                            </b-row>
                                        </form>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col xl="3" lg="4">
                                <b-card no-body>
                                    <b-card-body>
                                        <h5 class="card-title mb-4">Tags</h5>
                                        <div class="d-flex flex-wrap gap-2 fs-16">
                                            <b-badge v-for="feature in Features" :key="feature" variant="soft-secondary"
                                                tag="div" class="fw-medium badge-soft-secondary">
                                                {{ feature.Name }}
                                            </b-badge>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex border-bottom-dashed">
                                        <b-card-title class="mb-0 flex-grow-1">Members</b-card-title>
                                        <div class="flex-shrink-0">
                                            <!-- <b-button type="button" variant="soft-danger" size="sm"><i
                                                    class="ri-share-line me-1 align-bottom"></i> Invite Member
                                            </b-button> -->
                                        </div>
                                    </b-card-header>

                                    <b-card-body>
                                        <div data-simplebar style="height: 235px;" class="mx-n3 px-3">
                                            <div class="vstack gap-3">
                                                <div v-for="member in members" :key="member.Id"
                                                    class="d-flex align-items-center mb-3">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img src="@/assets/images/users/Trailblazer_avatar.png" alt="Avatar"
                                                            class="img-fluid rounded-circle">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link :href="`#`" class="text-body d-block">{{
                                                                member.User__r.Name }}</b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light"
                                                                size="sm">Message</b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);">
                                                                            <i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);">
                                                                            <i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);">
                                                                            <i
                                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex border-bottom-dashed">
                                        <b-card-title class="mb-0 flex-grow-1">Attachments</b-card-title>
                                        <div class="flex-shrink-0">
                                            <b-button type="button" variant="soft-success" size="sm"><i
                                                    class="ri-upload-2-fill me-1 align-bottom"></i> Upload</b-button>
                                        </div>
                                    </b-card-header>

                                    <b-card-body>

                                        <div class="vstack gap-2">
                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-file-word-2-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link href="#" class="text-body text-truncate d-block">
                                                                Cahier de charge.docx</b-link>
                                                        </h5>
                                                        <div>2.2MB</div>
                                                    </div>
                                                    <div class="flex-shrink-0 ms-2">
                                                        <div class="d-flex gap-1">
                                                            <button type="button"
                                                                class="btn btn-icon text-muted btn-sm fs-18"><i
                                                                    class="ri-download-2-line"></i></button>
                                                            <div class="dropdown">
                                                                <button
                                                                    class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                    type="button" data-bs-toggle="dropdown"
                                                                    aria-expanded="false">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                            Rename</b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                            Delete</b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="mt-2 text-center">
                                                <b-button type="button" variant="secondary">View more</b-button>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="tab-pane fade" id="project-team" role="tabpanel">
                        <ProjectMember :id=this.$route.params.id></ProjectMember>
                    </div>
                    <div class="tab-pane fade" id="project-backlog" role="tabpanel">
                        <Backlog :id=this.$route.params.id></Backlog>

                    </div>

                <div class="tab-pane fade" id="project-tasks" role="tabpanel">
                    <kanban :id=this.$route.params.id></kanban>

                </div>
            </div>
        </b-col>
    </b-row>
</Layout></template>