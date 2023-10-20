"use client";
import React, { useState } from "react";
import Section from "../common/Section";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import useDebounce from "@/hooks/useDebounce";
import PropertyCard from "../common/PropertyCard";

const FeaturedProperties = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const debouncePosition = useDebounce(scrollPosition, 50);

  return (
    <Section
      id="featured"
      title="Featured Properties"
      subtitle="Based on your location"
    >
      <div
        onScroll={(e) => {
          setScrollPosition(e.currentTarget.scrollLeft);
        }}
        className="flex flex-1 max-w-full items-start justify-between gap-6 md:gap-2 overflow-x-auto scrollbar-thin"
      >
        <div className="flex flex-1  items-start h-full z-10 gap-4">
          <PropertyCard position="start" index={0} dx={debouncePosition} />
          <PropertyCard index={1} dx={debouncePosition} />
          <PropertyCard index={2} dx={debouncePosition} />
          <PropertyCard index={3} dx={debouncePosition} />
          <PropertyCard index={4} dx={debouncePosition} />
          <PropertyCard index={5} dx={debouncePosition} />
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProperties;
