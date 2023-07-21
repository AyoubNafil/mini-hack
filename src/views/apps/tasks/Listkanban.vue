<script>
import { executeQuery, updateSObjects,createSObject,createSObject2 } from "../../../api/utile.js";

import TaskItem from "./TaskItem.vue"
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css"

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
       // newCardData: Object,
    },
//     watch: {
//     newCardData: {
//       handler(newData) {
//         // Check if the newCardData is not empty and add it to the task list
//         if (newData && newData.Id) {
//           console.log(this.cc);
//           this.cc.push(newData);
//           console.log(this.cc);
//         }
//       },
//       immediate: true, // This ensures the watch is triggered immediately when the component is created
//     },
//   },
    data() {
        return {

            modalShow2: false,
            modalShow3: false,
            task: [],
            newTaskData: null,
            taskTitle: '',

        };
    },



    mounted() {
        this.fetchData();

        const element = document.getElementById(this.item.Id);
        if (element) { this.$emit("registerTask", element); }






    },
    methods: {
        deleteTask() {
            this.modalShow3 = true;
            document.getElementById("deleteTask")
            addEventListener("click", (e) => {
                document
                    .getElementById("delete-record")
                    .addEventListener("click", () => {
                        if (e.target.closest('.tasks-list')) {
                            e.target.closest('.tasks-list').remove();
                        }
                        this.modalShow3 = false;
                    });
            });
        },

        async addNewTask() {
            
             //console.log(tasks);
             //const name = document.getElementById("sub-tasks").value;
             //console.log({Name:name, Type__c:this.item.Id});
             try { 
                //console.log({Name:name, Type__c:this.item.Id});
                //await createSObject("Task__c",{Name:this.taskTitle, Type__c:this.item.Id});
                const data = {Name:this.taskTitle, Type__c:this.item.Id}
                createSObject2("Task__c",data).then((newTaskId) => {
                // Handle the query result
               
                // Callback function called on success
                //window.location.reload();
                console.log({ Id: newTaskId, ...data });
                this.newTaskData = { Id: newTaskId, ...data };

                this.task.push(this.newTaskData);
                this.modalShow2=false;

            })
                .catch((error) => {
                    // Handle any errors that occurred
                    console.error(error);
                });
                //this.$emit("reloadListkanban");
             } catch (error) {
                console.log("Error occurred while executing query:", error);

            }

            //console.log(document.getElementById("due-date").value);
            // const inputDate = document.getElementById("due-date").value;
            // const dateParts = inputDate.split("-"); // Split the input date into parts
            // const year = dateParts[0];
            // const month = new Date(dateParts[1] + " 01, 2000").toLocaleString("en-us", { month: "short" });
            // const day = dateParts[2];

            // const formattedDate = `${day} ${month} ${year}`;
            // console.log(formattedDate); // Output: "25 Jul 2023"
            ///////////////////////////////////////////////////////////////////////////////////////////////
            // var projectName = document.getElementById("projectName").value;
            // var sub_tasks = document.getElementById("sub-tasks").value;
            // var task_description = document.getElementById("task-description").value;
            // var formFile = document.getElementById("formFile").value;
            // var due_date = document.getElementById("due-date").value;
            // var categories = document.getElementById("categories").value;
            // var tasks_progress = document.getElementById("tasks-progress").value;

            // var list = document.querySelectorAll('.tasks-list');
            // list.forEach(element => {
            //     // var listName = element.childNodes[0].childNodes[0].children[0].childNodes[0].data;
            //     // console.log(listName)
            // })

            // for (var k in list) {
            //     if (list) {
            //         var n = k;
            //         var listName = list[k].childNodes[0].childNodes[0].children[k].childNodes[0];
            //         console.log(listName)
            //         console.log('n',n)
            //     }
            // }
        },

        async fetchData() {
            try {

                this.task = await executeQuery(`SELECT Id, Name, Placement__c FROM Task__c WHERE Type__c = '${this.item.Id}'`);
                if (this.task) {
                    this.task.sort((a, b) => a.Placement__c - b.Placement__c);
                    //console.log(this.task);
                    //console.log(this.task.length);
                } else {
                    console.log("Empty");
                }
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }
        },

        handleReloadListTask(idToDelete){
            
            console.log(idToDelete);
            console.log("old",this.task);
            const indexToDelete = this.task.findIndex(item => item.Id === idToDelete);
            if (indexToDelete !== -1) {
                this.task.splice(indexToDelete, 1);
            }
            console.log("new",this.task);
        }
    },

    components: {
        TaskItem,
        flatPickr
    },

}
</script>

