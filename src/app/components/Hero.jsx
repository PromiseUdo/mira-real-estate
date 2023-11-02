"use client";
import React from "react";
import styles from "../(styles)/Hero.module.scss";
import clsx from "clsx";
import Filter from "./Filter";
const Hero = () => {
  return (
    <section className={clsx("mb-[1rem] relative w-full h-screen")}>
      <img
        className=" top-0 left-0 w-full h-screen object-center object-cover"
        src="/hero-image4.jpg"
        alt="hero image"
      />
      <div className="bg-black/70 absolute top-0 left-0 w-full h-screen" />
      {/* 430 x 836 */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
        <Filter />
      </div>
    </section>
  );
};

export default Hero;
