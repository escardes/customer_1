"use client"

import { destinationData } from '@/data/data';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1034, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const InspirationSlider = () => {
  return (
    <Carousel responsive={responsive}
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
    >
        {destinationData.map((data)=>{
            return <div className='m-3' key={data.id}>
                <div className='relative h-[400px]'>
                    {/** overlay */}
                    <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
                    {/** Image */}
                    <Image 
                      src={data.image}
                      alt = {data.title}
                      width = {500}
                      height ={500}
                      className ="h-full w-full object-cover rounded-lg hover:bg-gray-100"
                    />
    
                </div>
                {/** test Content */}
                <h1 className='text-lg font-semibold mt-4'>{data.title}</h1>
                <p className='text-sm text-gray-600'>{data.workTime}</p>
            </div>
        })}
    </Carousel>
  )
}

export default InspirationSlider