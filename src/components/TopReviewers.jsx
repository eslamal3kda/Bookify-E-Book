import React from "react";
import { MdOutlineVerified } from "react-icons/md";

export default function TopReviewers({ userName, title, reviewerNum }) {
    return (
        <div className="w-30 p-2 flex flex-col gap-2 group cursor-pointer">
            <div className="rounded-full  w-28 h-28 relative border-4 border-black ">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiXViAPZvtt8efN3T_wVPs5CxfT6zWHDNs61oq_OZfRCuw1a6CpD0Z22CxzLl1i7vn9-IFiE6M_GsX43cvHzmYZIT9Q3NDM1kuvzTNYhySyAGj6tw7FaqKq334wW437cMYpVBi1cVXU-wK54s1BHbt6Lua0aUcqn8eB-lgyEK8F_eBLJ2ZpEFoY3n6RwtpFUxqXVPSY1Z6-ksWGA8tpH0-KX38lvI5mduGpujKRBWyPyTIcOL9_oM1iJm_VAsK5f9_SD94xp4P4Cpc"
                    alt=""
                    className="rounded-full group-hover:ring-4 ring-blue-400 transition duration-500"
                />
                <div className="bg-blue-400  backdrop-blur-lg  w-10 h-10 absolute bottom-0 -right-1.5 flex justify-center items-center rounded-full border-3 border-black">
                    <MdOutlineVerified className="" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xl">@{userName}</p>
                <p className="text-gray-400">{title}</p>
                <p className="text-blue-400"> {reviewerNum} reviewer</p>
            </div>
        </div>
    );
}
