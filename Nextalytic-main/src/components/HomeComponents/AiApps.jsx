import React from 'react'
import '../../App.css'
import img1 from '../../assets/Ai-1.svg'
import img2 from '../../assets/Ai-2.svg'
import img3 from '../../assets/Ai-3.svg'
import img4 from '../../assets/Ai-4.svg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';
import { motion } from 'framer-motion'


const CardStruct = (props) => {
    const { bgColor, borderColor } = props;

    return (
        <>
            <div className={`rounded-3xl border-2 w-[100%] xl:h-[27.5rem] lg:h-[31rem] h-[28.5rem]  gap-4 px-6 pt-6 pb-1 flex flex-col justify-between`} style={{ backgroundColor: bgColor, borderColor: borderColor }}>
                <div className='h-[12rem]'>
                    {props.img}
                </div>
                <div className='flex-grow flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold' style={{ fontFamily: 'Manrope' }}>
                        {props.heading}
                    </h1>
                    <p className='text-xl text-[#242424]'>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}


const AiApps = () => {

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

    const settings = {
        infinite: true,
        centerPadding: '50px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        prevArrow: <GrFormPreviousLink className='prev' />,
        nextArrow: <GrFormNextLink className='next' />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='bg-[#FEF9F5]  sm:pt-16 pt-12 sm:pb-32 pb-20'>
                <div className='flex flex-col items-center xl:px-24 lg:px-16 sm:px-8 px-4'>
                    <h1 className='sm:text-3xl text-2xl xl:w-[53%] lg:w-[80%] font-semibold text-center text-[#101828] text-shadow' style={{ fontFamily: 'Manrope' }}>AI Application Examples: <span className='text-color'>The Possibilities</span> <span className='text-color2'>Are Endless!</span></h1>
                    <p className='sm:mt-6 mt-3 text-[#667085] sm:text-xl text-sm text-center'>At BearPlex, we believe in the power of AI to transform industries and improve lives. Check out these examples of AI applications we can build to give you an idea of the amazing solutions we can create together.</p>
                </div>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='w-[100%]  xl:pl-24 lg:pl-16 sm:pl-8 pl-4 sm:pr-0 pr-4'>
                    <Slider className='sm:my-20 my-10 absolute ' {...settings}>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct
                                bgColor="#FFFEFA"
                                borderColor="#E7BF00"
                                img={<img src={img1} alt='' />}
                                heading="AI-Driven E-commerce"
                                text="Revolutionize shopping with our AI-powered platform that provides personalized recommendations and dynamic pricing."
                            />
                        </div>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct
                                bgColor="#F5F4FF"
                                borderColor="#ABA7F3"
                                img={<img src={img2} alt='' />}
                                heading="Healthcare AI Solutions"
                                text="Enhance healthcare outcomes with AI-driven tools that aid in diagnostics, predict risks, optimize treatment plans, and simplify administrative tasks."
                            />
                        </div>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct
                                bgColor="#F8FEFF"
                                borderColor="#A6BBBE"
                                img={<img src={img3} alt='' />}
                                heading="EdTech Innovations"
                                text="Transform education with AI-powered EdTech solutions offering personalized learning, progress tracking, and real-time feedback to unlock learner potential."
                            />
                        </div>
                        <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                            <CardStruct
                                bgColor="#FAFFED"
                                borderColor="#AED146"
                                img={<img src={img4} alt='' />}
                                heading="Smart Agriculture"
                                text="Maximize yield for farmers with AI-driven agriculture tools that analyze soil, predict weather, and recommend best practices for crop management."
                            />
                        </div>

                    </Slider>
                </motion.div>
            </div>
        </>
    )
}

export default AiApps
