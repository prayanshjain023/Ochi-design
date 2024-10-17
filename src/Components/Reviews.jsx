import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const Reviews = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouse1 = () => setIsHovered1(true);
  const handleMouseOut1 = () => setIsHovered1(false);
  const handleMouse2 = () => setIsHovered2(true);
  const handleMouseOut2 = () => setIsHovered2(false);

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-14 py-10 gap-y-[0.1px] text-white bg-black">
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-["Neue_Montreal"]'>Clients’ reviews</h1>
        <div className="w-full h-[0.5px] bg-zinc-500 mt-8 sm:mt-10 md:mt-12"> </div>

        <div className="flex flex-col w-full mt-6 md:flex-row">
          <div className="md:w-3/12 text-[15px] sm:text-[18px] mt-3 underline text-slate-200 font-thin">
            Kerman ventures
          </div>
          <div className="mt-3 md:w-3/12">
            <span className="text-[15px] sm:text-[18px] text-slate-200 font-thin">Services:</span>
            <div className="flex flex-col items-start justify-center gap-3 mt-6 uppercase sm:mt-8 md:mt-14">
              <div
                onMouseOver={handleMouse1}
                onMouseOut={handleMouseOut1}
                className="flex items-center gap-[8px]"
              >
                <span
                  className={`text-[14px] sm:text-[15px] px-3 py-1 rounded-full border-[1px] font-thin cursor-pointer ${
                    isHovered1
                      ? "bg-white text-black"
                      : "text-slate-200 duration-300 ease-in-out"
                  }`}
                >
                  Investor Deck
                </span>
                <span
                  className={`w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] text-lg rounded-full border-[2px] text-black border-zinc-100 flex items-center justify-center ${
                    isHovered1
                      ? "scale-100 duration-300 ease-in-out bg-white"
                      : "scale-0"
                  }`}
                >
                  <MdArrowOutward />
                </span>
              </div>

              <div
                onMouseOver={handleMouse2}
                onMouseOut={handleMouseOut2}
                className="flex items-center gap-[8px]"
              >
                <span
                  className={`text-[14px] sm:text-[15px] px-3 py-1 rounded-full border-[1px] font-thin cursor-pointer ${
                    isHovered2
                      ? "bg-white text-black"
                      : "text-slate-200 duration-300 ease-in-out"
                  }`}
                >
                  Sales deck
                </span>
                <span
                  className={`w-[28px] sm:w-[32px] h-[28px] sm:h-[32px] text-lg rounded-full border-[2px] text-black border-zinc-100 flex items-center justify-center ${
                    isHovered2
                      ? "scale-100 duration-300 ease-in-out bg-white"
                      : "scale-0"
                  }`}
                >
                  <MdArrowOutward />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 md:w-2/6">
            <span className="text-[15px] sm:text-[18px] text-slate-200 font-thin">
              William Barnes
            </span>
            <img
              className="w-16 h-16 mt-6 rounded-lg sm:w-20 sm:h-20 md:w-24 md:h-24 sm:mt-10 md:mt-14"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
            <div className="mt-6 sm:mt-8 md:mt-10">
              <span className="text-[14px] sm:text-[16px] md:text-[17px] text-slate-200 font-thin">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </span>
            </div>
          </div>
        </div>

        <div className="pb-10 mt-10 sm:pb-12 md:pb-14 sm:mt-12 md:mt-14">
          {[
            { name: "Planetly", person: "Nina Walloch" },
            { name: "Hypercare Systems", person: "Brendan Goss" },
            { name: "Premium Blend", person: "Ellen Kim" },
            { name: "Hypercare Systems", person: "Brendan Goss" },
            { name: "Officevibe", person: "Raff Labrie" },
            { name: "Orderlion", person: "Stefan Strohmer" },
            { name: "Premium Blend", person: "Ellen Kim" },
            { name: "Black Book", person: "Jaci Smith" },
            { name: "Trawa Energy", person: "David Budde" },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <div className="w-full h-[0.5px] bg-zinc-500"> </div>
              <div className="flex flex-col justify-between py-2 font-thin md:flex-row sm:py-4">
                <div className="w-full text-center md:w-1/3 md:text-left">
                  <span className="underline underline-offset-2">{item.name}</span>
                </div>
                <div className="flex justify-center w-full md:w-1/3">{item.person}</div>
                <div className="flex justify-center w-full md:w-1/3 md:justify-end">
                  <span className="underline cursor-pointer underline-offset-4">READ</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
