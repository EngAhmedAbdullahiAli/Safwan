import React from 'react'
import Navbar from '../layouts/Navbar'
import Banner from '../layouts/Banner'
import Service from '../layouts/ServiceLayout'
import ProgressSection from '../layouts/ProgressSection'
import AboutLayout from '../layouts/AboutLayout'
import ProjectLayout from '../layouts/ProjectLayout'
import ClientLayout from '../layouts/ClientLayout'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Service/>
        <AboutLayout/>
        <ProgressSection/>
        <ProjectLayout/>
        <ClientLayout/>
    </div>
  )
}

export default Home