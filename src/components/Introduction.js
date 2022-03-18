import { Avatar } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

//assets
import dp from "../assets/images/profilepic.jpg";
import { Intro } from "../data/introduction";

const Introduction = () => {
  return (
    <Container className="mt-4 h-100">
      <div className="row h-100 text-light">
        <div className="col-md-6 col-sm-12 my-auto">
          <Avatar
            src={dp}
            alt="venkatesh kumar"
            className="mt-5"
            sx={{ width: 250, height: 250, margin: "auto" }}
          />
        </div>

        <div className="col-md-6 col-sm-12 my-auto">
          <p className="display-4 text-center text-md-start mt-5">
            <span className="text-warning">V</span>enkatesh Kumar S
          </p>

          <div className="content text-justify mt-4">
            {Intro?.map((r, i) => (
              <div key={i} className="row">
                {/* <p className="col-3">{r?.type} :</p> */}
                <div className="col d-flex">
                  <Avatar
                    src={r?.icon}
                    alt={r?.value}
                    sx={{ height: 20, width: 20, margin: 1 }}
                  />
                  <p className="my-auto">{r?.value}</p>
                </div>
              </div>
            ))}

            <p className="mt-4">
              A Passionate Software Developer, currently focused on frontend
              development with use of cutting edge industry level technologies
              like React.js with React Hooks, React Router V6, GraphQL, Redux
              and also well versed with CSS in JS concepts and external css
              frameworks and libraries like Material UI, Bootstrap, Tailwind
              CSS.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
