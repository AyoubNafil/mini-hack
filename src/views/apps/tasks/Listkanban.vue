<script>
import { executeQuery, updateSObjects, createSObject, createSObject2,deleteSObject  } from "../../../api/utile.js";

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
        async uploadImage(recordId) {
            const fileInput = document.getElementById('fileInput-'+this.item.Id);
            console.log(fileInput);
            const file = fileInput.files[0];

            if (!file) {
                console.log('Please select an image to upload.', 'error');
                return;
            }


            try {

                const fileName = file.name;
                const fileData = await this.readFileAsBase64(file);
                // Convert the base64 image data to binary
                // const binaryData = Buffer.from(fileData, 'base64');

                const attachment = {
                    ParentId: recordId,
                    Name: fileName,
                    Body: fileData,
                    ContentType: file.type
                };
                console.log('Attachment', attachment);
                return new Promise((resolve, reject) => {
                createSObject2('Attachment', attachment).then((newAttachmentId) => {
                    attachment.Id=newAttachmentId;
                    console.log('Image uploaded successfully.', 'success',attachment);
                    resolve (attachment);
                })
                .catch((error) => {
                    // Handle any errors that occurred
                    reject(error);
                    console.error(error);
                });
            });

            } catch (error) {
                console.log('Error uploading image: ' + error.message, 'error');
                return null;
            }
        },
        async deleteTask(id) {
            // Use the `id` parameter in your logic here
            console.log("Deleting List with ID:", id);

            try {

                await deleteSObject("Card__c", id);
                this.$emit("reloadList", id);
                this.modalShow3 = false;
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }

            // Rest of your delete task logic...
        },
        readFileAsBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (event) => {
                    resolve(event.target.result.split(',')[1]);
                };

                reader.onerror = (event) => {
                    reject(event.target.error);
                };

                reader.readAsDataURL(file);
            });
        },
        async addNewTask() {

            //console.log(tasks);
            //const name = document.getElementById("sub-tasks").value;
            //console.log({Name:name, Type__c:this.item.Id});
            try {
                //console.log({Name:name, Type__c:this.item.Id});
                //await createSObject("Task__c",{Name:this.taskTitle, Type__c:this.item.Id});
                const data = { Name: this.taskTitle, Type__c: this.item.Id }
                createSObject2("Task__c", data).then(async (newTaskId) => {
                    // Handle the query result

                    // Callback function called on success
                    //window.location.reload();
                    await this.uploadImage(newTaskId).then(async (attachments) => {

                        console.log("attachments: ", [attachments]);
                        //console.log({ Id: newTaskId, ...data });
                        this.newTaskData = { Id: newTaskId, ...data };
                        //const aaa = await executeQuery(`SELECT Id, Name, ContentType, Body, ParentId FROM Attachment WHERE ParentId = '${newTaskId}'`);
                        //console.log("aaa",aaa);
                        this.newTaskData.attachments = [attachments];
                        console.log("newTaskData: ", this.newTaskData);
                        this.task.push(this.newTaskData);
                        this.modalShow2 = false;

                        const element = document.getElementById(this.item.Id);
                        element.classList.remove('noTask');
                        
                    })
                        .catch((error) => {
                            // Handle any errors that occurred
                            console.error(error);
                        });


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
        async fetchAttachmentsForTasks() {
            try {
                // Construct a list of Task__c IDs from the fetched tasks
                const taskIds = this.task.map((task) => `'${task.Id}'`).join(',');

                // Query attachments related to the tasks
                const attachments = await executeQuery(`
                    SELECT Id, Name, ContentType, Body, ParentId
                    FROM Attachment
                    WHERE ParentId IN (${taskIds})
                    `);

                // Group attachments by their ParentId (Task__c Id)
                const attachmentsByTaskId = {};
                attachments.forEach((attachment) => {
                    const parentId = attachment.ParentId;
                    if (!attachmentsByTaskId[parentId]) {
                        attachmentsByTaskId[parentId] = [];
                    }
                    attachmentsByTaskId[parentId].push(attachment);
                });

                // Assign the attachments to the corresponding tasks
                this.task.forEach((task) => {
                    task.attachments = attachmentsByTaskId[task.Id] || [];
                });

                console.log("Tasks with attachments:", this.task);
            } catch (error) {
                console.log("Error occurred while fetching attachments:", error);
            }
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

                this.fetchAttachmentsForTasks();

                if (this.task.length == 0) {

                    const element = document.getElementById(this.item.Id);
                    element.classList.add('noTask');
                }
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }
        },

        handleReloadListTask(idToDelete) {

            console.log(idToDelete);
            console.log("old", this.task);
            const indexToDelete = this.task.findIndex(item => item.Id === idToDelete);
            if (indexToDelete !== -1) {
                this.task.splice(indexToDelete, 1);
            }
            console.log("new", this.task);
            if (this.task.length == 0) {

                const element = document.getElementById(this.item.Id);
                element.classList.add('noTask');
            }



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
                        <span class="fw-medium text-muted fs-12">Menu<i class="mdi mdi-chevron-down ms-1"></i></span>
                    </b-link>
                    <div class="dropdown-menu dropdown-menu-end">
                        <button class="dropdown-item" @click="modalShow3 = !modalShow3"><i
                                class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                            Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div data-simplebar class="tasks-wrapper px-3 mx-n3">
            <div :id="item.Id" class="tasks">


                <TaskItem v-for="(item, index) of this.task" :key="index" :item="item"
                    @reloadListTask="handleReloadListTask" />

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
                    <input class="form-control" type="file" :id="'fileInput-'+item.Id">
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

    <b-modal v-model="modalShow3" id="deleteTask" modal-class="zoomIn" hide-footer class="v-modal-custom" centered>
        <div class="mt-2 text-center">
            <lottie class="avatar-xl" colors="primary:#f7b84b,secondary:#f7666e" :options="defaultOptions" :height="100"
                :width="100" />
            <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                <h4>Are you sure ?</h4>
                <p class="text-muted mx-4 mb-0">Are you sure you want to remove this tasks ?</p>
            </div>
        </div>
        <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
            <b-button type="button" variant="light" class="w-sm" data-bs-dismiss="modal">Close</b-button>
            <b-button type="button" variant="danger" class="w-sm" id="delete-record" @click="deleteTask(item.Id)">Yes,
                Delete It!</b-button>
        </div>
    </b-modal>
</template>