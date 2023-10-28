import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa6";
import Section from "../common/Section";
const RentPropertyPrompt = () => {
  return (
    <div className="w-full bg-zee-red-500 mx-auto px-8 py-8 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex  flex-1 items-center gap-4">
          <FaClipboardList
            className="hidden lg:block"
            color="white"
            size={50}
          />
          <div className="pr-0 md:pr-10 ">
            <p className="text-[20px] md:text-[26px] font-medium text-zee-gray-900">
              Are you a real estate agent, landlord or developer ?
            </p>
            <p className="text-zee-shades-gray-2.5">
              List your property for free
            </p>
          </div>
        </div>
        <button className="text-base mt-3 md:mt-0 w-full md:w-auto bg-zee-teal-100 text-white py-3 px-10 rounded-md">
          Rent Calculator
        </button>
      </div>
    </div>
  );
};

export default RentPropertyPrompt;
