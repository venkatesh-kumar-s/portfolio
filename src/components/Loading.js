import { Avatar, LinearProgress } from "@mui/material";
import React from "react";
import shiva from "../assets/images/shiva.jpg";
import "./components.css";

const Loading = () => {
  return (
    <div>
      <LinearProgress
        color="primary"
        className="shadow"
        sx={{ height: "3px" }}
      />
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "90vh",
          position: "relative",
        }}
      >
        <div className="loader"></div>
        <img
          src={shiva}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            objectFit: "contain",
            width: 70,
            borderRadius: "100%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
