import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='pt-20 pb-20'>
        {/** Section Heading */}
        <SectionHeading heading='Explore Our Finished Designs From Our Hard-working Team' headingBellow='Sweat or not sweat we make it happen at Group Youri Lemba LLC'/>
        {/** Our Work Design  */}
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
           lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16 '
        >
            {/** HoteCard */}
            {hotelsData.map((data,i)=>{
                return <div key={data.id} 
                   data-aos = "fade-right" 
                   data-aos-anchor-placement="top-center"
                   data-aos-delay={`${i*100}`}
                   >
                    <WorkCard  work={data}/>
                </div>
            })}
        </div>
    </div>
  )
}

export default Work