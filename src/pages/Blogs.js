import moment from "moment";
import React, { useState } from "react";
import { Badge, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTitle } from "../components/customHooks/title";
import Loading from "../components/Loading";
import Search from "../components/Search";

const Blogs = () => {
  useTitle("Blogs");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div className="my-5">
      <Container>
        <div className="my-4 row">
          {/* search bar */}
          <div className="col-12 col-md-4">
            <Search
              placeholder="Search using blog name, type ..."
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {data?.blogs?.map((r, i) => (
            <Link
              key={i}
              to={`/blogs/${r?.id}`}
              className="col text-dark text-justify"
              style={{ textDecoration: "none" }}
            >
              <Card
                className="shadow-sm border-0"
                style={{
                  height: 400,
                  overflow: "hidden",
                }}
              >
                <Badge
                  bg={
                    r?.type === "personal"
                      ? "info"
                      : r?.type === "technical"
                      ? "danger"
                      : r?.type === "career"
                      ? "success"
                      : "warning"
                  }
                  style={{
                    position: "absolute",
                    right: 5,
                    top: 5,
                    textTransform: "capitalize",
                    fontWeight: 500,
                    fontSize: "x-small",
                  }}
                >
                  {r?.type}
                </Badge>
                <img
                  className="card-img-top"
                  src={r?.thumbnail}
                  alt="card-banner"
                />
                <div className="card-body pb-0">
                  <h5 className="card-title">{r?.title}</h5>
                  <small className="card-text text-muted">
                    {moment(r?.created_at)?.format("DD MMM, YYYY")}
                  </small>
                  <p
                    className="text-justify"
                    style={{ fontSize: "normal", textOverflow: "ellipsis" }}
                  >
                    {r?.introduction}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <hr />
        <p className="text-center">
          All the above blogs are based upon personal experiences & thorough
          internet research.
        </p>
      </Container>
    </div>
  );
};

export default Blogs;
