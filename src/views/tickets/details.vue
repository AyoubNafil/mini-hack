<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../layouts/main.vue";
import appConfig from "../../../app.config";
import { executeQuery } from "../../api/utile";

export default {
    page: {
        title: "Tickets Details",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            ticket: [],
            board:'',
            task:'',
        };
    },
    components: {
        Layout,
        Multiselect,
    },
  async mounted() {
        try {

            this.getTicketDetail();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    methods: {

async getTicketDetail() {
    try {
        const TicketId = this.$route.params.id;

        this.ticket = await executeQuery("SELECT Id, Name, Task__r.Type__r.Board__r.Name, Task__r.Name, Status__c, Priority__c, LastModifiedDate,  CreatedDate, CreatedBy.Name, DueDate__c, Assigned__r.Name, Code__c, Description__c FROM Ticket__c where Id = " + "'" + TicketId + "'");
        this.ticket = this.ticket[0];
        this.ticket.CreatedDate = this.ticket.CreatedDate.substring(0, 10);
        this.ticket.LastModifiedDate = this.ticket.LastModifiedDate.substring(0, 10);
        this.board = this.ticket.Task__r.Type__r.Board__r.Name
        this.ticket.Assigned__r = this.ticket.Assigned__r.Name
        console.log(this.ticket);
        
        this.task = this.ticket.Task__r.Name
        console.log(this.task);
        
        if (this.ticket) {
            console.log(this.ticket.Name);

        } else {
            console.log("Empty No ticket with this id");
        }
    } catch (error) {
        console.log("Error occurred while executing query:", error);

    }
},
},
};
</script>

<template>
    <Layout>
        <b-row>
            <b-col lg="12">
                <b-card no-body class="mt-n4 mb-n5">
                    <div class="bg-soft-primary">
                        <b-card-body class="pb-4 mb-5">
                            <b-row>
                                <b-col md>
                                    <b-row class="align-items-center">
                                        <b-col md="auto">
                                            <div class="avatar-md mb-md-0 mb-4">
                                                <div class="avatar-title bg-white rounded-circle">
                                                    <img src="@/assets/images/companies/img-4.png" alt=""
                                                        class="avatar-sm" />
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col md>
                                            <h4 class="fw-semibold">{{this.ticket.Name}}
                                            </h4>
                                            <div class="hstack gap-3 flex-wrap">
                                                <div class="text-muted"><i
                                                        class="ri-building-line align-bottom me-1"></i> {{this.task}}
                                                </div>
                                                <div class="vr"></div>
                                                <div class="text-muted">Create Date : <span class="fw-medium">{{this.ticket.CreatedDate}}</span></div>
                                                <div class="vr"></div>
                                                <div class="text-muted">Due Date : <span class="fw-medium">{{this.ticket.DueDate__c}}</span></div>
                                                <div class="vr"></div>
                                                <b-badge pill class="bg-info fs-12">{{this.ticket.Status__c}}</b-badge>
                                                <b-badge pill variant="danger" class="fs-12">{{this.ticket.Priority__c}}</b-badge>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col md="auto" class="mt-md-0 mt-4">
                                    <div class="hstack gap-1 flex-wrap">
                                        <button type="button" class="btn avatar-xs mt-n1 p-0 favourite-btn active">
                                            <span class="avatar-title bg-transparent fs-15">
                                                <i class="ri-star-fill"></i>
                                            </span>
                                        </button>
                                        <b-dropdown variant="transparent" toggle-class="fs-16 text-body arrow-none"
                                            size="sm" no-caret>
                                            <template #button-content> <i class="ri-share-line"></i>
                                            </template>
                                            <b-dropdown-item href="/apps/tickets-details">
                                                <i class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                            </b-dropdown-item>
                                            <b-dropdown-item href="#" @click="editdata(data)">
                                                <i class="ri-share-forward-fill align-bottom me-2 text-muted"></i> Share
                                                with
                                            </b-dropdown-item>
                                            <b-dropdown-item href="#" @click="deletedata(data)">
                                                <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete
                                            </b-dropdown-item>
                                        </b-dropdown>
                                        <button type="button" class="btn py-0 fs-16 text-body">
                                            <i class="ri-flag-line"></i>
                                        </button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="9">
                <b-card no-body>
                    <b-card-body class="p-4">
                        <h6 class="fw-semibold text-uppercase mb-3">Ticket DESCRIPTION</h6>
                        <p class="text-muted">{{this.ticket.Description__c}}
                        </p>
                        <div class="mt-4">
                            <h6 class="fw-semibold text-uppercase mb-3">Code</h6>
                            <div>
                                <pre class="language-markup rounded-2"><code>{{this.ticket.Code__c}}</code></pre>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-body class="p-4">
                        <h5 class="card-title mb-4">Comments</h5>

                        <div data-simplebar style="height: 300px;" class="px-3 mx-n3">
                            <div class="d-flex mb-4">
                                <div class="flex-shrink-0">
                                    <img src="@/assets/images/users/avatar-8.jpg" alt=""
                                        class="avatar-xs rounded-circle" />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5 class="fs-13">Joseph Parker <small class="text-muted">20 Dec 2021 -
                                            05:47AM</small></h5>
                                    <p class="text-muted">I am getting message from customers that when they place order
                                        always get error message .</p>
                                    <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                            class="mdi mdi-reply"></i> Reply</b-link>
                                    <div class="d-flex mt-4">
                                        <div class="flex-shrink-0">
                                            <img src="@/assets/images/users/avatar-10.jpg" alt=""
                                                class="avatar-xs rounded-circle" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="fs-13">Alexis Clarke <small class="text-muted">22 Dec 2021 -
                                                    02:32PM</small></h5>
                                            <p class="text-muted">Please be sure to check your Spam mailbox to see if
                                                your email filters have identified the email from Dell as spam.</p>
                                            <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
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
                                    <h5 class="fs-13">Donald Palmer <small class="text-muted">24 Dec 2021 -
                                            05:20PM</small></h5>
                                    <p class="text-muted">If you have further questions, please contact Customer Support
                                        from the “Action Menu” on your <b-link href="javascript:void(0);"
                                            class="text-decoration-underline">Online Order Support</b-link>.</p>
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
                                    <h5 class="fs-13">Alexis Clarke <small class="text-muted">26 min ago</small></h5>
                                    <p class="text-muted">Your <b-link href="javascript:void(0)"
                                            class="text-decoration-underline">Online Order Support</b-link> provides you
                                        with
                                        the most current status of your order. To help manage your order refer to the
                                        “Action Menu” to initiate return, contact Customer Support and more.</p>
                                    <b-row class="g-2 mb-3">
                                        <b-col lg="1" sm="2" cols="6">
                                            <img src="@/assets/images/small/img-4.jpg" alt="" class="img-fluid rounded">
                                        </b-col>
                                        <b-col lg="1" sm="2" cols="6">
                                            <img src="@/assets/images/small/img-5.jpg" alt="" class="img-fluid rounded">
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
                                            <h5 class="fs-13">Donald Palmer <small class="text-muted">8 sec ago</small>
                                            </h5>
                                            <p class="text-muted">Other shipping methods are available at checkout if
                                                you want your purchase delivered faster.</p>
                                            <b-link href="javascript: void(0);" class="badge text-muted bg-light"><i
                                                    class="mdi mdi-reply"></i> Reply</b-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="javascript:void(0);" class="mt-3">
                            <b-row class="g-3">
                                <b-col lg="12">
                                    <label for="exampleFormControlTextarea1" class="form-label">Leave a Comments</label>
                                    <textarea class="form-control bg-light border-light"
                                        id="exampleFormControlTextarea1" rows="3"
                                        placeholder="Enter comments"></textarea>
                                </b-col>
                                <b-col lg="12" class="text-end">
                                    <b-link href="javascript:void(0);" class="btn btn-secondary">Post Comments</b-link>
                                </b-col>
                            </b-row>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="3">
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Ticket Details</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive table-card">
                            <table class="table table-borderless align-middle mb-0">
                                <tbody>
                                    <tr>
                                        <td class="fw-medium">Ticket</td>
                                        <td>{{this.ticket.Name}}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Task</td>
                                        <td>{{this.task}}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Project</td>
                                        <td> {{this.board}}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Assigned To:</td>
                                        <td>
                                            <div class="avatar-group">
                                                <b-link href="javascript:void(0);" class="avatar-group-item"
                                                    v-b-tooltip.hover :title="`${this.ticket.Assigned__r}`">
                                                    <img src="@/assets/images/users/Trailblazer_avatar.png" alt=""
                                                        class="rounded-circle avatar-xs" />
                                                </b-link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Status:</td>
                                        <td>
                                            <b-badge variant="info">{{this.ticket.Status__c}}</b-badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Priority</td>
                                        <td>
                                            <b-badge variant="danger">{{this.ticket.Priority__c}}</b-badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Create Date</td>
                                        <td>{{this.ticket.CreatedDate}}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Due Date</td>
                                        <td>{{this.ticket.DueDate__c}}</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-medium">Last Activity</td>
                                        <td>{{this.ticket.LastModifiedDate }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-header>
                        <h6 class="card-title fw-semibold mb-0">Files Attachment</h6>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex align-items-center border border-dashed p-2 rounded">
                            <div class="flex-shrink-0 avatar-sm">
                                <div class="avatar-title bg-light rounded">
                                    <i class="ri-file-zip-line fs-20 text-primary"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                    <b-link href="javascript:void(0);">Velzon-admin.zip</b-link>
                                </h6>
                                <small class="text-muted">3.2 MB</small>
                            </div>
                            <div class="hstack gap-3 fs-16">
                                <b-link href="javascript:void(0);" class="text-muted"><i class="ri-download-2-line"></i>
                                </b-link>
                                <b-link href="javascript:void(0);" class="text-muted"><i class="ri-delete-bin-line"></i>
                                </b-link>
                            </div>
                        </div>
                        <div class="d-flex  align-items-center border border-dashed p-2 rounded mt-2">
                            <div class="flex-shrink-0 avatar-sm">
                                <div class="avatar-title bg-light rounded">
                                    <i class="ri-file-ppt-2-line fs-20 text-danger"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                    <b-link href="javascript:void(0);">Velzon-admin.ppt</b-link>
                                </h6>
                                <small class="text-muted">4.5 MB</small>
                            </div>
                            <div class="hstack gap-3 fs-16">
                                <b-link href="javascript:void(0);" class="text-muted"><i class="ri-download-2-line"></i>
                                </b-link>
                                <b-link href="javascript:void(0);" class="text-muted"><i class="ri-delete-bin-line"></i>
                                </b-link>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>