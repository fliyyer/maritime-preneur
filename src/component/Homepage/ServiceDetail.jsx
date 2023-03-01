import React from 'react'
import DetailService from '../DetailService'
import DT from '../../assets/DT detail.png'
import ET from '../../assets/EO detail.png'
import CS from '../../assets/CS detail.png'


const ServiceDetail = () => {
    return (
        <div>
            <DetailService
                img={DT}
                title='Digital Technology'
                desk='We Provide Services to Develop and Manage'
                capt='Our team of experts will work with you to develop a customized digital strategy that meets your unique needs and goals. From website design and development to search engine optimization and social media marketing, we`ve got the expertise and experience to help you succeed.' />
            <div className='bg-white p-20'>
                <div class="flex flex-col md:flex-row md:items-center gap-6 md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
                    <div class="md:w-1/2 lg:w-3/5 mt-8 md:mt-0 md:pl-8 lg:pl-16 text-primary-color">
                        <h2 class="text-4xl font-bold mb-4">Consulting</h2>
                        <p class="mb-4 font-normal text-2xl">We Provide Services to Organize</p>
                        <p className='mb-4 text-justify '>Our consulting services cover a range of areas, including business strategy, organizational development, process improvement, and more. Whether you're looking to streamline your operations, expand your business, or improve your bottom line, we're here to help.</p>
                        <button className='bg-secondary-color rounded-lg w-32 h-10 text-white font-medium  hover:opacity-75'>Read More</button>
                    </div>
                    <div class="md:w-1/2 lg:w-2/5">
                        <img src={CS} alt="" />
                    </div>
                </div>
            </div>
            <DetailService
                img={ET}
                title='Event Organizer'
                desk='We Provide Services to Organize'
                capt='Looking for a reliable event organizer for your next conference? Our experienced team will work with you to develop a program that meets your goals and exceeds your attendees expectations. Contact us today to learn more!' />
            <div className='bg-white p-20'>
                <div class="flex flex-col md:flex-row md:items-center gap-6 md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
                    <div class="md:w-1/2 lg:w-3/5 mt-8 md:mt-0 md:pl-8 lg:pl-16 text-primary-color">
                        <h2 class="text-4xl font-bold mb-4">Education and Training</h2>
                        <p class="mb-4 font-normal text-2xl">We Provide Services for Education and Training</p>
                        <p className='mb-4 text-justify '>Invest in your future with our comprehensive training programs. From leadership development to technical skills training, we offer courses that are tailored to meet your needs and help you advance in your career.</p>
                        <button className='bg-secondary-color rounded-lg w-32 h-10 text-white font-medium  hover:opacity-75'>Read More</button>
                    </div>
                    <div class="md:w-1/2 lg:w-2/5">
                        <img src={CS} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
