import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Venkatesh Kumar | " + title;
    return () => {
      document.title = prevTitle;
    };
  });
};
