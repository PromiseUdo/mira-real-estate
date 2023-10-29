"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CurrencyFormat from "react-currency-format";

const SquareFeetFilter = () => {
  const squareFeetOptions = [
    500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500,
    3750, 4000, 4250, 4500, 4750, 5000,
  ];
  const [minSquareFeetOptions, setMinSquareFeetOptions] =
    useState(squareFeetOptions);
  const [maxSquareFeetOptions, setMaxSquareFeetOptions] =
    useState(squareFeetOptions);
  const [selectedMaxSquareFeet, setSelectedMaxSquareFeet] = useState("No Max");
  const [selectedMinSquareFeet, setSelectedMinSquareFeet] = useState("No Min");

  useEffect(() => {
    if (
      selectedMinSquareFeet !== "No Min" &&
      selectedMaxSquareFeet === "No Max"
    ) {
      setMaxSquareFeetOptions(
        squareFeetOptions.slice(
          squareFeetOptions.indexOf(Number(selectedMinSquareFeet)) + 1
        )
      );
    } else if (
      selectedMinSquareFeet === "No Min" &&
      selectedMaxSquareFeet !== "No Max"
    ) {
      setMinSquareFeetOptions(
        squareFeetOptions.slice(
          0,
          squareFeetOptions.indexOf(Number(selectedMaxSquareFeet))
        )
      );
    } else if (
      selectedMinSquareFeet === "No Min" &&
      selectedMaxSquareFeet === "No Max"
    ) {
      setMaxSquareFeetOptions(squareFeetOptions);
    } else if (
      selectedMinSquareFeet !== "No Min" &&
      selectedMaxSquareFeet !== "No Max"
    ) {
      setMinSquareFeetOptions(
        squareFeetOptions.slice(
          0,
          squareFeetOptions.indexOf(Number(selectedMaxSquareFeet))
        )
      );
    }
  }, [selectedMinSquareFeet, selectedMaxSquareFeet]);
  return (
    <div className=" flex flex-col gap-1  w-full">
      <span className="select-none font-medium text-sm">Square Feet</span>
      <div className=" justify-between flex items-center gap-4">
        <div className="flex flex-col flex-1 gap-1">
          <MinSquareFeetSelector
            minSquareFeet={selectedMinSquareFeet}
            setMinSquareFeet={setSelectedMinSquareFeet}
            minSquareFeetOptions={minSquareFeetOptions}
          />
        </div>
        <div className="relative ">-</div>
        <div className="flex flex-1 flex-col gap-1">
          <MaxSquareFeetSelector
            maxSquareFeet={selectedMaxSquareFeet}
            setMaxSquareFeet={setSelectedMaxSquareFeet}
            maxSquareFeetOptions={maxSquareFeetOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default SquareFeetFilter;

export const MinSquareFeetSelector = ({
  minSquareFeet,
  setMinSquareFeet,
  minSquareFeetOptions,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div id="dropdownButton" className=" relative w-[100%]">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="bg-zee-gray-50 hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[100%] flex items-center justify-between cursor-pointer odd:"
      >
        <span className="text-sm ">
          {minSquareFeet === "No Min" ? (
            "No Min"
          ) : (
            <CurrencyFormat
              value={minSquareFeet}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div
          className="overflow-y-auto max-h-40 lg:max-h-60 rounded border-[1px] px-2 py-2 border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md
            
            scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
            "
        >
          <div className="flex gap-4 my-4 px-3 items-center">
            <input
              onChange={(e) => setMinSquareFeet(e.target.value)}
              id="min_square_feet"
              value={"No Min"}
              checked={minSquareFeet == "No Min"}
              type="radio"
              name="min_square_feet"
              className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
            />
            <label
              htmlFor="min_square_feet"
              className="select-none whitespace-nowrap"
            >
              No Min
            </label>
          </div>
          {minSquareFeetOptions.map((option, idx) => (
            <div key={idx} className="flex gap-4 my-4 px-3 items-center">
              <input
                onChange={(e) => setMinSquareFeet(e.target.value)}
                id={`min_square_feet` + idx}
                value={option}
                checked={minSquareFeet == option}
                type="radio"
                name="min_square_feet"
                className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
              />
              <label
                htmlFor={`min_square_feet` + idx}
                className="select-none  whitespace-nowrap"
              >
                <CurrencyFormat
                  value={option}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const MaxSquareFeetSelector = ({
  maxSquareFeet,
  setMaxSquareFeet,
  maxSquareFeetOptions,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div id="dropdownButton" className="relative w-full">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="bg-zee-gray-50 hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[100%] flex items-center justify-between cursor-pointer"
      >
        <span className="text-sm ">
          {maxSquareFeet === "No Max" ? (
            "No Max"
          ) : (
            <CurrencyFormat
              value={maxSquareFeet}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div
          className="overflow-y-auto max-h-40 lg:max-h-60 rounded border-[1px] px-2 py-2 border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md
          
          scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
          "
        >
          <div className="flex gap-4 my-4 px-3 items-center">
            <input
              onChange={(e) => setMaxSquareFeet(e.target.value)}
              id={`max_square_feet`}
              value={"No Max"}
              checked={maxSquareFeet === "No Max"}
              type="radio"
              name="max_square_feet"
              className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
            />
            <label
              htmlFor={`max_square_feet`}
              className="select-none  whitespace-nowrap"
            >
              No Max
            </label>
          </div>
          {maxSquareFeetOptions.map((option, idx) => (
            <div key={idx} className="flex gap-4 my-4 px-3 items-center">
              <input
                onChange={(e) => setMaxSquareFeet(e.target.value)}
                id={`max_square_feet` + idx}
                value={option}
                checked={maxSquareFeet == option}
                type="radio"
                name="max_square_feet"
                className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
              />
              <label
                htmlFor={`max_square_feet` + idx}
                className="select-none  whitespace-nowrap"
              >
                <CurrencyFormat
                  value={option}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
