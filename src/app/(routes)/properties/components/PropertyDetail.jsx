"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BiShareAlt } from "react-icons/bi";
import { MdReportGmailerrorred, MdKeyboardArrowLeft } from "react-icons/md";
import DummyContent from "../../../components/DummyContent";
import clsx from "clsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const PropertyDetail = ({ onClose }) => {
  const container = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef(null);

  const handleScrollNav = (scrollLeft) => {
    setScrollPosition(scrollLeft);
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 500;
      handleScrollNav(container.scrollLeft);
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 500;
      handleScrollNav(container.scrollLeft);
    }
  };
  const handleScroll = (event) => {
    if (event.target.scrollTop > 10) {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    } else {
      setHasScrolled(false);
    }
  };

  return (
    <div
      onScroll={handleScroll}
      ref={container}
      // style={{
      //   overflow: "hidden !important",
      // }}
      className="h-screen w-full bg-white grid grid-cols-1
     md:grid-cols-12
     overflow-y-scroll md:overflow-y-none   scrollbar    scrollbar-w-1.5    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
     "
    >
      <div
        className={clsx(
          "fixed md:sticky   md:col-span-full w-full top-0  flex  py-2 lg:hidden justify-between items-center px-4",
          hasScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <button
          onClick={onClose}
          className="capitalize text-base logo flex items-center gap-1"
        >
          <MdKeyboardArrowLeft color="#00a0ae" size={25} />
          {hasScrolled && <span className="text-[#00a0ae]">Back</span>}
        </button>

        <div className="options flex items-center gap-5">
          <button className="text-zee-teal-100 capitalize flex items-center gap-1 font-normal">
            <BiShareAlt color="#00a0ae" size={20} />
          </button>

          <button className="text-zee-teal-100 capitalize flex items-center gap-1 font-normal">
            <MdReportGmailerrorred color="#00a0ae" size={20} />
          </button>
        </div>
      </div>
      <div
        style={{
          background: `url("/hero-image.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "100%",
        }}
        className=" md:mt-0 h-64   md:h-screen col-span-5 lg:col-span-7  bg-gray-100 "
      >
        {/* <span className="mt-6">Pictures of Property</span> */}
      </div>

      <div className=" h-screen  col-span-7 lg:col-span-5    py-1">
        <div className="hidden border-b pb-1 border-zee-border lg:flex justify-between items-center mx-4">
          <div className="logo">
            <Link href="/" className="">
              <img
                className="mx-auto lg:ml-0 object-cover bg-center w-[50px] h-[50px]"
                src="/zeelogo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="options flex items-center gap-5">
            <button className="text-zee-teal-100 capitalize flex items-center gap-1 font-normal">
              <BiShareAlt color="#00a0ae" size={20} />
              <span className="text-base font-normal ">Share</span>
            </button>

            <button className="text-zee-teal-100 capitalize flex items-center gap-1 font-normal">
              <MdReportGmailerrorred color="#00a0ae" size={20} />
              <span className="text-base font-normal ">Report</span>
            </button>
          </div>
        </div>

        <div className="header mt-1 px-4 ">
          <h3 className="text-zee-shades-gray-4 tracking-tighter">
            Harmony Estate Realtors
          </h3>
          <p className="text-zee-shades-gray-3">
            141 East West Road, Port Harcourt
          </p>
          <div className="mt-3 flex items-center gap-4 justify-between">
            <button className="w-full border-2 border-zee-teal-100 text-zee-teal-100 px-6 md:px-8 py-2 rounded-md">
              Call Agent
            </button>
            <button className="whitespace-nowrap w-full border-2 border-zee-teal-100 bg-zee-teal-100 px-6 md:px-8 py-2 text-white rounded-md">
              Schedule a tour
            </button>
          </div>
        </div>
        <div className="border-t border-b border-zee-border  flex items-center relative mt-4 w-full py-3 ">
          <div
            className="absolute left-0  cursor-pointer   px-1  hover:bg-zee-gray-100 transition-all ease-in h-full flex items-center justify-center z-20 bg-white"
            onClick={scrollLeft}
          >
            <FiChevronLeft color="#285f74" />
          </div>
          <div
            className="absolute right-0  cursor-pointer   px-1  hover:bg-zee-gray-100 transition-all ease-in h-full flex items-center justify-center z-20 bg-white"
            onClick={scrollRight}
          >
            <FiChevronRight className="" color="#285f74" />
          </div>
          <nav
            ref={containerRef}
            onScroll={(e) => {
              setScrollPosition(e.currentTarget.scrollLeft);
            }}
            style={{ scrollBehavior: "smooth" }}
            className="relative  w-full mx-8  flex items-center justify-center overflow-x-auto scrollbar-none "
          >
            <ul className="w-full gap-4 flex justify-between items-center">
              <li>
                <Link
                  href=""
                  className="select-none whitespace-nowrap hover:text-zee-teal-100 "
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="select-none whitespace-nowrap hover:text-zee-teal-100 "
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="select-none whitespace-nowrap hover:text-zee-teal-100 "
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="select-none whitespace-nowrap hover:text-zee-teal-100 "
                >
                  Nearby Schools
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="select-none whitespace-nowrap hover:text-zee-teal-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
