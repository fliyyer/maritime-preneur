import React from 'react'

const CardProfile = ({ name, position, image, description, profileName }) => {
    return (
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-5 h-80 rounded-extra justify-center border border-solid border-gray-400">
            <div className='flex gap-2 items-center'>
                <img className='mt-3' src={image} alt={profileName} />
                <div className=''>
                    <p className='text-2xl font-bold text-gray-700'>{name}</p>
                    <p className='font-semibold text-blue-700 mt-1'>{position}</p>
                </div>
            </div>
            <div className='card-profile'>
                <p className='px-8 text-gray-800'>{description}</p>
            </div>
        </div>
    )
}

export default CardProfile
