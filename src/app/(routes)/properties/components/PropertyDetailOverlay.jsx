import { clsx } from "clsx";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const PropertyDetailOverlay = ({ show, onClose, children }) => {
  return (
    <div
      className={clsx(
        "z-[999999] fixed top-0 left-0 w-screen h-screen  bg-black/50",
        show ? "block" : "hidden"
      )}
      style={
        {
          // background: "rgba(153, 217, 223, 0.5)",
        }
      }
    >
      <div className="flex w-full  shadow items-center  py-4 px-8">
        <button
          className="ml-auto border border-1 border-white rounded-full flex items-center justify-center w-[30px] h-[30px]  text-xl text-white"
          onClick={onClose}
        >
          <AiOutlineClose size={25} color="#fff" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default PropertyDetailOverlay;
