import { clsx } from "clsx";
import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocationFilter = ({ className }) => {
  return (
    <div
      className={clsx(
        "w-full md:w-72 items-center py-1 flex  border border-zee-border  px-2 my-0 rounded-lg  mr-2 md:mr-0",
        className
      )}
    >
      <input
        className=" text-zee-shades-gray-4 w-full bg-transparent outline-none border-none focus:border-none focus:outline-none active:border-none active:outline-none focus:ring-0 placeholder:text-zee-border"
        type="text"
        placeholder="Enter a State, LGA or area name"
      />
      <MdLocationOn className="text-zee-border" />
    </div>
  );
};

export default LocationFilter;
