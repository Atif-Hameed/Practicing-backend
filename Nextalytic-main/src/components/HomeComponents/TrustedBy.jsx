import React from 'react'
import WP from '../../assets/wordPress.svg'
import Godady from '../../assets/goDady.svg'
import Vip from '../../assets/vip.svg'
import AWS from '../../assets/aws.svg'
import GooglePart from '../../assets/googlePart.svg'
import Shopify from '../../assets/shopify.svg'
import SquareSpace from '../../assets/squareSpace.svg'
import Woo from '../../assets/wooComerce.svg'

const TrustedBy = () => {
    return (
        <>
            <div className='w-full bg-[#FCFCFC] xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-16 py-6'>
                <div className='flex items-center sm:flex-nowrap flex-wrap'>
                    <div className='xl:w-[25%] lg:w-[35%] sm:w-[40%] w-full flex flex-col lg:gap-3 gap-2'>
                        <h1 className='lg:text-3xl sm:text-2xl text-[#101828]' style={{fontFamily: 'Manrope'}}>Trusted By</h1>
                        <p className='text-[#667085] lg:text-lg lg:w-[80%] lg:leading-7'>Here are the Companies that trust with Bearplex</p>
                    </div>
                    <div className='sm:mt-0 mt-3 xl:w-[80%] lg:w-[65%] w-full flex justify-end'>
                        <div className='sm:w-[80%] grid sm:grid-cols-4 grid-cols-3 gap-x-4 lg:gap-y-6 sm:gap-y-4 gap-y-2 items-center justify-center'>
                            <div className='flex justify-center'>
                                <img src={WP} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={SquareSpace} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={Woo} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={AWS} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={Shopify} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={Vip} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={GooglePart} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                            <div className='flex justify-center'>
                                <img src={Godady} className='hover:scale-110 cursor-pointer transition-all duration-300' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrustedBy
