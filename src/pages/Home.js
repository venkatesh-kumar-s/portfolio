import { Avatar } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import "../components/components.css";
import Introduction from "../components/Introduction";
import LandingStatistics from "../components/LandingStatistics";
import Skills from "../components/Skills";
import StrengthWeakness from "../components/StrengthWeakness";

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
      <div data-aos="fade-up" className="mx-auto my-5 skills-rating">
        <Skills />
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
      <StrengthWeakness />
      <div></div>
    </div>
  );
};

export default Home;
