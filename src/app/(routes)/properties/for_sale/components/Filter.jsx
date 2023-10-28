import React from "react";
import TypeFilter from "../../components/TypeFilter";
import PriceRangeFilter from "../../components/PriceRangeFilter";
import BedroomFilter from "../../components/BedroomFilter";
import PropertyTypeFilter from "../../components/PropertyTypeFilter";
import MoreFilters from "../../components/MoreFilters";
import LocationFilter from "../../components/LocationFilter";
import styles from "./Filter.module.scss";
import { TbFilterEdit } from "react-icons/tb";
import clsx from "clsx";
const Filter = () => {
  return (
    <div
      className={clsx(
        " flex sticky bg-white  z-20 top-0  gap-4 py-2 px-3 border border-l-0 border-r-0 items-center"
      )}
    >
      {/* <div className="hidden lg:block"> */}
      <LocationFilter />
      {/* </div> */}
      {/* <div className="flex items-center"> */}
      <TypeFilter className="hidden md:block" />
      <PriceRangeFilter className="hidden md:block" />
      <BedroomFilter className="hidden lg:block" />
      <PropertyTypeFilter className="hidden lg:block" />
      <MoreFilters className="hidden md:block" />
      {/* </div> */}

      <TbFilterEdit
        size={40}
        color="#535c5f"
        className="flex md:hidden ml-auto"
      />
    </div>
  );
};

export default Filter;
