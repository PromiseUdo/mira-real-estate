import React from "react";
import LocationSelector from "./LocationSelector";
import { MdLocationOn } from "react-icons/md";
import PropertyTypeSelector from "./PropertyTypeSelector";
import BedroomSelector from "./BedroomSelector";
import MinPriceSelector from "./MinPriceSelector";
import MaxPriceSelector from "./MaxPriceSelector";
const FilterOptions = () => {
  return (
    <div className="w-full flex  items-center  flex-col px-2 lg:px-4 py-2">
      <div className="w-full flex items-center  border py-2 px-4 my-2 rounded-lg">
        <input
          className=" text-white w-full bg-transparent outline-none"
          type="text"
          placeholder="Enter a State, LGA or area name"
        />
        <MdLocationOn className="text-white" />
      </div>
      {/* <LocationSelector /> */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <div className="flex flex-col justify-center">
          <p className="text-white">Type</p>
          <PropertyTypeSelector />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white">Bedroom</p>
          <BedroomSelector />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white">Min Price</p>
          <MinPriceSelector />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white">Max Price</p>
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
