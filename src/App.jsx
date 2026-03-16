import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Service from './layouts/Service'
import About from './layouts/About'
import ProgressSection from './layouts/ProgressSection'
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service/>
      <About/>
      <ProgressSection/>
    </div>
  )
}

export default App