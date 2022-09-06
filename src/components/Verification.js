import { Container } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, Slide } from "react-toastify";
import Blogs from "./AdminControls/Blogs";
import Introduction from "./AdminControls/Introduction";
import Projects from "./AdminControls/Projects";
import Qna from "./AdminControls/Qna";
import Skills from "./AdminControls/Skills";
import ComboBox from "./ComboBox";
import "react-toastify/dist/ReactToastify.css";

const Verification = () => {
  const [operation, setOperation] = useState({
    value: "introduction",
    label: "Introduction",
  });
  return (
    <div>
      <Container className="mt-5">
        <div className="col-sm-12 col-md-3">
          <ComboBox setOperation={setOperation} operation={operation} />
        </div>
        <br />
        <hr />
        <br />
        {operation?.value === "introduction" && <Introduction />}
        {operation?.value === "projects" && <Projects />}
        {operation?.value === "blogs" && <Blogs />}
        {operation?.value === "skills" && <Skills />}
        {operation?.value === "qnas" && <Qna />}
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        transition={Slide}
        closeButton={false}
      />
    </div>
  );
};

export default Verification;
