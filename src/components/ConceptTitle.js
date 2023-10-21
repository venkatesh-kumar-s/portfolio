import React from "react";

const ConceptTitle = ({ title, content }) => {
  return (
    <div className="row bg-light text-dark">
      <p
        className="col-3 col-sm-12 p-1 text-start px-5"
        style={{ margin: "auto" }}
      >
        {title}
      </p>
      <p
        className="col-9 col-sm-12 p-1 text-end px-5"
        style={{ margin: "auto" }}
      >
        {content}
      </p>
      {/* <marquee className="col-10">{content}</marquee> */}
    </div>
  );
};

export default ConceptTitle;
