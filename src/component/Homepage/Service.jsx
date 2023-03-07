import React from 'react'
import ServiceItem from '../ServiceItem'
import DT from '../../assets/icon-dt.png'
import CS from '../../assets/icon-cs.png'
import EO from '../../assets/icon-eo.png'
import ET from '../../assets/icon-et.png'


const Service = () => {

    return (
        <div className='container mx-auto flex flex-col justify-between mb-16 pb-10' data-aos='fade-up' data-aos-duration='1500'>
            <div className='text-primary-color mx-auto'>
                <h1 className='text-center font-bold text-2xl sm:text-4xl my-11'>Services</h1>
                <div className='mx-auto flex flex-col md:flex-row md:flex-wrap gap-7 justify-center'>
                    <ServiceItem img={DT} title='Digital Technology' />
                    <div className='group bg-white w-72 h-64 p-8 text-center hover:border-4 border-cyan-900 rounded-2xl shadow-xl border-solid border-2' data-aos='fade-up' data-aos-duration='1500'>
                        <img className='mx-auto w-20 h-20 lg:w-auto lg:h-auto' src={EO} alt="img" />
                        <h1 className='text-xl font-bold text-primary-color mt-8'>Event Organizer</h1>
                    </div>
                    <ServiceItem img={CS} title='Consulting' />
                    <div className='group bg-white w-72 h-64 p-8 text-center hover:border-4 border-cyan-900 rounded-2xl shadow-xl border-solid border-2' data-aos='fade-up' data-aos-duration='1500'>
                        <img className='mx-auto w-20 h-20 lg:w-auto lg:h-auto' src={ET} alt="img" />
                        <h1 className='text-xl font-bold text-primary-color mt-8'>Education and Training</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
