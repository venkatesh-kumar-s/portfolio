import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Blogs = React.lazy(() => import("../pages/Blogs"));
const Education = React.lazy(() => import("../pages/Education"));
const Career = React.lazy(() => import("../pages/Career"));
const FallBack = React.lazy(() => import("../components/FallBack"));
const ProjectsDesc = React.lazy(() => import("../components/ProjectsDesc"));
const BlogsDesc = React.lazy(() => import("../components/BlogsDesc"));
const AdminPanel = React.lazy(() => import("../pages/Admin"));

export const AppRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/projects/:id",
    component: <ProjectsDesc />,
  },
  {
    path: "/blogs",
    component: <Blogs />,
  },
  {
    path: "/blogs/:id",
    component: <BlogsDesc />,
  },
  {
    path: "/education",
    component: <Education />,
  },
  {
    path: "/career",
    component: <Career />,
  },
  {
    path: "/admin-panel",
    component: <AdminPanel />,
  },
  {
    path: "*",
    component: <FallBack />,
  },
];
