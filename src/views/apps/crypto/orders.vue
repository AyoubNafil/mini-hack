<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";

export default {
  components: {
    Layout,
    PageHeader,
    lottie: Lottie,
    Multiselect,
    flatPickr,
  },
  page: {
    title: "Orders",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Orders",
      items: [
        {
          text: "Crypto",
          href: "/",
        },
        {
          text: "Orders",
          active: true,
        },
      ],
      rangeDateconfig: {
        mode: "range",
        dateFormat: "d M, Y",
      },
      date: null,
      date2: null,
      value: null,
      value2: null,
      status: null,
      status1: null,
      searchQuery: null,
      posts: [
        {
          id: 1,
          date: ["02 Jan, 2022", "03:45PM"],
          img: require("@/assets/images/svg/crypto-icons/btc.svg"),
          coinName: "Bitcoin (BTC)",
          type: "Buy",
          typeClass: "success",
          quantity: "08",
          orderValue: "$3,70,683.2",
          avgPrice: "$46,154.30",
          price: "$46,335.40",
          status: "Successful",
          statusClass: "success",
        },
        {
          id: 2,
          date: ["27 Dec, 2021", "02:47PM"],
          img: require("@/assets/images/svg/crypto-icons/eth.svg"),
          coinName: "Ethereum (ETH)",
          type: "Sell",
          typeClass: "danger",
          quantity: "50",
          orderValue: "$1,87,433",
          avgPrice: "$3,744.48",
          price: "$3,748.66",
          status: "Cancelled",
          statusClass: "danger",
        },
        {
          id: 3,
          date: ["19 Dec, 2021", "10:24AM"],
          img: require("@/assets/images/svg/crypto-icons/xmr.svg"),
          coinName: "Monero (XMR)",
          type: "Sell",
          typeClass: "danger",
          quantity: "150",
          orderValue: "$33,982.5",
          avgPrice: "$227.30",
          price: "$226.55",
          status: "Successful",
          statusClass: "success",
        },
        {
          id: 4,
          date: ["19 Dec, 2021", "11:20AM"],
          img: require("@/assets/images/svg/crypto-icons/mkr.svg"),
          coinName: "Maker (MKR)",
          type: "Buy",
          typeClass: "success",
          quantity: "60",
          orderValue: "$1,43,445",
          avgPrice: "$2,470.30",
          price: "$2,390.75",
          status: "Pending",
          statusClass: "warning",
        },
        {
          id: 5,
          date: ["11 Dec, 2021", "02:47PM"],
          img: require("@/assets/images/svg/crypto-icons/yfi.svg"),
          coinName: "Yearn.finance (YFI)",
          type: "Buy",
          typeClass: "success",
          quantity: "25",
          orderValue: "$9,81,906",
          avgPrice: "$37,632.17",
          price: "$39,276.24",
          status: "Cancelled",
          statusClass: "danger",
        },
        {
          id: 6,
          date: ["05 Dec, 2021", "09:20AM"],
          img: require("@/assets/images/svg/crypto-icons/mkr.svg"),
          coinName: "Maker (MKR)",
          type: "Sell",
          typeClass: "danger",
          quantity: "20",
          orderValue: "$50,243",
          avgPrice: "$2,324.65",
          price: "$2,512.15",
          status: "Successful",
          statusClass: "success",
        },
        {
          id: 7,
          date: ["28 Nov, 2021", "11:42AM"],
          img: require("@/assets/images/svg/crypto-icons/ltc.svg"),
          coinName: "Litecoin (LTC)",
          type: "Buy",
          typeClass: "success",
          quantity: "200",
          orderValue: "$29,500",
          avgPrice: "$144.00",
          price: "$147.50",
          status: "Pending",
          statusClass: "warning",
        },
        {
          id: 8,
          date: ["19 Nov, 2021", "03:36PM"],
          img: require("@/assets/images/svg/crypto-icons/xmr.svg"),
          coinName: "Monero (XMR)",
          type: "Sell",
          typeClass: "danger",
          quantity: "75",
          orderValue: "$17,874",
          avgPrice: "$221.61",
          price: "$238.32",
          status: "Successful",
          statusClass: "success",
        },
        {
          id: 9,
          date: ["27 Oct, 2021", "03:36PM"],
          img: require("@/assets/images/svg/crypto-icons/dash.svg"),
          coinName: "Dash (DASH)",
          type: "Buy",
          typeClass: "success",
          quantity: "45",
          orderValue: "$14,962.5",
          avgPrice: "$147.39",
          price: "$142.5",
          status: "Cancelled",
          statusClass: "danger",
        },
        {
          id: 10,
          date: ["27 Oct, 2021", "03:36PM"],
          img: require("@/assets/images/svg/crypto-icons/neo.svg"),
          coinName: "Neo (NEO)",
          type: "Sell",
          typeClass: "danger",
          quantity: "36",
          orderValue: "$77,232.24",
          avgPrice: "$2,274.21",
          price: "$2,145.34",
          status: "Pending",
          statusClass: "warning",
        },
        {
          id: 11,
          date: ["21 Oct, 2021", "11:45AM"],
          img: require("@/assets/images/svg/crypto-icons/mln.svg"),
          coinName: "Enzyme (MLN)",
          type: "Sell",
          typeClass: "danger",
          quantity: "68",
          orderValue: "$6,296.8",
          avgPrice: "$94.21",
          price: "$92.60",
          status: "Successful",
          statusClass: "success",
        },
        {
          id: 12,
          date: ["24 Sep, 2021", "02:32AM"],
          img: require("@/assets/images/svg/crypto-icons/eth.svg"),
          coinName: "Ethereum (ETH)",
          type: "Buy",
          typeClass: "success",
          quantity: "72",
          orderValue: "$2,69,602.56",
          avgPrice: "$3,744.48",
          price: "$3,748.66",
          status: "Cancelled",
          statusClass: "danger",
        },
      ],
      page: 1,
      perPage: 10,
      pages: [],
      defaultOptions: { animationData: animationData },
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.coinName.toLowerCase().includes(search) ||
            data.date[0].toLowerCase().includes(search) ||
            data.date[1].toLowerCase().includes(search) ||
            data.type.toLowerCase().includes(search) ||
            data.quantity.toLowerCase().includes(search) ||
            data.orderValue.toLowerCase().includes(search) ||
            data.avgPrice.toLowerCase().includes(search) ||
            data.price.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search)
          );
        });
      } else if (this.status !== null || this.value !== null) {
        return this.displayedPosts.filter((data) => {
          if (this.status != null && this.value != null) {
            if (this.status === data.status) {
              if (this.value === data.type) {
                return data;
              }
            }
          } else if (this.status === data.status) {
            return data;
          } else if (this.value === data.type) {
            return data;
          }
          else {
            return null;
          }
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    SearchData() {
      this.resultQuery;
      this.status = this.status1;
      this.value = this.value2;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <b-row id="contactList">
      <b-col lg="12">
        <b-card no-body>
          <b-card-header class="d-flex align-items-center border-0">
            <h5 class="card-title mb-0 flex-grow-1">All Orders</h5>
            <div class="flex-shrink-0">
              <div class="flax-shrink-0 hstack gap-2">
                <b-button variant="primary">Today's Orders</b-button>
                <b-button variant="soft-success">Past Orders</b-button>
              </div>
            </div>
          </b-card-header>
          <b-card-body class="border border-dashed border-end-0 border-start-0">
            <b-row class="g-2">
              <b-col xl="4" md="6">
                <div class="search-box">
                  <input type="text" class="form-control search" placeholder="Search to orders..."
                    v-model="searchQuery" />
                  <i class="ri-search-line search-icon"></i>
                </div>
              </b-col>
              <b-col xl="3" md="6">
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"><i class="ri-calendar-2-line"></i></span>

                  <flat-pickr v-model="date" :config="rangeDateconfig" class="form-control" id="range-datepicker">
                  </flat-pickr>
                </div>
              </b-col>
              <b-col xl="2" md="4">
                <Multiselect class="form-control" v-model="value2" :close-on-select="true" placeholder="Select Type"
                  :searchable="true" :create-option="true" name="idType" id="idType" :options="[
                    { value: 'Buy', label: 'Buy' },
                    { value: 'Sell', label: 'Sell' },
                  ]" />
              </b-col>
              <b-col xl="2" md="4">
                <Multiselect class="form-control" v-model="status1" :close-on-select="true" placeholder="Select Status"
                  :searchable="true" :create-option="true" name="idStatus" id="idStatus" :options="[
                    { value: 'Successful', label: 'Successful' },
                    { value: 'Cancelled', label: 'Cancelled' },
                    { value: 'Pending', label: 'Pending' },
                  ]" />
              </b-col>
              <b-col xl="1" md="4">
                <b-button variant="secondary" class="w-100" @click="SearchData">Filters</b-button>
              </b-col>
            </b-row>
          </b-card-body>
          <b-card-body>
            <div class="table-responsive table-card">
              <table class="table align-middle table-nowrap" id="customerTable">
                <thead class="table-light text-muted">
                  <tr>
                    <th class="sort" data-sort="time" scope="col">
                      Date
                    </th>
                    <th class="sort" data-sort="currency_name" scope="col">
                      Name
                    </th>
                    <th class="sort" data-sort="type" scope="col">Type</th>
                    <th class="sort" data-sort="quantity_value" scope="col">
                      Quantity
                    </th>
                    <th class="sort" data-sort="or_value" scope="col">
                      Order Value
                    </th>
                    <th class="sort" data-sort="sort-avg_price" scope="col">
                      Avg Price
                    </th>
                    <th class="sort" data-sort="sort-price" scope="col">Price</th>
                    <th class="sort" data-sort="status" scope="col">Status</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(data, index) of resultQuery" :key="index">
                    <td class="order_date time" data-timestamp="1641945600">
                      {{ data.date[0] }}
                      <small class="text-muted">{{ data.date[1] }}</small>
                    </td>
                    <td class="id" style="display: none">
                      <b-link href="javascript:void(0);" class="fw-medium link-primary">#VZ001</b-link>
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <img :src="data.img" alt="" class="avatar-xxs" />
                        </div>
                        <b-link href="javascript:void(0);" class="currency_name flex-grow-1 ms-2 currency_name">{{
                          data.coinName
                        }}</b-link>
                      </div>
                    </td>
                    <td :class="`type text-${data.typeClass}`">
                      {{ data.type }}
                    </td>
                    <td class="quantity_value">{{ data.quantity }}</td>
                    <td class="order_value or_val" data-orderval="370683.20">{{ data.orderValue }}</td>
                    <td class="avg_price sort-avg_price" data-av-price="46154.30">{{ data.avgPrice }}</td>
                    <td class="price sort-price" data-price="46335.40">{{ data.price }}</td>
                    <td class="status">
                      <span :class="`badge badge-soft-${data.statusClass} text-uppercase`">{{ data.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="noresult" style="display: none" :class="{ 'd-block': resultQuery.length == 0 }">
                <div class="text-center">
                  <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions"
                    :height="75" :width="75" />
                  <h5 class="mt-2">Sorry! No Result Found</h5>
                  <p class="text-muted mb-0">
                    We've searched more than 150+ orders We did not find any
                    orders for you search.
                  </p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end p-3">
              <div class="pagination-wrap hstack gap-2" v-if="page != 1 || resultQuery.length >= 10">
                <b-link class="page-item pagination-prev" href="#" v-if="page != 1" @click="page--">
                  Previous
                </b-link>

                <ul class="pagination listjs-pagination mb-0">
                  <li :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" v-for="(pageNumber, index) in pages" :key="index" @click="page = pageNumber">
                    <b-link class="page" href="#">{{ pageNumber }}</b-link>
                  </li>
                </ul>
                <b-link class="page-item pagination-next" href="#" @click="page++" v-if="page < pages.length">
                  Next
                </b-link>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </Layout>
</template>
