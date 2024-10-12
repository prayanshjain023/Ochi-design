import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Circle from "./Components/Circle";
import Featured from "./Components/Featured";
import Reviews from "./Components/Reviews";
import Cards from "./Components/Cards";
import DownEyes from "./Components/DownEyes";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Circle></Circle>
      <Featured></Featured>
      <Reviews></Reviews>
      <Cards></Cards>
      <DownEyes></DownEyes>
      <Footer></Footer>
    </div>
  );
};

export default App;
