import React from "react";

export default function Tooltip({ message, children }) {
  return (
    <div className='group relative flex items-center justify-center'>
      {children}
      <span className='absolute top-11 left-auto scale-0 w-max text-center rounded bg-violet-300 p-1 text-xs text-zinc-950 group-hover:scale-100 z-50 transition-all 200ms ease-in-out'>
        {message}
      </span>
    </div>
  );
}

//