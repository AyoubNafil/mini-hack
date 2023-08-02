<script>
import {  callGpt35TurboAPI,executeQuery } from "../../.././src/api/utile.js"

import {
  SearchIcon,
  InfoIcon,
  MoreVerticalIcon
} from '@zhuowenli/vue-feather-icons';

import {
  required,
  helpers
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import Layout from "../../layouts/main.vue";
import appConfig from "../../../app.config";

import {
  chatData,
} from "./data";

export default {
  setup() {
    return {
      v$: useVuelidate()
    };
  },
  page: {
    title: "Chat",
    meta: [{
      name: "description",
      content: appConfig.description
    }],
  },
  data() {
    return {
      languageLabel: "Languages",
      languageSelected: '',
      resp: '',
      message: '',
      chatData: chatData,
      // chatMessagesData: chatMessagesData,
      chatMessagesData: [],
      title: "ChatGPT",
      items: [{
        text: "Velzon",
        href: "/",
      },
      {
        text: "Chat",
        active: true,
      },
      ],
      submitted: false,
      form: {
        message: "",
      },
      username: "INSANE CORRECTOR",
      profile: require("@/assets/images/users/corrector.jpeg")
    };
  },
  components: {
    Layout,
    SearchIcon,
    InfoIcon,
    MoreVerticalIcon
  },
  validations: {
    form: {
      message: {
        required: helpers.withMessage("Message is required", required),
      },
    },
  },
  methods: {
    addLeadingZero(number) {
      return number < 10 ? "0" + number : number;
    },
    renderChatResponse(response) {
      const responseContainer = document.getElementById('responseContainer');
      responseContainer.innerHTML = ''; // Clear any previous content

      // Check if the response contains code
      if (this.containsCode(response)) {
        // Wrap code blocks in <code> tags
        const codeFormattedResponse = response.replace(/`([^`]+)`/g, '<code>$1</code>');
        responseContainer.innerHTML = codeFormattedResponse;
      } else {
        // If no code, display the response as is
        responseContainer.textContent = response;
      }
    },
    containsCode(response) {
      // Regular expression to match code blocks enclosed in backticks (```)
      const codeRegex = /`([^`]+)`/g;
      return codeRegex.test(response);
    },
    handleSelection(selectedLanguage) {
      // Do something with the selected value
      console.log("slected hhhhhh "+ selectedLanguage);
      const dropdownButton = document.getElementById('languageDropdown');
      this.selectedLanguage = selectedLanguage;
      // this.languageLabel == selectedLanguage;
      dropdownButton.textContent = selectedLanguage
    }
    ,
    async ExecuteChatGptCorrecter(msg) {


      // var timeNow = hours + ":" + minutes;
      if (msg == '') {
        var nowEmptyResp = new Date();
        var hoursEmptyResp = this.addLeadingZero(nowEmptyResp.getHours());
        var minutesEmptyResp = this.addLeadingZero(nowEmptyResp.getMinutes());
        var timeNow2 = hoursEmptyResp + ":" + minutesEmptyResp;
        this.chatMessagesData.push(

          {
            align: 'left',
            name: 'ChatGPT',
            message: "Im a Text corrector ,please provide an input to correct :)",
            time: timeNow2
          }

        )
      } else {

        var CorrectionRequest = "Correct this Text between brackets (" + msg + ") ,the language used is " + this.selectedLanguage;
        this.api =  await executeQuery("SELECT Id, Key__c, Token__c FROM api__c where Name='GPT'");
        this.api = this.api[0];
        this.apiKey = this.api.Key__c;
        callGpt35TurboAPI(CorrectionRequest,this.apiKey).then(response => {
          var now = new Date();
          var hours = this.addLeadingZero(now.getHours());
          var minutes = this.addLeadingZero(now.getMinutes());
          // Handle the response here
          console.log('Received Response:', response);
          var timeNow2 = hours + ":" + minutes;

          this.chatMessagesData.push(

            {
              align: 'left',
              name: 'ChatGPT',
              message: response,
              time: timeNow2
            }

          )
        }).catch(error => {
          // Handle errors here
          console.error('Error:', error);
        });
      }


      console.log(this.chatMessagesData);

    },
    /**
     * Get the name of user
     */
    scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document.getElementById(id).querySelector(
          "#chat-conversation .simplebar-content-wrapper") ?
          document.getElementById(id).querySelector(
            "#chat-conversation .simplebar-content-wrapper") : '';

        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
          document.getElementById(id).getElementsByClassName("chat-conversation-list")[0]
            .scrollHeight - window.innerHeight + 600 : 0;

        if (offsetHeight)
          simpleBar.scrollTo({
            top: offsetHeight,
            behavior: "smooth"
          });
      }, 300);
    },
    chatUsername(name, image) {
      this.username = name;
      this.profile = image;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();
      const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
      const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();

      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: hours + ":" + minutes,
      });
    },

    /**
     * Char form Submit
     */
    formSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
        const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: hours + ":" + minutes,
        });
        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);
      }
      this.submitted = false;
      this.form = {};
    },
  },
  mounted() {
    var currentChatId = "users-chat";
    this.scrollToBottom(currentChatId);
    document.getElementById('copyClipBoard').style.display = 'none';
    var userChatElement = document.querySelectorAll(".user-chat");
    document.querySelectorAll(".chat-user-list li a").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.add("user-chat-show");
        });

        // chat user list link active
        var chatUserList = document.querySelector(".chat-user-list li.active");
        if (chatUserList) chatUserList.classList.remove("active");
        this.parentNode.classList.add("active");
      });
    });

    // user-chat-remove
    document.querySelectorAll(".user-chat-remove").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.remove("user-chat-show");
        });
      });
    });
  },
};
</script>
<template>
  <Layout>
    <div class="chat-wrapper d-lg-flex gap-1 mt-n4 py-1">

      <div class="user-chat w-100 overflow-hidden">
        <div class="chat-content d-lg-flex">
          <div class="w-100 overflow-hidden position-relative">
            <div class="position-relative">
              <div class="p-3 user-chat-topbar">
                <b-row class="align-items-center">
                  <b-col sm="4" cols="8">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 d-block d-lg-none me-3">
                        <b-link href="javascript: void(0);" class="user-chat-remove fs-18 p-1">
                          <i class="ri-arrow-left-s-line align-bottom"></i>
                        </b-link>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                            <img :src="profile ? profile : require('@/assets/images/users/user-dummy-img.jpg')"
                              class="rounded-circle avatar-xs" alt="" />
                            <span class="user-status"></span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate mb-0 fs-16">
                              <b-link class="text-reset username" data-bs-toggle="offcanvas"
                                href="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                                {{ username }}
                              </b-link>
                            </h5>
                            <p class="text-truncate text-muted fs-14 mb-0 userStatus">
                              <small>Online</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col sm="8" cols="4">
                    <ul class="list-inline user-chat-nav text-end mb-0">
                      <li class="list-inline-item m-0">
                        <div class="dropdown">
                          <button class="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <search-icon class="icon-sm"></search-icon>
                          </button>
                          <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                            <div class="p-2">
                              <div class="search-box">
                                <input type="text" class="form-control bg-light border-light" placeholder="Search here..."
                                  onkeyup="searchMessages()" id="searchMessage" />
                                <i class="ri-search-2-line search-icon"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="list-inline-item d-none d-lg-inline-block m-0">
                        <b-button type="button" variant="ghost-secondary" class="btn-icon" data-bs-toggle="offcanvas"
                          data-bs-target="#userProfileCanvasExample" aria-controls="userProfileCanvasExample">
                          <info-icon class="icon-sm"></info-icon>
                        </b-button>
                      </li>

                      <li class="list-inline-item m-0">
                        <div class="dropdown">
                          <button class="btn btn-ghost-secondary btn-icon" type="button" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <more-vertical-icon class="icon-sm"></more-vertical-icon>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end">
                            <b-link class="dropdown-item d-block d-lg-none user-profile-show">
                              <i class="ri-user-2-fill align-bottom text-muted me-2"></i>
                              View Profile
                            </b-link>
                            <b-link class="dropdown-item">
                              <i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>
                              Archive
                            </b-link>
                            <b-link class="dropdown-item">
                              <i class="ri-mic-off-line align-bottom text-muted me-2"></i>
                              Muted
                            </b-link>
                            <b-link class="dropdown-item">
                              <i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                              Delete
                            </b-link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </div>

              <div class="position-relative" id="users-chat">
                <div class="chat-conversation p-3 p-lg-4" id="chat-conversation" data-simplebar ref="current">
                  <ul class="list-unstyled chat-conversation-list">
                    <li v-for="data of chatMessagesData" :key="data.message" :class="{
                      right: `${data.align}` === 'right',
                      left: `${data.align}` !== 'right',
                    }" class="chat-list">
                      <div class="conversation-list">
                        <div class="chat-avatar" v-if="data.align !== 'right'">
                          <img :src="profile ? profile : require('@/assets/images/users/user-dummy-img.jpg')" alt="" />
                        </div>
                        <div class="user-chat-content">
                          <div class="ctext-wrap">
                            <div class="ctext-wrap-content">
                              <p class="mb-0 ctext-content" id="responseContainer">
                                <code>{{ data.message }}</code>
                              </p>
                            </div>
                            <!-- ... (other dropdown and message content) ... -->
                          </div>
                        </div>                                                                                                                                                                                                                                                                            
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show" id="copyClipBoard"
                  role="alert">
                  Message copied
                </div>
              </div>

              <div class="chat-input-section p-3 p-lg-4">
                <form @submit.prevent="formSubmit">
                  <b-row class="g-0 align-items-center">
                    <b-col cols="auto">
                      <div class="chat-input-links me-2">
                        <!-- Chat input links here -->
                      </div>
                    </b-col>
                    <b-col>
                      <div class="chat-input-feedback">

                      </div>
                      <div class="input-group">
                        <div class="dropdown">
                          <button id="languageDropdown" class="btn btn-primary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ this.languageLabel }}
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" @click="handleSelection('English')">English</a></li>
                            <li><a class="dropdown-item" @click="handleSelection('French')">French</a></li>
                            <li><a class="dropdown-item" @click="handleSelection('Spanish')">Spanish</a></li>
                          </ul>
                        </div>

                        <input type="text" v-model="form.message" class="form-control chat-input bg-light border-light"
                          placeholder="Enter Text to Correct..." :class="{
                            'is-invalid': submitted && v$.form.message.$error,
                          }">
                      </div>
                      <div v-if="submitted && v$.form.message.$error" class="invalid-feedback">
                        <span v-if="v$.form.message.required.$message">{{ v$.form.message.required.$message }}</span>
                      </div>
                      <b-col>

                      </b-col>
                    </b-col>
                    <b-col cols="auto">
                      <div class="chat-input-links ms-2 d-flex flex-column">
                        <div class="links-list-item">
                          
                          <b-button style="width:90px;font-size: medium;" pill variant="primary" type="submit" class="waves-effect waves-light" @click="ExecuteChatGptCorrecter(form.message)">Correct</b-button>

                        </div>
                      </div>
                    </b-col>

                  </b-row>
                </form>
              </div>

              <div class="replyCard">
                <b-card no-body class="mb-0">
                  <b-card-body class="py-3">
                    <div class="replymessage-block mb-0 d-flex align-items-start">
                      <div class="flex-grow-1">
                        <h5 class="conversation-name"></h5>
                        <p class="mb-0"></p>
                      </div>
                      <div class="flex-shrink-0">
                        <b-button type="button" variant="link" size="sm" id="close_toggle" class="mt-n2 me-n3 fs-18">
                          <i class="bx bx-x align-middle"></i>
                        </b-button>
                      </div>
                    </div>
                  </b-card-body>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>