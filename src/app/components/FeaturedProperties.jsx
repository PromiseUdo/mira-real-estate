"use client";
import React, { useRef, useState } from "react";
import Section from "../common/Section";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import PropertyCard from "../common/PropertyCard";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
const FeaturedProperties = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
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
      <div className="mt-[1rem] lg:mt-0 flex flex-col ">
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
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            <div className="w-[17rem] md:w-[16rem]">
              <PropertyCard />
            </div>
            {/* <PropertyCard className="snap-start" position="start" index={0} />
            <PropertyCard className="snap-start" index={1} />
            <PropertyCard className="snap-start" index={2} />
            <PropertyCard className="snap-start" index={3} />
            <PropertyCard className="snap-start" index={4} />
            <PropertyCard className="snap-start" index={5} />
            <PropertyCard className="snap-start" index={5} />
            <PropertyCard className="snap-start" index={5} />
            <PropertyCard className="snap-start" index={5} /> */}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 self-center">
          <Link
            href="/"
            className=" border border-zee-teal-100 border-1 px-6 py-2 rounded-md flex items-center gap-2 group hover:text-white hover:bg-zee-teal-100"
          >
            <BsArrowDown className="font-medium  hover:text-zee-teal-100" />{" "}
            <span className="text-zee-dark-teal-100 font-medium group-hover:text-white">
              See More Properties
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProperties;
