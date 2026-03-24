import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import SubHeading from '../components/SubHeading';
import Heading from '../components/Heading';
import { TbArrowNarrowRight } from "react-icons/tb";
import { HiMiniArrowLeft } from "react-icons/hi2";
import ProjectCard from '../components/ProjectCard';

const ProjectLayout = () => {
    return (
        <div>
            <section className='py-[100px] '>
                <Container>
                    <Flex className='justify-between items-center'>
                        <div>
                            <SubHeading className='!text-left' text='Recent Projects' />
                            <Heading className='!text-left' text='My Recent Projects' />
                        </div>
                        <Flex className='gap-x-5'>
                            <div className='group p-[15px] border hover:bg-[#E5745D] duration-300 hover:border-transparent'><HiMiniArrowLeft className='text-black group-hover:text-white' /></div>
                            <div className='group p-[15px] border hover:bg-[#E5745D] duration-300 hover:border-transparent '><TbArrowNarrowRight className='text-black group-hover:text-white' /></div>
                        </Flex>
                    </Flex>
                    <Flex className='justify-between pt-10 pb-15'>
                        <ProjectCard h5='Analytics, UI-Ux' h4='Branding & Digital Video Campaign For George’s Cafe' p='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' casetext='View Case Studies' />
                        <ProjectCard h5='Mobile App' h4='Branding & Digital Video Campaign For George’s Cafe' p='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' casetext='View Case Studies'  />
                        <ProjectCard h5='Web Development' h4='Branding & Digital Video Campaign For George’s Cafe' p='Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.' casetext='View Case Studies'/>
                    </Flex>
                </Container>
            </section>
        </div>
    )
}

export default ProjectLayout