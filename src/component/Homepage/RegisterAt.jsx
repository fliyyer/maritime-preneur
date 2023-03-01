import React from 'react'
import Logo1 from '../../assets/Logo1.png'
import Logo2 from '../../assets/Logo2.png'
import Logo3 from '../../assets/Logo3.png'

const RegisterAt = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl text-primary-color'>Register At</h1>
            <div className='h-40 shadow-lg rounded-3xl flex flex-col md:flex-row md:items-center md:justify-around max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 '>
                <img src={Logo1} alt="kementerian PPN" />
                <img src={Logo2} alt="Museum Kebaharian jakarta" />
                <img src={Logo3} alt="STIE Indonesia" />
            </div>
        </div>
    )
}

export default RegisterAt
