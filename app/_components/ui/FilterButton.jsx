import React from "react";

const FilterButton = ({ children, isActive, ...props }) => {
  const baseStyles =
    "rounded-full px-[10.5px] lg:px-[30px] py-[6.5px] lg:py-[15px] border cursor-pointer hover:opacity-80 transition-all duration-300";
  const activeStyles = "bg-[#2C2C2C] text-white";
  const inactiveStyles = "border-[#BABABA] text-[#2D2D2D]";

  return (
    <button
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FilterButton;
