import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function PublicNavbar() {
    return (
        <header className="bg-white w-full h-20 relative top-0 flex items-center justify-center">
            <nav className="flex justify-between items-center  px-16  w-full fixed right-0 bg-white/70 h-20 z-20 backdrop-blur-lg ">
                <Link to={"/"} className="flex items-center gap-1.5 text-2xl font-luckiestguy">
                    <div className="bg-blue-600 p-1 rounded-full w-8 h-8 flex justify-center items-center">
                        <FaBookOpen className="text-white text-xl" />
                    </div>
                    <h2>Bookify</h2>
                </Link>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"}>Contact us</NavLink>
                    </li>
                    <li>
                        <NavLink to={"membership"}>Membership</NavLink>
                    </li>
                </ul>
                <button className="bg-blue-600 py-2 px-8 rounded-full text-white cursor-pointer">
                    Login
                </button>
            </nav>
        </header>
    );
}
