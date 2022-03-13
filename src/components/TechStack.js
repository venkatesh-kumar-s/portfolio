import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import { Stack } from "../data/stack";
import "./components.css";

const TechStack = () => {
  return (
    <div className="d-flex">
      {Stack?.map((r, i) => (
        <Tooltip key={i} title={r?.alt}>
          <Avatar src={r?.image} alt={r?.alt} className="me-1" />
        </Tooltip>
      ))}
    </div>
  );
};

export default TechStack;
