/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Navya Kraleti",
  title: "Hi all, I'm Navya",
  subTitle: emoji(
    "A results-driven Software QA Engineer with 4+ years of experience in manual and automation testing, API validation, and cloud-based enterprise platforms. Experienced in Salesforce, AWS, and end-to-end QA delivery, ensuring reliable releases through strong ownership, collaboration, and quality-focused execution."
  ),
  resumeLink: 
  "https://drive.google.com/file/d/1VIR4PxKXNw7sFB0Nqelauw9f-zxLx-yG/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NavyaKraleti",
  linkedin: "https://www.linkedin.com/in/navya-kraleti-a55a33253/",
  gmail: "navyakraleti346@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "QA Engineer delivering end-to-end validation, automation, and cloud data testing for enterprise-scale applications.",
  skills: [
    emoji("⚡ End-to-end QA for enterprise web, cloud, and data platforms"),
    emoji("⚡ Test strategy, planning, and execution for complex workflows"),
    emoji("⚡ Functional, integration, and regression testing ownership"),
    emoji("⚡ Automation using Playwright & modern testing frameworks"),
    emoji("⚡ API, database, and backend validation for data accuracy"),
    emoji("⚡ Salesforce platform testing and workflow validation"),
    emoji("⚡ Cloud and ETL data testing across AWS and Azure"),
    emoji("⚡ Agile collaboration with developers and business stakeholders")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Postman",
    fontAwesomeClassname: "fas fa-paper-plane"
  },
  {
    skillName: "API",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "Automation",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Cloud",
    fontAwesomeClassname: "fas fa-cloud"
  },
  {
    skillName: "Testing",
    fontAwesomeClassname: "fas fa-vial"
  },
  {
    skillName: "Code",
    fontAwesomeClassname: "fas fa-code"
  },
  {
  skillName: "Bug Tracking",
  fontAwesomeClassname: "fas fa-bug"
},
{
  skillName: "Agile",
  fontAwesomeClassname: "fas fa-sync-alt"
}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Manipal Academy of Higher Education",
      logo: require("./assets/images/mahelogo.png"),
      subHeader: "MBA in Information Systems (Online)",
      duration: "Jun 2024 – Present (Expected Jul 2026)",
      desc: "GPA: 9.6 / 10",
      descBullets: [
        "Learning enterprise information systems, business analytics, and digital transformation concepts",
        "Studying IT strategy, data-driven decision making, and technology management",
        "Applying analytical thinking to real-world business and technology scenarios"
      ]
    },
    {
      schoolName: "Andhra University",
      logo: require("./assets/images/AULogo.webp"),
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "Jul 2018 – Jul 2021",
      desc: "GPA: 8.5 / 10",
      descBullets: [
        "Built strong foundation in programming, databases, and software development fundamentals",
        "Learned SDLC concepts, software testing basics, and system design principles",
        "Worked with core computer science subjects including DBMS, networking, and web technologies"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "QA Strategy & Manual Testing",
      progressPercentage: "95%"
    },
    {
      Stack: "Automation – Playwright & Framework Design",
      progressPercentage: "85%"
    },
    {
      Stack: "API & Backend Validation (Postman, SQL)",
      progressPercentage: "90%"
    },
    {
      Stack: "Salesforce & Cloud Testing (AWS)",
      progressPercentage: "85%"
    },
    {
      Stack: "ETL & Data Validation (Azure, PySpark)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quality Assurance Engineer",
      company: "Infosys Limited",
      companylogo: require("./assets/images/infosyslogo.webp"),
      date: "Aug 2021 – Sep 2025",
      desc: "QA Engineer with enterprise experience combining manual testing and automation to ensure release quality and system stability.",
      descBullets: [
        "Designed and executed end-to-end QA strategies across enterprise applications",
        "Executed 350+ functional, regression, integration, smoke, and UAT test cases",
        "Built and maintained Playwright (JavaScript) automation frameworks reducing regression effort by 40%",
        "Performed API testing and backend validation using Postman and SQL",
        "Managed 500+ defects using JIRA and Azure DevOps",
        "Collaborated within Agile squads to deliver high-quality releases"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "QA Projects",
  subtitle: "REAL WORLD QA AUTOMATION PROJECTS I BUILT",

  projects: [

{
  image: require("./assets/images/etl-banner.jpg"),
  projectName: "ETL & Data Testing - Azure",
  projectDesc:
    "Performed ETL and data warehouse validation for a healthcare analytics platform on Azure. Validated data pipelines across Raw, Silver, Gold, and Serve layers using SQL, PySpark, and Azure Databricks to ensure data quality and integrity.",
  footerLink: [
    {
      name: "GitHub",
      url: "https://github.com/NavyaKraleti/Stryker"
    }
  ]
},

{
  image: require("./assets/images/salesforcetesting.png"),
  projectName: "Salesforce & Cloud Integration Testing",
  projectDesc:
    "Executed end-to-end testing of a healthcare platform integrating Salesforce and AWS services (DynamoDB, S3, CloudWatch). Validated patient workflows, vendor integrations, and cross-system data integrity across multiple releases.",
  footerLink: [
    {
      name: "GitHub",
      url: "https://github.com/NavyaKraleti/Novartis"
    }
  ]
},

{
  image: require("./assets/images/API_Testing.png"),
  projectName: "Retail Banking API QA Simulation",
  projectDesc:
    "End-to-end API testing simulation for a Retail Banking system using Postman and Newman. Implemented functional validation, negative scenarios, and data-driven automation using CSV datasets.",
  footerLink: [
    {
      name: "GitHub",
      url: "https://github.com/NavyaKraleti/Retail-Banking-API-QA-Simulation"
    }
  ]
},

{
  image: require("./assets/images/playwrighttesting.jpeg"),
  projectName: "Playwright Automation",
  projectDesc:
    "Developed a UI automation framework using Playwright (JavaScript) for end-to-end e-commerce workflows. Implemented reusable page objects, validations, and stable test flows covering critical user journeys.",
  footerLink: [
    {
      name: "GitHub",
      url: "https://github.com/NavyaKraleti/demowebshop-playwright-js"
    }
  ]
}
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Professional certifications, learning milestones & recognitions",

  achievementsCards: [
    {
      title: "Tricentis Tosca Automation Specialist",
      subtitle:
        "Certified in enterprise-level automation testing covering AS1, AS2, AE1 and TDS1. Focused on automation design, execution, and scalable testing strategies.",
      image: require("./assets/images/toscalogo.png"),
      imageAlt: "Tosca Certification",
      footerLink: [
        {
          name: "Certificate",
          url: "https://academy.tricentis.com/share/gamification/badges/external/4ee85200-ce9b-4089-8d4f-df3858cc8453?lang=en"
        }
      ]
    },

    {
      title: "Postman API Testing – Coursera",
      subtitle:
        "Completed hands-on API testing training including REST validation, environment variables, test scripting, and data-driven automation using Postman.",
      image: require("./assets/images/Api-testing.jpg"),
      imageAlt: "Postman Certification",
      footerLink: [
        {
          name: "Certificate",
          url: "https://coursera.org/share/50626945edbf0269c89cb96f5bee17c6"
        }
      ]
    },

    {
      title: "Professional Recognition & Recommendations",
      subtitle:
        "Recognized by senior stakeholders for ownership, end-to-end validation expertise, and strong collaboration across enterprise QA projects.",
      image: require("./assets/images/recognition.png"),
      imageAlt: "Recognition",
      footerLink: [
        {
          name: "Recommendations",
          url: "https://www.linkedin.com/in/navya-kraleti-a55a33253/details/recommendations/?detailScreenTabIndex=0"
        }
      ]
    }
  ],

  display: true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume",
  resumeLink: "https://drive.google.com/file/d/1VIR4PxKXNw7sFB0Nqelauw9f-zxLx-yG/view?usp=sharing",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "QA Engineer | API Testing | Automation | Cloud Testing",
  number: "+971-50-6977870",
  email_address: "navyakraleti346@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
