import React from "react";
import ConceptCard from "../../ConceptCard";
import "./index.css";
import image from "../../../assets/images/concepts/image-reflection.jpg"

const ImageReflection = () => {
  return (
    <ConceptCard>
      <img src={image} className="image" />
    </ConceptCard>
  );
};

export default ImageReflection;
