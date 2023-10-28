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
const CityCard = ({ imgUrl, title, desc, country }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const propImages = ["/hero-image.jpg", "/bathroom.webp", "/kitchen.jpg"];

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
        "cursor-pointer relative flex flex-col  justify-start h-[20rem] w-[17rem] md:w-[16rem]  rounded-lg border border-1 border-zee-border group  hover:border-zee-teal-100 bg-white overflow-hidden p-[0.5rem]"
      )}
    >
      <div className="h-[8rem] rounded-md relative w-full overflow-hidden">
        <div
          className={clsx(
            "relative !bg-cover !bg-center  h-[8rem] w-[100%]  transition-all duration-1000 hover:scale-125 bg-no-repeat",
            styles.image
          )}
          style={{
            background: `url(${imgUrl})`,
            // backgroundSize: "contain",
            // backgroundPosition: "center",
            height: "8rem",
            width: "100%",
          }}
        ></div>
      </div>

      <div className="card-content mt-2">
        <h5>{title}</h5>
        <p className=" text-sm text-zee-gray-900 font-normal">{country}</p>
        <p className="text-sm text-zee-shades-gray-2.5 ">{desc}</p>

        <button className="py-1 px-6 bg-zee-teal-100 hover:bg-zee-teal-80 text-white w-full rounded-md">
          view details
        </button>
      </div>
    </div>
  );
};

export default CityCard;
