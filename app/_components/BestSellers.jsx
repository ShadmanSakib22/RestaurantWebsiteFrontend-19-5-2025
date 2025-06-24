"use client";
import React, { useState } from "react";
import Image from "next/image";
import FilterButton from "./ui/FilterButton";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const BestSellers = ({ dishes }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className="container max-w-[1300px] mx-auto mt-[45px] md:mt-[70px] lg:mt-[100px] 3xl:mt-[150px] px-2 md:px-4">
      <article className="text-center">
        <h1 className="text-[30px] md:text-[32px] lg:text-[40px] 3xl:text-[55px] font-bold">
          Our best Seller Dishes
        </h1>
        <p className="text-[16px] md:text-[20px] lg:text-[22px] 3xl:text-[25px] mt-4 lg:mt-[18px] text-[#5C5C5C] w-[80%] max-w-[852px] mx-auto">
          Our fresh garden salad is a light and refreshing option.{" "}
          <span className="hidden md:inline">
            It features a mix of crisp lettuce, juicy tomatoe all tossed in your
            choice of dressing.
          </span>
        </p>
      </article>
      <div className="my-4 md:my-8 lg:my-16 flex flex-wrap gap-2 justify-between text-[8px] md:text-base lg:text-lg xl:text-xl 3xl:text-[28px]">
        <div className="flex gap-[5.5px] lg:gap-5 ">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              isActive={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </div>
        <div className="flex gap-[2.8px] lg:gap-5 ml-auto">
          <FilterButton isActive={true}>Add Food</FilterButton>
          <FilterButton isActive={true}>Add Category</FilterButton>
        </div>
      </div>
      {/* Best Sellers Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-between gap-x-4 lg:gap-x-6 gap-y-7 lg:gap-y-16 ">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-md md:rounded-lg shadow-md shadow-[#00000013]"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              width={417}
              height={297}
              className="rounded-t-md md:rounded-t-lg w-full"
            />
            <div className="px-2 md:px-5 pt-3 md:pt-7.5 pb-1 md:pb-12">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2.5 mb-2.5 md:mb-6.5">
                <h2 className="flex-1 text-xs md:text-base lg:text-xl xl:text-2xl 3xl:text-[31px] font-medium truncate">
                  {dish.name}
                </h2>
                <div className="ml-auto">
                  {/* <p className="hidden md:inline-block font-medium text-white bg-[#F03328] text-xl py-2.5 px-6 rounded-4xl">
                    {dish.category}
                  </p> */}

                  <button className="text-nowrap font-medium text-white bg-[#F03328] text-xl py-1 px-2.5 rounded-2xl md:py-2.5 md:px-6 md:rounded-4xl">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-lg xl:text-[24px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.round(dish.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      &#x2605; {/* Star character */}
                    </span>
                  ))}
                </span>
                <span className="text-sm md:text-3xl font-bold">
                  ${dish.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
