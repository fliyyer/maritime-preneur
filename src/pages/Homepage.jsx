import React from 'react'
import Footer from '../component/Footer'
import AboutUs from '../component/Homepage/AboutUs'
import Client from '../component/Homepage/Client'
import Header from '../component/Homepage/Header'
import RegisterAt from '../component/Homepage/RegisterAt'
import Service from '../component/Homepage/Service'
import ServiceDetail from '../component/Homepage/ServiceDetail'
import NavBar from '../component/Navbar'

const Homepage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <AboutUs />
            <Service />
            <ServiceDetail />
            <Client />
            <RegisterAt />
            <Footer />
        </div>
    )
}

export default Homepage
