import React from 'react'

const Input = ({placehoder}) => {
    return (
        <input className=' my-12 w-[45%] pb-3 border-[#00413d1a] border-b placeholder:text-[#00413DB2] font-[18px] font-[Jost] placeholder:text-base' type='text' placeholder={placehoder} />

    )
}

export default Input