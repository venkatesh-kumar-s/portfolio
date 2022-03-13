import React from "react";
import { motion } from "framer-motion";

const FallBack = () => {
  return (
    <div style={{ position: "absolute", top: 500 }}>
      <motion.div
        animate={{
          x: 0,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          transitionEnd: {
            display: "none",
          },
        }}
      />
    </div>
  );
};

export default FallBack;
