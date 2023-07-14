import store from "@/state/store";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: false,
    },
    component: () => import("../views/dashboard/ecommerce/index.vue"),
  },
  {
    path: "/dashboard/crypto",
    name: "dashboard-crypto",
    meta: {
      title: "Crypto",
      authRequired: false,
    },
    component: () => import("../views/dashboard/crypto/index"),
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
    path: "/dashboard/crm",
    name: "dashboard-crm",
    meta: {
      title: "CRM", authRequired: false,
    },
    component: () => import("../views/dashboard/crm/index"),
  },
  {
    path: "/dashboard/analytics",
    name: "dashboard-analytics",
    meta: {
      title: "Analytics", authRequired: false,
    },
    component: () => import("../views/dashboard/analytics/index"),
  },
  {
    path: "/dashboard/nft",
    name: "dashboard-nft",
    meta: {
      title: "NFT Dashboard", authRequired: false,
    },
    component: () => import("../views/dashboard/nft/index"),
  },
  {
    path: "/dashboard/job",
    name: "dashboard-job",
    meta: {
      title: "Job Dashboard", authRequired: false,
    },
    component: () => import("../views/dashboard/job/index"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout", authRequired: false,
      beforeResolve(routeTo, routeFrom, next) {
        localStorage.clear();
        sessionStorage.clear();
        next();
      },
    },
    component: () => import("../views/auth/logout/basic")
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: false },
    component: () => import("../views/calendar/index"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: false },
    component: () => import("../views/apps/chat"),
  },
  {
    path: "/apps-file-manager",
    name: "file manager",
    meta: { title: "File Manager", authRequired: false },
    component: () => import("../views/apps/filemanager"),
  },
  {
    path: "/apps-todo",
    name: "To Do List",
    meta: { title: "To Do List", authRequired: false },
    component: () => import("../views/apps/todo"),
  },
  {
    path: "/mailbox",
    name: "mailbox",
    meta: { title: "Mailbox", authRequired: false },
    component: () => import("../views/apps/email/mailbox"),
  },
  {
    path: "/email/email-basic",
    name: "email-basic",
    meta: { title: "Basic Action", authRequired: false },
    component: () => import("../views/apps/email/email-basic"),
  },
  {
    path: "/email/email-ecommerce",
    name: "email-ecommerce",
    meta: { title: "Ecommerce Action", authRequired: false },
    component: () => import("../views/apps/email/email-ecommerce"),
  },
  {
    path: "/apps/nft-auction",
    name: "auction",
    meta: { title: "Live Auction", authRequired: false },
    component: () => import("../views/apps/nft/nft-auction"),
  },
  {
    path: "/apps/nft-collection",
    name: "collection",
    meta: { title: "Collactions", authRequired: false },
    component: () => import("../views/apps/nft/nft-collection"),
  },
  {
    path: "/apps/nft-create",
    name: "create",
    meta: { title: "Create", authRequired: false },
    component: () => import("../views/apps/nft/nft-create"),
  },
  {
    path: "/apps/nft-creators",
    name: "creators",
    meta: { title: "Creators", authRequired: false },
    component: () => import("../views/apps/nft/nft-creators"),
  },
  {
    path: "/apps/nft-explore",
    name: "explore",
    meta: { title: "Explore Now", authRequired: false },
    component: () => import("../views/apps/nft/nft-explore"),
  },
  {
    path: "/apps/nft-item-detail",
    name: "item-detail",
    meta: { title: "Item Detail", authRequired: false },
    component: () => import("../views/apps/nft/nft-item-detail"),
  },
  {
    path: "/apps/nft-marketplace",
    name: "marketplace",
    meta: { title: "Marketplace", authRequired: false },
    component: () => import("../views/apps/nft/nft-marketplace"),
  },
  {
    path: "/apps/nft-ranking",
    name: "ranking",
    meta: { title: "Ranking", authRequired: false },
    component: () => import("../views/apps/nft/nft-ranking"),
  },
  {
    path: "/apps/nft-wallet",
    name: "nft-wallet",
    meta: { title: "Wallet", authRequired: false },
    component: () => import("../views/apps/nft/nft-wallet"),
  },
  {
    path: "/apps/projects-list",
    name: "projects-list",
    meta: { title: "Projects List", authRequired: false },
    component: () => import("../views/apps/projects/list"),
  },
  {
    path: "/apps/projects-overview",
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
  {
    path: "/apps/tickets-details",
    name: "tickets-details",
    meta: { title: "Ticket Details", authRequired: false },
    component: () => import("../views/tickets/details"),
  },
  {
    path: "/apps/tickets-list",
    name: "tickets-list",
    meta: { title: "Tickets List", authRequired: false },
    component: () => import("../views/tickets/list"),
  },
  {
    path: "/apps/crm-contacts",
    name: "crm-contacts",
    meta: { title: "CRM Contacts", authRequired: false },
    component: () => import("../views/apps/crm/contacts"),
  },
  {
    path: "/apps/crm-companies",
    name: "crm-companies",
    meta: { title: "CRM companies", authRequired: false },
    component: () => import("../views/apps/crm/companies"),
  },
  {
    path: "/apps/crm-deals",
    name: "crm-deals",
    meta: { title: "CRM Deals", authRequired: false },
    component: () => import("../views/apps/crm/deals"),
  },
  {
    path: "/apps/crm-leads",
    name: "crm-leads",
    meta: { title: "CRM Leads", authRequired: false },
    component: () => import("../views/apps/crm/leads"),
  },
  {
    path: "/ecommerce/customers",
    name: "customers",
    meta: { title: "Customers", authRequired: false },
    component: () => import("../views/apps/ecommerce/customers"),
  },
  {
    path: "/ecommerce/products",
    name: "products",
    meta: { title: "Products", authRequired: false },
    component: () => import("../views/apps/ecommerce/products"),
  },
  {
    path: "/ecommerce/product-details",
    name: "product-detail",
    meta: { title: "Product Details", authRequired: false },
    component: () => import("../views/apps/ecommerce/product-details"),
  },
  {
    path: "/ecommerce/orders",
    name: "orders",
    meta: { title: "Orders", authRequired: false },
    component: () => import("../views/apps/ecommerce/orders"),
  },
  {
    path: "/ecommerce/order-details",
    name: "order-details",
    meta: { title: "Order Details", authRequired: false },
    component: () => import("../views/apps/ecommerce/order-details"),
  },
  {
    path: "/ecommerce/add-product",
    name: "add-product",
    meta: { title: "Create Product", authRequired: false },
    component: () => import("../views/apps/ecommerce/add-product"),
  },
  {
    path: "/ecommerce/shopping-cart",
    name: "shopping cart",
    meta: { title: "Shopping Cart", authRequired: false },
    component: () => import("../views/apps/ecommerce/shopping-cart"),
  },
  {
    path: "/ecommerce/checkout",
    name: "checkout",
    meta: { title: "Check Out", authRequired: false },
    component: () => import("../views/apps/ecommerce/checkout"),
  },
  {
    path: "/ecommerce/sellers",
    name: "sellers",
    meta: { title: "Sellers", authRequired: false },
    component: () => import("../views/apps/ecommerce/sellers"),
  },
  {
    path: "/ecommerce/seller-details",
    name: "seller-details",
    meta: { title: "Seller Details", authRequired: false },
    component: () => import("../views/apps/ecommerce/seller-details"),
  },
  {
    path: "/crypto/buy-sell",
    name: "buy/sell",
    meta: { title: "Buy & Sell", authRequired: false },
    component: () => import("../views/apps/crypto/buy-sell"),
  },
  {
    path: "/crypto/kyc",
    name: "kyc",
    meta: { title: "KYC Application", authRequired: false },
    component: () => import("../views/apps/crypto/kyc"),
  },
  {
    path: "/crypto/ico",
    name: "ico",
    meta: { title: "ICO List", authRequired: false },
    component: () => import("../views/apps/crypto/ico"),
  },
  {
    path: "/crypto/orders",
    name: "crypto-orders",
    meta: { title: "Orders", authRequired: false },
    component: () => import("../views/apps/crypto/orders"),
  },
  {
    path: "/crypto/wallet",
    name: "wallet",
    meta: { title: "My Wallet", authRequired: false },
    component: () => import("../views/apps/crypto/wallet"),
  },
  {
    path: "/crypto/transactions",
    name: "transactions",
    meta: { title: "Transactions", authRequired: false },
    component: () => import("../views/apps/crypto/transactions"),
  },
  {
    path: "/invoices/detail/:id?",
    name: "invoice-detail",
    meta: { title: "Invoice Details", authRequired: false },
    component: () => import("../views/apps/invoices/details"),
  },
  {
    path: "/invoices/list",
    name: "invoice-list",
    meta: { title: "Invoice List", authRequired: false },
    component: () => import("../views/apps/invoices/list"),
  },
  {
    path: "/invoices/create",
    name: "invoice-create",
    meta: { title: "Create Invoice", authRequired: false },
    component: () => import("../views/apps/invoices/create"),
  },
  {
    path: "/jobs/application",
    name: "job-application",
    meta: { title: "Job Application", authRequired: false },
    component: () => import("../views/apps/jobs/application"),
  },
  {
    path: "/jobs/candidate-grid",
    name: "job-candidate-grid",
    meta: { title: "Candidate Grid", authRequired: false },
    component: () => import("../views/apps/jobs/candidate-grid"),
  },
  {
    path: "/jobs/candidate-lists",
    name: "job-candidate-lists",
    meta: { title: "Candidate Lists", authRequired: false },
    component: () => import("../views/apps/jobs/candidate-lists"),
  },
  {
    path: "/jobs/categories",
    name: "job-categories",
    meta: { title: "Job Categories", authRequired: false },
    component: () => import("../views/apps/jobs/categories"),
  },
  {
    path: "/jobs/companies-list",
    name: "job-companies-list",
    meta: { title: "Companies List", authRequired: false },
    component: () => import("../views/apps/jobs/companies-list"),
  },
  {
    path: "/jobs/details",
    name: "job-details",
    meta: { title: "Job Details", authRequired: false },
    component: () => import("../views/apps/jobs/details"),
  },
  {
    path: "/jobs/grid-lists",
    name: "job-grid-lists",
    meta: { title: "Grid Lists", authRequired: false },
    component: () => import("../views/apps/jobs/grid-lists"),
  },
  {
    path: "/jobs/lists",
    name: "job-lists",
    meta: { title: "Job Lists", authRequired: false },
    component: () => import("../views/apps/jobs/lists"),
  },
  {
    path: "/jobs/new",
    name: "job-new",
    meta: { title: "New Job", authRequired: false },
    component: () => import("../views/apps/jobs/new"),
  },
  {
    path: "/jobs/statistics",
    name: "job-statistics",
    meta: { title: "Job Statistics", authRequired: false },
    component: () => import("../views/apps/jobs/statistics"),
  },
  {
    path: "/apps-api-key",
    name: "API Key",
    meta: { title: "API Key", authRequired: false },
    component: () => import("../views/apps/apikey"),
  },

  {
    path: "/ui/alerts",
    name: "Alerts",
    meta: {
      title: "Alerts", authRequired: false,
    },
    component: () => import("../views/ui/alerts"),
  },
  {
    path: "/ui/buttons",
    name: "Buttons",
    meta: {
      title: "Buttons", authRequired: false,
    },
    component: () => import("../views/ui/buttons"),
  },
  {
    path: "/ui/cards",
    name: "Cards",
    meta: { title: "Cards", authRequired: false },
    component: () => import("../views/ui/cards"),
  },
  {
    path: "/ui/carousel",
    name: "Carousel",
    meta: { title: "Carousel", authRequired: false },
    component: () => import("../views/ui/carousel"),
  },
  {
    path: "/ui/dropdowns",
    name: "Dropdowns",
    meta: { title: "Dropdowns", authRequired: false },
    component: () => import("../views/ui/dropdowns"),
  },
  {
    path: "/ui/grid",
    name: "Grid",
    meta: { title: "Grid", authRequired: false },
    component: () => import("../views/ui/grid"),
  },
  {
    path: "/ui/images",
    name: "Images",
    meta: { title: "Images", authRequired: false },
    component: () => import("../views/ui/images"),
  },
  {
    path: "/ui/modals",
    name: "Modals",
    meta: { title: "Modals", authRequired: false },
    component: () => import("../views/ui/modals"),
  },
  {
    path: "/ui/offcanvas",
    name: "offcanvas",
    meta: { title: "Offcanvas", authRequired: false },
    component: () => import("../views/ui/offcanvas"),
  },
  {
    path: "/ui/progress",
    name: "Progress",
    meta: { title: "Progress", authRequired: false },
    component: () => import("../views/ui/progress"),
  },
  {
    path: "/ui/placeholders",
    name: "Placeholders",
    meta: { title: "Placeholders", authRequired: false },
    component: () => import("../views/ui/placeholders"),
  },
  {
    path: "/ui/accordions",
    name: "accordions",
    meta: { title: "Accordions", authRequired: false },
    component: () => import("../views/ui/accordions"),
  },
  {
    path: "/ui/tabs",
    name: "tabs",
    meta: { title: "Tabs", authRequired: false },
    component: () => import("../views/ui/tabs"),
  },
  {
    path: "/ui/typography",
    name: "Typography",
    meta: { title: "Typography", authRequired: false },
    component: () => import("../views/ui/typography"),
  },
  {
    path: "/ui/embed-video",
    name: "embed-video",
    meta: { title: "Embed Video", authRequired: false },
    component: () => import("../views/ui/embed-video"),
  },
  {
    path: "/ui/ribbons",
    name: "ribbons",
    meta: { title: "Ribbons", authRequired: false },
    component: () => import("../views/ui/ribbons"),
  },
  {
    path: "/ui/lists",
    name: "lists",
    meta: { title: "Lists", authRequired: false },
    component: () => import("../views/ui/lists"),
  },
  {
    path: "/ui/utilities",
    name: "utilities",
    meta: { title: "Utilities", authRequired: false },
    component: () => import("../views/ui/utilities"),
  },
  {
    path: "/ui/notifications",
    name: "notifications",
    meta: { title: "Notifications", authRequired: false },
    component: () => import("../views/ui/notifications"),
  },
  {
    path: "/ui/general",
    name: "General",
    meta: { title: "General", authRequired: false },
    component: () => import("../views/ui/general"),
  },
  {
    path: "/ui/colors",
    name: "Colors",
    meta: { title: "Colors", authRequired: false },
    component: () => import("../views/ui/colors"),
  },
  {
    path: "/ui/badges",
    name: "badges",
    meta: { title: "Badges", authRequired: false },
    component: () => import("../views/ui/badges"),
  },
  {
    path: "/ui/media",
    name: "media",
    meta: { title: "Media", authRequired: false },
    component: () => import("../views/ui/media"),
  },
  {
    path: "/widgets",
    name: "widgets",
    meta: { title: "Widgets", authRequired: false },
    component: () => import("../views/widgets/index"),
  },
  {
    path: "/icons/boxicons",
    name: "boxicons-icon",
    meta: { title: "Boxicons", authRequired: false },
    component: () => import("../views/icons/boxicons"),
  },
  {
    path: "/icons/materialdesign",
    name: "Material Design",
    meta: { title: "Material Design", authRequired: false },
    component: () => import("../views/icons/materialdesign"),
  },
  {
    path: "/icons/feather",
    name: "feather",
    meta: { title: "Feather", authRequired: false },
    component: () => import("../views/icons/feather"),
  },
  {
    path: "/icons/lineawesome",
    name: "lineawesome",
    meta: { title: "Line Awesome", authRequired: false },
    component: () => import("../views/icons/lineawesome"),
  },
  {
    path: "/icons/remix",
    name: "remix",
    meta: { title: "Remix", authRequired: false },
    component: () => import("../views/icons/remix"),
  },
  {
    path: "/icons/crypto",
    name: "crypto",
    meta: { title: "Crypto", authRequired: false },
    component: () => import("../views/icons/crypto"),
  },
  {
    path: "/tables/basic",
    name: "basic-table",
    meta: { title: "Basic Table", authRequired: false },
    component: () => import("../views/tables/basic"),
  },
  {
    path: "/tables/gridjs",
    name: "gridjs",
    meta: { title: "Grid JS", authRequired: false },
    component: () => import("../views/tables/grid/index"),
  },
  {
    path: "/form/advanced",
    name: "form-advanced",
    meta: { title: "Form Advance", authRequired: false },
    component: () => import("../views/forms/advanced"),
  },
  {
    path: "/form/elements",
    name: "form-elements",
    meta: { title: "Form Elements", authRequired: false },
    component: () => import("../views/forms/elements"),
  },
  {
    path: "/form/layouts",
    name: "Form Layouts",
    meta: { title: "Form Layouts", authRequired: false },
    component: () => import("../views/forms/layouts"),
  },
  {
    path: "/form/editors",
    name: "Form Editors",
    meta: { title: "Form Editors", authRequired: false },
    component: () => import("../views/forms/editors"),
  },
  {
    path: "/form/file-uploads",
    name: "File Uploads",
    meta: { title: "File Uploads", authRequired: false },
    component: () => import("../views/forms/file-uploads"),
  },
  {
    path: "/form/validation",
    name: "Form Validation",
    meta: { title: "Form Validation", authRequired: false },
    component: () => import("../views/forms/validation"),
  },
  {
    path: "/form/wizard",
    name: "Form Wizard",
    meta: { title: "Form Wizard", authRequired: false },
    component: () => import("../views/forms/wizard"),
  },
  {
    path: "/form/masks",
    name: "form-mask",
    meta: { title: "Form Mask", authRequired: false },
    component: () => import("../views/forms/masks"),
  },
  {
    path: "/form/pickers",
    name: "form-pickers",
    meta: { title: "Form Picker", authRequired: false },
    component: () => import("../views/forms/pickers"),
  },
  {
    path: "/form/range-sliders",
    name: "form-range-slider",
    meta: { title: "Form Range Slider", authRequired: false },
    component: () => import("../views/forms/range-sliders"),
  },
  {
    path: "/form/select",
    name: "form-select",
    meta: { title: "Form Select", authRequired: false },
    component: () => import("../views/forms/select"),
  },
  {
    path: "/form/checkboxs-radios",
    name: "form-checkboxs-radio",
    meta: { title: "Checkboxs & Radios", authRequired: false },
    component: () => import("../views/forms/checkboxs-radios"),
  },
  {
    path: "/landing",
    name: "landing",
    meta: { title: "Landing", authRequired: false },
    component: () => import("../views/landing/index"),
  },
  {
    path: "/nft-landing",
    name: "nft-landing",
    meta: { title: "Landing", authRequired: false },
    component: () => import("../views/landing/nft-landing"),
  },
  {
    path: "/job-landing",
    name: "job-landing",
    meta: { title: "Job Landing", authRequired: false },
    component: () => import("../views/landing/job-landing"),
  },
  {
    path: "/pages/starter",
    name: "starter",
    meta: { title: "Starter", authRequired: false },
    component: () => import("../views/pages/starter"),
  },
  {
    path: "/pages/profile",
    name: "profile",
    meta: { title: "Profile", authRequired: false },
    component: () => import("../views/pages/profile/simple"),
  },
  {
    path: "/pages/profile-setting",
    name: "profile-setting",
    meta: { title: "Setting", authRequired: false },
    component: () => import("../views/pages/profile/setting"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: false },
    component: () => import("../views/pages/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: false },
    component: () => import("../views/pages/coming-soon"),
  },
  {
    path: "/pages/timeline",
    name: "timeline",
    meta: { title: "Timeline", authRequired: false },
    component: () => import("../views/pages/timeline"),
  },
  {
    path: "/pages/faqs",
    name: "FAQs",
    meta: { title: "FAQs", authRequired: false },
    component: () => import("../views/pages/faqs"),
  },
  {
    path: "/pages/pricing",
    name: "pricing",
    meta: { title: "Pricing", authRequired: false },
    component: () => import("../views/pages/pricing"),
  },
  {
    path: "/pages/team",
    name: "team",
    meta: { title: "Team", authRequired: false },
    component: () => import("../views/pages/team"),
  },
  {
    path: "/pages/search-results",
    name: "search-results",
    meta: { title: "Search Results", authRequired: false },
    component: () => import("../views/pages/search-results"),
  },
  {
    path: "/pages/sitemap",
    name: "sitemap",
    meta: { title: "Sitemap", authRequired: false },
    component: () => import("../views/pages/sitemap"),
  },
  {
    path: "/pages/privacy-policy",
    name: "privacy-policy",
    meta: { title: "Privacy Policy", authRequired: false },
    component: () => import("../views/pages/privacy-policy"),
  },
  {
    path: "/pages/term-conditions",
    name: "term-conditions",
    meta: { title: "Term Conditions", authRequired: false },
    component: () => import("../views/pages/term-conditions"),
  },
  {
    path: "/charts/chartjs",
    name: "chartjs-chart",
    meta: { title: "Chartjs", authRequired: false },
    component: () => import("../views/charts/chartjs/index"),
  },
  {
    path: "/charts/echart",
    name: "echart",
    meta: { title: "Echarts", authRequired: false },
    component: () => import("../views/charts/echart/index"),
  },
  {
    path: '/charts/apex-line',
    name: 'line',
    meta: {
      title: "Line Charts", authRequired: false,
    },
    component: () => import('../views/charts/apex/line/index')
  },
  {
    path: '/charts/apex-area',
    name: 'area-chart',
    meta: {
      title: "Area Charts", authRequired: false,
    },
    component: () => import('../views/charts/apex/area/index')
  },
  {
    path: '/charts/apex-bar',
    name: 'bar-chart',
    meta: {
      title: "Bar Charts", authRequired: false,
    },
    component: () => import('../views/charts/apex/bar/index')
  },
  {
    path: '/charts/apex-column',
    name: 'column-chart',
    meta: {
      title: "Column Charts", authRequired: false,
    },
    component: () => import('../views/charts/apex/column/index')
  },

  {
    path: '/charts/apex-mixed',
    name: 'mixed-chart',
    meta: {
      title: "Mixed Charts", authRequired: false,
    },
    component: () => import('../views/charts/apex/mixed/index')
  },
  {
    path: '/charts/apex-candlestick',
    name: 'candlestick',
    meta: {
      title: "Candlestick", authRequired: false,
    },
    component: () => import('../views/charts/apex/candlestick/index')
  },
  {
    path: '/charts/apex-boxplot',
    name: 'boxplot',
    meta: {
      title: "Boxplot", authRequired: false,
    },
    component: () => import('../views/charts/apex/boxplot/index')
  },
  {
    path: '/charts/apex-bubble',
    name: 'bubble',
    meta: {
      title: "Bubble Chart", authRequired: false,
    },
    component: () => import('../views/charts/apex/bubble/index')
  },
  {
    path: '/charts/apex-scatter',
    name: 'scatter',
    meta: {
      title: "Scatter", authRequired: false,
    },
    component: () => import('../views/charts/apex/scatter/index')
  },
  {
    path: '/charts/apex-heatmap',
    name: 'heatmap',
    meta: {
      title: "Heatmap", authRequired: false,
    },
    component: () => import('../views/charts/apex/heatmap/index')
  },
  {
    path: '/charts/apex-treemap',
    name: 'treemap',
    meta: {
      title: "Treemap", authRequired: false,
    },
    component: () => import('../views/charts/apex/treemap/index')
  },
  {
    path: '/charts/apex-pie',
    name: 'pie',
    meta: {
      title: "Apex Pie", authRequired: false,
    },
    component: () => import('../views/charts/apex/pie/index')
  },
  {
    path: '/charts/apex-radialbar',
    name: 'radialbar',
    meta: {
      title: "Apex Radialbar", authRequired: false,
    },
    component: () => import('../views/charts/apex/radiabar/index')
  },
  {
    path: '/charts/apex-radar',
    name: 'radar',
    meta: {
      title: "Apex Radar", authRequired: false,
    },
    component: () => import('../views/charts/apex/radar/index')
  },
  {
    path: '/charts/apex-polararea',
    name: 'polararea',
    meta: {
      title: "Polararea", authRequired: false,
    },
    component: () => import('../views/charts/apex/polararea/index')
  },
  {
    path: '/advance-ui/animation',
    name: 'animation',
    meta: {
      title: "Animation", authRequired: false,
    },
    component: () => import('../views/advance-ui/animation')
  },
  {
    path: '/advance-ui/highlight',
    name: 'highlight',
    meta: {
      title: "Highlight", authRequired: false,
    },
    component: () => import('../views/advance-ui/highlight')
  },
  {
    path: '/advance-ui/scrollbar',
    name: 'scrollbar',
    meta: {
      title: "Scrollbar", authRequired: false,
    },
    component: () => import('../views/advance-ui/scrollbar')
  },
  {
    path: '/advance-ui/scrollspy',
    name: 'scrollspy',
    meta: {
      title: "Scrollspy", authRequired: false,
    },
    component: () => import('../views/advance-ui/scrollspy')
  },
  {
    path: '/advance-ui/sweetalerts',
    name: 'sweetalerts',
    meta: {
      title: "Sweet Alerts", authRequired: false,
    },
    component: () => import('../views/advance-ui/sweetalerts')
  },
  {
    path: '/advance-ui/swiper',
    name: 'Swiper Slider',
    meta: {
      title: "Swiper", authRequired: false,
    },
    component: () => import('../views/advance-ui/swiper')
  },
  {
    path: '/auth/signin-basic',
    name: 'signin-basic',
    meta: {
      title: "Signin Basic", authRequired: false,
    },
    component: () => import('../views/auth/signin/basic')
  },
  {
    path: '/auth/signin-cover',
    name: 'signin-cover',
    meta: {
      title: "Signin Cover", authRequired: false,
    },
    component: () => import('../views/auth/signin/cover')
  },
  {
    path: '/auth/signup-basic',
    name: 'signup-basic',
    meta: {
      title: "Signup Basic", authRequired: false,
    },
    component: () => import('../views/auth/signup/basic')
  },
  {
    path: '/auth/signup-cover',
    name: 'signup-cover',
    meta: {
      title: "Signup Cover", authRequired: false,
    },
    component: () => import('../views/auth/signup/cover')
  },
  {
    path: '/auth/reset-pwd-basic',
    name: 'reset-pwd-basic',
    meta: {
      title: "Reset Password", authRequired: false,
    },
    component: () => import('../views/auth/reset/basic')
  },
  {
    path: '/auth/reset-pwd-cover',
    name: 'reset-pwd-cover',
    meta: {
      title: "Reset Password", authRequired: false,
    },
    component: () => import('../views/auth/reset/cover')
  },
  {
    path: '/auth/create-pwd-basic',
    name: 'create-pwd-basic',
    meta: {
      title: "create Password", authRequired: false,
    },
    component: () => import('../views/auth/create/basic')
  },
  {
    path: '/auth/create-pwd-cover',
    name: 'create-pwd-cover',
    meta: {
      title: "create Password", authRequired: false,
    },
    component: () => import('../views/auth/create/cover')
  },
  {
    path: '/auth/lockscreen-basic',
    name: 'lock-screen-basic',
    meta: {
      title: "Lock Screen", authRequired: false,
    },
    component: () => import('../views/auth/lockscreen/basic')
  },
  {
    path: '/auth/lockscreen-cover',
    name: 'lock-screen-cover',
    meta: {
      title: "Lock Screen", authRequired: false,
    },
    component: () => import('../views/auth/lockscreen/cover')
  },
  {
    path: '/auth/twostep-basic',
    name: 'twostep-basic',
    meta: {
      title: "Two Step Auth", authRequired: false,
    },
    component: () => import('../views/auth/twostep/basic')
  }, {
    path: '/auth/twostep-cover',
    name: 'twostep-cover',
    meta: {
      title: "Two Step Auth", authRequired: false,
    },
    component: () => import('../views/auth/twostep/cover')
  },
  {
    path: '/auth/404',
    name: '404',
    meta: {
      title: "Error 404", authRequired: false,
    },
    component: () => import('../views/auth/errors/404')
  },
  {
    path: '/auth/500',
    name: '500',
    meta: {
      title: "Error 500", authRequired: false,
    },
    component: () => import('../views/auth/errors/500')
  },
  {
    path: '/auth/404-basic',
    name: '404-basic',
    meta: {
      title: "Error 404", authRequired: false,
    },
    component: () => import('../views/auth/errors/404-basic')
  },
  {
    path: '/auth/404-cover',
    name: '404-cover',
    meta: {
      title: "Error 404", authRequired: false,
    },
    component: () => import('../views/auth/errors/404-cover')
  },
  {
    path: '/auth/ofline',
    name: 'ofline',
    meta: {
      title: "Offline", authRequired: false,
    },
    component: () => import('../views/auth/errors/ofline')
  },
  {
    path: '/auth/logout-basic',
    name: 'logout-basic',
    meta: {
      title: "Logout", authRequired: false,
    },
    component: () => import('../views/auth/logout/basic')
  },
  {
    path: '/auth/logout-cover',
    name: 'logout-cover',
    meta: {
      title: "Logout", authRequired: false,
    },
    component: () => import('../views/auth/logout/cover')
  },
  {
    path: '/auth/success-msg-basic',
    name: 'success-msg-basic',
    meta: {
      title: "Success Message", authRequired: false,
    },
    component: () => import('../views/auth/success-msg/basic')
  },
  {
    path: '/auth/success-msg-cover',
    name: 'success-msg-cover',
    meta: {
      title: "Success Message", authRequired: false,
    },
    component: () => import('../views/auth/success-msg/cover')
  },
  {
    path: "/maps/google",
    name: "Google Maps",
    meta: {
      title: "Google Maps", authRequired: false,
    },
    component: () => import("../views/maps/google"),
  },
  {
    path: "/maps/leaflet",
    name: "Leaflet Maps",
    meta: { title: "Leaflet Maps", authRequired: false },
    component: () => import("../views/maps/leaflet/index"),
  },
];