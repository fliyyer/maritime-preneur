import React from 'react'
import Service1 from '../../assets/service1.png'
import Service2 from '../../assets/service2.png'
import Service3 from '../../assets/service3.png'
import Service4 from '../../assets/service4.png'

const OurService = () => {
    return (
        <div>
            <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-dt">
                <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 text-primary-color mb-28">
                        <p className="text-center sm:text-left font-bold text-5xl">Digital Technology</p>
                        <p className='text-center sm:text-left font-medium text-2xl my-5'>We provide services to develop and manage</p>
                        <ul className='text-xl box-sw sm:text-2xl list-disc font-bold p-6 h-fit border-solid border-4 rounded-3xl px-12 border-secondary-color'>
                            <li className='mb-3'>Mobile Apps</li>
                            <li className='mb-3'>Website</li>
                            <li className='mb-3'>Big Data System</li>
                            <li className='mb-3'>Multimedia Content</li>
                            <li className='mb-3'>Social Media
                            </li>
                            <li className='mb-3'>Digital Marketplace</li>
                            <li className='mb-3'>E-Commerce
                            </li>
                            <li className='mb-3'>ROV Operation</li>
                            <li className='mb-3'>Subsea Trenching</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img className="rounded-lg mt-44 hidden md:block " src={Service1} alt="gambar" />
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-center flex justify-center items-center">
                <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img className="rounded-lg mb-28 hidden md:block " src={Service2} alt="gambar" />
                    </div>
                    <div className="-mt-36 md:w-1/2 md:pr-8 text-primary-color sm:mt-10 mb-32 ">
                        <p className="text-center sm:text-left font-bold text-5xl">Event Organizer</p>
                        <p className='text-center sm:text-left font-medium text-2xl my-5'>We provide services to organize</p>
                        <ul className='text-xl box-sw sm:text-2xl font-bold p-6 list-disc border-solid border-4 rounded-3xl px-12 border-secondary-color'>

                            <li className='mb-3'>Meeting</li>
                            <li className='mb-3'>Incentives Travel</li>
                            <li className='mb-3'>Conference</li>
                            <li className='mb-3'>Exhibition</li>
                            <li className='mb-3'>Edutrip
                            </li>
                            <li className='mb-3'>Festival</li>

                            <li className='mb-3'>Competition
                            </li>
                            <li className='mb-3'>Creative Event</li>
                            <li className='mb-3'>Virtual Expo</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center team-hero">
                <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                    <div className="-mt-36 md:w-1/2 md:pr-8 text-primary-color sm:mt-10 ">
                        <p className="text-center sm:text-left font-bold text-5xl">Consulting</p>
                        <p className='text-center sm:text-left font-medium text-2xl my-5'>We provide consultancy in</p>
                        <ul className='text-xl box-sw sm:text-2xl font-bold p-6 list-disc border-solid border-4 rounded-3xl h-96 w-auto px-12 border-secondary-color'>
                            <li className='mb-3 sm:mt-10'>Blue Economy Company Indexing
                            </li>
                            <li className='mb-3'>Industrial and Organizational Management
                            </li>
                            <li className='mb-3'>Business Development</li>
                            <li className='mb-3'>Sustainable Tourism
                            </li>
                            <li className='mb-3'>Creative Economy
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img className="rounded-lg mt-60 hidden md:block" src={Service3} alt="gambar" />
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero bg-et">
                <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img className="rounded-lg mb-14 hidden md:block " src={Service4} alt="gambar" />
                    </div>
                    <div className="-mt-36 md:w-1/2 md:pr-8 text-primary-color sm:mt-20 ">
                        <p className="text-center sm:text-left font-bold text-5xl">Education and Training</p>
                        <p className='text-center sm:text-left font-medium text-2xl my-5'>We provide services for education and training</p>
                        <ul className='bg-white box-sw text-xl sm:text-2xl font-bold p-6 list-disc border-solid border-4 rounded-3xl px-12 border-secondary-color'>
                            <li className='mb-4'>Youth Development
                            </li>
                            <li className='mb-4'>Business Incubation</li>
                            <li className='mb-4'>Professional Certification</li>
                            <li className='mb-4'>Career Development
                            </li>
                            <li className='mb-4'>Maritime Crew Supply
                            </li>
                            <li className='mb-4'>Higher Education Program</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurService
