// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Gasser",
  middleName: "",
  lastName: "Elbanna",
  message: "It takes only one voice at the right pitch to start an avalanche.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/gasserelbanna",
    },
    {
      image: "fas fa-graduation-cap",
      url: "https://scholar.google.com/citations?user=mvMHpo8AAAAJ&hl=en&oi=aohttps://scholar.google.com/citations?user=mvMHpo8AAAAJ&hl=en&oi=ao",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/gasser-elbanna-b38802127/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/gasser_elbanna/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/gasser.jpg"),
  imageSize: 400,
  message: "Hey There! Thank you for visitng my page. My name is Gasser Elbanna. I am a graduate research intern at MIT/HMS working with Satrajit Ghosh in the Senseable Intillegence Group at the McGovern Institute for Brain and Cognitive Sciences. I am a MSc. student at EPFL in Life Sciences Engineering with a specialization in Neuroscience and Neuro-engineering. I received the Bertarelli Fellowship to carry out my MSc. thesis at Harvard Medical School. My BSc. degree was in Systems and Biomedical Engineering at Cairo University.",
  resume: require("../editable-stuff/resume.pdf"),
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Projects",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hybrid.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "gasserelbanna",
  reposLength: 0,
  specificRepos: ["serab-byols", "vocal-identity-jupyter-book"],
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to reach out at",
  email: "gelbanna@mit.edu",
};

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'BSc. in Systems and Biomedical Engineering',// Here Add Company Name
      companylogo: require('../assets/img/cairo.png'),
      date: 'Sep 2015 – Aug 2020',
    },
    {
      role: 'MSc. in Neuroscience and Neuro-engineering',
      companylogo: require('../assets/img/epfl1.png'),
      date: 'Sep 2020 – Present',
    },
  ]
}

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Graduate Research Intern',// Here Add Company Name
      companylogo: require('../assets/img/McGovern.jpg'),
      date: 'March 2022 – Present',
      width: 400,
    },
    {
      role: 'Voice AI Intern',// Here Add Company Name
      companylogo: require('../assets/img/Logitech.png'),
      date: 'August 2021 – February 2022',
      width: 400,
    },
    {
      role: 'Audio Signal Processing Intern',
      companylogo: require('../assets/img/idiap.png'),
      date: 'July 2021 – September 2021',
      width: 400,
    },
    {
      role: 'Research Assistant',
      companylogo: require('../assets/img/iGH.png'),
      date: 'March 2021 – October 2021',
      width: 400,
      height: 300,
    },
  ]
}

// Blog SECTION
 const blog = {
   show: true,
 };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, education };
