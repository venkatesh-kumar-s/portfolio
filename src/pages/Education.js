import React from "react";
import { useTitle } from "../components/customHooks/title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EducationHistory } from "../data/education";

const Education = () => {
  useTitle("Education");
  return (
    <div>
      <VerticalTimeline>
        {EducationHistory?.map((edu, idx) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "whitesmoke", color: "#091a32" }}
            contentArrowStyle={{ borderRight: "7px solid whitesmoke" }}
            date={edu.timeline}
            iconStyle={{ background: "whitesmoke", color: "#091a32" }}
            icon={<img src={edu.logo} style={{objectFit:'cover', width:'100%', margin:'auto'}}/>}
          >
            <h3 className="vertical-timeline-element-title">
              {edu.degree}
            </h3>
            <h3 className="vertical-timeline-element-subtitle">
              {edu.course}
            </h3>
            <p>{edu.institute}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
