import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import AboutImage1 from '../assets/AboutImage1.png'
import AboutImage2 from '../assets/AboutImage2.png'
import AboutImage3 from '../assets/AboutImage3.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Button from '../components/Button'
import CVdownload from '../assets/Cv.pdf'
const AboutLayout = ({ text }) => {
    return (
        <div>
            <section className='mb-[80px]'>
                <Container>
                    <Flex>
                        <div className='w-1/2'>
                            <Flex className='justify-between'>
                                <Image src={AboutImage1} />
                                <div>
                                    <Image className='mb-[30px]' src={AboutImage2} />
                                    <Image src={AboutImage3} />
                                </div>
                            </Flex>
                        </div>

                        <div className='w-1/2'>
                            <div className='px-[30px] pt-[10px]'>
                                <SubHeading className="!text-left" text="About Me" />
                                <Heading className="!text-left w-[570px] leading-[56px] font-medium  " text="I Enjoy Solving Problems With Scalable Solutions" />
                                <div className='w-[570px]'>
                                    <p className='text-base text-[#00413D] font-Jost font-normal pt-1'>Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                                    aeci velit, sed quia non numquam eius modi tempora incidunt lao
                                    magnam aliquam quaerat voluptatem reprehenderit.</p>
                                   <p className='text-base text-[#00413D] font-Jost font-normal pt-4 pb-[50px]'> Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                                    reprehenderit non numquam eius.</p>
                                </div>
                                <a download href={CVdownload}><Button className="pt-[20px]"  text="Download CV"/></a>
                            </div>
                        </div>
                    </Flex>
                </Container>
            </section>
        </div>
    )
}

export default AboutLayout