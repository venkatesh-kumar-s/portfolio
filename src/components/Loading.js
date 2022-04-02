import { Avatar, LinearProgress } from "@mui/material";
import React from "react";
import shiva from "../assets/images/shiva.jpg";
import "./components.css";

const Loading = () => {
  return (
    <div className="d-flex flex-column">
      <LinearProgress
        color="primary"
        className="shadow"
        sx={{ height: "1px", zIndex: 1000 }}
      />
      <div
        className="w-100"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div
          className="my-auto"
          style={{
            display: "grid",
            //height: "100%",
            placeContent: "center",
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
    </div>
  );
};

export default Loading;
