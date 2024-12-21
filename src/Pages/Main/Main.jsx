import React from "react";
import MyProjects from "../../Pages/MyProjects/MyProjects";
import Landing from "../../Components/Landing/Landing";
import AboutMe from "../../Pages/About/AboutMe";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div 
        id="landing"
        className='container flex flex-col items-center justify-center min-h-screen'>
          <Landing />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div
          id='projects'
          className='container flex flex-col items-center justify-center min-h-screen'
        >
          <MyProjects />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div
          
          className='container flex flex-col items-center justify-center min-h-screen'
        >
          <AboutMe />
        </div>
        <div className='relative gap-8 bottom-0'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
