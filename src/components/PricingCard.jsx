import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


export default function PricingCard({ planName, description, price, buttonCaption, benefits }) {
    return (
        <div className=" p-8 flex flex-col gap-6 border border-black/20 rounded-2xl transition duration-300 hover:border-blue-500 hover:-translate-y-4 group flex-1 relative">
            <div className="">
                <h2 className="text-2xl">{planName}</h2>
                <p>{description}</p>
            </div>
            <p>
                <span className="text-5xl">${price}</span> /month
            </p>
            <button className="p-3 bg-blue-400 rounded-xl capitalize cursor-pointer  text-white hover:bg-blue-500 transition duration-300">{buttonCaption}</button>
            <ul className="flex flex-col gap-3">
                {benefits.map((b) => (
                    <li className="flex items-center gap-3 text-lg"><IoCheckmarkCircleOutline className="text-blue-500"/> {b}</li>
                ))}
            </ul>
            {planName === "Premium"? <div className="bg-blue-500 text-white uppercase w-fit px-6 py-1 rounded-2xl absolute top-0 left-1/2 -translate-1/2">most popular</div>:""}
        </div>
    );
}
