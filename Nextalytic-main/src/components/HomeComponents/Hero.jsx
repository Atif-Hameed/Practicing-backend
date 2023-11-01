import React from 'react'
import '../../App.css'
import Roket from '../../assets/roket.svg'
import {motion} from 'framer-motion'
import Navbar from '../Common/Navbar'

const Hero = () => {

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>
            <div className='w-full sm:h-screen' >
                <div className='hero-bg w-full flex flex-col sm:h-full xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-8 py-0 sm:pb-0 pb-4'>
                    <Navbar />

                    <div className='sm:mt-0 mt-4 flex xl:gap-6 gap-0 items-center sm:px-6 px-2 sm:flex-grow sm:flex-nowrap flex-wrap'>
                        <div className='xl:w-1/2 lg:w-[70%] sm:w-[60%] w-full'>
                            <div className='flex flex-col lg:gap-2 sm:gap-3 gap-2'>
                                <h1 className=' lg:text-3xl md:text-2xl sm:text-lg text-[#F1B15E] font-semibold' style={{ fontFamily: 'Manrope' }}>Accelerated</h1>
                                <h1 className='xl:text-4xl lg:text-[2.4rem] md:text-[1.7rem] text-[1.45rem]  text-[#101828] font-semibold xl:leading-snug' style={{ fontFamily: 'Manrope' }}>SaaS Product Development with Filament</h1>
                                <p className='sm:text-base text-sm lg:w-[95%]'>We leverage Filament's full-stack components to bring your app vision to life. Experience accelerated development like never before.</p>
                                <button className='active:scale-90 transition-all duration-300 lg:mt-4 md:mt-3 mt-2 w-fit border-0 bg-black text-white lg:px-5 md:px-4 px-3 lg:py-2.5 py-2 sm:text-base text-sm rounded-3xl'>Discover More</button>
                            </div>
                        </div>

                        <motion.div
                            variants={scaleVariants}
                            whileInView={scaleVariants.whileInView}
                            className='xl:w-1/2 lg:w-[30%] sm:w-[40%] w-full flex sm:justify-end justify-center'>
                            <img src={Roket} className='lg:w-[17rem] w-[15rem]' alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
