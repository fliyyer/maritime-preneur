import React from 'react'
import Sup from '../../assets/header-sup.png'

const HeaderSupport = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-support">
            <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                    <p className="text-white font-bold text-5xl mb-4">Certificate and Rules</p>
                    <p className="text-white text-lg mb-8">
                        The official rules and regulations governing our organization can be found here. We strongly advise all parties to review them carefully.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img className="rounded-lg " src={Sup} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderSupport
