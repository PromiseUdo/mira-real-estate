"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BiShareAlt } from "react-icons/bi";
import { MdReportGmailerrorred, MdKeyboardArrowLeft } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import DummyContent from "../../../components/DummyContent";
import { MdOutlineLandscape } from "react-icons/md";
import { LiaSnowflake } from "react-icons/lia";
import { MdOutlineFence } from "react-icons/md";
import clsx from "clsx";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Footer from "../for_sale/components/Footer";
const PropertyDetail = ({ onClose }) => {
  const container = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef(null);

  const [navHeight, setNavHeight] = useState(0);
  const [introHeight, setIntroHeight] = useState(0);
  const navRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    setNavHeight(navRef.current.clientHeight);
  });
  useEffect(() => {
    setIntroHeight(introRef.current.clientHeight);
  });

  const handleScrollNav = (scrollLeft) => {
    setScrollPosition(scrollLeft);
    // console.log(leftArrow);
  };

  const scrollLeft = () => {
    rightArrow.current.style.display = "flex";

    const container = containerRef.current;
    let newScrollLeft = 0;
    if (container) {
      newScrollLeft = container.scrollLeft -= 500;
      handleScrollNav(container.scrollLeft);
    }

    if (newScrollLeft <= 32) {
      leftArrow.current.style.display = "none";
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    leftArrow.current.style.display = "flex";

    let newScrollLeft4Right = 0;
    if (container) {
      newScrollLeft4Right = container.scrollLeft += 500;
      handleScrollNav(container.scrollLeft);
    }

    if (newScrollLeft4Right - container.scrollLeft === 500) {
      rightArrow.current.style.display = "none";
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
     overflow-y-scroll   md:overflow-y-hidden  scrollbar    scrollbar-w-1.5    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
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
        className="overflow-y-auto md:h-screen md:mt-0 h-64  col-span-5 lg:col-span-7  bg-gray-100 "
      >
        {/* <DummyContent /> */}
        {/* <span className="mt-6">Pictures of Property</span> */}
      </div>

      <div
        ref={introRef}
        className=" h-screen  col-span-7 lg:col-span-5    pt-1"
      >
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
          <h3 className="flex items-center text-zee-shades-gray-4 tracking-tighter">
            <HiBadgeCheck color="green" />
            <span> Harmony Estate Realtors</span>
          </h3>
          <p className="text-zee-shades-gray-3">
            141 East West Road, Port Harcourt
          </p>
          <div className="mt-3 flex items-center gap-4 justify-between">
            <button className="w-full border-2 border-zee-teal-100 text-zee-teal-100 px-6 md:px-8 py-2 rounded-md whitespace-nowrap">
              Call Agent
            </button>
            <button className="whitespace-nowrap w-full border-2 border-zee-teal-100 bg-zee-teal-100 px-6 md:px-8 py-2 text-white rounded-md">
              Schedule a tour
            </button>
          </div>
        </div>
        <div
          ref={navRef}
          className="border-t border-b border-zee-border  flex items-center relative mt-4 w-full py-3 "
        >
          <div
            ref={leftArrow}
            className="absolute left-0  cursor-pointer   px-1  hover:bg-zee-gray-100 transition-all ease-in h-full flex items-center justify-center z-20 bg-white"
            onClick={scrollLeft}
          >
            <FiChevronLeft color="#285f74" />
          </div>
          <div
            ref={rightArrow}
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

        {/* Property details */}
        <div
          className={` overflow-y-auto relative bottom-0 w-full h-screen md:h-[calc(100vh-242px)]`}
        >
          <div className="my-4 px-4">
            {/* <DummyContent /> */}
            <div className="my-2">
              <h5>Property Overview</h5>
              <p>
                This is 1 bedroom flat apartment situated at a nice
                neighbourhood. The apartment boots of security, good electricity
                and clean water . The landlord is very friendly and does not
                care if you have 20 girlfriends and 19 dogs.
              </p>
            </div>
            <div className="my-2">
              <h5>Features</h5>
              <ul>
                <li className="flex items-center">
                  <MdOutlineFence />
                  <span>Has fence and gate</span>
                </li>
                <li className="flex items-center">
                  <LiaSnowflake />
                  <span>Has Air Conditioning</span>
                </li>
                <li className="flex items-center">
                  <MdOutlineLandscape />
                  <span>534 sqkm</span>
                </li>
              </ul>
            </div>
            <div className="my-2">
              <h5>Policies</h5>
              <h6>Lease Terms</h6>
              <ul>
                <li className="flex items-center">
                  <span>1 Year Full Payment</span>
                </li>
                <li className="flex items-center">
                  <span>10% Maintenance Fee</span>
                </li>
              </ul>
            </div>
            <div className="my-2">
              <h5>Nearby Schools</h5>
              <h6>Lease Terms</h6>
              <ul>
                <li className="flex items-center">
                  <span>Smart Kids Internationl School</span>
                </li>
                <li className="flex items-center">
                  <span>Rumuola Polytechnic</span>
                </li>
                <li className="flex items-center">
                  <span>Arise and Shine University</span>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    // h-[calc(100vh-241.391px)]
  );
};

export default PropertyDetail;
