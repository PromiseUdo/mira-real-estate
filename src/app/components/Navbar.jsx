"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "../(styles)/Navbar.module.scss";
import { useToggleState } from "../../../useToggleState";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const mobileNav = useRef(null);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleOutsideClick = (event) => {
  //   if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
  //     closeMobileNav();
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // });

  const {
    state: showMenu,
    toggle,
    close: closeMobileNav,
  } = useToggleState(false);
  return (
    <div
      className={clsx(
        "w-[100vw] sticky z-20 top-0 flex border-b-zee-shades-gray-2  transition-all",
        isScrolled
          ? "bg-zee-teal-20  shadow-lg border-b-[1px] "
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between  w-full py-0 px-16 my-0 mx-auto ">
        {/* <nav className={clsx("w-full flex justify-between  items-center py-0")}> */}
        <ul className="hidden lg:flex  items-center gap-6 ">
          <li>
            <Link className={clsx(styles.navLink)} href="/for-rent">
              For Rent
            </Link>
          </li>
          <li>
            <Link className={clsx(styles.navLink)} href="/">
              For Sale
            </Link>
          </li>
          <li>
            <Link className={clsx(styles.navLink)} href="/">
              Agent Finder
            </Link>
          </li>
        </ul>

        <img
          className="object-cover bg-center w-[60px] h-[60px]"
          src="/zeelogo.png"
          alt="logo"
        />
        <ul className="hidden lg:flex items-center gap-6 ">
          <li>
            <Link className={clsx(styles.navLink, "z-5")} href="/">
              Manage Property
            </Link>
          </li>
          <li>
            <Link className={clsx(styles.navLink)} href="/">
              Advertise
            </Link>
          </li>
          <li>
            <Link className={clsx(styles.navLink)} href="/">
              Help
            </Link>
          </li>

          <Image
            className="cursor-pointer"
            src="/defaultImage.png"
            alt="default profile image"
            objectFit="contain"
            width={30}
            height={30}
          />
        </ul>
        <button className="lg:hidden" onClick={() => setMobileDropdown(true)}>
          <AiOutlineMenu fontSize={30} />
        </button>
      </div>

      {/* mobile nav */}
      <div
        className={clsx(
          "fixed top-0 left-0 z-[99999] w-[100vw] h-[100vh] transition-transform ease-in-out duration-200",
          mobileDropdown ? undefined : "!translate-x-[-100%]",
          styles.mobileNav
        )}
        ref={mobileNav}
      >
        <nav
          ref={mobileNav}
          className="p-[2rem] h-[100vh] bg-zee-teal-80 w-[100%] md:w-[30%] "
        >
          {mobileDropdown && (
            <ul className="flex flex-col">
              <div className="flex items-center justify-between gap-[1.5rem] pb-[1rem] mb-[2rem] border-zee-gray-400 border-b border-solid ">
                <div>
                  <Link href="/">
                    <img
                      className="object-cover bg-center w-[60px] h-[60px]"
                      src="/zeelogo.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                {/* Close Button */}
                <button
                  className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] text-xl bg-zee-gray-700 text-white"
                  onClick={() => setMobileDropdown(false)}
                >
                  <AiOutlineClose className="text-white" />
                </button>
              </div>
              {/* Links */}
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  For Rent
                </Link>
              </li>
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  For Sale
                </Link>
              </li>
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  Agent Finder
                </Link>
              </li>
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  Manage Property
                </Link>
              </li>
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  Advertise
                </Link>
              </li>
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  Help
                </Link>
              </li>
              <li
                className="mt-[0.8rem]"
                onClick={() => setMobileDropdown(false)}
              >
                <Link
                  className="flex w-[100%] h-[40px] pb-[0.5rem] font-medium border-zee-gray-400 border-b border-solid text-white ease-in-out transition-all duration-200 cursor-pointer"
                  href="#"
                >
                  <Image
                    className="cursor-pointer"
                    src="/defaultImage.png"
                    alt="default profile image"
                    objectFit="contain"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
