"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { currencyFormatter } from "../../../../helpers/helpers";
import clsx from "clsx";
import BedroomFilter, { BathroomCount, BedroomCount } from "./BedroomFilter";
import { PropertyTypeList } from "./PropertyTypeFilter";

const petOptions = ["Allows large dogs", "Allows small dogs", "Allows cats"];
const amenitiesOptions = ["Must have A/C", "Parking Space", "Must have pool"];
const MoreFilters = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedMinSquareFeet, setSelectedMinSquareFeet] = useState("No Min");
  const [selectedMaxSquareFeet, setSelectedMaxSquareFeet] = useState("No Max");
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [minYearBuilt, setMinYearBuilt] = useState("");
  const [maxYearBuilt, setMaxYearBuilt] = useState("");
  const squareFeetOptions = [
    500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500,
    3750, 4000, 4250, 4500, 4750, 5000,
  ];
  const [minSquareFeetOptions, setMinSquareFeetOptions] =
    useState(squareFeetOptions);
  const [maxSquareFeetOptions, setMaxSquareFeetOptions] =
    useState(squareFeetOptions);

  const [selectedPetOptions, setSelectedPetOptions] = useState([]);
  const [selectedAmenitiesOptions, setSelectedAmenitiesOptions] = useState([]);

  const handlePetOptionsChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedPetOptions([...selectedPetOptions, name]);
    } else {
      setSelectedPetOptions(selectedPetOptions.filter((item) => item !== name));
    }
  };
  const handleAmenitiesOptionsChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedAmenitiesOptions([...selectedAmenitiesOptions, name]);
    } else {
      setSelectedAmenitiesOptions(
        selectedAmenitiesOptions.filter((item) => item !== name)
      );
    }
  };

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

  useEffect(() => {
    if (selectedPetOptions.length > 0) {
      if (optionsSelected.includes("pet_options")) return;
      setOptionsSelected([...optionsSelected, "pet_options"]);
    } else {
      setOptionsSelected(
        optionsSelected.filter((option) => option !== "pet_options")
      );
    }
  }, [selectedPetOptions]);

  useEffect(() => {
    if (selectedAmenitiesOptions.length > 0) {
      if (optionsSelected.includes("amenities_options")) return;
      setOptionsSelected([...optionsSelected, "amenities_options"]);
    } else {
      setOptionsSelected(
        optionsSelected.filter((option) => option !== "amenities_options")
      );
    }
  }, [selectedAmenitiesOptions]);

  useEffect(() => {
    if (
      selectedMinSquareFeet !== "No Min" ||
      selectedMaxSquareFeet !== "No Max"
    ) {
      if (optionsSelected.includes("square_feet")) return;
      setOptionsSelected([...optionsSelected, "square_feet"]);
    } else {
      setOptionsSelected(
        optionsSelected.filter((option) => option !== "square_feet")
      );
    }
  }, [selectedMinSquareFeet, selectedMaxSquareFeet]);

  useEffect(() => {
    if (minYearBuilt !== "" || maxYearBuilt !== "") {
      if (optionsSelected.includes("year_built")) return;
      setOptionsSelected([...optionsSelected, "year_built"]);
    } else {
      setOptionsSelected(
        optionsSelected.filter((option) => option !== "year_built")
      );
    }
  }, [minYearBuilt, maxYearBuilt]);
  console.log(minYearBuilt, maxYearBuilt);

  return (
    <div id="dropdownButton" className={clsx("relative ", className)}>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="hover:bg-zee-gray-50 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[8rem] flex items-center justify-center gap-1 cursor-pointer"
      >
        <span className="text-sm select-none">
          {optionsSelected.length === 0
            ? "More"
            : `More (${optionsSelected.length})`}
        </span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div className="max-h-64 lg:max-h-96  rounded border-[1px]  border-zee-border bg-white  absolute top-[50px]  right-0 w-[400px] shadow-md flex flex-col">
          <div className="overflow-y-auto flex flex-col gap-2  scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200">
            <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none text-sm ">
              More Filters
            </div>
            <div className="flex lg:hidden px-2 flex-col py-2 w-full">
              <BedroomCount />
            </div>
            <div className="px-2 flex  lg:hidden flex-col py-2 w-full">
              <BathroomCount />
            </div>

            <div className="px-2 flex flex-col py-2 w-full">
              <span className="select-none font-semibold text-sm ">
                Square Feet
              </span>
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
            {/* row 2 */}
            <div className="px-2 flex flex-col py-2 w-full">
              <span className="select-none text-sm font-semibold">
                Year Built
              </span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col flex-1 gap-1">
                  <input
                    onChange={(e) => setMinYearBuilt(e.target.value)}
                    type="text"
                    value={minYearBuilt}
                    className="rounded-md  w-full border-zee-border bg-zee-gray-50"
                    placeholder="No Min"
                  />
                </div>
                <div className="relative ">-</div>
                <div className="flex flex-1 flex-col gap-1">
                  <input
                    onChange={(e) => setMaxYearBuilt(e.target.value)}
                    value={maxYearBuilt}
                    type="text"
                    className="rounded-md  w-full border-zee-border bg-zee-gray-50"
                    placeholder="No Max"
                  />
                </div>
              </div>
            </div>
            <div className="px-2 flex  lg:hidden flex-col py-2 w-full">
              <PropertyTypeList />
            </div>
            {/* row 3 */}
            <div className="px-2 flex flex-col py-1 w-full">
              <span className="select-none text-sm font-semibold">
                Allows Pets
              </span>
              <div className="">
                {petOptions.map((option, idx) => (
                  <div key={idx} className="flex gap-4 my-4 px-6 items-center">
                    <input
                      onChange={handlePetOptionsChange}
                      checked={selectedPetOptions.includes(option)}
                      name={option}
                      id="type"
                      type="checkbox"
                      className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
                    />
                    <label
                      htmlFor="type"
                      className="select-none whitespace-nowrap"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 4 */}
            <div className="px-2 flex flex-col py-1 w-full">
              <span className="select-none text-sm font-semibold">
                Other Amenities
              </span>
              <div className="">
                {amenitiesOptions.map((option, idx) => (
                  <div key={idx} className="flex gap-4 my-4 px-6 items-center">
                    <input
                      onChange={handleAmenitiesOptionsChange}
                      checked={selectedAmenitiesOptions.includes(option)}
                      name={option}
                      id="type"
                      type="checkbox"
                      className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
                    />
                    <label
                      htmlFor="type"
                      className="select-none whitespace-nowrap"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" border-t  mb-2">
            <div className=" px-4 flex py-1 gap-4 w-full">
              <button className="bg-zee-gray-100 text-[15px] text-zee-shades-black w-full rounded-md mt-2 py-1 font-semibold whitespace-nowrap">
                Reset
              </button>
              <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-2 py-1 px-4 font-semibold">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreFilters;

export const MinSquareFeetSelector = ({
  minSquareFeet,
  setMinSquareFeet,
  minSquareFeetOptions,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div id="dropdownButton" className=" relative w-[100%]">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="bg-zee-gray-50 hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[100%] flex items-center justify-between cursor-pointer odd:"
      >
        <span className="text-sm ">
          {/* {minSquareFeet === "No Min" ? (
            "No Min"
          ) : (
            <CurrencyFormat
              value={minSquareFeet}
              displayType={"text"}
              thousandSeparator={true}
            />
          )} */}
          No Min
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
          className="overflow-y-auto max-h-60 rounded border-[1px] px-2 py-2 border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md
          
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
  const [selected, setSelected] = useState(null);

  return (
    <div id="dropdownButton" className="relative w-full">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="bg-zee-gray-50 hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[100%] flex items-center justify-between cursor-pointer"
      >
        <span className="text-sm ">
          {/* {maxSquareFeet === "No Max" ? (
            "No Max"
          ) : (
            <CurrencyFormat
              value={maxSquareFeet}
              displayType={"text"}
              thousandSeparator={true}
            />
          )} */}
          No Max
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
          className="overflow-y-auto max-h-60 rounded border-[1px] px-2 py-2 border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md
        
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
