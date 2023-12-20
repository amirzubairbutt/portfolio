
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBackspace, faCode, faDatabase, faEnvelope, faHouse, faPhone, faServer } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons';


import bookshoppc from "./assets/images/bookshoppc.jpg";
import impactpc from "./assets/images/impactpc.png"
import MERNTodoList from "./assets/images/MERNTodoList.png"
import Exclusive from "./assets/images/Exclusive.png"
import WhatsappWeb from "./assets/images/WhatsappWeb.png"


export const services = [
    {
        id:1,
        heading: "Design to Code",
        icon: faCode,
        backHeading: "Pixel perfect Design to Code including",
        list: ["Animations","ImageSlideShows","Sliders", "Forms"]

    },
    {
        id:2,
        heading: "Fully Responsive Sites with",
        icon: faBootstrap,
        backHeading: "Fully Responsive Sites with",
        list: ["Tailwind CSS","Bootstrap 5"]

    },
    {
        id:3,
        heading: "Functionality with React",
        icon: faReact,
        backHeading: "Have sound Knowledge of",
        list: ["Hooks","Routing", "Redux"]

    },
    {
        id:4,
        heading: "Serer side coding",
        icon: faServer,
        backHeading: "Adept in",
        list: ["Creating and Handling Routes","Custom Middlewares", "User Authenterication","Error Handling"]

    },
    {
        id:5,
        heading: "Database Managment",
        icon: faDatabase,
        backHeading: "Adept in",
        list: ["Setting up cloud Atlas MongoDB","Perform CRUD operations", "Defining Schema in Mongoose","Data Validation with Mongoose"]

    }
]




export const contacts = [
    {
        id: 1,
        icon: faHouse,
        text: "Lahore, Pakistan"
    },
    {
        id:2,
        icon: faEnvelope,
        text: "saadurrehman.dev@gmail.com"
    },
    {
        id:3,
        icon: faPhone,
        text: "(+92)306-9122722"
    }
]

export const links = {
    E_COMMERECE : "https://e-commerece-peach.vercel.app/",
    MERN_Todo_LIST :"https://github.com/saad9122/todoList-Mern-Website.git",
    MERN_WHATSAPP: "https://github.com/saad9122/Whatsapp-MERN-Website.git",
    BOOKSHOP: "https://bookshop-delta-umber.vercel.app/",
    IMPACT: "https://impact2-8fhz5moq9-saad9122.vercel.app/",
    MENTOR: "https://mentor-github-io.vercel.app/"
    }

export const projects = [
    {
        id:1,
        img: Exclusive,
        heading: "E-commerece Store",
        features: ["Functionality with React","State Managment with Redux", "Responsive Design", "Animations with CSS"],
        links: ["https://e-commerece-peach.vercel.app/"],
        linkName: ["E-commerece Store"]
    },
    {
        id:2,
        img: MERNTodoList,
        heading: "MERN Empowered TodoList",
        features: ["State Managment with Redux Thunk","User Authentication with JWT", "Data Managment in MongoDB", "Password encryption with bcrypt"],
        links: ["https://github.com/saad9122/Whatsapp-MERN-Website.git"],
        linkName: ["See on github"]
    },
    {
        id:3,
        img: WhatsappWeb,
        heading: "Whatsapp Web MERN Application",
        features: ["State Managment with Redux Thunk","Google Authentication", "Data Managment in MongoDB", "Live chat with Socket.io "],
        links: ["https://github.com/saad9122/Whatsapp-MERN-Website.git"],
        linkName: ["See on github"]
    },

    {
        id:4,
        img: bookshoppc,
        heading: "BookShop having functionality of adding and removing products from cart",
        featureHeading: "Developed with",
        features: ["Tailwind CSS","React"],
        links: ["https://bookshop-delta-umber.vercel.app/"],
        linkName: ["Bookshop"]
        
    },

    {
        id:5,
        img: impactpc,
        heading: "Pixel Perfect Fully Responsive sites developed with",
        features: ["Tailwind CSS","Bootstrap"],
        links: ["https://impact2-8fhz5moq9-saad9122.vercel.app/","https://mentor-github-io.vercel.app/"],
        linkName: ["Impact", "Mentor"]
    },

]