import React from "react";
import CutOutText from "../concepts/CutOutText";
import ConceptTitle from "../ConceptTitle";
import ImageReflection from "../concepts/ImageReflection";

const Concepts = () => {
  return (
    <div>
      {/* CutOutText */}
      <ConceptTitle title={"Cut out text"} content={"Pure HTML, CSS"} />
      <CutOutText />

      {/* Image Reflection */}
      <ConceptTitle title={"Image Reflection"} content={"Pure HTML, CSS"} />
      <ImageReflection />

     
    </div>
  );
};

export default Concepts;
