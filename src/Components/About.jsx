<<<<<<< HEAD
'use client'

import React, { useState } from "react"
import { ArrowUpRight, Circle } from "lucide-react"

export default function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full bg-[#CDEA68] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl px-4 sm:px-8 md:px-14">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Neue_Montreal'] leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-8 sm:mb-12 md:mb-16">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to{" "}
        <span className="underline decoration-2 underline-offset-4 sm:underline-offset-8">raise funds</span>,{" "}
        <span className={`${isHovered ? "no-underline" : ""} underline decoration-2 underline-offset-4 sm:underline-offset-8`}>sell prod­ucts</span>,{" "}
        <span className="underline decoration-2 underline-offset-4 sm:underline-offset-8">ex­plain com­plex ideas</span>, and{" "}
        <span className="underline decoration-2 underline-offset-4 sm:underline-offset-8">hire great peo­ple</span>.
      </h1>

      <div className="w-full h-[1px] bg-black mb-6 sm:mb-8 md:mb-10"></div>

      <div className="flex flex-col mb-12 md:flex-row sm:mb-16 md:mb-20">
        <div className="w-full mb-6 md:w-1/2 md:mb-0">
          <h3 className="mb-4 text-lg font-semibold sm:text-xl">What you can expect:</h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-sm sm:text-base sm:mb-6">
            We create tailored presentations to help you persuade your colleagues, clients, or investors. 
            Whether it's live or digital, delivered for one or a hundred people.
          </p>
          <p className="text-sm sm:text-base">
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, 
            convincing, and captivating.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-12 sm:mb-16 md:mb-20">
        {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
          <a key={index} href="#" className="text-sm underline transition-colors sm:text-base hover:text-gray-700">
            {item}
          </a>
        ))}
      </div>

      <div className="w-full h-[1px] bg-black mb-6 sm:mb-8 md:mb-10"></div>

      <div className="flex flex-col items-start md:flex-row md:items-center">
        <div className="w-full mb-6 md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Our approach:</h2>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              uppercase py-2 px-4 sm:py-3 sm:px-6 relative text-white text-sm sm:text-base 
              flex items-center gap-2 rounded-full transition-colors duration-300 ease-in-out
              ${isHovered ? "bg-black" : "bg-gray-800"}
            `}
          >
            read more
            <span className={`transition-transform duration-300 ease-in-out ${isHovered ? "scale-0" : "scale-100"}`}>
              <Circle size={16} fill="currentColor" />
            </span>
            <span className={`
              absolute right-2 p-2 flex items-center justify-center text-black bg-white rounded-full
              transition-all duration-300 ease-in-out
              ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}>
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
        <div className={`
          w-full md:w-1/2 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out
          ${isHovered ? "scale-95" : "scale-100"}
        `}>
          <img
            src="/placeholder.svg?height=939&width=1326"
            alt="Our approach"
            className={`
              w-full h-auto rounded-lg object-cover transition-transform duration-500 ease-in-out
              ${isHovered ? "scale-110" : "scale-100"}
            `}
          />
        </div>
      </div>
    </div>
  )
}
=======
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import image1 from "../../Media/Homepage-Photo-1326x939.jpg";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = () => {
    setIsHovered(true); // Set isHovered to true when mouseover
  };

  // Function to handle mouseout
  const handleMouseOut = () => {
    setIsHovered(false); // Set isHovered to false when mouseout
  };
  return (
    <>
      <div className="w-full bg-[#CDEA68] pt-20 pb-16 rounded-t-3xl px-14">
        <h1 className='w-11/12 text-6xl font-["Neue_Montreal"] leading-12'>
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to{" "}
          <span className="underline decoration-2 underline-offset-8">
            raise funds
          </span>
          ,{" "}
          <span
            className={`${
              isHovered ? "no-underline" : ""
            } underline decoration-2 underline-offset-8`}
          >
            sell prod­ucts
          </span>
          ,{" "}
          <span className="underline decoration-2 underline-offset-8">
            ex­plain com­plex ideas
          </span>
          , and{" "}
          <span className="underline decoration-2 underline-offset-8">
            hire great peo­ple
          </span>
          .
        </h1>
        <div className="w-full h-[1px] bg-black mt-14"></div>
        <div className="flex mt-5">
          <div className="w-2/4 text-[18px]">
            <h3>What you can expect:</h3>
          </div>
          <div className="w-2/4">
            <h3 className=" text-[16px] w-5/12">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </h3>
            <h3 className=" text-[16px] w-5/12 mt-7">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h3>
          </div>
          <div className="mt-16">
            <ul className="text-[17px] underline">
              <li>Instagram</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black mt-28"></div>

        <div className="flex mt-4">
          <div className="w-2/4 text-[50px]">
            <h1>Our approach:</h1>
            <h2
              onMouseOver={handleMouse}
              onMouseOut={handleMouseOut}
              className={`${
                isHovered
                  ? "bg-black duration-300 ease-in-out cursor-pointer "
                  : "bg-slate-900"
              } uppercase py-[20px] px-[30px] relative w-48 text-white text-[16px] flex gap-9 rounded-full mt-4 items-center`}
            >
              read more{" "}
              <div
                className={`${
                  isHovered
                    ? "scale-0 duration-300 ease-in-out"
                    : "scale-100 ease-in-out"
                } absolute right-6`}
              >
                <GoDotFill />
              </div>
              <div
                className={` absolute right-2 p-4 flex items-center justify-center text-lg text-black transition bg-white rounded-full ${
                  isHovered
                    ? "scale-100 duration-200 ease-in-out"
                    : "scale-0 transition duration-200 ease-linear"
                }`}
              >
                <MdArrowOutward />
              </div>
            </h2>
          </div>
          <div
            className={`w-2/4 rounded-lg overflow-hidden ${
              isHovered
                ? "scale-95 transition duration-500 ease-linear"
                : " scale-100 transition duration-500 ease-linear"
            }`}
          >
            <img
              src={image1}
              className={`rounded-lg ${
                isHovered
                  ? "scale-110 transition duration-500 ease-linear"
                  : "transition duration-500 ease-linear"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
>>>>>>> origin/master
