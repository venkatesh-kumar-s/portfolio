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
      <div data-aos="fade-up" className="section"></div>
      <div data-aos="fade-up" className="section"></div>
      <div data-aos="fade-up" className="section"></div>
      <div data-aos="fade-up" className="section"></div>
      <div data-aos="fade-up" className="section"></div>
      <div data-aos="fade-right" className="section"></div>
    </div>
  );
};

export default Home;
