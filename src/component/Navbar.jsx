import { useState } from "react";
import Brand from "../assets/brand.png";
import Brand2 from "../assets/brand2.png";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isService = location.pathname === "/service";
    const isTeam = location.pathname === "/team";
    const isSupport = location.pathname === "/support";
    const [navbar, setNavbar] = useState(false);
    const [changeBg, setChangeBg] = useState(false);
    const changeBackground = () => {
        if (window.scrollY > 15) {
            setChangeBg(true);
        } else {
            setChangeBg(false);
        }
    };
    const Logo = changeBg ? (
        <img className="w-14" src={Brand} alt="Maritime Color" />
    ) : (
        <img className="w-14" src={Brand2} alt="Maritime White" />
    );

    window.addEventListener("scroll", changeBackground);

    return (
        <nav className={changeBg ? "navbar actived shadow-lg" : "navbar"}>
            <div className="w-full">
                <div className="justify-between px-6 mx-auto lg:max-w-7xl md:items-center md:flex md:px-20">
                    <div>
                        <div className="flex cursor-pointer items-center justify-between py-3 md:py-5 md:block">
                            <Link
                                to="/"
                                onClick={() => {
                                    if (!isHome) {
                                        window.scrollTo(0, 0);
                                    }
                                }}
                            >
                                {Logo}
                            </Link>
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
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            if (!isHome) {
                                                window.scrollTo(0, 0);
                                            }
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link
                                        to="/team"
                                        onClick={() => {
                                            if (!isTeam) {
                                                window.scrollTo(0, 0);
                                            }
                                        }}
                                    >
                                        Team
                                    </Link>
                                </li>
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link
                                        to="/service"
                                        onClick={() => {
                                            if (!isService) {
                                                window.scrollTo(0, 0);
                                            }
                                        }}
                                    >
                                        Service
                                    </Link>
                                </li>
                                <li className="text-secondary-color hover:opacity-80 cursor-pointer">
                                    <Link
                                        to="/support"
                                        onClick={() => {
                                            if (!isSupport) {
                                                window.scrollTo(0, 0);
                                            }
                                        }}
                                    >
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
