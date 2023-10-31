"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import clsx from "clsx";

import PropertyTypeList from "./PropertyTypeList";
import PetOptions from "./PetOptions";
import YearBuilt from "./YearBuilt";
import OtherAmenities from "./OtherAmenities";
import BedroomCountFilter from "./BedroomCountFilter";
import BathroomCountFilter from "./BathroomCountFilter";
import SquareFeetFilter from "./SquareFeetFilter";
const MoreFilters = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [minYearBuilt, setMinYearBuilt] = useState("");
  const [maxYearBuilt, setMaxYearBuilt] = useState("");

  const [selectedPetOptions, setSelectedPetOptions] = useState([]);
  const [selectedAmenitiesOptions, setSelectedAmenitiesOptions] = useState([]);

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

  // useEffect(() => {
  //   if (
  //     selectedMinSquareFeet !== "No Min" ||
  //     selectedMaxSquareFeet !== "No Max"
  //   ) {
  //     if (optionsSelected.includes("square_feet")) return;
  //     setOptionsSelected([...optionsSelected, "square_feet"]);
  //   } else {
  //     setOptionsSelected(
  //       optionsSelected.filter((option) => option !== "square_feet")
  //     );
  //   }
  // }, [selectedMinSquareFeet, selectedMaxSquareFeet]);

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
              <BedroomCountFilter />
            </div>
            <div className="px-2 flex  lg:hidden flex-col py-2 w-full">
              <BathroomCountFilter />
            </div>

            <div className="px-2  py-2 w-full">
              <SquareFeetFilter />
            </div>
            {/* row 2 */}
            <div className="px-2  py-2 w-full">
              <YearBuilt />
            </div>
            <div className="px-2 flex  lg:hidden flex-col py-2 w-full">
              <PropertyTypeList />
            </div>
            {/* row 3 */}
            <div className="px-2  py-1 w-full">
              <PetOptions />
            </div>

            {/* Row 4 */}
            <div className="px-2  py-1 w-full">
              <OtherAmenities />
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
