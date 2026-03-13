import React from 'react'
import Image from '../components/Image'
import  ServiceImage from '/ServiceImage1.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const ServiceCard = ({src,title, text}) => {
  return (
    <div className='group w-[370px] shadow-2xl py-[50px] pl-[30px]'>
        <Image src={src}/>
        <h5 className='text-2xl font-extrabold font-voll pt-[26px] 
        pb-[15px]'>{title}</h5>
        <p className='text-base text-[#00413D] font-Jost font-normal w-[245px] pb-[30px]'>{text}</p> 
        <FaLongArrowAltRight className='group-hover:text-red-500 text-2xl
        duration-500 '/>

    </div>
  )
}

export default ServiceCard