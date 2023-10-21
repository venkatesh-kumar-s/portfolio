import React from "react";
import CutOutText from "../components/concepts/CutOutText";
import ConceptTitle from "../components/ConceptTitle";
import ImageReflection from "../components/concepts/ImageReflection";

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
