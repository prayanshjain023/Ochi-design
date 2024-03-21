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
              ©️2019-2022
            </span>
          </div>
        </div>

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
