import React from "react";
import { MdStar } from "react-icons/md";

export default function BookCard({ bookName, author, reviwes, bookImg }) {
    return (
        <div className="flex flex-col gap-1 p-2 aspect-2/3 group">
            <div className="rounded-lg w-full h-full overflow-hidden flex-1 group-hover:-translate-y-2 transition duration-300">
                <img src={bookImg} alt="circe" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-lg capitalize line-clamp-1">{bookName}</h2>
            <p className="text-gray-600 dark:text-gray-400 capitaliz line-clamp-1e">{author}</p>
            <div className="flex gap-3 items-center">
                <div className="flex gap-1 text-yellow-400">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <span className="text-gray-600 dark:text-gray-400">&#10090;{reviwes}&#10091;</span>
            </div>
        </div>
    );
}
