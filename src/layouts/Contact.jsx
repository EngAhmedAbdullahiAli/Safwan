import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ContactImage from '../assets/ContactImage.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Button from '../components/Button'
import { HiArrowLongRight } from "react-icons/hi2";

const Contact = () => {
    return (
        <section className='py-[120px]'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-5/12'>
                        <Image src={ContactImage} alt='ContactImage' />
                    </div>
                    <div className='w-7/12'>
                        <Flex className='items-center'>
                            <HiArrowLongRight className='w-[40px]' />
                            <SubHeading text='Get In Touch' />
                            


                        </Flex>
                        <Heading className='!text-left w-auto' text='Feel Free to Contact' />
                        <Flex className='flex-wrap justify-between'>
                            <Input placehoder='Enter Name' />
                            <Input placehoder='Enter Email' />
                            <Input placehoder='Phone' />
                            <Input placehoder='Subject' />
                        </Flex>
                        <Button text='Contact Us' />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Contact