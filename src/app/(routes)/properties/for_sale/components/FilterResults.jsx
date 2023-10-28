import React from "react";
import FilterResultSection from "./FilterResultSection";
import DummyContent from "../../../../components/DummyContent";

const FilterResults = () => {
  return (
    <FilterResultSection
      id="container"
      title="Real Estate & Homes For Sale"
      subtitle="150 results"
    >
      FilterResults
      <DummyContent />
    </FilterResultSection>
  );
};

export default FilterResults;
