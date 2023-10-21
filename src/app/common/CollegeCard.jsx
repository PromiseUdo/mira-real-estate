import clsx from "clsx";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
const CollegeCard = ({ bgColor, title }) => {
  return (
    <div
      className={clsx(
        "cursor-pointer relative container  p-4 h-[6rem] rounded-md overflow-hidden  w-[12rem]",
        style.collegeContainer
      )}
      style={{
        background: bgColor,
      }}
    >
      <div className="absolute flex items-end justify-end  w-full h-full 	">
        <FaGraduationCap size={80} color="#d9d9d980" className="rotate-45" />
      </div>
      <div className="p-2">
        <span className="font-normal">{title}</span>
      </div>
    </div>
  );
};

export default CollegeCard;
