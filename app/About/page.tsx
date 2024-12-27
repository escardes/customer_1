
import React from 'react'

export default function About() {
  return (
    <div className='container mx-auto'>
        <div className='w-full h-[12vh]'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full h-[120vh] bg-[#f1efef]'>
            <div className='relative bg-[#e7e7e7] flex flex-col items-center justify-center shadow-lg'>
                <h2 className='text-2xl font-extralight tracking-tight mb-4'>
                   The Group Y.K.N Services LLC best at renovation<em>grid 1</em>
                </h2>
                <div>Write anything about the Group Y.K.N Services</div>
                <p> Write or add paragrath about Group Y.K.N Services</p>
            </div>
            <div className='relative bg-[#d1d0d0] flex flex-col items-center justify-center'>
                <h2 className='text-2xl font-extralight tracking-tight  mb-4'>
                    The Group Y.K.N Services LLC best at remodeling <em>grid 2</em>
                </h2>
                <div>Write anything about the Group Y.K.N Services</div>
                    <p> Write or add paragrath about Group Y.K.N Services</p>
                </div>
                <div className="relative bg-[#ebeaea] flex flex-col items-center justify-center col-span-2">
                    <h2 className='text-3xl font-extralight tracking-tight mb-4'>
                        The Group Y.K.N Services LLC best at cleaning <em>grid 3</em>
                    </h2>
                    <div>Write anything about the Group Y.K.N Services</div>
                    <p> Write or add paragrath about Group Y.K.N Services</p>
                </div>
            </div>
        </div>
  )
}
