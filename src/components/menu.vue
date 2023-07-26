<script>
import {
  layoutComputed
} from "@/state/helpers";
import {
  SimpleBar
} from "simplebar-vue3";

export default {
  components: {
    SimpleBar
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  computed: {
    ...layoutComputed,
    layoutType: {
      get() {
        return this.$store ? this.$store.state.layout.layoutType : {} || {};
      },
    },
  },

  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },


  mounted() {
    if (document.querySelectorAll(".navbar-nav .collapse")) {
      let collapses = document.querySelectorAll(".navbar-nav .collapse");

      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener("show.bs.collapse", (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest(".collapse");
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll(".collapse");
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains("show")) {
                siblingCollapse.classList.remove("show");
                siblingCollapse.parentElement.firstChild.setAttribute("aria-expanded", "false");
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2) {
                item.firstElementChild.setAttribute("aria-expanded", "false");
                item.firstElementChild.classList.remove("active");
              }
              let ids = item.querySelectorAll("*[id]");
              ids.forEach((item1) => {
                item1.classList.remove("show");
                item1.parentElement.firstChild.setAttribute("aria-expanded", "false");
                item1.parentElement.firstChild.classList.remove("active");
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll("ul li a");

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute("aria-expanded"))
                      subitem.setAttribute("aria-expanded", "false");
                  });
                }
              });
            });
          }
        });

        // Hide nested collapses on `hide.bs.collapse`
        collapse.addEventListener("hide.bs.collapse", (e) => {
          e.stopPropagation();
          let childCollapses = collapse.querySelectorAll(".collapse");
          childCollapses.forEach((childCollapse) => {
            let childCollapseInstance = childCollapse;
            childCollapseInstance.classList.remove("show");
            childCollapseInstance.parentElement.firstChild.setAttribute("aria-expanded", "false");
          });
        });
      });
    }
  },

  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
      if (document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          if (this.$refs.isSimplebar)
            this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
      }
    },

    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add("active");
              parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
              if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                  parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                const grandparent = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.parentElement.closest(".collapse");
                if (grandparent && grandparent && grandparent.previousElementSibling) {
                  grandparent.previousElementSibling.classList.add("active");
                  grandparent.classList.add("show");
                }
              }
            }
          }
        }
      }, 0);
    },
  },
};
</script>

<template>
  <b-container fluid>
    <div id="two-column-menu"></div>

    <template v-if="layoutType === 'twocolumn'">
      <SimpleBar class="navbar-nav" id="navbar-nav">
        <li class="menu-title">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li>
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarDashboards">
            <i class="ri-dashboard-2-line"></i>
            <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarDashboards">
            <ul class="nav nav-sm flex-column">
             
               
              <li class="nav-item">
                <router-link to="/dashboard/projects" class="nav-link" data-key="t-projects">
                  {{ $t("t-projects") }}
                </router-link>
              </li>
             
            </ul>
          </div>
        </li>
        <!-- end Dashboard Menu -->
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarApps">
            <i class="ri-apps-2-line"></i>
            <span data-key="t-apps"> {{ $t("t-apps") }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarApps">
            <ul class="nav nav-sm flex-column">
              
              
              
              <li class="nav-item">
                <b-link href="#sidebarProjects" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarProjects" data-key="t-projects">
                  {{ $t("t-projects") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarProjects">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="/apps/projects-list" class="nav-link" data-key="t-list">
                        {{ $t("t-list") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/projects-overview" class="nav-link" data-key="t-overview">
                        {{ $t("t-overview") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/projects-create" class="nav-link" data-key="t-create-project">
                        {{ $t("t-create-project") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarTasks" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarTasks" data-key="t-tasks">
                  {{ $t("t-tasks") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarTasks">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="/apps/tasks-kanban" class="nav-link" data-key="t-kanbanboard">
                        {{ $t("t-kanbanboard") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/tasks-list-view" class="nav-link" data-key="t-list-view">
                        {{ $t("t-list-view") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/tasks-details" class="nav-link" data-key="t-task-details">
                        {{ $t("t-task-details") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarTickets" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarTickets" data-key="t-supprt-tickets">
                  {{ $t("t-supprt-tickets") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarTickets">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="/apps/tickets-list" class="nav-link" data-key="t-list-view">
                        {{ $t("t-list-view") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/tickets-details" class="nav-link" data-key="t-ticket-details">
                        {{ $t("t-ticket-details") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        
      </SimpleBar>
    </template>

    <template v-else>
      <ul class="navbar-nav h-100" id="navbar-nav">
        <li class="menu-title">
          <span data-key="t-menu"> {{ $t("t-menu") }}</span>
        </li>
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarDashboards">
            <i class="ri-dashboard-2-line"></i>
            <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarDashboards">
            <ul class="nav nav-sm flex-column">
             
              <li class="nav-item">
                <router-link to="/dashboard/projects" class="nav-link" data-key="t-projects">
                  {{ $t("t-projects") }}
                </router-link>
              </li>
              
            </ul>
          </div>
        </li>
        <!-- end Dashboard Menu -->
        <li class="nav-item">
          <b-link class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="sidebarApps">
            <i class="ri-apps-2-line"></i>
            <span data-key="t-apps"> {{ $t("t-apps") }}</span>
          </b-link>
          <div class="collapse menu-dropdown" id="sidebarApps">
            <ul class="nav nav-sm flex-column">

             
              <li class="nav-item">
                <b-link href="#sidebarProjects" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarProjects" data-key="t-projects">
                  {{ $t("t-projects") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarProjects">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="/apps/projects-list" class="nav-link" data-key="t-list">
                        {{ $t("t-list") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/projects-overview" class="nav-link" data-key="t-overview">
                        {{ $t("t-overview") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/projects-create" class="nav-link" data-key="t-create-project">
                        {{ $t("t-create-project") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/chat" class="nav-link" data-key="t-chat">
                        {{ $t("t-chat") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarTasks" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarTasks" data-key="t-tasks">
                  {{ $t("t-tasks") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarTasks">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="/apps/tasks-kanban" class="nav-link" data-key="t-kanbanboard">
                        {{ $t("t-kanbanboard") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/tasks-list-view" class="nav-link" data-key="t-list-view">
                        {{ $t("t-list-view") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/tasks-details" class="nav-link" data-key="t-task-details">
                        {{ $t("t-task-details") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <b-link href="#sidebarTickets" class="nav-link" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="sidebarTickets" data-key="t-supprt-tickets">
                  {{ $t("t-supprt-tickets") }}
                </b-link>
                <div class="collapse menu-dropdown" id="sidebarTickets">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <router-link to="/apps/tickets-list" class="nav-link" data-key="t-list-view">
                        {{ $t("t-list-view") }}
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/apps/tickets-details" class="nav-link" data-key="t-ticket-details">
                        {{ $t("t-ticket-details") }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        
      </ul>
    </template>
</b-container>
</template>