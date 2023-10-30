"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BiShareAlt } from "react-icons/bi";
import { MdReportGmailerrorred, MdKeyboardArrowLeft } from "react-icons/md";
import DummyContent from "../../../components/DummyContent";
import clsx from "clsx";

const PropertyDetail = ({ onClose }) => {
  const container = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (event) => {
    if (event.target.scrollTop > 10) {
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    } else {
      setHasScrolled(false);
    }
  };

  console.log(hasScrolled);
  return (
    <div
      onScroll={handleScroll}
      ref={container}
      // style={{
      //   overflow: "hidden !important",
      // }}
      className="h-screen w-full bg-white grid grid-cols-1
     md:grid-cols-12
     overflow-y-scroll   scrollbar    scrollbar-w-1.5    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
     "
    >
      <div
        className={clsx(
          "fixed  w-full top-0  flex  py-2 md:hidden justify-between items-center px-4",
          hasScrolled ? "bg-white" : "bg-transparent"
        )}
      >
        <button
          onClick={onClose}
          className="capitalize text-base logo flex items-center gap-1"
        >
          <MdKeyboardArrowLeft color="#00a0ae" size={25} />
          {hasScrolled && <span className="text-[#00a0ae]">Back</span>}
        </button>

        <div className="options flex items-center gap-4">
          <button className="text-zee-teal-100 capitalize flex items-center gap-1 font-normal">
            <BiShareAlt color="#00a0ae" size={20} />
          </button>

          <button className="text-zee-teal-100 capitalize flex items-center gap-1 font-normal">
            <MdReportGmailerrorred color="#00a0ae" size={20} />
          </button>
        </div>
      </div>
      <div className=" md:mt-0 h-64   md:h-screen col-span-7  bg-gray-100 ">
        {/* <span className="mt-6">Pictures of Property</span> */}
      </div>

      <div className=" h-screen col-span-5    py-1">
        <div className="hidden border-b pb-1 border-zee-border md:flex justify-between items-center mx-4">
          <div className="logo">
            <Link href="/" className="">
              <img
                className="mx-auto lg:ml-0 object-cover bg-center w-[50px] h-[50px]"
                src="/zeelogo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="options flex items-center gap-4">
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

        <span>Property Details</span>
      </div>
    </div>
  );
};

export default PropertyDetail;
