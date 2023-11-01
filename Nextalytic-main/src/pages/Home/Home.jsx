import React from 'react'
import '../../App.css'
import Hero from '../../components/HomeComponents/Hero'
import About from '../../components/HomeComponents/About'
import AiApps from '../../components/HomeComponents/AiApps'
import Features from '../../components/HomeComponents/Features'
import TrustedBy from '../../components/HomeComponents/TrustedBy'
import Offering from '../../components/HomeComponents/Offering'
import WhyChoose from '../../components/HomeComponents/WhyChoose'
import ShapeAi from '../../components/HomeComponents/ShapeAi'
import Testimonials from '../../components/HomeComponents/Testimonials'
import HowWorks from '../../components/HomeComponents/HowWorks'
import Footer from '../../components/Common/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Hero/>
                <TrustedBy/>
                <Offering/>
                <About/>
                <AiApps/>
                <WhyChoose/>
                <Features/>
                <ShapeAi/>
                <Testimonials/>
                <HowWorks/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
