import React from 'react'
import BgService from '../../assets/header-ser.png'

const HeaderService = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-service">
            <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                    <p className="text-white font-bold text-5xl mb-4">Experience the best service with us!</p>
                    <p className="text-white text-lg mb-8">
                        Let Us Help You Succeed with Our Range of Professional Services.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img className="rounded-lg " src={BgService} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderService
