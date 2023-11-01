import React from 'react'
import { Link } from 'react-router-dom'

const ShapeAi = () => {
  return (
    <>
      <div className='xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-16 py-10'>
        <div className='bg-[#FEF9F5] flex justify-between sm:flex-nowrap flex-wrap items-center rounded-3xl lg:px-16 sm:px-8 px-4 lg:py-12 py-8' >
                <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-semibold sm:w-[57%] w-[70%]' style={{fontFamily: 'Manrope'}} >Shape The Future Of AI, <span className='text-[#FFB74D]'>Together</span></h1>
                <Link to="">
                    <button className='hover:scale-90 transition-all duration-300 border-0 bg-black text-white lg:px-8 sm:px-4 px-3 lg:py-3 sm:py-2 py-1.5 sm:text-base text-xs rounded-3xl ' >Get Started</button>
                </Link>
        </div>
      </div>
    </>
  )
}

export default ShapeAi
