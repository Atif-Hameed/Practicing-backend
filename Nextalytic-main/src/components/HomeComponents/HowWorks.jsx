import React from 'react'
import img1 from '../../assets/groupImg1.svg'
import img2 from '../../assets/groupImg2.svg'
import img3 from '../../assets/groupImg3.svg'
import { motion } from 'framer-motion'

const CardStruct = (props) => {
    return (
        <>
            <div className='flex relative flex-col w-full lg:h-[26rem] sm:h-[20rem] h-[22rem]'>
                {props.img}
                <div className='lg:py-6 py-3 lg:px-6 px-3 cursor-pointer absolute xl:h-[12rem] lg:h-[15rem] sm:h-[11rem] h-[10rem] xl:bottom-9 sm:bottom-4 bottom-0 flex flex-col gap-3 border-2 border-gray-200 rounded-3xl bg-white hover:border-[#FC9702]'>
                    <div className='flex gap-3 text-[#FC9702] font-semibold lg:text-sm text-xs' style={{ fontFamily: 'Manrope' }}>
                        <span>21 Jul 2023</span><span>Team Building</span>
                    </div>
                    <h1 className='lg:text-xl text-base font-semibold text-[#181818]'>
                        {props.heading}
                    </h1>
                    <p className='text-[#636363] lg:text-base text-sm'>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}

const HowWorks = () => {

    const scaleVariants = {
        whileInView: {
            scale: [1, 1],
            y: [100, 0],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>
            <div className='py-20 xl:px-24 lg:px-16 sm:px-8 px-4'>
                <div className='flex flex-col items-center justify-center gap-5' style={{ fontFamily: 'Manrope' }}>
                    <h1 className='text-[#101828] font-semibold text-3xl text-center'>How it Works</h1>
                    <p className='text-[#667085] text-lg xl:w-[40%] lg:w-[60%] text-center'>Efficient process, tailored solutions, outstanding results.Guaranteed satisfaction!</p>
                </div>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-8  xl:gap-8 lg:gap-6 gap-4 mt-12'>
                    <CardStruct
                        img={<img src={img1} alt='' />}
                        heading="Striking and Rolling Pins"
                        text="2022 Q1 Team Building @ Taroko Two of the teams went for a DIY baking 🍰 experience for Taroko’s..."
                    />
                    <CardStruct
                        img={<img src={img2} alt='' />}
                        heading="2021 Holiday Video Recaps"
                        text="Taroko closed out the Lunar calendar with a Casino themed 尾牙 before heading into a week of 春節耍廢..."
                    />
                    <CardStruct
                        img={<img src={img3} alt='' />}
                        heading="The Taroko BBQ Bash"
                        text="The Taroko head office celebrated a beautiful March afternoon with a rooftop barbecue."
                    />
                </motion.div>
            </div>
        </>
    )
}

export default HowWorks
