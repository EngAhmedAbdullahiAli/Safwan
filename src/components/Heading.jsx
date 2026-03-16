import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-center text-[50px] text-[#00413D] font-voll font-medium w-[522px] mx-auto leading-[60px]pt-3 ${className}`}>{text}</h2>
  )
}

export default Heading