"use client";

import React, { useEffect } from "react";
import Filter from "./components/Filter";
import DummyContent from "../../../components/DummyContent";
import { BsPinMapFill, BsListUl } from "react-icons/bs";
import FilterResults from "../for_sale/components/FilterResults.jsx";
import { useToggleState } from "../../../../hooks/useToggleState";
import clsx from "clsx";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
const Page = () => {
  const { state: showMap, toggle, close: closeMap } = useToggleState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1024) closeMap();
  }, [width]);
  return (
    <div className="relative 	  flex flex-col ">
      <Filter />
      <div className=" h-screen grid grid-cols-12  gap-2">
        <div
          className={clsx(
            "col-span-12 lg:col-span-8 xl:col-span-5 min-[1350px]:col-span-6 items-center justify-center overflow-hidden",
            showMap ? "flex" : "hidden lg:flex"
          )}
        >
          <div>Google Maps</div>

          {/* <DummyContent /> */}
        </div>

        <div
          className={clsx(
            " col-span-12 lg:col-span-4 xl:col-span-7 min-[1350px]:col-span-6 shadow	shadow-zee-gray-600	bg-gray-50 xl:mr-4  overflow-y-scroll   scrollbar    scrollbar-w-1.5    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 ",
            showMap ? "hidden" : "!flex"
          )}
        >
          <FilterResults />
          {/* <DummyContent /> */}
        </div>
      </div>
      <div className="lg:hidden w-full flex items-center justify-center fixed bottom-5">
        <button
          onClick={() => toggle()}
          className="!capitalize bg-zee-teal-20 py-2 px-4 rounded-md flex gap-2 items-center justify-center text-sm font-normal text-zee-shades-gray-4"
        >
          {!showMap ? <BsPinMapFill /> : <BsListUl />}
          <span>{!showMap ? "Map" : "List"}</span>
        </button>
      </div>
    </div>
  );
};

export default Page;
