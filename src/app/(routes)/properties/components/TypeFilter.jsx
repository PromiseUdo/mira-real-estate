"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const options = ["For Rent", "For Sale"];
const TypeFilter = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [propertyType, setPropertyType] = useState("For Rent");

  return (
    <div id="dropdownButton" className="relative ">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[8rem] flex items-center justify-center gap-1 cursor-pointer"
      >
        <span className="text-sm select-none">{propertyType}</span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div className="rounded border-[1px] px-2 py-2 border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md">
          {options.map((option, idx) => (
            <div key={idx} className="flex gap-4 my-4 px-6 items-center">
              <input
                onChange={(e) => setPropertyType(e.target.value)}
                id="type"
                type="radio"
                value={option}
                checked={propertyType == option}
                name="property_type"
                className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
              />
              <label htmlFor="type" className="whitespace-nowrap select-none">
                {option}
              </label>
            </div>
          ))}

          <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-2 py-1">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default TypeFilter;
