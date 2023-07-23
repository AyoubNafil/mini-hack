<script>
import NavBar from "@/components/nav-bar";
import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

export default {
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  },
  methods: {
    onRoutechange(ele) {
      this.initActiveMenu(ele.path);
    },
    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector("#navbar-nav")) {
          let a = document
            .querySelector("#navbar-nav")
            .querySelector('[href="' + ele + '"]');

          if (a) {
            a.classList.add("active");
            let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add("show");
              parentCollapseDiv.parentElement.children[0].classList.add(
                "active"
              );
              parentCollapseDiv.parentElement.children[0].setAttribute(
                "aria-expanded",
                "true"
              );
              if (
                parentCollapseDiv.parentElement.closest(
                  ".collapse.menu-dropdown"
                )
              ) {
                parentCollapseDiv.parentElement
                  .closest(".collapse")
                  .classList.add("show");
                if (
                  parentCollapseDiv.parentElement.closest(".collapse")
                    .previousElementSibling
                )
                  parentCollapseDiv.parentElement
                    .closest(".collapse")
                    .previousElementSibling.classList.add("active");
              }
            }
          }
        }
      }, 1000);
    },
  },
  components: {
    NavBar,
    RightBar,
    Footer
  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <NavBar />
      <!-- ========== App Menu ========== -->
      <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <!-- Dark Logo-->
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt="" height="70" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt="" height="70" />
            </span>
          </router-link>
          <!-- Light Logo-->
          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm.png" alt="" height="70" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt="" height="70" />
            </span>
          </router-link>
          <button type="button" class="
              btn btn-sm
              p-0
              fs-20
              header-item
              float-end
              btn-vertical-sm-hover
            " id="vertical-hover">
            <i class="ri-record-circle-line"></i>
          </button>
        </div>
        <div id="scrollbar">
          <b-container fluid>
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
                    

                  </ul>
                </div>
              </li>

              <li class="menu-title">
                <i class="ri-more-fill"></i>
                <span data-key="t-pages">{{ $t("t-pages") }}</span>
              </li>
            </ul>
          </b-container>
          <!-- Sidebar -->
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay"></div>
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
  </div>
</template>