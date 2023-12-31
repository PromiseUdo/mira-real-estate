"use client";

import React, { useState } from "react";
import TypeFilter from "../../components/TypeFilter";
import PriceFilterContainer from "../../components/PriceFilterContainer";
import BedAndBathFilterContainer from "../../components/BedAndBathFilterContainer";
import PropertyTypeFilter from "../../components/PropertyTypeFilter";
import MoreFilters from "../../components/MoreFilters";
import LocationFilter from "../../components/LocationFilter";
import styles from "./Filter.module.scss";
import { TbFilterEdit } from "react-icons/tb";
import MobileFilter from "../../components/MobileFilter";
import Overlay from "../../components/Overlay";
import clsx from "clsx";
const Filter = () => {
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const handleButtonClick = () => {
    setOpenMobileFilter(true);
  };

  const handleCloseMobileFilter = () => {
    setOpenMobileFilter(false);
  };
  return (
    <div
      className={clsx(
        " flex  bg-white  z-20  w-full  gap-4 py-2 px-3 border border-l-0 border-r-0 items-center"
      )}
    >
      {/* <div className="hidden lg:block"> */}
      <LocationFilter />
      {/* </div> */}
      {/* <div className="flex items-center"> */}
      <TypeFilter className="hidden md:block" />
      <PriceFilterContainer className="hidden md:block" />
      <BedAndBathFilterContainer className="hidden lg:block" />
      <PropertyTypeFilter className="hidden lg:block" />
      <MoreFilters className="hidden md:block" />
      {/* </div> */}

      <TbFilterEdit
        onClick={handleButtonClick}
        size={35}
        color="#2c3335"
        className="flex md:hidden ml-auto"
      />
      <Overlay show={openMobileFilter} onClose={handleCloseMobileFilter}>
        <MobileFilter />
      </Overlay>
    </div>
  );
};

export default Filter;
