import React from "react";
import FilterResultSection from "./FilterResultSection";
import DummyContent from "../../../../components/DummyContent";
import PropertyCard from "../../../../common/PropertyCard";

const FilterResults = () => {
  return (
    <FilterResultSection
      id="container"
      title="Properties For Rent"
      subtitle="150 results"
    >
      <div className="my-4 w-full flex gap-3 flex-wrap">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </FilterResultSection>
  );
};

export default FilterResults;
