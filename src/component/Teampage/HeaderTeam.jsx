import React from 'react'
import Team from '../../assets/team.png'

const HeaderTeam = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center bg-service">
            <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                    <p className="text-white font-bold text-3xl md:text-5xl mb-4">Discover our team of professionals</p>
                </div>
                <div className="md:w-1/2">
                    <img className="rounded-lg " src={Team} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderTeam
