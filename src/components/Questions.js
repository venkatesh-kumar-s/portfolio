import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import { QUESTIONS_LIST } from "../gql/queries";

const Questions = () => {
  const { data, loading } = useQuery(QUESTIONS_LIST);

  return (
    <div style={{ borderRadius: 50 }}>
      {data?.questions?.map((r, i) => (
        <Accordion
          key={i}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            margin: "10px 0",
            color: "whitesmoke",
          }}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "whitesmoke" }} />}
            sx={{ backgroundColor: "#0F6E81" }}
          >
            {r?.question}
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "#0F6E8140", color: "black" }}
          >
            {r?.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Questions;
