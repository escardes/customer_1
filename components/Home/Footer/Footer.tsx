import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='container mx-auto pt-16 pb-8 mb-5 mt-2 bg-gradient-to-tl from-amber-100 to-amber-900 transition-all duration-300 hover:bg-gradient-to-r text-white/70 rounded-md'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/** 1st part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className=' font-medium cursor-pointer text-sm'>
                    About Us
                </p>
                <p className='font-medium cursor-pointer text-sm'>
                    Careers
                </p>
                <p className='font-medium cursor-pointer text-sm'>
                    Blogs 
                </p>
                <p className='font-medium cursor-pointer text-sm '>
                    Estimate
                </p>
                <p className='font-medium cursor-pointer text-sm'>
                    Team
                </p>
            </div>
            {/** 2nd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='font-medium cursor-pointer text-sm'>
                    Contact
                </p>
                <p className=' font-medium cursor-pointer text-sm'>
                    Legal Notice
                </p>
                <p className='font-medium cursor-pointer text-sm '>
                    Privacy Policy
                </p>
                <p className='font-medium cursor-pointer text-sm '>
                    Terms & Conditions
                </p>
                <p className='font-medium cursor-pointer text-sm '>
                    Map
                </p>
            </div>
            
            {/** 4th part */}
            <div>
                <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm'> Our Mobile Number</h1>
                    <h1 className=' flex text-base font-bold mt-1'>
                    <FaPhoneAlt />+1 632 653 5632
                    </h1>
                </div>
                <div className='mt-6'>
                    <h1 className='text-sm'> Our Email Address</h1>
                    <h1 className='text-base font-bold  mt-1'>
                        info@groupykn.com
                    </h1>
                </div>
            </div>
        </div>
        {/** Bottom Section */}
        <div className='mt-8 w-[80%] mx-auto border-black border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>
                Copyright &copy;{ new Date().getFullYear()} Group Y.K.N Services LLC. All rights reserved
            </p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <Link href="https://www.facebook.com" className="text-gray-500 hover:text-gray-800">
                    <FaFacebook />
                </Link>
                <Link href="https://www.twitter.com" className="text-gray-500 hover:text-gray-800">
                    <FaTwitter />
                </Link>
                <Link href="https://www.linkedin.com" className="text-gray-500 hover:text-gray-800">
                    <IoLogoLinkedin />
                </Link>
                <Link href="https://www.instagram.com" className="text-gray-500 hover:text-gray-800">
                    <FaInstagram />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer