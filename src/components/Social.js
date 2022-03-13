import { Tooltip } from "@mui/material";
import React from "react";
import { SocialNetworks } from "../data/social";

const Social = () => {
  return (
    <div className="d-flex">
      <p className="text-nowrap m-auto me-3">React out to me @ </p>
      {SocialNetworks?.map((r, i) => (
        <Tooltip key={i} title={r?.alt}>
          <a
            href={
              r?.email
                ? "mailto:venkatesh.vetro@gmail.com"
                : r?.mobile
                ? "tel:+918801110025"
                : r?.url
            }
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={r?.image}
              alt={r?.alt}
              style={{ objectFit: "contain", width: 20, marginRight: 5 }}
            />
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default Social;
