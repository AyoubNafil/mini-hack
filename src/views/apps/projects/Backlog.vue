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
//import Layout from "../../../layouts/main.vue";
//import appConfig from "../../../../app.config";
import { executeQuery } from "../../../api/utile.js";
//import Swal from "sweetalert2";


export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {

            headers: [
                { text: "Name", value: "Name", sortable: true },
                { text: "Description", value: "Description__c", sortable: true },
                { text: "Points", value: "Points__c", sortable: true },
                { text: "Date", value: "Date__c", sortable: true }
            ],
            items: [],
            itemsSelected: [],
            searchValue: "",
            themeColor : "#f48225"
        }
    },
    async mounted() {
        try {
            const ProjectId = this.$route.params.id;
            this.items = await executeQuery(`SELECT Id, Name,Description__c,Points__c ,Date__c FROM Task__c where Type__r.Board__c = '${ProjectId}'`);
           
        } catch (error) {
            console.error('Error fetching team members data:', error);
        }
    },
    methods: {

        
      

       
    },
    components: {
        //VDataTable, // Register the Vuetify component locally in the component
        //VueGoodTable
        //DataTable,
        //Column
    },
    
};
</script>

<template>
    <b-row class="g-4 mb-3">
        <span>Search Value: </span>
        <input type="text" v-model="searchValue" class="my-input form-control" />
        <EasyDataTable v-model:items-selected="itemsSelected" :headers="headers" :items="items" :search-value="searchValue"
            class="my-datatable" :theme-color="themeColor" table-class-name="customize-table"/>
       
    </b-row>

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

.customize-table {

    --easy-table-header-background-color: #e4e7ff;
    --easy-table-header-font-size: 13px;
    --easy-table-body-row-font-size: 13px;

}
</style>