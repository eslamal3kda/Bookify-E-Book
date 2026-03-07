import React, { useState } from "react";
import Logo from "../../components/Logo";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="container mx-auto p-4 border-b border-b-gray-300 dark:border-b-gray-700 flex justify-between items-center relative">
            <Logo app />
            <nav className="hidden sm:flex gap-20 items-center ">
                <ul className="flex items-center gap-2">
                    <li>
                        <NavLink to={"/app"} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/app/browse"}>Browse</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/app/collection"}>Collection</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/app/favorites"}>Favorites</NavLink>
                    </li>
                </ul>

                <div className="flex items-center gap-3">
                    <ThemeToggle buttonClasses={"text-2xl border rounded-full p-1"} />
                    <div className="w-9 h-9 overflow-hidden cursor-pointer">
                        <img src="/images/avataaars.png" alt="avatar" className="w-full h-full" />
                    </div>
                </div>
            </nav>
            <FiMenu className="text-2xl cursor-pointer sm:hidden" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <nav className="absolute z-10 flex flex-col gap-20 items-center border dark:border-gray-700 border-gray-300 top-14 right-4 p-4 dark:bg-gray-800 w-40 bg-gray-200 sm:hidden">
                    <ul className="flex flex-col items-center gap-2 relative">
                        <IoClose className="absolute -top-2 -left-2 text-xl cursor-pointer" onClick={() => setIsOpen(false)} />
                        <li>
                            <NavLink className="px-8 py-2" to={"/app"} end onClick={() => setIsOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="px-8 py-2" to={"/app/browse"} onClick={() => setIsOpen(false)}>
                                Browse
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="px-8 py-2" to={"/app/collection"} onClick={() => setIsOpen(false)}>
                                Collection
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="px-8 py-2" to={"/app/favorites"} onClick={() => setIsOpen(false)}>
                                Favorites
                            </NavLink>
                        </li>
                    </ul>

                    <div className="flex items-center gap-3">
                        <ThemeToggle buttonClasses={"text-2xl border rounded-full p-1"} />
                        <div className="w-9 h-9 overflow-hidden cursor-pointer rounded-full" onClick={() => setIsOpen(false)}>
                            <img src="/images/avataaars.png" alt="avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}
