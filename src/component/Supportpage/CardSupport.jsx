import React from 'react'

const CardSupport = (props) => {
    return (
        <div className="bg-white rounded-lg item overflow-hidden shadow-lg flex flex-col" data-aos='fade-up' data-aos-duration='1500' >
            <div className="h-32 bg-secondary-color flex items-center justify-center" >
                <h2 className="text-white font-semibold p-4 text-xl text-center">{props.title}</h2>
            </div>
            <div className="p-4 flex-1">
                <img className='w-36 mx-auto my-4' src={props.img} alt="" />
            </div>
            <div className="mx-auto p-4 flex text-center">
                <a href={props.pdf} target='_blank' className="bg-primary-color text-white rounded-lg px-24 py-4 mb-2
                 font-bold hover:bg-secondary-color transition-colors duration-200" rel="noreferrer">Download</a>
            </div>
        </div>
    )
}

export default CardSupport
