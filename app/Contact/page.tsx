"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {

    
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      //👇🏻 log the user's input
      try {
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, subject, content }),
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error(error);
        alert("An error occurred, please try again later");
    }
    setName("");
    setEmail("");
    setSubject("");
    setContent("");
    console.log({ name, email, subject, content });
  };

  return (
    <div className='relative'>
      <div className=' grid grid-cols-1 md:grid-cols-2'>
        <div className="relative inset-auto w-[90%] h-[140vh] m-auto min-h-screen flex items-center justify-center">
          <div className="absolute w-full h-full transition-all duration-300 rounded-sm  hover:blur-sm z-10"></div>
          <div className=" z-40">


            {/** 
            <Image 
              src='/images/renovate39.png' 
              alt="Image not found" 
              width={500} 
              height={500}
              priority
              className="w-full h-full object-cover rounded-full shadow-lg"
            />*/}
            <div className="relative pt-5 pb-3 font-bold w-full h-full flex flex-col text-bold text-3xl bg-amber-300 rounded-lg z-20 items-center justify-center">CONTACT US
              
                 <p className='text-xl font-bold'>ADDRESS:</p>
                 <p className='text-lg'>1719 Route 10 East Suite 100</p>
                 <p className='text-lg'>Parsippany, NJ 07054</p>
            
              
                <p className='text-xl'>PHONE:</p>
                <p className='text-lg'>+1 928-456-3875</p>
              
              
                <p className='text-xl font-bold'>FAX:</p>
                <p className='text-lg'>+1 973-267-4202</p>
                <p className='text-xl'>Email:</p>
                <p className='text-lg'>info@groupyknllc.com</p>
            </div>
          </div>
        </div>
      <div className="relative w-[90%] mx-auto min-h-screen flex items-center justify-between">
        <form className='w-full' onSubmit={handleSubmit}>
          <label htmlFor='name' className='opacity-60'>
            Full Name
          </label>
          <input
            type='text'
            placeholder="Name"
            className='w-full px-4 py-3 border-[1px] mb-3 border-gray-300 bg-gray-300 rounded-sm'
            id='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor='email' className='opacity-60'>
            Email Address
          </label>
          <input
            type='email'
            placeholder="Email"
            className='w-full px-4 py-3 border-[1px] mb-3 border-gray-300 bg-gray-300 rounded-sm'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor='subject' className='opacity-60'>
            Subject
          </label>
          <input
            type='text'
            className='w-full px-4 py-3 border-[1px] mb-3 border-gray-300 bg-gray-300 rounded-sm'
            id='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label htmlFor='message' className='opacity-60'>
            Message
          </label>
          <textarea
            rows={7}
            className='w-full px-4 py-3 border-[1px] mb-3 border-gray-300 rounded-sm bg-gray-300'
            id='message'
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className= 'w-full bg-[#847600] py-4 px-3 rounded-md font-bold text-blue-50 transition-all duration-700 hover:scale-105'>
            SEND MESSAGE
          </button>
        </form>
      </div>
                
    </div>
    </div>
    
  )
}

export default Contact