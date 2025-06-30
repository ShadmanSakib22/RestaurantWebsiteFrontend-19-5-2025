"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = ({ feedbacks }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="container max-w-[1300px] px-4 mx-auto flex flex-col-reverse md:flex-row justify-between items-end">
      {/* Animate in from Left with AOS */}
      <div
        className="w-full md:w-1/2 mt-14"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-5xl text-center md:text-left">
          Customer <span className="text-[#AD1519]">Feedback</span>
        </h1>
        <div className="max-w-[95%] md:max-w-[85%] mt-4 mx-auto md:mx-0">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            spaceBetween={30}
            slidesPerView={1}
            autoHeight={false}
            className="feedback-swiper"
          >
            {feedbacks.map((fb, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col justify-between gap-6 min-h-[180px] md:min-h-[300px]">
                  <p className="text-sm sm:text-xl xl:text-2xl leading-relaxed">
                    {fb.text}
                  </p>
                  <div className="flex items-center justify-between gap-2 pb-4 md:pb-0">
                    <div className="flex items-center gap-4.5">
                      <div className="relative size-[54px] md:size-[75px] flex-shrink-0">
                        <Image
                          src={fb.image}
                          alt={fb.name}
                          fill
                          sizes="75px"
                          className="rounded-full border border-[#2D2D2D] object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#A52A2A] text-lg md:text-2xl">
                          {fb.name}
                        </h3>
                        <p className="font-medium text-sm md:text-lg">
                          {fb.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Animate Up with AOS */}
      <div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Image
          src="/feedback/chef.png"
          alt="Chef Feedback"
          width={590}
          height={590}
        />
      </div>
    </div>
  );
};

export default Feedback;
