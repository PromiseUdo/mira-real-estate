"use client";

import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { currencyFormatter } from "../../../../helpers/helpers";
import clsx from "clsx";

const PriceRangeFilter = ({ className }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedMinPrice, setSelectedMinPrice] = useState("No Min");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("No Max");
  const [buttonCaption, setButtonCaption] = useState("Price");
  const priceOptions = [
    100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
    1000000, 3000000, 5000000, 10000000,
  ];
  const [minPriceOptions, setMinPriceOptions] = useState(priceOptions);
  const [maxPriceOptions, setMaxPriceOptions] = useState(priceOptions);

  useEffect(() => {
    if (selectedMinPrice !== "No Min" && selectedMaxPrice === "No Max") {
      setMaxPriceOptions(
        priceOptions.slice(priceOptions.indexOf(Number(selectedMinPrice)) + 1)
      );

      setButtonCaption(`${currencyFormatter(selectedMinPrice)}+`);
    } else if (selectedMinPrice === "No Min" && selectedMaxPrice !== "No Max") {
      setMinPriceOptions(
        priceOptions.slice(0, priceOptions.indexOf(Number(selectedMaxPrice)))
      );

      setButtonCaption(`Up to ${currencyFormatter(selectedMaxPrice)}`);
    } else if (selectedMinPrice === "No Min" && selectedMaxPrice === "No Max") {
      setButtonCaption(`Price`);
      setMaxPriceOptions(priceOptions);
    } else if (selectedMinPrice !== "No Min" && selectedMaxPrice !== "No Max") {
      setMinPriceOptions(
        priceOptions.slice(0, priceOptions.indexOf(Number(selectedMaxPrice)))
      );

      setButtonCaption(
        `${currencyFormatter(selectedMinPrice)}-${currencyFormatter(
          selectedMaxPrice
        )}`
      );
    }
  }, [selectedMinPrice, selectedMaxPrice]);
  return (
    <div id="dropdownButton" className={clsx("relative ", className)}>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="hover:bg-zee-gray-50 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[10rem] flex items-center justify-center gap-1 cursor-pointer"
      >
        <span className="text-sm select-none whitespace-nowrap">
          {buttonCaption}
        </span>
        <MdKeyboardArrowDown
          className={`transition-all ease-in duration-100 ${
            openDropdown ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* dropdown menu */}
      {openDropdown && (
        <div className="rounded border-[1px]  border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md">
          <div className="bg-zee-gray-50 text-zee-shades-gray-3 font-semibold p-2 select-none ">
            Price Range
          </div>
          <div className="px-2 flex flex-col py-2 w-full">
            <div className="flex items-center gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <span className="select-none  text-sm font-normal">
                  Minimum
                </span>
                <MinPriceSelector
                  minPrice={selectedMinPrice}
                  setMinPrice={setSelectedMinPrice}
                  minPriceOptions={minPriceOptions}
                />
              </div>
              <div className="relative top-3">-</div>
              <div className="flex flex-1 flex-col gap-1">
                <span className="select-none text-sm font-normal">Maximum</span>
                <MaxPriceSelector
                  maxPrice={selectedMaxPrice}
                  setMaxPrice={setSelectedMaxPrice}
                  maxPriceOptions={maxPriceOptions}
                />
              </div>
            </div>

            <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-4 py-1 font-semibold">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeFilter;

const MinPriceSelector = ({ minPrice, setMinPrice, minPriceOptions }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {};

  return (
    <div id="dropdownButton" className="relative w-full">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="bg-zee-gray-50 hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[100%] flex items-center gap-2 cursor-pointer"
      >
        <span className="text-sm whitespace-nowrap ">
          {currencyFormatter(minPrice)}
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
          className="overflow-y-auto max-h-44 lg:max-h-60 rounded border-[1px] px-2 py-2 border-zee-border bg-white  absolute top-[50px] left-auto right-auto w-[fit-content] shadow-md
        
        scrollbar scrollbar-w-1   scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
        "
        >
          <div className="flex gap-4 my-4 px-3 items-center">
            <input
              onChange={(e) => setMinPrice(e.target.value)}
              id="min_price"
              value={"No Min"}
              checked={minPrice == "No Min"}
              type="radio"
              name="min_price"
              className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
            />
            <label
              htmlFor="min_price"
              className="select-none whitespace-nowrap"
            >
              No Min
            </label>
          </div>
          {minPriceOptions.map((option, idx) => (
            <div key={idx} className="flex gap-4 my-4 px-3 items-center">
              <input
                onChange={(e) => setMinPrice(e.target.value)}
                id={`min_price` + idx}
                value={option}
                checked={minPrice == option}
                type="radio"
                name="min_price"
                className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
              />
              <label
                htmlFor={`min_price` + idx}
                className="select-none  whitespace-nowrap"
              >
                <CurrencyFormat
                  value={option}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₦"}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MaxPriceSelector = ({ maxPrice, setMaxPrice, maxPriceOptions }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    // alert(value);
  };

  return (
    <div id="dropdownButton" className="relative w-full ">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="bg-zee-gray-50 hover:bg-zee-gray-100 border-solid border-zee-border border-[1px] px-5 py-2 rounded w-[100%] flex items-center gap-2 cursor-pointer"
      >
        <span className="text-sm whitespace-nowrap">
          {currencyFormatter(maxPrice)}
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
              onChange={(e) => setMaxPrice(e.target.value)}
              id={`max_price`}
              value={"No Max"}
              checked={maxPrice === "No Max"}
              type="radio"
              name="max_price"
              className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
            />
            <label
              htmlFor={`max_price`}
              className="select-none  whitespace-nowrap"
            >
              No Max
            </label>
          </div>
          {maxPriceOptions.map((option, idx) => (
            <div key={idx} className="flex gap-4 my-4 px-3 items-center">
              <input
                onChange={(e) => setMaxPrice(e.target.value)}
                id={`max_price` + idx}
                value={option}
                checked={maxPrice == option}
                type="radio"
                name="max_price"
                className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
              />
              <label
                htmlFor={`max_price` + idx}
                className="select-none  whitespace-nowrap"
              >
                <CurrencyFormat
                  value={option}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₦"}
                />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
