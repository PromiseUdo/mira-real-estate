import React from "react";
import Filter from "./components/Filter";
import DummyContent from "../../../components/DummyContent";
import { BsPinMapFill } from "react-icons/bs";
import FilterResults from "../for_sale/components/FilterResults.jsx";
const page = () => {
  return (
    <div className="relative 	  flex flex-col ">
      <Filter />
      <div className=" h-screen  flex gap-4">
        <div className="hidden lg:flex flex-1 items-center justify-center overflow-hidden">
          <div>Google Maps</div>
          {/* <DummyContent /> */}
        </div>
        <div className="shadow	shadow-zee-gray-600	bg-gray-50  flex-1 mr-0 lg:mr-4  overflow-y-scroll   scrollbar    scrollbar-w-1.5    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 ">
          <FilterResults />
        </div>
      </div>
      <div className="lg:hidden w-full flex items-center justify-center fixed bottom-5">
        <button className="!capitalize bg-zee-teal-20 py-2 px-4 rounded-md flex gap-2 items-center justify-center text-sm font-normal">
          <BsPinMapFill />
          <span>Map</span>
        </button>
      </div>
    </div>
  );
};

export default page;
