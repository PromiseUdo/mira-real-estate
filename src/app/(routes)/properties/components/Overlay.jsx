import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Overlay;
