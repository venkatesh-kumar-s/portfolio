import React, { useState } from "react";
import { useTitle } from "../components/customHooks/title";
import Verification from "../components/Verification";
import "../components/components.css";

const pass = "8801110025";

const Admin = () => {
  useTitle("Admin Panel");
  const [state, setState] = useState();

  return (
    <div>
      {state !== pass ? (
        <div
          style={{
            width: "100vw",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <input
            type="password"
            className="form-control shadow admin-pass text-center mx-auto"
            onChange={(e) => setState(e.target.value)}
            placeholder="Admin Key"
            style={{ fontSize: "2rem", color: "#3a5a40" }}
          />
        </div>
      ) : (
        <Verification />
      )}
    </div>
  );
};

export default Admin;
