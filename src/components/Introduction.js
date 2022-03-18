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
            className="mt-3"
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

            <div
              className="mt-4 p-2"
              style={{ backgroundColor: "#ffffff20", borderRadius: 10 }}
            >
              <p className="text-justify my-auto mx-1">
                A Passionate Software Developer, currently focused on frontend
                development with use of cutting edge industry level technologies
                like{" "}
                <a
                  href="https://reactjs.org/"
                  className="ext-link"
                  target="_blank"
                >
                  React.js
                </a>{" "}
                with React Hooks,{" "}
                <a
                  href="https://reactrouter.com/"
                  className="ext-link"
                  target="_blank"
                >
                  React Router V6
                </a>
                ,{" "}
                <a
                  href="https://graphql.org/"
                  className="ext-link"
                  target="_blank"
                >
                  GraphQL
                </a>
                ,{" "}
                <a
                  href="https://redux.js.org/"
                  className="ext-link"
                  target="_blank"
                >
                  Redux
                </a>{" "}
                and also well versed with CSS in JS concepts and external css
                frameworks and libraries like{" "}
                <a href="https://mui.com/" className="ext-link" target="_blank">
                  Material UI
                </a>
                ,{" "}
                <a
                  href="https://getbootstrap.com/"
                  className="ext-link"
                  target="_blank"
                >
                  Bootstrap
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="ext-link"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduction;
