import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-secondary-color w-52 h-14 rounded-xl text-white font-bold hover:opacity-70'>{props.btn}</button>
    )
}

export default Button
