import clsx from "clsx";
import React from "react";

const Section = ({ children, id, className, title, subtitle }) => {
  return (
    <section
      id={id}
      className={clsx(
        className,
        "w-full, relative pt-[1rem] pb-[3rem]  mt-[1rem] mx-4 md:mx-8 lg:mx-20 "
      )}
    >
      <div className="">
        <h2 className="text-[1.2rem] font-medium mb-[0.3rem] text-zee-shades-black">
          <span>{title}</span>
        </h2>
        <h3 className="text-[0.9rem]  font-normal  text-zee-shades-gray-3">
          {subtitle}
        </h3>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
