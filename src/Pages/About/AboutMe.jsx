import React from 'react'
import MoreAboutMe from '../../Components/About/MoreAboutMe'
import MarqueeAboutMe from '../../Components/Marquee/MarqueeAboutMe'

const AboutMe = () => {
  return (
    <div>
    <div className="relative left-0 mb-6 sm:mb-14">
      <MarqueeAboutMe />
      </div>
        <MoreAboutMe />
    </div>
  )
}

export default AboutMe