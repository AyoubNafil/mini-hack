<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import { CheckCircleIcon, AlertOctagonIcon } from "@zhuowenli/vue-feather-icons";
import { CountTo } from "vue3-count-to";
import animationData from "@/components/widgets/msoeawqm.json";
import Lottie from "@/components/widgets/lottie.vue";
import Swal from "sweetalert2";
import { executeQuery } from "../../api/utile";

export default {
  page: {
    title: "API Key",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "API Key",
      items: [
        {
          text: "Apps",
          href: "/",
        },
        {
          text: "API Key",
          active: true,
        },
      ],
      createApiModal: false,
      page: 1,
      perPage: 8,
      pages: [],
      api: [],
      apikeydata: [],
      defaultOptions: {
        animationData: animationData
      },
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.apikeydata);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.name.toLowerCase().includes(search) ||
            data.designation.toLowerCase().includes(search) ||
            data.postDate.toLowerCase().includes(search) ||
            data.description.toLowerCase().includes(search) ||
            data.location.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    apikeydata() {
      this.setPages();
    },
  },
  created() {
    this.setPages();

  },
  async mounted() {
    try {

      this.getApiDetail();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {

    async getApiDetail() {
      try {

        this.api = await executeQuery("SELECT Id,Name,CreatedDate ,Key__c, Token__c FROM api__c");
        //this.api.CreatedDate = this.api.CreatedDate.substring(0, 10);
        if (this.api) {
          console.log(this.api);

        } else {
          console.log("Empty No Api with this id");
        }
      } catch (error) {
        console.log("Error occurred while executing query:", error);

      }
    },
    formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },

    setPages() {
      let numberOfPages = Math.ceil(this.apikeydata.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(apikeydata) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return apikeydata.slice(from, to);
    },

    generateApiID() {
      var d = new Date().getTime();

      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }

      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });

      return uuid;
    },

    handleApikeydetails(e, item) {

      this.createApiModal = true;
      const modalHeader = document.querySelector('.exampleModalLabel');
      const createApibtn = document.getElementById('createApimodal-btn');
      const addbtn = document.getElementById('add-btn');
      const editbtn = document.getElementById('edit-btn');
      const apikeyelement = document.getElementById('apikey-element');

      const apikeyId = document.getElementById("apikeyId");
      const apikeyname = document.getElementById("api-key-name");
      const apikey = document.getElementById("api-key");
      if (e.target.id == "createApi-btn" || e.target.id == "addApi-btn") {
        document.getElementById("addform").reset();

        modalHeader.innerHTML = "Create API Key";
        createApibtn.style.display = 'block';
        apikeyelement.style.display = 'none';
        addbtn.style.display = 'none';
        editbtn.style.display = 'none';

      } else if (e.target.id == "edit-item-btn") {
        modalHeader.innerHTML = "Rename API name";
        createApibtn.style.display = 'none';
        addbtn.style.display = 'none';
        editbtn.style.display = 'block';
        apikeyelement.style.display = 'block';

        apikeyId.value = item.id;
        apikeyname.value = item.name;
        apikey.value = item.apikey;

      } else if (e.target.id == "regenerate-api-btn") {
        modalHeader.innerHTML = "Regenerate API";
        createApibtn.style.display = 'none';
        addbtn.style.display = 'none';
        editbtn.style.display = 'block';
        apikeyelement.style.display = 'block';

        apikeyId.value = item.id;
        apikeyname.value = item.name;
        apikey.value = this.generateApiID();

      } else {
        modalHeader.innerHTML = "Create API Key";
        if (apikeyname.value != (null || "")) {
          createApibtn.style.display = 'none';
          apikeyelement.style.display = 'block';
          addbtn.style.display = 'block';
          editbtn.style.display = 'none';
          apikey.value = this.generateApiID();
        } else {
          document.getElementById("api-key-error-msg").classList.remove("d-none");
          document.getElementById("api-key-error-msg").classList.add("d-block");

          setTimeout(() => {
            document.getElementById("api-key-error-msg").classList.add("d-none");
            document.getElementById("api-key-error-msg").classList.remove("d-block");
          }, "2000");

        }
      }
    },

    handleApiKeys() {
      var id = this.apikeydata.length + 1;
      var apikeyname = document.getElementById('api-key-name').value;
      var apikey = document.getElementById('api-key').value;

      if (document.querySelector('.exampleModalLabel').innerHTML == "Create API Key") {
        if (id != null && apikeyname != null && apikey != null) {
          const data = {
            id: id,
            name: apikeyname,
            createby: "Anna Adame",
            status: "Active",
            apikey: apikey,
            create_date: new Date().toUTCString().slice(5, 16),
            expiry_date: new Date().toUTCString().slice(5, 16)
          };
          document.getElementById("close-modal").click();
          this.apikeydata.unshift(data);
        }
        document.getElementById("addform").reset();
      } else if (document.querySelector('.exampleModalLabel').innerHTML == "Rename API name") {
        id = document.getElementById('apikeyId').value;

        this.apikeydata.forEach(element => {
          if (element.id.toString() == id.toString()) {
            element.name = apikeyname;
          }
        });
        document.getElementById("close-modal").click();
      } else {
        id = document.getElementById('apikeyId').value;

        this.apikeydata.forEach(element => {
          if (element.id.toString() == id.toString()) {
            element.apikey = apikey;
          }
        });
        document.getElementById("close-modal").click();
      }
    },
    deleteApikey(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.apikeydata.splice(this.apikeydata.indexOf(event), 1);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },

    changestatus(data) { data.status == "Active" ? data.status = "Disable" : data.status = "Active"; }

  },
  components: {
    Layout,
    PageHeader,
    CountTo,
    CheckCircleIcon,
    AlertOctagonIcon,
    lottie: Lottie,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row>
      <b-col lg="4">
        <b-card no-body class="card-height-100">
          <b-card-body>
            <h5 class="card-title mb-3">Developer Plan</h5>
            <div class="progress animated-progress custom-progress mb-1">
              <div class="progress-bar bg-info" role="progressbar" style="width: 38%" aria-valuenow="38" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <p class="text-muted mb-2">You used 215 of 2000 of your API</p>
            <div class="text-end">
              <b-link class="btn btn-secondary button create-btn btn-sm" type="button" id="createApi-btn"
                @click="(e) => handleApikeydetails(e)">Create API Key</b-link>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="4">
        <b-card no-body class="card-animate card-height-100">
          <b-card-body>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">Successful conversions</p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to :startVal='0' :endVal='50' :duration='5000'></count-to>
                </h2>
                <p class="mb-0 text-muted"><b-badge class="bg-light text-success mb-0"><i
                      class="ri-arrow-up-line align-middle"></i> 8.24 % </b-badge> 7 last week</p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-soft-success rounded-circle fs-2">
                    <CheckCircleIcon width="24" height="24" class="text-success"></CheckCircleIcon>
                  </span>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="4">
        <b-card no-body class="card-animate card-height-100">
          <b-card-body>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">Failed conversions</p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to :startVal='0' :endVal='8' :duration='5000'></count-to>
                </h2>
                <p class="mb-0 text-muted"><b-badge class="bg-light text-danger mb-0"><i
                      class="ri-arrow-down-line align-middle"></i> 25.87 % </b-badge> 7 last week</p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-soft-danger rounded-circle fs-2">
                    <AlertOctagonIcon width="24" height="24" class="text-danger"></AlertOctagonIcon>
                  </span>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="12">
        <b-card no-body id="apiKeyList">
          <b-card-header class="d-flex align-items-center">
            <h5 class="card-title flex-grow-1 mb-0">API Keys</h5>
            <div class="d-flex gap-1 flex-wrap">
              <b-button variant="soft-danger" id="remove-actions" onClick="deleteMultiple()"><i
                  class="ri-delete-bin-2-line"></i>
              </b-button>
              <b-link class="btn btn-primary button create-btn" type="button" id="addApi-btn"
                @click="(e) => handleApikeydetails(e)"><i class="ri-add-line align-bottom me-1"></i>
                Add </b-link>
            </div>
          </b-card-header>
          <b-card-body>
            <div>
              <div class="table-responsive table-card mb-3">
                <table class="table align-middle table-nowrap mb-0">
                  <thead class="table-light">
                    <tr>
                      <th scope="col" style="width: 50px;">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="checkAll" value="option">
                        </div>
                      </th>
                      <th class="sort d-none" data-sort="id" scope="col">Id</th>
                      <th class="sort" data-sort="name" scope="col">Name</th>
                      <th class="sort" data-sort="apikey" scope="col">API Key</th>
                      <th class="sort" data-sort="createBy" scope="col">Token</th>
                      <th class="sort" data-sort="status" scope="col">Status</th>
                      <th class="sort" data-sort="create_date" scope="col">Create Date</th>
                      <th class="sort" data-sort="expiry_date" scope="col">Expiry Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody class="list form-check-all">
                    <tr v-for="(data, index) of api" :key="index">
                      <th scope="row">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="chk_child" value="option1">
                        </div>
                      </th>
                      <td class="id" style="display:none;">
                        <b-link href="javascript:void(0);" class="fw-medium link-primary">{{ data.Id }}</b-link>
                      </td>
                      <td class="name">{{ data.Name }}</td>
                      <td class="apikey">
                        <input type="text" class="form-control apikey-value" readonly="" :value="data.Key__c">
                      </td>
                      <td class="token">
                        <input type="text" class="form-control apikey-value" readonly="" :value="data.Token__c">
                      </td>
                      <td class="status"><b-badge variant="badge-soft-success" class="badge-soft-success">Active</b-badge>
                      </td>
                      <td class="create_date">{{ data.CreatedDate.substring(0, 10) }}</td>
                      <td class="expiry_date">{{ data.expiry_date }}</td>
                      <td>
                        <div class="dropdown">
                          <b-button variant="soft-secondary" size="sm" class="dropdown" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ri-more-fill align-middle"></i>
                          </b-button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <b-link class="dropdown-item regenerate-api-btn" id="regenerate-api-btn"  href="javascript:void(0);"
                              @click="createApiModal = !createApiModal">Regenerate Key</b-link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="noresult" style="display: none">
                  <div class="text-center">
                    <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions"
                      :height="75" :width="75" />
                    <h5 class="mt-2">Sorry! No Result Found</h5>
                    <p class="text-muted mb-0">We've searched more than 150+ API Keys We did not find any API for you
                      search.</p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-3">
                <div class="pagination-wrap hstack gap-2">
                  <b-link class="page-item pagination-prev" href="#" v-if="page != 1" @click="page--">
                    Previous
                  </b-link>
                  <ul class="pagination listjs-pagination mb-0">
                    <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
                      v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                      <b-link class="page" href="#">{{ pageNumber }}</b-link>
                    </li>
                  </ul>
                  <b-link class="page-item pagination-next" href="#" @click="page++" v-if="page < pages.length">
                    Next
                  </b-link>
                </div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <!-- Modal -->
    <b-modal v-model="createApiModal" id="showModal" title-class="exampleModalLabel" hide-footer class="v-modal-custom"
      centered no-close-on-backdrop>
      <b-form >
        <div class="mb-3">
          <label for="api-key" class="form-label">API Key Name</label>
          <input type="text" class="form-control" id="api-key" disabled value="b5815DE8A7224438932eb296Z5">
        </div>
        <div class="mb-3">
          <label for="api-key-name" class="form-label">API Key  <span class="text-danger">*</span></label>
          <input type="text" class="form-control" id="api-key-name" placeholder="Enter api key name">
        </div>
        <div class="mb-3">
          <label for="api-key-name" class="form-label">API Token</label>
          <input type="text" class="form-control" id="api-key-name" placeholder="Enter api token">
        </div>
      </b-form>
      <div class="hstack gap-2 justify-content-end mt-3">
        <b-button type="button" variant="secondary" @click="createApiModal = false" id="close-modal">Close</b-button>
        <b-button type="button" variant="primary" id="edit-btn" @click="handleApiKeys">Save Changes</b-button>
      </div>
    </b-modal>
  </Layout>
</template>