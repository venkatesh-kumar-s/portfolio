import { useQuery } from "@apollo/client";
import React from "react";
import { SKILLS_LIST } from "../gql/queries";

//loading skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Rating } from "@mui/material";

const Skills = () => {
  const { data, loading } = useQuery(SKILLS_LIST);

  return (
    <>
      {loading ? (
        <div className="row">
          {data?.skills?.map((r, i) => (
            <div key={i} className="col-sm-12 col-md-5 mx-auto">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <h5 className="text-light">{r?.title}</h5>
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
      ) : (
        <SkeletonTheme
          baseColor="#33b5e5"
          highlightColor="white"
          height="200px"
          borderRadius={10}
        >
          <Skeleton />
        </SkeletonTheme>
      )}
    </>
  );
};

export default Skills;
