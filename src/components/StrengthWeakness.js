import { Avatar } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

import quoteRight from "../assets/images/quote-right.png";
import quoteLeft from "../assets/images/quoteLeft.png";
import "../components/components.css";

const StrengthWeakness = () => {
  return (
    <div className="strengths-weakness">
      <div className="strengths">
        <Container fluid className="px-0">
          <h1 className="d-flex">
            <Avatar src={quoteLeft} sx={{ height: 60, width: 60 }} />
            &nbsp; <span className="my-auto">Strengths . . . </span>
          </h1>
          <ul
            className="mt-4 mt-md-4 p-0 px-md-3"
            style={{ fontWeight: 500, listStyle: "none" }}
          >
            <li>- Hungry for upgrades</li>
            <li>- Able to work alone</li>
            <li>- Great Team Player</li>
            <li>- Confidence</li>
            <li>- Creative</li>
          </ul>
        </Container>
      </div>
      <div className="weakness bg-transparent">
        <Container
          fluid
          className="text-end"
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        >
          <ul className="mb-3" style={{ fontWeight: 500, listStyle: "none" }}>
            <li>Curiosity -</li>
            <li>Seek for perfection -</li>
            <li>Strings attached to trends -</li>
          </ul>
          <h1 className="d-flex float-end">
            <span className="my-auto">. . . Weakness </span>&nbsp;{" "}
            <Avatar src={quoteRight} sx={{ height: 60, width: 60 }} />
          </h1>
        </Container>
      </div>
    </div>
  );
};

export default StrengthWeakness;
