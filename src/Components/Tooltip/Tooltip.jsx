import React from "react";

export function TooltipHeader({ message, children }) {
  return (
    <div className='group relative flex items-center justify-center'>
      {children}
      <span className='absolute -top-7 left-0 scale-0 w-auto text-center rounded-full bg-transparent border border-sky-500 py-1 px-2 text-lg italic text-sky-500 group-hover:scale-100 group-hover:animate-bounce-slow z-50 transition-all duration-500 ease-in-out'>
        {message}
      </span>
    </div>
  );
}

export function TooltipSkills({ message, children }) {
  return (
    <div className='group relative flex items-center justify-center'>
      {children}
      <span className='absolute top-11 left-auto scale-0 w-max text-center rounded bg-sky-500/80 p-1 text-xxs font-semibold text-zinc-950 group-hover:scale-100 z-50 transition-all duration-200 ease-in-out'>
        {message}
      </span>
    </div>
  );
}

export function TooltipCards({ message, children }) {
  return (
    <div className='group relative flex items-center justify-center'>
      {children}
      <span className='absolute top-1 left-auto scale-0 w-max text-center rounded bg-sky-500/80 p-1 text-xxs font-semibold text-zinc-950 group-hover:scale-100 z-50 transition-all duration-200 ease-in-out'>
        {message}
      </span>
    </div>
  );
}
