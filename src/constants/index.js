import {
  backend,
  creator,
  web,
  nodejs,
  meta,
  vmock,
  wavity,
  artifact,
  starbucks,
  tesla,
  shopify,
  codex,
  dalle,
  generator,
  react,
  angular,
  python,
  typescript,
  kubernets,
  java,
  golang,
  docker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { icon: java, title: "Java" },
  { icon: react, title: "ReactJS" },
  { icon: python, title: "Python" },
  { icon: golang, title: "GoLang" },
  { icon: angular, title: "Angular" },
  { icon: typescript, title: "Typescript" },
  { icon: kubernets, title: "Kubernetes" },
  { icon: docker, title: "Docker" },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Wavity",
    icon: wavity,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    points: [
      "Developing a Microsoft Teams Command bot to handle ticket creation and tracking tasks directly from Teams Chat.",
      "Configured webhooks to push real-time updates from our ticketing system into dedicated Teams channels.",
      "Led the implementation of an OAuth app manager to facilitate secure data access through Oauth2 Credentials flow.",
      "Leveraging Java, PostgreSQL and ReactJS stack to develop a conversational UI feature for our agents.",
      "Streamlined software delivery with fully automated CI/CD pipelines using Jenkins, accelerating deployment.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Artifact",
    icon: artifact,
    iconBg: "#383E56",
    date: "June 2023 - October 2023",
    points: [
      "Developed a responsive web app using React and Go, driving the entire development lifecycle till launch.",
      "Implemented Twitter and Discord OAuth2 authorization flow to capture user data and personalize their experience.",
      "Leveraged Firebase Auth for secure user login and access control, ensuring data privacy and compliance.",
      "Integrated diverse third-party SaaS services like Crossmint for NFT minting, Knock for sending mails and in-app notifications, and Stripe for secure credit card payments.",
      "Designed a dynamic XP leveling system based on a global activity log, driving user engagement and retention.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "VMock",
    icon: vmock,
    iconBg: "#E6DEDD",
    date: "June 2019 - June 2021",
    points: [
      "Developed Network Feedback product using React, Laravel stack which is being used by over 80000 users.",
      "Refactored landing page and 4 more products with WCAG-AA standards for ADA compliance Level-2 to make the website more accessible for people with disabilities.",
      "Developed an AI powered chatbot using Flask-SocketIO from scratch for customer support operations.",
      "Optimized database queries across both relational (MySQL) and document (MongoDB) databases, achieving 30% faster data retrieval and reducing platform latency.",
      "Adopted version control systems like Git to manage source code and collaborate with other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Name? proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Name? does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Name? optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "3D Customizer With ChatGPT",
//     description:
//       "This project allows you to make your own t-shirt, customize it, choose a color and image upload and ask ChatGPT to make your own t-shirt by the prompt.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "javascript",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: dalle,
//     source_code_link:
//       "https://github.com/ElonMusk2002/T-Shirt_3D__Customizer_With_ChatGPT",
//   },
//   {
//     name: "CodeX",
//     description:
//       "A powerfull web application that allows user to chat with chatGPT to help with code. No needed vpn or logging ",
//     tags: [
//       {
//         name: "express",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "NodeJS",
//         color: "green-text-gradient",
//       },
//       {
//         name: "openAiAPI",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: codex,
//     source_code_link: "https://github.com/ElonMusk2002/Codex-ChatGPT",
//   },
//   {
//     name: "Image Generator by DALL-E",
//     description:
//       "A repository that generates images using OpenAI API key written in Python using Django1. DALL·E is a 12-billion parameter version of GPT-3 trained to generate images from text descriptions",
//     tags: [
//       {
//         name: "openAiAPI",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Python",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Django",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: generator,
//     source_code_link: "https://github.com/ElonMusk2002/Image_Generator_DALL-E",
//   },
// ];

export { services, experiences };
