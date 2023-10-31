import clsx from "clsx";
import React from "react";
import { MaxSquareFeetSelector, MinSquareFeetSelector } from "./MoreFilters";
import YearBuilt from "./YearBuilt";
import PetOptions from "./PetOptions";
import OtherAmenities from "./OtherAmenities";
import PriceFilter from "./PriceFilter";
import BedroomCountFilter from "./BedroomCountFilter";
import BathroomCountFilter from "./BathroomCountFilter";
import PropertyTypeList from "./PropertyTypeList";
import SquareFeetFilter from "./SquareFeetFilter";

const MobileFilter = () => {
  return (
    <div className="relative  w-full h-full  flex flex-col items-center justify-start  ">
      <div className="px-6 h-[calc(100vh-9rem)] py-4 w-full overflow-y-scroll   scrollbar  scrollbar-w-1.5   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 ">
        <div className="my-4 flex flex-col w-full">
          <PriceFilter />
        </div>
        <div className="my-4 flex flex-col w-full">
          <div className="flex lg:hidden flex-col py-2 w-full">
            <BedroomCountFilter />
          </div>
          <div className=" flex  lg:hidden flex-col py-2 w-full">
            <BathroomCountFilter />
          </div>
        </div>
        <div className="my-4 ">
          <PropertyTypeList />
        </div>

        <div className=" my-4 flex flex-col">
          <SquareFeetFilter />
        </div>

        <div className=" my-4 flex flex-col">
          <YearBuilt />
        </div>
        <div className=" my-4 flex flex-col">
          <PetOptions />
        </div>
        <div className=" my-4 mb-8 flex flex-col">
          <OtherAmenities />
        </div>
      </div>

      {/* Apply Buttons */}
      <div className="z-[99999] bg-white w-full shadow fixed border-t bottom-0 py-2">
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
  );
};

export default MobileFilter;
