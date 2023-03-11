/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Logo from '../assets/Logo.png'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { BiPhoneCall } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer
            className="bg-secondary-color px-8 text-center text-white lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className='mb-4 flex justify-center md:justify-start' >
                        <img src={Logo} className='w-32 h-36' alt="" />
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold md:justify-start">
                            Operation Office
                        </h6>
                        <p className="mb-4 text-white font-regular leading-8 text-sm ">
                            Indonesia Blue Economy Center (IBEC)
                            Kampus C STIE Indonesia Jakarta
                            Jalan Pratekan No. 9A, Rawamangun
                        </p>
                        <p className="mb-4 -mt-4 text-white leading-8 text-sm ">
                            Jakarta Timur
                        </p>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold md:justify-start">
                            Support
                        </h6>
                        <p className="mb-4 text-white  text-sm">
                            FAQ
                        </p>
                        <p className="mb-4  text-sm">
                            Help
                        </p>
                    </div>
                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold md:justify-start">
                            Contact Us
                        </h6>
                        <a href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=maritimepreneur@gmail.com' target='_blank' className="mb-4 gap-4 flex items-center justify-center md:justify-start text-sm" rel="noreferrer">
                            <TfiEmail className='text-lg ' />
                            <p className='hover:text-sky-300'>maritimepreneur@gmail.com</p>
                        </a>
                        <p className="mb-4 gap-3 flex items-center justify-center md:justify-start text-sm">
                            <BiPhoneCall className='text-xl' />
                            <a href='https://wa.me/62214891137' target='_blank' className='hover:text-sky-300' rel="noreferrer">+62214891137</a>| <a href='https://wa.me/622122671273' target='_blank' className='hover:text-sky-300 ' rel="noreferrer">+622122671273</a>
                        </p>

                        <div className='mb-4 flex items-center justify-center md:justify-start text-white'>
                            <a href="https://www.instagram.com/maritimepreneur/" target='_blank' className="mr-4 text-xl mt-2 h-5 w-5 hover:text-sky-300" rel="noreferrer">
                                <BsInstagram />
                            </a>
                            <a href="https://www.linkedin.com/company/maritimepreneur/" target='_blank' className="mr-4 text-xl mt-2 h-5 w-5 hover:text-sky-300" rel="noreferrer">
                                <BsLinkedin />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-secondary-color-color border-t-2 p-6 text-center">
                <span className='font-medium text-xs'>© 2023 MARITIMEPRENEUR is a trademark of PT Mahakarya Maritim Indonesia. <br />Registered in the Directorate General of Intellectual
                    Property of the Republic of Indonesia.</span>
            </div>
        </footer >
    )
}

export default Footer

