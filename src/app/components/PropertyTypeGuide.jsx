"use client";
import React, { useRef, useState } from "react";
import Section from "../common/Section";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import PropertyCard from "../common/PropertyCard";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import CityCard from "../common/CityCard";
import PropertyTypeCard from "../common/PropertyTypeCard";

const featuredCities = [
  {
    title: "Land",
    img: "/land.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "Shortlet",
    img: "/shortlet.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "House",
    img: "/house.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "Shop",
    img: "/shop.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
  // {
  //   title: "Kano",
  //   img: "/kano.jpeg",
  //   desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
  //   country: "Nigeria",
  // },
];

const PropertyTypeGuide = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  // const handleScroll = (scrollLeft) => {
  //   setScrollPosition(scrollLeft);
  // };

  // const scrollLeft = () => {
  //   const container = containerRef.current;
  //   if (container) {
  //     container.scrollLeft -= 500;
  //     handleScroll(container.scrollLeft);
  //   }
  // };

  // const scrollRight = () => {
  //   const container = containerRef.current;
  //   if (container) {
  //     container.scrollLeft += 500;
  //     handleScroll(container.scrollLeft);
  //   }
  // };

  return (
    <Section
      id="property_type_guide"
      title="Find Properties By Type"
      subtitle=""
    >
      <div className="mt-[1rem] flex flex-col px-1  lg:px-5">
        <div
          ref={containerRef}
          // onScroll={(e) => {
          //   setScrollPosition(e.currentTarget.scrollLeft);
          // }}
          // style={{ scrollBehavior: "smooth" }}
          className="flex  flex-1 max-w-full items-start justify-between gap-6 md:gap-2 "
        >
          <div className="flex flex-1 flex-wrap justify-center  items-start h-full z-10 gap-4">
            {featuredCities.map((city, idx) => (
              <PropertyTypeCard
                key={idx}
                imgUrl={city.img}
                title={city.title}
                desc={city.desc}
                country={city.country}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PropertyTypeGuide;
