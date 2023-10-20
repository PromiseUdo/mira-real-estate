"use client";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import clsx from "clsx";

const LocationSelector = () => {
  const [countries, setCountries] = useState();
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="w-48 font-medium  relative scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-shades-white">
      <div
        onClick={() => setOpen(!open)}
        className={clsx(
          "bg-white w-full p-2 flex items-center justify-between rounded",
          !selected && "text-gray-700"
        )}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={open && "rotate-180"} />
      </div>
      <ul
        className={clsx(
          "bg-white mt-2 overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-jaa-dark-teal-80 scrollbar-track-jaa-shades-white absolute w-48",
          open ? "max-h-60" : "max-h-0"
        )}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white w-48">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="address"
            // name="state"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country, idx) => (
          <li
            key={idx}
            className={clsx(
              "p-2 text-sm hover:bg-sky-600 hover:text-white",
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
                "bg-sky-600 text-white",
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            )}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSelector;
