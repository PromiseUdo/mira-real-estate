"use client";
import React, { useRef, useState } from "react";
import Section from "../common/Section";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import useDebounce from "@/hooks/useDebounce";
import PropertyCard from "../common/PropertyCard";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
const FeaturedProperties = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const debouncePosition = useDebounce(scrollPosition, 50);
  const containerRef = useRef(null);

  const handleScroll = (scrollLeft) => {
    setScrollPosition(scrollLeft);
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 500;
      handleScroll(container.scrollLeft);
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 500;
      handleScroll(container.scrollLeft);
    }
  };

  return (
    <Section
      id="featured"
      title="Featured Properties"
      subtitle="Based on your location"
    >
      <div className="flex flex-col px-1  lg:px-5">
        <div className="hidden lg:flex self-end cursor-pointer  gap-2 mb-4">
          <div
            className="border border-1 border-zee-border  hover:border-zee-border p-2 rounded-full hover:bg-zee-gray-100 transition-all ease-in"
            onClick={scrollLeft}
          >
            <FiChevronLeft />
          </div>
          <div
            className="border cursor-pointer border-1 border-zee-border  hover:border-zee-border p-2 rounded-full hover:bg-zee-gray-100 transition-all ease-in"
            onClick={scrollRight}
          >
            <FiChevronRight />
          </div>
        </div>
        <div
          ref={containerRef}
          onScroll={(e) => {
            setScrollPosition(e.currentTarget.scrollLeft);
          }}
          style={{ scrollBehavior: "smooth" }}
          className="flex  flex-1 max-w-full items-start justify-between gap-6 md:gap-2 overflow-x-auto scrollbar scrollbar-h-1 overflow-y-visible  scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200 pb-4"
        >
          <div className="flex flex-1  items-start h-full z-10 gap-4">
            <PropertyCard
              className="snap-start"
              position="start"
              index={0}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={1}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={2}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={3}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={4}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={5}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={5}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={5}
              dx={debouncePosition}
            />
            <PropertyCard
              className="snap-start"
              index={5}
              dx={debouncePosition}
            />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 self-center">
          <Link href="/" className=" flex items-center gap-2">
            <BsArrowDown color="#285f74" className="font-medium" />{" "}
            <span className="text-zee-dark-teal-100 hover:text-zee-dark-teal-80 font-medium">
              See More Properties
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProperties;
