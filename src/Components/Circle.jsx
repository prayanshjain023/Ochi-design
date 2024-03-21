import React, { useEffect, useState } from "react";

const Circle = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousePointX = e.clientX;
      let mousePointY = e.clientY;

      let deltaX = mousePointX - window.innerWidth / 2;
      let deltaY = mousePointY - window.innerHeight / 2;

      let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(180 - angle);
    });
  });

  return (
    <>
      <div className="w-full h-screen overflow-hidden eyes max-h-fit">
        <div
          data-scroll
          data-scroll-speed="-.6"
          className={`relative w-full h-full bg-center bg-cover bg-[url("../../Media/Top-Viewbbcbv-1-scaled.jpg")]`}
        >
          <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] ">
            <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center  justify-center">
              <div className="relative w-3/5 rounded-full h-3/5 bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="w-full h-5  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
                >
                  <div className="w-5 h-5 rounded-full bg-zinc-100 "></div>
                </div>
              </div>
            </div>

            <div className="w-[15vw] h-[15vw]  bg-zinc-100 rounded-full flex items-center justify-center ">
              <div className="relative w-3/5 rounded-full h-3/5 bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="w-full h-5  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
                >
                  <div className="w-5 h-5 rounded-full bg-zinc-100 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
