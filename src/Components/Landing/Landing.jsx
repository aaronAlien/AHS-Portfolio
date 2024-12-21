import React, { useRef } from "react";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Bio from "../About/Bio";
import MyCV from "../CV/MyCV";

const Landing = () => {

  return (
    <>
      <div className='max-w-screen-xl flex flex-col md:mx-5 px-4 pt-8 bg-gradient-to-tr from-zinc-600 via-zinc-800 to-zinc-900 rounded-xl shadow-custom border border-violet-300/30'>
        <div className='grid grid-cols-1 md:grid-cols-5 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-4-[200px] md:gap-4 sm:gap-2 items-start pb-8'>
          
          <div className='md:col-span-5 sm:col-span-2 col-span-1 mx-auto row-span-1'>
            <Header />
          </div>

          <div className='cols-span-1 row-start-2 md:col-start-2 sm:col-start-1 row-span-1 md:col-span-3 w-full'>
            <Bio />
            <div className="flex items-center md:mt-4 sm:mt-2 w-min">
              <MyCV />
            </div>

          </div>
          <div className='cols-span-1 row-start-3 md:col-span-2 sm:col-start-2 row-span-1 md:col-start-4 md:row-start-2 mx-auto w-full'>
            <Skills />
          </div>

        </div>
      </div>
    </>
  );
};

export default Landing;
