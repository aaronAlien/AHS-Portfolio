import React from "react";
import pfp from "../../assets/AHShakespearePFP_Square.png";

const Header = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row items-center md:justify-center gap-10 text-zinc-950 text-left font-anonymousPro'>
          
          <div className="flex w-1/5 mx-auto md:mx-0 md:w-1/6">
            <img
              className='rounded-[50%]'
              src={pfp}
              alt='portrait photo of Aaron H Shakespeare'
            />
          </div>

          <div className='flex flex-col gap-2 text-zinc-200'>
            <h1 className='text-7xl font-bold tracking-wider'>
              Aaron H Shakespeare
            </h1>
            <h1 className='text-3xl uppercase tracking-wider'>
            Junior Software Developer
            </h1>
            <h1 className='text-3xl uppercase tracking-wider'>London, UK</h1>
          </div>
        </div>
    </>
  );
};

export default Header;
