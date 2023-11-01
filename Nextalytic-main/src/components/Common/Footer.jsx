import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='sm:pt-12 pt-6 sm:pb-8 pb-4 xl:px-24 lg:px-16 sm:px-8 px-4'>
                <div className='flex flex-col items-center sm:gap-8 gap-6'>
                    <img src={logo} alt="" />
                    <div className='flex text-gray-500 s sm:flex-nowrap flex-wrap sm:gap-8 gap-4 sm:text-lg text-sm'>
                        <Link to="" className='hover:text-[#FC9702]' >
                            <p>Home</p>
                        </Link>
                        <Link to="" className='hover:text-[#FC9702]' >
                            <p>About Us</p>
                        </Link>
                        <Link to="" className='hover:text-[#FC9702]' >
                            <p>Services</p>
                        </Link>
                        <Link to="" className='hover:text-[#FC9702]' >
                            <p>Join US</p>
                        </Link>
                        <Link to="" className='hover:text-[#FC9702]' >
                            <p>Blogs</p>
                        </Link>
                        <Link to="" className='hover:text-[#FC9702]' >
                            <p>Privacy</p>
                        </Link>
                    </div>
                </div>
                <div className='sm:mt-12 mt-6  mb-6 h-0.5 bg-gray-200 w-full' ></div>
                <div className='flex sm:flex-row flex-col justify-between sm:gap-0 gap-2'>
                    <p className='text-gray-500'>© 2023 Nextalytic. All rights reserved.</p>
                    <div className='flex  text-gray-500 sm:gap-6 gap-3'>
                        <Link to="">
                            <p>Term</p>
                        </Link>
                        <Link to="" >
                            <p>Privacy</p>
                        </Link>
                        <Link to="" >
                            <p>Cookies</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
