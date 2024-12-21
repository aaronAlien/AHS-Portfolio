import React from "react";
import portrait from "../../assets/AHShakespearePFP.png";
import ContactModal from "../Modal/ContactModal";

const MoreAboutMe = ({ setIsOpen }) => {
  return (
    <>
        <div className='grid sm:grid-cols-3 sm:grid-rows-3'>
          <div className='col-span-1 row-span-3'>
            <img src={portrait} alt='' className='w-2/3 mx-auto rounded-md' />
          </div>
          <div className='col-span-2 row-span-3 px-8 py-8 w-3/4 m-auto font-anonymousPro bg-zinc-950 rounded-xl'>
            <p className='mb-2 text-violet-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              veritatis laboriosam unde suscipit, alias earum harum voluptatum
              quam perspiciatis expedita minus. Ab quidem, id hic molestias
              repudiandae natus unde animi nostrum perspiciatis nemo suscipit
              voluptas.
            </p>
            <ul className='flex flex-col gap-2 mt-4'>
              <li>More questions?</li>
              <span className='text-violet-300'>
                feel free to <ContactModal /> via LinkedIn or email.
              </span>
            </ul>
          </div>
        </div>

    </>
  );
};

export default MoreAboutMe;
