import React from 'react'
import Log1 from '../../assets/log1.png'
import Log2 from '../../assets/log2.png'
import Log3 from '../../assets/log3.png'
import Log4 from '../../assets/log4.png'
import Log5 from '../../assets/log5.png'

const Client = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl text-primary-color'>Client and Partners</h1>
            <div className='h-40 shadow-lg rounded-3xl flex flex-col md:flex-row md:items-center md:justify-around max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 '>
                <img src={Log1} alt="kementerian PPN" />
                <img src={Log2} alt="Museum Kebaharian jakarta" />
                <img src={Log3} alt="STIE Indonesia" />
                <img src={Log4} alt="Maritim Muda" />
                <img src={Log5} alt="Ibec" />
            </div>
        </div>
    )
}

export default Client
