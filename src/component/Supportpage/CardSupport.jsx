import React from 'react'

const CardSupport = (props) => {
    return (
        <div className="bg-white rounded-lg item overflow-hidden shadow-lg flex flex-col">
            <div className="h-32 bg-secondary-color flex items-center justify-center">
                <h2 className="text-white font-semibold p-4 text-xl text-center">{props.title}</h2>
            </div>
            <div className="p-4 flex-1">
                <p className="text-gray-700 text-center text-base">{props.desk}</p>
            </div>
            <div className="mx-auto p-4 flex text-center">
                <a href={props.pdf} className="bg-primary-color text-white rounded-lg px-24 py-4 font-bold hover:bg-blue-600 transition-colors duration-200">Download</a>
            </div>
        </div>
    )
}

export default CardSupport
