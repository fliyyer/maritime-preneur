import React, { useEffect } from 'react'
import BgHome from '../../assets/bg-perahu.png'
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
                <div className="md:w-1/2 md:pr-8" data-aos="fade-right" >
                    <p className="text-white font-bold text-4xl md:text-4xl lg:text-6xl mb-4 tracking-wide">MARITIMEPRENEUR</p>
                    <p className="text-white text-center sm:text-left md:text-xl lg:text-3xl mb-4 ">
                        Building <strong>the Nations</strong><br /> <strong>Sustaining Our</strong> Oceans
                    </p>
                </div>
                <div className="md:w-1/2" data-aos="fade-left">
                    <img className="bg-header w-10 hidden sm:block" src={BgHome} alt="gambar perahu" />
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderService
