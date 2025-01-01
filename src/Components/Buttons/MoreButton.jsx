import React from "react";
import { Link } from "react-router-dom";


const MoreButton = () => {

  return (
    <>
        <a href="#about">
          <button className='relative left-[80%] sm:left-[86%] md:left-[84%] w-1/6 bg-transparent font-semibold hover:opacity-50 hover:text-sky-500 transition-all duration-500 ease-in-out'>
            more...
          </button>
        </a>
    </>
  );
};

export default MoreButton;
