import React from 'react'
import Vector from '../assets/vector1.png'
import Image from './Image'
const ClientCard = () => {
  return (
    <>
      <div className='relative w-[570px] h-[158px] bg-white shadow-md border-t-4 border-[#E5745D]'>
        <div className='absolute top-[146.5px] left-[81px]'>

          <img src={Vector} alt="vector" />

        </div>
        <p className='pt-[30px] px-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this</p>
      </div>
    </>
  )
}

export default ClientCard