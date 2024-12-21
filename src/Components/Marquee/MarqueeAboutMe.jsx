import React from "react";

const MarqueeAboutMe = () => {
  const textItems = Array(95).fill("• About Me");

  return (
    <>
      <div className='flex w-full'>
        <div className='md:flex lg:flex hidden md:animate-marquee whitespace-nowrap font-anonymousPro font-bold text-2xl md:text-6xl'>
          {textItems.map((item, index) => (
            <span key={index} className='text-8xl mx-4 text-zinc-200'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeAboutMe;
