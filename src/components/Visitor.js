import React, { useEffect, useState } from "react";
import axios from "axios";

const Visitor = () => {
  const [state, setState] = useState({ mac: "1234" });

  const success = (gps) => {
    axios("https://geolocation-db.com/json/");
  };

  useEffect(() => {
    const getLocation = () => {
      //navigator.geolocation.getCurrentPosition(success, failed);
    };
    getLocation();
  }, []);

  return null;
};

export default Visitor;
