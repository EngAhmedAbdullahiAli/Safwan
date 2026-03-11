import React from 'react'

const Container = ({children='',className =''}) => {
  return (
    <div className={`max-w-container mb-20 mx-auto  ${className}`}>{children}</div>
  )
}

export default Container