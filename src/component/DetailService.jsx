import React from 'react'

const DetailService = (props) => {
    return (
        <div className='bg-linear p-20'>
            <div class="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
                <div class="md:w-1/2 lg:w-2/5">
                    <img src={props.img} alt="" />
                </div>
                <div class="md:w-1/2 lg:w-3/5 mt-8 md:mt-0 md:pl-8 lg:pl-16 text-white">
                    <h2 class="text-4xl font-bold mb-4">{props.title}</h2>
                    <p class="mb-4 font-normal text-2xl">{props.desk}</p>
                    <p className='mb-4 text-justify '>{props.capt}</p>
                    <button className='bg-secondary-color rounded-lg w-32 h-10 text-white font-medium  hover:opacity-75'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default DetailService
