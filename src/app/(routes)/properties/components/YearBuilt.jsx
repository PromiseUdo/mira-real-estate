import React from "react";

const YearBuilt = () => {
  return (
    <div className="flex flex-col w-full">
      <span className="select-none text-sm font-medium">Year Built</span>
      <div className="flex items-center gap-4">
        <div className="flex flex-col flex-1 gap-1">
          <input
            // onChange={(e) => setMinYearBuilt(e.target.value)}
            type="text"
            // value={minYearBuilt}
            className="rounded-md  w-full border-zee-border bg-zee-gray-50"
            placeholder="No Min"
          />
        </div>
        <div className="relative ">-</div>
        <div className="flex flex-1 flex-col gap-1">
          <input
            // onChange={(e) => setMaxYearBuilt(e.target.value)}
            // value={maxYearBuilt}
            type="text"
            className="rounded-md  w-full border-zee-border bg-zee-gray-50"
            placeholder="No Max"
          />
        </div>
      </div>
    </div>
  );
};

export default YearBuilt;
