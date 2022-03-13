import { Avatar } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import dp from "../assets/images/profilepic.jpg";

const Home = () => {
  return (
    <Container>
      <div className="row" style={{ height: "max-content" }}>
        <div className="col-12 col-md-4 pt-4">
          <Avatar
            src={dp}
            alt="venkatesh kumar"
            className="shadow"
            sx={{
              height: 200,
              width: 200,
            }}
          />
        </div>
        <div className="col-12 col-md-8">
          <p color="#FFA500" className="display-4">
            Venkatesh Kumar
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
