import clsx from "clsx";
import React from "react";

const FilterResultSection = ({ children, id, className, title, subtitle }) => {
  return (
    <section
      id={id}
      className={clsx("  w-full relative pt-[1rem] pb-[3rem]   ")}
    >
      <div className="px-4">
        <h2 className="text-[1.2rem] font-medium mb-[0.3rem] text-zee-shades-black">
          <span>{title}</span>
        </h2>
        <h3 className="text-[0.9rem]  font-normal  text-zee-shades-gray-3">
          {subtitle}
        </h3>
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
};

export default FilterResultSection;
