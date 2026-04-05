import React from 'react'
import Navbar from '../layouts/Navbar'
import Banner from '../layouts/Banner'
import Service from '../layouts/ServiceLayout'
import ProgressSection from '../layouts/ProgressSection'
import AboutLayout from '../layouts/AboutLayout'
import ProjectLayout from '../layouts/ProjectLayout'
import ClientLayout from '../layouts/ClientLayout'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

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
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home