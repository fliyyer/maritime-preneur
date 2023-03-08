import React, { useEffect } from 'react'
import BgService from '../../assets/header-ser.png'
import AOS from 'aos'

const HeaderService = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
            <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8" data-aos='fade-right'>
                    <p className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Experience the Best Service with Us!</p>
                    <p className="text-white text-l sm:text-lg mb-8">
                        Let us help you succeed with our range of professional services.
                    </p>
                </div>
                <div className="md:w-1/2" data-aos='fade-left'>
                    <img className="rounded-lg " src={BgService} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderService
