import React from "react";

export default function Banner({ landing, about }) {
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
    return <></>;
}
