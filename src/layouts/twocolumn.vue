<script>
import router from "@/router";
import { SimpleBar } from "simplebar-vue3";
import { layoutComputed } from "@/state/helpers";
import Menu from "@/components/menu.vue";
import NavBar from "@/components/nav-bar";
import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

/**
 * Vertical layout
 */
export default {
  components: {
    NavBar,
    RightBar,
    Footer,
    SimpleBar,
    Menu,
  },
  data() {
    return {
      isMenuCondensed: false,
      rmenu: localStorage.getItem("rmenu") ? localStorage.getItem("rmenu") : "twocolumn",
    };
  },

  computed: {
    ...layoutComputed,
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      const pathName = window.location.pathname;
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter((x) => x.classList.contains("active"));
        this.removeActivation(activeItems);
        let matchingMenuItem = items.find((x) => {
          return x.getAttribute("href") === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        } else {
          var id = pathName.replace("/", "");
          if (id) document.body.classList.add("twocolumn-panel");
          this.activateIconSidebarActive(pathName);
        }
      }
    },

    updateMenu(e) {
      document.body.classList.remove("twocolumn-panel");
      const ul = document.getElementById("navbar-nav");
      if (ul) {
        const items = Array.from(ul.querySelectorAll(".show"));
        items.forEach((item) => {
          item.classList.remove("show");
        });
      }
      const icons = document.getElementById("two-column-menu");
      if (icons) {
        const activeIcons = Array.from(icons.querySelectorAll(".nav-icon.active"));
        activeIcons.forEach((item) => {
          item.classList.remove("active");
        });
      }
      document.getElementById(e).classList.add("show");
      this.activateIconSidebarActive("#" + e);
    },

    removeActivation(items) {
      items.forEach((item) => {
        if (item.classList.contains("menu-link")) {
          if (!item.classList.contains("active")) {
            item.setAttribute("aria-expanded", false);
          }
          item.nextElementSibling.classList.remove("show");
        }
        if (item.classList.contains("nav-link")) {
          if (item.nextElementSibling) {
            item.nextElementSibling.classList.remove("show");
          }
          item.setAttribute("aria-expanded", false);
        }
        item.classList.remove("active");
      });
    },

    activateIconSidebarActive(id) {
      var menu = document.querySelector(
        "#two-column-menu .simplebar-content-wrapper a[href='" + id + "'].nav-icon"
      );
      if (menu !== null) {
        menu.classList.add("active");
      }
    },

    activateParentDropdown(item) {
      // navbar-nav menu add active
      item.classList.add("active");
      let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
      if (parentCollapseDiv) {
        // to set aria expand true remaining
        parentCollapseDiv.classList.add("show");
        parentCollapseDiv.parentElement.children[0].classList.add("active");
        parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
        if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
          if (
            parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")
              .previousElementSibling
          ) {
            if (
              parentCollapseDiv.parentElement
                .closest(".collapse.menu-dropdown")
                .previousElementSibling.parentElement.closest(".collapse.menu-dropdown")
            ) {
              const grandparent = parentCollapseDiv.parentElement
                .closest(".collapse.menu-dropdown")
                .previousElementSibling.parentElement.closest(".collapse.menu-dropdown");
              this.activateIconSidebarActive("#" + grandparent.getAttribute("id"));
              grandparent.classList.add("show");
            }
          }
          this.activateIconSidebarActive(
            "#" +
              parentCollapseDiv.parentElement
                .closest(".collapse.menu-dropdown")
                .getAttribute("id")
          );

          parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
          if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
            parentCollapseDiv.parentElement
              .closest(".collapse")
              .previousElementSibling.classList.add("active");
          return false;
        }
        this.activateIconSidebarActive("#" + parentCollapseDiv.getAttribute("id"));
        return false;
      }
      return false;
    },

    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },

    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },

    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },

  mounted() {
    this.initActiveMenu();
    if (this.rmenu == "vertical" && this.layoutType == "twocolumn") {
      document.documentElement.setAttribute("data-layout", "vertical");
    }
    document.getElementById("overlay").addEventListener("click", () => {
      document.body.classList.remove("vertical-sidebar-enable");
    });

    window.addEventListener("resize", () => {
      if (this.layoutType == "twocolumn") {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 767) {
          document.documentElement.setAttribute("data-layout", "vertical");
          this.rmenu = "vertical";
          localStorage.setItem("rmenu", "vertical");
        } else {
          document.documentElement.setAttribute("data-layout", "twocolumn");
          this.rmenu = "twocolumn";
          localStorage.setItem("rmenu", "twocolumn");
          setTimeout(() => {
            this.initActiveMenu();
          }, 50);
        }
      }
    });
  },
};
</script>

