"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroItems = [
  {
    id: 0,
    smallImageSrc: "/plates/waffles.png",
    largeImageSrc: "/plates/waffles-l.png",
    desktopLargeImageSrc: "/hero-1.png",
    bgColor: "bg-[#880808]",
    lightBgColor: "bg-[#A52A2A]",
  },
  {
    id: 1,
    smallImageSrc: "/plates/sandwich.png",
    largeImageSrc: "/plates/sandwich-l.png",
    desktopLargeImageSrc: "/hero-2.png",
    bgColor: "bg-[#0A4669]",
    lightBgColor: "bg-[#0A3659]",
  },
  {
    id: 2,
    smallImageSrc: "/plates/fruits.png",
    largeImageSrc: "/plates/fruits-l.png",
    desktopLargeImageSrc: "/hero-3.png",
    bgColor: "bg-[#953553]",
    lightBgColor: "bg-[#A95C68]",
  },
  {
    id: 3,
    smallImageSrc: "/plates/roti.png",
    largeImageSrc: "/plates/roti-l.png",
    desktopLargeImageSrc: "/hero-4.png",
    bgColor: "bg-[#006666]",
    lightBgColor: "bg-[#003333]",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  // Update Swiper when activeIndex changes (e.g., clicking small icons)
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeIndex);
    }
  }, [activeIndex, swiper]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const currentItem = heroItems[activeIndex] || heroItems[0];

  // Framer Motion variants for the desktop image transition
  const imageVariants = {
    initial: { opacity: 0, rotate: 90 }, // Start rotated and faded
    animate: { opacity: 1, rotate: 0 }, // Rotate to original, fade in
    exit: { opacity: 0, rotate: -90 }, // Rotate further, fade out
  };
  const backgroundColorClass = currentItem.bgColor;
  const lightBackgroundColorClass = currentItem.lightBgColor;

  return (
    <>
      <div
        className={`${backgroundColorClass} relative rounded-b-xl min-h-screen overflow-hidden transition-colors duration-500 ease-in-out`}
      >
        {/* Circle top left */}
        <div
          className={`${lightBackgroundColorClass} absolute top-[-10vh] left-[-10vw] w-[70vw] md:w-[55vw] lg:w-[50vw] 2xl:w-[40vw] h-auto aspect-square rounded-full transition-colors duration-500 ease-in-out`}
        />
        {/* Circle bottom right - desktop (change src based on active element) */}
        <div className="absolute bottom-[-18vw] right-[-18vw] w-0 lg:w-[40vw] h-auto ">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentItem.desktopLargeImageSrc} // Key changes to trigger animation
              src={currentItem.desktopLargeImageSrc}
              alt={currentItem.title}
              width={1080}
              height={1080}
              className="w-full h-auto"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
        <div
          className={`${lightBackgroundColorClass} absolute bottom-[-10vh] right-[-15vw] w-[60vw] lg:w-0 h-auto aspect-square rounded-full transition-colors duration-500 ease-in-out`}
        />

        {/*Hero Container */}
        <div className="relative z-1 w-full max-w-[1920px] mx-auto px-4 md:px-8 3xl:px-[60px] pt-7 md:pt-8 3xl:pt-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <Link
              href={"/"}
              className="font-bold text-white text-2xl 3xl:text-[32px] uppercase hidden lg:block"
            >
              Restaurant
            </Link>
            {/* Search Input */}
            <div className="bg-white flex items-center justify-self-end w-full lg:w-[80%] gap-5 lg:gap-7 3xl:gap-10 rounded-[20px] px-[13px] lg:px-[16px] 3xl:px-[27px] text-[#2D2D2D] font-normal lg:font-semibold text-base lg:text-lg 3xl:text-2xl py-[10px] lg:py-[12px] 3xl:py-[16x]">
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

          <div className="mt-[14px] md:mt-[32px] lg:mt-[92px] 3xl:mt-[132px] px-8 flex flex-col md:flex-row">
            <div className="w-full lg:w-[50%]">
              <article className="text-white">
                <h1 className="uppercase text-[45px] md:text-[64px] lg:text-[82px] 3xl:text-[96px]">
                  Breakfast
                </h1>
                <p className="text-base md:text-lg 3xl:text-xl font-normal md:font-semibold">
                  Breakfast, often referred to as the ‘most important meal of
                  the day’, provides essential nutrients to kick start our day.
                  It includes a variety of foods, like fruits, cereals, dairy
                  products, and proteins, that contribute to a balanced diet.
                </p>
              </article>

              {/* Mobile Slider (change src based on active element) */}
              <div className="flex justify-center lg:hidden mt-[32px]">
                <Swiper
                  onSwiper={setSwiper}
                  initialSlide={activeIndex}
                  spaceBetween={0}
                  slidesPerView={1}
                  effect={"fade"} // Use fade effect for smooth transition
                  fadeEffect={{ crossFade: true }}
                  modules={[EffectFade, Pagination, Autoplay]}
                  // pagination={{ clickable: false }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="w-full h-auto"
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {heroItems.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Image
                        src={item.largeImageSrc}
                        alt={"Item"}
                        width={270}
                        height={270}
                        className="h-auto w-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex mt-[8vh] pb-[10vh] justify-center lg:justify-start items-center gap-2 md:gap-4 3xl:gap-6">
                {heroItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center w-4/5 mx-auto cursor-pointer group relative" // relative for indicator positioning
                    onClick={() => handleItemClick(index)}
                  >
                    <Image
                      src={item.smallImageSrc}
                      alt={"Item"}
                      width={80}
                      height={80}
                      className={`h-auto w-full transition-opacity duration-300 ${
                        activeIndex === index
                          ? ""
                          : "opacity-70 group-hover:opacity-95" // Dim non-active, slightly brighten on hover
                      }`}
                    />
                    {/* Active Indicator*/}
                    <div
                      className={`absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-full transition-all duration-500 ${
                        activeIndex === index ? "w-full" : "w-0"
                      }`}
                      style={{ maxWidth: "calc(100% - 16px)" }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
