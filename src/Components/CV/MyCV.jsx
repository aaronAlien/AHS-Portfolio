import React from "react";

const MyCV = () => {
  return (
    <>
      <div className='flex items-center justify-center gap-4 sm:w-min'>
        <a
          href='http://'
          target='_blank'
          className='bg-violet-300 rounded-full p-2 border border-transparent hover:animate-pulse hover:bg-violet-300/50 transition duration-500 ease-in-out'
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-zinc-950'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z'
            />
          </svg>
        </a>
        <a
          href='http://'
          target='_blank'
          className='bg-violet-300 rounded-full p-2 border border-transparent hover:animate-pulse hover:bg-violet-300/50 transition duration-500 ease-in-out'
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-zinc-950'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9'
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default MyCV;
