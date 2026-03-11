import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
      <button  className={`py-6 px-11 bg-secondary
      text-lg font-medium font-Jost text-white border-2 
      relative after:absolute after:top-[5px] after:left-[5px] after:content-[""]
      after:w-[95%] after:h-[87%]  after:border-white after:border rounded-xl
      ${className}
     `}>{text}</button>
    </div>
  )
}

export default Button