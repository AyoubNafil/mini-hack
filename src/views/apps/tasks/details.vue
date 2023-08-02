<script>
//import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import animationData from "@/components/widgets/kbtmbyzy.json";
import Lottie from "@/components/widgets/lottie.vue";
import { executeQuery } from "../../../api/utile";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Swal from "sweetalert2";
import { createSObject } from "../../../api/utile";

export default {
    page: {
        title: "Tasks Details",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Tasks Details",
            items: [
                {
                    text: "Tasks",
                    href: "/",
                },
                {
                    text: "Tasks Details",
                    active: true,
                },
            ],
            modalShow: false,
            modalShow1: false,
            task: [],
            users: [],
            board: "",
            selectedUser: "",
            titleInput: "",
            date2: "",
            statusInput: "",
            priorityInput: "",
            descriptionInput: "",
            codeInput: "",
            TaskId: "",
            value: null,
            defaultOptions: { animationData: animationData },
            teamMembers: [],
            inputValues: {},
        };
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
        //Multiselect,

        flatPickr,
    },
    async mounted() {
        try {
            this.getTaskDetail();

            this.teamMembers = await this.fetchTeamMembersData();
            


        } catch (error) {
            console.error("Error fetching data:", error);
        }
    },
    methods: {
        addTicket() {
            // Get the value of the board name from the input field
            const selectedUser = this.selectedUser;
            const titleInput = this.titleInput;
            const date2 = this.date2;
            const statusInput = this.statusInput;
            const priorityInput = this.priorityInput;
            const descriptionInput = this.descriptionInput;
            const codeInput = this.codeInput;

            // Create the data object to pass to createSObject function
            const data = {
                Name: titleInput,
                Status__c: statusInput,
                Priority__c: priorityInput,
                DueDate__c: date2,
                Task__c: this.TaskId,
                Assigned__c: selectedUser,
                Description__c: descriptionInput,
                Code__c: codeInput,
            };

            // Call the createSObject function from your utile.js file
            createSObject("Ticket__c", data, () => {
                // Callback function called on success
                window.location.reload();
            });

            // Clear the input field and close the modal
            this.selectedUser = "";
            this.titleInput = "";
            this.date2 = "";
            this.statusInput = "";
            this.priorityInput = "";
            this.descriptionInput = "";
            this.codeInput = "";
            this.modalShow1 = false;

            Swal.fire("Good job!", "Ticket added Succesfly!", "success");
        },

        async getTaskDetail() {
            try {
                this.TaskId = this.$route.params.id;
                this.tags = await executeQuery("SELECT Id, Feature__r.Name FROM Feature_Task__c where Task__c = " + "'" + this.TaskId + "'");
                this.task = await executeQuery(
                    "SELECT Id,Name,CreatedDate ,Type__r.Board__r.Name , Date__c,Watch__c,Type__r.name,Description__c FROM task__c where id = " +
                    "'" +
                    this.TaskId +
                    "'"
                );

                this.users = await executeQuery(
                    "SELECT Id,User__c,User__r.Name FROM member_task__c where task__c = " +
                    "'" +
                    this.TaskId +
                    "'"
                );

                console.log(this.users);
                console.log(this.TaskId);

                this.task = this.task[0];
                this.task.CreatedDate = this.task.CreatedDate.substring(0, 10);
                this.task.Watch__c = this.task.Type__r.Name;
                this.board = this.task.Type__r.Board__r.Name;
                console.log(this.task);
                this.task.Id = this.task.Id.substring(0, 16);
                if (this.task) {
                    console.log(this.task);
                    console.log("Description " + this.task.Description__c);
                    console.log(this.task.Type__r.Name);
                } else {
                    console.log("Empty No task with this id");
                }
            } catch (error) {
                console.log("Error occurred while executing query:", error);
            }
        },

        async fetchTeamMembersData() {
            try {
                // Use executeQuery or your API utility to fetch data from the API
                // Replace the below query with your actual query to fetch team members' data
                this.TaskId = this.$route.params.id;
                const test = await executeQuery(`SELECT Id,Task__r.Id, User__r.Id,User__r.Name, User__r.UserType , User__r.FullPhotoUrl FROM Member_Task__c where Task__c = '${this.TaskId}'`);
                console.log("test333: ", test);

                const formattedTeamMembers = test.map((record) => {
                    this.inputValues[record.User__r.Id] = 0;
                    return {
                        Id: record.User__r.Id,
                        name: record.User__r.Name,
                        img: record.User__r.FullPhotoUrl,
                    };
                });

                console.log("formattedTeamMembers: ", formattedTeamMembers);

                

                // Format the data to return an array of objects with the required properties
                // const teamMembersData = await Promise.all(test.map(async (record) => {
                //     //const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
                //     const activeProjectsRecords = await executeQuery(`SELECT Id FROM Member_Board__c where User__c = '${record.User__r.Id}'`);
                //     const newLeadsRecords = await executeQuery(`SELECT Id FROM Member_Task__c where User__c = '${record.User__r.Id}'`);
                //     console.log("activeProjectsRecords:", activeProjectsRecords.length);
                //     console.log("newLeadsRecords:", newLeadsRecords.length);

                //     return {
                //         Id: record.Id,
                //         name: record.User__r.Name,
                //         position: record.User__r.UserType,
                //         projects: activeProjectsRecords.length,
                //         tasks: newLeadsRecords.length,
                //         img: require("@/assets/images/users/Trailblazer_avatar.png"),
                //         // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
                //     };
                // }));

                return formattedTeamMembers;
            } catch (error) {
                console.error("Error fetching team members data:", error);
                return []; // Return an empty array in case of an error
            }
        },
        async updatePoints() {
            

            
            console.log(this.inputValues);

            

        },
        incrementValue(itemId) {
            // Increment the input value
            const currentValue = this.inputValues[itemId] || 0;
            this.inputValues[itemId] = currentValue + 1;
            
        },
        decrementValue(itemId) {
            // Decrement the input value
            const currentValue = this.inputValues[itemId] || 0;
            if (currentValue > 0) {
                this.inputValues[itemId] = currentValue - 1;
            }
        },
        updateInputValue(itemId, value) {
            // Update the input value when the user types a value directly
            this.inputValues[itemId] = parseInt(value);
            
        },


    },
};
</script>

