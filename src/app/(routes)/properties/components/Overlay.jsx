import { clsx } from "clsx";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Overlay = ({ show, onClose, children }) => {
  return (
    <div
      className={clsx(
        "z-[999999] fixed top-0 left-0 w-screen h-screen bg-white ",
        show ? "block" : "hidden",
        "lg:hidden"
      )}
    >
      <div className="flex shadow items-center  py-4 px-4">
        <div className="place-self-center">
          <span className="text-zee-shades-gray-4 font-medium text-[1.2rem]">
            0 Results
          </span>
        </div>
        <button
          className="ml-auto  flex items-center justify-center w-[40px] h-[40px] rounded-[50%] text-xl bg-white text-white"
          onClick={onClose}
        >
          <AiOutlineClose color="#2c3335" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default Overlay;
