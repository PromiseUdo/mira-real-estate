import React from "react";
import Filter from "./components/Filter";
import TypeFilter from "../components/TypeFilter";
import DummyContent from "../../../components/DummyContent";
import FilterResults from "../for_sale/components/FilterResults.jsx";
const page = () => {
  return (
    <div className="relative 	  flex flex-col ">
      <Filter />
      <div className=" h-screen  flex gap-4">
        <div className="flex-1  overflow-hidden">
          <div>Google Maps</div>
          {/* <DummyContent /> */}
        </div>
        <div className="shadow	shadow-zee-gray-600	bg-gray-50  flex-1 mr-4  overflow-y-scroll   scrollbar     scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 ">
          <FilterResults />
        </div>
      </div>
    </div>
  );
};

export default page;
