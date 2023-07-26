<script>
import { deleteSObject, requestSF,fetchAndDisplayImage,getImageUrl } from "../../../api/utile.js";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/gsqxdxog.json";
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            features: ["Layout", "Admin", "Dashboard"],
            users: [require("@/assets/images/users/Trailblazer_avatar.png"), require("@/assets/images/users/Trailblazer_avatar.png"), require("@/assets/images/users/Trailblazer_avatar.png")],
            id: "#TS0001",
            date: " 07 Jan, 2022",
            modalShow3: false,
            defaultOptions: { animationData: animationData },
            imageDataURL: ''
        };
    },

    components: {

        lottie: Lottie,

    },
    mounted() {
        console.log("render");
        //fetchAndDisplayImage("00P8d00000F2qKVEAZ");
        //console.log(getImageUrl("00P8d00000F2qKVEAZ"));
        //this.getImageUrl(this.item.attachments);
    },
    methods: {

        getImageUrl(attachment) {
            console.log("dddddddddddd1");
            if (attachment) {
                console.log("dddddddddddd2");
                if (attachment.length > 0) {
                   console.log(attachment);

                    //console.log("dddddddddddd3");
                    try {
                        const hhh = getImageUrl(attachment[0].Id);
                        // //console.log("dddddddddddd4");
                        // const attachmentData = await requestSF(attachment[0].Body);
                        // //console.log(base64_encode(attachmentData.toString('base64'))); // Fetch the attachment content
                        // const base64Data = Buffer.from(attachmentData, 'binary').toString('base64'); // Convert the Buffer to a base64 string
                        // const contentType = attachment[0].ContentType;
                        // const dataURL = `data:${contentType};base64,${base64Data}`;
                        // console.log('dataURL: ', dataURL);
                        //this.imageDataURL = hhh; // Set the imageDataURL property with the data URL
                        return hhh;


                    } catch (error) {
                        console.log("Error occurred while executing query:", error);
                        
                    }
                } else {
                    //this.imageDataURL = ''; // Reset the imageDataURL property if no attachment
                    return '';
                }
            }

        },
        async deleteTask(id) {
            // Use the `id` parameter in your logic here
            console.log("Deleting task with ID:", id);

            try {

                await deleteSObject("Task__c", id);
                this.$emit("reloadListTask", id);
                this.modalShow3 = false;
            } catch (error) {
                console.log("Error occurred while executing query:", error);

            }

            // Rest of your delete task logic...
        },
    }



}
</script>

<template>
    <b-card no-body class="tasks-box" :id=item.Id>
        <b-card-body>
            <div class="d-flex mb-2">
                <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                    <router-link :to="`/apps/tasks-details/${item.Id}`" class="d-block text-reset">{{ item.Name
                    }}</router-link>
                </h6>
                <div class="dropdown">
                    <b-link href="javascript:void(0);" class="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                        aria-expanded="false"><i class="ri-more-fill"></i></b-link>
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
                            <button class="dropdown-item" @click="modalShow3 = !modalShow3"><i
                                    class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text-muted">Long Description of The Task</p>
            
            <img :src="this.getImageUrl(this.item.attachments)" alt="Attachment" class="tasks-img rounded" />
            <div class="mb-3">
                <div class="d-flex mb-1">
                    <div class="flex-grow-1">
                        <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                            100%</h6>
                    </div>
                    <div class="flex-shrink-0">
                        <span class="text-muted">{{ this.date }}</span>
                    </div>
                </div>
                <div class="progress rounded-3 progress-sm">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <b-badge variant="soft-primary" class="badge-soft-primary me-1" v-for="(item, index) of this.features"
                        :key="index">{{ item }}</b-badge>
                </div>
                <div class="flex-shrink-0">
                    <div class="avatar-group">
                        <b-link href="javascript: void(0);" v-for="(item, index) of this.users" :key="index"
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
                    <h6 class="text-muted mb-0">{{ this.id }}</h6>
                </div>
                <div class="flex-shrink-0">
                    <ul class="link-inline mb-0">
                        <li class="list-inline-item">
                            <b-link href="javascript:void(0)" class="text-muted"><i class="ri-eye-line align-bottom"></i>
                                04</b-link>
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



