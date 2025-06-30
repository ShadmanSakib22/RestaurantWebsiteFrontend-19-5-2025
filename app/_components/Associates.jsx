"use client";
import Image from "next/image";

const Associates = () => {
  const partners = [
    { id: 1, name: "Restaurant", logo: "/associates/Restaurant.png" },
    { id: 2, name: "SweetBakery", logo: "/associates/SweetBakery.png" },
    { id: 3, name: "ForkSpoon", logo: "/associates/ForkSpoon.png" },
    { id: 4, name: "WolfCoffee", logo: "/associates/WolfCoffee.png" },
    { id: 5, name: "Bistro", logo: "/associates/Bistro.png" },
    { id: 6, name: "Bakery", logo: "/associates/Bakery.png" },
  ];

  // Duplicate partners for a seamless infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  const estimatedLogoMaxWidth = 250;
  const smallScreenMargin = 32; // Total horizontal margin for mx-4 (16px left + 16px right)
  const largeScreenMargin = 48; // Total horizontal margin for md:mx-6 (24px left + 24px right)

  return (
    <div className="container max-w-[1300px] px-4 mx-auto flex flex-col items-center mb-20 md:mb-28 lg:mb-32">
      <p className="text-[#A52A2A] text-lg mb-2">Partners & Clients</p>
      <h3 className="font-bold text-3xl lg:text-4xl 2xl:text-5xl text-center mb-9 md:mb-12 lg:mb-14">
        We work with the best people
      </h3>

      {/* Carousel container */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-4 md:mx-6"
            >
              <div className="relative h-[68px] md:h-[128px] flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={estimatedLogoMaxWidth}
                  height={128}
                  className="w-auto h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          width: calc(
            (${estimatedLogoMaxWidth}px + ${smallScreenMargin}px) *
              ${partners.length} * 2
          );
          white-space: nowrap;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }

        @media (min-width: 768px) {
          .animate-infinite-scroll {
            animation-duration: 20s;
            width: calc(
              (${estimatedLogoMaxWidth}px + ${largeScreenMargin}px) *
                ${partners.length} * 2
            );
          }
        }
      `}</style>
    </div>
  );
};

export default Associates;
