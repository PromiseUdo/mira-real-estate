"use client";
import React, { useEffect, useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import { BiChevronDown, BiCheck } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import clsx from "clsx";

const propertyType = [
  { name: "All Types" },
  { name: "Flat/Apartment" },
  { name: "House" },
  { name: "Land" },
  { name: "Office" },
  { name: "Commercial Property" },
];

const PropertyTypeSelector = () => {
  const [countries, setCountries] = useState();
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState(propertyType[0]);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v2/all?fields=name")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountries(data);
  //     });
  // }, []);

  return (
    <div className=" w-full  top-16 ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="min-w-[96px] relative mt-1">
          <Listbox.Button className="min-w-[96px] w-full relative  cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-[999999] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-shades-white">
              {propertyType.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  className={({ active }) =>
                    `relative  cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={type}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {type.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
    // <div className="w-72 font-medium  relative scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-shades-white">
    //   <div
    //     onClick={() => setOpen(!open)}
    //     className={clsx(
    //       "bg-white w-full p-2 flex items-center justify-between rounded",
    //       !selected && "text-gray-700"
    //     )}
    //   >
    //     {selected
    //       ? selected?.length > 25
    //         ? selected?.substring(0, 25) + "..."
    //         : selected
    //       : "Select Country"}
    //     <BiChevronDown size={20} className={open && "rotate-180"} />
    //   </div>
    //   <ul
    //     className={clsx(
    //       "bg-white mt-2 overflow-y-auto overflow-x-hidden scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-jaa-dark-teal-80 scrollbar-track-jaa-shades-white absolute w-72",
    //       open ? "max-h-60" : "max-h-0"
    //     )}
    //   >
    //     <div className="flex items-center px-2 sticky top-0 bg-white w-72">
    //       <AiOutlineSearch size={18} className="text-gray-700" />
    //       <input
    //         type="text"
    //         value={inputValue}
    //         onChange={(e) => setInputValue(e.target.value.toLowerCase())}
    //         placeholder="Enter country name"
    //         className="placeholder:text-gray-700 p-2 outline-none"
    //       />
    //     </div>
    //     {countries?.map((country, idx) => (
    //       <li
    //         key={idx}
    //         className={clsx(
    //           "p-2 text-sm hover:bg-sky-600 hover:text-white",
    //           country?.name?.toLowerCase() === selected?.toLowerCase() &&
    //             "bg-sky-600 text-white",
    //           country?.name?.toLowerCase().startsWith(inputValue)
    //             ? "block"
    //             : "hidden"
    //         )}
    //         onClick={() => {
    //           if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
    //             setSelected(country?.name);
    //             setOpen(false);
    //             setInputValue("");
    //           }
    //         }}
    //       >
    //         {country?.name}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default PropertyTypeSelector;
