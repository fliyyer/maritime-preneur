import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderService from '../component/Servicepage/HeaderService'
import OurService from '../component/Servicepage/OurService'

const ServicePage = () => {
    return (
        <div>
            <NavBar />
            <HeaderService />
            <OurService />
            <Footer />
        </div>
    )
}

export default ServicePage
