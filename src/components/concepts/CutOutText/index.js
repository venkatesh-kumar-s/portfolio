import React from "react";
import ConceptCard from "../../ConceptCard";
import './index.css';

const CutOutText = () => {
  return (
    <ConceptCard>
      <div className="background">
        <p className="text cutout">Cut Out Text</p>
        <p className="text">Cut Out Text</p>
      </div>
    </ConceptCard>
  );
};

export default CutOutText;
