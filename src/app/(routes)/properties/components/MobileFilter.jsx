import clsx from "clsx";
import React from "react";
import { BathroomCount, BedroomCount } from "./BedroomFilter";
import { MaxPriceSelector, MinPriceSelector } from "./PriceRangeFilter";
import { PropertyTypeList } from "./PropertyTypeFilter";
import { MaxSquareFeetSelector, MinSquareFeetSelector } from "./MoreFilters";
import YearBuilt from "./YearBuilt";
import PetOptions from "./PetOptions";
import OtherAmenities from "./OtherAmenities";

const MobileFilter = () => {
  return (
    <div className="relative  w-full h-full  flex flex-col items-center justify-start  ">
      <div className="px-6 h-[calc(100vh-8rem)] py-4 w-full overflow-y-scroll   scrollbar     scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 ">
        <div className="mb-4 flex items-center gap-4">
          <MinPriceSelector
          // minPrice={selectedMinPrice}
          // setMinPrice={setSelectedMinPrice}
          // minPriceOptions={minPriceOptions}
          />
          <div className="relative top-3">-</div>

          <MaxPriceSelector
          // maxPrice={selectedMaxPrice}
          // setMaxPrice={setSelectedMaxPrice}
          // maxPriceOptions={maxPriceOptions}
          />
        </div>
        <div className="my-4 flex flex-col w-full">
          <div className="flex lg:hidden flex-col py-2 w-full">
            <BedroomCount />
          </div>
          <div className=" flex  lg:hidden flex-col py-2 w-full">
            <BathroomCount />
          </div>
        </div>
        <div className="my-4 ">
          <PropertyTypeList />
        </div>

        <div className=" my-4 flex flex-col">
          <span className="mb-2 select-none font-medium text-sm ">
            Square Feet
          </span>
          <div className=" justify-between flex items-center gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <MinSquareFeetSelector
              //   minSquareFeet={selectedMinSquareFeet}
              //   setMinSquareFeet={setSelectedMinSquareFeet}
              //   minSquareFeetOptions={minSquareFeetOptions}
              />
            </div>
            <div className="relative ">-</div>
            <div className="flex flex-1 flex-col gap-1">
              <MaxSquareFeetSelector
              //   maxSquareFeet={selectedMaxSquareFeet}
              //   setMaxSquareFeet={setSelectedMaxSquareFeet}
              //   maxSquareFeetOptions={maxSquareFeetOptions}
              />
            </div>
          </div>
        </div>

        <div className=" my-4 flex flex-col">
          <YearBuilt />
        </div>
        <div className=" my-4 flex flex-col">
          <PetOptions />
        </div>
        <div className=" my-4 flex flex-col">
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
