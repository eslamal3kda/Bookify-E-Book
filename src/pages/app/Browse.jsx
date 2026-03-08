import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";
import { MdHistoryEdu, MdOutlineBusinessCenter, MdOutlineScience } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import BookCard from "../../components/BookCard";

export default function Browse() {
    const genres = [
        { id: 1, title: "Fiction", icon: <HiFire />, color: "#ea580c", bgColor: "#ffedd5" },
        { id: 2, title: "Business", icon: <MdOutlineBusinessCenter />, color: "#2563eb", bgColor: "#dbeafe" },
        { id: 3, title: "Science", icon: <MdOutlineScience />, color: "#9333ea", bgColor: "#f3e8ff" },
        { id: 4, title: "History", icon: <MdHistoryEdu />, color: "#16a34a", bgColor: "#dcfce7" },
        { id: 5, title: "Kids", icon: <TbMoodKid />, color: "#db2777", bgColor: "#fce7f3" },
    ];
  const books = [
      {id:1,bookName:"The Art of Focus",author:"Michael Henderson",reviews:"12213",bookImg:"/images/book1.png",imgAlt:"The Art of Focus" },
      {id:2,bookName:"History of the Future",author:"Elena Rodriguez",reviews:"2321",bookImg:"/images/book2.png",imgAlt:"History of the Future" },
      {id:3,bookName:"Digital Nomadism",author:"Chris Wright",reviews:"10693",bookImg:"/images/book3.png",imgAlt:"Digital Nomadism" },
      {id:4,bookName:"Silent Shadows",author:"A. S. Knight",reviews:"993",bookImg:"/images/book4.png",imgAlt:"Silent Shadows" },
      {id:5,bookName:"The Quiet Forest",author:"Julian Thorne",reviews:"7994",bookImg:"/images/book5.png",imgAlt:"The Quiet Forest" },
      {id:6,bookName:"Molecular World",author:"Sarah Jenkins",reviews:"10244",bookImg:"/images/book6.png",imgAlt:"Molecular World" },
    ]
    return (
        <main className="container mx-auto p-4 ">
            <section className="flex flex-col items-center gap-4">
                <h1 className="text-5xl capitalize text-center">Find Your Next Great Read</h1>
                <div className="w-80 md:w-160 h-12 dark:bg-gray-700 bg-gray-200  rounded-full overflow-hidden relative">
                    <IoSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-xl text-blue-500" />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="px-4 py-2 w-full h-full outline-0 bg-transparent pl-10 placeholder:text-gray-400"
                        placeholder="Search by title, author, or ISBN"
                    />
                    <button className="absolute bg-blue-500 top-1/2 right-2 -translate-y-1/2 px-4 py-1 rounded-4xl text-white cursor-pointer">search</button>
                </div>
            </section>
            <section className="py-15 lg:px-20">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl mb-6">Browse by Genre</h2>
                <button className="text-blue-500 capitalize cursor-pointer">view all</button>
              </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 ">
                    {genres.map((g) => (
                        <div key={g.id} style={{ background: g.bgColor, color: g.color }} className="aspect-5/3 p-4 flex flex-col gap-2 justify-center items-center rounded-2xl cursor-pointer hover:-translate-y-2 transition duration-300">
                            <span className="text-4xl">{g.icon}</span>
                            <p className="text-xl">{g.title}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-15 lg:px-20">
              <h2 className="text-2xl mb-6">Recently Added</h2>
              <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {books.map((b)=><BookCard key={b.id} alt={b.imgAlt} author={b.author} bookImg={b.bookImg} bookName={b.bookName} reviwes={b.reviews}/>)}
              </div>
            </section>
        </main>
    );
}
