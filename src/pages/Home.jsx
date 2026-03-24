import React from 'react'
import Navbar from '../layouts/Navbar'
import Banner from '../layouts/Banner'
import Service from '../layouts/ServiceLayout'
import ProgressSection from '../layouts/ProgressSection'
import AboutLayout from '../layouts/AboutLayout'
import ProjectLayout from '../layouts/ProjectLayout'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Service/>
        <AboutLayout/>
        <ProgressSection/>
        <ProjectLayout/>
    </div>
  )
}

export default Home