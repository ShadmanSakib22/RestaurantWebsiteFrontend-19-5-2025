import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="bg-red-600 min-h-screen">
        {/* Hero Navbar */}
        <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-self-end px-4 lg:px-8 3xl:px-[60px] pt-7 lg:pt-8 3xl:pt-[50px]">
          <Link
            href={"/"}
            className="font-bold text-white text-2xl 3xl:text-[32px] uppercase hidden lg:block"
          >
            Restaurant
          </Link>
          {/* Search Input */}
          <div className="bg-white flex items-center justify-end w-full lg:max-w-[821px] gap-5 lg:gap-7 3xl:gap-10 rounded-[20px] px-[13px] lg:px-[16px] 3xl:px-[27px] text-[#2D2D2D] font-normal lg:font-semibold text-base lg:text-lg 3xl:text-2xl py-[10px] lg:py-[12px] 3xl:py-[16x]">
            <Image
              src={"/majesticons_search-line.png"}
              alt=""
              width={42}
              height={42}
              className="h-[16px] lg:h-[28px] 3xl:h-[42px] w-auto"
            />
            <input
              type="text"
              placeholder="Search... "
              className="w-full bg-transparent outline-none placeholder:text-[#2D2D2D] placeholder:font-normal lg:placeholder:font-semibold placeholder:text-base lg:placeholder:text-lg 3xl:placeholder:text-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
