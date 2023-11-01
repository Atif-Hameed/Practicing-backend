import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/person-1.svg'
import img2 from '../../assets/person-2.svg'
import img3 from '../../assets/person-3.svg'
import img4 from '../../assets/person-4.svg'

const About = () => {
    return (
        <>
            <div className='xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-24 py-8'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <div className=''>
                        <p className='text-[#5C8FB4] font-semibold' style={{ fontFamily: 'Manrope' }}>About Us</p>
                        <h1 className='lg:text-4xl sm:text-3xl text-xl lg:mt-8 mt-3' style={{ fontFamily: 'Manrope' }}>Empowering Individuals, Building Communities</h1>
                    </div>
                    <div className='flex xl:justify-around justify-end sm:mt-0 mt-3'>
                        <div className='md:w-[100%] flex flex-col sm:gap-4 gap-3'>
                            <p className='lg:text-base text-sm text-[#475467]'>Cross of Miracles is an organization dedicated to supporting individuals with disabilities. Our mission is to empower them, enhance their independence, and promote inclusivity in society.</p>
                            <Link to="">
                                <button className='active:scale-90 transition-all duration-300 border-0 bg-[#231F20] text-white lg:px-5 sm:px-3 px-3 lg:py-2 py-1 lg:text-sm text-xs rounded-3xl'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:gap-x-4 sm:gap-x-4 gap-x-2 sm:mt-24 mt-10'>
                    
                    <div className='flex'>
                        <img src={img1} className='w-full hover:scale-105 transition-all duration-300' alt="" />
                    </div>

                    <div className='grid grid-cols-2 lg:gap-y-4 sm:gap-y-4 gap-y-2'>
                        <div className='col-span-2'>
                            <img src={img2} className='hover:scale-105 transition-all duration-300 w-full h-full lg:rounded-2xl sm:rounded-lg rounded-md object-cover' alt="" />
                        </div>
                        <div className='grid grid-cols-2 lg:gap-x-4 sm:gap-x-4 gap-x-2 col-span-2'>
                            <div className='col-span-1'>
                                <img src={img3} className='hover:scale-105 transition-all duration-300 w-full h-full object-cover lg:rounded-2xl sm:rounded-lg rounded-md' alt="" />
                            </div>
                            <div className='col-span-1'>
                                <img src={img4} className='hover:scale-105 transition-all duration-300 w-full h-full object-cover lg:rounded-2xl sm:rounded-lg rounded-md' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
