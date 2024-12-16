import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import InspirationSlider from './InspirationSlider'

const Inspiration = () => {
  return (
    <div className="">
        <div className="pt-20 pb-20">
            {/** Section Heading */}
            <SectionHeading heading='Explore Some of Our Inspirational Works' headingBellow='Group Youri Lemba, the right renovator and remaker of your place'/>
            {/** Section Content */}
            <div className='mt-14 w-[80%] mx-auto'>
                <InspirationSlider />
            </div>
        </div>
    </div>
   
  )
}

export default Inspiration