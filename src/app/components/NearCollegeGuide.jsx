"use client";
import React, { useRef, useState } from "react";
import Section from "../common/Section";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import useDebounce from "@/hooks/useDebounce";
import PropertyCard from "../common/PropertyCard";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import CityCard from "../common/CityCard";
import BedroomCard from "../common/BedroomCard";
import CollegeCard from "../common/CollegeCard";

const featuredCities = [
  {
    title: "Univeristy of Nsukka",
    img: "/selfcon2.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
    bgColor: "#ff000080",
  },
  {
    title: "Univeristy of Lagos",
    img: "/selfcon2.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
    bgColor: "#f30de080",
  },
  {
    title: "Univeristy of Illorin",
    img: "/selfcon2.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
    bgColor: "#00ff0f80",
  },
  {
    title: "Univeristy of Benin",
    img: "/selfcon2.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
    bgColor: "#005fff80",
  },
  {
    title: "University of Zaria",
    img: "/selfcon2.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
    bgColor: "#555fff80",
  },
  {
    title: "Univeristy of Ibadan",
    img: "/selfcon2.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
    bgColor: "#d6060f80",
  },
  //   {
  //     title: "1 Bedroom Apartments",
  //     img: "/1bedroom.jpg",
  //     desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
  //     country: "Nigeria",
  //   },
  //   {
  //     title: "2 Bedroom Apartments",
  //     img: "/2bedroom.webp",
  //     desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
  //     country: "Nigeria",
  //   },
  //   {
  //     title: "3 Bedroom Apartments",
  //     img: "/3bedroom.jpg",
  //     desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
  //     country: "Nigeria",
  //   },
  // {
  //   title: "Kano",
  //   img: "/kano.jpeg",
  //   desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
  //   country: "Nigeria",
  // },
];

const NearCollegeGuide = () => {
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
      id="bedroom_guide"
      title="Need an apartment near your university or college?"
      subtitle="Search all off-campus apartments for rent"
    >
      <div className="mt-[1rem] flex flex-col ">
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
            {featuredCities.map((city, idx) => (
              <CollegeCard
                key={idx}
                title={city.title}
                bgColor={city.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NearCollegeGuide;