<template>
  <div id="layout-wrapper">
    <NavBar />
    <div>
      <!-- ========== Left Sidebar Start ========== -->
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/INSANE.png" alt="" height="100" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/INSANE.png" alt="" height="100" />
            </span>
          </router-link>
          <!-- Light Logo-->
          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/INSANE.png" alt="" height="100" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/INSANE.png" alt="" height="100" />
            </span>
          </router-link>
          <button
            type="button"
            class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i class="ri-record-circle-line"></i>
          </button>
        </div>

        <div id="scrollbar" v-if="rmenu == 'twocolumn'">
          <b-container fluid>
            <div id="two-column-menu">
              <SimpleBar class="twocolumn-iconview list-unstyled">
                <b-link href="#" class="logo"
                  ><img src="@/assets/images/INSANE.png" alt="Logo" height="35"
                /></b-link>
                <li>
                  <b-link
                    class="nav-icon"
                    href="#sidebarDashboards"
                    role="button"
                    @click.prevent="updateMenu('sidebarDashboards')"
                  >
                    <i class="ri-dashboard-2-line"></i>
                  </b-link>
                </li>
                <li>
                  <b-link
                    class="nav-icon"
                    href="#sidebarApps"
                    role="button"
                    @click.prevent="updateMenu('sidebarApps')"
                  >
                    <i class="ri-apps-2-line"></i>
                  </b-link>
                </li>
              </SimpleBar>
            </div>
            <template v-if="layoutType === 'twocolumn'">
              <SimpleBar class="navbar-nav" id="navbar-nav">
                <li class="menu-title">
                  <span data-key="t-menu"> {{ $t("t-menu") }}</span>
                </li>
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="sidebarDashboards">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <router-link
                          to="/dashboard/projects"
                          class="nav-link"
                          data-key="t-projects"
                        >
                          {{ $t("t-projects") }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- end Dashboard Menu -->
                <li class="nav-item">
                  <div class="collapse menu-dropdown" id="sidebarApps">
                    <ul class="nav nav-sm flex-column">
                      <li class="nav-item">
                        <b-link
                          href="#sidebarProjects"
                          class="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarProjects"
                          data-key="t-projects"
                        >
                          {{ $t("t-projects") }}
                        </b-link>
                        <div class="collapse menu-dropdown" id="sidebarProjects">
                          <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                              <router-link
                                to="/apps/projects-list"
                                class="nav-link"
                                data-key="t-list"
                              >
                                {{ $t("t-list") }}
                              </router-link>
                            </li>
                            <li class="nav-item">
                              <router-link
                                to="/apps/projects-create"
                                class="nav-link"
                                data-key="t-create-project"
                              >
                                {{ $t("t-create-project") }}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="nav-item">
                        <b-link
                          href="#sidebarTasks"
                          class="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTasks"
                          data-key="t-tasks"
                        >
                          {{ $t("t-tasks") }}
                        </b-link>
                        <div class="collapse menu-dropdown" id="sidebarTasks">
                          <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                              <router-link
                                to="/apps/tasks-list-view"
                                class="nav-link"
                                data-key="t-list-view"
                              >
                                {{ $t("t-list-view") }}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="nav-item">
                        <b-link
                          href="#sidebarTickets"
                          class="nav-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="sidebarTickets"
                          data-key="t-supprt-tickets"
                        >
                          {{ $t("t-supprt-tickets") }}
                        </b-link>
                        <div class="collapse menu-dropdown" id="sidebarTickets">
                          <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                              <router-link
                                to="/apps/tickets-list"
                                class="nav-link"
                                data-key="t-list-view"
                              >
                                {{ $t("t-list-view") }}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li class="nav-item">
                        <router-link to="/ChatGPT" class="nav-link" data-key="t-chat">
                          {{ $t("t-chat") }}
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/AICorrecter"
                          class="nav-link"
                          data-key="AICorrecter"
                        >
                          AI Correcter
                        </router-link>
                      </li>

                      <li class="nav-item">
                        <router-link
                          to="/apps-api-key"
                          class="nav-link"
                          data-key="t-api-key"
                        >
                          {{ $t("t-api-key") }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </SimpleBar>
            </template>
          </b-container>
        </div>

        <SimpleBar
          id="scrollbar"
          class="h-100"
          ref="scrollbar"
          v-if="rmenu == 'vertical'"
        >
          <Menu></Menu>
        </SimpleBar>

        <div class="sidebar-background"></div>
      </div>
      <!-- Left Sidebar End -->
      <!-- Vertical Overlay-->
      <div class="vertical-overlay" id="overlay"></div>
    </div>
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="main-content">
      <div class="page-content">
        <!-- Start Content-->
        <b-container fluid>
          <slot />
        </b-container>
      </div>
      <Footer />
    </div>
    <RightBar />
  </div>
</template>
