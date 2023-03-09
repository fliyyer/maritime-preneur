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
        <div className="bg-cover bg-center flex justify-center items-center min-h-screen bg-service">
            <div className="container -mt-10 mb-20 mx-auto px-6 sm:px-20 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8" data-aos="fade-right" >
                    <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8 tracking-wider">MARITIMEPRENEUR</p>
                    <p className="text-white text-center text-xl sm:text-left md:text-2xl lg:text-3xl">
                        Building <strong>the Nations</strong><br /> <strong>Sustaining Our</strong> Oceans
                    </p>
                </div>
                <div className="md:w-1/2" data-aos="fade-left">
                    <img className="bg-header w-10" src={BgHome} alt="gambar perahu" />
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderService
