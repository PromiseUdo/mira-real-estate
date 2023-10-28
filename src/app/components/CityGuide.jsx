"use client";
import React, { useRef, useState } from "react";
import Section from "../common/Section";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import PropertyCard from "../common/PropertyCard";
import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";
import CityCard from "../common/CityCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { clsx } from "clsx";

const southCities = ["Uyo", "Yenagoa", "Calabar", "Benin"];
const eastCities = ["Enugu", "Aba", "Abakaliki", "Owerri"];
const westCities = ["Ikoyi", "Festac", "Abeokuta", "Illorin"];
const northCities = ["Buari", "Kaduna", "Jos", "Zaria"];
const featuredCities = [
  {
    title: "Lekki",
    img: "/lagos.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial, entertainment and reacreational activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "Abuja",
    img: "/abuja.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "Port Harcourt",
    img: "/port_harcourt.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "Kano",
    img: "/kano.jpeg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
  {
    title: "Uyo",
    img: "/uyo.jpg",
    desc: "A vibrant city with a very large population at the helm of commercial and entertainment activities in Nigeria.",
    country: "Nigeria",
  },
];

const CityGuide = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [westChevron, setWestChevron] = useState(false);
  const [southChevron, setSouthChevron] = useState(false);
  const [eastChevron, setEastChevron] = useState(false);
  const [northChevron, setNorthChevron] = useState(false);
  const containerRef = useRef(null);
  const westArrow = useRef();
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
      id="city_guide"
      title="Find Properties To Rent In"
      subtitle="Popular Cities"
    >
      <div className="mt-[1rem] lg:mt-0  flex items-center flex-col">
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
              <CityCard
                key={idx}
                imgUrl={city.img}
                title={city.title}
                desc={city.desc}
                country={city.country}
              />
            ))}
          </div>
        </div>

        {/* cities */}
        <div
          id="more_cities"
          className="w-full flex max-[980px]:flex-col mt-6  gap-8  lg:gap-16 max-[980px]:gap-0 justify-center "
        >
          <div
            className={clsx(
              "max-[980px]:border-b max-[980px]:py-3 border-1 border-zee-border",
              westChevron ? "border-b border-1" : ""
            )}
          >
            <div
              onClick={() => setWestChevron(!westChevron)}
              className=" flex items-center gap-1 max-[980px]:justify-between  cursor-pointer"
            >
              <h5 className="text-sm">More From The West</h5>
              <MdKeyboardArrowDown
                className={`transition-all ease-in duration-100 ${
                  westChevron ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`${
                westChevron ? "flex" : "hidden"
              } transition-all duration-100 ease-in`}
            >
              <ul className="max-[980px]:ml-3">
                {westCities.map((city, idx) => (
                  <li
                    key={idx}
                    className="decoration-gray-400	 hover:underline cursor-pointer font-light text-sm"
                  >{`Properties in ${city}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={clsx(
              "max-[980px]:border-b max-[980px]:py-3 border-1 border-zee-border",
              eastChevron ? "border-b border-1" : ""
            )}
          >
            <div
              onClick={() => setEastChevron(!eastChevron)}
              className="  flex  items-center gap-1 max-[980px]:justify-between cursor-pointer"
            >
              <h5 className="text-sm">More From The East</h5>
              <MdKeyboardArrowDown
                className={`transition-all ease-in duration-100 ${
                  eastChevron ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`${
                eastChevron ? "flex" : "hidden"
              } transition-all duration-100 ease-in`}
            >
              <ul className="max-[980px]:ml-3">
                {eastCities.map((city, idx) => (
                  <li
                    key={idx}
                    className="decoration-gray-400 hover:underline cursor-pointer font-light text-sm"
                  >{`Properties in ${city}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={clsx(
              "max-[980px]:border-b max-[980px]:py-3 border-1 border-zee-border",
              southChevron ? "border-b border-1" : ""
            )}
          >
            <div
              onClick={() => setSouthChevron(!southChevron)}
              className="flex items-center gap-1 max-[980px]:justify-between cursor-pointer"
            >
              <h5 className="text-sm">More From The South</h5>
              <MdKeyboardArrowDown
                className={`transition-all ease-in duration-100 ${
                  southChevron ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`${
                southChevron ? "flex" : "hidden"
              } transition-all duration-100 ease-in`}
            >
              <ul className="max-[980px]:ml-3">
                {southCities.map((city, idx) => (
                  <li
                    key={idx}
                    className="decoration-gray-400 hover:underline cursor-pointer font-light text-sm"
                  >{`Properties in ${city}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={clsx(
              " max-[980px]:py-3 ",
              northChevron ? "border-b border-1 border-zee-border" : ""
            )}
          >
            <div
              onClick={() => setNorthChevron(!northChevron)}
              className="flex items-center gap-1 max-[980px]:justify-between cursor-pointer"
            >
              <h5 className="text-sm">More From The North</h5>
              <MdKeyboardArrowDown
                className={`transition-all ease-in duration-100 ${
                  northChevron ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`${
                northChevron ? "flex" : "hidden"
              } transition-all duration-100 ease-in`}
            >
              <ul className="max-[980px]:ml-3">
                {northCities.map((city, idx) => (
                  <li
                    key={idx}
                    className="decoration-gray-400 hover:underline cursor-pointer  font-light text-sm"
                  >{`Properties in ${city}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CityGuide;
