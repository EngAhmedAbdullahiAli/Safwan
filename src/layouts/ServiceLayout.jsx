import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ServiceCard from '../components/ServiceCard'
import ServiceImage1 from '/ServiceImage1.png'
import ServiceImage2 from '/ServiceImage2.png'
import ServiceImage3 from '/ServiceImage3.png'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
const ServiceLayout = () => {
    return (
        <div>

            <section className=' pb-[120px]'>
                <Container>
                    <SubHeading text="MY SERVICES"/>
                    <Heading text="Provide Wide Range of Digital Services"/>
                    <Flex className='justify-between pt-10'>
                        <ServiceCard src={ServiceImage1} title="Ui/Ux Design" text="Dolor repellendus tempo ribus aue
                                quibusdam offi ciis debitis rerum na
                                aibus minima veniam." />
                        <ServiceCard src={ServiceImage2} title="Mobile App Design" text="Dolor repellendus tempo ribus aue
                                     quibusdam offi ciis debitis rerum na
                                    aibus minima veniam."/>
                        <ServiceCard src={ServiceImage3} title="Web Design" text="Dolor repellendus tempo ribus aue
                                quibusdam offi ciis debitis rerum na
                                 aibus minima veniam." />
                    </Flex>
                </Container>
            </section>

        </div>
    )
}

export default ServiceLayout