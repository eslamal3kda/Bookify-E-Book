import React from "react";
import { MdStar } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function BookDetails() {
    return (
        <main className="container mx-auto px-6 lg py-20 flex justify-center items-center">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl ">
                <div className="w-80 h-100  rounded-xl overflow-hidden shrink-0">
                    <img src="/images/The-Great-Gatsby.png" alt="The-Great-Gatsby" className="w-full h-full object-cover hover:scale-110 transition duration-300" />
                </div>
                <div className="flex flex-col gap-4 ">
                    <div className="border-b border-b-gray-300 dark:border-b-gray-700 flex flex-col gap-2">
                        <span className="text-blue-500 uppercase font-sans font-bold">masterpiece</span>
                        <h1 className="text-5xl lg:text-7xl capitalize">the great Gatsby</h1>
                        <div className="flex items-center gap-6 mb-4">
                            <div className="flex text-yellow-300 items-center text-xl">
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                            </div>
                            <p className="text-xl">4.8</p>
                            <span className="text-gray-700 dark:text-gray-300">&#10090; 12,450 Reviews &#10091;</span>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="uppercase mb-6 text-sm">description</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                            A true classic of twentieth-century literature, this edition has been updated by Fitzgerald scholar James L.W. West III to include the author’s final revisions and features
                            a note on the composition and text, a personal foreword by Fitzgerald’s granddaughter, Eleanor Lanahan—and a new introduction by Jesmyn Ward.
                        </p>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                            The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has
                            been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan is an exquisitely crafted tale of
                            America in the 1920s.
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-gray-700 w-fit rounded capitalize cursor-pointer flex items-center gap-4"><FaHeart className="text-blue-500" /> add to favorites</button>
                </div>
            </div>
        </main>
    );
}
