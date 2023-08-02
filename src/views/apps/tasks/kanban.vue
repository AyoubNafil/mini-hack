<style>
@import "~dragula/dist/dragula.css";
</style>

<script >
//import { toRaw } from "vue";
import autoScroll from 'dom-autoscroller';
//import { VueDraggableNext } from 'vue-draggable-next';
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import dragula from 'dragula';

//import Layout from "../../../layouts/main.vue";
//import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

//import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/gsqxdxog.json";

import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import { executeQuery, updateSObjects, createSObject, createSObject2 } from "../../../api/utile.js";

import Listkanban from './Listkanban.vue'

import ConfettiExplosion from "vue-confetti-explosion";

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },

    page: {
        title: "Kanban Board",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Kanban Board",
            items: [
                {
                    text: "Tasks",
                    href: "/",
                },
                {
                    text: "Kanban Board",
                    active: true,
                },
            ],
            boardName: "",
            firstnameInput: "",
            lastnameInput: "",
            emailInput: "",
            modalShow: false,
            modalShow1: false,

            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
            },
            date: null,
            date1: null,
            defaultOptions: { animationData: animationData },
            enabled: true,
            dragging: false,
            cc: [],
            reloadKey: 0,
            newCardData: null,
            teamMembers: [],
            tags :[],
            tagValue :"All",
            showParticles: false,
            ///drake2,
            //drake
        };
    },
    async mounted() {

        this.initializeDragula();
        //this.initializeDragulaKanbanBoard();
        this.fetchData();
        this.teamMembers = await this.fetchTeamMembersData();
        const result = await executeQuery("SELECT Id, Name ,Board__c FROM Feature__c where Board__c = " + "'" + this.id + "'");
        this.tags = result.map((item) => ({
            value: item.Id,
            label: item.Name,
        }));

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
                ProfileId: '00e8d000000u5huAAA'
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

            //Swal.fire("Good job!", "Team member added Succesfly!", "success");
        },
        addBoard() {
            // Get the value of the board name from the input field
            const boardName = this.boardName;

            // Create the data object to pass to createSObject function
            const data = {
                Board__c: this.id,
                Name: boardName,
                Placement__c: this.cc.length + 1
            };

            // Call the createSObject function from your utile.js file
            createSObject2("Card__c", data).then((newCardId) => {
                // Handle the query result

                // Callback function called on success
                //window.location.reload();
                console.log({ Id: newCardId, ...data });
                this.newCardData = { Id: newCardId, ...data };

                this.cc.push(this.newCardData);

            })
                .catch((error) => {
                    // Handle any errors that occurred
                    console.error(error);
                });

            // Clear the input field and close the modal
            this.boardName = "";
            this.modalShow1 = false;
        },
        handleRegisterTask(element) {

            this.tasks_list.push(element);
        },
        // handleReloadListkanban() {
        //     //console.log(this.reloadKey);
        //     // Increment the reloadKey value to trigger a re-render of the Listkanban component
        //     this.reloadKey++;
        // },

        async fetchData() {
            try {
                this.cc = await executeQuery(`select id,name,Placement__c from Card__c where Board__c = '${this.id}'`);
                if (this.cc) {
                    this.cc.sort((a, b) => a.Placement__c - b.Placement__c);
                    console.log(this.cc);
                } else {
                    console.log("Empty");
                }
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }
        },

        initializeDragula() {
            this.tasks_list = [document.getElementById("kanbanboard")];
            // for (let i = 0; i < this.cc.length; i++) {
            //     const element = document.getElementById(this.cc[i].Name);
            //     if (element) {
            //         this.tasks_list.push(element);
            //     }
            // };
            //console.log(this.tasks_list);
            if (this.tasks_list) {
                console.log("this.tasks_list", this.tasks_list);
                this.drake = dragula(this.tasks_list)
                    .on("drag", (el) => {


                        el.classList.remove("ex-moved");
                        el.style.transform = "rotate(5deg)";
                        //console.log("drag", el);



                    })
                    .on("drop", (el, container) => {


                        el.classList.add("ex-moved");
                        el.style.transform = "none";

                        console.log("el: ", el);
                        console.log("container: ", container);

                        if (el.classList.contains("tasks-list") && container.classList.contains("tasks")) {
                            drake.cancel(true);
                        }

                        // if (el.classList.contains("tasks-list") && container.classList.contains("tasks-board")) {
                        //     drake.cancel(true);
                        // }

                        if (el.classList.contains("tasks-list")) {
                            const tasksLists = document.querySelectorAll("div.tasks-list:not(.gu-mirror)");
                            console.log(tasksLists);
                            const updatedCC = Array.from(tasksLists).map((tasksList, index) => {
                                const taskId = tasksList.id.split("-")[2]; // Extract the task ID from the tasks list ID
                                const task = this.cc.find((item) => item.Id === taskId);
                                if (task) {
                                    task.Placement__c = index + 1; // Update the Placement__c value based on the new position
                                }
                                return task;
                            });
                            updateSObjects("Card__c", updatedCC);
                            console.log(updatedCC);
                        } else if (el.classList.contains("tasks-box")) {
                            console.log("in");
                            const parentCardId = el.closest(".tasks-list").id.split("-")[2];
                            console.log(parentCardId);
                            const tasksBoxId = el.id;
                            console.log(tasksBoxId);
                            updateSObjects("Task__c", { Id: tasksBoxId, Type__c: parentCardId });


                            const lastIndex = this.cc.findIndex((obj) => obj.Id === parentCardId);

                            if (lastIndex !== -1 && lastIndex === this.cc.length - 1) {
                                this.showParticles = true;


                            } else {
                                this.showParticles = false;
                            }

                            // const refName = `taskListComponent-${parentCardId}`;
                            // console.log("refName: ", refName);
                            // const childComponent = this.$refs[refName];
                            // console.log("childComponent: ", childComponent);
                            // //const childData = childComponent.data();
                            // //const tasks = childData.task;
                            // //const tasks = childComponent.task;
                            // //console.log("ref: ", tasks);
                            // //const childComponentInstance = toRaw(childComponent.$);
                            // //console.log("childComponentInstance: ",childComponentInstance)
                            // //const tasks = childComponentInstance.task;

                            // this.$nextTick(() => {
                            //     // Wait for the childComponent to be updated
                            //     const tasks = childComponent.task;
                            //     console.log("ref: ", tasks);
                            // });
                        }


                    })
                    .on("over", (el, container) => {
                        container.classList.add("ex-over");
                        el.style.transform = "none";
                    })
                    .on("out", (el, container) => {
                        container.classList.remove("ex-over");
                        el.style.transform = "none";

                    });

                const drake = this.drake;
                const kanbanboard = document.querySelector("#kanbanboard");
                autoScroll(kanbanboard, {
                    margin: 20,
                    maxSpeed: 100,
                    scrollWhenOutside: true,
                    autoScroll: function () {
                        return this.down && drake.dragging;
                    }
                });
            }

        },


        // initializeDragulaKanbanBoard() {
        //     this.tasks_list2 = [
        //         document.getElementById("kanbanboard"),
        //     ];
        //     // for (let i = 0; i < this.cc.length; i++) {
        //     //     const element = document.getElementById(this.cc[i].Name);
        //     //     if (element) {
        //     //         this.tasks_list.push(element);
        //     //     }
        //     // };
        //     //console.log(this.tasks_list);
        //     if (this.tasks_list2) {
        //         console.log("this.tasks_list2", this.tasks_list2);
        //         this.drake2 = dragula(this.tasks_list2)
        //             .on("drag", (el) => {





        //             })
        //             .on("drop", (el) => {

        //                 //console.log(el);


        //                 const tasksLists = document.querySelectorAll("div.tasks-list:not(.gu-mirror)");
        //                 //console.log(tasksLists);
        //                 const updatedCC = Array.from(tasksLists).map((tasksList, index) => {
        //                     const taskId = tasksList.id.split("-")[2]; // Extract the task ID from the tasks list ID
        //                     const task = this.cc.find((item) => item.Id === taskId);

        //                     if (task) {
        //                         task.Placement__c = index + 1; // Update the Placement__c value based on the new position
        //                     }

        //                     return task;
        //                 });
        //                 updateSObjects("Card__c", updatedCC);
        //                 //console.log(updatedCC);



        //             })
        //             .on("over", (el, container) => {

        //             })
        //             .on("out", (el, container) => {


        //             }).on("dragend", (el, container) => {
        //                 el.draggable = true;

        //             });;


        //     }

        // },


        handleReloadList(idToDelete) {


            const indexToDelete = this.cc.findIndex(item => item.Id === idToDelete);
            if (indexToDelete !== -1) {
                this.cc.splice(indexToDelete, 1);
            }

        },

        log(event) {
            console.log(event);
        },
        async fetchTeamMembersData() {
            try {
                // Use executeQuery or your API utility to fetch data from the API
                // Replace the below query with your actual query to fetch team members' data
                const test = await executeQuery(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType, User__r.FullPhotoUrl FROM Member_Board__c where Board__c = '${this.id}'`);
                console.log("test: ", test);

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

                return test;
            } catch (error) {
                console.error("Error fetching team members data:", error);
                return []; // Return an empty array in case of an error
            }
        }


    },
    components: {
        Listkanban,
        //Layout,
        //PageHeader,
        //draggable: VueDraggableNext,
        //lottie: Lottie,
        flatPickr,
        Multiselect,
        ConfettiExplosion
    },
};
</script>

<template>
    <div class="centered-div" v-if="showParticles">
        <ConfettiExplosion :particleCount="200" :force="0.3" :duration="3000" />
        <!-- <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="this.conffeti" /> -->
    </div>
    <b-card no-body>
        <b-card-body>
            <b-row class="g-2">
                <b-col lg="auto">
                    <div class="hstack gap-2">
                        <b-button variant="primary" @click="modalShow1 = !modalShow1"><i
                                class="ri-add-line align-bottom me-1"></i> Create Board</b-button>
                    </div>
                </b-col>
                <b-col lg="3" class="col-auto">
                    <div class="search-box">
                        <input type="text" class="form-control search" placeholder="Search for project, tasks...">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                </b-col>
                <b-col lg="3" class="col-auto">
                    <Multiselect v-model="tagValue" :options="this.tags" />
                </b-col>
                <div class="col-auto ms-sm-auto">
                    <div class="avatar-group" id="newMembar">
                        <div v-for="teamMember in teamMembers" :key="teamMember.Id">
                            <b-link href="javascript: void(0);" class="avatar-group-item" v-b-tooltip.hover
                                :title="teamMember.User__r.Name">
                                <img :src="`${teamMember.User__r.FullPhotoUrl}`" alt=""
                                    class="rounded-circle avatar-xs">
                            </b-link>
                        </div>
                        <!-- <div class="avatar-group-item" @click="modalShow = !modalShow">
                            <div class="avatar-xs">
                                <div class="avatar-title bg-secondary rounded-circle">
                                    +
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </b-row>
        </b-card-body>
    </b-card>

    <div class="tasks-board mb-3" id="kanbanboard">

        <Listkanban v-for="(item, index) in this.cc" :key="`listkanban-${index}-${reloadKey}-${tagValue}`" :item="item"
            @registerTask="handleRegisterTask" :ref="`taskListComponent-${item.Id}`" @reloadList="handleReloadList"
            :id=this.$route.params.id :tagValue="tagValue"/>


    </div>


    <b-modal v-model="modalShow" header-class="p-3 bg-soft-warning" content-class="border-0" hide-footer title="Add Member"
        class="v-modal-custom">
        <b-form @submit.prevent="addMember">
            <b-row class="g-3">
                <b-col lg="6">
                    <label for="firstnameInput" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstnameInput" placeholder="Enter firstname"
                        v-model="firstnameInput">
                </b-col>
                <b-col lg="6">
                    <label for="lastnameInput" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastnameInput" placeholder="Enter lastname"
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
        </b-form>

    </b-modal>

    <b-modal v-model="modalShow1" header-class="p-3 bg-soft-info" content-class="border-0" hide-footer title="Add Board"
        class="v-modal-custom" centered>
        <b-form @submit.prevent="addBoard">
            <b-row>
                <b-col lg="12">
                    <label for="boardName" class="form-label">Board Name</label>
                    <input type="text" class="form-control" id="boardName" placeholder="Enter board name"
                        v-model="boardName">
                </b-col>
                <div class="mt-4">
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="light" @click="modalShow1 = false">Close</b-button>
                        <b-button type="submit" variant="success" id="addNewBoard">Add Board</b-button>
                    </div>
                </div>
            </b-row>
        </b-form>
    </b-modal>
</template>
<style>
.centered-div {

    display: flex;
    justify-content: center;
    /* Horizontally center the content */
    align-items: center;
    /* Vertically center the content */
}
</style>