import { Button, ButtonGroup, Tooltip } from "@mui/material";
import React from "react";
import { Stats } from "../data/stats";

const Statistics = () => {
  return (
    <ButtonGroup
      className="bg-light shadow-sm"
      aria-label="outlined primary button group"
    >
      {Stats?.map((r, i) => (
        <Tooltip key={i} title={r?.alt}>
          <Button>
            <img
              src={r?.icon}
              alt={r?.alt}
              style={{
                objectFit: "contain",
                width: 20,
                marginRight: 5,
              }}
            />
            {r?.value}
          </Button>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};

export default Statistics;
