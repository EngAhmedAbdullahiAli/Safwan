import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import FooterList from '../components/FooterList'
import FooterLogo from '../assets/logoFooter.png'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (

    <section className='bg-[#00413D] pt-[60px] pb-[10px]'>
      <Container>
        <Image className='mx-auto pb-[50px]' src={FooterLogo} />
        <ul className='flex gap-x-6 justify-center'>
          <FooterList text='Home' />
          <FooterList text='About' />
          <FooterList text='Services' />
          <FooterList text='Portfolio' />
          <FooterList text='Blog' />
          <FooterList className='!border-r-0' text='Contract' />
        </ul>
        <ul className='flex justify-center gap-x-8 mt-[50px] border-b border-[#FFFFFF1A] pb-[60px]' >
          <li className='w-[60px] h-[60px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaInstagram className='text-white  ' /></li>
          <li className='w-[60px] h-[60px] rounded-full bg-[#E5745D] flex justify-center items-center'><AiOutlineSkype className='text-white  ' /></li>
          <li className='w-[60px] h-[60px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaFacebookSquare className='text-white ' /></li>
        </ul>
        <p className='text-center text-[#FFFFFF] mt-[30px] font-[Jost]'>Copyright © 2023 Design By Eng Ahmed. All rights reserved.</p>
      </Container>

    </section>


  )
}

export default Footer