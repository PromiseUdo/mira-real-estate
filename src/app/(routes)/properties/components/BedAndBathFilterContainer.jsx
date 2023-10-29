"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";
import BedroomCountFilter from "./BedroomCountFilter";
import BathroomCountFilter from "./BathroomCountFilter";
const BedAndBathFilterContainer = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [buttonCaption, setButtonCaption] = useState("Beds and Baths");
  const [selectedBeds, setSelectedBeds] = useState("Any");
  const [selectedBaths, setSelectedBaths] = useState("Any");

  useEffect(() => {
    if (selectedBeds !== "Any" && selectedBaths === "Any") {
      setButtonCaption(`${selectedBeds} bd, 0 ba`);
    } else if (selectedBeds === "Any" && selectedBaths !== "Any") {
      setButtonCaption(`0 bd, ${selectedBaths} ba`);
    } else if (selectedBeds === "Any" && selectedBaths === "Any") {
      setButtonCaption(`Beds and Baths`);
    } else if (selectedBeds !== "Any" && selectedBaths !== "Any") {
      setButtonCaption(`${selectedBeds} bd, ${selectedBaths} ba`);
    }
  }, [selectedBeds, selectedBaths]);
  return (
    <div id="dropdownButton" className={clsx("relative ", className)}>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="hover:bg-zee-gray-50 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[11rem] flex items-center justify-center gap-1 cursor-pointer"
      >
        <span className="text-sm select-none">{buttonCaption}</span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div className="rounded border-[1px]  border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md flex flex-col gap-2">
          <div>
            <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none text-sm ">
              Number of Bedrooms
            </div>
            <div className="px-2 flex flex-col py-2 w-full">
              <BedroomCountFilter />
            </div>
          </div>
          <div>
            <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none text-sm ">
              Number of Bathrooms
            </div>
            <div className="px-2 flex flex-col py-2 w-full">
              <BathroomCountFilter />

              <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-4 py-1 font-semibold">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BedAndBathFilterContainer;
