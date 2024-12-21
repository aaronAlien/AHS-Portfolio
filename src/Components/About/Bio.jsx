import React, { Link, useRef } from 'react'
import ProjectsButton from '../Buttons/ProjectsButton'
import MoreButton from '../Buttons/MoreButton';

const Bio = () => {

  return (
    <>  
      <div className="flex flex-col md:w-2/3 gap-2 px-6 py-4 rounded-xl text-left font-anonymousPro bg-zinc-950 text-violet-300 shadow-md">
          <p>Combining my eclectic experience from an international fashion career with my development skills. I’m always looking to learn and grow as a developer.</p>
              <MoreButton />
          </div>

          
  
    </>
  )
}

export default Bio