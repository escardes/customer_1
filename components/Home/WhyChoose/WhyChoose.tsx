import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
        {/** section heading */}
        <SectionHeading heading='Why Choose Us' headingBellow='At Group Youri Lemba LLC, we never disappoint our customers'/>
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            {/** why choose  card*/}
            <div data-aos = "fade-up" data-aos-anchor-placement="top-center">
                <WhyChooseCard image ="/images/c1.svg" title="Best Price Guarantee" text='Get your house renovated or remodeled at very low price around, nationwide'/>
            </div>
            <div data-aos = "fade-up" data-aos-anchor-placement="top-center" data-aos-delay = "150">
                <WhyChooseCard image ="/images/c2.svg" title="Easy & Quick Schedule" text='At Group Youri Lemba LLC, we are always time as soon we got your contact, so let&apos;s do your hard work'/>
            </div>
            <div data-aos = "fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <WhyChooseCard image ="/images/c3.svg" title="Customer Care for 24/7" text='At Group Youri Lemba LLC, we got you cover no matter what is the time or the place nationwide, we can get there before finishing your sentences'/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose