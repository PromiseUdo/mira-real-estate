import React from "react";
import LocationSelector from "./LocationSelector";
import { MdLocationOn } from "react-icons/md";
import PropertyTypeSelector from "./PropertyTypeSelector";
import BedroomSelector from "./BedroomSelector";
import MinPriceSelector from "./MinPriceSelector";
import MaxPriceSelector from "./MaxPriceSelector";
const FilterOptions = () => {
  return (
    <div className=" flex  items-center  flex-col px-4 py-2">
      <div className="w-full flex items-center  border py-2 px-4 my-2 rounded-lg">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Enter a State, LGA or area name"
        />
        <MdLocationOn />
      </div>
      {/* <LocationSelector /> */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col justify-center">
          <p>Type</p>
          <PropertyTypeSelector />
        </div>
        <div className="flex flex-col justify-center">
          <p>Bedroom</p>
          <BedroomSelector />
        </div>
        <div className="flex flex-col justify-center">
          <p>Min Price</p>
          <MinPriceSelector />
        </div>
        <div className="flex flex-col justify-center">
          <p>Max Price</p>
          <MaxPriceSelector />
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="rounded-lg bg-zee-teal-100 text-white px-4 py-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterOptions;
