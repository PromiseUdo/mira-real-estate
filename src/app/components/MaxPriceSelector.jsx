"use client";
import React, { useEffect, useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import { BiChevronDown, BiCheck } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import clsx from "clsx";

const propertyType = [
  { name: "No Max" },
  { name: "₦100,000" },
  { name: "₦200,000" },
  { name: "₦250,000" },
  { name: "₦300,000" },
  { name: "₦400,000" },
  { name: "₦500,000" },
  { name: "₦600,000" },
  { name: "₦700,000" },
  { name: "₦800,000" },
  { name: "₦900,000" },
  { name: "₦1,000,000" },
];

const MaxPriceSelector = () => {
  const [countries, setCountries] = useState();
  const [inputValue, setInputValue] = useState();
  const [selected, setSelected] = useState(propertyType[0]);
  const [open, setOpen] = useState(false);

  return (
    //w-36
    <div className="fxed top-16 w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="w-full relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-shades-white">
              {propertyType.map((type, typeIdx) => (
                <Listbox.Option
                  key={typeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
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
  );
};

export default MaxPriceSelector;
