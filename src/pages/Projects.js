import { useQuery } from "@apollo/client";
import { Avatar, Chip } from "@mui/material";
import React, { useState } from "react";
import { Card, Container, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../components/customHooks/title";
import Search from "../components/Search";
import Statistics from "../components/Statistics";

//tech stack icons
import react from "../logo.svg";
import node from "../assets/images/node.svg";
import graphql from "../assets/images/graphql.png";
import nest from "../assets/images/nest.svg";
import mongo from "../assets/images/mongo.png";
import redux from "../assets/images/icons/stack/redux.ico";
import javascript from "../assets/images/icons/stack/javascript.ico";
import bootstrap from "../assets/images/icons/stack/bootstrap.ico";
import html from "../assets/images/icons/stack/html.ico";
import css from "../assets/images/icons/stack/css.ico";

//static data
import { ProjectsList } from "../data/projects";
import { PROJECTS_LIST } from "../gql/queries";

//css & styles
import "../components/components.css";
import Loading from "../components/Loading";

const Projects = () => {
  useTitle("Projects");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { data, loading, refetch, error } = useQuery(PROJECTS_LIST, {
    variables: { search: `%${search}%` },
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="d-flex justify-content-center mt-2 mt-4">
      <Container className="mt-3 mt-md-0">
        <div className="my-4 row">
          {/* search bar */}
          <div className="col-12 col-md-4">
            <Search
              placeholder="Search using project name, type, domain ..."
              search={search}
              setSearch={setSearch}
            />
          </div>

          {/* projects count */}
          <div className="col-12 col-md-8 d-flex justify-content-md-end mt-3 mt-md-0">
            <Statistics />
          </div>
        </div>
        <br />
        {/* list of projects */}
        {data?.projects?.map((r, i) => (
          <Card
            id="projects"
            key={i}
            className="shadow-sm mb-4"
            style={{ borderRadius: 8 }}
          >
            <Card.Body>
              <Badge
                bg={
                  r?.type === "corporate"
                    ? "danger"
                    : r?.type === "personal"
                    ? "primary"
                    : r?.type === "freelance"
                    ? "warning"
                    : "success"
                }
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "x-small",
                }}
              >
                {r?.type}
              </Badge>
              <div className="row">
                <div
                  className="col-12 col-md-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/projects/${r?.id}`)}
                >
                  <img
                    src={r?.thumbnail}
                    alt={r?.title}
                    style={{
                      borderRadius: 8,
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-12 col-md-8">
                  <p className="h3">{r?.title + " - " + r?.captions}</p>
                  <hr />
                  <p className="text-justify mb-0">{r?.description}</p>
                  <Link
                    to={`/projects/${r?.id}`}
                    className="my-1"
                    style={{ textDecoration: "none" }}
                  >
                    <small>View More</small>
                  </Link>
                  <div className="mt-3 text-justify">
                    {r?.tech_stack?.map((s, j) => (
                      <Chip
                        key={j}
                        avatar={
                          <Avatar
                            src={
                              s === "react"
                                ? react
                                : s === "redux"
                                ? redux
                                : s === "HTML"
                                ? html
                                : s === "graphQL"
                                ? graphql
                                : s === "CSS"
                                ? css
                                : s === "bootstrap"
                                ? bootstrap
                                : javascript
                            }
                          />
                        }
                        label={s}
                        size="small"
                        className="me-2 my-1"
                        style={{ textTransform: "capitalize" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
        <hr />
        <p className="text-center">
          &copy; All Corporate projects are subjected to respective client's
          copyrights.
        </p>
      </Container>
    </div>
  );
};

export default Projects;
