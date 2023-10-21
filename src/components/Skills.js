import React, { useState } from "react";

//loading skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Avatar, Rating } from "@mui/material";
import { SkillsList } from "../data/stack";

const Skills = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!loading ? (
        <div
          className="card mx-3 my-4 m-md-0 shadow border-0 bg-info"
          style={{ borderRadius: 10, overflow: "hidden" }}
        >
          <div className="card-header bg-dark">
            <p className="h1 text-light my-auto">Skills</p>
          </div>
          <div
            className="card-body row px-0"
            style={{ background: "#11111180" }}
          >
            {data?.skills?.map((r, i) => (
              <div key={i} className="col-sm-12 col-md-5 mx-auto">
                <table className="table table-borderless my-0">
                  <tbody>
                    <tr>
                      <td>
                        <h5 className="text-light d-flex">
                          <Avatar
                            variant="square"
                            src={SkillsList?.filter((f) => f?.icon === r?.icon)
                              ?.map((l) => l?.image)
                              ?.toString()}
                            sx={{ height: 25, width: 25, marginRight: 1 }}
                          />
                          {r?.title}
                        </h5>
                      </td>
                      <td className="float-end">
                        <Rating
                          key={i}
                          value={r?.rating}
                          size="large"
                          precision={0.5}
                          readOnly
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <Skeleton
            baseColor="#33b5e5"
            highlightColor="white"
            height="50px"
            borderRadius={10}
          />
          <Skeleton
            baseColor="#33b5e5"
            highlightColor="white"
            height="200px"
            borderRadius={10}
          />
        </>
      )}
    </>
  );
};

export default Skills;
