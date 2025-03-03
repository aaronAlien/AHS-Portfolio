import React, { useRef, useState } from "react";
import windowClick from "../../Hooks/WindowClick";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  windowClick(modalRef, () => setIsOpen(false));

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='mx-1 tracking-widest text-center font-anonymousPro font-semibold cursor-pointer hover:opacity-50 hover:text-sky-500 transition-all duration-500 ease-in-out'
      >
        get in touch
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className={'fixed inset-0 flex items-center justify-center z-50 bg-black/95 scale-100 opacity-100 backdrop-blur-sm transform transition-all duration-1000 ease-linear'}
        >
          <div className='container max-w-[80%] lg:max-w-screen-sm mx-auto flex flex-col justify-center items-center rounded-xl text-zinc-950 shadow-custom border border-violet-300/30 bg-gradient-to-tr from-zinc-300 via-zinc-500 to-zinc-600'>
            <span className='absolute items-center top-1/4 w-[80%] lg:w-full text-2xl lg:text-4xl font-bold text-violet-300'>
              Aaron H Shakespeare<br />
              London, UK<br />
              Junior Developer
            </span>

            <div className='flex justify-center items-center flex-col my-4 mx-auto px-2'>
              <h3 className='text-2xl font-semibold font-anonymousPro text-zinc-950'>
                Contact Me
              </h3>

              <ul className="text-left space-y-2 text-base lg:text-xl px-2">
                  <li>
                    Email me at&nbsp;
                    <a
                      href='mailto:thatshakespeare2@gmail.com'
                      className='font-semibold cursor-pointer hover:opacity-50 hover:text-purple-950 transition-all duration-500 ease-in-out'
                    >
                      thatshakespeare2@gmail.com
                    </a>
                  </li>
                <li>
                  Message me on&nbsp;
                  <a href='https://www.linkedin.com/in/aaron-shakespeare/' target="_blank" className='font-semibold hover:animate-pulse cursor-pointer hover:opacity-50 hover:text-purple-950 transition-all duration-500 ease-in-out'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
