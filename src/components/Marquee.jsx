import React from 'react'
import { motion } from 'framer-motion'


const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.1" className='py-15  w-full bg-[#004D43] rounded-tl-2xl rounded-tr-2xl'>
            <div className='border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
                <motion.h1
                    className='uppercase text-[30vh] leading-none font-bold '
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                >We are OCHI</motion.h1>
                <motion.h1
                    className='ml-10 uppercase text-[30vh] leading-none font-bold '
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
                >We are OCHI</motion.h1>
            </div>

        </div>
    )
}

export default Marquee