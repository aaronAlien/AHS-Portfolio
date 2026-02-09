import React from "react";
import pfp2 from "../../assets/AHShakespearePFP_2.jpg";
import ContactModal from "../Modal/ContactModal";

const MoreAboutMe = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-4'>

        {/* 
        <div className='col-span-1 row-span-3 m-auto'>
          <img
            src={pfp2}
            alt=''
            className='sm:w-[40%] lg:w-[60%] h-auto mx-auto rounded-full'
          />
        </div> */}

        <div className='md:col-span-2 md:row-span-3 px-8 py-4 sm:py-8 h-72 sm:h-auto overflow-y-auto w-full sm:w-2/3 m-auto font-anonymousPro bg-gradient-to-tr from-zinc-400 via-zinc-600 to-zinc-700 rounded-xl shadow-custom border border-violet-950/50'>
          <p className='mb-2 text-xs sm:text-base text-sky-500 cursor-pointer sm:cursor-default group-hover:hidden transition duration-500 ease-in-out'>
            Hey, I'm Aaron
          </p>
          <p className='mb-2 text-xs sm:text-base text-zinc-950 font-bold'>
            I’m a developer with a creative background and a lifelong interest in technology. 
            <br/>
            I enjoy learning by doing - building and testing software systems to understand how they work.
            <br />
           After working internationally in the fashion industry, I shifted my focus to full-stack development. Now, I build projects across web and data, usually starting from personal interests and and turning them into technical challenges. 
          </p>
          <p className='text-zinc-200 mt-4 text-center text-xs sm:text-base'>
            <ContactModal />
          </p>
        </div>
      </div>
    </>
  );
};

export default MoreAboutMe;
