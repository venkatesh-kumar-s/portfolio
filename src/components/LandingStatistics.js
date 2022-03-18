import React from "react";
import "../components/components.css";

const LandingStatistics = () => {
  return (
    <div className="row m-auto w-100 text-center">
      <div
        className="col-md-3 col-sm-12 shadow"
        style={{ backgroundColor: "#cdb4db" }}
      >
        <p className="bold">6</p>
        <p>Projects</p>
      </div>
      <div
        className="col-md-3 col-sm-12 shadow"
        style={{ backgroundColor: "#ffc8dd" }}
      >
        <p className="bold">8</p>
        <p>Blogs</p>
      </div>
      <div
        className="col-md-3 col-sm-12 shadow"
        style={{ backgroundColor: "#bde0fe" }}
      >
        <p className="bold">16</p>
        <p>Education</p>
      </div>
      <div
        className="col-md-3 col-sm-12 shadow"
        style={{ backgroundColor: "#a2d2ff" }}
      >
        <p className="bold">3.2</p>
        <p>Experience</p>
      </div>
    </div>
  );
};

export default LandingStatistics;
