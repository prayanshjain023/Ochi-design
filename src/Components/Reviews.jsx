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
      <div className="w-full px-14 py-10 gap-y-[0.1px] text-white bg-black">
        <h1 className='text-6xl font-["Neue_Montreal"]'>Clients’ reviews</h1>
        <div className="w-full h-[0.5px] bg-zinc-500 mt-12"> </div>

        <div className="flex w-full ">
          <div className="w-3/12 text-[18px] mt-3 underline text-slate-200 font-thin">
            Kerman ventures
          </div>
          <div className="w-3/12 mt-3">
            <span className="text-[18px] text-slate-200 font-thin">
              Services:
            </span>
            <div className="flex flex-col items-start justify-center gap-3 uppercase mt-14 ">
              <div
                onMouseOver={handleMouse1}
                onMouseOut={handleMouseOut1}
                className="flex items-center gap-[8px]"
              >
                <span
                  className={`text-[15px] px-3 py-1  rounded-full border-[1px] font-thin cursor-pointer ${
                    isHovered1
                      ? "bg-white text-black"
                      : "text-slate-200 duration-300 ease-in-out"
                  }`}
                >
                  Investor Deck
                </span>
                <span
                  className={`w-[32px] h-[32px] text-lg rounded-full border-[2px] text-black  border-zinc-100  flex items-center justify-center ${
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
                  className={`text-[15px] px-3 py-1  rounded-full border-[1px] font-thin cursor-pointer ${
                    isHovered2
                      ? "bg-white text-black"
                      : "text-slate-200 duration-300 ease-in-out"
                  }`}
                >
                  Sales deck
                </span>
                <span
                  className={`w-[32px] h-[32px] text-lg rounded-full border-[2px] text-black  border-zinc-100  flex items-center justify-center ${
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
          <div className="w-2/6 mt-3">
            <span className="text-[18px] text-slate-200 font-thin">
              William Barnes
            </span>
            <img
              className="w-24 h-24 rounded-lg mt-14"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
              srcset=""
            />
            <div className="mt-10">
              <span className=" text-[17px] text-slate-200 font-thin">
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

        <div className="pb-14 mt-14">
          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">Planetly</span>
            </div>
            <div className="flex justify-center w-1/3 ">Nina Walloch</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">
                Hypercare Systems
              </span>
            </div>
            <div className="flex justify-center w-1/3 ">Brendan Goss</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">
                Premium Blend
              </span>
            </div>
            <div className="flex justify-center w-1/3 ">Ellen Kim</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">
                Hypercare Systems
              </span>
            </div>
            <div className="flex justify-center w-1/3 ">Brendan Goss</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">Officevibe</span>
            </div>
            <div className="flex justify-center w-1/3 ">Raff Labrie</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">Orderlion</span>
            </div>
            <div className="flex justify-center w-1/3 ">Stefan Strohmer</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">
                Premium Blend
              </span>
            </div>
            <div className="flex justify-center w-1/3 ">Ellen Kim</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">Black Book</span>
            </div>
            <div className="flex justify-center w-1/3 ">Jaci Smith</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-zinc-500"> </div>
          <div className="flex justify-between py-4 font-thin">
            <div className="w-1/3">
              <span className="underline underline-offset-2">Trawa Energy</span>
            </div>
            <div className="flex justify-center w-1/3 ">David Budde</div>
            <div className="flex justify-end w-1/3 ">
              <span className="underline underline-offset-4">READ</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