<template>
    <div class="tasks-list " :id="'tasks-list-' + item.Id">
        <div class="d-flex mb-3">
            <div class="flex-grow-1">
                <h6 class="fs-14 text-uppercase fw-semibold mb-0">{{ item.Name }}<b-badge tag="small" variant="success"
                        class="align-bottom ms-1">{{ this.task.length }}</b-badge></h6>
            </div>
            <div class="flex-shrink-0">
                <div class="dropdown card-header-dropdown">
                    <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span class="fw-medium text-muted fs-12">Priority<i class="mdi mdi-chevron-down ms-1"></i></span>
                    </b-link>
                    <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">Priority</b-link>
                        <b-link class="dropdown-item" href="#">Date Added</b-link>
                    </div>
                </div>
            </div>
        </div>
        <div data-simplebar class="tasks-wrapper px-3 mx-n3">
            <div :id="item.Id" class="tasks">


                <TaskItem v-for="(item, index) of this.task" :key="index" :item="item" @reloadListTask="handleReloadListTask"   />

            </div>
        </div>
        <div class="my-3">
            <b-button variant="soft-info" class="w-100" @click="modalShow2 = !modalShow2">Add More</b-button>
        </div>
    </div>

    <b-modal v-model="modalShow2" header-class="p-3 bg-soft-info" content-class="border-0" hide-footer
        title="Create New Task" class="v-modal-custom" size="lg" centered>
        <b-form action="#">
            <b-row class="g-3">

                <b-col lg="12">
                    <label for="sub-tasks" class="form-label">Task Title</label>
                    <input v-model="taskTitle" type="text" class="form-control" id="sub-tasks" placeholder="Task title">
                </b-col>
                <b-col lg="12">
                    <label for="task-description" class="form-label">Task Description</label>
                    <textarea class="form-control" id="task-description" rows="3"></textarea>
                </b-col>
                <b-col lg="12">
                    <label for="formFile" class="form-label">Tasks Images</label>
                    <input class="form-control" type="file" id="formFile">
                </b-col>
                <b-col lg="12">
                    <label for="tasks-progress" class="form-label">Add Team Member</label>
                    <div data-simplebar style="height: 95px;">
                        <ul class="list-unstyled vstack gap-2 mb-0">
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="anna-adame">
                                    <label class="form-check-label d-flex align-items-center" for="anna-adame">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Anna Adame
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="frank-hook">
                                    <label class="form-check-label d-flex align-items-center" for="frank-hook">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Frank Hook
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="alexis-clarke">
                                    <label class="form-check-label d-flex align-items-center" for="alexis-clarke">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Alexis Clarke
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="herbert-stokes">
                                    <label class="form-check-label d-flex align-items-center" for="herbert-stokes">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Herbert Stokes
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="michael-morris">
                                    <label class="form-check-label d-flex align-items-center" for="michael-morris">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Michael Morris
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="nancy-martino">
                                    <label class="form-check-label d-flex align-items-center" for="nancy-martino">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Nancy Martino
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="thomas-taylor">
                                    <label class="form-check-label d-flex align-items-center" for="thomas-taylor">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Thomas Taylor
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input me-3" type="checkbox" value="" id="tonya-noble">
                                    <label class="form-check-label d-flex align-items-center" for="tonya-noble">
                                        <span class="flex-shrink-0">
                                            <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                class="avatar-xxs rounded-circle" />
                                        </span>
                                        <span class="flex-grow-1 ms-2">
                                            Tonya Noble
                                        </span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </b-col>
                <b-col lg="4">
                    <label for="due-date" class="form-label">Due Date</label>

                    <flat-pickr id="due-date" v-model="date1" placeholder="Select date" class="form-control">
                    </flat-pickr>
                </b-col>
                <b-col lg="4">
                    <label for="categories" class="form-label">Tags</label>
                    <input type="text" class="form-control" id="categories" placeholder="Enter tag">
                </b-col>
                <b-col lg="4">
                    <label for="tasks-progress" class="form-label">Tasks Progress</label>
                    <input type="text" class="form-control" maxlength="3" id="tasks-progress" placeholder="Enter progress">
                </b-col>
                <div class="mt-4">
                    <div class="hstack gap-2 justify-content-end">
                        <b-button type="button" variant="light" @click="modalShow2 = false">Close</b-button>
                        <b-button type="button" variant="success" @click="addNewTask">Add Task</b-button>
                    </div>
                </div>
            </b-row>
        </b-form>
    </b-modal>

    
</template>