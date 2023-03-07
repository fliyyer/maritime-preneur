import React from 'react'
import DetailService from '../DetailService'
import DT from '../../assets/DT detail.png'
import ET from '../../assets/EO detail.png'
import CS from '../../assets/CS detail.png'
import EAT from '../../assets/EAT detail.png'


const ServiceDetail = () => {
    return (
        <div>
            <DetailService
                img={DT}
                title='Digital Technology'
                desk='We Provide Services to Develop and Manage'
                capt='Our team of experts will work with you to develop a customized digital strategy that meets your unique needs and goals. From website design and development to search engine optimization and social media marketing, we have the expertise and experience to help you succeed. ' />
            <div className="flex flex-col md:flex-row items-center my-16 p-3 sm:gap-7 lg:p-32 ">
                <div className="md:w-1/2 md:pl-8 item">
                    <h1 className="text-xl text-primary-color  text-center font-bold mb-2 sm:text-left sm:text-3xl lg:text-4xl">Consulting</h1>
                    <p className="text-l text-center text-primary-color mb-2 sm:text-left lg:text-2xl lg:mb-8">
                        We Provide Services to Organize
                    </p>
                    <p className="text-l text-justify text-gray-900 mb-4 lg:text-xl">
                        Our consulting services cover a range of areas, including business strategy, organizational development, process improvement, and more. Whether you're looking to streamline your operations, expand your business, or improve your bottom line, we're here to help.
                    </p>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src={CS} alt="Gambar" className="w-full" />
                </div>
            </div>
            <DetailService
                img={ET}
                title='Event Organizer'
                desk='We Provide Services to Organize'
                capt='Looking for a reliable event organizer for your next conference? Our experienced team will work with you to develop a program that meets your goals and exceeds your attendees expectations. Contact us today to learn more!' />
            <div className="flex flex-col md:flex-row items-center my-16 p-3 sm:gap-7 lg:p-32">
                <div className="md:w-1/2 md:pl-8">
                    <h1 className="text-xl text-primary-color  text-center font-bold mb-2 sm:text-left sm:text-3xl lg:text-4xl">Education and Training</h1>
                    <p className="text-l text-center text-primary-color mb-2 sm:text-left lg:text-2xl lg:mb-8">
                        We Provide Services for Education and Training
                    </p>
                    <p className="text-l text-justify text-gray-900 mb-4 lg:text-xl">
                        Invest in your future with our comprehensive training programs. From leadership development to technical skills training, we offer courses that are tailored to meet your needs and help you advance in your career.
                    </p>
                </div>
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src={EAT} alt="Gambar" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
