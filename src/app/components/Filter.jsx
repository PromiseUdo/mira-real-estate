"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import FilterOptions from "./FilterOptions";

const categories = ["Rent", "Buy", "Shorlets"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Filter = () => {
  return (
    <div className="flex flex-col items-center gap-3  absolute top-[40%] md:top-[50%] translate-y-[-50%] left-0 right-0  m-auto w-[90%] md:w-[80%] lg:w-[50%] max-w-d px-2 sm:px-0 ">
      <h2
        style={{ textShadow: "1px 1px 2px #000" }}
        className="text-center text-white text-[30px] md:text-[36px] lg:text-[40px]	"
      >
        Apartments. Offices. Lands. Shorlets.
      </h2>
      <Tab.Group>
        <Tab.List className=" ring-opacity-60 ring-offset-2  ring-2 w-[100%] z-20 flex space-x-1 rounded-lg bg-teal-700/50 p-1">
          {categories.map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  " z-20 w-full rounded-lg py-2.5 text-sm font-medium leading-5 ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none text-white ",
                  selected
                    ? "bg-zee-teal-100 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-[100%] mt-2">
          {categories.map((category, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "flex items-center justify-center z-20 rounded-lg bg-teal-700/50 p-3",
                " ring-opacity-60 ring-offset-2  ring-2"
              )}
            >
              {/* "focus:ring-white ring-opacity-60 ring-offset-2 focus:ring-offset-blue-400 focus:outline-none ring-2" */}
              <FilterOptions />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Filter;
