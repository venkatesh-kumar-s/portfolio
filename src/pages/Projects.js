import { Avatar, Button, ButtonGroup, Tooltip } from "@mui/material";
import React from "react";
import { Card, Container, Table } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";
import { Stats } from "../data/stats";

const Projects = () => {
  useTitle("Projects");
  return (
    <div
      className="d-flex justify-content-center my-2"
      style={{ height: "90vh" }}
    >
      <Container>
        <div className="my-4 row">
          <div className="col-12 col-md-4">
            <input
              className="form-control shadow-sm"
              placeholder="Search using project name, type, domain ..."
            />
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-end">
            <ButtonGroup
              className="bg-light shadow-sm"
              aria-label="outlined primary button group"
            >
              {Stats?.map((r, i) => (
                <Tooltip key={i} title={r?.alt}>
                  <Button>
                    <img
                      src={r?.icon}
                      alt={r?.alt}
                      style={{
                        objectFit: "contain",
                        width: 20,
                        marginRight: 5,
                      }}
                    />
                    {r?.value}
                  </Button>
                </Tooltip>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
