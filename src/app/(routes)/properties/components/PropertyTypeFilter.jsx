"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const options = ["House", "Apartment", "Self-Contained", "Land"];
const PropertyTypeFilter = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, name]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== name));
    }
  };
  return (
    <div id="dropdownButton" className={clsx("relative ", className)}>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[8rem] flex items-center justify-center gap-1 cursor-pointer"
      >
        <span className="text-sm select-none">
          {selectedOptions.length ? `Type (${selectedOptions.length})` : "Type"}
        </span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div className="rounded border-[1px]  border-zee-border bg-white px-2  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md">
          <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none text-sm ">
            Type of Property
          </div>
          <PropertyTypeList
            selectedOptions={selectedOptions}
            handleChange={handleChange}
          />
          <div className="px-2 flex flex-col py-2 w-full">
            <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-2 py-1">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyTypeFilter;

export const PropertyTypeList = ({
  selectedOptions,
  handleChange,
  className,
}) => {
  return (
    <div className="py-1">
      <span className="block lg:hidden font-medium">Property Type</span>
      {options.map((option, idx) => (
        <div key={idx} className="flex gap-4 my-4 px-6 items-center">
          <input
            onChange={handleChange}
            id="type"
            type="checkbox"
            checked={selectedOptions?.includes(option)}
            name={option}
            className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
          />
          <label htmlFor="type" className="select-none whitespace-nowrap">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
