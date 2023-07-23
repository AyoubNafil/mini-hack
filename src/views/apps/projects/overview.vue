<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import { executeQuery, createSObject } from "../../.././api/utile.js";
import Swal from "sweetalert2";
import kanban from "../tasks/kanban.vue";

export default {
    methods: {
        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        },
    },
    page: {
        title: "Overview",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
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
            firstnameInput: "",
            lastnameInput: "",
            emailInput: "",
            modalShow: false,
            project: [],
        };

    },
    components: {
        Layout,
        kanban
    }, async mounted() {
        try {

            this.getProjectDetail();
            // Fetch team members' data from the API
            this.teamMembers = await this.fetchTeamMembersData();
        } catch (error) {
            console.error('Error fetching team members data:', error);
        }
    },
    methods: {
        async getProjectDetail() {
            try {
                const ProjectId = this.$route.params.id;

                this.project = await executeQuery("SELECT Id,Name,CreatedDate ,OwnerId,Status__c,Company__c,Deadline__c,Description__c ,priority__c FROM board__c where id = " + "'" + ProjectId + "'");
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
    },
    mounted() {
        this.getProjectDetail();

    }
};

</script>
<style>
.description-container {
    position: relative;
    max-height: 5em;
    /* Set the max-height to five lines or any desired height */
    overflow: hidden;
}

.description-container.expanded {
    max-height: none;
}

.show-more-button {
    text-align: center;
    margin-top: 5px;
}
</style>
In this code, the description container is limited to five lines using CSS by setting the max-height and overflow properties. We use Vue.js to toggle the visibility of the full description by updating the showFullDescription data property when the "Show More" button is clicked. When showFullDescription is false, the description is truncated to five lines, and the "Show More" button is displayed. When showFullDescription is true, the container is expanded to show the full description.

Please adjust the height in the CSS to match the desired number of lines or pixels. This way, you can show a summary of the description and expand it when the user clicks the "Show More" button.







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
                                                                            <i class="ri-folder-zip-line"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="fs-13 mb-1">
                                                                        <b-link href="#"
                                                                            class="text-body text-truncate d-block">App
                                                                            pages.zip</b-link>
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
                                                    <b-col xxl="4" lg="6">
                                                        <div class="border rounded border-dashed p-2">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0 me-3">
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light text-secondary rounded fs-24">
                                                                            <i class="ri-file-ppt-2-line"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="fs-13 mb-1">
                                                                        <b-link href="#"
                                                                            class="text-body text-truncate d-block">
                                                                            Velzon
                                                                            admin.ppt</b-link>
                                                                    </h5>
                                                                    <div>2.4MB</div>
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
                                        <h5 class="card-title mb-4">Skills</h5>
                                        <div class="d-flex flex-wrap gap-2 fs-16">
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">UI/UX</b-badge>
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">Figma</b-badge>
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">HTML</b-badge>
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">CSS</b-badge>
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">Javascript</b-badge>
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">C#</b-badge>
                                            <b-badge variant="soft-secondary" tag="div"
                                                class="fw-medium badge-soft-secondary">Nodejs</b-badge>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex border-bottom-dashed">
                                        <b-card-title class="mb-0 flex-grow-1">Members</b-card-title>
                                        <div class="flex-shrink-0">
                                            <b-button type="button" variant="soft-danger" size="sm"><i
                                                    class="ri-share-line me-1 align-bottom"></i> Invite Member
                                            </b-button>
                                        </div>
                                    </b-card-header>

                                    <b-card-body>
                                        <div data-simplebar style="height: 235px;" class="mx-n3 px-3">
                                            <div class="vstack gap-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img src="@/assets/images/users/avatar-2.jpg" alt=""
                                                            class="img-fluid rounded-circle">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link href="#" class="text-body d-block">Nancy Martino
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light" size="sm">Message
                                                            </b-button>
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
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <div class="avatar-title bg-soft-danger text-danger rounded-circle">
                                                            HB
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link href="#" class="text-body d-block">Henry Baird
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light" size="sm">Message
                                                            </b-button>
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
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img src="@/assets/images/users/avatar-3.jpg" alt=""
                                                            class="img-fluid rounded-circle">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link href="#" class="text-body d-block">Frank Hook
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light" size="sm">Message
                                                            </b-button>
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
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img src="@/assets/images/users/avatar-4.jpg" alt=""
                                                            class="img-fluid rounded-circle">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link href="#" class="text-body d-block">Jennifer Carter
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light" size="sm">Message
                                                            </b-button>
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
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <div
                                                            class="avatar-title bg-soft-success text-success rounded-circle">
                                                            AC
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link href="#" class="text-body d-block">Alexis Clarke
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light" size="sm">Message
                                                            </b-button>
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
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img src="@/assets/images/users/avatar-7.jpg" alt=""
                                                            class="img-fluid rounded-circle">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link href="#" class="text-body d-block">Joseph Parker
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button type="button" variant="light" size="sm">Message
                                                            </b-button>
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
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
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
                                                                <i class="ri-folder-zip-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link href="#" class="text-body text-truncate d-block">
                                                                App-pages.zip</b-link>
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

                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-file-ppt-2-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link href="#" class="text-body text-truncate d-block">
                                                                Velzon-admin.ppt</b-link>
                                                        </h5>
                                                        <div>2.4MB</div>
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

                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-folder-zip-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link href="#" class="text-body text-truncate d-block">
                                                                Images.zip</b-link>
                                                        </h5>
                                                        <div>1.2MB</div>
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

                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-image-2-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link href="#" class="text-body text-truncate d-block">
                                                                bg-pattern.png</b-link>
                                                        </h5>
                                                        <div>1.1MB</div>
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
                        <b-row class="g-4 mb-3">
                            <b-col sm>
                                <div class="d-flex">
                                    <div class="search-box me-2">
                                        <input type="text" class="form-control" placeholder="Search member...">
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
                        <div v-for="(member, index) of teamMembers" :key="index" class="team-list list-view-filter">

                            <b-card no-body class="team-box">
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button type="button" class="btn fs-16 p-0 favourite-btn">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link href="javascript:void(0);" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
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
                                            </b-row>
                                        </div>
                                        <b-col lg="4" cols>
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                        class="img-fluid d-block rounded-circle" />
                                                </div>
                                                <div class="team-content">
                                                    <b-link href="#" class="d-block">
                                                        <h5 class="fs-16 mb-1">{{ member.name }}</h5>
                                                    </b-link>
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
                                                <router-link to="/pages/profile" class="btn btn-light view-btn">View
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
                                <ul
                                    class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
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
                    </div>

                    <div class="tab-pane fade" id="project-tasks" role="tabpanel">
                        <kanban :id=this.$route.params.id></kanban>

                    </div>
                </div>
            </b-col>
        </b-row>
    </Layout>

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
</template>