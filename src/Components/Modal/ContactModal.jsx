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
        className='mx-1 tracking-widest text-center font-anonymousPro font-semibold hover:uppercase transition duration-500 ease-in-out'
      >
        get in touch
      </button>

      {isOpen && (
        <div
          ref={modalRef}
          className={'fixed inset-0 flex items-center justify-center z-50 bg-zinc-950/95 scale-100 opacity-100 backdrop-blur-sm transform transition-all duration-1000 ease-linear'}
        >
          <div className='container max-w-screen-sm mx-auto pt-5 px-5 w-4/5 sm:px-10 sm:pt-10 md:px-16 flex flex-col justify-center items-center rounded-xl text-zinc-950 shadow-custom border border-violet-300/30 bg-gradient-to-tr from-zinc-300 via-zinc-500 to-zinc-600'>
            <span className='absolute items-center top-1/3 text-2xl font-bold text-violet-300'>
              Aaron H Shakespeare | London, UK | Junior Developer
            </span>

            <div className=''>
              <h3 className='text-2xl py-1 px-4 font-semibold font-anonymousPro text-zinc-950'>
                Contact Me
              </h3>
            </div>

            <div className='m-4'>
              <ul>
                <a href=''>
                  <li>
                    Email me at
                    <a
                      href='mailto:thatshakespeare2@gmail.com'
                      className='font-semibold hover:uppercase transition-all 500ms ease-in-out'
                    >
                      thatshakespeare2@gmail.com
                    </a>
                  </li>
                </a>
                <li>
                  Message me on
                  <a href='https://www.linkedin.com/in/aaron-shakespeare/' target="_blank" className='font-semibold hover:animate-pulse hover:uppercase'>
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
