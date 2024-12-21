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
        className='mx-1 tracking-widest text-center uppercase font-anonymousPro font-semibold hover:text-zinc-200 transition duration-500 ease-in-out'
      >
        contact me
      </button>

      {isOpen && (
        <div 
        ref={modalRef}
        className='fixed inset-0 flex items-center justify-center z-50 bg-zinc-950/90'>
          <div className='container max-w-screen-sm mx-auto pt-5 px-5 w-4/5 sm:px-10 sm:pt-10 md:px-16 flex flex-col justify-center items-center rounded-xl text-zinc-950 shadow-md bg-gradient-to-tr from-violet-400 via-zinc-500 to-zinc-600'>

            <span className='absolute items-center top-20 text-2xl'>
                Aaron H Shakespeare
                |
                London, UK
                |
                Junior Software Developer
                </span>
            
            <div className='bg-zinc-950 rounded-lg shadow-custom'>
              <h3 className='text-2xl font-semibold font-anonymousPro'>
                Contact Me
              </h3>
            </div>

            <div className='m-4'>
              <ul>
                <li>Email me: thatshakespeare2@gmail.com</li>
                <li>Message me: </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
