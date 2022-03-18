import { Avatar } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import dp from "../assets/images/profilepic.jpg";
import "../components/components.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <div className="mt-4">
      <div className="section"></div>
      <div data-aos="fade-up" className="section">
        where do you see yourself in 5 years
      </div>
      <div data-aos="fade-right" className="section">
        what kind of work environment do you like most?
      </div>
      <div data-aos="fade-left" className="section">
        what is the professional experience you are most proud of?
      </div>
      <div data-aos="fade-right" className="section">
        what are you looking for in a new position?
      </div>
      <div data-aos="fade-left" className="section">
        strengths & weakness
      </div>
      <div data-aos="fade-right" className="section">
        How would you boos or coworkers describe you?
      </div>
      <div data-aos="fade-left" className="section">
        How would you deal with pressure or stressful situations?
      </div>
    </div>
  );
};

export default Home;
