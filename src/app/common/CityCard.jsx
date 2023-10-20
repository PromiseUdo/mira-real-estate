"use client";
import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
  PiBathtubLight,
  PiShowerLight,
  PiBedLight,
  PiToiletLight,
} from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import styles from "../(styles)/PropertyCard.module.scss";
import { clsx } from "clsx";
import { clamp } from "@/helpers/helpers";
const CityCard = ({ position, index, dx = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const propImages = ["/hero-image.jpg", "/bathroom.webp", "/kitchen.jpg"];

  const styleMap = {
    start: `${clamp(16 - dx, 16, 400)}px`,
    center: `${clamp(index * 90 - 16 - dx, 16, 400)}px`,
    end: `${index * 90 - 52 - dx}px`,
  };
  const handleNextImageClick = () => {
    if (currentIndex === propImages.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevImageClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(propImages.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className={clsx(
        "relative flex flex-col  justify-start h-[20rem] w-[250px] rounded-lg border border-1 border-zee-border group  hover:border-zee-teal-100 bg-white overflow-hidden p-[0.5rem]",
        styles.container
      )}
    >
      <div
        className={clsx(
          "relative !bg-contain !bg-center overflow-hidden h-[8rem] w-[full] rounded-md "
        )}
        style={{
          background: `url(${propImages[currentIndex]})`,
          // backgroundSize: "contain",
          // backgroundPosition: "center",
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
              onClick={handlePrevImageClick}
              size={45}
              color="#fff"
              style={{ margin: 0, padding: 0 }}
              className="!p-0 !m-0 cursor-pointer"
            />
            <FiChevronRight
              onClick={handleNextImageClick}
              size={45}
              color="#fff"
              className="cursor-pointer"
            />
          </div>
          <div className="self-end bg-black/60 text-white mr-4 mt-1 py-[0.1rem] rounded-sm px-[0.5rem]">
            <span>{`${currentIndex + 1} of ${propImages.length}`}</span>
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

export default CityCard;
