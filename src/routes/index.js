import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Education from "../pages/Education";
import Career from "../pages/Career";
import FallBack from "../components/FallBack";

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
