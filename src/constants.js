// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import apiLogo from "./assets/tech_logo/api.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import ibmLogo from "./assets/company_logo/ibm_logo.png";
import inffvirtechLogo from "./assets/company_logo/infovirtech_logo.png";
import techmahindraLogo from "./assets/company_logo/techmahindra_logo.png";
// Education Section Logo's
import sjhLogo from "./assets/education_logo/sjh_logo.png";
import vimLogo from "./assets/education_logo/vim_logo.png";
import jsuLogo from "./assets/education_logo/jsu_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import stayfinderLogo from "./assets/work_logo/stayfinder.png";
import StayhostLogo from "./assets/work_logo/Stayhost.png";
import foleverLogo from "./assets/work_logo/forever.png";
import portfolioLogo from "./assets/work_logo/portfolio.png";
import passopLogo from "./assets/work_logo/passop.png";
import cityLogo from "./assets/work_logo/3D_City.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import twitterLogo from "./assets/work_logo/twitter.png";





export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "APIs", logo: apiLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ibmLogo,
    role: "Data Analytics internship",
    company: "IBM",
    date: "Nov 2023",
    desc: "Interned at IBM in Data Analytics. Learned how to clean data, create visualizations using graphs and dashboards, and draw insights from real-world datasets. Also learned the basics of data storytelling — turning raw numbers into clear insights for business use.",
    skills: ["Python", "Data Cleaning", "Data Visualization", "SQL"],
  },
  {
    id: 1,
    img: inffvirtechLogo,
    role: "Java Internship ",
    company: "INFOVIRTECH",
    date: "Jun 2023 - Sep 2023",
    desc: "Completed an internship of 3 months focused on Java development, where I worked, building Java-based applications. Gained hands-on experience in core Java concepts such as OOPs, exception handling, collections, file I/O, and JDBC, MySQL. Collaborated with the team to develop backend logic and understand real-world software development workflows.",
    skills: [
      "Collections Framework",
      "Core Java",
      "Exception Handling",
      "File Handling",
      "OOPs Concepts",
      "Eclipse / IntelliJ",
      "MySQL",
      "JDBC",
      "Git",
    ],
  },
  {
    id: 2,
    img: techmahindraLogo,
    role: "Associate",
    company: "Tech Mahindra",
    date: "Oct 2023 - Jan 2024",
    desc: "Worked at Tech Mahindra as an Associate, gaining exposure to a corporate environment and enhancing communication and problem-solving skills.",
    skills: [
      "Effective",
      "communication",
      "English proficiency",
      "Problem-solving",
      "Team collaboration",
      "Adaptability",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: jsuLogo,
    school: "J.S. University, Shikohabad",
    date: "2020 - 2023",
    grade: "7 CGPA",
    desc: "I have completed my Diploma in Computer Science, where I built a strong foundation in core areas like computer applications, programming languages, web development, and mobile app development. Through hands-on projects and labs, I gained practical experience in building real-world applications and understanding how software systems work. The program also helped me develop logical thinking, problem-solving, and a passion for technology that continues to drive my learning journey.",
    degree: " Diploma in Computer Science & Engineering",
  },

  {
    id: 1,
    img: vimLogo,
    school: "Vimla Inter College , Sonbhadra",
    date: " 2018 - 2020",
    desc: " I completed my Class 12 education from Vimla Intermediate College, Sonbhadra (UP Board), with a focus on Physics, Chemistry, and Mathematics (PCM). During this period, I developed a strong foundation in analytical thinking, logical reasoning, and problem-solving. My interest in technology and structured learning began here, which later motivated me to pursue further studies in Computer Science and software development.",
    degree: "UP(XII) - PCM with",
  },
  {
    id: 2,
    img: sjhLogo,
    school: " St Xavier's High School, Sonbhadra",
    date: "Apr 2016 - March 2018",
    desc: "I completed my Class 10 education from St. Xavier's High School, Sonbhadra (UP Board), with a focus on Science, which included subjects like Physics, Chemistry, and Biology. This academic foundation helped me build curiosity towards scientific concepts and develop analytical thinking and problem-solving skills at an early stage.",
    degree: "UP(X), Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Stay Finder",
      Note: `Backend may be temporarily inactive due to Render's limit reached.`,
    description:
      "A full-stack booking platform where users can explore, filter, and book properties for short stays, while hosts can manage listings, track bookings, and set availability. The platform features secure Stripe payments, real-time location with Google Maps, and dual authentication systems for users and hosts, providing a seamless and scalable stay management experience.",
    image: stayfinderLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/Harshit-HK/Stay-Finder",
    webapp: "https://stay-finder-deployed.vercel.app/",
  },
    {
    id: 1,
    title: "3D MotionCity",
    description:
      "AExperience a dynamic 3D animated city that reacts as you scroll smooth, engaging, and fully interactive. From motion to depth, every detail is crafted for visual impact. Dive in and explore the vibe.",
    image: cityLogo,
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    github: "https://github.com/Harshit-HK/GSAP-animation/tree/main/GSAP_animation",
    webapp: "https://gsap-animation-b4ij.vercel.app/",
  },

  {
    id: 2,
    title: "Host Panel of Stay Finder",
      Note: `Backend may be temporarily inactive due to Render's limit reached.`,
    description:
      "A full-stack booking platform multi-host panel where hosts can log in, add, update, or delete property listings, manage bookings, and set availability. Hosts can set their property location using Google Maps for real-time location input, offering a scalable and secure property management system.",
    image: StayhostLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/Harshit-HK/Stay-Finder",
    webapp: "https://stay-finder-deployed-j9oo.vercel.app",
  },
  
  {
    id: 3,
    title: "3D Portfolio",
    description:
      "A modern 3D portfolio website built with HTML, CSS, and JavaScript, featuring smooth animations and interactive elements to showcase projects, skills, and contact info in a visually engaging way. Designed for a standout first impression with responsive and user-friendly UI.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/Harshit-HK/3D-Portfolio",
    webapp: "https://3-d-portfolio-snowy-phi.vercel.app/",
  },
  {
    id: 4,
    title: "Forever",
      Note: `Backend may be temporarily inactive due to Render's limit reached.`,
    description:
      "A full-stack E-Commerce Web App where users can browse, search, and filter products, view product details, add to cart, and place orders with payment gateway. Includes JWT authentication, real-time cart updates. An admin panel allows managing products, updating stock, and handling orders. Built for a fast, clean, and scalable online shopping experience.",
    image: foleverLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/Harshit-HK/E-Commerce-Web-Applicatio/tree/main/E-Commerce-Web-Applicatio",
    webapp: "https://forever-deployed-iim9.vercel.app/",
  },
  
    {
    id: 5,
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/Harshit-HK/GitHub-Profile-Search/tree/main/GitHub-Profile-detective",
    webapp: "https://git-hub-profile-search-lake.vercel.app/",
  },
  {
    id: 6,
    title: "Password Manager - Local-Storage",
    description:
      "A secure password manager app that allows users to store and manage their passwords locally on their own computer without any online sync, ensuring full privacy and control. Designed for security, it provides a safe environment to manage credentials.",
    image: passopLogo,
    tags: ["HTML", "Tailwind CSS"],
    github: "https://github.com/Harshit-HK/Password-Manager-Local-Storage/tree/main/passop",
    webapp: "https://password-manager-local-storage-eta.vercel.app",
  },
  {
    id: 7,
    title: "Twitter Clone",
    description:
      "A clean and responsive Twitter clone built using HTML and Tailwind CSS, replicating the core layout and styling of the original platform. Features include a modern navbar, tweet feed layout, profile section, and smooth responsiveness across devices using utility-first CSS classes.",
    image: twitterLogo,
    tags: ["HTML", "Tailwind CSS"],
    github: "https://github.com/Harshit-HK/Twitter-Clone/tree/main/Twitter%20Clone",
    webapp: "",
  },
  {
    id: 8,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["HTML", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/Harshit-HK/Search-images/tree/main/Image-Search",
    webapp: "https://search-images-tau.vercel.app/",
  },
];
