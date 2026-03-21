import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/Lists'
import Button from '../components/Button'
import cv from '../assets/Cv.pdf'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <section className='py-[18px]'>
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
            <a href={cv}><Button text="Show CV"/></a>
            
            </div>
          </Flex>
        </Container>
      </section>
    </div>
  )
}

export default Navbar