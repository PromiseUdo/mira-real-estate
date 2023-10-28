import React from "react";
import Filter from "./components/Filter";
import TypeFilter from "../components/TypeFilter";
import DummyContent from "../../../components/DummyContent";
import FilterResults from "../for_sale/components/FilterResults.jsx";
const page = () => {
  return (
    <div className="relative 	  flex flex-col ">
      <Filter />
      <div className=" bg-green-600 flex gap-4">
        <div className="flex-1 h-screen overflow-y-none overflow-hidden">
          <div>Google Maps</div>
          <DummyContent />
        </div>
        <div className="bg-gray-100 flex-1  mx-4 overflow-y-scroll   scrollbar     scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 ">
          <FilterResults />
        </div>
      </div>
    </div>
  );
};

export default page;
