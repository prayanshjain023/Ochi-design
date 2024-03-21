import React,{useState} from 'react'
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const DownEyes = () => {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouse1 = () => setIsHovered1(true);
  const handleMouseOut1 = () => setIsHovered1(false);
  const handleMouse2 = () => setIsHovered2(true);
  const handleMouseOut2 = () => setIsHovered2(false);

  return (
    <>
    <div className='w-full bg-[#CDEA68] flex flex-col pb-32'>
      <div className='flex flex-col items-center justify-center w-full text-[12vw] pt-40'>
        <h1 className='leading-[10vw] font-semibold j font-["Founders Grotesk"]'>READY</h1>
        <h1 className='leading-[10vw] font-semibold tracking-tighter font-["Founders Grotesk"]'>TO START</h1>
        <h1 className='leading-[10vw] font-semibold tracking-tighter font-["Founders Grotesk"]'>THE PROJECT?</h1>
      </div>

      <div className="flex items-center justify-center w-full gap-5 mt-12 "onMouseOver={handleMouse1} onMouseOut={handleMouseOut1}>
         <h3 className= " relative rounded-full px-7 py-4 text-[15px] font-semibold  bg-[#000000] text-white flex items-center gap-6">START THE PROJECT  <GoDotFill/>
         <div className={`absolute right-3 p-3 flex items-center justify-center text-lg text-black transition bg-white rounded-full ${isHovered1? "scale-100 duration-200 ease-in-out" : "scale-0 transition duration-200 ease-linear"}`}><MdArrowOutward /></div></h3>
      </div>

      <div className='flex items-center justify-center w-full gap-5 mt-4'>
        <span>OR</span>
      </div>

      <div className="flex items-center justify-center w-full gap-5 mt-4" onMouseOver={handleMouse2} onMouseOut={handleMouseOut2}>
         <h3 className= "relative rounded-full px-7 py-4 text-[15px] bg-transparent text-black border-[1px] border-black flex items-center gap-6">HELLO@OCHI.DESIGN  <GoDotFill/>
         <div className={`absolute right-[14px] p-3 flex items-center justify-center text-lg text-black transition bg-white rounded-full ${isHovered2? "scale-100 duration-200 ease-in-out" : "scale-0 transition duration-200 ease-linear"}`}><MdArrowOutward /></div></h3>
      </div>
    </div>
    </>
  )
}

export default DownEyes
