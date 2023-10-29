"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";

const BedroomFilter = ({ className }) => {
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
              <BedroomCount
                selectedBeds={selectedBeds}
                setSelectedBeds={setSelectedBeds}
              />
            </div>
          </div>
          <div>
            <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none text-sm ">
              Number of Bathrooms
            </div>
            <div className="px-2 flex flex-col py-2 w-full">
              <BathroomCount
                selectedBaths={selectedBaths}
                setSelectedBaths={setSelectedBaths}
              />

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

export default BedroomFilter;

export const BedroomCount = ({ selectedBeds, setSelectedBeds, className }) => {
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
          1
        </button>
        <button
          onClick={() => setSelectedBeds(2)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14   border-[2px] border-zee-border border-l-[1px] border-r-[1px]",
            selectedBeds === 2 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          2
        </button>
        <button
          onClick={() => setSelectedBeds(3)}
          className={clsx(
            "font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14 border-[2px] border-zee-border border-l-[1px] border-r-[1px]  ",
            selectedBeds === 3 ? "!border-[2px] border-zee-teal-100" : " "
          )}
        >
          3
        </button>
        <button
          onClick={() => setSelectedBeds(4)}
          className={clsx(
            " font-semibold text-[16px] text-zee-shades-gray-3 flex items-center justify-center p-2 h-10 w-14   border-[2px] border-l-[1px] border-r-[1px] border-zee-border",
            selectedBeds === 4 ? "!border-[2px] border-zee-teal-100" : ""
          )}
        >
          4
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

export const BathroomCount = ({
  selectedBaths,
  setSelectedBaths,
  className,
}) => {
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
