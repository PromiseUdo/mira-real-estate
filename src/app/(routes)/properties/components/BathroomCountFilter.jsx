import clsx from "clsx";
import React from "react";
import { useState } from "react";

const BathroomCountFilter = ({ className }) => {
  const [selectedBaths, setSelectedBaths] = useState("Any");

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <span className="select-none text-sm font-medium">Bathrooms</span>
      <div className="flex gap-0 items-center">
        <button
          onClick={() => setSelectedBaths("Any")}
          className={clsx(
            "rounded-tl-md rounded-bl-md font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14  border-[2px] border-zee-border border-r-[1px]",
            selectedBaths === "Any" ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          Any
        </button>
        <button
          onClick={() => setSelectedBaths(1)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14  border-[2px] border-zee-border border-l-[1px] border-r-[1px]",
            selectedBaths === 1 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          1
        </button>
        <button
          onClick={() => setSelectedBaths(2)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14   border-[2px] border-zee-border border-l-[1px] border-r-[1px]",
            selectedBaths === 2 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          2
        </button>
        <button
          onClick={() => setSelectedBaths(3)}
          className={clsx(
            "font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14 border-[2px] border-zee-border border-l-[1px] border-r-[1px]  ",
            selectedBaths === 3 ? "!border-[2px] border-zee-teal-100" : " "
          )}
        >
          3
        </button>
        <button
          onClick={() => setSelectedBaths(4)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14   border-[2px] border-l-[1px] border-r-[1px] border-zee-border",
            selectedBaths === 4 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          4
        </button>
        <button
          onClick={() => setSelectedBaths("5+")}
          className={clsx(
            "rounded-tr-md rounded-br-md font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14  border-[2px] border-l-[1px]  border-zee-border",
            selectedBaths === "5+" ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          5+
        </button>
      </div>
    </div>
  );
};
export default BathroomCountFilter;
