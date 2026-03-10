import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CollectionCard from "../../components/CollectionCard";

const collectionTags = [
    { id: 1, collection: "All Collections", selected: true },
    { id: 2, collection: "Fiction", selected: false },
    { id: 3, collection: "Academic", selected: false },
    { id: 4, collection: "Technology", selected: false },
    { id: 5, collection: "Philosophy", selected: false },
    { id: 6, collection: "Science", selected: false },
];

const collections = [
    { id: 1, name: "Classic Literature", tag: "Heritage", description: "Timeless works from history's most celebrated authors, preserving the foundation of human storytelling.", count: 1240, imgURL: "/images/library-1.png" },
    
    { id: 2, name: "Sci-Fi Essentials", tag: "Future", description: "Journey through space and time with our expansive collection of visionary science fiction narratives.", count: 850, imgURL: "/images/Future.png" },
    
    { id: 3, name: "Award Winners", tag: "Prestigious", description: "A curated selection of Pulitzer, Nobel, and Booker prize-winning literature from around the globe.", count: 420, imgURL: "/images/Prestigious.png" },
    
    { id: 4, name: "Digital Tech", tag: "Innovation", description: "Latest resources on software engineering, AI, and the evolution of digital infrastructure.", count: 2100, imgURL: "/images/Innovation.png" },
    
    { id: 5, name: "Philosophy", tag: "Wisdom", description: "Explore the depths of human thought through the ages with our extensive philosophical archives.", count: 680, imgURL: "/images/Philosophy.png" },
    
    {id:6,name:"Mystery & Thriller",tag:"Investigation",description:"Suspenseful narratives and complex investigations that keep you on the edge of your seat.",count:940,imgURL:"/images/community.png"},
]

export default function Collection() {
    const [myCollections, setMyCollections] = useState(collectionTags);
    const handleCollectionsTap = (id) => {
        const updatedCollection = myCollections.map((c) => (c.id === id ? { ...c, selected: true } : { ...c, selected: false }));
        setMyCollections(updatedCollection);
    };
    return (
        <main className=" container mx-auto lg:px-40 py-20">
            <h1 className="text-5xl font-bold mb-6">Library Collections</h1>
            <section className="flex flex-col gap-6 ">
                <div className="flex gap-4 justify-between flex-col sm:flex-row mb-6">
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Explore our curated shelves of digital literature, from timeless classics to modern scientific breakthroughs.</p>
                    <select name="" id="" className="bg-gray-300 dark:bg-gray-700 border-0 outline-0 p-2 rounded-lg capitalize focus:border-2 focus:border-blue-500 ">
                        <option value="recently added" className="">
                            recently added
                        </option>
                        <option value="most populer" className="">
                            most populer
                        </option>
                        <option value="alphabetical" className="">
                            alphabetical
                        </option>
                        <option value="book count" className="">
                            book count
                        </option>
                    </select>
                </div>
                <div className="flex gap-4 flex-wrap mb-6">
                    {myCollections.map((c) => (
                        <span
                            key={c.id}
                            className={`py-1 px-3 border rounded-full cursor-pointer ${c.selected ? "text-white bg-blue-500 border-0" : "text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700"}`}
                            onClick={() => handleCollectionsTap(c.id)}>
                            {c.collection}
                        </span>
                    ))}
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                    {collections.map((c)=><CollectionCard key={c.id} title={c.name} description={c.description} count={c.count} imgURL={c.imgURL} tag={c.tag} />)}
                </div>
                <button className="capitalize  py-2 px-6 border rounded cursor-pointer w-fit self-center border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition flex items-center gap-3">show more collections <IoIosArrowDown /></button>
            </section>
        </main>
    );
}
