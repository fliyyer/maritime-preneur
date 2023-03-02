import React from 'react'

const CardTeam = (props) => {
    return (
        <div className="bg-primary-color w-96 mt-10 rounded-xl text-center overflow-hidden shadow-lg">
            <div className="p-4">
                <h2 className="text-white font-bold text-xl mb-2">{props.title}</h2>
                <p className="text-gray-300 text-base">{props.desc}</p>
            </div>
        </div>
    )
}

export default CardTeam
