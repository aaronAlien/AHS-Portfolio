import React from "react";

const MarqueeAboutMe = () => {
  const textItems = Array(195).fill("• About Me");

  return (
    <>
      <div className='flex w-full'>
        <div className='sm:flex animate-marquee whitespace-nowrap font-anonymousPro uppercase font-bold'>
          {textItems.map((item, index) => (
            <span key={index} className='text-5xl sm:text-8xl mx-4 text-zinc-200'>
              {item}
            </span>
          ))}
        </div>
        <div className='sm:flex animate-marquee whitespace-nowrap font-anonymousPro uppercase font-bold'>
          {textItems.map((item, index) => (
            <span key={index} className='text-5xl sm:text-8xl mx-4 text-zinc-200'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeAboutMe;
