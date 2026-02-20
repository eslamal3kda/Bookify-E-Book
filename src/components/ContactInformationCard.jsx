import React from "react";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

export default function ContactInformationCard({ title, info }) {
    const icons = {
        "email us": <IoMailSharp />,
        "visit us": <IoLocationSharp />,
        "call us": <IoMdCall />,
    };
    return (
        <div className="flex items-center gap-4 mb-4 ">
            <div className=" bg-blue-500 text-gray-100 p-3 text-3xl rounded-lg ">{icons[title]}</div>
            <div className="">
                <h4 className="capitalize text-xl ">{title}</h4>
                <p className="text-gray-500">{info}</p>
            </div>
        </div>
    );
}
