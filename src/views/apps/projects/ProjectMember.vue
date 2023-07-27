<style>
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}

.p-paginator button {
    margin: 0 0.25rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}

.p-paginator button:hover {
    background-color: #f2f2f2;
}

.p-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>

<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import { executeQuery, updateSObjects, createSObject, createSObject2, deleteSObject } from "../../../api/utile.js";
import Swal from "sweetalert2";

//import 'vue-good-table/dist/vue-good-table.css'
//import { VueGoodTable } from 'vue-good-table';

//import Vuetify from 'vuetify';
//import 'vuetify/dist/vuetify.min.css';

//import { VDataTable } from 'vuetify'; // Import the specific Vuetify component
// import { DataTable, Column } from "primevue/datatable";
// import "primevue/resources/themes/nova-light/theme.css";
// import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css";

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
            teamMembers: [],


            //         currentPage: 1,
            //         rows: 5,
            //         paginatorTemplate: `
            //   <div class="p-paginator p-component">
            //     <span class="p-paginator-current">Page {currentPage} of {totalPages}</span>
            //     <button :class="{'p-disabled': currentPage === 1}" @click="firstPage">«</button>
            //     <button :class="{'p-disabled': currentPage === 1}" @click="prevPage">‹</button>
            //     <button :class="{'p-disabled': currentPage === totalPages}" @click="nextPage">›</button>
            //     <button :class="{'p-disabled': currentPage === totalPages}" @click="lastPage">»</button>
            //   </div>
            // `,
            //         users :[
            //             { id: 1, name: "John Doe", age: 30 },
            //             { id: 2, name: "Jane Smith", age: 25 },
            //             // Add more data rows as needed
            //         ],


            // headers: [
            //     { text: 'ID', value: 'id' },
            //     { text: 'Name', value: 'name' },
            //     { text: 'Age', value: 'age' },
            //     // Add more headers as needed
            // ],
            // data: [
            //     { id: 1, name: 'John Doe', age: 30 },
            //     { id: 2, name: 'Jane Smith', age: 25 },
            //     // Add more data items as needed
            // ],

            headers: [
                { text: "Name", value: "Name", sortable: true },
                { text: "UserType", value: "UserType", sortable: true }
            ],
            items: [],
            itemsSelected: [],
            searchValue: "",
        }
    },
    async mounted() {
        try {

            this.items = await executeQuery("SELECT Id, Name, UserType FROM User where IsActive = true");
            // Fetch team members' data from the API
            this.teamMembers = await this.fetchTeamMembersData();
            this.filteredMembers = this.teamMembers;
        } catch (error) {
            console.error('Error fetching team members data:', error);
        }
    },
    methods: {

        async addMemberProject() {
            console.log(this.itemsSelected);

            for (const record of this.itemsSelected) {
                const data = {
                    Name: record.Id,
                    Board__c: this.id,
                    User__c: record.Id
                };

                try {
                    const newMemberBoardId = await createSObject2('Member_Board__c', data);
                   
                    // Fetch team members' data from the API
                    this.teamMembers = await this.fetchTeamMembersData();
                    this.filteredMembers = this.teamMembers;
                    this.modalShow = false;

                } catch (error) {
                    console.error('Error inserting record:', error);
                }
            }

            Swal.fire("Good job!", "Added Successfully!", "success");

        },

        async deleteMemberProject(MemberBoardId) {
            //console.log("ddddd");


            try {
                deleteSObject('Member_Board__c', MemberBoardId);
                Swal.fire("Good job!", "Deleted Successfully!", "success");
                // Fetch team members' data from the API
                //this.teamMembers = await this.fetchTeamMembersData();
                
                const indexToDelete = this.teamMembers.findIndex(item => item.Id === MemberBoardId);
                if (indexToDelete !== -1) {
                    this.teamMembers.splice(indexToDelete, 1);
                }
                this.filteredMembers = this.teamMembers;
            } catch (error) {
                console.error('Error deleting record:', error);
            }
        },
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
        async fetchTeamMembersData() {
            try {
                // Use executeQuery or your API utility to fetch data from the API
                // Replace the below query with your actual query to fetch team members' data
                const test = await executeQuery(`SELECT Id,Board__r.Id, User__r.Id,User__r.Name, User__r.UserType FROM Member_Board__c where Board__c = '${this.id}'`);
                console.log("test: ", test);

                // Format the data to return an array of objects with the required properties
                const teamMembersData = await Promise.all(test.map(async (record) => {
                    //const queryResult = await executeQuery("SELECT Id, Name, UserType FROM User");
                    const activeProjectsRecords = await executeQuery(`SELECT Id FROM Member_Board__c where User__c = '${record.User__r.Id}'`);
                    const newLeadsRecords = await executeQuery(`SELECT Id FROM Member_Task__c where User__c = '${record.User__r.Id}'`);
                    console.log("activeProjectsRecords:", activeProjectsRecords.length);
                    console.log("newLeadsRecords:", newLeadsRecords.length);

                    return {
                        Id: record.Id,
                        name: record.User__r.Name,
                        position: record.User__r.UserType,
                        projects: activeProjectsRecords.length,
                        tasks: newLeadsRecords.length,
                        img: require("@/assets/images/users/Trailblazer_avatar.png"),
                        // Add other properties as needed (e.g., hours, tasks, chartsColor, etc.)
                    };
                }));

                return teamMembersData;
            } catch (error) {
                console.error("Error fetching team members data:", error);
                return []; // Return an empty array in case of an error
            }
        },

        filterMembers() {
            const inputText = this.searchText.trim().toLowerCase();
            this.filteredMembers = this.teamMembers.filter(member => member.name.toLowerCase().includes(inputText));
            console.log(this.filteredMembers);

        },
    },
    components: {
        //VDataTable, // Register the Vuetify component locally in the component
        //VueGoodTable
        //DataTable,
        //Column
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
                                        <b-link class="dropdown-item" href="javascript:void(0);"
                                            @click="deleteMemberProject(member.Id)"><i
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
                <p class="mb-sm-0">Showing 1 to {{displayedMembers.length}} of {{displayedMembers.length}} entries</p>
            </div>
        </b-col>
        <b-col sm="6">
            <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <li class="page-item disabled">
                    <b-link href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></b-link>
                </li>
                <li class="page-item active">
                    <b-link href="#" class="page-link">1</b-link>
                </li>
                <li class="page-item ">
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

        <!-- <vue-good-table :columns="columns" :rows="rows" /> -->
        <!-- <v-data-table :headers="headers" :items="data" :item-key="itemKey" :show-select="true"
            v-model:selected="selectedItems"></v-data-table> -->

        <!-- <v-data-table :headers="headers" :items="data"></v-data-table> -->

        <!-- <v-data-table :headers="headers" :items="data"></v-data-table> -->

        <!-- <div>
            <div class="p-mb-2">
                <h3 class="p-mb-0">Users</h3>
                <p class="p-mt-0">A simple data table with PrimeVue</p>
            </div>

            <DataTable :value="users" :paginator="true" :rows="5" :paginatorTemplate="paginatorTemplate"
                :rowsPerPageOptions="[5, 10, 25]">
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="age" header="Age" sortable></Column>
            </DataTable>
        </div> -->
        <span>Search Value: </span>
        <input type="text" v-model="searchValue" class="my-input form-control" />
        <EasyDataTable v-model:items-selected="itemsSelected" :headers="headers" :items="items" :search-value="searchValue"
            class="my-datatable" />
        <div class="my-button-container">
            <b-button variant="secondary" @click="addMemberProject">
                <i class="ri-add-line align-bottom me-1"></i> Add
            </b-button>
        </div>
    </b-modal>
</template>

<style>
.my-input {
    margin-bottom: 10px;
}

.my-datatable {
    margin-bottom: 20px;
}

.my-button-container {
    display: flex;
    justify-content: flex-end;
}
</style>