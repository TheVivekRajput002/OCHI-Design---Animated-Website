import React from 'react'

function About() {
    return (
        <>
            <div className='w-full py-20 px-15 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
                <h1 className='text-[3.8vw] leading-[4.2vw]'>
                    We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
                </h1>


                <div className='flex gap-10 w-full border-t mt-20 border-[#a1b562] py-4'>
                    <div className='w-1/2 '>
                        <h1 className='text-6xl'>Our Approach:</h1>
                        <button className='flex items-center gap-10 px-6 py-4 bg-zinc-800 uppercase mt-6 rounded-full text-white'>Read More
                            <div className='rounded-full w-2 h-2 bg-zinc-100'></div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[70vh] ">
                    <img src="/dashboard_image2.jpg" alt="" className='rounded-lg'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About