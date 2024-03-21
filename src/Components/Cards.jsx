<<<<<<< HEAD
import React from "react"

export default function Cards() {
  return (
    <div className="w-full min-h-screen px-4 py-8 bg-black sm:px-8 md:px-14 sm:py-12 md:py-16">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="w-full mb-5 lg:w-1/2 lg:mb-0">
          <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[57vh] rounded-lg flex justify-center items-center bg-[#004D43] cursor-pointer overflow-hidden group">
            <img
              className="h-12 transition-transform duration-300 w-28 sm:h-16 sm:w-36 group-hover:scale-110"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="Ochi Design Logo"
            />
            <span className="absolute flex items-center border-[#CDEA68] text-[#CDEA68] px-2 py-1 text-xs sm:text-sm border-2 rounded-full bottom-4 left-4 sm:bottom-7 sm:left-8">
=======
import React, { useState } from "react";

const Cards = () => {
  return (
    <>
      <div className="flex w-full h-screen gap-5 py-4 bg-black px-14">
        <div className="w-1/2 cards">
          <div className=" relative w-full h-[57vh] rounded-lg  flex justify-center items-center bg-[#004D43] cursor-pointer">
            <img
              className={` h-16 w-36`}
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
              srcset=""
            />
            <span className="absolute flex items-center border-[#CDEA68] text-[#CDEA68] px-2 py-1 border-2 rounded-full bottom-7 left-8 ">
>>>>>>> origin/master
              ©️2019-2022
            </span>
          </div>
        </div>

<<<<<<< HEAD
        <div className="flex flex-col w-full gap-5 sm:flex-row lg:w-1/2">
          <div className="w-full mb-5 sm:w-1/2 sm:mb-0">
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[57vh] bg-slate-100 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden group">
              <h2 className='font-semibold font-["Neue Montreal"] text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110'>
                Clutch
              </h2>
              <span className="absolute flex items-center px-2 py-1 text-xs font-semibold uppercase duration-300 border-2 border-black rounded-full sm:text-sm bottom-4 left-4 sm:bottom-7 sm:left-8 hover:bg-zinc-900 hover:text-zinc-100">
                Rating 5.0 on Clutch
              </span>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[57vh] bg-slate-100 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden group">
              <h2 className='font-semibold font-["Neue Montreal"] text-4xl sm:text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110'>
                Starm
              </h2>
              <span className="absolute flex items-center px-2 py-1 text-xs font-semibold uppercase transition duration-300 border-2 border-black rounded-full sm:text-sm hover:bg-zinc-900 hover:text-zinc-100 bottom-4 left-4 sm:bottom-7 sm:left-8">
                Business Bootcamp Alumni
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
        <div className="flex w-1/2 gap-5 cards">
          <div className="w-1/2 relative h-[57vh] bg-slate-100 rounded-lg flex justify-center items-center  cursor-pointer">
            <h1 className='font-semibold font-["Neue Montreal"] text-6xl'>
              Cultch
            </h1>
            <span className="absolute flex items-center px-3 py-1 font-semibold uppercase duration-300 border-2 border-black rounded-full bottom-7 left-8 hover:bg-zinc-900 hover:text-zinc-100 ">
              Rateing 5.0 on Cultch
            </span>
          </div>

          <div className="w-1/2 h-[57vh] bg-slate-100 rounded-lg relative flex justify-center items-center  cursor-pointer">
            <h1 className='font-semibold font-["Neue Montreal"] text-6xl'>
              Starm
            </h1>
            <span className="absolute flex items-center px-3 py-1 font-semibold uppercase transition duration-300 border-2 border-black rounded-full hover:bg-zinc-900 hover:text-zinc-100 bottom-7 left-8">
              BUSSINESS BOOTCAMP ALUMNI
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
>>>>>>> origin/master
