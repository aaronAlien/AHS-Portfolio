import React from "react";
import MoreAboutMe from "../../Components/About/MoreAboutMe";
import MarqueeAboutMe from "../../Components/Marquee/MarqueeAboutMe";
import portrait from "../../assets/AHShakespearePFP.png";
import ContactModal from "../../Components/Modal/ContactModal";
import { FaAnglesUp } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <>
      <div className='relative left-0 mb-6 sm:mb-14'>
        <MarqueeAboutMe />
      </div>
      <div
        id='about'
        className='max-w-screen-xl flex flex-col m-6 sm:mx-5 px-4 py-8 bg-gradient-to-tr from-zinc-300 via-zinc-500 to-zinc-600 rounded-xl shadow-custom border border-violet-950/50'
      >
        <MoreAboutMe />
      </div>
      <div className='flex items-center justify-center sm:mt-10 w-min text-center animate-pulse hover:animate-none text-zinc-200/80 text-4xl'>
        <a href='#landing'>
          <FaAnglesUp />
          <p className='text-xs'>top</p>
        </a>
      </div>
    </>
  );
};

export default AboutMe;
/*
      <div className='flex items-center justify-center mt-10 animate-pulse text-zinc-200/80 text-2xl sm:text-7xl'>

 */
