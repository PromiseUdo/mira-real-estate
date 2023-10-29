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
      <div className="my-4 w-full grid grid-flow-row gap-4 grid-cols-1 lg:grid-cols-2	">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </FilterResultSection>
  );
};

export default FilterResults;
