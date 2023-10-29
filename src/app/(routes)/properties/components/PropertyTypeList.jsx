"use client";
import { useState } from "react";

const PropertyTypeList = ({ className }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["House", "Apartment", "Self-Contained", "Land"];
  const handleChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, name]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== name));
    }
  };
  return (
    <div className="">
      <span className="block lg:hidden text-sm font-medium">Property Type</span>
      {options.map((option, idx) => (
        <div key={idx} className="flex gap-4 my-4 px-6 items-center">
          <input
            onChange={handleChange}
            id="type"
            type="checkbox"
            checked={selectedOptions?.includes(option)}
            name={option}
            className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
          />
          <label htmlFor="type" className="select-none whitespace-nowrap">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
export default PropertyTypeList;
