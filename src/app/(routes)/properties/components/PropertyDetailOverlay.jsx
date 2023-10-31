"use client";

import { clsx } from "clsx";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PropertyDetailOverlay = ({ show, onClose, children }) => {
  return (
    <div
      className={clsx(
        "z-[999999] fixed bottom-0 left-0 w-screen h-screen md:h-[calc(100vh-3.5rem)] lg:w-screen lg:h-screen  bg-black/60",
        show ? "block" : "hidden"
      )}
      style={{
        overflow: "hidden",
      }}
    >
      <div className=" flex w-full gap-3 px-0 lg:px-20">
        <div className="w-full ">{children}</div>
        <button
          className="hidden lg:flex ml-auto mt-4 bg-zee-shades-gray-4 border border-zee-border  items-center justify-center w-[40px] h-[40px] rounded-[50%] text-xl  text-white"
          onClick={onClose}
        >
          <AiOutlineClose color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default PropertyDetailOverlay;
