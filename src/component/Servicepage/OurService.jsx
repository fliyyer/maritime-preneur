import React from 'react'
import Service1 from '../../assets/service1.png'
import Service2 from '../../assets/service2.png'
import Service3 from '../../assets/service3.png'
import Service4 from '../../assets/service4.png'

const OurService = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center bg-cover bg-center min-h-screen bg-dt p-1 sm:p-6">
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color">
                    <h2 className="text-center text-4xl lg:text-left font-bold sm:text-5xl mb-4">Digital Technology</h2>
                    <p className="text-center text-xl lg:text-left font-medium sm:text-2xl mb-4">We provide services to develop and manage</p>
                    <ul className="text-xl box-sw sm:text-2xl bg-white font-medium p-6 list-disc mb-8 border-solid border-4 rounded-3xl px-12 border-secondary-color">
                        <li>Mobile Apps</li>
                        <li>Website</li>
                        <li>Big Data System</li>
                        <li>Multimedia Content</li>
                        <li>Social Media</li>
                        <li>Digital Marketplace</li>
                        <li>E-Commerce</li>
                        <li>ROV Operation</li>
                        <li>Subsea Trenching</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <img src={Service1} alt="Gambar Konten" className="w-full h-auto rounded-lg mb-28 hidden lg:block " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center -mt-80 sm:-mt-96 lg:-mt-32 p-1 sm:p-6">
                <div className="w-full lg:w-1/2 p-8">
                    <img src={Service2} alt="Gambar Konten" className="w-full h-auto rounded-lg mb-28 hidden lg:block " />
                </div>
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color">
                    <h2 className="text-center text-4xl lg:text-left font-bold sm:text-5xl mb-4">Event Organizer</h2>
                    <p className="text-center text-xl lg:text-left font-medium sm:text-2xl mb-4">We provide services to organize</p>
                    <ul className="text-xl box-sw sm:text-2xl bg-white font-medium p-6 list-disc mb-8 border-solid border-4 rounded-3xl px-12 border-secondary-color">
                        <li>Meeting</li>
                        <li>Incentives Travel</li>
                        <li>Conference</li>
                        <li>Exhibition</li>
                        <li>Edutrip
                        </li>
                        <li>Festival</li>
                        <li>Competition
                        </li>
                        <li>Creative Event</li>
                        <li>Virtual Expo</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-1 sm:p-6 lg:-mt-12">
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color">
                    <h2 className="text-center text-4xl lg:text-left font-bold sm:text-5xl mb-4">Consulting</h2>
                    <p className="text-center text-xl lg:text-left font-medium sm:text-2xl mb-4">We provide consultancy in
                    </p>
                    <ul className="text-xl box-sw sm:text-2xl font-medium bg-white p-6 list-disc mb-8 border-solid border-4 rounded-3xl px-12 border-secondary-color">
                        <li className='my-4'>Blue Economy Company Indexing</li>
                        <li className='mb-4'>Industrial and Organizational Management</li>
                        <li className='mb-4'>Business Development</li>
                        <li className='mb-4'>Sustainable Tourism</li>
                        <li className='my-4'>Creative Economy</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <img src={Service3} alt="Gambar Konten" className="w-full h-auto rounded-lg mb-28 hidden lg:block " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center -mt-56 sm:-mt-64 lg:-mt-12 p-1 sm:p-6 bg-cover bg-center min-h-screen bg-et">
                <div className="w-full lg:w-1/2 p-8">
                    <img src={Service4} alt="Gambar Konten" className="w-full h-auto rounded-lg mb-28 hidden lg:block " />
                </div>
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color">
                    <h2 className="text-center text-4xl lg:text-left font-bold sm:text-5xl mb-4">Education & Training</h2>
                    <p className="text-center text-xl lg:text-left font-medium sm:text-2xl mb-4">We provide services for education & training</p>
                    <ul className="text-xl box-sw sm:text-2xl font-medium p-2 md:p-6 md:list-inside bg-white list-disc mb-8 border-solid border-4 rounded-3xl px-12 border-secondary-color">
                        <li className='my-3'>Youth Development</li>
                        <li className='mb-3'>Business Incubation</li>
                        <li className='mb-3'>Professional Certification</li>
                        <li className='mb-3'>Career Development</li>
                        <li className='my-3'>Maritime Crew Supply</li>
                        <li className='my-3'>Higher Education Program</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default OurService
