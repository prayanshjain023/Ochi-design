import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const Featured = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const handleMouse1 = () => setIsHovered1(true);
  const handleMouseOut1 = () => setIsHovered1(false);
  const handleMouse2 = () => setIsHovered2(true);
  const handleMouseOut2 = () => setIsHovered2(false);
  const handleMouse3 = () => setIsHovered3(true);
  const handleMouseOut3 = () => setIsHovered3(false);
  const handleMouse4 = () => setIsHovered4(true);
  const handleMouseOut4 = () => setIsHovered4(false);
  const handleMouseBtn = () => setIsBtnHovered(true);
  const handleMouseOutBtn = () => setIsBtnHovered(false);

  return (
    <div className="w-full px-4 py-10 text-3xl text-white bg-black md:px-10 lg:px-16 md:py-16 lg:py-20 md:text-5xl lg:text-6xl">
      <div className='font-["Neue Montreal"]'>
        <h1>Featured Projects</h1>
      </div>
      <div className="w-full h-[1px] bg-zinc-500 mt-6 md:mt-10 lg:mt-12"> </div>

      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:gap-10">
        {/* First Project */}
        <div className="relative">
          <h6 className="text-[15px] md:text-[17px] mt-8 text-white uppercase flex gap-1">
            <GoDotFill /> FYDE
          </h6>
          <div className="absolute left-full -translate-x-1/2 top-[220px] lg:top-[330px] z-[9] flex overflow-hidden">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovered1 ? { y: "0" } : { y: "100%" }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: index * 0.04,
                }}
                className="text-[#CDEA68] font-semibold text-[60px] md:text-[80px] lg:text-[115px] font-['Founders Grotesk']"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div
            className={`w-full h-[250px] md:h-[300px] lg:h-[38.5vw] rounded-2xl mt-5 bg-[#CDCDCE] overflow-hidden ${
              isHovered1
                ? "scale-95 duration-700 ease-in-out"
                : "scale-100 transition duration-300 ease-linear"
            }`}
            onMouseOver={handleMouse1}
            onMouseOut={handleMouseOut1}
          >
            <img
              className={`w-full h-full bg-cover ${
                isHovered1
                  ? "scale-110 duration-500 ease-in-out"
                  : "scale-100 transition duration-300 ease-linear"
              }`}
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="FYDE"
            />
          </div>
          <div className="flex gap-2 mt-3 md:gap-3">
            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
              (item) => (
                <h5 className="text-[12px] md:text-[15px] py-1 px-2 md:py-2 md:px-3 border-[1px] rounded-full text-slate-300 hover:text-black hover:bg-white cursor-pointer hover:border-white duration-100 transition ease-in-out">
                  {item}
                </h5>
              )
            )}
          </div>
        </div>

        {/* Second Project */}
        <div className="relative">
          <h6 className="text-[15px] md:text-[17px] mt-8 text-white uppercase flex gap-1">
            <GoDotFill /> VISE
          </h6>
          <div className="absolute translate-x-1/2 top-[220px] lg:top-[330px] text-[#CDEA68] right-full z-[9] flex overflow-hidden">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovered2 ? { y: "0" } : { y: "100%" }}
                transition={{
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: index * 0.04,
                }}
                className="text-[#CDEA68] font-semibold text-[60px] md:text-[80px] lg:text-[115px] font-['Founders Grotesk']"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div
            className={`w-full h-[250px] md:h-[300px] lg:h-[38.5vw] rounded-2xl mt-5 bg-red-100 overflow-hidden ${
              isHovered2
                ? "scale-95 duration-700 ease-in-out"
                : "scale-100 transition duration-300 ease-linear"
            }`}
            onMouseOver={handleMouse2}
            onMouseOut={handleMouseOut2}
          >
            <img
              className={`w-full h-full bg-cover ${
                isHovered2
                  ? "scale-110 duration-500 ease-in-out"
                  : "scale-100 transition duration-300 ease-linear"
              }`}
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="VISE"
            />
          </div>
          <div className="flex gap-2 mt-3 md:gap-3">
            {["AGENCY", "COMPANY PRESENTATION"].map((item) => (
              <h5 className="text-[12px] md:text-[15px] py-1 px-2 md:py-2 md:px-3 border-[1px] rounded-full text-slate-300 hover:text-black hover:bg-white cursor-pointer hover:border-white duration-100 transition ease-in-out">
                {item}
              </h5>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-5 mt-10 lg:mt-24">
        <h3
          onMouseOver={handleMouseBtn}
          onMouseOut={handleMouseOutBtn}
          className="bg-zinc-100 relative rounded-full w-[60vw] md:w-[40vw] lg:w-[17vw] px-6 py-3 md:py-[1.4vw] text-[14px] md:text-[15px] font-semibold text-black flex gap-4 md:gap-6 items-center justify-center"
        >
          VIEW ALL CASE STUDIES
          <div
            className={`${
              isBtnHovered
                ? "scale-0 duration-700 ease-in-out"
                : "scale-100 ease-in-out"
            } absolute right-6`}
          >
            <GoDotFill />
          </div>
          <div
            className={`absolute right-2 p-3 md:p-4 flex items-center justify-center text-lg text-white transition bg-zinc-900 rounded-full ${
              isBtnHovered
                ? "scale-100 duration-300 ease-in-out"
                : "scale-0 transition duration-300 ease-linear"
            }`}
          >
            <MdArrowOutward />
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Featured;
