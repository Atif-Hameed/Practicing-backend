import React from 'react'
import img1 from '../../assets/feature1.svg'
import img2 from '../../assets/featureImg.svg'
import img3 from '../../assets/featureImg2.svg'
import img4 from '../../assets/featureImg3.svg'
import img5 from '../../assets/featureImg4.svg'
import img6 from '../../assets/featureImg5.svg'
import { motion } from 'framer-motion'


const CardStruct = (props) => {
    return (
        <>
            <div className='flex flex-col border-2 border-[#ECF1F5] lg:w-[24rem] xl:rounded-3xl rounded-2xl'>
                <div className='w-fit'>
                    {props.img}
                </div>
                <div className='lg:px-8 px-4 py-8 flex flex-col gap-2'>
                    <h1 className='lg:text-2xl text-[#101828] font-semibold' style={{ fontFamily: 'Manrope' }}>
                        {props.heading}
                    </h1>
                    <p className=' text-[#475467] xl:text-lg'>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}


const Features = () => {

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
            <div className='bg-[#FCFCFC] xl:px-24 lg:px-16 sm:px-8 px-4 py-12'>
                <h1 className='text-2xl font-semibold text-center' >Filament Features</h1>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center sm:gap-y-12 gap-y-8 lg:gap-x-8 gap-x-4 sm:mt-10 mt-6'>
                    <div className='flex justify-center'>
                        <CardStruct
                            img={<img src={img1} className='w-full' alt='' />}
                            heading="Panel Builder"
                            text="Craft your ideal admin panel or customer-facing app. BearPlex utilizes Filament's Panel Builder to customize every aspect of your project."
                        />
                    </div>
                    <div className='flex justify-center'>
                        <CardStruct
                            img={<img src={img2} className='w-full' alt='' />}
                            heading="Form Builder"
                            text="Say goodbye to form fatigue. We use Filament's Form Builder to create sleek, Livewire-powered forms tailored to your needs."
                        />
                    </div>
                    <div className='flex justify-center'>
                        <CardStruct
                            img={<img src={img3} className='w-full' alt='' />}
                            heading="Table Builder"
                            text="Beautiful, optimized, and interactive Livewire-powered datatables for any situation."
                        />
                    </div>
                    <div className='flex justify-center'>
                        <CardStruct
                            img={<img src={img4} className='w-full' alt='' />}
                            heading="Actions"
                            text="Enhance user flow with interactive modals and slide-overs. BearPlex employs Filament's Actions feature to keep users engaged."
                        />
                    </div>
                    <div className='flex justify-center'>
                        <CardStruct
                            img={<img src={img5} className='w-full' alt='' />}
                            heading="Infolist Builder"
                            text="Display read-only information elegantly. BearPlex uses Filament's Infolist Builder for responsive and informative layouts."
                        />
                    </div>
                    <div className='flex justify-center'>
                        <CardStruct
                            img={<img src={img6} className='w-full' alt='' />}
                            heading="Widgets"
                            text="Monitor key metrics in real-time. BearPlex integrates Filament's Widgets to build dashboards complete with charts and stats."
                        />
                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default Features
