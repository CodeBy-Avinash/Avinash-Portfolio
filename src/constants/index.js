import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import resumePDF from "../assets/avinashresume.pdf";

export const HERO_CONTENT = `I'm Avinash, a passionate and skilled fullstack developer specializing in Python. With a strong foundation in both frontend and backend technologies, I've gained expertise in HTML, CSS, JavaScript, Bootstrap, and React on the frontend, along with Python, Django, and MySQL on the backend. I enjoy building efficient, user-friendly applications and am always eager to explore new technologies and take on challenging projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for building efficient, user-friendly web applications. Although I'm just beginning my professional journey, I have a solid foundation in full stack development, having worked with HTML, CSS, JavaScript, Bootstrap, and React on the frontend, as well as Python, Django, and MySQL on the backend. My journey into web development was sparked by a deep curiosity about how things work, which has grown into a commitment to learning and tackling new challenges. I thrive in collaborative environments and enjoy problem-solving to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and aim to contribute to open-source projects in the near future.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Django", "Python", "Bootstrap", "MySQL", "HTML"],
    link: "https://django-ecommerce-kepz.onrender.com", // Add your project link here
  },
  {
    title: "Django-CRM",
    image: project2,
    description:
      "This CRM application is a web-based system built using Django that enables efficient management of customer data. Designed with CRUD (Create, Read, Update, Delete) functionality.",
    technologies: ["Django", "MySQL", "Bootstrap", "HTML"],
    link: "https://dcrm-rc6j.onrender.com", // Add your project link here
  },
  {
    title: "Einstein AI Chat App",
    image: project3,
    description:
      "Built an AI-powered chatbot that simulates Albert Einstein using Google Gemini models, LangChain, and Gradio. Implemented custom system prompts, chat history management, and an interactive UI, enabling the model to respond with humor and personal anecdotes. Deployed the app for real-time user interaction..",
    technologies: ["Python", "LangChain", "Gemini", "Gradio"],
    link: "https://1040c91f2109f09a09.gradio.live", // Add your project link here
  },
  {
    title: "Spotify-Clone",
    image: project4,
    description:
      "The Spotify Clone is a web-based music streaming application built with React that mimics Spotify's core functionalities, allowing users to explore, play, and organize music tracks.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://avinash-spotifyclone.netlify.app", // Add your project link here
  },
];


export const CONTACT = {
  address: "31st,Anna Nagar,Tindivanam,Tamilnadu,India ",
  phoneNo: "+91 8667801612 ",
  email: "eavinash077@gmail.com",
};
