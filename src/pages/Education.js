import React from "react";
import { useTitle } from "../components/customHooks/title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EducationHistory } from "../data/education";
import "./pages.css"

const Education = () => {
  useTitle("Education");
  return (
    <div className="education">
      <VerticalTimeline>
        {EducationHistory?.map((edu, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "whitesmoke",
              color: "#091a32",
            }}
            dateClassName="date"
            contentArrowStyle={{ borderRight: "7px solid whitesmoke" }}
            date={edu.timeline}
            iconStyle={{ background: "whitesmoke", padding: "1%" }}
            icon={
              <img
                src={edu.icon}
                draggable={false}
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            }
          >
            <img
              src={edu.logo}
              draggable={false}
              style={{
                position: "absolute",
                objectFit: "contain",
                width: "10%",
                right: "2%",
                top: "6%",
              }}
            />
            <h4 className="vertical-timeline-element-title text-success">
              {edu.institute}
            </h4>
            <hr className="text-primary" style={{width:'50%'}}/>

            <h6 className="vertical-timeline-element-subtitle">{edu.course}</h6>
            
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
