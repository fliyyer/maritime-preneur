import React, { useEffect } from 'react'
import Sup from '../../assets/header-sup.png'
import AOS from 'aos'

const HeaderSupport = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
            <div className="container mx-auto px-4 lg:px-8 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8" data-aos="fade-right">
                    <p className="text-white text-3xl font-bold sm:text-5xl mb-4">Certificate and Rules</p>
                    <p className="text-white text-m sm:text-lg mb-8">
                        The official rules and regulations governing our organization can be found here. We strongly advise all parties to review them carefully.
                    </p>
                </div>
                <div className="md:w-1/2" data-aos="fade-left">
                    <img className="rounded-lg " src={Sup} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderSupport
