import { orange } from "@mui/material/colors";
import React, { useState } from "react";
import Select from "react-select";

const ComboBox = ({ operation, setOperation }) => {
  const options = [
    { value: "introduction", label: "Introduction" },
    { value: "projects", label: "Projects" },
    { value: "blogs", label: "Blogs" },
    { value: "skills", label: "skills" },
    { value: "qnas", label: "Questions n Answers" },
  ];
  return (
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
  );
};

export default ComboBox;
