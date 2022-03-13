import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Blogs = React.lazy(() => import("../pages/Blogs"));
const Education = React.lazy(() => import("../pages/Education"));
const Career = React.lazy(() => import("../pages/Career"));
const FallBack = React.lazy(() => import("../components/FallBack"));

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
    path: "/blogs",
    component: <Blogs />,
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
    path: "*",
    component: <FallBack />,
  },
];
