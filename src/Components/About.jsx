'use client'

import React, { useState } from "react"
import { ArrowUpRight, Circle } from "lucide-react"

export default function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full bg-[#CDEA68] pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl px-4 sm:px-8 md:px-14">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Neue_Montreal'] leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-8 sm:mb-12 md:mb-16">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to{" "}
        <span className="underline decoration-2 underline-offset-4 sm:underline-offset-8">raise funds</span>,{" "}
        <span className={`${isHovered ? "no-underline" : ""} underline decoration-2 underline-offset-4 sm:underline-offset-8`}>sell prod­ucts</span>,{" "}
        <span className="underline decoration-2 underline-offset-4 sm:underline-offset-8">ex­plain com­plex ideas</span>, and{" "}
        <span className="underline decoration-2 underline-offset-4 sm:underline-offset-8">hire great peo­ple</span>.
      </h1>

      <div className="w-full h-[1px] bg-black mb-6 sm:mb-8 md:mb-10"></div>

      <div className="flex flex-col mb-12 md:flex-row sm:mb-16 md:mb-20">
        <div className="w-full mb-6 md:w-1/2 md:mb-0">
          <h3 className="mb-4 text-lg font-semibold sm:text-xl">What you can expect:</h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-sm sm:text-base sm:mb-6">
            We create tailored presentations to help you persuade your colleagues, clients, or investors. 
            Whether it's live or digital, delivered for one or a hundred people.
          </p>
          <p className="text-sm sm:text-base">
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, 
            convincing, and captivating.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-12 sm:mb-16 md:mb-20">
        {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
          <a key={index} href="#" className="text-sm underline transition-colors sm:text-base hover:text-gray-700">
            {item}
          </a>
        ))}
      </div>

      <div className="w-full h-[1px] bg-black mb-6 sm:mb-8 md:mb-10"></div>

      <div className="flex flex-col items-start md:flex-row md:items-center">
        <div className="w-full mb-6 md:w-1/2 md:mb-0">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl">Our approach:</h2>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              uppercase py-2 px-4 sm:py-3 sm:px-6 relative text-white text-sm sm:text-base 
              flex items-center gap-2 rounded-full transition-colors duration-300 ease-in-out
              ${isHovered ? "bg-black" : "bg-gray-800"}
            `}
          >
            read more
            <span className={`transition-transform duration-300 ease-in-out ${isHovered ? "scale-0" : "scale-100"}`}>
              <Circle size={16} fill="currentColor" />
            </span>
            <span className={`
              absolute right-2 p-2 flex items-center justify-center text-black bg-white rounded-full
              transition-all duration-300 ease-in-out
              ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}>
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
        <div className={`
          w-full md:w-1/2 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out
          ${isHovered ? "scale-95" : "scale-100"}
        `}>
          <img
            src="/placeholder.svg?height=939&width=1326"
            alt="Our approach"
            className={`
              w-full h-auto rounded-lg object-cover transition-transform duration-500 ease-in-out
              ${isHovered ? "scale-110" : "scale-100"}
            `}
          />
        </div>
      </div>
    </div>
  )
}