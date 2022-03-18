import React from "react";
import "../components/components.css";

//icons
import education from "../assets/images/icons/education.ico";
import blogs from "../assets/images/icons/blogs.ico";
import career from "../assets/images/icons/career.ico";
import about from "../assets/images/icons/about.ico";
import projects from "../assets/images/icons/projects.ico";
import { LandingStats } from "../data/menu";

const LandingStatistics = () => {
  return (
    <div
      className="row m-auto w-100 text-center"
      style={{ fontWeight: "bold", fontSize: "large" }}
    >
      {LandingStats?.map((r, i) => (
        <div
          key={i}
          className="col-md-3 col-sm-12 shadow"
          style={{ backgroundColor: r?.tone }}
        >
          <p className="bold">{r?.value}</p>
          <p>
            <img
              src={r?.icon}
              alt="projects"
              style={{ objectFit: "contain", width: 25 }}
            />
            &nbsp;
            {r?.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LandingStatistics;
