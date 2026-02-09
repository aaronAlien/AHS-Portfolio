import React from "react";
import pfp from "../../assets/AHShakespearePFP_Square.png";
import pfp2 from "../../assets/AHShakespearePFP2_sq.jpg";

import {TooltipHeader} from "../Tooltip/Tooltip";

const Header = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center md:justify-center md:space-x-10 text-zinc-950 text-left font-anonymousPro'>
          <img
            src={pfp2}
            alt=''
            className='w-1/2 sm:w-1/3 md:w-1/4 rounded-full border border-zinc-900 shadow-xl'
          />
        <div className='flex flex-col gap-2 w-full sm:w-auto sm:text-left text-zinc-200'>
          <TooltipHeader
          message='they/them'>
          <h1 className='sm:text-3xl md:text-4xl text-3xl text-center font-bold tracking-wider hover:text-sky-500 transition-all duration-500 ease-in-out'>
            Aaron H Shakespeare
          </h1>
          </TooltipHeader>
          <h1 className='sm:text-xl md:text-base uppercase tracking-wider text-center'>
            Developer | London, UK
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
