import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"} className="flex items-center gap-1.5 text-2xl font-luckiestguy">
            <div className="bg-blue-600 p-1 rounded-full w-8 h-8 flex justify-center items-center">
                <FaBookOpen className="text-white text-xl" />
            </div>
            <h2>Bookify</h2>
        </Link>
    );
}
