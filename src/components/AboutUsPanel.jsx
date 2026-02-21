import React from "react";
import { GiBookmarklet } from "react-icons/gi";
import { LiaBookReaderSolid } from "react-icons/lia";
import { FaGlobeAfrica } from "react-icons/fa";

export default function AboutUsPanel({ title, details, statistic, about }) {
    const icons = {
        "total books": <GiBookmarklet />,
        "active readers": <LiaBookReaderSolid />,
        "global access": <FaGlobeAfrica />,
    };
    return (
        <div className="p-10 w-[calc((100%-2rem)/3)] h-65 bg-white rounded-2xl flex flex-col gap-2 justify-between">
            <div className="text-blue-500 text-4xl">{icons[title]}</div>
            <h3 className="text-xl capitalize text-black/60">{title}</h3>
            <p className="text-6xl">
                {about} {statistic && <span className="text-lg text-green-500">{statistic}</span>}
            </p>
            <p className="text-black/60 text-sm">{details}</p>
        </div>
    );
}
