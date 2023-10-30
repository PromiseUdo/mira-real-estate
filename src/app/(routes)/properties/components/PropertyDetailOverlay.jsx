"use client";

import { clsx } from "clsx";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PropertyDetailOverlay = ({ show, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div
      className={clsx(
        "z-[999999] fixed top-0 left-0 w-screen h-screen  bg-black/50",
        show ? "block" : "hidden"
      )}
      style={{
        overflow: "hidden",
        // background: "rgba(153, 217, 223, 0.5)",
      }}
    >
      <div className=" flex w-full gap-3 px-0 lg:px-20">
        <div className="w-full ">{children}</div>
        <button
          className="hidden lg:block ml-auto mt-4 bg-zee-shades-gray-4 border border-zee-border flex items-center justify-center w-[40px] h-[40px] rounded-[50%] text-xl bg-transparent text-white"
          onClick={onClose}
        >
          <AiOutlineClose color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default PropertyDetailOverlay;
