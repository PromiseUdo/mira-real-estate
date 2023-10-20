import React from "react";
import home1 from "../../assets/hero-image.jpg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
  PiBathtubLight,
  PiShowerLight,
  PiBedLight,
  PiToiletLight,
} from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
// import { FaChevronLeft } from "react-icons/fa";
import styles from "../(styles)/PropertyCard.module.scss";
import { clsx } from "clsx";
const PropertyCard = () => {
  return (
    <div
      className={clsx(
        "relative flex flex-col  justify-start h-[18rem] w-[250px] rounded-lg border border-1 border-zee-border group  hover:border-zee-teal-100 bg-white overflow-hidden p-[0.5rem]",
        styles.container
      )}
    >
      <div
        className="relative overflow-hidden h-[8rem] w-[full] bg-center rounded-md"
        style={{
          background: `url("/hero-image.jpg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "8rem",
          width: "100%",
        }}
      >
        <div className="h-full  flex flex-col items-center justify-center  ">
          <div
            className={clsx(
              "flex w-full invisible p-0 justify-between   ",
              styles.overlay
            )}
          >
            <FiChevronLeft
              size={45}
              color="#fff"
              style={{ margin: 0, padding: 0 }}
              className="!p-0 !m-0 cursor-pointer"
            />
            <FiChevronRight size={45} color="#fff" className="cursor-pointer" />
          </div>
          <div className="self-end bg-black/60 text-white mr-4 mt-1 py-[0.1rem] rounded-sm px-[0.5rem]">
            <span>1 of 20</span>
          </div>
        </div>
      </div>
      <div className="card-content mt-2">
        <h5>
          ₦400,000
          <span className="text-zee-shades-gray-2.5 text-sm "> p.a</span>
        </h5>
        <p className=" text-sm text-zee-gray-900 font-normal">
          23 Units Available
        </p>
        <p className="text-sm text-zee-shades-gray-2.5 ">House for rent</p>

        <div className="flex items-center">
          <TfiLocationPin />
          <p className="text-sm font-normal">Wuse, Abuja</p>
        </div>

        <div className="features flex my-2  gap-3">
          <div className=" flex items-center gap-1">
            <PiBedLight />
            <span>3</span>
          </div>
          <div className="border-r border-1"></div>
          <div className="flex items-center gap-1">
            <PiToiletLight />
            <span>1</span>
          </div>
          <div className="border-r border-1"></div>

          <div className="flex items-center gap-1">
            <PiShowerLight />
            <span>2</span>
          </div>
          <div className="border-r border-1"></div>

          <div className="flex items-center gap-1">
            <PiBathtubLight />
            <span>0</span>
          </div>
        </div>
        <button className="py-1 px-6 bg-zee-teal-100 hover:bg-zee-teal-80 text-white w-full rounded-md">
          view details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
