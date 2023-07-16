<script>


export default {
    props: ['title'],
    setup(props) {
        console.log(props.title)
    },

    data() {
        return {
            modalShow2: false,
            modalShow3: false,
            unassigned: [
                {
                    title: "Profile Page Satructure",
                    description: "Profile Page means a web page accessible to the public or to guests.",
                    features: ["Admin"],
                    users: [require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-5.jpg")],
                    id: "#VL2436",
                    watch: "04",
                    message: "19",
                    file: "2"
                },
                {
                    title: "Velzon - Admin Layout Design",
                    description: "The dashboard is the front page of the Administration UI.",
                    features: ["Layout", "Admin", "Dashboard"],
                    users: [require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-1.jpg")],
                    id: "#VL2436",
                    watch: "04",
                    message: "19",
                    file: "2",
                    date: " 07 Jan, 2022"
                }
            ],

        };
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

        addNewTask() {
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
        }
    }

}
</script>

<template>
    <div class="tasks-list ">
        <div class="d-flex mb-3">
            <div class="flex-grow-1">
                <h6 class="fs-14 text-uppercase fw-semibold mb-0">Unassigned <b-badge tag="small" variant="success"
                        class="align-bottom ms-1">2</b-badge></h6>
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
            <div id="test-task" class="tasks">

                <b-card no-body class="tasks-box" v-for="(data, index) of unassigned" :key="index">
                    <b-card-body>
                        <div class="d-flex mb-2">
                            <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                <router-link to="/apps/tasks-details" class="d-block text-reset">{{ data.title
                                }}</router-link>
                            </h6>
                            <div class="dropdown">
                                <b-link href="javascript:void(0);" class="text-muted" id="dropdownMenuLink1"
                                    data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></b-link>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li>
                                        <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                        </router-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="#"><i
                                                class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                            Edit</b-link>
                                    </li>
                                    <li>
                                        <div class="dropdown-item" @click="deleteTask" ><i
                                                class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                            Delete</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p class="text-muted">{{ data.description }}</p>
                        <div class="mb-3">
                            <div class="d-flex mb-1">
                                <div class="flex-grow-1">
                                    <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                        100%</h6>
                                </div>
                                <div class="flex-shrink-0">
                                    <span class="text-muted">{{ data.date }}</span>
                                </div>
                            </div>
                            <div class="progress rounded-3 progress-sm">
                                <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <b-badge variant="soft-primary" class="badge-soft-primary me-1"
                                    v-for="(item, index) of data.features" :key="index">{{ item }}</b-badge>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="avatar-group">
                                    <b-link href="javascript: void(0);" v-for="(item, index) of data.users" :key="index"
                                        class="avatar-group-item" v-b-tooltip.hover title="Alexis">
                                        <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                    </b-link>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-footer class="border-top-dashed">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <h6 class="text-muted mb-0">#VL2436</h6>
                            </div>
                            <div class="flex-shrink-0">
                                <ul class="link-inline mb-0">
                                    <li class="list-inline-item">
                                        <b-link href="javascript:void(0)" class="text-muted"><i
                                                class="ri-eye-line align-bottom"></i> 04</b-link>
                                    </li>
                                    <li class="list-inline-item">
                                        <b-link href="javascript:void(0)" class="text-muted"><i
                                                class="ri-question-answer-line align-bottom"></i> 19
                                        </b-link>
                                    </li>
                                    <li class="list-inline-item">
                                        <b-link href="javascript:void(0)" class="text-muted"><i
                                                class="ri-attachment-2 align-bottom"></i> 02</b-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </b-card-footer>
                </b-card>

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
                    <label for="projectName" class="form-label">Project Name</label>
                    <input type="text" class="form-control" id="projectName" placeholder="Enter project name">
                </b-col>
                <b-col lg="12">
                    <label for="sub-tasks" class="form-label">Task Title</label>
                    <input type="text" class="form-control" id="sub-tasks" placeholder="Task title">
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
                                            <img src="@/assets/images/users/avatar-1.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-3.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-6.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-2.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-7.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-5.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-8.jpg" alt=""
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
                                            <img src="@/assets/images/users/avatar-10.jpg" alt=""
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

                    <flat-pickr v-model="date1" placeholder="Select date" class="form-control">
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
            <b-button type="button" variant="danger" class="w-sm" id="delete-record">Yes, Delete It!</b-button>
        </div>
    </b-modal>
</template>