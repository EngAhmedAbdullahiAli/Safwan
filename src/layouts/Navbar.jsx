import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/Lists'
import Button from '../components/Button'
import cv from '../assets/Cv.pdf'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
const Navbar = () => {
  let[open, setOpen]=useState(false)
  let menuClick=()=>{
    setOpen(!open)
    
    

  }
  return (

    <>
      {/* Desktop Design start here */}
      <nav className='hidden md:block  py-[18px]'>
        <Container>
          <Flex className='justify-between items-center '>
            <div className='w-3/12'>
              <Image src={Logo} />
            </div>
            <div className='w-6/12 '>
              <ul className='flex gap-x-12 justify-center'>
                <Link to='/'><List text="Home" /></Link>
                <Link to='/service'><List text="Services" /></Link>
                <Link to='/about'><List text="About" /></Link>
                <List text="Blog" />
                <List text="Contact" />
              </ul>
            </div>
            <div className='w-3/12 text-end'>
              <a href={cv}><Button text="Show CV" /></a>

            </div>
          </Flex>
        </Container>
      </nav>
      {/* Desktop Design start end */}


      {/* Mobile design start  */}
      <nav className='relative  block md:hidden px-3 py-5'>
        <Flex className='items-center justify-between'>
          <div><Image src={Logo} /></div>
          <div onClick={menuClick}>
            {
              open ? <ImCross  /> :<FaBars />
            }
          </div>
        </Flex>
       {open && <ul className='absolute left-0 top-[78px] z-40 w-full bg-blue-500 flex flex-col items-center gap-y-14 text-white text-lg font-medium font-Jost font-semibold py-12'>
          <Link to='/'><li>Home</li></Link>
          <Link to='/service'><li>Service</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link><li>Blog</li></Link>
          <Link><li>Contact</li></Link>
        </ul>}
        




      </nav>
      {/* Mobile design end */}


    </>

  )
}

export default Navbar