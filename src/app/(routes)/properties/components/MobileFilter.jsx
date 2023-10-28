import clsx from "clsx";
import React from "react";

const MobileFilter = () => {
  return (
    <div className="relative h-full w-full   absolute  flex flex-col items-center justify-center">
      <div className="w-full shadow fixed border-t bottom-0 py-2">
        <div className=" px-4 flex py-1 gap-4 w-full">
          <button className="bg-zee-gray-100 text-[15px] text-zee-shades-black w-full rounded-md mt-2 py-1 font-semibold whitespace-nowrap">
            Reset
          </button>
          <button className="bg-zee-teal-100 text-[15px] text-white w-full rounded-md mt-2 py-1 px-4 font-semibold">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
