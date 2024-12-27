"use client"

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GoRead } from 'react-icons/go'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { FaHome } from "react-icons/fa";


type Props ={
    openNav: () => void
}

const Nav = ({openNav}:Props) => {

    

    const [navBag, setNavBag] = useState(false)
    


    useEffect(()=>{
        const handler = () =>{
            if(window.scrollY >= 90) setNavBag(true);
            if(window.scrollY < 90) setNavBag(false);
            
        }
        window.addEventListener('scroll', handler);
        return  () => window.removeEventListener("scroll",handler)
    }, [])


  return (
    <div className={` ${navBag?"bg-amber-400 shadow-md":"backdrop-blur-md fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full top-0`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/** Logo */}
            <Link href="/">
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center flex-col'>
                        <FaHome  className='w-6 h-6 z-10 text-white '/>
                    </div>
                    <h1 className='text-xl md:text-2xl text-black/50 font-bold'>Group Y.K.N</h1>
                </div>
            </Link>
            {/** NavLinks */}
            <div  className='hidden lg:flex items-center space-x-10 '>
                {navLinks.map((link)=>{
                    return <Link href={link!.url} key={link!.id}>
                        <p className="relative 
                      text-black/50 text-base font-medium w-fit 
                      block after:block after:content-[''] after:absolute 
                      after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 
                      after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                        {link!.label}
                    </p>
                    </Link>
                })}
            </div>
            {/** Button */}
            <div className='flex items-center space-x-4'>
                {/** adding a dropdown menu on our button */}
              <button className='md:px-12 md:py-2.5 px-8 py-2 text-white text-base bg-gray-500 hover:bg-gray-400 transition-all duration-300 rounded-lg'>
                {/** Add link to send email */}
                <GoRead />
              </button>
              {/** Burger Menu */}
              <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav