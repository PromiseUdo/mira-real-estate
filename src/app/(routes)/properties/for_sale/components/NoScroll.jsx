"use client";

// components/NoScroll.js
import { useEffect } from "react";

const NoScroll = ({ active }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return null;
};

export default NoScroll;
