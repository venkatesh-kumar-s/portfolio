import education from "../assets/images/icons/education.ico";
import blogs from "../assets/images/icons/blogs.ico";
import career from "../assets/images/icons/career.ico";
import about from "../assets/images/icons/about.ico";
import projects from "../assets/images/icons/projects.ico";

export const Menu = [
  {
    label: "About",
    path: "/about",
    icon: about,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: projects,
  },
  {
    label: "Blogs",
    path: "/blogs",
    icon: blogs,
  },
  {
    label: "Education",
    path: "/education",
    icon: education,
  },
  {
    label: "Career",
    path: "/career",
    icon: career,
  },
];

export const LandingStats = [
  {
    icon: projects,
    label: "Projects",
    value: 6,
    tone: "#cdb4db",
  },
  {
    icon: blogs,
    label: "Blogs",
    value: 8,
    tone: "#ffc8dd",
  },
  {
    icon: education,
    label: "Education",
    value: 16,
    tone: "#bde0fe",
  },
  {
    icon: career,
    label: "Experience",
    value: 3.2,
    tone: "#a2d2ff",
  },
];
