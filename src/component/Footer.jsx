import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <footer className='bg-primary-color text-white flex p-14'>
            <img src={Logo} alt="" />
            <div>
                <h1>Operation Office</h1>
                <p>Indonesia Blue Economy Center (IBEC)</p>
                <p>Kampus C STIE Indonesia Jakarta</p>
                <p>Jalan Pratekan No. 9A, Rawamangun, Jakarta Timur</p>
            </div>
            <div className='flex justify-between '>
                <div>
                    <h1>Support</h1>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ / Help</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <p>+62 21 489 1137 | +62 21 226 71273</p>
                    <p>maritimepreneur@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
