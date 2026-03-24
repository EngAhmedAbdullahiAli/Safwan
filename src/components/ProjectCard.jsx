import React from 'react';
import Image from '../components/Image'
import CardImage from '../assets/CardImage.png'
import { VscArrowRight } from "react-icons/vsc";
import Flex from './Flex';
const ProjectCard = ({h5,h4,p,casetext,className}) => {
    return (
        <div className='w-[370px] h-[520px] bg-white shadow-lg'>
            <Image src={CardImage} className='mb-[20px]' />
            <div  className='ml-[30px] mr-[36px]'>
                <h6 className='text-[#E5745D] font-medium text-base font-voll'>{h5}</h6>
                <h4 className='text-[#00413D] font-medium text-2xl font-voll mb-[10px]' >{h4}</h4>
                <p className='text-base text-[#00413D] font-Jost font-medium mb-[24px]'>{p}</p>
                <div>
                    <Flex className='items-center gap-x-[6px]'>
                        <h5 className='text-lg text-[#00413D] font-Jost font-medium' >{casetext}</h5>
                        <VscArrowRight />
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard