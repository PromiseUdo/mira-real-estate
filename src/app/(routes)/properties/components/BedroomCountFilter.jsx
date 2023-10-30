"use client";
import { clsx } from "clsx";
import React, { useState } from "react";

const BedroomCountFilter = ({ className }) => {
  const [selectedBeds, setSelectedBeds] = useState("Any");

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <span className="select-none text-sm font-medium">Bedrooms</span>
      <div className="flex gap-0 items-center">
        <button
          onClick={() => setSelectedBeds("Any")}
          className={clsx(
            "rounded-tl-md rounded-bl-md font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14  border-[2px] border-zee-border border-r-[1px]",
            selectedBeds === "Any" ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          Any
        </button>
        <button
          onClick={() => setSelectedBeds(1)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14  border-[2px] border-zee-border border-l-[1px] border-r-[1px]",
            selectedBeds === 1 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          1+
        </button>
        <button
          onClick={() => setSelectedBeds(2)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14   border-[2px] border-zee-border border-l-[1px] border-r-[1px]",
            selectedBeds === 2 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          2+
        </button>
        <button
          onClick={() => setSelectedBeds(3)}
          className={clsx(
            "font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14 border-[2px] border-zee-border border-l-[1px] border-r-[1px]  ",
            selectedBeds === 3 ? "!border-[2px] border-zee-teal-100" : " "
          )}
        >
          3+
        </button>
        <button
          onClick={() => setSelectedBeds(4)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14   border-[2px] border-l-[1px] border-r-[1px] border-zee-border",
            selectedBeds === 4 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          4+
        </button>
        <button
          onClick={() => setSelectedBeds("5+")}
          className={clsx(
            "rounded-tr-md rounded-br-md font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14  border-[2px] border-l-[1px]  border-zee-border",
            selectedBeds === "5+" ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          5+
        </button>
      </div>
    </div>
  );
};

export default BedroomCountFilter;
