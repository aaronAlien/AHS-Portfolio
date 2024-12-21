import React from "react";
import { MdForwardToInbox } from "react-icons/md";
import { FiFileText, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <>
<div className='flex justify-start gap-6'>
      <div className='flex items-center justify-start gap-4 w-min mb-2'>
        <a
          href='http://'
          target='_blank'
          className='bg-violet-300 text-zinc-950 text-xl rounded-full p-2 border border-transparent hover:animate-pulse hover:bg-violet-300/50 transition duration-500 ease-in-out'
        >
          <FiFileText />
        </a>
        <a
          href='http://'
          target='_blank'
          className='bg-violet-300 text-zinc-950 text-xl rounded-full p-2 border border-transparent hover:animate-pulse hover:bg-violet-300/50 transition duration-500 ease-in-out'
        >
          <MdForwardToInbox />
        </a>
        <a
          href='http://'
          target='_blank'
          className='bg-violet-300 text-zinc-950 text-xl rounded-full p-2 border border-transparent hover:animate-pulse hover:bg-violet-300/50 transition duration-500 ease-in-out'
        >
          <FiLinkedin />
        </a>
        <a
          href='http://'
          target='_blank'
          className='bg-violet-300 text-zinc-950 text-xl rounded-full p-2 border border-transparent hover:animate-pulse hover:bg-violet-300/50 transition duration-500 ease-in-out'
        >
          <FiGithub />
        </a>
      </div>
      </div>    </>
  );
};

export default Footer;