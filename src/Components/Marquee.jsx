import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed=".1"
        className=" w-full py-28 bg-[#004D43] rounded-t-3xl"
      >
        <div className="flex overflow-hidden text-white border-t-2 border-b-2 border-zinc-400 whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 14 }}
            className='mt-[-45px] mb-[-5px] text-[25vw] uppercase leading-none font-["Founders Grotesk"] font-bold'
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 14 }}
            className='mb-[-5px] mt-[-45px] text-[25vw] uppercase leading-none font-["Founders Grotesk"] font-bold '
          >
            &nbsp;&nbsp;We are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
