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
