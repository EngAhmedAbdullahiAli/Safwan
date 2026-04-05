import React from 'react'

const FooterList = ({text,className}) => {
  return (
  <li className={`text-lg text-white font-meduim font-Jost pr-[30px] border-r border-white ${className}`}>{text}</li>
  )
}
 
export default FooterList