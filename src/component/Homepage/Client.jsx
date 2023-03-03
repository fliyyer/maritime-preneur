import React from 'react'
import Log1 from '../../assets/log1.png'
import Log2 from '../../assets/log2.png'
import Log3 from '../../assets/log3.png'
import Log4 from '../../assets/log4.png'
import Log5 from '../../assets/log5.png'

const Client = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <h1 className="text-2xl font-bold text-primary-color mb-8">Our Clients</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-16 lg:px-44 mb-6 items-center">
                <img src={Log1} alt="STIE" className="w-24 mx-11 lg:w-28 " />
                <img src={Log2} alt="Museum Kebaharian Jakarta" className="ml-3 sm:mr-8 w-44 lg:w-64 " />
                <img src={Log5} alt="Ibec" className="w-40 ml-4 lg:w-96" />
                <img src={Log4} alt="maritim Muda" className="ml-12  sm:ml-36 lg:w-40 lg:ml-4" />
                <img src={Log3} alt="BPN" className="ml-8 sm:mx-36 lg:mx-0 w-32" />
            </div>
        </div>

    )
}

export default Client
