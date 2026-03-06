import React, { useState } from "react";
import { MdAutoAwesome, MdOutlineMenuBook, MdOutlineRocketLaunch, MdPerson, MdTravelExplore } from "react-icons/md";
import { MdStar, MdStarBorder } from "react-icons/md";
import { TbDoorEnter, TbDoorExit } from "react-icons/tb";

export default function HomePage() {
  const [isOpen,setIsOpen] = useState(false)
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
            { id: 5, value: 5, isSelected: true },
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
        <main className="h-screen container mx-auto overflow-hidden">
            <aside className={`font-sans dark:text-gray-300 p-4 pr-14 flex flex-col gap-6 w-76 border-r border-r-gray-300 dark:border-r-gray-700 relative transition duration-300  ${isOpen?'translate-x-0':'-translate-x-64'}`}>
                <div className="flex flex-col gap-3">
                    <div className="text-2xl absolute -right-4 top-4 bg-white dark:bg-gray-900 p-1 rounded border border-gray-300 dark:border-gray-700 cursor-pointer " onClick={()=>setIsOpen(!isOpen)}>
                        {isOpen?<TbDoorEnter />:<TbDoorExit />}
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
            <section></section>
        </main>
    );
}