<template>
    <Layout>
        <PageHeader :title="title" :items="items" />
        <b-row>
            <b-col xxl="3">
                <b-card no-body>
                    <b-card-body class="text-center">
                        <h6 class="card-title mb-3 flex-grow-1 text-start">Time Tracking</h6>
                        <div class="mb-2">
                            <lottie colors="primary:#687cfe,secondary:#ff7f5d" :options="defaultOptions" :height="90"
                                :width="90" />
                        </div>
                        <h3 class="mb-1">0 hrs 0 min</h3>
                        <h5 class="fs-14 mb-4">{{ task.Name }}</h5>
                        <div class="hstack gap-2 justify-content-center">
                            <b-button variant="danger" size="sm"><i class="ri-stop-circle-line align-bottom me-1"></i>
                                Stop</b-button>
                            <b-button variant="primary" size="sm"><i class="ri-play-circle-line align-bottom me-1"></i>
                                Start</b-button>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body class="mb-3">
                    <b-card-body>
                        <div class="mb-4 d-flex justify-content-center align-items-center">
                            <b-button variant="danger" size="sm" @click="modalShow1 = !modalShow1">
                                <i class="ri-stop-circle-line align-bottom me-1"></i>
                                Ticket
                            </b-button>
                        </div>
                        <div class="table-card">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <td class="fw-medium">Task's No</td>
                                        <td>{{ task.Id }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Task's Title</td>
                                        <td>{{ task.Name }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Project Name</td>
                                        <td>{{ this.board }}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Priority</td>
                                        <td>
                                            <b-badge variant="soft-danger" class="badge-soft-danger">High</b-badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Status</td>
                                        <td>
                                            <b-badge variant="soft-secondary" class="badge-soft-secondary">{{
                                                task.Watch__c
                                            }}</b-badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Due Date</td>
                                        <td>{{ task.CreatedDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body class="mb-3">
                    <b-card-body>
                        <div class="d-flex mb-3">
                            <h6 class="card-title mb-0 flex-grow-1">Assigned To</h6>
                            <!-- <div class="flex-shrink-0">
                                <b-button type="button" variant="soft-danger" size="sm" @click="modalShow = !modalShow">
                                    <i class="ri-share-line me-1 align-bottom"></i>
                                    Assigned Member
                                </b-button>
                            </div> -->
                        </div>
                        <ul class="list-unstyled vstack gap-3 mb-0">
                            <li v-for="(item, index) in teamMembers" :key="index">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0">
                                        <img :src="`${item.img}`" alt=""
                                            class="avatar-xs rounded-circle" />
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">
                                            <router-link to="/pages/profile" class="text-reset">{{ item.name
                                            }}</router-link>
                                        </h6>
                                        <p class="text-muted mb-0">Full Stack Developer</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div class="dropdown">
                                            <button class="btn btn-icon btn-sm fs-16 text-muted dropdown" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="ri-more-fill"></i>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                    </b-link>
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
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-body>
                        <h5 class="card-title mb-3">Attachments</h5>
                        <div class="vstack gap-2">
                            <div class="border rounded border-dashed p-2">
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm">
                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                <i class="ri-image-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="fs-13 mb-1">
                                            <b-link href="javascript:void(0);" class="text-body text-truncate d-block">
                                                Banner.png</b-link>
                                        </h5>
                                        <div>1.2MB</div>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                        <div class="d-flex gap-1">
                                            <button type="button" class="btn btn-icon text-muted btn-sm fs-18">
                                                <i class="ri-download-2-line"></i>
                                            </button>
                                            <div class="dropdown">
                                                <button class="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ri-more-fill"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                            Rename</b-link>
                                                    </li>
                                                    <li>
                                                        <b-link class="dropdown-item" href="javascript:void(0);"><i
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
                                <b-button type="button" variant="primary">View more</b-button>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="9">
                <b-card no-body>
                    <b-card-body>
                        <div class="text-muted">
                            <h6 class="mb-3 fw-semibold text-uppercase">Summary</h6>
                            <p>{{ task.Description__c }}</p>

                            <h6 class="mb-3 fw-semibold text-uppercase">Sub-tasks</h6>
                            <ul class="ps-3 list-unstyled vstack gap-2">
                                <div v-for="(item, index) of this.teamMembers" :key="index"
                                    class="d-flex align-items-center mb-3">
                                    <div class="avatar-xs flex-shrink-0 me-3">
                                        <img :src="`${item.img}`" alt="Avatar"
                                            class="img-fluid rounded-circle">
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-13 mb-0">
                                            <b-link :href="`#`" class="text-body d-block">{{ item.name }}</b-link>
                                        </h5>
                                    </div>
                                    <div class="input-step step-primary">
                                        <button type="button" class="minus" @click="this.decrementValue(item.Id)">–</button>
                                        <input type="number" class="product-quantity" :value="inputValues[item.Id]" min="0"
                                            max="100" :id="item.Id" :ref="`input-${item.Id}`"
                                            @input="this.updateInputValue(item.Id, $event.target.value)">
                                        <button type="button" class="plus" @click="this.incrementValue(item.Id)">+</button>
                                    </div>

                                </div>
                            </ul>

                            <div class="pt-3 border-top border-top-dashed mt-4">
                                <h6 class="mb-3 fw-semibold text-uppercase">Tasks Tags</h6>
                                <div class="hstack flex-wrap gap-2 fs-15">
                                    <b-badge variant="soft-info" tag="div" class="fw-medium badge-soft-info"
                                        v-for="(item, index) of this.tags" :key="index">{{ item.Feature__r.Name }}</b-badge>

                                </div>
                            </div>
                            <div class="my-button-container">
                                <b-button variant="secondary" @click="updatePoints">
                                    <i class="ri-save-line align-bottom me-1"></i> Update
                                </b-button>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header>
                        <div>
                            <ul class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                <li class="nav-item">
                                    <b-link class="nav-link active" data-bs-toggle="tab" href="#home-1" role="tab">
                                        Comments (5)
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link" data-bs-toggle="tab" href="#messages-1" role="tab">
                                        Attachments File (1)
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link" data-bs-toggle="tab" href="#profile-1" role="tab">
                                        Time Entries (0 hrs 0 min)
                                    </b-link>
                                </li>
                            </ul>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="tab-content">
                            <div class="tab-pane active" id="home-1" role="tabpanel">
                                <h5 class="card-title mb-4">Comments</h5>
                                <div data-simplebar style="height: 508px" class="px-3 mx-n3 mb-2">
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <router-link to="/pages/profile" class="text-reset">Joseph
                                                    Parker</router-link>
                                                <small class="text-muted">20 Dec 2021 - 05:47AM</small>
                                            </h5>
                                            <p class="text-muted">
                                                I am getting message from customers that when they place order
                                                always get error message .
                                            </p>
                                            <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</b-link>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">
                                                        <router-link to="/pages/profile" class="text-reset">Tonya
                                                            Noble</router-link>
                                                        <small class="text-muted">22 Dec 2021 - 02:32PM</small>
                                                    </h5>
                                                    <p class="text-muted">
                                                        Please be sure to check your Spam mailbox to see if your email
                                                        filters have identified the email from Dell as spam.
                                                    </p>
                                                    <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i> Reply</b-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mb-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <router-link to="/pages/profile" class="text-reset">Thomas
                                                    Taylor</router-link>
                                                <small class="text-muted">24 Dec 2021 - 05:20PM</small>
                                            </h5>
                                            <p class="text-muted">
                                                If you have further questions, please contact Customer Support
                                                from the “Action Menu” on your
                                                <b-link href="javascript:void(0);" class="text-decoration-underline">Online
                                                    Order Support</b-link>.
                                            </p>
                                            <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</b-link>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">
                                                <router-link to="/pages/profile" class="text-reset">Tonya
                                                    Noble</router-link>
                                                <small class="text-muted">26 min ago</small>
                                            </h5>
                                            <p class="text-muted">
                                                Your
                                                <b-link href="javascript:void(0)" class="text-decoration-underline">Online
                                                    Order Support</b-link>
                                                provides you with the most current status of your order. To help
                                                manage your order refer to the “Action Menu” to initiate return,
                                                contact Customer Support and more.
                                            </p>
                                            <b-row class="g-2 mb-3">
                                                <b-col lg="1" sm="2" cols="6">
                                                    <img src="@/assets/images/small/img-4.jpg" alt=""
                                                        class="img-fluid rounded" />
                                                </b-col>
                                                <b-col lg="1" sm="2" cols="6">
                                                    <img src="@/assets/images/small/img-5.jpg" alt=""
                                                        class="img-fluid rounded" />
                                                </b-col>
                                            </b-row>
                                            <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</b-link>
                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img src="@/assets/images/users/avatar-6.jpg" alt=""
                                                        class="avatar-xs rounded-circle" />
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">
                                                        <router-link to="/pages/profile" class="text-reset">Nancy
                                                            Martino</router-link>
                                                        <small class="text-muted">8 sec ago</small>
                                                    </h5>
                                                    <p class="text-muted">
                                                        Other shipping methods are available at checkout if you want
                                                        your purchase delivered faster.
                                                    </p>
                                                    <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                            class="mdi mdi-reply"></i> Reply</b-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form class="mt-4">
                                    <b-row class="g-3">
                                        <b-col lg="12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Leave a
                                                Comments</label>
                                            <textarea class="form-control bg-light border-light"
                                                id="exampleFormControlTextarea1" rows="3"
                                                placeholder="Enter comments"></textarea>
                                        </b-col>
                                        <b-col cols="12" class="text-end">
                                            <b-button type="button" variant="ghost-secondary" class="btn-icon me-1"><i
                                                    class="ri-attachment-line fs-16"></i></b-button>
                                            <b-link href="javascript:void(0);" class="btn btn-primary">Post Comments
                                            </b-link>
                                        </b-col>
                                    </b-row>
                                </form>
                            </div>
                            <div class="tab-pane" id="messages-1" role="tabpanel">
                                <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                        <thead class="table-light text-muted">
                                            <tr>
                                                <th scope="col">File Name</th>
                                                <th scope="col">Type</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Upload Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-soft-danger text-danger rounded fs-20">
                                                                <i class="ri-image-2-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ms-3 flex-grow-1">
                                                            <h6 class="fs-15 mb-0">
                                                                <b-link href="javascript:void(0);">Banner.png
                                                                </b-link>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>PNG File</td>
                                                <td>879 KB</td>
                                                <td>02 Nov 2021</td>
                                                <td>
                                                    <div class="dropdown">
                                                        <b-link href="javascript:void(0);" class="btn btn-light btn-icon"
                                                            id="dropdownMenuLink4" data-bs-toggle="dropdown"
                                                            aria-expanded="true">
                                                            <i class="ri-equalizer-fill"></i>
                                                        </b-link>
                                                        <ul class="dropdown-menu dropdown-menu-end"
                                                            aria-labelledby="dropdownMenuLink4"
                                                            data-popper-placement="bottom-end" style="
                                position: absolute;
                                inset: 0px 0px auto auto;
                                margin: 0px;
                                transform: translate(0px, 23px);
                              ">
                                                            <li>
                                                                <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-middle"></i>View
                                                                </b-link>
                                                            </li>
                                                            <li>
                                                                <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-middle"></i>Download
                                                                </b-link>
                                                            </li>
                                                            <li>
                                                                <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-line me-2 align-middle"></i>Delete
                                                                </b-link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="profile-1" role="tabpanel">
                                <h6 class="card-title mb-4 pb-2">Time Entries</h6>
                                <div class="table-responsive table-card">
                                    <table class="table align-middle mb-0">
                                        <thead class="table-light text-muted">
                                            <tr>
                                                <th scope="col">Member</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">Timer Idle</th>
                                                <th scope="col">Tasks Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-modal v-model="modalShow" hide-footer title="Team Members" body-class="p-4" content-class="border-0"
            header-class="p-3 ps-4 bg-soft-success" class="v-modal-custom" centered>
            <div class="search-box mb-3">
                <input type="text" class="form-control bg-light border-light" placeholder="Search here..." />
                <i class="ri-search-line search-icon"></i>
            </div>

            <div class="mb-4 d-flex align-items-center">
                <div class="me-2">
                    <h5 class="mb-0 fs-13">Members :</h5>
                </div>
                <div class="avatar-group justify-content-center">
                    <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Tonya Noble">
                        <div class="avatar-xs">
                            <img src="@/assets/images/users/avatar-10.jpg" alt="" class="rounded-circle img-fluid" />
                        </div>
                    </b-link>
                    <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Thomas Taylor">
                        <div class="avatar-xs">
                            <img src="@/assets/images/users/avatar-8.jpg" alt="" class="rounded-circle img-fluid" />
                        </div>
                    </b-link>
                    <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover title="Nancy Martino">
                        <div class="avatar-xs">
                            <img src="@/assets/images/users/avatar-2.jpg" alt="" class="rounded-circle img-fluid" />
                        </div>
                    </b-link>
                </div>
            </div>
            <div class="mx-n4 px-4" data-simplebar style="max-height: 225px">
                <div class="vstack gap-3">
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-2.jpg" alt="" class="img-fluid rounded-circle" />
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <b-link href="javascript:void(0);" class="text-body d-block">Nancy Martino
                                </b-link>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="light" size="sm">Add</b-button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <div class="avatar-title bg-soft-danger text-danger rounded-circle">HB</div>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <b-link href="javascript:void(0);" class="text-body d-block">Henry Baird
                                </b-link>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="light" size="sm">Add</b-button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-3.jpg" alt="" class="img-fluid rounded-circle" />
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <b-link href="javascript:void(0);" class="text-body d-block">Frank Hook
                                </b-link>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="light" size="sm">Add</b-button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-4.jpg" alt="" class="img-fluid rounded-circle" />
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <b-link href="javascript:void(0);" class="text-body d-block">Jennifer Carter
                                </b-link>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="light" size="sm">Add</b-button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <div class="avatar-title bg-soft-success text-success rounded-circle">
                                AC
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <b-link href="javascript:void(0);" class="text-body d-block">Alexis Clarke
                                </b-link>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="light" size="sm">Add</b-button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="avatar-xs flex-shrink-0 me-3">
                            <img src="@/assets/images/users/avatar-7.jpg" alt="" class="img-fluid rounded-circle" />
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="fs-13 mb-0">
                                <b-link href="javascript:void(0);" class="text-body d-block">Joseph Parker
                                </b-link>
                            </h5>
                        </div>
                        <div class="flex-shrink-0">
                            <b-button type="button" variant="light" size="sm">Add</b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer v-modal-footer">
                <b-button type="button" variant="light" class="w-xs" @click="modalShow = false">
                    Cancel</b-button>
                <b-button type="button" variant="success" class="w-xs">Assigned</b-button>
            </div>
        </b-modal>

        <b-modal v-model="modalShow1" id="showModal" modal-class="zoomIn" title-class="exampleModalLabel" hide-footer
            header-class="p-3 bg-soft-info" class="v-modal-custom" centered no-close-on-backdrop size="lg">
            <b-form @submit.prevent="addTicket">
                <b-row class="g-3">
                    <b-col lg="12">
                        <div>
                            <label for="tasksTitle-field" class="form-label">Title</label>
                            <input type="text" id="tasksTitle" class="form-control" placeholder="Title"
                                v-model="titleInput" />
                        </div>
                    </b-col>
                    <b-col lg="12">
                        <div>
                            <label for="tasksTitle-field" class="form-label">Description</label>
                            <textarea id="tasksTitle" class="form-control" placeholder="Description"
                                v-model="descriptionInput"></textarea>
                        </div>
                    </b-col>
                    <b-col lg="12">
                        <div>
                            <label for="tasksTitle-field" class="form-label">Code</label>
                            <textarea id="tasksTitle" class="form-control" placeholder="Code"
                                v-model="codeInput"></textarea>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div>
                            <label for="assignedtoName-field" class="form-label">Assigned To</label>
                            <select id="assignedtoName" class="form-select" v-model="selectedUser">
                                <option value="" disabled>Select an option</option>
                                <option v-for="user in users" :key="user.User__c" :value="user.User__c">
                                    {{ user.User__r.Name }}
                                </option>
                            </select>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <label for="duedate-field" class="form-label">Due Date</label>

                        <flat-pickr v-model="date2" :config="config" class="form-control bg-light border-light" id="ddate">
                        </flat-pickr>
                    </b-col>
                    <b-col lg="6">
                        <label for="ticket-status" class="form-label">Status</label>
                        <select class="form-control" data-plugin="choices" name="ticket-status" id="ticketstatus"
                            v-model="statusInput">
                            <option value="">Status</option>
                            <option value="New">New</option>
                            <option value="Inprogress">Inprogress</option>
                            <option value="Closed">Closed</option>
                            <option value="Open">Open</option>
                        </select>
                    </b-col>
                    <b-col lg="6">
                        <label for="priority-field" class="form-label">Priority</label>
                        <select class="form-control" data-plugin="choices" name="priority-field" id="priority"
                            v-model="priorityInput">
                            <option value="">Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </b-col>
                </b-row>
                <div class="modal-footer v-modal-footer mt-3">
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="light" @click="modalShow1 = false" id="closemodal">
                            Close
                        </b-button>
                        <b-button type="submit" variant="success" id="add"> Add Ticket </b-button>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </Layout>
</template>
<style>
.my-button-container {
    display: flex;
    justify-content: flex-end;
}
</style>