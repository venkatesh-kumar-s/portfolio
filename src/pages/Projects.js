import { Avatar, Badge, Chip } from "@mui/material";
import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTitle } from "../components/customHooks/title";
import Search from "../components/Search";
import Statistics from "../components/Statistics";

//static data
import { ProjectsList } from "../data/projects";

const Projects = () => {
  useTitle("Projects");
  return (
    <div
      className="d-flex justify-content-center my-2"
      style={{ height: "90vh" }}
    >
      <Container>
        <div className="my-4 row">
          {/* search bar */}
          <div className="col-12 col-md-4">
            <Search placeholder="Search using project name, type, domain ..." />
          </div>

          {/* projects count */}
          <div className="col-12 col-md-8 d-flex justify-content-end">
            <Statistics />
          </div>
        </div>
        <br />
        {/* list of projects */}
        {ProjectsList?.map((r, i) => (
          <Card key={i} className="shadow-sm mb-4" style={{ borderRadius: 8 }}>
            <Card.Body>
              <Badge badgeContent={r?.type} color="primary">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <img
                      src={r?.image}
                      alt={r?.title}
                      style={{
                        borderRadius: 8,
                        objectFit: "contain",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-8">
                    <p className="h3">{r?.title}</p>
                    <hr />
                    <p className="text-justify mb-0">{r?.desc}</p>
                    <Link
                      to="/projects"
                      className="my-1"
                      style={{ textDecoration: "none" }}
                    >
                      <small>View More</small>
                    </Link>
                    <div className="mt-3">
                      {r?.stack?.map((s, j) => (
                        <Chip
                          key={j}
                          avatar={<Avatar src={s?.icon} />}
                          label={s?.value}
                          size="small"
                          // color="success"
                          className="me-2"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Badge>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
