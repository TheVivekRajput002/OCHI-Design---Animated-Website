import React from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='h-screen w-full bg-zinc-900 pt-1'>
            <div className="textstructure mt-45 ml-10">
                {
                    ["we create", "eye opening", "dashboards"].map((items, index) => (
                        <div className="masker ">

                            <div className='w-fit flex items-center'>
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{ease: [0.76, 0, 0.24, 1], duration:1}}
                                        className='top-[1vh] ml-3 mr-3 w-[8vw] relative h-[5vw] bg-red-500'>
                                    </motion.div>
                                )}
                                <h1 key={index} className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter h-full font-bold font-['Founders Grotesk']">{items}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='border-t border-zinc-800 mt-28 flex justify-between items-center px-8 py-3'>
                <p className='text-md font-light tracking-tight leading-none'>Presentation and storytelling agency</p>
                <p className='text-md font-light tracking-tight leading-none'>For innovation teams and global brands</p>
                <div className='flex start items-center gap-1'>

                    <div className='px-4 py-2 border border-zinc-700 rounded-full font-light text-xs capitalize'>Start the project</div>
                    <div className='w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center'>
                        <ArrowUpRight size={20} strokeWidth={2} />

                    </div>
                </div>


            </div>
        </div>
    )
}

export default LandingPage