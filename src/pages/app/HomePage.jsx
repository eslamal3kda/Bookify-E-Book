import React, { useState } from "react";
import { MdAutoAwesome, MdOutlineMenuBook, MdOutlineRocketLaunch, MdPerson, MdTravelExplore } from "react-icons/md";
import { MdStar, MdStarBorder } from "react-icons/md";
import { TbDoorEnter, TbDoorExit } from "react-icons/tb";
import BookCard from "../../components/BookCard";
import BookCardSkeletonLoader from "../../components/BookCardSkeletonLoader";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const authors = [
        { id: 1, authorName: "All Authors", isSelected: true },
        { id: 2, authorName: "Andy Weir", isSelected: false },
        { id: 3, authorName: "Matt Haig", isSelected: false },
        { id: 4, authorName: "Taylor Jenkins Reid", isSelected: false },
        { id: 5, authorName: "Colleen Hoover", isSelected: false },
    ];
    const filters = {
        genres: [
            { id: 1, label: "Fiction", icon: <MdOutlineMenuBook />, isSelected: true },
            { id: 2, label: "Sci-Fi", icon: <MdOutlineRocketLaunch />, isSelected: false },
            { id: 3, label: "Mystery", icon: <MdTravelExplore />, isSelected: false },
            { id: 4, label: "Biography", icon: <MdPerson />, isSelected: false },
            { id: 5, label: "Fantasy", icon: <MdAutoAwesome />, isSelected: false },
        ],
        ratings: [
            { id: 1, value: 1, isSelected: false },
            { id: 2, value: 2, isSelected: false },
            { id: 3, value: 3, isSelected: false },
            { id: 4, value: 4, isSelected: false },
            { id: 5, value: 5, isSelected: false },
        ],
    };
    const [genres, setGenres] = useState(filters.genres);
    const handleGenresSelect = (id) => {
        const updatedGenres = genres.map((g) => ({
            ...g,
            isSelected: g.id === id,
        }));
        setGenres(updatedGenres);
    };

    const [ratings, setRatings] = useState(filters.ratings);

    const handleRatingSelect = (id) => {
        const updatedRatings = ratings.map((r) => (r.id === id ? { ...r, isSelected: !r.isSelected } : r));
        setRatings(updatedRatings);
    };

    return (
        <main className=" container mx-auto overflow-hidden flex gap-2">
            <aside
                className={`font-sans dark:text-gray-300 p-4 pr-14 flex flex-col gap-6 w-76 border-r border-r-gray-300 dark:border-r-gray-700 relative transition-all duration-400 z-10  ${isOpen ? "ml-0" : "-ml-64"}`}>
                <div className="flex flex-col gap-3">
                    <div
                        className="text-2xl absolute -right-4 top-4 bg-white dark:bg-gray-900 p-1 rounded border border-gray-300 dark:border-gray-700 cursor-pointer z-10"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <TbDoorEnter /> : <TbDoorExit />}
                    </div>

                    <h4 className="uppercase text-sm text-[12px] font-bold ">genres</h4>
                    <ul>
                        {genres.map((g) => (
                            <li
                                key={g.id}
                                className={`flex items-center gap-4 text-xl cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition p-2 ${g.isSelected ? "text-blue-500 bg-gray-200 dark:bg-gray-800" : ""}`}
                                onClick={() => handleGenresSelect(g.id)}>
                                {g.icon} <span>{g.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <h4 className="uppercase text-sm text-[12px] font-bold ">ratings</h4>
                <ul>
                    {ratings.map((r) => (
                        <li key={r.id} onClick={() => handleRatingSelect(r.id)} className={`flex items-center gap-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition p-2`}>
                            <input type="checkbox" checked={r.isSelected} readOnly />
                            {[...Array(5)].map((_, index) => (index < r.value ? <MdStar key={index} className="text-yellow-400" /> : <MdStarBorder key={index} className="text-yellow-400" />))}
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="w-full py-3 px-6">
                <section className="w-full min-h-120 p-4 sm:p-10 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center gap-6 flex-col md:flex-row">
                    <div className="w-60 h-90 rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img src="/images/midnight-library.png" alt="Midnight Library" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-sans text-[12px] bg-gray-300 dark:bg-gray-700 py-1 px-3 rounded-lg uppercase text-blue-500 font-bold w-fit">Editor's Pick</span>
                        <h2 className="text-6xl sm:text-7xl font-bold">The Midnight Library</h2>
                        <p className="text-base sm:text-lg max-w-160">
                            Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.
                        </p>
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button className="py-3 px-6 border border-gray-300 dark:border-gray-700 rounded-xl cursor-pointer capitalize transition bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600  ">
                                read now
                            </button>
                            <button className="py-3 px-6 border border-gray-300 dark:border-gray-700 rounded-xl cursor-pointer capitalize transition bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 hover:dark:bg-gray-600">
                                add to list{" "}
                            </button>
                        </div>
                    </div>
                </section>
                <section className="py-20 px-4">
                    <div className="flex gap-4 mb-6 flex-wrap">
                        {authors.map((a) => (
                            <span
                                key={a.id}
                                className={`py-2 px-4 sm:px-6 border border-gray-300 dark:border-gray-700 rounded-3xl cursor-pointer bg-gray-200 transition ${a.isSelected ? "dark:bg-blue-500 hover:dark:bg-blue-400" : "dark:bg-gray-800 hover:dark:bg-gray-700"} mb-4`}>
                                {a.authorName}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-2xl capitalize font-bold mb-6">recommended for you</h2>
                    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                        <BookCard bookImg={"/images/circe.png"} bookName={'Circe'} author={'Madeline Miller'} reviwes={'4.8k'} />
                        <BookCard bookImg={"/images/normal-people.png"} bookName={'normal people'} author={'Sally Rooney'} reviwes={'2.5k'} />
                        <BookCard bookImg={"/images/The-Seven-Husbands.png"} bookName={'The Seven Husbands of Evelyn Hugo'} author={'Taylor Jenkins Reid'} reviwes={'945'} />
                        <BookCard bookImg={"/images/project-hail-mary.png"} bookName={'Project Hail Mary'} author={'Andy Weir'} reviwes={'1.2k'} />
                        <BookCardSkeletonLoader />
                        <BookCardSkeletonLoader />
                    </div>
                </section>
            </section>
        </main>
    );
}
