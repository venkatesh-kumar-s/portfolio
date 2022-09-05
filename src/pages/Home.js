import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import "../components/components.css";
import Introduction from "../components/Introduction";
import LandingStatistics from "../components/LandingStatistics";
import Questions from "../components/Questions";
import Skills from "../components/Skills";
import StrengthWeakness from "../components/StrengthWeakness";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <div>
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
        <div data-aos="fade-up" className="my-5">
          <h1>Q&As</h1>
          <Questions />
        </div>
      </Container>
      <StrengthWeakness />
      <div></div>
    </div>
  );
};

export default Home;
