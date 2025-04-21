import React from "react";
import MoreAboutMe from "../../Components/About/MoreAboutMe";
import MarqueeAboutMe from "../../Components/Marquee/MarqueeAboutMe";
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
      <div className='flex items-center justify-center mb-10 sm:mb-0 sm:mt-10 md:mb-5 w-2/3 mx-auto text-center animate-pulse hover:animate-none text-zinc-200/80 text-4xl'>
        <a href='#landing' className='text-4xl'>
          <FaAnglesUp />
        </a>
      </div>
    </>
  );
};

export default AboutMe;

