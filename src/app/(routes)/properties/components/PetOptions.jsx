import React from "react";
const petOptions = ["Allows large dogs", "Allows small dogs", "Allows cats"];

const PetOptions = () => {
  return (
    <div className="flex flex-col w-full">
      <span className="select-none text-sm font-medium">Allows Pets</span>
      <div className="">
        {petOptions.map((option, idx) => (
          <div key={idx} className="flex gap-4 my-4 px-6 items-center">
            <input
              //   onChange={handlePetOptionsChange}
              //   checked={selectedPetOptions.includes(option)}
              //   name={option}
              id="type"
              type="checkbox"
              className="w-6 h-6 !text-zee-teal-100  rounded-full  hover:ring-zee-teal-100  hover:ring-2 focus:ring-0 "
            />
            <label htmlFor="type" className="select-none whitespace-nowrap">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetOptions;
