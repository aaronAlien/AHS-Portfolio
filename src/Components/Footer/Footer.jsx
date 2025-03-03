import React from "react";
import { MdForwardToInbox } from "react-icons/md";
import { FiFileText, FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className='flex flex-col justify-start gap-6'>
          
        <div className='flex items-center justify-start gap-6 w-min mb-2'>
          <a
            href='mailto:thatshakespeare2gmail.com'
            target='_blank'
            className='bg-violet-300 text-zinc-950 text-base sm:text-xl rounded-full p-2 border border-transparent hover:opacity-50 hover:bg-sky-500/50 transition-all duration-500 ease-in-out'
          >
            <MdForwardToInbox />
          </a>
          <a
            href='https://www.linkedin.com/in/aaron-shakespeare/'
            target='_blank'
            className='bg-violet-300 text-zinc-950 text-base sm:text-xl rounded-full p-2 border border-transparent hover:opacity-50 hover:bg-sky-500/50 transition-all duration-500 ease-in-out'
          >
            <FiLinkedin />
          </a>
          <a
            href='https://github.com/aaronAlien/'
            target='_blank'
            className='bg-violet-300 text-zinc-950 text-base sm:text-xl rounded-full p-2 border border-transparent hover:opacity-50 hover:bg-sky-500/50 transition-all duration-500 ease-in-out'
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
