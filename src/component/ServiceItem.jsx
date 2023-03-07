import React from 'react'

const ServiceItem = (props) => {
  return (
    <div className='group bg-primary-color md:w-72 h-64 p-8 text-center hover:border-4 border-sky-150 black rounded-2xl' data-aos='fade-up' data-aos-duration='1500'>
      <img className=' mx-auto ' src={props.img} alt='img' />
      <h1 className='text-xl font-bold text-white mt-8'>{props.title}</h1>
    </div>

  )
}

export default ServiceItem
