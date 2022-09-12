import { Button, ButtonGroup, Container } from "@mui/material";
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
  const [isAdd, setIsAdd] = useState(true);
  const toggle = (e) => setIsAdd(e);

  return (
    <div>
      <Container className="mt-5">
        <div className="row justify-content-between">
          <ComboBox
            setOperation={setOperation}
            operation={operation}
            toggle={toggle}
            isAdd={isAdd}
            setIsAdd={setIsAdd}
          />
        </div>
        <br />
        <hr />
        <br />
        {operation?.value === "introduction" && <Introduction isAdd={isAdd} />}
        {operation?.value === "projects" && <Projects isAdd={isAdd} />}
        {operation?.value === "blogs" && <Blogs isAdd={isAdd} />}
        {operation?.value === "skills" && <Skills isAdd={isAdd} />}
        {operation?.value === "qnas" && <Qna isAdd={isAdd} />}
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
