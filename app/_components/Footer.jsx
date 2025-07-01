import Image from "next/image";
import Link from "next/link";
import {
  LuSend,
  LuMapPin,
  LuPhone,
  LuMailOpen,
  LuClock3,
} from "react-icons/lu";

const instaImages = [
  { id: 1, src: "/insta/1.png" },
  { id: 2, src: "/insta/2.png" },
  { id: 3, src: "/insta/3.png" },
  { id: 4, src: "/insta/4.png" },
  { id: 5, src: "/insta/5.png" },
  { id: 6, src: "/insta/6.png" },
];

const footer = () => {
  return (
    <div>
      <div className="bg-[#880808]">
        <div className="container max-w-[1300px] mx-auto px-4 pt-5 pb-4 md:pt-10 md:pb-8 lg:pt-20 lg:pb-16 xl:pt-28 xl:pb-24 text-white text-lg flex flex-wrap justify-between gap-x-4 gap-y-10">
          {/* General Info */}
          <div className="w-full md:max-w-[275px]">
            <h5 className="uppercase font-bold text-2xl md:text-3xl mb-5">
              Restaurant
            </h5>
            <p>Subscribe our newsletter and get discount 25%off</p>
            {/* Subscribe Form */}
            <div className="flex items-center mt-6">
              <input
                name="subscribeEmail"
                type="text"
                placeholder="Enter your email"
                className="bg-white text-black text-sm h-[40px] px-4 py-2 rounded-l-md max-w-[80%] md:w-[200px] focus:outline-none"
              />
              <button className="bg-[#A52A2A] h-[40px] w-[43px] flex justify-center items-center rounded-r-md">
                <LuSend className="text-white text-xl" />
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-4 text-2xl">
              <a href="">
                <Image
                  src="/social/pinterest.png"
                  alt="pinterest"
                  width={24}
                  height={24}
                />
              </a>
              <a href="">
                <Image
                  src="/social/twitter.png"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="">
                <Image
                  src="/social/fb.png"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="">
                <Image
                  src="/social/instagram.png"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="">
                <Image
                  src="/social/youtube.png"
                  alt="youtube"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h6 className="font-bold text-xl mb-6">Contact Us</h6>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <LuMapPin /> 3517 W. Gray St. Utica, Pennsylvania 57867
              </li>
              <li className="flex items-center gap-2">
                <LuPhone /> (480) 555-0103
              </li>
              <li className="flex items-center gap-2">
                <LuMailOpen /> M.Alyaqout@4house.Co
              </li>
              <li className="flex items-center gap-2">
                <LuClock3 /> Sun - Sat / 10:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
          {/* Links */}
          <div className="min-w-[180px]">
            <h6 className="font-bold text-xl mb-6">Links</h6>
            <ul className="flex flex-row lg:flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white/40 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white/40 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-white/40 transition-colors duration-300"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white/40 transition-colors duration-300"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white/40 transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="hidden xl:block">
            <h6 className="font-bold text-xl mb-6">Gallery</h6>
            <div className="grid grid-cols-3 gap-1.5">
              {instaImages.map((image) => (
                <div
                  key={image.id}
                  className="w-[108px] h-[108px] overflow-hidden rounded-[2px]"
                >
                  <Image
                    src={image.src}
                    alt={image.id}
                    width={108}
                    height={108}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#A52A2A]">
        <div className="container max-w-[1300px] mx-auto py-5 px-4 text-white flex items-center justify-center md:justify-between gap-4">
          <a href="" className="block md:flex-1 whitespace-nowrap">
            Copyright © 2025. All rights reserved
          </a>
          <div className="hidden md:flex justify-between gap-5 lg:gap-8 xl:gap-10 whitespace-nowrap">
            <a href="">Privacy Policy</a>
            <a href="">Term of Use</a>
            <a href="">Partner</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
