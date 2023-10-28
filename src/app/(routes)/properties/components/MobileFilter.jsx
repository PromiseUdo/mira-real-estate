import clsx from "clsx";
import React from "react";

const MobileFilter = ({ show, onClose }) => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-screen h-screen bg-gray-100 flex items-center justify-center",
        show ? "block" : "hidden"
      )}
    >
      <button onClick={onClose}>Close</button>
      Mobile Filters
    </div>
  );
};

export default MobileFilter;
