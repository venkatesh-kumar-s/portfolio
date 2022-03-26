import { Avatar } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";

import "../components/components.css";
import Introduction from "../components/Introduction";
import LandingStatistics from "../components/LandingStatistics";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <div className="">
      <div className="section"></div>
      <div data-aos="fade-up" className="main-section">
        <Introduction />
      </div>
      <div data-aos="fade-up" className="statistics-section m-auto d-flex">
        <LandingStatistics />
      </div>
      <div
        data-aos="fade-up"
        className="bg-info px-4 mx-auto my-5 skills-rating"
      >
        <div className="row mx-auto">
          <ProgressBar
            className="col-sm-12 col-md-5 p-0 my-4 mx-2"
            label="40%"
            variant="success"
            now={40}
          />
          <ProgressBar
            className="col-sm-12 col-md-5 p-0 my-4 mx-2"
            variant="info"
            now={20}
          />
          <ProgressBar
            className="col-sm-12 col-md-5 p-0 my-4 mx-2"
            variant="warning"
            now={60}
          />
          <ProgressBar
            className="col-sm-12 col-md-5 p-0 my-4 mx-2"
            variant="danger"
            now={80}
          />
        </div>
      </div>
      <Container>
        <div data-aos="fade-up" className="questions-section">
          where do you see yourself in 5 years
        </div>
        <div data-aos="fade-right" className="questions-section">
          what kind of work environment do you like most?
        </div>
        <div data-aos="fade-up" className="questions-section">
          what is the professional experience you are most proud of?
        </div>
        <div data-aos="fade-right" className="questions-section">
          what are you looking for in a new position?
        </div>
        <div data-aos="fade-up" className="questions-section">
          strengths & weakness
        </div>
        <div data-aos="fade-right" className="questions-section">
          How would you boos or coworkers describe you?
        </div>
        <div data-aos="fade-up" className="questions-section">
          How would you deal with pressure or stressful situations?
        </div>
        <div className="questions-section">hbhjbh</div>
      </Container>
    </div>
  );
};

export default Home;
