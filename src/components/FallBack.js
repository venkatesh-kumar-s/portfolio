import { Avatar, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import warning from "../assets/images/icons/warning.ico";

const FallBack = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-info d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div>
        <div className="row">
          <div className="col d-flex">
            <Avatar
              variant="square"
              src={warning}
              alt="404"
              sx={{ height: 100, width: 100 }}
            />
            <p className="display-1">
              <b>404</b> <span className="text-muted">I</span>
            </p>
          </div>
          <div className="col-auto my-auto">
            <p className="my-auto" style={{ fontSize: "large" }}>
              The content you're trying to access doesn't exists!
              <Button
                variant="contained"
                size="small"
                className="col-4 my-2"
                onClick={() => navigate("/")}
              >
                Go To Home
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FallBack;
