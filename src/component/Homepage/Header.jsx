import React from 'react'
import BgHome from '../../assets/bg-perahu.png'

const HeaderService = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
            <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                    <p className="text-white font-bold text-4xl md:text-4xl lg:text-6xl mb-4">Maritimepreneur</p>
                    <p className="text-white text-center sm:text-left md:text-xl lg:text-3xl mb-4">
                        Building the Nations<br /> Sustaining Our Oceans
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img className="bg-header w-10 hidden sm:block" src={BgHome} alt="gambar perahu" />
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderService
