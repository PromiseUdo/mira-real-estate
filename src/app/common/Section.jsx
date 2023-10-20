import clsx from "clsx";
import React from "react";

const Section = ({ children, id, className, title, subtitle }) => {
  return (
    <section
      id={id}
      className={clsx(
        className,
        "w-full, relative pt-[2rem] pb-[5rem] mt-[1rem]  "
      )}
    >
      <div className="">
        <h2 className="text-[1.1rem] font-medium mb-[0.3rem] text-zee-shades-black">
          <span>{title}</span>
        </h2>
        <h3 className="text-[0.9rem] mb-[0.5rem] font-normal  text-zee-shades-gray-3">
          {subtitle}
        </h3>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
