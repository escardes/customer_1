
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/** Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50'></div>
        {/** video */}
        <video 
          src="/images/hero2.mp4" 
          autoPlay 
          muted 
          loop 
          preload='metadata' 
          className='w-full h-full object-cover'>
        </video>
        {/** Text Content */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
                <div data-aos="fade-up">
                    <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.5rem] text-white font-bold'>
                        Group Y.K.N Services LLC, The Best Choice around
                    </h1>
                    <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>
                        Get your place renovated or remodeled in second, nationwide
                    </p>
                </div>
                {/** New catalogue */}
                <Link href="/Catalogue" className='rounded px-14 md:px-28 mt-6 py-2.5 
                    overflow-hidden group bg-rose-600 
                    relative hover:bg-gradient-to-r hover:from-red-500
                    hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 
                    hover:ring-red-400 transition-all ease-out duration-300'>
                    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000
                      transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                    <span className='relative font-bold [word-spacing:7px]'>Review Catalogue Design</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero