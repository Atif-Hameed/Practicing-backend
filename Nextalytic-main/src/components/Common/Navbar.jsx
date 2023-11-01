import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'
import { FiArrowUpRight } from 'react-icons/fi';
import { MdExpandMore } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='w-full flex justify-between items-center'>
                <div className='sm:w-[20%] w-[30%]'>
                    <img src={Logo} alt="" className='h-[4rem]' />
                </div>
                <div className='sm:w-[80%] w-[70%] flex lg:justify-between justify-end lg:gap-0 sm:gap-10 gap-4 items-center'>
                    <div className='w-[73%] lg:flex  justify-end hidden gap-6 text-lg items-center'>
                        <Link to="/" activ>
                            <h1>Home</h1>
                        </Link>
                        <Link to="/about" activ>
                            <h1>About us</h1>
                        </Link>
                        <h1 className='flex gap-1 items-center'>
                            Services<MdExpandMore className='mt-1' />
                        </h1>
                        <Link to="/addStudent" activ>
                            <h1>Add Student</h1>
                        </Link>
                        <Link to="/historyStudent" activ>
                            <h1>History</h1>
                        </Link>
                    </div>

                    <Link to="" className='gap-1.5 flex items-center hover:scale-90 transition-all duration-300 bg-[#FC9702] sm:py-2.5 py-2 sm:px-3.5 px-3 text-white rounded-3xl'>
                        <button className='border-0 sm:text-base text-xs' >Get in touch</button>
                        <FiArrowUpRight className='sm:text-lg text-base' />
                    </Link>


                    <div className='lg:hidden block'>
                        <HiOutlineMenuAlt3 onClick={() => setIsOpen(true)} className='sm:text-4xl text-2xl' />
                    </div>
                    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
                        <div className='sm:w-[15rem] w-[12rem] sm:text-3xl text-2xl h-full bg-[#faf0e4] flex flex-col gap-10 items-center pt-4 '>
                            <div>
                                <img src={Logo} className='h-[5rem]' alt="" />
                            </div>
                            <Box className='flex flex-col sm:gap-12 gap-8'>
                                <Link to="/" activ>
                                    <h1>Home</h1>
                                </Link>
                                <Link to="/about" activ>
                                    <h1>About us</h1>
                                </Link>
                                <h1 className='flex gap-1 items-center'>
                                    Services<MdExpandMore className='mt-1' />
                                </h1>
                                <Link to="/about" activ>
                                    <h1>Add Student</h1>
                                </Link>
                                <Link to="/about" activ>
                                    <h1>History</h1>
                                </Link>
                            </Box>
                        </div>
                    </Drawer>
                </div>
            </div>
        </>
    )
}

export default Navbar
