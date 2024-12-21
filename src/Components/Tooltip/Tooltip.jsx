import React from "react";

export default function Tooltip({ message, children }) {
  return (
    <div className='group relative flex items-center justify-center'>
      {children}
      <span className='absolute top-14 left-auto scale-0 w-max text-center rounded bg-sky-400/80 p-1 text-xxs font-semibold text-zinc-950 group-hover:scale-100 z-50 transition-all 200ms ease-in-out'>
        {message}
      </span>
    </div>
  );
}

//