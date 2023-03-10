import React, { useEffect } from 'react'
import Service1 from '../../assets/service1.png'
import Service2 from '../../assets/service2.png'
import Service3 from '../../assets/service3.png'
import Service4 from '../../assets/service4.png'
import AOS from 'aos'

const OurService = () => {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500
        })
    }, [])

    return (
        <div>
            <div className="flex -mt-10 flex-wrap justify-center items-center bg-cover bg-center min-h-screen md:px-20 p-1 sm:p-6">
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold sm:text-4xl mb-4 lg:mt-20">Digital Technology</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-4">We Provide Services to Develop and Manage</p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl bg-white font-medium text-center lg:text-left  lg:list-disc mb-8 md:px-12 rounded-xl">
                        <li className='mb-2'>Mobile Apps</li>
                        <li className='mb-2'>Website</li>
                        <li className='mb-2'>Big Data System</li>
                        <li className='mb-2'>Multimedia Content</li>
                        <li className='mb-2'>Social Media</li>
                        <li className='mb-2'>Digital Marketplace</li>
                        <li className='mb-2'>E-Commerce</li>
                        <li className='mb-2'>ROV Operation</li>
                        <li className='mb-2'>Subsea Trenching</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service1} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center -mt-96 sm:-mt-72 lg:-mt-32 p-1 lg:py-24 sm:p-6 md:-mb-16 md:px-20">
                <div className="w-full lg:w-1/2 p-8" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service2} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
                <div className="flex mt-14 flex-col w-full lg:w-1/2 p-8 text-primary-color event-mt lg:mt-0" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold sm:text-4xl md:-mt-20 mb-4 lg:mt-20">Event Organizer</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-4">We Provide Services to Organize</p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl bg-white font-medium mb-8 md:px-12 text-center lg:text-left  lg:list-disc">
                        <li className='mb-2'>Meeting</li>
                        <li className='mb-2'>Incentives Travel</li>
                        <li className='mb-2'>Conference</li>
                        <li className='mb-2'>Exhibition</li>
                        <li className='mb-2'>Edutrip
                        </li>
                        <li className='mb-2'>Festival</li>
                        <li className='mb-2'>Competition
                        </li>
                        <li className='mb-2'>Creative Event</li>
                        <li className='mb-2'>Virtual Expo</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap justify-center p-1 sm:p-6 -mt-12 lg:-mt-20 consulting-mt md:px-20 items-center lg:py-24" >
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center text-2xl lg:text-left font-bold md:mt-10 sm:text-4xl mb-4 lg:mt-10">Consulting</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-2">We Provide Consultancy in
                    </p>
                    <hr />
                    <ul className="text-l mt-4 sm:text-2xl font-medium bg-white text-center lg:text-left  lg:list-disc mb-8 md:px-12">
                        <li className='mb-4'>Blue Economy Company Indexing</li>
                        <li className='mb-4'>Industrial and Organizational Management</li>
                        <li className='mb-4'>Business Development</li>
                        <li className='mb-4'>Sustainable Tourism</li>
                        <li className='my-4'>Creative Economy</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:mt-10" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service3} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center -mt-96 sm:-mt-64 md:-mt-80 lg:-mt-12 p-1 sm:p-6 bg-cover bg-center md:px-20 min-h-screen lg:py-24">
                <div className="w-full lg:w-1/2 p-8 lg:-mt-10" data-aos='zoom-in-up' data-aos-duration='1000'>
                    <img src={Service4} alt="Gambar Konten" className="w-full h-auto rounded-lg hidden lg:block " />
                </div>
                <div className="flex flex-col w-full lg:w-1/2 p-8 text-primary-color edu-mt -mt-96 lg:-mt-20" data-aos='fade-up' data-aos-duration='1500'>
                    <h2 className="text-center mt-96 text-2xl lg:text-left font-bold sm:text-4xl md:-mt-4 mb-4">Education & Training</h2>
                    <p className="text-center text-m lg:text-left font-medium sm:text-xl mb-2 ">We Provide Services for Education & Training</p>
                    <hr />
                    <ul className="text-l sm:text-2xl font-medium p-2 md:p-6 bg-white text-center lg:text-left  lg:list-disc md:px-12 ">
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
