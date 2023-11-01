import React from 'react'
import img1 from '../../assets/commas.svg'
import avatar from '../../assets/avatar1.svg'
import avatar2 from '../../assets/avatar2.svg'
import avatar3 from '../../assets/avatar3.svg'
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../../App.css'
import { motion } from 'framer-motion'


const CardStruct = (props) => {
    return (
        <>
            <div className='w-[100%] relative py-10 sm:mt-16 mt-8'>
                <img src={img1} className='absolute top-0 left-8' alt="" />

                <div className='border-2 cursor-pointer border-[#EAECF0] bg-[#FFFFFF] rounded-3xl px-6 py-8 hover:border-[#FC9702]'>
                    <p className='text-[#636363] text-base'>
                        {props.text}
                    </p>

                    <div className='h-0.5 w-full my-8 bg-[#EAECF0]' ></div>

                    <div className='flex gap-3 items-center'>
                        {props.avatar}
                        <div className='flex flex-col'>
                            <h1 className='text-base font-semibold' style={{ fontFamily: 'Manrope' }}>
                                {props.name}
                            </h1>
                            <p className='text-[#636363] text-sm font-semibold'>
                                {props.post}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Testimonials = () => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: <GrFormPreviousLink className='prev' />,
        nextArrow: <GrFormNextLink className='next' />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='bg-[#FEF9F5] xl:px-24 lg:px-16 sm:px-8 px-4 sm:pt-16 pt-8 sm:pb-36'>
                <div>
                    <h1 className='text-[#181818] sm:text-4xl text-2xl font-semibold xl:w-1/2 lg:w-[70%]'>Voices of our Team - Employee Testimonials</h1>
                </div>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='w-[100%]'>
                    <Slider className='' {...settings}>
                        <div className='xl:px-4 sm:px-3'>
                            <CardStruct
                                text="“I've worked for this company for over five years now and can honestly say it's been the best experience of my career. The management team truly cares about its employees.”"
                                avatar={<img src={avatar} className='w-[3rem]' alt='' />}
                                name="Mihai Sterian"
                                post="Director of Marketing"
                            />
                        </div>
                        <div className='xl:px-4 sm:px-3'>
                            <CardStruct
                                text="“Having been a part of this company for more than seven years, I can confidently affirm that it has been an unparalleled journey, surpassing all my career expectations.”"
                                avatar={<img src={avatar2} className='w-[3rem]' alt='' />}
                                name="Samuele Zaza"
                                post="Director of Engineering"
                            />
                        </div>
                        <div className='xl:px-4 sm:px-3'>
                            <CardStruct
                                text="“I can genuinely proclaim that it has been a transformative chapter in my career.  Concern exhibited by the management team to its employees sets an exemplary standard.”"
                                avatar={<img src={avatar3} className='w-[3rem]' alt='' />}
                                name="Howard Davies"
                                post="Director of Operations"
                            />
                        </div>
                        <div className='xl:px-4 sm:px-3'>
                            <CardStruct
                                text="“I've worked for this company for over five years now and can honestly say it's been the best experience of my career. The management team truly cares about its employees.”"
                                avatar={<img src={avatar} className='w-[3rem]' alt='' />}
                                name="Mihai Sterian"
                                post="Director of Marketing"
                            />
                        </div>
                        <div className='xl:px-4 sm:px-3'>
                            <CardStruct
                                text="“Having been a part of this company for more than seven years, I can confidently affirm that it has been an unparalleled journey, surpassing all my career expectations.”"
                                avatar={<img src={avatar2} className='w-[3rem]' alt='' />}
                                name="Samuele Zaza"
                                post="Director of Engineering"
                            />
                        </div>
                        <div className='xl:px-4 sm:px-3'>
                            <CardStruct
                                text="“I can genuinely proclaim that it has been a transformative chapter in my career.  Concern exhibited by the management team to its employees sets an exemplary standard.”"
                                avatar={<img src={avatar3} className='w-[3rem]' alt='' />}
                                name="Howard Davies"
                                post="Director of Operations"
                            />
                        </div>

                    </Slider>
                </motion.div>

            </div>
        </>
    )
}

export default Testimonials
