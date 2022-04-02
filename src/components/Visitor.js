import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { INSERT_SITE_VISIT } from "../gql/mutation";
import axios from "axios";

const Visitor = () => {
  const [state, setState] = useState({ mac: "1234" });

  const [siteVisits] = useMutation(INSERT_SITE_VISIT);

  const success = (gps) => {
    axios("https://geolocation-db.com/json/").then((r) =>
      siteVisits({
        variables: {
          ...state,
          platform: navigator.userAgentData.platform,
          code: r?.data?.country_code,
          country: r?.data?.country_name,
          ip: r?.data?.IPv4,
          city: r?.data?.city,
          coordinates: {
            lat: gps.coords.latitude,
            lng: gps.coords.longitude,
            accuracy: gps.coords.accuracy,
          },
        },
      }).then(() => console.log("success"))
    );
  };

  const failed = (err) => console.log(err);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(success, failed);
    };
    getLocation();
  }, []);

  return null;
};

export default Visitor;
