"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaSquareXTwitter,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
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
    <div className=" py-4 md:py-16 px-8 bg-zee-gray-900 w-full">
      <div className="inner flex flex-col-reverse md:flex-row  px-0 py-2 md:py-4 w-full  text-zee-gray-100 gap-2 md:gap-0">
        <div className="company justify-self-center mt-5 md:mt-0   flex self-center border-t border-zee-shades-gray-4 border-1 w-full  md:bg-transparent md:self-start  md:w-auto flex-col  gap-2 md:gap-4 pt-2 md:pt-0">
          <Link href="/" className="">
            <img
              className="mx-auto md:ml-0 object-cover bg-center w-[60px] h-[60px]"
              src="/zeelogo-white.png"
              alt="logo"
            />
          </Link>
          <span className="text-center md:text-start">
            &copy; 2023 MiraHomes Group, Inc.
          </span>
          <div className="flex items-center md:justify-start justify-center gap-2">
            <a href="/" className="">
              <FaFacebookSquare size={30} color="#e2e7e9" />
            </a>
            <a href="/">
              <FaTwitterSquare size={30} color="#e2e7e9" />
            </a>
            <a href="/">
              <FaInstagramSquare size={30} color="#e2e7e9" />
            </a>
            <a href="/">
              <FaLinkedin size={30} color="#e2e7e9" />
            </a>
          </div>
          <div className="text-center md:text-start">
            <h5 className="text-sm font-medium">Support:</h5>
            <a className="font-light text-sm cursor-pointer hover:underline ">
              support@mirahomes.com
            </a>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row justify-center gap-7 md:gap-9 w-full">
          <div>
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium">Advertisers</h5>
              <div onClick={() => setOpenAdvertisers(!openAdvertisers)}>
                {!openAdvertisers ? (
                  <HiMiniPlus color="#e2e7e9" className="md:hidden" />
                ) : (
                  <HiMiniMinus color="#e2e7e9" className="md:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openAdvertisers ? "block" : "hidden"}`,
                "md:block ml-3 md:ml-0"
              )}
            >
              {advertise.map((text, idx) => (
                <li
                  className="border-t border-b border-1 first-of-type:border-t-0 last-of-type:border-b-0 border-zee-shades-gray-4 py-1 font-light text-sm "
                  key={idx}
                >
                  <Link className="hover:underline" href="/">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium">Popular States</h5>
              <div onClick={() => setOpenPopularStates(!openpopularStates)}>
                {!openpopularStates ? (
                  <HiMiniPlus color="#e2e7e9" className="md:hidden" />
                ) : (
                  <HiMiniMinus color="#e2e7e9" className="md:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openpopularStates ? "block" : "hidden"}`,
                "md:block ml-3 md:ml-0"
              )}
            >
              {popularStates.map((text, idx) => (
                <li
                  className="border-t border-b first-of-type:border-t-0 last-of-type:border-b-0 border-1 border-zee-shades-gray-4 py-1 font-light text-sm "
                  key={idx}
                >
                  <Link className="hover:underline" href="/">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium">Popular Shortlet Cities</h5>
              <div
                onClick={() =>
                  setOpenPopularShortletCities(!openPopularShortletCities)
                }
              >
                {!openPopularShortletCities ? (
                  <HiMiniPlus color="#e2e7e9" className="md:hidden" />
                ) : (
                  <HiMiniMinus color="#e2e7e9" className="md:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openPopularShortletCities ? "block" : "hidden"}`,
                "md:block ml-3 md:ml-0"
              )}
            >
              {popularShortlets.map((text, idx) => (
                <li
                  className="border-t border-b first-of-type:border-t-0 last-of-type:border-b-0 border-1 border-zee-shades-gray-4 py-1 font-light text-sm "
                  key={idx}
                >
                  <Link className="hover:underline" href="/">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium">Rental Manager</h5>
              <div onClick={() => setOpenRentalManager(!openRentalManager)}>
                {!openRentalManager ? (
                  <HiMiniPlus color="#e2e7e9" className="md:hidden" />
                ) : (
                  <HiMiniMinus color="#e2e7e9" className="md:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openRentalManager ? "block" : "hidden"}`,
                "md:block ml-3 md:ml-0"
              )}
            >
              {rentalManager.map((text, idx) => (
                <li
                  className="border-t border-b first-of-type:border-t-0 last-of-type:border-b-0  border-1 border-zee-shades-gray-4 py-1 font-light text-sm "
                  key={idx}
                >
                  <Link className="hover:underline" href="/">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h5 className="text-sm font-medium">About Us</h5>
              <div onClick={() => setOpenAboutUs(!openAboutUs)}>
                {!openAboutUs ? (
                  <HiMiniPlus color="#e2e7e9" className="md:hidden" />
                ) : (
                  <HiMiniMinus color="#e2e7e9" className="md:hidden" />
                )}
              </div>
            </div>
            <ul
              className={clsx(
                `${openAboutUs ? "block" : "hidden"}`,
                "md:block ml-3 md:ml-0"
              )}
            >
              {aboutUs.map((text, idx) => (
                <li
                  className="border-t border-b first-of-type:border-t-0 last-of-type:border-b-0 border-1 border-zee-shades-gray-4 py-1 font-light text-sm "
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
