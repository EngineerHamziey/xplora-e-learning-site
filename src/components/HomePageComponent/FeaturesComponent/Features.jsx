import EachFeature from "./EachFeature";

import barGraphLogo from "../imagesHome/barGraphLogo.png"
import purpleTwitter from "../imagesHome/purpleTwitter.png"
import greenCircleLogo from "../imagesHome/greenCircleLogo.png"
import alarmLogo from "../imagesHome/alarmLogo.png"

import React from 'react'

const Features = () => {
  return (
    <div>
      <EachFeature 
        logo={barGraphLogo} 
        head ="Leaderboards" 
        text="A brief description of how the ranking feature is to keep the user motivated by competing with peers" 
      />
      <EachFeature 
        logo={purpleTwitter} 
        head ="Socials" 
        text="See what your friends are learning and join them. The more, the merrier." 
      />
      <EachFeature 
        logo={greenCircleLogo} 
        head ="Personalized learning" 
        text="There is no rush. The course is  an endless reservoir of knowledge." 
      />
      <EachFeature 
        logo={alarmLogo} 
        head ="Challenge" 
        text="Take up challenges on a daily, weekly and monthly basis to give you a refresher of what you have learned." 
      />
    </div>
  )
}

export default Features