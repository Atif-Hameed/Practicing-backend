import React from 'react'
import img1 from '../../assets/whyChoose1.svg'
import img2 from '../../assets/whyChoose2.svg'
import img3 from '../../assets/whyChoose3.svg'
import img4 from '../../assets/whyChoose4.svg'

const WhyChoose = () => {
    return (
        <>
            <div className='xl:px-24 lg:px-16 sm:px-8 px-4 py-32'>
                <div className='flex items-center lg:flex-nowrap flex-wrap justify-between  xl:px-4'>
                    <div className=' w-full '>
                        <h1 className='lg:text-3xl text-2xl text-gray-900 xl:w-[88%] font-semibold xl:mb-0 mb-4'style={{fontFamily: 'Manrope'}}>Why Choose <span className='text-color3'>Filament & BearPlex</span> For Your Development?</h1>
                    </div>
                    <div className='flex lg:justify-end justify-start  w-full'>
                        <div className='flex gap-4'>
                        <img src={img2} className='w-[2.8rem]' alt="" />
                        <img src={img1} className='w-[2.8rem]' alt="" />
                        <img src={img3} className='w-[2.8rem]' alt="" />
                        <img src={img4} className='w-[2.8rem]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-3 grid-cols-1 xl:gap-x-16 sm:gap-y-0 gap-y-5 mt-12'>
                    <div>
                        <div className='flex flex-col sm:gap-3 gap-2 xl:w-[85%] sm:w-[85%]'>
                            <h1 className='xl:text-2xl text-xl font-semibold text-[#101828]'style={{fontFamily: 'Manrope'}}>Expertise in TALL Stack</h1>
                            <p className='text-[#475467] text-base'>BearPlex masters the TALL Stack to create robust full-stack apps effortlessly, thanks to Filament's tools.</p>
                        </div>
                    </div>
                    <div >
                        <div className='flex flex-col sm:gap-3 gap-2 xl:w-[85%] sm:w-[85%]'>
                            <h1 className='xl:text-2xl text-xl font-semibold text-[#101828]'style={{fontFamily: 'Manrope'}}>All-in-One Solutions</h1>
                            <p className='text-[#475467] text-base'>Tired of repetitive, piecemeal solutions? We harness Filament's all-in-one package to expedite the development process. </p>
                        </div>
                    </div>
                    <div className='flex sm:justify-around'>
                        <div className='flex flex-col sm:gap-3 gap-2 xl:w-[100%] sm:w-[85%]'>
                            <h1 className='xl:text-2xl text-xl font-semibold text-[#101828]'style={{fontFamily: 'Manrope'}}>Built for Scalability</h1>
                            <p className='text-[#475467] text-base'>Using Filament's multi-tenancy features, we can build scalable applications, including subscription billing, without hassle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose
