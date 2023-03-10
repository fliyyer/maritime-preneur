import React from 'react'

const CardProfile = ({ name, position, image, description, profileName }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg h-80 rounded-extra border border-solid border-gray-400">
            <div className='flex lg:gap-2 items-center lg:px-8 py-3 lg:py-1'>
                <img className='mt-3 w-18 lg:w-32' src={image} alt={profileName} />
                <div className='flex-row'>
                    <p className='text-sm lg:text-2xl font-bold text-gray-700'>{name}</p>
                    <p className='font-semibold text-xs lg:text-xl text-blue-700 mt-1'>{position}</p>
                </div>
            </div>
            <div className='card-profile px-8 lg:px-16'>
                <p className='text-gray-800 text-md lg:text-2xl'>{description}</p>
            </div>
        </div>
    )
}

export default CardProfile
