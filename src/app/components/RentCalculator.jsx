import React from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import Section from "../common/Section";
const RentCalculator = () => {
  return (
    <Section id="rent_calculator" title="" subtitle="">
      <div className="  mx-auto border border-1 border-zee-border px-8 py-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex  flex-1 items-center gap-4">
            <GiTakeMyMoney
              className="hidden lg:block"
              color="green"
              size={50}
            />
            <div className="pr-0 md:pr-10 ">
              <p className="text-[24px] md:text-[30px] font-medium text-zee-gray-900">
                Not Sure how much you should be paying?
              </p>
              <p className="text-zee-shades-gray-2.5">
                Tell us a little about your budget and we&apos;ll help you find
                the right place
              </p>
            </div>
          </div>
          <button className="text-base mt-3 md:mt-0 w-full md:w-auto bg-zee-teal-100 text-white py-3 px-10 rounded-md">
            Rent Calculator
          </button>
        </div>
      </div>
    </Section>
  );
};

export default RentCalculator;
