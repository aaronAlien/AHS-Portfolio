import React from 'react'

const MarqueeProjects = () => {

    const textItems = Array(95).fill('• My Projects');

  return (
    <>

    <div className="flex w-full">
  <div className="md:flex lg:flex hidden md:animate-marquee whitespace-nowrap font-anonymousPro uppercase font-bold text-6xl">
{textItems.map((item, index) => (
    <span key={index} className='text-8xl mx-4 text-zinc-200'>
        {item}
    </span>
))}
  </div>
</div>

    </>
  )
}

export default MarqueeProjects