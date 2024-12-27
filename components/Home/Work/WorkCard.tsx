import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';


type Props ={
    work:{
        id:number;
        image:string;
        name:string;
        location:string;
        rating:number;
        reviews:string;
        price:string;
    };
}


const WorkCard = ({work}:Props) => {
  return (
    <div>
        <div className='relative h-[300px] w-full rounded-lg group cursor-pointer overflow-hidden'>
            {/** Add to fav button */}
            <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-gray-600 flex items-center justify-center flex-col'>
                <FaHeart className='w-3 h-3 ' />
            </div>
            {/** overlay */}
            <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
            {/** Image */}
            <Image 
              src={work.image} 
              alt={work.name} 
              width={500} 
              height={500} 
              className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110'
            />
        </div>
        {/** Content */}
        <div>
            <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200'>
                {work.name}
            </h1>
            <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>
                {work.location}
            </p>
            {/** rating */}
            <div className='flex items-center space-x-2'>
                <div className='px-2 py-2 bg-amber-800 rounded-md font-bold text-white text-xs'>
                    {work.rating}
                </div>
                <p className='text-sm text-gray-800'>Exceptional</p>
                <p className='text-sm font-bold text-gray-800'>
                    {work.reviews} Reviews
                </p>
            </div>
            {/** Prices 
            <p className='mt-3 text-gray-700 font-medium '>
                Starting from  <span className='text-blue-600 font-bold'>US${work.price}</span>
             </p>*/}
        </div>
    </div>
  )
}

export default WorkCard