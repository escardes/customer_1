import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className={`pt-20 pb-20 flex items-center justify-center flex-col bg-gradient-to-r from-amber-300 to-amber-700`}>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            {/** Text Content */}
            <div>
                <h1 className='text-3xl font-semibold text-white'>
                    What Our Customers Are Saying about Us
                </h1>
                <p className='mt-6 text-white text-2xl'>
                    For the complete satisfaction in our services given to our 
                    devoted customers in terms of renovation and Remodel our amazing hard-working 
                    team at Group Y.K.N Services LLC for a place renovation or Remodel.
                </p>
                {/** Rating */}
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className='text-white mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-amber-900' />
                            <FaStar className='text-amber-900' />
                            <FaStar className='text-amber-900' />
                            <FaStar className='text-amber-900' />
                            <FaStar className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
            {/** Slider */}
            <div className='overflow-hidden'>
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Review