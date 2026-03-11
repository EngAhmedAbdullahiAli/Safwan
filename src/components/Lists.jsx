import React from 'react'

const List = ({ text, className }) => {
    return (
        <li className={`text-lg text-primary font-normal font-Jost
    hover:text-secondary duration-300 cursor-pointer list-none  ${className}`}> {text}</li>
    )
}

export default List