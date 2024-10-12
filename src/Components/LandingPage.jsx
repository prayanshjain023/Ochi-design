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
