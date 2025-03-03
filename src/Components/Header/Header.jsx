import React from "react";
import pfp from "../../assets/AHShakespearePFP_Square.png";
import {TooltipHeader} from "../Tooltip/Tooltip";

const Header = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center md:justify-center gap-4 sm:gap-10 text-zinc-950 text-left font-anonymousPro'>
       
        <div className='flex w-1/2 md:w-1/3 sm:m-auto md:mx-0 sm:w-1/6'>
            <img
              className='rounded-[50%] sm:p-0 border-transparent sm:border-2 shadow-md'
              src={pfp}
              alt='portrait photo of Aaron H Shakespeare'
            />
        </div>

        <div className='flex flex-col gap-2 w-full text-center sm:w-auto sm:text-left text-zinc-200'>
          <TooltipHeader
          message='they/them'>
          <h1 className='sm:text-7xl md:text-5xl text-3xl font-bold tracking-wider hover:text-sky-500 transition-all duration-500 ease-in-out'>
            Aaron H Shakespeare
          </h1>
          </TooltipHeader>
          <h1 className='sm:text-3xl md:text-xl text-xl uppercase tracking-wider'>
            Junior Developer
          </h1>
          <h1 className='sm:text-3xl md:text-xl text-xl uppercase tracking-wider'>
            London, UK
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
