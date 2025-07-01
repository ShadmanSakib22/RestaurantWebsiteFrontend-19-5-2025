import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Mark Henry",
    position: "Owner",
    image: "/member.png",
  },
  {
    id: 2,
    name: "Lucky Helen",
    position: "Chef",
    image: "/member.png",
  },
  {
    id: 3,
    name: "Moon Henry",
    position: "Founder",
    image: "/member.png",
  },
  {
    id: 4,
    name: "Tom Monrow",
    position: "Specialist",
    image: "/member.png",
  },
];

const Members = () => {
  return (
    <div className="bg-[url('/members-bg.png')] bg-cover bg-no-repeat bg-center h-[200px] md:h-[460px] text-center relative mt-[-4px] mb-[460px] sm:mb-[200px] ">
      <div className="hidden md:block max-w-[442px] mx-auto text-white pt-28">
        <h3 className="font-bold text-3xl lg:text-4xl 2xl:text-5xl mb-2">
          Team Members
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
      </div>
      {/* Images */}
      <div className="container max-w-[1300px] px-4 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 justify-center absolute bottom-[-400px] sm:bottom-[-110px] lg:bottom-[-160px] left-0 right-0">
        {teamMembers.map((member) => (
          <div key={member.id}>
            <div className="relative max-w-[160px] md:max-w-[312px] mx-auto aspect-square">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-xs"
              />
            </div>
            <h6 className="font-bold text-[#4F4F4F] text-xs md:text-lg lg:text-xl mt-4 mb-1">
              {member.name}
            </h6>
            <p className="text-[#828282] text-[10px] md:text-sm lg:text-base mb-1">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
