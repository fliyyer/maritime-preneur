import React from 'react';

const Header = () => {
    return (
        <header className="bg-image py-4">
            <div className="container mx-auto flex justify-between items-center px-4 h-96">
                <div>
                    <h1 className="text-white text-4xl md:text-7xl sm:text-5xl font-bold mt-40">Maritimepreneur</h1>
                    <p className="text-white mt-8 font-normal text-3xl">
                        Building the Nations,<br /> Sustaining Our Oceans
                    </p>
                    <button className='bg-secondary-color w-52 h-14 rounded-xl mt-8 text-white font-bold hover:opacity-70'>Get Started</button>

                </div>
            </div>
        </header>
    )


};

export default Header;