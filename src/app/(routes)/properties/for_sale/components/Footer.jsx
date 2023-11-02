"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
const aboutUs = [
  "About Us",
  "Contact Us",
  "Careers",
  "Terms of Service",
  "Sitemap",
];

const popularShortlets = [
  "Ikeja",
  "Lekki",
  "Ikoyi",
  "Ajah",
  "Ibadan",
  "Abuja",
  "Port Harcourt",
];

const popularStates = [
  "Lagos",
  "FCT",
  "Rivers",
  "Kano",
  "Ogun",
  "Oyo",
  "Enugu",
];

const rentalManager = [
  "Sale Your Property",
  "Lease Your Property",
  "Manage Your Property",
];

const advertise = ["Featured Real Estate Companies", "Place Banner Adverts"];

const support = ["support@mirahomes.com", "+234111299444"];
const Footer = () => {
  const [openAdvertisers, setOpenAdvertisers] = useState(false);
  const [openPopularShortletCities, setOpenPopularShortletCities] =
    useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [openRentalManager, setOpenRentalManager] = useState(false);
  const [openpopularStates, setOpenPopularStates] = useState(false);
  return (
    <div className=" py-6 mb-4 bg-gray-50 w-full">
      <Disclaimer />

      <div className="inner flex flex-col-reverse justify-center items-center  px-0 py-2 px-4 w-full  text-zee-shades-gray-4 gap-2 md:gap-0 ">
        <div className="flex pb-8 md:pb-0 items-center justify-center company  mt-5  border-t border-zee-shades-gray-2 border-1   w-full     flex-col  gap-3  pt-2 ">
          <Link href="/" className="">
            <img
              className="mx-auto lg:ml-0 object-cover bg-center w-[60px] h-[60px]"
              src="/zeelogo.png"
              alt="logo"
            />
          </Link>
          <span className="text-center text-sm ">
            &copy; 2023 MiraHomes Group, Inc.
          </span>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <img src="/google-play-badge.svg" alt="play store badge" />
            <img src="/app-store-badge.svg" alt="play store badge" />
          </div>
          <div className="flex items-center lg:justify-start justify-center gap-2">
            <a href="/" className="">
              <FaFacebookSquare size={30} color="#2c3335" />
            </a>
            <a href="/">
              <FaSquareXTwitter size={30} color="#2c3335" />
            </a>
            <a href="/">
              <FaInstagramSquare size={30} color="#2c3335" />
            </a>
            <a href="/">
              <FaLinkedin size={30} color="#2c3335" />
            </a>
          </div>
          <div className="text-center ">
            <h5 className="text-sm font-medium">Support:</h5>
            <a className="font-light text-sm cursor-pointer hover:underline ">
              support@mirahomes.com
            </a>
          </div>
        </div>

        <div className="flex  flex-col xl:flex-row justify-center gap-3 xl:gap-9 w-full xl:w-auto">
          <div>
            <div
              onClick={() => setOpenAdvertisers(!openAdvertisers)}
              className="flex items-center justify-between"
            >
              <h5 className="text-sm font-medium">Advertisers</h5>
              <div>
                {!openAdvertisers ? (
                  <HiMiniPlus color="#2c3335" className="xl:hidden" />
                ) : (
                  <HiMiniMinus color="#2c3335" className="xl:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openAdvertisers ? "block" : "hidden"}`,
                "xl:block ml-3 xl:ml-0"
              )}
            >
              {advertise.map((text, idx) => (
                <li
                  className=" py-1 font-light text-sm md:border-none md:py-0 text-zee-shades-gray-4 "
                  key={idx}
                >
                  <Link className="hover:underline" href="#">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              onClick={() => setOpenPopularStates(!openpopularStates)}
              className="flex items-center justify-between"
            >
              <h5 className="text-sm font-medium">Popular States</h5>
              <div>
                {!openpopularStates ? (
                  <HiMiniPlus color="#2c3335" className="xl:hidden" />
                ) : (
                  <HiMiniMinus color="#2c3335" className="xl:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openpopularStates ? "block" : "hidden"}`,
                "xl:block ml-3 xl:ml-0"
              )}
            >
              {popularStates.map((text, idx) => (
                <li
                  className=" py-1 font-light text-sm md:border-none md:py-0"
                  key={idx}
                >
                  <Link className="hover:underline" href="#">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              onClick={() =>
                setOpenPopularShortletCities(!openPopularShortletCities)
              }
              className="flex items-center justify-between"
            >
              <h5 className="text-sm font-medium">Popular Shortlet Cities</h5>
              <div>
                {!openPopularShortletCities ? (
                  <HiMiniPlus color="#2c3335" className="xl:hidden" />
                ) : (
                  <HiMiniMinus color="#2c3335" className="xl:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openPopularShortletCities ? "block" : "hidden"}`,
                "xl:block ml-3 xl:ml-0"
              )}
            >
              {popularShortlets.map((text, idx) => (
                <li
                  className=" py-1 font-light text-sm md:border-none md:py-0"
                  key={idx}
                >
                  <Link className="hover:underline" href="#">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              onClick={() => setOpenRentalManager(!openRentalManager)}
              className="flex items-center justify-between"
            >
              <h5 className="text-sm font-medium">Rental Manager</h5>
              <div>
                {!openRentalManager ? (
                  <HiMiniPlus color="#2c3335" className="xl:hidden" />
                ) : (
                  <HiMiniMinus color="#2c3335" className="xl:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openRentalManager ? "block" : "hidden"}`,
                "xl:block ml-3 xl:ml-0"
              )}
            >
              {rentalManager.map((text, idx) => (
                <li
                  className=" py-1 font-light text-sm md:border-none md:py-0"
                  key={idx}
                >
                  <Link className="hover:underline" href="#">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              onClick={() => setOpenAboutUs(!openAboutUs)}
              className="flex items-center justify-between"
            >
              <h5 className="text-sm font-medium">About Us</h5>
              <div>
                {!openAboutUs ? (
                  <HiMiniPlus color="#2c3335" className="xl:hidden" />
                ) : (
                  <HiMiniMinus color="#2c3335" className="xl:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openAboutUs ? "block" : "hidden"}`,
                "xl:block ml-3 xl:ml-0"
              )}
            >
              {aboutUs.map((text, idx) => (
                <li
                  className=" py-1 font-light text-sm md:border-none md:py-0"
                  key={idx}
                >
                  <Link className="hover:underline" href="/">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Disclaimer = () => {
  return (
    <div className="px-4 w-full py-4 bg-gray-100 border-b border-1 border-zee-shades-gray-2 mb-4">
      <p className="text-sm font-light">
        <span className="font-medium ">Disclaimer:</span> Information about
        properties are not generated or have neither been fully confirmed by
        Mira Homes. We are not liable to any misinformation.
      </p>
    </div>
  );
};
