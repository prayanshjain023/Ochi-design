<<<<<<< HEAD
'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Diamond from '../../Media/content-image01.jpg'

export default function LandingPage() {
  const [isBtnHovered, setIsBtnHovered] = useState(false)

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="flex flex-col justify-between w-full px-4 py-8 md:min-h-screen sm:px-8 lg:px-16 sm:py-12 lg:py-16 bg-zinc-900"
    >
      <div className="mt-16 textstructure sm:mt-24 lg:mt-36">
        <h1 className="text-white uppercase text-5xl sm:text-6xl lg:text-[6vw] xl:text-[7vw] font-semibold leading-[0.9] tracking-tighter font-['Founders Grotesk']">
          We Shape
        </h1>
        <div className="flex items-center my-2 sm:my-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="mr-2 overflow-hidden"
          >
            <img
              src={Diamond}
              alt="Diamond"
              className="h-[40px] sm:h-[60px] lg:h-[75px] w-auto object-cover rounded-md"
            />
          </motion.div>
          <h1 className="text-white uppercase text-5xl sm:text-6xl lg:text-[6vw] xl:text-[7vw] font-semibold leading-[0.9] tracking-tighter font-['Founders Grotesk']">
            eye-Visionary
          </h1>
        </div>
        <h1 className="text-white uppercase text-5xl sm:text-6xl lg:text-[6vw] xl:text-[7vw] font-semibold leading-[0.9] tracking-tighter font-['Founders Grotesk']">
          Presentations
        </h1>
      </div>

      <div className="pt-6 mt-16 border-t-2 sm:mt-24 lg:mt-32 border-zinc-700 sm:pt-8">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:gap-8 sm:mb-0">
            {[
              "For public and private companies",
              "From the first pitch to IPO",
            ].map((text, index) => (
              <p
                key={index}
                className="text-sm font-light leading-tight tracking-tight text-white sm:text-base lg:text-lg"
              >
                {text}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`px-4 py-2 text-sm sm:text-base uppercase font-light rounded-full transition-colors duration-300 border-2 ${
                isBtnHovered
                  ? "bg-zinc-100 text-zinc-900 border-white"
                  : "bg-transparent text-white border-zinc-500"
              }`}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
            >
              Start the project
            </button>
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 border-2 ${
                isBtnHovered
                  ? "bg-zinc-100 text-zinc-900 border-white"
                  : "bg-transparent text-white border-zinc-500"
              }`}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              aria-label="Start project"
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Diamond from "../../Media/content-image01.jpg";
import { easeInOut, motion } from "framer-motion";

const LandingPage = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const handleMouseBtn = () => setIsBtnHovered(true);
  const handleMouseOutBtn = () => setIsBtnHovered(false);
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.6"
        className="w-full h-screen px-16 pt-1 bg-zinc-900"
      >
        <div className="mt-36 textstructure">
          <h1 className="text-white uppercase text-[7vw] font-semibold leading-[6vw] tracking-tighter font-['Founders Grotesk']">
            We Shape
          </h1>
          <div className="flex">
            <motion.img
              src={Diamond}
              initial={{ width: 0 }}
              animate={{ width: "130px" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="h-[75px] mt-4 w-[130px] rounded-md mr-2"
            />
            <h1 className="text-white uppercase text-[7vw] font-semibold leading-[6vw] tracking-tighter font-['Founders Grotesk']">
              eye-Visionary
            </h1>
          </div>
          <h1 className="text-white uppercase text-[7vw] font-semibold leading-[6vw] tracking-tighter font-['Founders Grotesk']">
            Presentations
          </h1>
        </div>

        <div className="flex justify-between mt-32 border-t-2 border-zinc-700">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((index, item) => (
            <p className="mt-4 text-[18px] font-light leading-none tracking-tight text-white text-md">
              {index}
            </p>
          ))}
          <div
            className="flex items-center gap-5 start "
            onMouseOver={handleMouseBtn}
            onMouseOut={handleMouseOutBtn}
          >
            <div
              className={`px-4 py-2 mt-4 text-white uppercase border-[2px] font-lighter border-zinc-500 rounded-full ${
                isBtnHovered
                  ? " cursor-pointer bg-zinc-100 text-zinc-900 border-white duration-300 ease-in-out`"
                  : "bg-transparent"
              }`}
            >
              Start the project
            </div>
            <div
              className={`w-10 text-lg h-10 rounded-full mt-4 border-[2px] ml-[-13px] flex items-center justify-center text-white  border-zinc-500   ${
                isBtnHovered
                  ? "bg-zinc-100 cursor-pointer text-zinc-900 border-white duration-300 ease-in-out`"
                  : "bg-transparent"
              }`}
            >
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
>>>>>>> origin/master
