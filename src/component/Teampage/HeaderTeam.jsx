import React, { useEffect } from 'react'
import Team from '../../assets/team.png'
import AOS from 'aos'

const HeaderTeam = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center bg-service">
            <div className="container -mt-10 mb-20 mx-auto px-4 md:px-20 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8" data-aos='fade-right' data-aos-duration='1500'>
                    <p className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-team">Discover Our Team
                        <br /> of
                        Professionals</p>
                        <p className="text-white text-m sm:text-lg mb-8">We believe that a solid and collaborative teamwork is the key to success, and with hard work and dedication we will achieve our goals.</p>
                </div>
                <div className="md:w-1/2" data-aos='fade-left' data-aos-duration='1500'>
                    <img className="rounded-lg " src={Team} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderTeam
