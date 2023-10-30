import Link from "next/link";
import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { MdReportGmailerrorred, MdKeyboardArrowLeft } from "react-icons/md";

const PropertyDetail = ({ onClose }) => {
  return (
    <div
      style={{
        overflow: "hidden !important",
      }}
      className="!overflow-hidden	 !overscroll-none h-screen w-full bg-white grid grid-cols-1
     md:grid-cols-12"
    >
      <div className=" h-64  !overscroll-none md:h-screen col-span-7  bg-gray-100 ">
        <div className="fixed w-full top-0 bg-green-200 flex  py-2 md:hidden justify-between items-center px-4">
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
        <span>Pictures of Property</span>
      </div>

      <div className="h-screen col-span-5   bg-red-500  py-1">
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
      </div>
    </div>
  );
};

export default PropertyDetail;
