import React, { useRef } from 'react'
import ContactModal from '../Modal/ContactModal'
import { Link } from 'react-router-dom';

const ProjectsButton = ({ onClick }) => {

  const marqueeRef = useRef(null);

  const scrollToMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <div className='flex items-center text-center gap-10 mx-auto'>
    <button onClick={onClick} className='px-5 py-1 rounded-md mx-auto text-xl tracking-widest uppercase space-x-2 font-anonymousPro font-semibold bg-zinc-950 text-slate-100 border border-transparent hover:opacity-80 transition duration-500 ease-in-out'>
      Projects
    </button>
  </div>
  )
}

export default ProjectsButton