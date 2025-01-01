import React from "react";
import portrait from "../../assets/AHShakespearePFP.png";
import pfp2 from "../../assets/380_23_08_22_AURUM_03_Look_03_473.jpg"
import ContactModal from "../Modal/ContactModal";

const MoreAboutMe = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 sm:gap-0'>

          <div className='col-span-1 row-span-3'>
            <img src={pfp2} alt='' className='w-2/3 mx-auto rounded-md' />
          </div>
          
          <div className='col-span-2 row-span-3 px-8 py-8 w-full sm:w-5/6 m-auto font-anonymousPro bg-zinc-950 rounded-xl'>
            <p className='mb-2 text-xs sm:text-base text-violet-300'>
            I’ve spent most of my career in the fashion industry 
            <a href="https://models.com/models/hannah-shakespeare" target='blank' className='font-semibold hover:opacity-50 hover:text-sky-500 transition-all duration-500 ease-in-out'> as a model
            </a>, collaborating with teams across Europe and the US.
            <br/>
            This gave me the opportunity to travel extensively and work with people from diverse backgrounds and various sectors within fashion.
            </p>
            <p className='mb-2 text-xs sm:text-base text-violet-300'>
            Now, following a lifelong interest in technology, I’m transitioning into the tech industry. After completing a software development bootcamp, I’ve been enjoying building my skills and am excited to continue learning while finding opportunities to apply my experience to this new career path.
            </p>
            <p className='text-zinc-200 mt-4 text-center text-xs sm:text-base'>
              <ContactModal />
              </p>
          </div>
        </div>

    </>
  );
};

export default MoreAboutMe;
