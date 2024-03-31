import React from 'react'
import Herocomponent from './Herocomponent'
import Service from './Service'
import Contactform from '../Contact/Maincontent'
import ClientBanner from './ClientBanner'
import ProjectBanner from './ProjectBanner'
import NewsSlider from './NewsSlider'
import TestiMonial from './TestiMonial'
import GetService from './GetService'

const Maincontent = () => {
  return (
    <div>
      <Herocomponent />
      <ClientBanner />
      <Service />
      <ProjectBanner />
      <NewsSlider />
      <TestiMonial />
      <Contactform/> 
      <GetService />
    </div>
    
  )
}

export default Maincontent
