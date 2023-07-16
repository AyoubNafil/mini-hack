const chatData = [
    {
        id: 1,
        image: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Steven Franklin',
        message: 'Hey! there I\'m available',
        time: '',
        color: 'secondary'
    },
    {
        id: 2,
        image: require('@/assets/images/users/avatar-3.jpg'),
        name: 'Adam Miller',
        message: 'I\'ve finished it! See you so',
        time: '5',
        color: 'success'
    },
    {
        id: 3,
        name: 'Keith Gonzales',
        message: 'This theme is awesome!',
        time: '2',
        color: 'success'
    },
    {
        id: 4,
        image: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Jose Vickery',
        message: 'Nice to meet you',
        time: '',
        color: 'warning'
    },
    {
        id: 5,
        name: 'Mitchel Givens',
        message: 'Hey! there I\'m available',
        time: '',
        color: 'secondary'
    },
    {
        id: 6,
        image: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Stephen Hadley',
        message: 'I\'ve finished it! See you so',
        time: '7',
        color: 'success'
    },
    {
        id: 7,
        image: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Leord Joseph',
        message: 'This theme is awesome!',
        time: '',
        color: 'success'
    },
];

const chatMessagesData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];


const unassigned= [
    {
        title: "Profile Page Satructure",
        description: "Profile Page means a web page accessible to the public or to guests.",
        features: ["Admin"],
        users: [require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-5.jpg")],
        id: "#VL2436",
        watch: "04",
        message: "19",
        file: "2"
    },
    {
        title: "Velzon - Admin Layout Design",
        description: "The dashboard is the front page of the Administration UI.",
        features: ["Layout", "Admin", "Dashboard"],
        users: [require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-1.jpg")],
        id: "#VL2436",
        watch: "04",
        message: "19",
        file: "2",
        date: " 07 Jan, 2022"
    }
];
const todo= [
    {
        title: "Admin Layout Design",
        description: "Landing page template with clean, minimal and modern design.",
        features: ["Design", "Wensite"],
        users: [require("@/assets/images/users/avatar-10.jpg"), require("@/assets/images/users/avatar-3.jpg")],
        id: "#VL2436",
        watch: "13",
        message: "52",
        file: "17",
        date: " 07 Jan, 2022"
    },
    {
        title: "Marketing & Sales",
        description: "Sales and marketing are two business functions within an organization.",
        features: ["Marketing", "Business"],
        users: [require("@/assets/images/users/avatar-9.jpg"), require("@/assets/images/users/avatar-8.jpg")],
        id: "#VL2436",
        watch: "24",
        message: "10",
        file: "10",
        date: " 27 Dec, 2021"
    },
];
const inprogress= [
    {
        title: "Brand Logo Design ",
        description: "BrandCrowd's brand logo maker allows you to generate and customize stand-out brand logos in minutes.",
        features: ["Logo", "Design", "UI/UX"],
        users: [require("@/assets/images/users/avatar-10.jpg"), require("@/assets/images/users/avatar-3.jpg")],
        id: "#VL2436",
        watch: "24",
        message: "10",
        file: "10",
        date: " 22 Dec, 2022"
    },
    {
        title: "Change Old App Icon",
        description: "Change app icons on Android: How do you change the look of your apps.",
        features: ["Marketing", "Business"],
        users: [require("@/assets/images/users/avatar-9.jpg"), require("@/assets/images/users/avatar-8.jpg")],
        id: "#VL2436",
        watch: "64",
        message: "35",
        file: "23",
        date: " 24 Oct, 2021"
    },
];
const reviews= [
    {
        title: "Product Features Analysis",
        description: "An essential part of strategic planning is running a product feature analysis.",
        features: ["Project", "Analysis"],
        users: [require("@/assets/images/users/avatar-5.jpg"), require("@/assets/images/users/avatar-6.jpg")],
        id: "#VL2436",
        watch: "14",
        message: "31",
        file: "07",
        date: " 05 Jan, 2022"
    },
    {
        title: "Create a Graph of Sketch",
        description: "To make a pie chart with equal slices create a perfect circle by selecting an Oval Tool.",
        features: ["Sketch", "Marketing", "Design"],
        users: [require("@/assets/images/users/avatar-4.jpg"), require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-2.jpg"), require("@/assets/images/users/avatar-1.jpg")],
        id: "#VL2436",
        watch: "64",
        message: "35",
        file: "23",
        date: " 24 Oct, 2021"
    },
];
const completed= [
    {
        title: "Create a Blog Template UI",
        description: "Landing page template with clean, minimal and modern design.",
        features: ["Design", "Website"],
        users: [require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg")],
        id: "#VL2451",
        watch: "24",
        message: "10",
        file: "10",
        date: " 05 Jan, 2022"
    },
];
const newData= [
    {
        title: "Banner Design for FB & Twitter",
        image: require("@/assets/images/small/img-4.jpg"),
        features: ["UI/UX", "Graphic"],
        users: [require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg")],
        id: "#VL2451",
        watch: "24",
        message: "10",
        file: "10",
        date: " 05 Jan, 2022"
    },
];

const projectListWidgets3= [
    {
      id: 1,
      img: require("@/assets/images/brands/Salesforce.png"),
      label: "Kanban Board",
      status: "Inprogess",
      statusClass: "warning",
      deadline: "08 Dec, 2021",
      number: "17/20",
      progressBar: "71%",
      subItem: [{
        id: 1,
        imgNumber: "D",
        bgColor: "danger"
      },
      {
        id: 2,
        imgTeam: require("@/assets/images/users/avatar-5.jpg")
      },
      {
        id: 3,
        imgNumber: "+"
      },
      ],
    },

    {
      id: 5,
      img: require("@/assets/images/brands/Salesforce.png"),
      label: "Multipurpose landing template",
      status: "Completed",
      statusClass: "success",
      deadline: "18 Sep, 2021",
      number: "25/32",
      progressBar: "75%",
      subItem: [{
        id: 1,
        imgNumber: "D",
        bgColor: "danger"
      },
      {
        id: 2,
        imgTeam: require("@/assets/images/users/avatar-5.jpg")
      },
      {
        id: 3,
        imgTeam: require("@/assets/images/users/avatar-6.jpg")
      },
      {
        id: 4,
        imgNumber: "+"
      },
      ],
    },
];

export { chatData, chatMessagesData };