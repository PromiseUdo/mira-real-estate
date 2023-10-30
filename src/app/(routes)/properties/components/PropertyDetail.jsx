import Link from "next/link";
import React from "react";
import { GrShareOption } from "react-icons/gr";
import { MdReportGmailerrorred } from "react-icons/md";
const PropertyDetail = () => {
  return (
    <div className="h-screen w-full bg-white grid grid-cols-12">
      <div className="col-span-7 bg-gray-100 flex items-center justify-center">
        <span>Pictures of Property</span>
      </div>

      <div className="col-span-5 py-4">
        <div className="border-b pb-2 border-zee-border flex justify-between items-center mx-4">
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
            <button className="capitalize flex items-center gap-1 font-normal">
              <GrShareOption size={20} className="" />
              <span className="text-base font-normal ">Share</span>
            </button>

            <button className="capitalize flex items-center gap-1 font-normal">
              <MdReportGmailerrorred size={20} />
              <span className="text-base font-normal ">Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
