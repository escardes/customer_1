"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Inspiration from './Inspiration/Inspiration'
import Work from './Work/Work'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Review'
import News from './News/News'
import Newsletter from './Newsletter/Newsletter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // 

const Home = () => {


  useEffect(()=>{
    const initAOS = async ()=>{
      await import("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"
      });
    };
    initAOS();
  })

  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Inspiration />
        <Work />
        <WhyChoose />
        <Review />
        <News />
        <Newsletter />
    </div>
  )
}

export default Home