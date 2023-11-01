import React from 'react'
import Navbar from './Navbar'
import stars from '../../assets/stars-bg.svg'

const Hero = () => {
    return (
        <>
            <div className='w-full sm:h-screen' >
                <div className='hero-bg2 relative w-full flex flex-col sm:h-full xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-8 py-0 sm:pb-0 pb-4'>
                    <Navbar />
                    <div className='absolute right-0'>
                        <img src={stars} className='' alt="" />
                    </div>
                    <div>
                        <h1 className='h1' style={{ fontFamily: 'Manrope' }}>About Cross of Miracles - Our Journey</h1>
                        <p>Cross of Miracles empowers individuals with disabilities to lead fulfilling lives. We are a leading provider of disability support services with a steadfast mission.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
