"use client";

import React, { useState } from "react";
const amenitiesOptions = [
  "Must have A/C",
  "Parking Space",
  "Must have pool",
  "Must be fenced",
];

const OtherAmenities = () => {
  const [selectedAmenitiesOptions, setSelectedAmenitiesOptions] = useState([]);

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

  return (
    <div className="flex flex-col  w-full">
      <span className="select-none text-sm font-medium">Other Amenities</span>
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
            <label htmlFor="type" className="select-none whitespace-nowrap">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherAmenities;
