import React from 'react'
import Image from './Image'
import Profile from '../assets/clientAtar.png'
import { IoIosStar } from "react-icons/io";

import Flex from './Flex';
const ClientProfile = () => {
    return (
   
           <div className='mt-[48px]'>
            <Flex>
                <Image src={Profile} />
                <div className='ml-[30px] '>
                    <h1 className='font-voll text-[20px] '>Michale Doie</h1>
                    <h5>Product Designer</h5>
                    <Flex>
                       <IoIosStar className='text-[#FF9F3F]' />
                       <IoIosStar className='text-[#FF9F3F]' />
                       <IoIosStar className='text-[#FF9F3F]' />
                       <IoIosStar className='text-[#FF9F3F]' />
                       <IoIosStar className='text-[#FF9F3F]' />
                        
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}

export default ClientProfile