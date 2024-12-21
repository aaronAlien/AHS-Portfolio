import React, { useRef } from "react";
import ProjectsCard from "../../Components/Projects/ProjectsCards";
import coffee from "../../assets/CardImages/coffee.png";
import genshin from "../../assets/CardImages/genshin.png";
import blurt from "../../assets/CardImages/blurt.png";
import MarqueeProjects from "../../Components/Marquee/MarqueeProjects";

const MyProjects = () => {
  const projectsData = [
    {
      title: "Borcelle Coffee",
      image: coffee,
      description:
        "Visual accessibility features, allowing users to modify the appearance to suit their needs.",
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
      <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-gradient-to-tr from-zinc-400 via-zinc-600 to-zinc-700 rounded-xl shadow-custom border border-violet-950/50'>
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

        <div className='flex items-center justify-center m-auto text-center'>
          <button className='px-5 py-1 rounded-md mx-auto text-xl tracking-widest uppercase space-x-2 font-anonymousPro font-semibold bg-zinc-950 text-slate-100 border border-transparent hover:opacity-80 transition duration-500 ease-in-out'>
            more
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
