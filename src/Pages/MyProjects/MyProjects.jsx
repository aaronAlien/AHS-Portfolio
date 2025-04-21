import React, { useRef } from "react";
import ProjectsCard from "../../Components/Projects/ProjectsCards";
import cloud from '../../assets/CardImages/wordcloud_genres_2.png';
import genshin from "../../assets/CardImages/genshin.png";
import bus from "../../assets/CardImages/bus.jpg";
import MarqueeProjects from "../../Components/Marquee/MarqueeProjects";
import { FaAnglesDown } from "react-icons/fa6";


const MyProjects = () => {
  const projectsData = [
    {
      title: "Spotify Exploration",
      image: cloud,
      description:
        "Explore, analyse and visualise my data.\nUsing the Spotify Web api and my mobile app usage data from Android.",
      link: "https://github.com/aaronAlien/Exploring-Spotify",
      link2: "https://github.com/aaronAlien/Exploring-Spotify",
      tags: ["python", "api", "jupyter"],
    },
    {
      title: "Live Bus Arrivals",
      image: bus,
      description:
        "Get live bus arrivals from the TFL api using 5-digit bus stop code. \n\n",
      link: "https://live-bus-tfl.vercel.app/",
      link2: "https://github.com/aaronAlien/Live-Bus-TFL",
      tags: ["javascript", "reactjs", "api", "tailwindcss"],
    },
    {
      title: "Genshin Daily",
      image: genshin,
      description:
        "Website for players to keep up to date with the popular game Genshin Impact. Using genshin.dev api.",
      link: "https://aaronalien.github.io/Daily-Genshin-Impact/",
      link2: "https://github.com/aaronAlien/Daily-Genshin-Impact",
      tags: ["html", "css", "javascript", "api"],
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
              link2={card.link2}
              tags={card.tags}
            />
          ))}
        </div>

      </div>
      <div className='flex items-center justify-center mt-0 mb-4 sm:mt-10 animate-pulse hover:text-sky-500/50 text-zinc-200/80 text-2xl sm:text-7xl'>
        <a href="#about">
          <FaAnglesDown />
        </a>
      </div>
    </>
  );
};

export default MyProjects;
