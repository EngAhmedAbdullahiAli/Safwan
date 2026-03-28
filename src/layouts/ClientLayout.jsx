import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import { CgArrowLongRight } from "react-icons/cg";
import Flex from '../components/Flex';
import ClientCard from '../components/ClientCard';
const ClientLayout = () => {
    return (
        <div>
            <section className='py-[120px] bg-[#F9F4F1]'>
                <Container>

                    <Flex className='justify-center items-center gap-x-3'>
                        
                            <CgArrowLongRight/>
                            <SubHeading text='Client Testimonial' />
                        
                    </Flex>

                    <Heading text='Feedback From Client' />
                   <Flex className='gap-x-[30px]'>
                     <ClientCard/>
                     <ClientCard/>
                   </Flex>
                </Container>
            </section>
        </div>
    )
}

export default ClientLayout