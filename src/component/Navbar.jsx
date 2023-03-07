import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [changeBg, setChangeBg] = useState(false);
    const changeBackground = () => {
        if (window.scrollY > 15) {
            setChangeBg(true)
        } else {
            setChangeBg(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={changeBg ? 'navbar actived' : 'navbar'}>
            <div className="w-full">
                <div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex cursor-pointer items-center justify-between py-3 md:py-5 md:block">
                            <Link to='/'><img className="w-14" src={Logo} alt="Logo" /></Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-black btn-actived rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-l font-semibold">
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link to="/team">Team</Link>
                                </li>
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link to="/service">Service</Link>
                                </li>
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link to="/support">Support</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
