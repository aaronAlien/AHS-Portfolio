import React from "react";
import { Link } from "react-router-dom";


const MoreButton = () => {

  return (
    <>
        <a href="#about">
          <button className='relative left-[80%] sm:left-[85%] w-1/6 bg-transparent rounded-lg hover:animate-pulse hover:font-semibold transition duration-500 ease-in-out'>
            more...
          </button>
        </a>
    </>
  );
};

export default MoreButton;
