import React from 'react'

const Catalogue = () => {
  return (
    <div className='w-full h-[360vh]'>
      <div className='relative w-full h-[12vh] bg-[#766e6e]'></div>
      <div className='container  relative flex flex-col w-full h-[115vh] mx-auto bg-[#e7e7e6] items-center justify-center'> 
      <div>Content 1 will be posting very soon!</div>
        <em>C.E.O Eureka M Kabeya</em>
      </div>
      <div className='container  relative flex flex-col w-full h-[115vh] mx-auto bg-[#cecece] items-center justify-center top-2'> 
      <div>Content 2 will be posting very soon!</div>
        <em>C.E.O Eureka M Kabeya</em>
      </div>
      <div className='container relative flex flex-col w-full h-[115vh] mx-auto bg-[#cacac8] items-center justify-center top-5'> 
        <div>Content 3 will be posting very soon!</div>
        <em>C.E.O Eureka M Kabeya</em>
      </div>
    </div>
  )
}

export default Catalogue