import React from 'react'
import Mobile from '../../assets/mobile.svg'
import '../../App.css'
import { motion } from 'framer-motion'

const Offering = () => {

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
      <div className='bg-[#FEF9F5] xl:px-24 lg:px-16 sm:px-8 px-4 py-16' >
        <div className='grid md:grid-cols-2 xl:gap-x-0 gap-x-6 grid-cols-1 items-center' >
          
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
          >
            <img src={Mobile} className='w-[29rem]' alt="" />
          </motion.div>

          <div className='flex flex-col lg:gap-8 gap-4 xl:pr-20 md:mt-0 mt-8'>
            <h1 className='lg:text-3xl text-2xl font-bold' style={{ fontFamily: 'Manrope' }}>Our Offerings: <span className='text-gradient'>AI-Driven Web &</span> <span className='text-gradient'>Mobile Applications</span></h1>
            <div className='flex flex-col lg:gap-10 gap-4'>
              <div className='flex flex-col sm:gap-3 gap-1.5'>
                <h1 className=' text-xl font-semibold'>OpenAI: Our Trusted Partner</h1>
                <p className='text-[#475467] lg:text-base text-sm'>We're teaming up with OpenAI to bring you the best AI solutions on the market. Our toolbox is filled with top-notch tools like ChatGPT and Whisper API to create apps that are not only smart but also engaging.</p>
              </div>
              <div className='flex flex-col sm:gap-3 gap-1.5'>
                <h1 className=' text-xl font-semibold'>ChatGPT: Talk About Intelligent Conversations</h1>
                <p className='text-[#475467] lg:text-base text-sm'>Let your apps speak their minds! With ChatGPT, we're creating applications that can hold meaningful conversations with users. Say goodbye to static interactions and hello to dynamic, context-aware dialogues.</p>
              </div>
              <div className='flex flex-col sm:gap-3 gap-1.5'>
                <h1 className=' text-xl font-semibold'>Whisper API: AI That Listens to You</h1>
                <p className='text-[#475467] lg:text-base text-sm'>Can you hear that? It's the sound of your app understanding voice commands! Whisper API allows us to develop applications that listen, learn, and act on your users' voice commands – making interactions smoother than ever.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offering
