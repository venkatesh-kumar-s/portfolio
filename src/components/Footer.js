import React from "react";
import { Container } from "react-bootstrap";
import moment from "moment";

//css
import "./components.css";
import Social from "./Social";

const Footer = () => {
  const year = moment().format("YYYY");
  return (
    <div className="d-flex justify-content-between footer shadow w-100">
      <Container fluid>
        &copy; {year} {year !== "2022" && "- " + year}
        {", "}
        <a
          href="/admin-panel"
          className="text-secondary"
          style={{ textDecoration: "none", fontWeight: 500 }}
        >
          Venkatesh Kumar
        </a>
      </Container>
      <Social />
    </div>
  );
};

export default Footer;
