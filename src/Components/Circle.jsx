"use client";

import React, { useEffect, useState } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mousePointX = e.clientX;
      const mousePointY = e.clientY;

      const deltaX = mousePointX - window.innerWidth / 2;
      const deltaY = mousePointY - window.innerHeight / 2;

      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(180 - angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden w-full h-screen overflow-hidden md:block">
      <div
        data-scroll
        data-scroll-speed="-.6"
        className="relative w-full h-full bg-center bg-cover bg-[url('/placeholder.svg?height=1080&width=1920')]"
        aria-label="Background image with moving eyes"
      >
        <div className="absolute flex flex-col gap-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:flex-row sm:gap-6 md:gap-8 lg:gap-10">
          {[0, 1].map((index) => (
            <div
              key={index}
              className="w-[30vw] h-[30vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center"
              aria-label={`Eye ${index + 1}`}
            >
              <div className="relative w-3/5 rounded-full h-3/5 bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute w-full h-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                >
                  <div
                    className="w-5 h-5 rounded-full bg-zinc-100"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
