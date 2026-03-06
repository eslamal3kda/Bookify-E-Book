import React from "react";
import Logo from "../../components/Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaSquareInstagram } from "react-icons/fa6";

export default function AppFooter() {
    return (
        <footer className="container mx-auto p-4 flex flex-col gap-2 border-t border-t-gray-300 dark:border-t-gray-700">
            <div className="flex flex-col md:flex-row  gap-2 justify-between md:items-center p-1 border-b border-b-gray-300 dark:border-b-gray-700 py-10">
                <Logo app />
                <ul className="flex gap-4 text-center  text-sm font-sans">
                    <li className="dark:text-gray-400 hover:text-blue-500 transition cursor-pointer">Privacy Policy</li>
                    <li className="dark:text-gray-400 hover:text-blue-500 transition cursor-pointer">Terms of Service</li>
                    <li className="dark:text-gray-400 hover:text-blue-500 transition cursor-pointer">Contact Support</li>
                    <li className="dark:text-gray-400 hover:text-blue-500 transition cursor-pointer">Help Center</li>
                </ul>
                <div className="flex gap-2 dark:text-gray-300 text-lg  md:text-2xl">
                    <FaFacebookSquare className="cursor-pointer hover:text-blue-500 transition" />
                    <FaInstagram className="cursor-pointer hover:text-blue-500 transition" />
                </div>
            </div>
            <div className="py-6">
              <p className="font-sans text-sm dark:text-gray-300">© 2026 Bookify Library Association. All rights reserved.</p>
            </div>
        </footer>
    );
}
