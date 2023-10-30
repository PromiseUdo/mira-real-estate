import Link from "next/link";
import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { MdReportGmailerrorred, MdKeyboardArrowLeft } from "react-icons/md";
import DummyContent from "../../../components/DummyContent";

const PropertyDetail = ({ onClose }) => {
  return (
    <div
      // style={{
      //   overflow: "hidden !important",
      // }}
      className="h-screen w-full bg-white grid grid-cols-1
     md:grid-cols-12
     overflow-y-scroll   scrollbar    scrollbar-w-1.5    scrollbar-thumb-zee-dark-teal-80 scrollbar-track-zee-gray-200
     "
    >
      <div className="sticky  w-full top-0 bg-green-200 flex  py-2 md:hidden justify-between items-center px-4">
        <button className="logo">
          <MdKeyboardArrowLeft onClick={onClose} size={20} />
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
      <div className=" h-64   md:h-screen col-span-7  bg-gray-100 ">
        <span>Pictures of Property</span>
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
