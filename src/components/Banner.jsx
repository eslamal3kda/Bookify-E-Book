import React from "react";
import { ImQuestion } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Banner({ landing, about, membership }) {
    if (landing) {
        return (
            <div className="w-full p-10 h-70 bg-blue-500 rounded-4xl flex justify-between items-center gap-4">
                <div className="flex flex-col gap-4 w-120">
                    <h2 className="text-6xl text-white">Ready to share your voice?</h2>
                    <p className="text-xl text-gray-100">Join thousands of readers in the community. Start your own book club or write your first review today.</p>
                </div>
                <div className=" flex flex-col gap-4 ">
                    <button className="capitalize p-4 border w-60 text-xl rounded-2xl bg-white text-blue-500 shadow-xl cursor-pointer">join the discussion</button>
                    <button className="capitalize p-4 border w-60 text-xl rounded-2xl border-white/50 text-white cursor-pointer ">learn more</button>
                </div>
            </div>
        );
    }
    if (about) {
        return (
            <div className="w-full p-10 h-70 bg-blue-500 text-white rounded-4xl flex flex-col justify-center items-center gap-4">
                <h2 className="text-6xl">Start Your Digital Journey Today</h2>
                <p className="font-sans">Join thousands of readers around the world and gain instant access to our expansive collection.</p>
                <div className="flex gap-6">
                    <button className="py-4 px-8 rounded-xl cursor-pointer bg-white text-blue-500">Browse Collection</button>
                    <button className="py-4 px-8 rounded-xl cursor-pointer border">View Membership Plans</button>
                </div>
            </div>
        );
    }
    if (membership) {
        return (
            <div className="w-full p-10 h-70 bg-blue-500 text-white rounded-4xl flex flex-col justify-center items-center gap-4 ">
                <span className="text-5xl">
                    <ImQuestion />
                </span>
                <h2 className="text-6xl capitalize">Still have questions?</h2>
                <p className="font-sans">Our team is here to help you find the right path for your reading journey. We're available 24/7 via live chat.</p>
                <button className="py-1 px-8 rounded-xl cursor-pointer bg-white text-blue-500 flex items-center gap-4 group">
                    Chat with a Librarian <FaLongArrowAltRight className="group-hover:translate-x-1" />
                </button>
            </div>
        );
    }
    return <></>;
}
