import React from 'react'

const ServiceItem = (props) => {
    return (
        <div className='bg-primary-color w-72 h-64 p-8 text-center rounded-2xl'>
            <img className='mx-auto' src={props.img} alt="img" />
            <h1 className='text-xl font-bold text-white mt-8'>{props.title}</h1>
        </div>
    )
}

export default ServiceItem
