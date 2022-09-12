import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import Select from "react-select";
import { Button, ButtonGroup, Container } from "@mui/material";

const ComboBox = ({ operation, setOperation, setIsAdd, isAdd, toggle }) => {
  const options = [
    { value: "introduction", label: "Introduction" },
    { value: "projects", label: "Projects" },
    { value: "blogs", label: "Blogs" },
    { value: "skills", label: "skills" },
    { value: "qnas", label: "Questions n Answers" },
  ];
  return (
    <>
      <div className="col-sm-12 col-md-3">
        <Select
          className="shadow"
          defaultValue={{ value: "introduction", label: "Introduction" }}
          options={options}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#ffc300",
              primary: "black",
              neutral0: "#a9def9",
            },
          })}
          styles={{
            dropdownIndicator: (e) => ({
              ...e,
              svg: {
                fill: "black",
              },
            }),
            indicatorSeparator: () => null,
            container: (e) => ({
              ...e,
              border: "1.5px solid black",
              borderRadius: 5,
              color: "black",
            }),
          }}
          onChange={(e) => setOperation(e)}
        />
      </div>
      <div className="col-sm-12 col-md-auto my-4 my-md-auto">
        <ButtonGroup variant="contained">
          <Button
            onClick={() => toggle(true)}
            color={isAdd ? "success" : "info"}
          >
            Add
          </Button>
          <Button
            onClick={() => toggle(false)}
            color={!isAdd ? "success" : "info"}
          >
            Modify
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ComboBox;
