import React from 'react'

const DetailService = (props) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-linear p-3 lg:p-32">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <img src={props.img} alt="Gambar" className="w-full" />
            </div>
            <div className="md:w-1/2 md:pl-8 item">
                <h1 className="text-2xl text-white text-center font-bold mb-4 sm:text-left sm:text-3xl lg:text-4xl">{props.title}</h1>
                <p className="text-xl text-center text-gray-200 mb-4 sm:text-left lg:text-2xl lg:mb-8 ">
                    {props.desk}
                </p>
                <p className="text-l text-justify text-gray-400 mb-4 lg:text-xl">
                    {props.capt}
                </p>
            </div>
        </div>
    )
}

export default DetailService
