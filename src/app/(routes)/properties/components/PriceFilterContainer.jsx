"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";
import PriceFilter from "./PriceFilter";
const PriceFilterContainer = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [buttonCaption, setButtonCaption] = useState("Price");

  return (
    <div id="dropdownButton" className={clsx("relative ", className)}>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="hover:bg-zee-gray-50 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[10rem] flex items-center justify-center gap-1 cursor-pointer"
      >
        <span className="text-sm select-none whitespace-nowrap">
          {buttonCaption}
        </span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div className="rounded border-[1px]  border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md">
          <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none ">
            Price Range
          </div>
          <div className="px-2 flex flex-col py-2 w-full">
            <PriceFilter />
            <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-4 py-1 font-semibold">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilterContainer;
