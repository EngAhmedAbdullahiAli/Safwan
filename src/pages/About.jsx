import React from 'react'
import Navbar from '../layouts/Navbar'
import AboutLayout from '../layouts/AboutLayout'
import ProgressSection from '../layouts/ProgressSection'
import Footer from '../layouts/Footer'
const About = () => {
    return (
        <>
            <Navbar />            
            <AboutLayout />
            <ProgressSection/>
            <Footer/>
            
        </>
    )
}

export default About