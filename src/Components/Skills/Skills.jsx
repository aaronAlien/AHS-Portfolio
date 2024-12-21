import React from "react";
import StackIcon from "tech-stack-icons";
import IconInstance from "../Icons/IconInstance";

const Skills = () => {
  const skillData = [
    {
      icon: <StackIcon name='html5' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "HTML5",
    },
    {
      icon: <StackIcon name='css3' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "CSS3",
    },
    {
      icon: <StackIcon name="tailwindcss" className='icon grayscale w-12 sm:w-14 p-2' />,
    message: "Tailwindcss",
    },  
    {
      icon: <StackIcon name='js' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "JavaScript",
    },

    {
      icon: <StackIcon name='reactjs' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "React.js",
    },
    {
      icon: <StackIcon name='nodejs' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "Node.js",
    },
    {
      icon: <StackIcon name="vitejs" className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "Vite"
    },    
    {
      icon: <StackIcon name='python' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "Python",
    },
    {
      icon: <StackIcon name='mongodb' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "MongoDb",
    },
    {
      icon: <StackIcon name='mysql' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "MySQL",
    },
    {
      icon: <StackIcon name='git' className='icon grayscale w-12 sm:w-14 p-2' />,
      message: "Git",
    },
    {
      icon: <StackIcon name='github' className='icon rounded-full w-12 sm:w-14 p-2' />,
      message: "GitHub",
    },

  ];

  return (
    <>
      <div className='flex flex-wrap sm:w-2/3 items-center justify-center sm:gap-2 sm:px-6 py-4 rounded-xl bg-zinc-950 shadow-md'>
        {skillData.map((skill, index) => (
          <IconInstance
            key={index}
            icon={skill.icon}
            message={skill.message}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
