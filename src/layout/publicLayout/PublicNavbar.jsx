import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function PublicNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="bg-white w-full h-20 relative top-0 flex items-center justify-center">
            <nav className="flex justify-between items-center  px-16  w-full fixed right-0 bg-white/70 h-20 z-20 backdrop-blur-lg ">
                <Logo />
                <ul className="hidden md:flex gap-4">
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
                {isOpen ? (
                    <div className="absolute flex flex-col justify-between  top-0 right-0 w-60  h-screen bg-gray-800  md:hidden py-16">
                        <ul className=" flex flex-col gap-1  relative ">
                            <li className="text-white/85 hover:text-white transition flex " onClick={() => setIsOpen(false)}>
                                <NavLink className="w-full p-2" to={"/"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="text-white/85 hover:text-white transition flex " onClick={() => setIsOpen(false)}>
                                <NavLink className="w-full p-2" to={"about"}>
                                    About
                                </NavLink>
                            </li>
                            <li className="text-white/85 hover:text-white transition flex " onClick={() => setIsOpen(false)}>
                                <NavLink className="w-full p-2" to={"contact"}>
                                    Contact us
                                </NavLink>
                            </li>
                            <li className="text-white/85 hover:text-white transition flex " onClick={() => setIsOpen(false)}>
                                <NavLink className="w-full p-2" to={"membership"}>
                                    Membership
                                </NavLink>
                            </li>
                            <IoMdClose className="absolute text-2xl -top-12 cursor-pointer text-white" onClick={() => setIsOpen(false)} />
                        </ul>
                        <button className="bg-blue-600 py-2 px-8 rounded-full text-white cursor-pointer md:hidden " onClick={() => navigate("/login")}>
                            Login
                        </button>
                    </div>
                ) : (
                    ""
                )}
                <button className="bg-blue-600 py-2 px-8 rounded-full text-white cursor-pointer hidden md:flex" onClick={() => navigate("/login")}>
                    Login
                </button>
                <FiMenu className="text-2xl cursor-pointer md:hidden" onClick={() => setIsOpen(true)} />
            </nav>
        </header>
    );
}
