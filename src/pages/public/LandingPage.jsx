import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import BookClubCard from "../../components/BookClubCard";
import TopReviewers from "../../components/TopReviewers";
import ReviewsCard from "../../components/ReviewsCard";
import Banner from "../../components/Banner";

export default function LandingPage() {
    return (
        <main className="bg-gray-100">
            {/* Hero Section */}
            <section className="h-screen bg-[url('/images/reading-books.png')] bg-cover bg-center bg-black/30 bg-blend-darken flex flex-col gap-6 justify-center items-center relative">
                <div className="felx justify-center items-center bg-black/30 backdrop-blur-md w-fit py-2 px-4 rounded-2xl text-white  uppercase">
                    <div className="w-3 h-3 bg-green-500 rounded-full inline-block mr-2"></div> 1,284 readers live now{" "}
                </div>
                <h2 className="text-7xl capitalize w-[450px] text-center text-white ">
                    Where stories <span className="text-blue-500 italic">come alive</span>{" "}
                </h2>
                <p className="text-white w-[500px] text-center capitalize text-lg">
                    join the world's most vibrant digital reading community. Discuss, review, and discover your next favorite journey.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <button className="p-3 capitalize bg-blue-500 text-white rounded-full cursor-pointer">Join the community</button>
                    <button className="p-3 capitalize bg-black/20 text-white rounded-full cursor-pointer backdrop-blur-lg">explore clubs</button>
                </div>
                <div className="bg-white absolute w-250 h-28 bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] shadow-2xl rounded-2xl flex justify-evenly items-center">
                    <div className="flex flex-col gap p-1 items-center">
                        <p className="text-gray-400 capitalize text-lg">total members</p>
                        <p className="text-blue-500 text-2xl">45,000 +</p>
                    </div>
                    <div className="flex flex-col gap p-1 items-center">
                        <p className="text-gray-400 capitalize text-lg">active clubs</p>
                        <p className="text-blue-500 text-2xl">1240</p>
                    </div>
                    <div className="flex flex-col gap p-1 items-center">
                        <p className="text-gray-400 capitalize text-lg">daily deviews</p>
                        <p className="text-blue-500 text-2xl">850+</p>
                    </div>
                    <div className="flex flex-col gap p-1 items-center">
                        <p className="text-gray-400 capitalize text-lg">meeting today</p>
                        <p className="text-blue-500 text-2xl">42</p>
                    </div>
                </div>
            </section>
            {/* Active Book Clubs */}
            <section className="min-h-screen flex flex-col  justify-center items-center px-40 py-20">
                <div className="flex gap-5 justify-between items-end w-full mb-4 mt-10">
                    <div className="">
                        <h3 className="text-3xl capitalize mb-3">active book clubs</h3>
                        <p className="text-gray-400">join a group of like-minded readers today</p>
                    </div>
                    <button className="flex gap-2 items-center text-blue-500 cursor-pointer">
                        view all clubs <FaArrowRight />
                    </button>
                </div>
                <div className="flex gap-8 ">
                    <BookClubCard clubImage={"/images/reading1.jpg"} clubName={"Sci-Fi Seeking "} clubTag={"Science Fiction"} meetingTime={"tommorow"} />
                    <BookClubCard clubImage={"/images/reading1.jpg"} clubName={"Sci-Fi Seeking "} clubTag={"Science Fiction"} meetingTime={"tommorow"} />
                    <BookClubCard clubImage={"/images/reading1.jpg"} clubName={"Sci-Fi Seeking "} clubTag={"Science Fiction"} meetingTime={"tommorow"} />
                </div>
            </section>
            {/* Top Reviewers of the Month Section  */}
            <section className="min-h-100 bg-sky-950 text-white flex flex-col justify-center items-center ">
                <div className="text-center mb-5 w-130">
                    <h2 className="text-4xl mb-2">Top Reviewers of the Month</h2>
                    <p className="text-gray-300">These community legends have shared the most insightful critiques this month. Follow them for great recommendations.</p>
                </div>
                <div className="flex gap-14 ">
                    <TopReviewers title={"Expert Reviewer"} userName={"BookWorm_Jane"} reviewerNum={24} />
                    <TopReviewers title={"Expert Reviewer"} userName={"BookWorm_Jane"} reviewerNum={24} />
                    <TopReviewers title={"Expert Reviewer"} userName={"BookWorm_Jane"} reviewerNum={24} />
                </div>
            </section>
            {/* Recent Member Reviews Section */}
            <section className="min-h-screen px-40 py-20 flex flex-col justify-center items-center mx-auto">
                <div className="flex justify-between items-center text-2xl w-full mb-12">
                    <h2 className="text-3xl ">Recent Member Reviews</h2>
                    <div className="flex gap-4">
                        <button className="cursor-pointer w-10 h-10 hover:bg-blue-500 transition flex justify-center items-center hover:text-white rounded-full">
                            <IoMdArrowRoundBack />
                        </button>
                        <button className="cursor-pointer w-10 h-10 hover:bg-blue-500 transition flex justify-center items-center hover:text-white rounded-full">
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap w-full mx-auto">
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard /> 
                    <ReviewsCard />
                </div>
            </section>
            {/* Banner Section */}
            <section className="px-40 py-20">
                <Banner />
            </section>
        </main>
    );
}
