"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Associates = () => {
  const partners = [
    { id: 1, name: "Restaurant", logo: "/associates/Restaurant.png" },
    { id: 2, name: "SweetBakery", logo: "/associates/SweetBakery.png" },
    { id: 3, name: "ForkSpoon", logo: "/associates/ForkSpoon.png" },
    { id: 4, name: "WolfCoffee", logo: "/associates/WolfCoffee.png" },
    { id: 5, name: "Bistro", logo: "/associates/Bistro.png" },
    { id: 6, name: "Bakery", logo: "/associates/Bakery.png" },
  ];

  return (
    <div className="container max-w-[1300px] px-4 mx-auto flex flex-col items-center mb-20 md:mb-28 lg:mb-32">
      <p className="text-[#A52A2A] text-lg mb-2">Partners & Clients</p>
      <h3 className="font-bold text-3xl lg:text-4xl 2xl:text-5xl text-center mb-9 md:mb-12 lg:mb-14">
        We work with the best people
      </h3>

      {/* Swiper Carousel */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 48,
            },
          }}
          className="associates-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center h-[68px] md:h-[128px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={240}
                  height={128}
                  className="w-auto h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .associates-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default Associates;
