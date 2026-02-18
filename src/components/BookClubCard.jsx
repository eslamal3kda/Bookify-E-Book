import React from "react";

export default function BookClubCard({ clubName, clubImage, clubTag, meetingTime }) {
    return (
        <div className=" w-[calc((100% - 4rem) / 3)] rounded-xl overflow-hidden flex flex-col gap-2 hover:shadow-2xl transition duration-300 bg-white group">
            <div className="relative">
                <img src={clubImage} alt="" />
                <span className=" absolute bg-amber-600 py-1 px-2 top-2 left-2 rounded-full text-xs uppercase text-white">{clubTag}</span>
            </div>
            <div className=" p-6  ">
                <div className="mb-4 pb-2 border-b border-black/30">
                    <h3 className="text-xl mb-2">{clubName}</h3>
                    <p className="text-gray-400 capitalize font-caveat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vel odio modi aspernatur, cumque earum!</p>
                </div>
                <div className="flex justify-between items-center mb-4 " >
                    <div className="flex  h-10">
                        <div className="w-10 h-10w-10 rounded-full border bg-teal-200 "></div>
                        <div className="w-10 h-10w-10 rounded-full border relative right-4 bg-blue-200"></div>
                        <div className="w-10 h-10w-10 rounded-full border relative right-8 bg-black/20 backdrop-blur-lg flex justify-center items-center  ">+189</div>
                    </div>
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <span>Next Meeting</span>
                        <span className="text-blue-400 capitalize">{meetingTime}</span>
                    </div>
                </div>
                <button className="w-full p-4 group-hover:bg-blue-400 border group-hover:text-white transition duration-75  rounded-full cursor-pointer ">join club</button>
            </div>
        </div>
    );
}
