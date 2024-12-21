import React, { useRef } from "react";
import ProjectsCard from "../../Components/Projects/ProjectsCards";
import coffee from "../../assets/CardImages/coffee.png";
import genshin from "../../assets/CardImages/genshin.png";
import blurt from "../../assets/CardImages/blurt.png";
import MarqueeProjects from "../../Components/Marquee/MarqueeProjects";
import { FaAnglesDown } from "react-icons/fa6";


const MyProjects = () => {
  const projectsData = [
    {
      title: "Borcelle Coffee",
      image: coffee,
      description:
        "1. Develop a simple website. \n2.Practice in Web Design in relation to accessibility",
      link: "https://aaronalien.github.io/coffeeShop/index.html",
      tags: ["html", "css", "javascript"],
    },
    {
      title: "Genshin Daily",
      image: genshin,
      description:
        "Website for players to keep up to date with the popular game Genshin Impact. Using genshin.dev API.",
      link: "https://aaronalien.github.io/Daily-Genshin-Impact/",
      tags: ["html", "css", "javascript", "api"],
    },
    {
      title: "Blurt it Forget It",
      image: blurt,
      description:
        "A lightweight React application for creating and auto-expiring thoughts, practicing state and effect.",
      link: "https://aaronalien.github.io/Blurt-It-Forget-It/",
      tags: ["html", "css", "javascript", "reactjs"],
    },
  ];

  return (
    <>
      <div className='relative left-0 mb-6 sm:mb-14'>
        <MarqueeProjects />
      </div>
      <div className='max-w-screen-xl flex flex-col m-6 sm:mx-5 px-4 pt-8 bg-gradient-to-tr from-zinc-400 via-zinc-600 to-zinc-700 rounded-xl shadow-custom border border-violet-950/50'>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mb-4'>
          {projectsData.map((card, index) => (
            <ProjectsCard
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
              link={card.link}
              tags={card.tags}
            />
          ))}
        </div>

        {/*<div className='flex items-center justify-center m-auto text-center'>
          <button className='px-5 py-1 rounded-md mx-auto text-xl tracking-widest uppercase space-x-2 font-anonymousPro font-semibold bg-zinc-950 text-slate-100 border border-transparent hover:opacity-80 transition duration-500 ease-in-out'>
            more
          </button>
        </div>*/}
      </div>
      <div className='relative top-0 sm:top-28 animate-pulse text-zinc-200/80 text-2xl mb-4 sm:mb-0 sm:text-7xl'>
        <a href="#about">
          <FaAnglesDown />
        </a>
      </div>
    </>
  );
};

export default MyProjects;
