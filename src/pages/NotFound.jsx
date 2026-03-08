import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()
    return <main className="p-6 flex flex-col gap-4 justify-center items-center h-screen">
        <div className="w-80 aspect-5/3 bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-center items-center text-6xl text-blue-500">
            <MdOutlineMenuBook  className="animate-bounce"/>
        </div>
        <h1 className="text-8xl text-blue-500">404</h1>
        <p className="text-4xl">Oops! It looks like this chapter is missing.</p>
        <p className="text-gray-600 dark:text-gray-400">The page you are looking for might have been moved, deleted, or never existed in our library archives.</p>
        <button className="text-xl bg-blue-500 text-white uppercase py-2 px-4 rounded-xl cursor-pointer flex items-center gap-4" onClick={()=>navigate(-1)}>go back <TiArrowBackOutline /></button>
    </main>;
}
