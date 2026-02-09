import React, { Link, useRef } from "react";
import ProjectsButton from "../Buttons/ProjectsButton";
import MoreButton from "../Buttons/MoreButton";

const Bio = () => {
  return (
    <>
      <div className='flex flex-col md:w-2/3 gap-2 px-6 py-4 rounded-xl text-left text-sm md:text-base font-anonymousPro bg-zinc-950 text-violet-300 shadow-md'>
        <p>
          Focused on building and testing systems across
          software and data, driven by curiosity and learning through doing.
        </p>
        <MoreButton />
      </div>
    </>
  );
};

export default Bio;
