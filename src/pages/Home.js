import { Avatar } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import "../components/components.css";
import Introduction from "../components/Introduction";
import LandingStatistics from "../components/LandingStatistics";
import Skills from "../components/Skills";

import quoteRight from "../assets/images/quote-right.png";
import quoteLeft from "../assets/images/quoteLeft.png";

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
      <div data-aos="fade-up" className="strengths-weakness bg-info shadow">
        <div className="strengths">
          <Container fluid>
            <h1 className="d-flex">
              <Avatar src={quoteLeft} sx={{ height: 60, width: 60 }} />
              &nbsp; <span className="my-auto">Strengths . . . </span>
            </h1>
            <ul className="my-5 my-md-4">
              <li>sedee</li>
              <li>sedee</li>
              <li>sedee</li>
              <li>sedee</li>
              <li>sedee</li>
            </ul>
          </Container>
        </div>
        <div className="weakness">
          <Container
            fluid
            className="text-end"
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
            }}
          >
            <ul className="my-5 my-md-4">
              <li>sedee</li>
              <li>sedee</li>
              <li>sedee</li>
              <li>sedee</li>
              <li>sedee</li>
            </ul>
            <h1 className="d-flex float-end">
              <span className="my-auto">. . . Weakness </span>&nbsp;{" "}
              <Avatar src={quoteRight} sx={{ height: 60, width: 60 }} />
            </h1>
          </Container>
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
