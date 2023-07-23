import store from "@/state/store";

export default [
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: false,
    },
    component: () => import("../views/dashboard/projects/index.vue"),
  },
  
  {
    path: "/dashboard/projects",
    name: "dashboard-projects",
    meta: {
      title: "Projects", authRequired: false,
    },
    component: () => import("../views/dashboard/projects/index"),
  },
  {
    path: "/apps/projects-list",
    name: "projects-list",
    meta: { title: "Projects List", authRequired: false },
    component: () => import("../views/apps/projects/list"),
  },
  {
    path: "/apps/projects-overview/:id",
    name: "projects Overview",
    meta: { title: "Projects Overview", authRequired: false },
    component: () => import("../views/apps/projects/overview"),
},
  {
    path: "/apps/projects-create",
    name: "projects-create",
    meta: { title: "Create Projects", authRequired: false },
    component: () => import("../views/apps/projects/create"),
  },
  {
    path: "/apps/tasks-details",
    name: "tasks-details",
    meta: { title: "Tasks Details", authRequired: false },
    component: () => import("../views/apps/tasks/details"),
  },
  {
    path: "/apps/tasks-kanban",
    name: "tasks-kanban",
    meta: { title: "Tasks Kanban", authRequired: false },
    component: () => import("../views/apps/tasks/kanban"),
  },
  {
    path: "/apps/tasks-list-view",
    name: "tasks-list-view",
    meta: { title: "Taks List", authRequired: false },
    component: () => import("../views/apps/tasks/list-view"),
  },
];