import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='pt-16 pb-16'>
        {/** Sectuion heading */}
        <SectionHeading heading='Renovation and Remodel Update' headingBellow='See why you need the choose Group Y.K.N Services LLC for your remodel and renovation'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
           lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'
        >
            <div data-aos = "fade-left" data-aos-anchor-placement="top-center">
                <NewsCard  
                  image="/images/renovate22.png" 
                  title="Best Remodeled House model in New York, USA"
                  date="15 November 2024"
                /> 
            </div>
            <div data-aos = "fade-left" data-aos-anchor-placement="top-center" data-aos-delay ="100">
                <NewsCard  
                  image="/images/renovate40.png" 
                  title="Best Remodeled House Model in Alabama, USA"
                  date="25 November 2024"
                /> 
            </div>
            <div data-aos = "fade-left" data-aos-anchor-placement="top-center"  data-aos-delay ="200">
                <NewsCard  
                  image="/images/renovate25.png" 
                  title="Best Interior Design Ever Seen In the USA"
                  date="22 November 2024"
                /> 
            </div>
            <div data-aos = "fade-left" data-aos-anchor-placement="top-center" data-aos-delay ="300">
                <NewsCard  
                  image="/images/renovate8.png" 
                  title="Best Renovated House Model in Cleveland Ohio USA"
                  date="5 November 2024"
                /> 
            </div>

        </div>
    </div>
  )
}

export default News