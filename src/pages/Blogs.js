import React from "react";
import { Container } from "react-bootstrap";
import { useTitle } from "../components/customHooks/title";
import Search from "../components/Search";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div
      className="d-flex justify-content-center my-2"
      style={{ height: "90vh" }}
    >
      <Container>
        <div className="my-4 row">
          <div className="col-12 col-md-4">
            <Search placeholder="Search using blog name, type ..." />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
