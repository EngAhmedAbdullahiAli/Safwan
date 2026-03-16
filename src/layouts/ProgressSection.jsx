import React from 'react'
import ProgressBar from '../components/ProgressBar'
import Container from '../components/Container'
import Flex from '../components/Flex'
const ProgressSection = () => {
  return (
   <section className='pb-[10px]'>
     <Container>
        <Flex className='justify-be'>
            <ProgressBar percentage='70%' title='Graphic Design'/>
            <ProgressBar percentage='80%' title='Web Designing'/>
            <ProgressBar percentage='100%' title='Brand Design'/>
            <ProgressBar percentage='90%' title='Web Development'/>
        </Flex>
    </Container>
   </section>
  )
}

export default ProgressSection