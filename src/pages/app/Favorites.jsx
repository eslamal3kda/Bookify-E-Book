import React from "react";
import BookCard from "../../components/BookCard";

export default function Favorites() {
    return (
        <main className="container mx-auto">
            <section className="px-6 py-15">
                <h1 className="text-6xl capitalize mb-6">your favorites</h1>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-lg text-gray-600 dark:text-gray-400">6 books saved to your collection</p>
                  <button className="py-2 px-6 bg-blue-500 rounded-xl cursor-pointer">Browse More Books</button>
                </div>
                <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,300px))] justify-center">
                  <BookCard bookImg={"/images/Atomic-Habits.png"} bookName={'Atomic Habits'} author={'James Clear'} reviwes={'1.2k'} />
                  <BookCard bookImg={"/images/Hail-Mary.png"} bookName={'Project Hail Mary'} author={'Andy Weir'} reviwes={'1.2k'} />
                  <BookCard bookImg={"/images/Dune.png"} bookName={'Dune'} author={'Frank Herbert'} reviwes={'1.2k'} />
                  <BookCard bookImg={"/images/Th-Midnight-Library.png"} bookName={'The Midnight Library'} author={'Matt Haig'} reviwes={'1.2k'} />
                  <BookCard bookImg={"/images/Foundation.png"} bookName={'Foundation'} author={'Isaac Asimov'} reviwes={'1.2k'} />
                  <BookCard bookImg={"/images/Martian.png"} bookName={'The Martian'} author={'Andy Weir'} reviwes={'1.2k'} />
                </div>
            </section>
        </main>
    );
}
