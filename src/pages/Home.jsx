import React from 'react'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import StatsSection from '../components/StatsCounter'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'


const Home = () => {
  return (
   <>
   <HeroSection/>
   <About/>
   <WhyChooseUs/>
   <Service/>
   <StatsSection/>
   </>
  )
}

export default Home