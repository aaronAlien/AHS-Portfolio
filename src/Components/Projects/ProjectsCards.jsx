import React from "react";
import { FaCode } from "react-icons/fa6";
import CardIcon from "./CardIcon";

const ProjectsCard = ({
  title,
  image,
  description,
  link,
  link2,
  tags,
  icon,
  message,
}) => {
  const iconData = [
    {
      icon: (
        <a
          href={link2}
          target='_blank'
          className='rounded-full border border-transparent bg-transparent hover:opacity-40 transition duration-300 ease-in-out'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
          >
            <path
              d='M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z'
              fill='#C4B5FD'
            ></path>
          </svg>
        </a>
      ),
      message: <FaCode />,
    },
  ];

  return (
    <>
      <div className='pt-4 px-4 rounded-md overflow-hidden shadow-custom font-anonymousPro bg-zinc-950 text-zinc-200'>
        <div className='relative rounded-md'>
          <a href={link} target='_blank'>
            <img
              className='w-full sm:h-[200px] mx-auto object-contain sm:object-cover rounded-sm border border-zinc-950'
              src={image}
              alt={title}
            />
            <div className='hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25'></div>
          </a>
        </div>
        <div className='flex flex-col pt-4'>
          <a
            href={link}
            target='_blank'
            className='w-full font-semibold text-violet-300 text-lg hover:animate-pulse transition duration-500 ease-in-out'
          >
            {title}
          </a>
          <p className='text-xs sm:text-sm whitespace-pre-wrap'>{description}</p>
          <div className='flex items-center justify-between w-full'>
            <ul className='flex sm:flex-row flex-wrap gap-2'>
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className='px-2 border rounded-full text-center text-xxs sm:text-xs border-violet-300 text-violet-300'
                >
                  {tag}
                </li>
              ))}
            </ul>
            {iconData.map((icon, index) => (
              <CardIcon
              key={index}
              icon={icon.icon}
              message={icon.message}
            />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
